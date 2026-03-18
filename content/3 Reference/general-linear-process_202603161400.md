---
publish: true
aliases:
  - General Linear Process
created: 2026-03-16T11:09:33.655+07:00
modified: 2026-03-16T13:34:17.403+07:00
published: 2026-03-16T13:34:17.403+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

A process $\{Z_t\}$ is a general linear process if it can be represented as a weighted linear combination of current and past white noise shocks:
$$Z_t = a_t + \psi_1 a_{t-1} + \psi_2 a_{t-2} + \dots = \sum_{j=0}^\infty \psi_j a_{t-j}$$
where $\psi_0 = 1$ and $\{a_t\}$ is white noise.

## Stationarity Condition

For a general linear process to be stationary, the weights must satisfy:
$$\sum_{j=0}^\infty \psi_j^2 < \infty$$
This ensures the variance of the process is finite.
