---
publish: true
aliases:
  - Double Exponential Smoothing
  - Holt's Linear Trend
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T21:09:46.779+07:00
published: 2026-03-29T21:09:46.779+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Formula

$$
\begin{aligned}
S_t &= \alpha X_t + (1-\alpha)(S_{t-1} + T_{t-1}) \\
T_t &= \gamma(S_t - S_{t-1}) + (1-\gamma)T_{t-1} \\
F_{t+h} &= S_t + hT_t
\end{aligned}
$$

> [!tip]
> Involves two smoothing parameters ($\alpha$ and $\gamma$) for [[3 Reference/linear-and-quadratic-deterministic-trends_202603161400\|level and trend]].
