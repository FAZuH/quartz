---
publish: true
aliases:
  - AR(p) Process Model
  - Autoregressive Process Process (AR(p))
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-04-02T11:57:08.527+07:00
published: 2026-04-02T11:57:08.527+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A process where the current value is a linear combination of its own past [[lag-definition_202603161400|values]] plus a random shock.
$$Z\_t = \phi\_1 Z\_{t-1} + \phi\_2 Z\_{t-2} + \dots + \phi\_p Z\_{t-p} + a\_t$$
where ${a\_t}$ is [[white-noise_202603161400|white noise]] independent of past $Z$ values.

> [!tip]
> $$ Z\_{t} = a\_{t} + \sum\_{i=1}^p \phi\_{i} a\_{t-i} $$

## Stationarity Condition

An AR(p) process is [[weakly-stationary_202603161400|weakly stationary]] if all roots of its [[ar-characteristic-equation_202603161400|characteristic polynomial]] $1 - \phi\_1 x - \dots - \phi\_p x^p = 0$ lie outside the unit circle ($|x| > 1$).

Necessary (but not sufficient) conditions:

- $\phi\_1 + \dots + \phi\_p < 1$
- $|\phi\_p| < 1$

## Yule-Walker Equations

Linear equations that relate the parameters $\phi\_i$ of an AR(p) process to its [[autocovariance-and-autocorrelation_202603161400|autocorrelations]] $\rho\_k$:
$$\rho\_k = \phi\_1 \rho\_{k-1} + \phi\_2 \rho\_{k-2} + \dots + \phi\_p \rho\_{k-p}$$
for $k = 1, 2, \dots, p$.
Solving these equations allows for estimating the parameters from the [[sample-autocorrelation_202603161400|sample autocorrelations]].

## Characteristic Equation

![[ar-characteristic-equation_202603161400#Definition|AR Characteristic Equation]]

## Properties

| Property              | Expression                                                                           |
| --------------------- | ------------------------------------------------------------------------------------ |
| Variance ($\gamma\_0$) | $\dfrac{\sigma\_e^2}{\textcolor{#70CFFF}{1 - \phi\_1 \rho\_1 - \dots - \phi\_p \rho\_p}}$ |
| Autocorrelation (ACF) | $\textcolor{#FFD700}{\phi\_1 \rho\_{k-1} + \dots + \phi\_p \rho\_{k-p}}, \quad k \geq 1$ |
