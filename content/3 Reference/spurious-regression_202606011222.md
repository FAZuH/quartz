---
publish: true
aliases:
  - Spurious Regression
created: 2026-06-01T12:22:29.764+07:00
modified: 2026-06-01T12:22:29.764+07:00
published: 2026-06-01T12:22:29.764+07:00
creation-time: 2026-06-01 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

A regression between non-stationary time series that produces seemingly significant but substantively meaningless results due to shared trends rather than true relationships.

## Definition

Non-stationary [[time-series-data_202603161400|time series]] data can produce **spurious (lancung/palsu) regression** — a regression that appears statistically significant but has no meaningful substantive interpretation.

This occurs when:

- Both the response and explanatory variables are **non-stationary** (contain a [[stochastic-vs-deterministic-trend_202603161400|trend]])
- There is **no substantive relationship** between the variables

### Example

Suppose we regress milk consumption (which has been steadily increasing) on the number of motorcycles (also steadily increasing). Even though there is no real relationship between them, the regression may yield:

- High $R^2$ (coefficient of determination)
- Significant $t$-statistics

The high $R^2$ is driven by the **shared trend**, not by any causal relationship.

> [!WARNING] Detection
> If $R^2 > \text{DW}$ (Durbin-Watson statistic), the regression is likely spurious (Granger-Newbold rule of thumb).

### Avoiding Spurious Regression

- Test for [[augmented-dickey-fuller-test_202603300223|stationarity]] before modeling
- If variables are non-stationary, test for [[Cointegration]]
- If cointegrated, use an [[Error Correction Model (ECM)]]
- If not cointegrated, [[differencing-to-achieve-stationarity_202603161400|difference]] the variables before regression

## Related

- [[Cointegration]]
- [[stochastic-vs-deterministic-trend_202603161400|Stochastic vs Deterministic Trend]]
- [[augmented-dickey-fuller-test_202603300223|Augmented Dickey-Fuller Test]]
- [[Error Correction Model (ECM)]]
