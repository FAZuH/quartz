---
publish: true
aliases:
  - Differencing
  - Integrated
created: 2026-03-29T17:33:47.074+07:00
modified: 2026-03-29T21:29:51.882+07:00
published: 2026-03-29T21:29:51.882+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

Transforming a non-stationary process $Z\_t$ into a [[weakly-stationary_202603161400|stationary]] one $W\_t$ by taking differences.

### First Difference

$$\nabla Z\_t = Z\_t - Z\_{t-1}$$
Useful for removing a [[linear-and-quadratic-deterministic-trends_202603161400|linear trend]].

### Second Difference

$$
\begin{align}
\nabla^{2} Z\_{t} & = \nabla Z\_{t} - \nabla Z\_{t-1} \\
& = (Z\_{t} - Z\_{t-1}) - (Z\_{t-1} - Z\_{t-2}) \\
& = Z\_{t} - 2 Z\_{t-1} + Z\_{t-2}
\end{align}
$$
Useful for removing a [[linear-and-quadratic-deterministic-trends_202603161400|quadratic trend]] or changing growth rates.
