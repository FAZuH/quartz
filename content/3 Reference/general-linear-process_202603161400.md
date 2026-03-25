---
publish: true
aliases:
  - General Linear Process
created: 2026-03-25T15:22:40.594+07:00
modified: 2026-03-25T15:22:40.594+07:00
published: 2026-03-25T15:22:40.594+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A process ${Z\_t}$ is a general linear process if it can be represented as a weighted linear combination of current and past white noise shocks:
$$Z\_t = a\_t + \psi\_1 a\_{t-1} + \psi\_2 a\_{t-2} + \dots = \sum\_{j=0}^\infty \psi\_j a\_{t-j}$$
where $\psi\_0 = 1$ and ${a\_t}$ is white noise.

## Stationarity Condition

For a general linear process to be stationary, the weights must satisfy:
$$\sum\_{j=0}^\infty \psi\_j^2 < \infty$$
This ensures the variance of the process is finite.
