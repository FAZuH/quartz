---
publish: true
aliases:
  - Single Exponential Smoothing
  - SES
created: 2026-03-16T11:05:05.498+07:00
modified: 2026-03-16T11:08:12.224+07:00
published: 2026-03-16T11:08:12.224+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
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
