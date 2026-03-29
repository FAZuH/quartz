---
publish: true
aliases:
  - Percentage Changes
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T17:33:47.075+07:00
published: 2026-03-29T17:33:47.075+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

Common in economic data where relative growth is more stable than absolute changes.
The percentage change is defined as:
$$\frac{Z\_t - Z\_{t-1}}{Z\_{t-1}}$$
This is approximately equal to the first difference of the log-transformed data:
$$\nabla \ln(Z\_t) = \ln(Z\_t) - \ln(Z\_{t-1}) \approx \frac{Z\_t - Z\_{t-1}}{Z\_{t-1}}$$
Modeling $\nabla \ln(Z\_t)$ as a stationary process handles both exponential growth and multiplicative variance.
