---
publish: true
aliases:
  - Single Moving Average
  - SMA
created: 2026-04-09T23:07:39.587+07:00
modified: 2026-04-09T23:07:39.588+07:00
published: 2026-04-09T23:07:39.588+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

$$$\begin{aligned}
S_t &= \frac{1}{m} \sum_{i=t-m+1}^t X_i \\
F_{t+1} &= S_t
\end{aligned} $$

Where $m$ is the window size of the SMA

> [!tip]
> Average of the last $m$ data points
$$$
