---
publish: true
aliases:
  - Cox PH Cheatsheet
created: 2026-05-05T15:50:33.214+07:00
modified: 2026-05-05T15:50:33.214+07:00
published: 2026-05-05T15:50:33.214+07:00
cssclasses: ""
creation-time: 2026-05-05 15:50
status: in progress
tags:
parent:
  - "[[survival-model]]"
---



## Model Formula

$$h(t, \mathbf{x}) = h_0(t) e^{\beta_1 x_1 + \cdots + \beta_P x_P}$$

$$\log h(t, \mathbf{x}) = \log h_0(t) + \beta_1 x_1 + \cdots + \beta_P x_P$$

| Component | Type | Description |
|-----------|------|-------------|
| $h_0(t)$ | Non-parametric | Baseline hazard (distribution ignored) |
| $e^{\boldsymbol{\beta}'\mathbf{x}}$ | Parametric | Covariate contribution, parameters estimated |

## Hazard Ratio

For subjects A and B:

$$HR = \frac{h(t, \mathbf{x}_B)}{h(t, \mathbf{x}_A)} = e^{\boldsymbol{\beta}'(\mathbf{x}_B - \mathbf{x}_A)}$$

### Interpretation

| $\beta_j$ | $HR = e^{\beta_j}$ | Meaning |
|-----------|-------------------|---------|
| $> 0$ | $> 1$ | Higher risk |
| $= 0$ | $= 1$ | No effect |
| $< 0$ | $< 1$ | Protective |

### By Covariate Type

| Type | $\Delta$ change in $x_j$ | HR |
|------|-------------------------|-----|
| Numeric | +1 unit | $e^{\beta_j}$ |
| Binary (1 vs 0) | Condition present | $e^{\beta_j}$ |
| Numeric | +$\Delta$ units | $e^{\beta_j \Delta}$ |

## Dummy Variable Construction

For categorical $X$ with $L$ levels, create $L-1$ dummies, one level as reference:

| Stage | Model | Hazard vs Reference |
|-------|-------|---------------------|
| Ref | $h_0(t)$ | $1$ |
| Level $k$ | $h_0(t) e^{\beta_k}$ | $e^{\beta_k}$ |

## PH Assumption Check

**Log-cumulative-hazard plot**: Plot $\ln(-\ln \hat{S}(t))$ by group. Parallel curves → PH holds.

```r
fit <- survfit(Surv(time, status) ~ group)
plot(fit, fun = "cloglog", col = c("blue", "red"))
```

**Formal test**: `cox.zph(fit)` — significant p-value → PH violated.

## Partial Likelihood

### No Ties

$$L_1(\boldsymbol{\beta}) = \prod_{j=1}^D \frac{e^{\boldsymbol{\beta}'\mathbf{x}_{(j)}}}{\sum_{l \in R_j} e^{\boldsymbol{\beta}'\mathbf{x}_l}}$$

- $D$ : number of distinct event times
- $R_j$ : risk set at $t_j$
- $\mathbf{x}_{(j)}$ : covariate of subject with event at $t_j$

### With Ties ($d_i$ events at $t_i$)

| Method | Formula |
|--------|---------|
| **Breslow** | $\displaystyle \prod_{i=1}^D \frac{\exp(\boldsymbol{\beta}'\mathbf{Z}_i)}{[\sum_{l \in R_i} \exp(\boldsymbol{\beta}'\mathbf{x}_l)]^{d_i}}$ |
| **Efron** | $\displaystyle \prod_{i=1}^D \frac{\exp(\boldsymbol{\beta}'\mathbf{Z}_i)}{\prod_{j=1}^{d_i} [\sum_{l \in R_i} \exp(\boldsymbol{\beta}'\mathbf{x}_l) - \frac{j-1}{d_i}\sum_{k \in \mathcal{D}_i} \exp(\boldsymbol{\beta}'\mathbf{x}_k)]}$ |
| **Discrete** | $\displaystyle \prod_{i=1}^D \frac{\exp(\boldsymbol{\beta}'\mathbf{Z}_i)}{\sum_{q \in Q_i} \exp(\boldsymbol{\beta}'\mathbf{Z}_q^*)}$ |

where $\mathbf{Z}_i = \sum_{k \in \mathcal{D}_i} \mathbf{x}_k$

| Method | Accuracy | Speed |
|--------|----------|-------|
| Breslow | Good for few ties | Fast |
| Efron | Better | Moderate (R default) |
| Discrete | Exact | Slow |

## Model Construction

### Numeric Only
$$h(t, \mathbf{x}) = h_0(t) e^{\beta_1 x_1 + \cdots + \beta_P x_P}$$

### Categorical (Dummy) Only
$$h(t, \mathbf{x}) = h_0(t) e^{\beta_1 D_1 + \cdots + \beta_{L-1} D_{L-1}}$$

### Mixed (Numeric + Categorical)
$$h(t, \mathbf{x}) = h_0(t) e^{\beta_1 D_1 + \beta_2 D_2 + \beta_3 x_1 + \beta_4 x_2}$$

### With Interactions
$$h(t, \mathbf{x}) = h_0(t) e^{\beta_1 x_1 + \beta_2 x_2 + \beta_3 x_1 x_2}$$

For categorical × numeric: each dummy multiplied by numeric variable.

## R Quick Reference

```r
library(survival)

# Fit Cox PH model
fit <- coxph(Surv(time, status) ~ age + sex + stage, data = dat)

# Results
summary(fit)          # coefficients, HR, CI, p-values
exp(coef(fit))        # hazard ratios
exp(confint(fit))     # CI for HR

# PH assumption test
cox.zph(fit)          # Schoenfeld residuals test

# Prediction (baseline survival)
base_surv <- survfit(fit)
plot(base_surv)
```

## Related

- [[3 Reference/cox-proportional-hazards-model_202605051448\|Cox PH Model]]
- [[3 Reference/hazard-ratio_202605051449\|Hazard Ratio]]
- [[3 Reference/checking-proportional-hazards-assumption_202605051449\|Checking PH Assumption]]
- [[3 Reference/partial-likelihood-cox-ph_202605051449\|Partial Likelihood]]
- [[3 Reference/likelihood-with-ties-cox-ph_202605051450\|Likelihood with Ties]]
