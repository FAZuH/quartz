---
publish: true
aliases:
  - Stratified Test Survival
created: 2026-05-05T14:08:03.844+07:00
modified: 2026-05-19T12:05:21.902+07:00
published: 2026-05-19T12:05:21.902+07:00
creation-time: 2026-05-05 14:08
status: in progress
tags:
parent:
  - "[[survival-model]]"
---

Tests whether [[def-hazard-function_202603281500|hazard function]] of different groups are equal, controlling for confounding covariates by partitioning into homogeneous strata.

## Definition

Let:

- $M$ : number of strata defined by a set of covariates
- $K$ : number of groups being compared within each stratum
- $Z_{js}(\tau)$ : log-rank statistic for group $j$ in stratum $s$
- $\hat{\sigma}_{jgs}$ : variance-covariance in stratum $s$

### Test Hypotheses

$$
\begin{align}
H_0 & : h_{1s}(t) = h_{2s}(t) = \ldots = h_{Ks}(t) \quad \forall s = 1,\ldots,M,\; \forall t \leq \tau \\
H_1 & : \text{not all } h_{js}(t) \text{ are equal}
\end{align}
$$

### Procedure

For each stratum $s$, compute $Z_{js}(\tau)$ and $\hat{\Sigma}_s$ as in the [[log-rank-test_202605051407|k-sample log-rank test]].

### Global Test

Pool across strata:

$$
\begin{align}
Z_{j\cdot}(\tau)  & = \sum_{s=1}^M Z_{js}(\tau) \\
\quad \hat{\sigma}_{jg\cdot} & = \sum_{s=1}^M \hat{\sigma}_{jgs}
\end{align}
$$

$\chi^2 = (Z_{1\cdot}, \ldots, Z_{K-1\cdot})\,\hat{\Sigma}_{\cdot}^{-1}\,(Z_{1\cdot}, \ldots, Z_{K-1\cdot})^T \sim \chi^2_{K-1}$

For $K=2$ (two groups):
$Z = \frac{\sum_{s=1}^M Z_{1s}(\tau)}{\sqrt{\sum_{s=1}^M \hat{\sigma}_{11s}}} \sim N(0,1)$

> [!TIP] Interpretation
> The stratified test controls for confounding covariates by testing within homogeneous strata. For example, comparing treatments while controlling for disease stage: compute the log-rank statistic separately within each stage, then pool the results. This produces a treatment effect estimate adjusted for stage.

## Example: Controlling for Sex in Larynx Cancer

**Goal**: Compare survival across larynx cancer stages while **controlling for sex**.

```r
# Stratified log-rank: stage effect adjusted for sex
fit_strat <- survdiff(Surv(time, status) ~ as.factor(stage) + strata(sex), data = dat)
fit_strat
```

**Procedure**:

1. Partition data into strata (male, female)
2. Within each stratum, compute $Z_{js}$ and $\hat{\Sigma}_s$ as in the [[log-rank-test_202605051407|k-sample test]]
3. Pool across strata: $Z_{j\cdot} = \sum_s Z_{js}$, $\hat{\sigma}_{jg\cdot} = \sum_s \hat{\sigma}_{jgs}$
4. Global test: $\chi^2 \sim \chi^2_{K-1}$

**Interpretation**: A significant result means that stage differences in survival persist **after controlling for sex**. The stratified test answers: "Is the stage effect still there, even when accounting for sex differences?"

> [!TIP] Interpretation
> The stratified test controls for confounding by testing within homogeneous strata, then pooling results globally. It's a bridge between non-parametric methods (stratification) and regression (Cox PH).

## Related

- [[log-rank-test_202605051407|Log-Rank Test]]
- [[trend-test-survival_202605051407|Trend Test]]
