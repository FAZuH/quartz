---
publish: true
aliases:
  - AR(1) Process
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-30T02:02:50.476+07:00
published: 2026-03-30T02:02:50.476+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $a\_{t}$ : [[white-noise_202603161400|white noise]].

The first-order autoregressive process (AR(1)) $Z\_{t}$ is defined as

$$Z\_t = \phi Z\_{t-1} + a\_t$$

Where $\phi$ is a constant

## Stationarity Condition

The AR(1) process is [[weakly-stationary_202603161400|weakly stationary]] if and only if:
$$|\phi| < 1$$
This is equivalent to the root of the characteristic equation $1 - \phi B = 0$ lying outside the unit circle ($|B| > 1$).

## Autocorrelation Function

For a stationary AR(1) process, the [[autocovariance-and-autocorrelation_202603161400|autocorrelation function (ACF)]] is:
$$\rho\_k = \phi^k, \quad k \geq 0$$
The ACF decays exponentially towards zero.

## Example: Explosive AR(1) Process

An AR(1) process $Z\_t = \phi Z\_{t-1} + a\_t$ where $|\phi| > 1$.
In this case, the weights of past shocks do not decay but grow exponentially. The variance increases rapidly with time, and the series "explodes," moving away from its starting value. This is a non-stationary process.

## Example: Mean of an AR(1) Process

Let $a\_{t}$ be white noise, and let ${ Y\_{t} }$ be an AR(1) process

$$

$$
