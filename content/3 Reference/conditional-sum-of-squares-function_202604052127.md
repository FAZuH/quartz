---
publish: true
aliases:
  - Conditional Sum of Squares Function
created: 2026-04-05T21:27:46.856+07:00
modified: 2026-04-05T21:27:46.857+07:00
published: 2026-04-05T21:27:46.857+07:00
cssclasses: ""
creation-time: 2026-04-05 21:27
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Definition

Conditional Sum of Squares Function measures the discrepancy between observed and predicted values, conditioned on the first observation.

For AR(1) model $Y_t - \mu = \phi(Y_{t-1} - \mu) + e_t$, the conditional sum of squares is:

$$S_c(\phi, \mu) = \sum_{t=2}^n [Y_t - \mu - \phi(Y_{t-1} - \mu)]^2$$

> [!NOTE] Why "Conditional"
> The function conditions on the observed value $Y_1$ and sums squared deviations from observations $Y_2, \ldots, Y_n$. It treats AR models as regression models where $Y_{t-1}$ is the predictor.

## Properties
- Minimizing $S_c$ yields **conditional least squares** estimates
- For stationary processes with large $n$, the difference from unconditional methods is negligible