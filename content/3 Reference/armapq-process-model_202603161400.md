---
publish: true
aliases:
  - ARMA(p,q) Process Model
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-31T19:36:15.704+07:00
published: 2026-03-31T19:36:15.704+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

A mixed process that combines [[3 Reference/arp-process-model_202603161400\|Autoregressive (AR)]] and [[3 Reference/moving-average-process_202603161400\|Moving Average (MA)]] components.
$$Z_t = \phi_1 Z_{t-1} + \dots + \phi_p Z_{t-p} + a_t - \theta_1 a_{t-1} - \dots - \theta_q a_{t-q}$$
where $\{a_t\}$ is [[3 Reference/white-noise_202603161400\|white noise]]. It provides a parsimonious way to model complex time series.

> [!tip]
> $$ Z_{t} = a_{t} + \sum_{i=1}^p \phi_{i}Z_{t-i} - \sum_{i=1}^q\theta_{i}a_{t-1} $$

