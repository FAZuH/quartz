---
publish: true
aliases:
  - Double Exponential Smoothing
  - Holt's Linear Trend
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T21:09:46.779+07:00
published: 2026-03-29T21:09:46.779+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

$$
\begin{aligned}
S\_t &= \alpha X\_t + (1-\alpha)(S\_{t-1} + T\_{t-1}) \\
T\_t &= \gamma(S\_t - S\_{t-1}) + (1-\gamma)T\_{t-1} \\
F\_{t+h} &= S\_t + hT\_t
\end{aligned}
$$

> [!tip]
> Involves two smoothing parameters ($\alpha$ and $\gamma$) for [[linear-and-quadratic-deterministic-trends_202603161400|level and trend]].
