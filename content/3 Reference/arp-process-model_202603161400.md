---
publish: true
aliases:
  - AR(p) Process Model
created: 2026-03-16T11:15:35.376+07:00
modified: 2026-03-16T13:34:17.433+07:00
published: 2026-03-16T13:34:17.433+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

The p-th order autoregressive process:
$$Z_t = \phi_1 Z_{t-1} + \phi_2 Z_{t-2} + \dots + \phi_p Z_{t-p} + a_t$$
where $\{a_t\}$ is white noise.

## Stationarity Condition

An AR(p) process is stationary if all roots of its [[3 Reference/ar-characteristic-equation_202603161400\|characteristic polynomial]] $1 - \phi_1 x - \dots - \phi_p x^p = 0$ lie outside the unit circle ($|x| > 1$).
Necessary (but not sufficient) conditions:
- $\phi_1 + \dots + \phi_p < 1$
- $|\phi_p| < 1$

## Yule-Walker Equations

Linear equations that relate the parameters $\phi_i$ of an AR(p) process to its autocorrelations $\rho_k$:
$$\rho_k = \phi_1 \rho_{k-1} + \phi_2 \rho_{k-2} + \dots + \phi_p \rho_{k-p}$$
for $k = 1, 2, \dots, p$.
Solving these equations allows for estimating the parameters from the sample autocorrelations.

## Variance

The variance $\gamma_0$ of a stationary AR(p) process is:
$$\gamma_0 = \frac{\sigma_a^2}{1 - \phi_1 \rho_1 - \phi_2 \rho_2 - \dots - \phi_p \rho_p}$$
where $\sigma_a^2$ is the variance of the white noise shocks.
