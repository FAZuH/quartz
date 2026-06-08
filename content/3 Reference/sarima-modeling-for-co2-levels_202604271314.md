---
publish: true
aliases:
  - SARIMA Modeling for CO2 Levels
created: 2026-04-27T13:14:16.009+07:00
modified: 2026-04-27T13:14:16.009+07:00
published: 2026-04-27T13:14:16.009+07:00
creation-time: 2026-04-27 13:14
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Example

This example demonstrates modeling monthly CO2 levels in Alert, NWT, Canada (1994-2004) using a Seasonal ARIMA model.

## 1. Identification

- The original time series plot shows a clear upward trend and a strong seasonal pattern.
- The ACF of the original series confirms this with strong correlations at lags 12, 24, 36, etc.
- A first difference $\nabla Y_t = Y_t - Y_{t-1}$ removes the general upward trend, but strong seasonality remains.
- A seasonal difference $\nabla_{12} (\nabla Y_t)$ removes the remaining seasonality. The new series appears stationary.
- The ACF of the doubly differenced series shows very little remaining autocorrelation, suggesting a simple model incorporating lag 1 and lag 12 autocorrelations might be adequate.

## 2. Model Specification

Based on the ACF, a multiplicative seasonal $\text{ARIMA}(0,1,1) \times (0,1,1)_{12}$ is specified.

## 3. Model Fitting

Let $X_t = \nabla Y_t = Y_t - Y_{t-1}$ and $W_t = \nabla_{12} X_t = X_t - X_{t-12}$.
Then $W_t = Y_t - Y_{t-1} - Y_{t-12} + Y_{t-13}$.

The fitted model is:

$$
Y_t - Y_{t-1} - Y_{t-12} + Y_{t-13} = e_t - \theta e_{t-1} - \Theta e_{t-12} + \theta\Theta e_{t-13}
$$

## 4. Diagnostic Checking

- Residual analysis (ACF, PACF) is performed to ensure errors resemble white noise.
- Normality of residuals is checked (e.g., via QQ plots or histograms).
- Overfitting is considered by trying a more complex model like $\text{ARIMA}(0,1,2) \times (0,1,1)_{12}$ to see if it significantly improves the fit.
