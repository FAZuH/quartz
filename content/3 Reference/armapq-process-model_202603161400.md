---
publish: true
aliases:
  - ARMA(p,q) Process Model
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-29T21:58:33.439+07:00
published: 2026-03-29T21:58:33.439+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A mixed process that combines [[arp-process-model_202603161400|Autoregressive (AR)]] and [[moving-average-process_202603161400|Moving Average (MA)]] components.
$$Z\_t = \phi\_1 Z\_{t-1} + \dots + \phi\_p Z\_{t-p} + a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q}$$
where ${a\_t}$ is [[white-noise_202603161400|white noise]]. It provides a parsimonious way to model complex time series.

> [!tip]
> $$ Z\_{t} = a\_{t} + \sum\_{i=1}^p \phi\_{i}Z\_{t-i} - \sum\_{i=1}^q\theta\_{i}a\_{t-1} $$
