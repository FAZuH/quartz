---
publish: true
aliases:
  - Differencing
created: 2026-03-29T17:33:47.074+07:00
modified: 2026-03-29T17:33:47.075+07:00
published: 2026-03-29T17:33:47.075+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

Transforming a non-stationary process $Z\_t$ into a stationary one $W\_t$ by taking differences.

### First Difference

$$\nabla Z\_t = Z\_t - Z\_{t-1}$$
Useful for removing a linear trend.

### Second Difference

$$\nabla^2 Z\_t = \nabla(\nabla Z\_t) = (Z\_t - Z\_{t-1}) - (Z\_{t-1} - Z\_{t-2}) = Z\_t - 2Z\_{t-1} + Z\_{t-2}$$
Useful for removing a quadratic trend or changing growth rates.
