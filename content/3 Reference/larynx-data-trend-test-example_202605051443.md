---
publish: true
aliases:
  - Larynx Data Trend Test Example
created: 2026-05-05T14:43:36.775+07:00
modified: 2026-05-05T14:43:58.672+07:00
published: 2026-05-05T14:43:58.672+07:00
cssclasses: ""
creation-time: 2026-05-05 14:43
status: in progress
tags:
parent:
  - "[[survival-model]]"
---


## Example

Worked example of trend test on larynx cancer data with 4 disease stages.

## Data

Larynx cancer patients, $n = 90$, grouped by disease stage (I, II, III, IV). Variable $T$ = time to death (months). Goal: determine if hazard of death increases with disease stage.

## Step 1: Descriptive Analysis

KM curves by stage show a clear ordering: Stage I (highest survival) → Stage IV (lowest survival). Boxplots of survival time show decreasing median survival with increasing stage.

## Step 2: K-Sample Test (Omnibus)

First, test if any difference exists:

```r
fit <- survdiff(Surv(time, status) ~ as.factor(stage), data = dat)
fit
```

If $H_0$ is rejected, proceed to trend test for the ordered alternative.

## Step 3: Trend Test with Scores

Assign scores $a_j = j$ for stages I–IV ($a = 1, 2, 3, 4$):

$$Z = \frac{\sum_{j=1}^4 a_j Z_j(\tau)}{\sqrt{\sum_{j=1}^4 \sum_{g=1}^4 a_j a_g \,\hat{\sigma}_{jg}}} \sim N(0,1)$$

**R Implementation** (using Cox model for trend):
```r
# Treat stage as numeric for trend
fit_trend <- coxph(Surv(time, status) ~ as.numeric(stage), data = dat)
summary(fit_trend)
```

## Step 4: Results Interpretation

**Coefficients** (Cox model with stage as factor, stage I as reference):

| Stage | Coefficient | $\exp(\hat{\beta})$ | Hazard Ratio |
|-------|------------|---------------------|--------------|
| I (ref) | 0 | 1.000 | — |
| II | 0.0648 | 1.067 | 6.7% higher than stage I |
| III | 0.6148 | 1.849 | 84.9% higher than stage I |
| IV | 1.7349 | 5.667 | 466.7% higher than stage I |

**Trend pattern**: $0 < 0.0648 < 0.6148 < 1.7349$ — confirming increasing hazard with stage.

**Likelihood ratio test**: p-value = 0.0009 → reject $H_0$, conclude a significant increasing trend.

## Step 5: Partial Testing

Identify which specific stages differ significantly:

| Comparison | Coefficient | p-value | Significant ($\alpha = 0.05$)? |
|------------|------------|---------|------|
| Stage II vs I | 0.0648 | 0.8876 | No |
| Stage III vs I | 0.6148 | 0.0949 | At $\alpha = 0.10$ |
| Stage IV vs I | 1.7349 | < 0.05 | Yes |

**Conclusion**: Hazard of death increases with larynx cancer stage. Stage IV patients have significantly higher hazard than stage I. The increase from stage II to III is borderline significant. Stage I and II are not significantly different.

> [!TIP] Interpretation
> The trend test is more powerful than the omnibus k-sample test when groups have a natural ordering. Use the omnibus test to establish that *some* difference exists, then the trend test to confirm the *direction* of the difference.

## Related

- [[3 Reference/trend-test-survival_202605051407\|Trend Test]]
- [[3 Reference/log-rank-test_202605051407\|Log-Rank Test]]
- [[3 Reference/k-sample-test-procedure-survival_202605051443\|K-Sample Test Procedure]]
