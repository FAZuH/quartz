---
publish: true
aliases:
  - Single Moving Average
  - SMA
created: 2026-03-16T11:05:05.468+07:00
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
S_t &= \frac{1}{m} \sum_{i=t-m+1}^t X_i \\
F_{t+1} &= S_t
\end{aligned}
$$

> [!tip]
> Average of the last $m$ data points. Suitable for stationary data patterns.
