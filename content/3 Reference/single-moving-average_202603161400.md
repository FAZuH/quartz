---
publish: true
aliases:
  - Single Moving Average
  - SMA
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-30T13:39:20.868+07:00
published: 2026-03-30T13:39:20.868+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

$$ \begin{aligned}
S\_t &= \frac{1}{m} \sum\_{i=t-m+1}^t X\_i \\
F\_{t+1} &= S\_t
\end{aligned} $$

Where $m$ is the window size of the SMA

> [!tip]
> Average of the last $m$ data points
