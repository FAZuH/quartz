---
publish: true
aliases:
  - Estimating Constant Mean
created: 2026-03-16T11:08:40.253+07:00
modified: 2026-03-16T11:08:40.253+07:00
published: 2026-03-16T11:08:40.253+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Procedure

For a stationary process $Z_t = \mu + X_t$ where $E[X_t] = 0$:

1.  Calculate the sample mean:
    $$\bar{Z} = \frac{1}{n} \sum_{t=1}^n Z_t$$
2.  Assess the precision of $\bar{Z}$ based on the autocovariance of $X_t$. If $X_t$ is white noise:
    $$\operatorname{Var}(\bar{Z}) = \frac{\gamma_0}{n}$$
3.  If $X_t$ is autocorrelated, the variance of the sample mean is adjusted by the sum of autocorrelations.
