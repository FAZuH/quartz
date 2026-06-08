---
publish: true
aliases:
  - Deterministic Trends Forecast
created: 2026-04-27T13:21:06.036+07:00
modified: 2026-04-27T13:34:31.103+07:00
published: 2026-04-27T13:34:31.103+07:00
creation-time: 2026-04-27 13:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Properties

For a deterministic trend model $Y_t = \mu_t + X_t$, the forecast is:
$\hat{Y}_t(l) = \mu_{t+l}$

The forecast error is $e_t(l) = X_{t+l}$, which is unbiased ($E[e_t(l)]=0$). The error variance is $Var(e_t(l)) = \gamma_0$.

**Specific Models:**

- **Linear trend** ($\mu_t = \beta_0 + \beta_1 t$): $\hat{Y}_t(l) = \beta_0 + \beta_1(t+l)$
- **Seasonal model** ($\mu_t = \mu_{t+12}$): $\hat{Y}_t(l) = \hat{Y}_t(l+12)$
