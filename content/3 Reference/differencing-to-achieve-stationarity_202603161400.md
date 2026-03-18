---
publish: true
aliases:
  - Differencing
created: 2026-03-16T11:24:00.920+07:00
modified: 2026-03-16T11:24:00.920+07:00
published: 2026-03-16T11:24:00.920+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Procedure

Transforming a non-stationary process $Z_t$ into a stationary one $W_t$ by taking differences.

### First Difference
$$\nabla Z_t = Z_t - Z_{t-1}$$
Useful for removing a linear trend.

### Second Difference
$$\nabla^2 Z_t = \nabla(\nabla Z_t) = (Z_t - Z_{t-1}) - (Z_{t-1} - Z_{t-2}) = Z_t - 2Z_{t-1} + Z_{t-2}$$
Useful for removing a quadratic trend or changing growth rates.
