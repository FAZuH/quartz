---
publish: true
aliases:
  - Random Walk with Drift (Forecasting)
created: 2026-06-01T12:22:07.656+07:00
modified: 2026-06-01T12:22:07.656+07:00
published: 2026-06-01T12:22:07.656+07:00
creation-time: 2026-06-01 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Forecasting from an ARIMA(0,1,0) model with a constant term, where forecasts increase linearly with lead time and error variance grows without bound.

## Procedure

Consider a [[random-walk_202603161400|random walk]] with drift defined by:

$$
Y_t = Y_{t-1} + \theta_0 + e_t
$$

where $\{e_t\}$ is [[white-noise_202603161400|white noise]]. This is an ARIMA(0,1,0) model with a constant term $\theta_0$.

### One-Step-Ahead Forecast

$$
\hat{Y}_t(1) = E(Y_{t+1} \mid Y_1, \ldots, Y_t) = Y_t + \theta_0
$$

### Lead-$l$ Forecast

The difference equation form for the lead $l$ forecast is:

$$
\hat{Y}_t(l) = \hat{Y}_t(l-1) + \theta_0
$$

Iterating backward on $l$ yields the explicit expression:

$$
\hat{Y}_t(l) = Y_t + l \cdot \theta_0
$$

The forecast grows **linearly** with the lead time $l$, with slope $\theta_0$.

### Forecast Error

The $l$-step-ahead forecast error is:

$$
e_t(l) = e_{t+l} + e_{t+l-1} + \cdots + e_{t+1}
$$

### Forecast Error Variance

$$
\text{Var}[e_t(l)] = l \cdot \sigma_e^2
$$

The forecast error variance grows **without bound** as the lead time $l$ increases. This is typical for non-stationary models — the distant future is increasingly uncertain.

> [!NOTE]
> Unlike stationary models where forecast eventually reverts to the mean, random walk with drift forecasts continue to **trend upward (or downward) indefinitely**, reflecting the permanent effect of past shocks.

## Related

- [[random-walk_202603161400|Random Walk]]
- [[arima-forecasting_202604271321|ARIMA Forecasting]]
- [[arima-pdq-model-definition_202603161400|ARIMA(p,d,q) Model]]
- [[prediction-limits_202604271321|Prediction Limits]]
