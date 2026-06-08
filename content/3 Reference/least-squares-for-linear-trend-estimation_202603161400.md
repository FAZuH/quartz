---
publish: true
aliases:
  - Least Squares for Linear Trend Estimation
created: 2026-04-09T23:07:39.442+07:00
modified: 2026-04-09T23:07:39.443+07:00
published: 2026-04-09T23:07:39.443+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

For a [[linear-and-quadratic-deterministic-trends_202603161400|linear trend]] model $Z_t = \beta_0 + \beta_1 t + X_t$:

1. Minimize the sum of squared residuals:
   $Q(\beta_0, \beta_1) = \sum_{t=1}^n (Z_t - \beta_0 - \beta_1 t)^2$
2. Set partial derivatives with respect to $\beta_0$ and $\beta_1$ to zero.
3. Solve for the estimates:
   $$
   \begin{aligned}
   \hat{\beta}_1 &= \frac{\sum_{t=1}^n (Z_t - \bar{Z})(t - \bar{t})}{\sum_{t=1}^n (t - \bar{t})^2} \\
   \hat{\beta}_0 &= \bar{Z} - \hat{\beta}_1 \bar{t}
   \end{aligned}
   $$
