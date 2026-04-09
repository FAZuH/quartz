---
publish: true
aliases:
  - MA(q) Process Model
  - Moving Average Process (MA(q))
created: 2026-04-09T23:07:39.508+07:00
modified: 2026-04-09T23:07:39.509+07:00
published: 2026-04-09T23:07:39.509+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

A process where the current value is a linear combination of current and past [[3 Reference/white-noise_202603161400\|white noise]] shocks.

$$Z_t = a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2} - \dots - \theta_q a_{t-q}$$

where $\{a_t\}$ is white noise. 

> [!tip]
> $$ Z_{t} = a_{t} - \sum_{i=1}^q \theta_{i} a_{t-i} $$

## Stationarity

Unlike [[3 Reference/arp-process-model_202603161400\|AR processes]], MA(q) processes are always [[3 Reference/weakly-stationary_202603161400\|weakly stationary]] for finite $\theta_i$.

## Properties

| Property                                                                 | Expression                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mean**                                                                 | $0$                                                                                                                                                                                                                                                             |
| **Autocovariance** ($\gamma_{k}$)                                        | $\begin{cases} \textcolor{#70CFFF}{(1 + \theta_1^2 + \theta_2^2 + \dots + \theta_q^2)}\sigma_e^2 & k=0 \\ \textcolor{#FFD700}{-\theta_k + \theta_1\theta_{k+1} + \theta_2\theta_{k+2} + \dots + \theta_{q-k}\theta_q}, & k = 1, 2, \dots, q \\ 0, & k > q \end{cases}$   |
| **Autocorrelation** ($\rho_{k}$)<br><br>*just build from<br>ACF formula* | $\begin{cases} 1, & k = 0 \\ \dfrac{\textcolor{#FFD700}{-\theta_k + \theta_1\theta_{k+1} + \theta_2\theta_{k+2} + \dots + \theta_{q-k}\theta_q}}{\textcolor{#70CFFF}{1 + \theta_1^2 + \theta_2^2 + \dots + \theta_q^2}}, & k = 1, 2, \dots, q \\ 0, & k > q \end{cases}$ |


