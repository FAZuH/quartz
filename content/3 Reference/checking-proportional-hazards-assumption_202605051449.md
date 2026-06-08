---
publish: true
aliases:
  - Checking Proportional Hazards Assumption
created: 2026-05-05T14:49:26.199+07:00
modified: 2026-05-05T15:51:19.113+07:00
published: 2026-05-05T15:51:19.113+07:00
creation-time: 2026-05-05 14:49
status: in progress
tags:
parent:
  - "[[survival-model]]"
---

## Procedure

Step-by-step procedure to check whether the proportional hazards assumption holds for a covariate.

## The Log-Cumulative-Hazard Method

From the Cox PH model:

$S(t, \mathbf{x}) = S_0(t)^{e^{\boldsymbol{\beta}'\mathbf{x}}}$

Taking logarithms twice:

$\ln(-\ln S(t, \mathbf{x})) = \boldsymbol{\beta}'\mathbf{x} + \ln(-\ln S_0(t))$

For two groups A and B, the difference:

$\ln H(t, \mathbf{x}_B) - \ln H(t, \mathbf{x}_A) = \boldsymbol{\beta}'(\mathbf{x}_B - \mathbf{x}_A)$

is **constant over time**. This means the log-cumulative-hazard curves should be **parallel** if PH holds.

## Procedure

### 1. Estimate Survival by Group

```r
library(survival)

# Fit KM for each level of the covariate
fit1 <- survfit(Surv(time, status) ~ group)
```

### 2. Compute Log-Cumulative-Hazard

$H(t) = -\ln S(t)$

```r
# Extract and transform
logH <- function(fit) log(-log(summary(fit)$surv))
```

### 3. Plot Against Time

```r
plot(fit1, fun = "cloglog", col = "blue",
     xlab = "Time", ylab = "log(-log(S(t)))")
lines(fit2, fun = "cloglog", col = "red")
```

### 4. Check for Parallelism

- **Curves are parallel** → PH assumption holds. Can proceed with Cox PH model.
- **Curves intersect or diverge** → PH violated. Do not use standard Cox PH; consider stratified Cox or time-dependent covariates.

> [!TIP] Interpretation
> The `fun = "cloglog"` option in `plot.survfit` plots $\ln(-\ln S(t))$ directly. If the two curves maintain a roughly constant vertical distance, the hazards are proportional.

## R Example: Leukemia Data

```r
library(survival)

# Fit KM by treatment group (6-MP vs placebo)
fit <- survfit(Surv(time, status) ~ treat, data = leukemia)

# Log-cumulative-hazard plot
plot(fit, fun = "cloglog", col = c("blue", "red"),
     xlab = "Time (weeks)", ylab = "log(-log(S(t)))",
     main = "PH Assumption Check: Leukemia Data")
legend("bottomright", c("6-MP", "Placebo"),
       col = c("blue", "red"), lty = 1)
```

If the curves are parallel: proceed with Cox PH. The leukemia data shows approximately parallel curves — the PH assumption is reasonable for the treatment variable.

## Alternative Formal Tests

- **Schoenfeld residuals test**: `cox.zph(fit)` — tests correlation between scaled Schoenfeld residuals and time
- **Grambsch-Therneau test**: Global and per-covariate tests in `cox.zph` output

A significant p-value ($< 0.05$) in `cox.zph` suggests violation of PH for that covariate.

## Related

- [[cox-proportional-hazards-model_202605051448|Cox Proportional Hazards Model]]
- [[hazard-ratio_202605051449|Hazard Ratio]]
- [[def-kaplan-meier-estimator_202603281500|Kaplan-Meier Estimator]]
