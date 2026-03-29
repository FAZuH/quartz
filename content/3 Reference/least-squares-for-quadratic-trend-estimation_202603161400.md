---
publish: true
aliases:
  - Least Squares for Quadratic Trend Estimation
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T21:08:28.460+07:00
published: 2026-03-29T21:08:28.460+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

For a [[linear-and-quadratic-deterministic-trends_202603161400|quadratic trend]] model $Z\_t = \beta\_0 + \beta\_1 t + \beta\_2 t^2 + X\_t$:

1. Minimize the sum of squared residuals:
   $$Q(\beta\_0, \beta\_1, \beta\_2) = \sum\_{t=1}^n (Z\_t - \beta\_0 - \beta\_1 t - \beta\_2 t^2)^2$$
2. Set partial derivatives with respect to $\beta\_0, \beta\_1, \beta\_2$ to zero.
3. Solve the resulting system of linear equations (Normal Equations) to find $\hat{\beta}\_0, \hat{\beta}\_1, \hat{\beta}\_2$.
