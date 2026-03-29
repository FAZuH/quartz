---
publish: true
aliases:
  - ARMA(1,1) Process Model
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-29T17:33:47.073+07:00
published: 2026-03-29T17:33:47.073+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

The simplest mixed model:
$$Z\_t = \phi Z\_{t-1} + a\_t - \theta a\_{t-1}$$
It is stationary if $|\phi| < 1$ and invertible if $|\theta| < 1$.

## Properties

### Variance

$$\gamma\_0 = \frac{1 - 2\phi \theta + \theta^2}{1 - \phi^2} \sigma\_a^2$$

### Autocorrelation Function (ACF)

For $k=1$:
$$\rho\_1 = \frac{(1 - \phi \theta)(\phi - \theta)}{1 - 2\phi \theta + \theta^2}$$
For $k \geq 2$:
$$\rho\_k = \phi \rho\_{k-1}$$
The ACF decays exponentially like an AR(1) but starting from $\rho\_1$ instead of $\rho\_0$.
