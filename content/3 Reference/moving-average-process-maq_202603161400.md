---
publish: true
aliases:
  - MA(q) Process Model
  - Moving Average Process (MA(q))
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-31T20:11:27.710+07:00
published: 2026-03-31T20:11:27.710+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A process where the current value is a linear combination of current and past [[white-noise_202603161400|white noise]] shocks.

$$Z\_t = a\_t - \theta\_1 a\_{t-1} - \theta\_2 a\_{t-2} - \dots - \theta\_q a\_{t-q}$$

where ${a\_t}$ is white noise.

> [!tip]
> $$ Z\_{t} = a\_{t} - \sum\_{i=1}^q \theta\_{i} a\_{t-i} $$

## Stationarity

Unlike [[arp-process-model_202603161400|AR processes]], MA(q) processes are always [[weakly-stationary_202603161400|weakly stationary]] for finite $\theta\_i$.

## Properties

| Property                                                                 | Expression                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mean**                                                                 | $0$                                                                                                                                                                                                                                                             |
| **Autocovariance** ($\gamma\_{k}$)                                        | $\begin{cases} \textcolor{#70CFFF}{(1 + \theta\_1^2 + \theta\_2^2 + \dots + \theta\_q^2)}\sigma\_e^2 & k=0 \ \textcolor{#FFD700}{-\theta\_k + \theta\_1\theta\_{k+1} + \theta\_2\theta\_{k+2} + \dots + \theta\_{q-k}\theta\_q}, & k = 1, 2, \dots, q \ 0, & k > q \end{cases}$   |
| **Autocorrelation** ($\rho\_{k}$)<br><br>_just build from<br>ACF formula_ | $\begin{cases} 1, & k = 0 \ \dfrac{\textcolor{#FFD700}{-\theta\_k + \theta\_1\theta\_{k+1} + \theta\_2\theta\_{k+2} + \dots + \theta\_{q-k}\theta\_q}}{\textcolor{#70CFFF}{1 + \theta\_1^2 + \theta\_2^2 + \dots + \theta\_q^2}}, & k = 1, 2, \dots, q \ 0, & k > q \end{cases}$ |
