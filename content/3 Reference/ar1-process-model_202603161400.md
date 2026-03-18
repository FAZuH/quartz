---
publish: true
aliases:
  - AR(1) Process
created: 2026-03-16T11:09:36.714+07:00
modified: 2026-03-16T13:34:17.418+07:00
published: 2026-03-16T13:34:17.418+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

The first-order autoregressive process:
$$Z_t = \phi Z_{t-1} + a_t$$
where $|\phi| < 1$ for stationarity.

## Stationarity Condition

The AR(1) process is stationary if and only if:
$$|\phi| < 1$$
This is equivalent to the root of the characteristic equation $1 - \phi B = 0$ lying outside the unit circle ($|B| > 1$).

## Autocorrelation Function

For a stationary AR(1) process, the autocorrelation function (ACF) is:
$$\rho_k = \phi^k, \quad k \geq 0$$
The ACF decays exponentially towards zero.

## Example: Explosive AR(1) Process

An AR(1) process $Z_t = \phi Z_{t-1} + a_t$ where $|\phi| > 1$.
In this case, the weights of past shocks do not decay but grow exponentially. The variance increases rapidly with time, and the series "explodes," moving away from its starting value. This is a non-stationary process.
