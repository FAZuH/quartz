---
publish: true
aliases:
  - Holt-Winter Seasonal Method
created: 2026-03-16T11:05:17.720+07:00
modified: 2026-03-16T11:08:12.224+07:00
published: 2026-03-16T11:08:12.224+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Formula

Smoothing method for data with seasonal patterns with period length $p$.

### Additive
$$
\begin{aligned}
S_t &= \alpha(X_t - M_{t-p}) + (1-\alpha)(S_{t-1} + T_{t-1}) \\
T_t &= \gamma(S_t - S_{t-1}) + (1-\gamma)T_{t-1} \\
M_t &= \delta(X_t - S_t) + (1-\delta)M_{t-p} \\
F_{t+h} &= S_t + hT_t + M_{t-p+h}
\end{aligned}
$$

> [!tip]
> Used when the seasonal component is constant relative to the level.

### Multiplicative
$$
\begin{aligned}
S_t &= \alpha(X_t / M_{t-p}) + (1-\alpha)(S_{t-1} + T_{t-1}) \\
T_t &= \gamma(S_t - S_{t-1}) + (1-\gamma)T_{t-1} \\
M_t &= \delta(X_t / S_t) + (1-\delta)M_{t-p} \\
F_{t+h} &= (S_t + hT_t)M_{t-p+h}
\end{aligned}
$$

> [!tip]
> Used when seasonal variation changes along with the data level.
