---
publish: true
aliases:
  - Single Exponential Smoothing
  - SES
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T17:33:47.075+07:00
published: 2026-03-29T17:33:47.075+07:00
cssclasses: ""
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
