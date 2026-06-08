---
publish: true
aliases:
  - Least Squares for Quadratic Trend Estimation
created: 2026-04-09T23:07:39.443+07:00
modified: 2026-04-09T23:07:39.444+07:00
published: 2026-04-09T23:07:39.444+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

For a [[linear-and-quadratic-deterministic-trends_202603161400|quadratic trend]] model $Z_t = \beta_0 + \beta_1 t + \beta_2 t^2 + X_t$:

1. Minimize the sum of squared residuals:
   $Q(\beta_0, \beta_1, \beta_2) = \sum_{t=1}^n (Z_t - \beta_0 - \beta_1 t - \beta_2 t^2)^2$
2. Set partial derivatives with respect to $\beta_0, \beta_1, \beta_2$ to zero.
3. Solve the resulting system of linear equations (Normal Equations) to find $\hat{\beta}_0, \hat{\beta}_1, \hat{\beta}_2$.
