---
publish: true
aliases:
  - ARMA(p,q) Process Model
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-30T12:27:05.709+07:00
published: 2026-03-30T12:27:05.709+07:00
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

## Properties

| Property        | Expression                                                                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autocovariance  | <br>$$ \gamma\_{k} = \begin{cases}  \dfrac{1-2\theta \phi+\theta^{2}}{1-\phi^{2}}\sigma^{2}_{e}, & k=0  \ \phi \gamma_{0} - \theta \sigma^{2}_{e}, & k=1 \ \phi \gamma_{k-1}, & k\geq 2 \end{cases} $$<br> |
| Autocorrelation | $$\rho\_k = \frac{(1 - \phi \theta)(\phi - \theta)}{1 - 2 \theta \phi + \theta^2} \phi^{k-1}, \quad k \geq 1$$                                                                                               |
