---
publish: true
aliases:
  - Differencing
created: 2026-03-29T17:33:47.074+07:00
modified: 2026-03-31T15:56:23.938+07:00
published: 2026-03-31T15:56:23.938+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Procedure

Transforming a non-stationary process $Z_t$ into a [[3 Reference/weakly-stationary_202603161400\|stationary]] one $W_t$ by taking differences.

$$
\nabla^d Z_{t} = \nabla^{d-1}Z_{t} - \nabla^{d-1}Z_{t-1}
$$

### First Difference

$$\nabla Z_t = Z_t - Z_{t-1}$$
Useful for removing a [[3 Reference/linear-and-quadratic-deterministic-trends_202603161400\|linear trend]].

### Second Difference
$$
\begin{align}
\nabla^{2} Z_{t} & = \nabla Z_{t} - \nabla Z_{t-1} \\
 & = (Z_{t} - Z_{t-1}) - (Z_{t-1} - Z_{t-2}) \\
  & = Z_{t} - 2 Z_{t-1} + Z_{t-2}
\end{align}
$$
Useful for removing a [[3 Reference/linear-and-quadratic-deterministic-trends_202603161400\|quadratic trend]] or changing growth rates.

