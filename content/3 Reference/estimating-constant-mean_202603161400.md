---
publish: true
aliases:
  - Estimating Constant Mean
created: 2026-03-25T15:22:40.616+07:00
modified: 2026-03-25T15:22:40.616+07:00
published: 2026-03-25T15:22:40.616+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

For a stationary process $Z\_t = \mu + X\_t$ where $E\[X\_t] = 0$:

1. Calculate the sample mean:
   $$\bar{Z} = \frac{1}{n} \sum\_{t=1}^n Z\_t$$
2. Assess the precision of $\bar{Z}$ based on the autocovariance of $X\_t$. If $X\_t$ is white noise:
   $$\operatorname{Var}(\bar{Z}) = \frac{\gamma\_0}{n}$$
3. If $X\_t$ is autocorrelated, the variance of the sample mean is adjusted by the sum of autocorrelations.
