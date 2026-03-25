---
publish: true
aliases:
  - ARMA(p,q) Process Model
created: 2026-03-25T15:22:40.619+07:00
modified: 2026-03-25T15:22:40.619+07:00
published: 2026-03-25T15:22:40.619+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A mixed process that combines Autoregressive (AR) and Moving Average (MA) components.
$$Z\_t = \phi\_1 Z\_{t-1} + \dots + \phi\_p Z\_{t-p} + a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q}$$
where ${a\_t}$ is white noise. It provides a parsimonious way to model complex time series.
