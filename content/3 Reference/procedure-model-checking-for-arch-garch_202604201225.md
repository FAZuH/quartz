---
publish: true
aliases:
  - Model Checking for ARCH/GARCH
created: 2026-04-20T12:25:46.917+07:00
modified: 2026-04-20T12:49:51.083+07:00
published: 2026-04-20T12:49:51.083+07:00
creation-time: 2026-04-20 12:25
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

Diagnostic checking of fitted [[definition-arch(m)-model_202604201223|ARCH]]/[[definition-garch(m,s)-model_202604201224|GARCH]] models using [[definition-standardized-residuals_202604201223|standardized residuals]] and goodness-of-fit measures.

## Standardized Residuals

The foundation of model diagnostics is the standardized residual:

$$
\tilde{a}_t = \frac{\hat{a}_t}{\hat{\sigma}_t}
$$

If the model is correct, $\{\tilde{a}_t\}$ should behave like the assumed innovation process $\{\epsilon_t\}$ (typically i.i.d. $N(0,1)$).

## Checking the Mean Equation

**Test:** [[ljung-box-test_202603300222|Ljung-Box]] statistic on standardized residuals $\{\tilde{a}_t\}$

- $H_0:$ No [[autocovariance-and-autocorrelation_202603161400|autocorrelation]] in residuals
- If rejected → mean equation inadequate, need different [[armapq-process-model_202603161400|ARMA]] specification

## Checking the Volatility Equation

**Test:** Ljung-Box statistic on squared standardized residuals $\{\tilde{a}_t^2\}$

- $H_0:$ No remaining ARCH effects
- If rejected → volatility model inadequate, need higher order or different specification

## Checking Distributional Assumption

**Normality Tests:**

- **QQ-plot:** Visual check of normality
- **Shapiro-Wilk test:** Formal test for normality
- **Jarque-Bera test:** Tests skewness and kurtosis jointly

If normality is rejected, consider:

- Student-t distribution
- Skewed distributions
- Generalized Error Distribution (GED)

## Goodness-of-Fit Measures

### Sum of Squared Residuals (SSR)

Since $\epsilon_t = a_t / \sigma_t$:

$$
SSR = \sum_{t=1}^{T} \frac{\hat{a}_t^2}{\hat{\sigma}_t^2}
$$

### Log-Likelihood Value

From the fitted model:

$$
2\ell = \sum_{t=1}^{T} \left[ \ln(\hat{\sigma}_t^2) + \frac{\hat{a}_t^2}{\hat{\sigma}_t^2} \right] - T\ln(2\pi)
$$

### Information Criteria

Use for model comparison (lower is better):

| Criterion | Formula | Penalty |
|-----------|---------|---------|
| **AIC** | $-2\ell + 2n$ | $2n$ |
| **BIC** | $-2\ell + n\ln(T)$ | $n\ln(T)$ |

where $n$ = number of parameters, $T$ = sample size.

> [!TIP] Model Selection
> BIC has a stronger penalty for complexity than AIC, generally favoring more parsimonious models.

## Summary Checklist

| Component | Test | Target |
|-----------|------|--------|
| Mean equation | Ljung-Box on $\tilde{a}_t$ | $p > 0.05$ |
| Volatility equation | Ljung-Box on $\tilde{a}_t^2$ | $p > 0.05$ |
| Distribution | QQ-plot, Shapiro-Wilk | Resemble assumed dist. |
| Overall fit | AIC, BIC | Compare across models |

## Related

- [[definition-standardized-residuals_202604201223|Standardized Residuals]]
- [[procedure-building-a-volatility-model_202604201224|Building a Volatility Model]]
- [[procedure-maximum-likelihood-estimation-for-arch-garch_202604201225|Maximum Likelihood Estimation]]
