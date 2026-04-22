---
publish: true
aliases:
  - Testing for ARCH Effects
created: 2026-04-20T12:25:01.366+07:00
modified: 2026-04-20T12:49:06.010+07:00
published: 2026-04-20T12:49:06.010+07:00
cssclasses: ""
creation-time: 2026-04-20 12:25
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Procedure

Two main tests for detecting autoregressive conditional heteroscedasticity in [[3 Reference/time-series-data_202603161400\|time series]] [[3 Reference/univariate-vs-multivariate-models_202603161400\|residuals]].

## Test 1: [[3 Reference/ljung-box-test_202603300222\|Ljung-Box Test]] on Squared Residuals

Tests whether the squared residuals $\{a_t^2\}$ exhibit [[3 Reference/autocovariance-and-autocorrelation_202603161400\|autocorrelation]].

### Hypotheses
- $H_0: \rho_1 = \rho_2 = ... = \rho_m = 0$ (no ARCH effects)
- $H_1:$ At least one $\rho_i \neq 0$ (ARCH effects present)

### Test Statistic

$$
Q(m) = T(T+2)\sum_{i=1}^{m} \frac{\hat{\rho}_i^2}{T-i} \sim \chi^2(m)
$$

where $\hat{\rho}_i$ is the sample autocorrelation of $a_t^2$ at lag $i$.

### Decision Rule

Reject $H_0$ if $Q(m) > \chi^2_{\alpha}(m)$

**Interpretation:** Rejection implies the presence of ARCH effects that need to be modeled.

## Test 2: Lagrange Multiplier (LM) Test

A regression-based test proposed by Engle (1982) that uses an auxiliary regression.

### Auxiliary Regression

Regress squared residuals on their own lags:

$$
a_t^2 = \alpha_0 + \alpha_1 a_{t-1}^2 + ... + \alpha_m a_{t-m}^2 + e_t
$$

### Hypotheses
- $H_0: \alpha_1 = \alpha_2 = ... = \alpha_m = 0$ (no ARCH effects)
- $H_1:$ At least one $\alpha_i > 0$ (ARCH effects present)

### Test Statistics

**LM Statistic:**
$$
LM = T \cdot R^2 \sim \chi^2(m)
$$
where $T$ is the sample size and $R^2$ is the coefficient of determination from the auxiliary regression.

**Alternative F-Statistic:**
$$
F = \frac{(SSR_0 - SSR_1)/m}{SSR_1/(T - 2m - 1)} \sim F(m, T - 2m - 1)
$$

where:
- $SSR_0 = \sum_{t=m+1}^{T} (a_t^2 - \bar{\omega})^2$ (restricted, $\bar{\omega} = \frac{1}{T}\sum a_t^2$)
- $SSR_1 = \sum_{t=m+1}^{T} \hat{e}_t^2$ (unrestricted)

### Decision Rule

Reject $H_0$ if $LM > \chi^2_{\alpha}(m)$ or if $p$-value $< \alpha$.

## Practical Example

For Intel stock returns:
- LM test: $F = 53.62$, $p \approx 0$
- Ljung-Box on $a_t^2$: $Q(12) = 89.85$, $p \approx 0$

Both strongly reject $H_0$, confirming significant ARCH effects.

## Related
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]
- [[3 Reference/procedure-building-a-volatility-model_202604201224\|Building a Volatility Model]]