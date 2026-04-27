---
publish: true
aliases:
  - ARIMA Forecasting
created: 2026-04-27T13:21:06.951+07:00
modified: 2026-04-27T13:34:31.103+07:00
published: 2026-04-27T13:34:31.103+07:00
cssclasses: ""
creation-time: 2026-04-27 13:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Procedure

ARIMA forecasting models depend on the parameters and lead times:

- **AR(1):** $\hat{Y}_t(l) = \mu + \phi^l(Y_t - \mu)$
- **MA(1):** $Y_t = \mu + e_t - \theta e_{t-1}$ gives $\hat{Y}_t(1) = \mu - \theta e_t$
- **Random Walk with Drift:** $Y_t = Y_{t-1} + \theta_0 + e_t$ gives $\hat{Y}_t(1) = Y_t + \theta_0$
- **ARMA(p,q):** Forecasts for long lead times depend on autoregressive parameters and the mean.
- **Nonstationary Models:** The error variance grows without bound as the lead time $l$ increases.