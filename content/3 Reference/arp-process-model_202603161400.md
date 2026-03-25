---
publish: true
aliases:
  - AR(p) Process Model
created: 2026-03-25T15:22:40.586+07:00
modified: 2026-03-25T15:22:40.586+07:00
published: 2026-03-25T15:22:40.586+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

The p-th order autoregressive process:
$$Z\_t = \phi\_1 Z\_{t-1} + \phi\_2 Z\_{t-2} + \dots + \phi\_p Z\_{t-p} + a\_t$$
where ${a\_t}$ is white noise.

## Stationarity Condition

An AR(p) process is stationary if all roots of its [[ar-characteristic-equation_202603161400|characteristic polynomial]] $1 - \phi\_1 x - \dots - \phi\_p x^p = 0$ lie outside the unit circle ($|x| > 1$).
Necessary (but not sufficient) conditions:

- $\phi\_1 + \dots + \phi\_p < 1$
- $|\phi\_p| < 1$

## Yule-Walker Equations

Linear equations that relate the parameters $\phi\_i$ of an AR(p) process to its autocorrelations $\rho\_k$:
$$\rho\_k = \phi\_1 \rho\_{k-1} + \phi\_2 \rho\_{k-2} + \dots + \phi\_p \rho\_{k-p}$$
for $k = 1, 2, \dots, p$.
Solving these equations allows for estimating the parameters from the sample autocorrelations.

## Variance

The variance $\gamma\_0$ of a stationary AR(p) process is:
$$\gamma\_0 = \frac{\sigma\_a^2}{1 - \phi\_1 \rho\_1 - \phi\_2 \rho\_2 - \dots - \phi\_p \rho\_p}$$
where $\sigma\_a^2$ is the variance of the white noise shocks.
