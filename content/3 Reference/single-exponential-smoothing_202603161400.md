---
publish: true
aliases:
  - Single Exponential Smoothing
  - SES
created: 2026-04-09T23:07:39.586+07:00
modified: 2026-04-09T23:07:39.587+07:00
published: 2026-04-09T23:07:39.587+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

$$
\begin{aligned}
S_t &= \alpha X_t + (1-\alpha)S_{t-1} \\
F_{t+1} &= S_t
\end{aligned}
$$

> [!tip]
> Assigns exponentially decreasing weights to older data.
