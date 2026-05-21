---
publish: true
aliases:
  - K-Sample Test Procedure Survival
created: 2026-05-05T14:43:10.010+07:00
modified: 2026-05-19T11:11:37.200+07:00
published: 2026-05-19T11:11:37.200+07:00
cssclasses: ""
creation-time: 2026-05-05 14:43
status: in progress
tags:
parent:
  - "[[survival-model]]"
---


## Procedure

Step-by-step procedure for comparing survival experience across $K$ independent groups.

### 1. Formulate Hypotheses

$$H_0 : h_1(t) = h_2(t) = \ldots = h_K(t) \quad \forall t \leq \tau$$

$$H_1 : \text{not all } h_j(t) \text{ are equal for some } t \leq \tau$$

### 2. Choose Weight Function

| Test | $W(t_i)$ | When to Use |
|------|----------|-------------|
| Log-Rank | $1$ | Proportional hazards assumed; balanced weighting |
| Gehan / Breslow | $Y_i$ | Early differences matter more |
| Tarone-Ware | $\sqrt{Y_i}$ | Compromise between log-rank and Gehan |

### 3. Compute Test Components

For each group $j = 1, \ldots, K$:

$$Z_j(\tau) = \sum_{i=1}^D W(t_i) \left[d_{ij} - Y_{ij}\frac{d_i}{Y_i}\right]$$

where:
- $t_i$ : ordered distinct event times (across all groups pooled)
- $d_{ij}$ : events in group $j$ at $t_i$
- $Y_{ij}$ : at risk in group $j$ just before $t_i$
- $d_i = \sum_j d_{ij}$ : total events at $t_i$
- $Y_i = \sum_j Y_{ij}$ : total at risk at $t_i$

Under $H_0$, each group's expected events: $E[d_{ij}] = Y_{ij} \cdot d_i / Y_i$

### 4. Compute Variance-Covariance Matrix

For $j = 1, \ldots, K$:
$$\hat{\sigma}_{jj} = \sum_{i=1}^D W(t_i)^2 \frac{Y_{ij}}{Y_i}\left(1 - \frac{Y_{ij}}{Y_i}\right)\left(\frac{Y_i - d_i}{Y_i - 1}\right)d_i$$

For $g \neq j$:
$$\hat{\sigma}_{jg} = -\sum_{i=1}^D W(t_i)^2 \frac{Y_{ij}Y_{ig}}{Y_i^2} \left(\frac{Y_i - d_i}{Y_i - 1}\right)d_i$$

### 5. Compute Test Statistic

$$\chi^2 = (Z_1, \ldots, Z_{K-1})\,\hat{\Sigma}^{-1}\,(Z_1, \ldots, Z_{K-1})^T$$

Note: Only $K-1$ components are needed because $\sum_{j=1}^K Z_j = 0$.

For $K=2$ (two-sample case):
$$Z = \frac{\sum_{i=1}^D W(t_i)\left[d_{i1} - Y_{i1}\frac{d_i}{Y_i}\right]}{\sqrt{\sum_{i=1}^D W(t_i)^2 \frac{Y_{i1}}{Y_i}\left(1 - \frac{Y_{i1}}{Y_i}\right)\left(\frac{Y_i - d_i}{Y_i - 1}\right)d_i}} \sim N(0,1)$$

### 6. Decision Rule

| Case | Statistic | Distribution | Reject $H_0$ if |
|------|-----------|-------------|------------------|
| $K > 2$ | $\chi^2$ | $\chi^2_{K-1}$ | $\chi^2 > \chi^2_{K-1,\alpha}$ |
| $K = 2$ (two-sided) | $Z$ | $N(0,1)$ | $\|Z\| > z_{\alpha/2}$ |
| $K = 2$ (one-sided) | $Z$ | $N(0,1)$ | $Z > z_{\alpha}$ or $Z < -z_{\alpha}$ |

### 7. Interpret Results

The interpretation depends on the nature of the event $T$:

| Event Type | "Better" means | Survival Curve | Hazard |
|------------|----------------|----------------|--------|
| **Time-to-relapse** (death, recurrence) | Longer time | Higher $S(t)$ | Lower $h(t)$ |
| **Time-to-recovery** (healing, remission) | Shorter time | Lower $S(t)$ | Higher $h(t)$ |

> [!TIP] Interpretation
> For time-to-relapse: the group with the higher survival curve has better prognosis. For time-to-recovery: the group with the lower survival curve recovers faster. Always check which direction is "better" before interpreting test results.

## R Implementation

```r
library(survival)

# K-sample log-rank test
fit <- survdiff(Surv(time, status) ~ group)
fit
# Output: N, Observed, Expected, (O-E)^2/E, (O-E)^2/V, Chisq, df, p-value
```

## Example: Cancer Stages (4 Groups)

**Case**: Larynx cancer patients grouped by disease stage (I, II, III, IV). Question: Does survival differ across stages?

```r
fit <- survdiff(Surv(time, status) ~ as.factor(stage), data = dat)
fit  # χ² with 3 df
```

**Interpretation flow**:

1. **Omnibus test**: `survdiff` gives overall $\chi^2$ with $df = K-1 = 3$. If significant → at least two stages differ.
2. **Direction check**: KM curves plotted by stage show Stage I (highest) → Stage IV (lowest), suggesting monotonic ordering.
3. **Follow-up**: If ordering exists, proceed to [[3 Reference/trend-test-survival_202605051407\|Trend Test]] to test whether hazard increases monotonically with stage.
4. **Partial comparisons**: Test specific pairs (e.g., Stage II vs I) to identify which stages actually differ.

> [!TIP] Interpretation
> The omnibus k-sample test tells **whether** groups differ. The trend test tells **in what direction**. Always do the omnibus test first, then follow up with a trend test if groups have a natural ordering.

## Related

- [[3 Reference/log-rank-test_202605051407\|Log-Rank Test]]
- [[3 Reference/trend-test-survival_202605051407\|Trend Test]]
- [[3 Reference/stratified-test-survival_202605051408\|Stratified Test]]
- [[3 Reference/hypothesis-testing-survival-cheatsheet_202605051408\|Hypothesis Testing Cheatsheet]]
