---
publish: true
aliases:
  - Unconditional Sum-of-Squares Function
created: 2026-04-05T21:28:37.905+07:00
modified: 2026-04-05T21:28:37.905+07:00
published: 2026-04-05T21:28:37.905+07:00
cssclasses: ""
creation-time: 2026-04-05 21:28
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Definition

Unconditional Sum-of-Squares Function includes all observations by incorporating the marginal distribution of $Y_1$.

For AR(1) model with NIID$(0, \sigma_e^2)$ white noise:

$$S(\phi, \mu) = (1 - \phi^2)(Y_1 - \mu)^2 + \sum_{t=2}^n [Y_t - \mu - \phi(Y_{t-1} - \mu)]^2$$

> [!NOTE] Key Difference from Conditional
> The term $(1 - \phi^2)(Y_1 - \mu)^2$ accounts for the marginal distribution of $Y_1$, which follows $N\left(\mu, \frac{\sigma_e^2}{1-\phi^2}\right)$.

## Derivation from Likelihood

The unconditional sum of squares is derived from the full likelihood:

$$L(\phi, \mu, \sigma_e^2) = f(Y_1) \cdot f(Y_2, \ldots, Y_n | Y_1)$$

Where:
- $f(Y_1)$ is the marginal density
- $f(Y_2, \ldots, Y_n | Y_1)$ is the conditional density of $e_2, \ldots, e_n$

## Properties
- Minimizing $S(\phi, \mu)$ yields **unconditional least squares** estimates
- The term $(1 - \phi^2)(Y_1 - \mu)^2$ makes the equations nonlinear in $\phi$ and $\mu$
- Requires numerical optimization