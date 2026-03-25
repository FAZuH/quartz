---
publish: true
aliases:
  - Holt-Winter Seasonal Method
created: 2026-03-25T15:22:40.604+07:00
modified: 2026-03-25T15:22:40.604+07:00
published: 2026-03-25T15:22:40.604+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

Smoothing method for data with seasonal patterns with period length $p$.

### Additive

$$
\begin{aligned}
S\_t &= \alpha(X\_t - M\_{t-p}) + (1-\alpha)(S\_{t-1} + T\_{t-1}) \\
T\_t &= \gamma(S\_t - S\_{t-1}) + (1-\gamma)T\_{t-1} \\
M\_t &= \delta(X\_t - S\_t) + (1-\delta)M\_{t-p} \\
F\_{t+h} &= S\_t + hT\_t + M\_{t-p+h}
\end{aligned}
$$

> [!tip]
> Used when the seasonal component is constant relative to the level.

### Multiplicative

$$
\begin{aligned}
S\_t &= \alpha(X\_t / M\_{t-p}) + (1-\alpha)(S\_{t-1} + T\_{t-1}) \\
T\_t &= \gamma(S\_t - S\_{t-1}) + (1-\gamma)T\_{t-1} \\
M\_t &= \delta(X\_t / S\_t) + (1-\delta)M\_{t-p} \\
F\_{t+h} &= (S\_t + hT\_t)M\_{t-p+h}
\end{aligned}
$$

> [!tip]
> Used when seasonal variation changes along with the data level.
