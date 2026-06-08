---
publish: true
aliases:
  - Seasonal MA(Q) Model
created: 2026-04-27T13:14:01.901+07:00
modified: 2026-04-27T14:54:00.041+07:00
published: 2026-04-27T14:54:00.041+07:00
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

A **Seasonal MA(Q) Model** is defined as

$$
Y_t = e_t - \Theta_1 e_{t-s} - \Theta_2 e_{t-2s} - \dots - \Theta_Q e_{t-Qs}
$$

with the seasonal MA characteristic polynomial equation:

$$
\Theta(x) = 1 - \Theta_1 x^s - \Theta_2 x^{2s} - \dots - \Theta_Q x^{Qs}
$$

> [!TIP] Interpretation
> It is an extension of the standard MA model, but the errors are separated by the seasonal lag $s$ instead of lag 1.

## Properties

- **Invertibility:** This model is invertible if the absolute values of the roots of $\Theta(x) = 0$ are all greater than 1.
- **Autocorrelation:** Like a non-seasonal MA(q) model, a seasonal MA(Q) model has non-zero autocorrelation only at lags $s, 2s, \dots, Qs$, with:

$$
\rho_{ks} \neq 0 \text{ for } k = 1, 2, \dots, Q
$$

and zero otherwise. For a seasonal MA(1) model (where $s=12$), the autocorrelation is non-zero only for lag 12.
