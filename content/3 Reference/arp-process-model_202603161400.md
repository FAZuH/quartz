---
publish: true
aliases:
  - AR(p) Process Model
  - Autoregressive Process Process (AR(p))
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-04-06T04:31:32.886+07:00
published: 2026-04-06T04:31:32.886+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

A process where the current value is a linear combination of its own past [[3 Reference/lag-definition_202603161400\|values]] plus a random shock.
$$Z_t = \phi_1 Z_{t-1} + \phi_2 Z_{t-2} + \dots + \phi_p Z_{t-p} + a_t$$
where $\{a_t\}$ is [[3 Reference/white-noise_202603161400\|white noise]] independent of past $Z$ values.

> [!tip]
> $$ Z_{t} = a_{t} + \sum_{i=1}^p \phi_{i} a_{t-i} $$

## Stationarity Condition

An AR(p) process is [[3 Reference/weakly-stationary_202603161400\|weakly stationary]] if all roots of its [[3 Reference/ar-characteristic-equation_202603161400\|characteristic polynomial]] $1 - \phi_1 x - \dots - \phi_p x^p = 0$ lie outside the unit circle ($|x| > 1$).

Necessary (but not sufficient) conditions:
- $\phi_1 + \dots + \phi_p < 1$
- $|\phi_p| < 1$

## Yule-Walker Equations

Linear equations that relate the parameters $\phi_i$ of an AR(p) process to its [[3 Reference/autocovariance-and-autocorrelation_202603161400\|autocorrelations]] $\rho_k$:
$$\rho_k = \phi_1 \rho_{k-1} + \phi_2 \rho_{k-2} + \dots + \phi_p \rho_{k-p}$$
for $k = 1, 2, \dots, p$.
Solving these equations allows for estimating the parameters from the [[3 Reference/sample-autocorrelation_202603161400\|sample autocorrelations]].

## Characteristic Equation

## Definition

By expressing an [[3 Reference/arp-process-model_202603161400\|AR(p)]] process using the [[3 Reference/backshift-operator_202603161400\|backshift operator]]:
$(1 - \phi_1 B - \phi_2 B^2 - \dots - \phi_p B^p) Z_t = a_t$$
The **characteristic equation** is:
$1 - \phi_1 x - \phi_2 x^2 - \dots - \phi_p x^p = 0$$


## Properties

Assuming AR(p) is stationary,

| Property              | Expression                                                                             |
| --------------------- | -------------------------------------------------------------------------------------- |
| Variance ($\gamma_0$) | $\dfrac{\sigma_e^2}{\textcolor{#70CFFF}{1 - \phi_1 \rho_1 - \dots - \phi_p \rho_p}}$   |
| Autocovariance        | $$\phi_1\gamma_{k-1} + \phi_2\gamma_{k-2} + \dots + \phi_p\gamma_{k-p},\quad k\geq 1$$ |
| Autocorrelation (ACF) | $\textcolor{#FFD700}{\phi_1 \rho_{k-1} + \dots + \phi_p \rho_{k-p}}, \quad k \geq 1$   |

> [!warning] Only valid on stationary AR(p)