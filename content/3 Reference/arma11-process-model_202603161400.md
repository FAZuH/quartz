---
publish: true
aliases:
  - ARMA(1,1) Process Model
created: 2026-03-16T11:15:48.476+07:00
modified: 2026-03-16T13:34:42.609+07:00
published: 2026-03-16T13:34:42.609+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

The simplest mixed model:
$$Z_t = \phi Z_{t-1} + a_t - \theta a_{t-1}$$
It is stationary if $|\phi| < 1$ and invertible if $|\theta| < 1$.

## Properties

### Variance
$$\gamma_0 = \frac{1 - 2\phi \theta + \theta^2}{1 - \phi^2} \sigma_a^2$$

### Autocorrelation Function (ACF)
For $k=1$:
$$\rho_1 = \frac{(1 - \phi \theta)(\phi - \theta)}{1 - 2\phi \theta + \theta^2}$$
For $k \geq 2$:
$$\rho_k = \phi \rho_{k-1}$$
The ACF decays exponentially like an AR(1) but starting from $\rho_1$ instead of $\rho_0$.
