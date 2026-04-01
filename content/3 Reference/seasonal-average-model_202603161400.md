---
publish: true
aliases:
  - Seasonal Average Model
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-31T20:41:22.959+07:00
published: 2026-03-31T20:41:22.959+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A model for [[holt-winter-seasonal-method_202603161400|seasonal]] trends with period $p$ (e.g., $p=12$ for monthly data).
$$Z\_t = \mu\_t + X\_t, \quad \mu\_t = \mu\_{t+p}$$

The mean $\mu\_t$ is assumed to be constant within each "season":
$$\mu\_t = \beta\_i \text{ for } t \text{ in season } i$$
where $i = 1, \dots, p$.

Basically, $\mu\_{t} = \beta\_{i}$ is the constant of $i$-th season
