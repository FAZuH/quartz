---
publish: true
aliases:
  - Forecasting Transformed Series
created: 2026-04-27T13:21:10.430+07:00
modified: 2026-04-27T13:34:30.684+07:00
published: 2026-04-27T13:34:30.684+07:00
creation-time: 2026-04-27 13:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

Forecasting involves special considerations when dealing with transformed series:

- **Differencing:** Forecasting nonstationary series or forecasting stationary differenced series and then "undoing" the difference yields the same forecasts.
- **Log Transformations:** For $Z_t = \ln(Y_t)$:
  - The naive forecast $\exp(\hat{Z}_t(l))$ minimizes the mean absolute error (this is optimal for the lognormal median).
  - The minimum mean square error forecast is:
    $\exp\left\{\hat{Z}_t(l) + \frac{1}{2}Var[e_t(l)]\right\}$
