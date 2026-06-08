---
publish: true
aliases:
  - AR(p) Process Model
  - Autoregressive Process Process (AR(p))
created: 2026-04-09T23:07:39.000+07:00
modified: 2026-06-02T08:22:33.760+07:00
published: 2026-06-02T08:22:33.760+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A process where the current value is a linear combination of its own past [[lag-definition_202603161400|values]] plus a random shock.
$Z_t = \phi_1 Z_{t-1} + \phi_2 Z_{t-2} + \dots + \phi_p Z_{t-p} + a_t$
where $\{a_t\}$ is [[white-noise_202603161400|white noise]] independent of past $Z$ values.

> [!tip]
> $Z_{t} = a_{t} + \sum_{i=1}^p \phi_{i} a_{t-i}$

## Stationarity Condition

An AR(p) process is [[weakly-stationary_202603161400|weakly stationary]] if all roots of its [[ar-characteristic-equation_202603161400|characteristic polynomial]] $1 - \phi_1 x - \dots - \phi_p x^p = 0$ lie outside the unit circle ($|x| > 1$).

Necessary (but not sufficient) conditions:

- $\phi_1 + \dots + \phi_p < 1$
- $|\phi_p| < 1$

## Yule-Walker Equations

Linear equations that relate the parameters $\phi_i$ of an AR(p) process to its [[autocovariance-and-autocorrelation_202603161400|autocorrelations]] $\rho_k$:
$\rho_k = \phi_1 \rho_{k-1} + \phi_2 \rho_{k-2} + \dots + \phi_p \rho_{k-p}$
for $k = 1, 2, \dots, p$.
Solving these equations allows for estimating the parameters from the [[sample-autocorrelation_202603161400|sample autocorrelations]].

## Characteristic Equation

![[ar-characteristic-equation_202603161400#Definition|AR Characteristic Equation]]

## Properties

Assuming AR(p) is stationary,

| Property              | Expression                                                                             |
| --------------------- | -------------------------------------------------------------------------------------- |
| Variance ($\gamma_0$) | $\dfrac{\sigma_e^2}{\textcolor{#70CFFF}{1 - \phi_1 \rho_1 - \dots - \phi_p \rho_p}}$   |
| Autocovariance        | $\phi_1\gamma_{k-1} + \phi_2\gamma_{k-2} + \dots + \phi_p\gamma_{k-p},\quad k\geq 1$ |
| Autocorrelation (ACF) | $\textcolor{#FFD700}{\phi_1 \rho_{k-1} + \dots + \phi_p \rho_{k-p}}, \quad k \geq 1$   |
