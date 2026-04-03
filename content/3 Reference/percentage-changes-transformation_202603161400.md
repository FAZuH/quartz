---
publish: true
aliases:
  - Percentage Changes
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T21:08:17.350+07:00
published: 2026-03-29T21:08:17.350+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Procedure

Common in economic data where relative growth is more stable than absolute changes.
The percentage change is defined as:
$$\frac{Z_t - Z_{t-1}}{Z_{t-1}}$$
This is approximately equal to the first difference of the log-transformed data:
$$\nabla \ln(Z_t) = \ln(Z_t) - \ln(Z_{t-1}) \approx \frac{Z_t - Z_{t-1}}{Z_{t-1}}$$
Modeling $\nabla \ln(Z_t)$ as a [[3 Reference/weakly-stationary_202603161400\|stationary]] process handles both exponential growth and multiplicative variance.
