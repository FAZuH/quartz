---
publish: true
aliases:
  - Forecasting with GARCH(m,s)
created: 2026-04-20T12:26:38.383+07:00
modified: 2026-04-20T12:50:41.232+07:00
published: 2026-04-20T12:50:41.232+07:00
creation-time: 2026-04-20 12:26
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

Computing multi-step ahead volatility [[forecasting-model-accuracy-measures_202603161400|forecasts]] for [[definition-garch(m,s)-model_202604201224|GARCH]] models, with special focus on the GARCH(1,1) case.

## Setup

Consider a [[definition-garch(m,s)-model_202604201224|GARCH(1,1)]] model at forecast origin $h$:

$$
\sigma_{h+\ell}^2 = \alpha_0 + \alpha_1 a_{h+\ell-1}^2 + \beta_1 \sigma_{h+\ell-1}^2
$$

The general GARCH(m,s) follows similar recursive logic.

## 1-Step-Ahead Forecast

All quantities are known at time $h$:

$$
\boxed{\sigma_h^2(1) = \alpha_0 + \alpha_1 a_h^2 + \beta_1 \sigma_h^2}
$$

Note: $\sigma_h^2$ is the estimated conditional variance at time $h$.

## 2-Step-Ahead Forecast

At time $h+2$, both $a_{h+1}^2$ and $\sigma_{h+1}^2$ are unknown. We use:

$$
a_{h+1}^2 = \sigma_{h+1}^2 \epsilon_{h+1}^2
$$

Since $E(\epsilon_{h+1}^2 | F_h) = 1$:

$$
E(a_{h+1}^2 | F_h) = \sigma_h^2(1)
$$

Therefore:

$$
\sigma_h^2(2) = \alpha_0 + \alpha_1 \sigma_h^2(1) + \beta_1 \sigma_h^2(1) = \alpha_0 + (\alpha_1 + \beta_1)\sigma_h^2(1)
$$

## ℓ-Step-Ahead Forecast (General Formula)

For $\ell > 1$:

$$
\boxed{\sigma_h^2(\ell) = \alpha_0 + (\alpha_1 + \beta_1)\sigma_h^2(\ell-1)}
$$

This recursive formula shows the key role of $(\alpha_1 + \beta_1)$ in forecast dynamics.

## Explicit Formula

By repeated substitution:

$$
\sigma_h^2(\ell) = \frac{\alpha_0[1 - (\alpha_1 + \beta_1)^{\ell-1}]}{1 - (\alpha_1 + \beta_1)} + (\alpha_1 + \beta_1)^{\ell-1}\sigma_h^2(1)
$$

## Long-Run Behavior

As $\ell \to \infty$:

$$
\boxed{\sigma_h^2(\ell) \to \frac{\alpha_0}{1 - \alpha_1 - \beta_1}}
$$

provided that $\alpha_1 + \beta_1 < 1$ ([[weakly-stationary_202603161400|stationarity]] condition).

> [!TIP] Interpretation
> The term $(\alpha_1 + \beta_1)$ determines **volatility persistence**:
>
> - Values close to 1 → slow mean reversion, forecasts stay elevated longer
> - Values close to 0 → rapid mean reversion

## Half-Life of Shocks

The "half-life" of a volatility shock is:

$$
\text{Half-life} = \frac{\ln(0.5)}{\ln(\alpha_1 + \beta_1)}
$$

This measures how many periods it takes for a shock to half-decay.

## Comparison: ARCH vs GARCH Forecasting

| Feature | ARCH(m) | GARCH(1,1) |
|---------|---------|------------|
| 1-step | $\alpha_0 + \sum \alpha_i a_{h+1-i}^2$ | $\alpha_0 + \alpha_1 a_h^2 + \beta_1 \sigma_h^2$ |
| ℓ-step recursive | $\sigma_h^2(\ell) = \alpha_0 + \sum \alpha_i \sigma_h^2(\ell-i)$ | $\sigma_h^2(\ell) = \alpha_0 + (\alpha_1+\beta_1)\sigma_h^2(\ell-1)$ |
| Long-run | $\frac{\alpha_0}{1-\sum\alpha_i}$ | $\frac{\alpha_0}{1-\alpha_1-\beta_1}$ |
| Persistence | Determined by $\sum \alpha_i$ | Determined by $\alpha_1 + \beta_1$ |

## Forecasting Returns

Return forecasts:

$$
E(r_{h+\ell} | F_h) = \mu \quad \text{(if constant mean)}
$$

Forecast variance increases with horizon due to accumulated uncertainty:

$$
\text{Var}(r_{h+\ell} | F_h) > \sigma_h^2(\ell)
$$

## Related

- [[definition-garch(m,s)-model_202604201224|GARCH(m,s) Model]]
- [[procedure-forecasting-with-arch(m)_202604201226|Forecasting with ARCH(m)]]
- [[definition-garch(m,s)-model_202604201224#Volatility Persistence|Property: Volatility Persistence]]
