---
publish: true
aliases:
  - Forecasting with ARCH(m)
created: 2026-04-20T12:26:09.316+07:00
modified: 2026-04-20T12:50:13.796+07:00
published: 2026-04-20T12:50:13.796+07:00
cssclasses: ""
creation-time: 2026-04-20 12:26
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Procedure

Computing multi-step ahead volatility [[3 Reference/forecasting-model-accuracy-measures_202603161400\|forecasts]] for [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m)]] models.

## Setup

Consider an [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m)]] model at forecast origin $h$:

$$
\sigma_{h+\ell}^2 = \alpha_0 + \sum_{i=1}^{m} \alpha_i a_{h+\ell-i}^2
$$

We want to compute $\sigma_h^2(\ell) = E(\sigma_{h+\ell}^2 | F_h)$, the $\ell$-step ahead forecast.

## 1-Step-Ahead Forecast

At time $h+1$, all lagged values are known:

$$
\boxed{\sigma_h^2(1) = \alpha_0 + \alpha_1 a_h^2 + \alpha_2 a_{h-1}^2 + ... + \alpha_m a_{h+1-m}^2}
$$

All quantities on the right-hand side are known at time $h$.

## 2-Step-Ahead Forecast

At time $h+2$, $a_{h+1}^2$ is unknown, so we substitute its expectation:

$$
\sigma_h^2(2) = \alpha_0 + \alpha_1 \sigma_h^2(1) + \alpha_2 a_h^2 + ... + \alpha_m a_{h+2-m}^2
$$

## ℓ-Step-Ahead Forecast (General Formula)

For $\ell > 1$:

$$
\boxed{\sigma_h^2(\ell) = \alpha_0 + \sum_{i=1}^{m} \alpha_i \sigma_h^2(\ell-i)}
$$

where:
- If $\ell-i \leq 0$, use $a_{h+\ell-i}^2$ (observed value)
- If $\ell-i > 0$, use $\sigma_h^2(\ell-i)$ (previous forecast)

This is a recursive formula that builds forecasts step by step.

## Long-Run Behavior

As $\ell \to \infty$, forecasts converge to the **unconditional variance**:

$$
\sigma_h^2(\ell) \to \frac{\alpha_0}{1 - \sum_{i=1}^{m} \alpha_i} = E(a_t^2)
$$

provided that $\sum_{i=1}^{m} \alpha_i < 1$ ([[3 Reference/weakly-stationary_202603161400\|stationarity]] condition).

> [!TIP] Interpretation
> Volatility forecasts "mean-revert" toward the long-run average volatility. The speed of mean reversion depends on the sum of ARCH coefficients.

## Example: ARCH(1)

For an ARCH(1) model $\sigma_t^2 = \alpha_0 + \alpha_1 a_{t-1}^2$:

| Step | Formula | Notes |
|------|---------|-------|
| 1 | $\sigma_h^2(1) = \alpha_0 + \alpha_1 a_h^2$ | Known $a_h^2$ |
| 2 | $\sigma_h^2(2) = \alpha_0 + \alpha_1 \sigma_h^2(1)$ | Substitute forecast |
| 3 | $\sigma_h^2(3) = \alpha_0 + \alpha_1 \sigma_h^2(2)$ | Continue recursively |
| $\ell$ | $\sigma_h^2(\ell) = \alpha_0 + \alpha_1 \sigma_h^2(\ell-1)$ | General formula |

Long-run: $\sigma_h^2(\ell) \to \frac{\alpha_0}{1-\alpha_1}$ as $\ell \to \infty$

## Forecast Intervals

Forecast intervals for returns incorporate the conditional variance:

$$
r_{h+\ell} | F_h \sim N\left(0, \sigma_h^2(\ell)\right)
$$

A $(1-\alpha)$ forecast interval is:

$$
\pm z_{\alpha/2} \cdot \sqrt{\sigma_h^2(\ell)}
$$

where $z_{\alpha/2}$ is the standard normal critical value.

## Related
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]
- [[3 Reference/procedure-forecasting-with-garch(m,s)_202604201226\|Forecasting with GARCH(m,s)]]