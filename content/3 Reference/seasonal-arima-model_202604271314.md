---
publish: true
aliases:
  - Seasonal ARIMA Model
created: 2026-04-27T13:14:15.842+07:00
modified: 2026-04-27T13:14:15.843+07:00
published: 2026-04-27T13:14:15.843+07:00
cssclasses: ""
creation-time: 2026-04-27 13:14
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Definition

A **Multiplicative Seasonal ARIMA Model**, denoted as $\text{ARIMA}(p,d,q) \times (P,D,Q)_s$, applies both non-seasonal differencing (order $d$) and seasonal differencing (order $D$) to achieve stationarity. 

If the differenced series:
$$
W_t = \nabla^d \nabla_s^D Y_t
$$
satisfies an $\text{ARMA}(p,q) \times (P,Q)_s$ model, then the original series $Y_t$ is called a Seasonal ARIMA model.

> [!TIP] Interpretation
> This is a comprehensive model handling non-stationarity in mean (both trend and seasonality) and modeling the remaining stationary component with AR and MA terms at both seasonal and non-seasonal lags.

## Specification, Fitting, and Checking
The procedures for specification, fitting, and diagnostic checking for seasonal models follow the same general techniques as non-seasonal models.