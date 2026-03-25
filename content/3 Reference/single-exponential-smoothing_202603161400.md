---
publish: true
aliases:
  - Single Exponential Smoothing
  - SES
created: 2026-03-25T15:22:40.608+07:00
modified: 2026-03-25T15:22:40.608+07:00
published: 2026-03-25T15:22:40.608+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

$$
\begin{aligned}
S\_t &= \alpha X\_t + (1-\alpha)S\_{t-1} \\
F\_{t+1} &= S\_t
\end{aligned}
$$

> [!tip]
> Assigns exponentially decreasing weights to older data.
