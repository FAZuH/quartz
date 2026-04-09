---
publish: true
aliases:
  - Seasonal Average Model
created: 2026-04-09T23:07:39.576+07:00
modified: 2026-04-09T23:07:39.577+07:00
published: 2026-04-09T23:07:39.577+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

A model for [[3 Reference/holt-winter-seasonal-method_202603161400\|seasonal]] trends with period $p$ (e.g., $p=12$ for monthly data).
$$Z_t = \mu_t + X_t, \quad \mu_t = \mu_{t+p}$$

The mean $\mu_t$ is assumed to be constant within each "season":
$$\mu_t = \beta_i \text{ for } t \text{ in season } i$$
where $i = 1, \dots, p$.

Basically, $\mu_{t} = \beta_{i}$ is the constant of $i$-th season