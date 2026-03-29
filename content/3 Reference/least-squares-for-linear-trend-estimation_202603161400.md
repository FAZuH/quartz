---
publish: true
aliases:
  - Least Squares for Linear Trend Estimation
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T21:08:20.998+07:00
published: 2026-03-29T21:08:20.998+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

For a [[linear-and-quadratic-deterministic-trends_202603161400|linear trend]] model $Z\_t = \beta\_0 + \beta\_1 t + X\_t$:

1. Minimize the sum of squared residuals:
   $$Q(\beta\_0, \beta\_1) = \sum\_{t=1}^n (Z\_t - \beta\_0 - \beta\_1 t)^2$$
2. Set partial derivatives with respect to $\beta\_0$ and $\beta\_1$ to zero.
3. Solve for the estimates:
   $$
   \begin{aligned}
   \hat{\beta}_1 &= \frac{\sum_{t=1}^n (Z\_t - \bar{Z})(t - \bar{t})}{\sum\_{t=1}^n (t - \bar{t})^2} \\
   \hat{\beta}\_0 &= \bar{Z} - \hat{\beta}\_1 \bar{t}
   \end{aligned}
   $$
