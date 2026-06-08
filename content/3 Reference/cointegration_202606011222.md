---
publish: true
aliases:
  - Cointegration
created: 2026-06-01T12:22:37.864+07:00
modified: 2026-06-01T12:22:37.864+07:00
published: 2026-06-01T12:22:37.864+07:00
creation-time: 2026-06-01 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

A property where a linear combination of non-stationary variables is stationary, indicating a long-run equilibrium relationship between them.

## Definition

When two (or more) time series variables each contain a [[stochastic-vs-deterministic-trend_202603161400|unit root]] (are non-stationary), a linear combination of them may still be **stationary**. When this occurs, the variables are said to be **cointegrated**.

Formally, if $Y_t$ and $X_t$ are both $I(1)$ (integrated of order 1), then there may exist a $\beta$ such that:

$$
e_t = Y_t - \beta_0 - \beta_1 X_t
$$

is $I(0)$ (stationary). The vector $(1, -\beta_1)$ is called the **cointegrating vector**.

### Interpretation

- Non-stationary data often show **disequilibrium** in the short run
- Cointegration implies a **long-run equilibrium** relationship exists
- Short-run deviations from equilibrium will be corrected over time

> [!TIP] Intuition
> Think of a drunk person walking a dog on a leash. Individually, both paths are random walks (non-stationary). But the distance between them (the leash length) is roughly constant (stationary). The person and dog are "cointegrated" — they share a long-run equilibrium relationship.

### Testing for Cointegration

Three common approaches:

1. [[Engle-Granger Cointegration Test]] — residual-based, two-step
2. [[Durbin-Watson Cointegration Test]] — uses DW statistic from long-run regression
3. [[Johansen Cointegration Test]] — MLE-based, multivariate

## Related

- [[Spurious Regression]]
- [[augmented-dickey-fuller-test_202603300223|Augmented Dickey-Fuller Test]]
- [[Error Correction Model (ECM)]]
- [[stochastic-vs-deterministic-trend_202603161400|Stochastic vs Deterministic Trend]]
