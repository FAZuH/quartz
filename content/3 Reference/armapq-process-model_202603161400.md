---
publish: true
aliases:
  - ARMA(p,q) Process Model
created: 2026-03-16T11:15:46.435+07:00
modified: 2026-03-16T11:15:46.435+07:00
published: 2026-03-16T11:15:46.435+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

A mixed process that combines Autoregressive (AR) and Moving Average (MA) components.
$$Z_t = \phi_1 Z_{t-1} + \dots + \phi_p Z_{t-p} + a_t - \theta_1 a_{t-1} - \dots - \theta_q a_{t-q}$$
where $\{a_t\}$ is white noise. It provides a parsimonious way to model complex time series.
