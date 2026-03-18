---
publish: true
aliases:
  - Moving Average Process (MA(q))
created: 2026-03-16T11:15:39.677+07:00
modified: 2026-03-16T13:34:36.247+07:00
published: 2026-03-16T13:34:36.247+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

A process where the current value is a linear combination of current and past white noise shocks.
$$Z_t = a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2} - \dots - \theta_q a_{t-q}$$
where $\{a_t\}$ is white noise. Unlike AR processes, MA(q) processes are always stationary for finite $\theta_i$.

## Autocorrelation Function

For an MA(q) process, the autocorrelation function (ACF) "cuts off" after lag $q$:
$$\rho_k = 0 \text{ for } k > q$$
For $k \leq q$:
$$\rho_k = \frac{-\theta_k + \theta_1 \theta_{k+1} + \dots + \theta_{q-k} \theta_q}{1 + \theta_1^2 + \dots + \theta_q^2}$$
(Note: $\theta_0 = -1$ in some conventions, signs may vary).
