---
publish: true
aliases:
  - Trend Test Survival
created: 2026-05-05T14:07:47.252+07:00
modified: 2026-05-05T14:10:03.666+07:00
published: 2026-05-05T14:10:03.666+07:00
creation-time: 2026-05-05 14:07
status: in progress
tags:
parent:
  - "[[survival-model]]"
---

## Definition

Let:

- $K$ : number of ordered groups with a natural ordering (e.g., disease stage I, II, III, IV)
- $Z_j(\tau)$ : log-rank test statistic for group $j$, computed as in the [[log-rank-test_202605051407|k-sample log-rank test]]
- $\hat{\sigma}_{jg}$ : variance-covariance of $Z_j$ and $Z_g$

**Test Hypotheses:**
$H_0 : h_1(t) = h_2(t) = \ldots = h_K(t) \quad \forall t \leq \tau$

$H_1 : h_1(t) \leq h_2(t) \leq \ldots \leq h_K(t) \quad \forall t \leq \tau$

with at least one strict inequality. Equivalently:
$H_1 : S_1(t) \geq S_2(t) \geq \ldots \geq S_K(t) \quad \forall t \leq \tau$

**Test Statistic:**

Assign ordered scores $a_1 < a_2 < \ldots < a_K$ (commonly $a_j = j$). Then:
$Z = \frac{\sum_{j=1}^K a_j Z_j(\tau)}{\sqrt{\sum_{j=1}^K \sum_{g=1}^K a_j a_g \,\hat{\sigma}_{jg}}} \sim N(0,1)$

> [!TIP] Interpretation
> The trend test detects whether hazard rates follow a monotonic pattern across ordered groups. A significant positive $Z$ indicates that groups with higher scores (e.g., later disease stages) have higher hazard. Use this test when groups have a natural ordering.

## Related

- [[log-rank-test_202605051407|Log-Rank Test]]
- [[stratified-test-survival_202605051408|Stratified Test]]
