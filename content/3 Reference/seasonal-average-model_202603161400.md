---
publish: true
aliases:
  - Seasonal Average Model
created: 2026-03-16T11:09:31.654+07:00
modified: 2026-03-16T11:09:31.654+07:00
published: 2026-03-16T11:09:31.654+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

A model for seasonal trends with period $p$ (e.g., $p=12$ for monthly data).
$$Z_t = \mu_t + X_t, \quad \mu_t = \mu_{t+p}$$
The mean function $\mu_t$ is assumed to be constant within each "season":
$$\mu_t = \beta_i \text{ for } t \text{ in season } i$$
where $i = 1, \dots, p$.
