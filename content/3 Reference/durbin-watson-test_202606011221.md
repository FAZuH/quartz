---
publish: true
aliases:
  - Durbin-Watson Test
created: 2026-06-01T12:21:19.207+07:00
modified: 2026-06-01T12:21:19.209+07:00
published: 2026-06-01T12:21:19.209+07:00
creation-time: 2026-06-01 12:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Tests for first-order serial correlation in regression residuals using the Durbin-Watson statistic.

## Procedure

Tests whether the residuals from a regression model exhibit first-order serial correlation. It is one of the primary diagnostic checks after fitting a model.

Given residuals $\hat{e}_t$ from an estimated model, the Durbin-Watson statistic is:

$$
d = \frac{\sum_{t=2}^{n} (\hat{e}_t - \hat{e}_{t-1})^2}{\sum_{t=1}^{n} \hat{e}_t^2}
$$

For large $n$, the statistic is approximately related to the first-order autocorrelation $\hat{\rho}$:

$$
d \approx 2(1 - \hat{\rho})
$$

### Interpretation

| $d$ Value | Indication |
|-----------|------------|
| $d \approx 2$ | No serial correlation ($\hat{\rho} \approx 0$) |
| $d \to 0$ | Positive serial correlation ($\hat{\rho} \to 1$) |
| $d \to 4$ | Negative serial correlation ($\hat{\rho} \to -1$) |

### Hypotheses

- $H_0$: $\rho = 0$ (no first-order autocorrelation)
- $H_1$: $\rho \neq 0$ or $\rho > 0$ or $\rho < 0$

> [!WARNING] Limitations
> Only tests for **first-order** (AR(1)) serial correlation. Not valid when lagged dependent variables are present. For higher-order correlation or models with lagged dependent variables, use the [[Breusch-Godfrey LM Test]] instead.

## Related

- [[Breusch-Godfrey LM Test]]
- [[ljung-box-test_202603300222|Ljung-Box Test]]
- [[box-pierce-test_202603300222|Box-Pierce Test]]
- [[building-models-with-the-box-jenkins-strategy_202603161400|Box-Jenkins Strategy]]
