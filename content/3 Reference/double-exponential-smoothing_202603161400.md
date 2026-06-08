---
publish: true
aliases:
  - Double Exponential Smoothing
  - Holt's Linear Trend
created: 2026-04-09T23:07:39.370+07:00
modified: 2026-04-09T23:07:39.371+07:00
published: 2026-04-09T23:07:39.371+07:00
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
> Involves two smoothing parameters ($\alpha$ and $\gamma$) for [[linear-and-quadratic-deterministic-trends_202603161400|level and trend]].
