---
publish: true
aliases:
  - Updating ARIMA Forecasts
created: 2026-04-27T13:21:10.330+07:00
modified: 2026-04-27T13:34:31.103+07:00
published: 2026-04-27T13:34:31.103+07:00
creation-time: 2026-04-27 13:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

When a new observation $Y_{t+1}$ becomes available, the forecast can be updated using the following formula:
$\hat{Y}_{t+1}(l) = \hat{Y}_t(l+1) + \psi_l[Y_{t+1} - \hat{Y}_t(1)]$
