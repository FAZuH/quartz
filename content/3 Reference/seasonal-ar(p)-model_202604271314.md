---
publish: true
aliases:
  - Seasonal AR(P) Model
created: 2026-04-27T13:14:04.440+07:00
modified: 2026-04-27T13:14:04.441+07:00
published: 2026-04-27T13:14:04.441+07:00
creation-time: 2026-04-27 13:14
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

Let:

- $Y_t$ : time series
- $e_t$ : white noise
- $s$ : seasonal period

A **Seasonal AR(P) Model** (Model Musiman AR(P)) is defined as

$$
Y_t = \Phi_1 Y_{t-s} + \Phi_2 Y_{t-2s} + \dots + \Phi_P Y_{t-Ps} + e_t
$$

with the seasonal AR characteristic polynomial equation:

$$
\Phi(x) = 1 - \Phi_1 x^s - \Phi_2 x^{2s} - \dots - \Phi_P x^{Ps}
$$

> [!TIP] Interpretation
> Similar to a standard AR model, but the current value depends on past values at seasonal intervals (e.g., this January depends on last January).

## Properties

- **Stationarity:** This model is stationary if the absolute values of the roots of $\Phi(x) = 0$ are all greater than 1.
- **Autocorrelation (ACF):** The ACF at multiples of the seasonal period ($ks$) decays exponentially, while autocorrelation at other lags is zero. For AR(1) seasonal model, $\rho_{12k} = \Phi^k$ for $k=1, 2, \dots$
- **Partial Autocorrelation (PACF):** Cuts off after lag $P$ (which is a multiple of the seasonal period), while other lags are zero.
