---
publish: true
aliases:
  - Holt-Winter Seasonal Method
created: 2026-04-09T23:07:39.408+07:00
modified: 2026-04-09T23:07:39.409+07:00
published: 2026-04-09T23:07:39.409+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Formula

Smoothing method for data with [[3 Reference/seasonal-average-model_202603161400\|seasonal]] patterns with period length $p$.

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
> Used when the [[3 Reference/seasonal-average-model_202603161400\|seasonal]] component is constant relative to the level.

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
> Used when [[3 Reference/seasonal-average-model_202603161400\|seasonal]] variation changes along with the data level.
