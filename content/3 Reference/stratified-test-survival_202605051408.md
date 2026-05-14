---
publish: true
aliases:
  - Stratified Test Survival
created: 2026-05-05T14:08:03.844+07:00
modified: 2026-05-05T14:10:13.884+07:00
published: 2026-05-05T14:10:13.884+07:00
cssclasses: ""
creation-time: 2026-05-05 14:08
status: in progress
tags:
parent:
  - "[[survival-model]]"
---


## Definition

Let:
- $M$ : number of strata defined by a set of covariates
- $K$ : number of groups being compared within each stratum
- $Z_{js}(\tau)$ : log-rank statistic for group $j$ in stratum $s$
- $\hat{\sigma}_{jgs}$ : variance-covariance in stratum $s$

**Test Hypotheses:**
$$H_0 : h_{1s}(t) = h_{2s}(t) = \ldots = h_{Ks}(t) \quad \forall s = 1,\ldots,M,\; \forall t \leq \tau$$

$$H_1 : \text{not all } h_{js}(t) \text{ are equal}$$

**Procedure:**

For each stratum $s$, compute $Z_{js}(\tau)$ and $\hat{\Sigma}_s$ as in the [[3 Reference/log-rank-test_202605051407\|k-sample log-rank test]].

**Global Test:**

Pool across strata:
$$Z_{j\cdot}(\tau) = \sum_{s=1}^M Z_{js}(\tau), \quad \hat{\sigma}_{jg\cdot} = \sum_{s=1}^M \hat{\sigma}_{jgs}$$

$$\chi^2 = (Z_{1\cdot}, \ldots, Z_{K-1\cdot})\,\hat{\Sigma}_{\cdot}^{-1}\,(Z_{1\cdot}, \ldots, Z_{K-1\cdot})^T \sim \chi^2_{K-1}$$

For $K=2$ (two groups):
$$Z = \frac{\sum_{s=1}^M Z_{1s}(\tau)}{\sqrt{\sum_{s=1}^M \hat{\sigma}_{11s}}} \sim N(0,1)$$

> [!TIP] Interpretation
> The stratified test controls for confounding covariates by testing within homogeneous strata. For example, comparing treatments while controlling for disease stage: compute the log-rank statistic separately within each stage, then pool the results. This produces a treatment effect estimate adjusted for stage.

## Related

- [[3 Reference/log-rank-test_202605051407\|Log-Rank Test]]
- [[3 Reference/trend-test-survival_202605051407\|Trend Test]]
