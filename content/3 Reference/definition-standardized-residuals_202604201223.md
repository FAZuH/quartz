---
publish: true
aliases:
  - Standardized Residuals
created: 2026-04-20T12:23:35.899+07:00
modified: 2026-04-20T12:47:28.895+07:00
published: 2026-04-20T12:47:28.895+07:00
cssclasses: ""
creation-time: 2026-04-20 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


> The standardized residuals in ARCH/GARCH models are used for diagnostic checking and represent the "shocks" normalized by the estimated volatility.

## Definition

Given the [[3 Reference/univariate-vs-multivariate-models_202603161400\|residuals]] $\hat{a}_t$ from the mean equation and the estimated conditional standard deviation $\hat{\sigma}_t$, the **standardized residual** is:

$$
\tilde{a}_t = \frac{\hat{a}_t}{\hat{\sigma}_t}
$$

## Properties

If the model is correctly specified, the standardized residuals $\{\tilde{a}_t\}$ should:
1. **Mimic the behavior of $\epsilon_t$** (the true innovation process)
2. Be **serially uncorrelated** (no autocorrelation in levels)
3. Have **constant variance** of 1 (homoscedastic)
4. Follow the assumed distribution (typically normal or Student-t)

## Diagnostic Checks

Standardized residuals are used for model checking:

| Check | Statistic | Purpose |
|-------|-----------|---------|
| Mean equation | [[3 Reference/ljung-box-test_202603300222\|Ljung-Box]] on $\{\tilde{a}_t\}$ | Test for remaining [[3 Reference/autocovariance-and-autocorrelation_202603161400\|autocorrelation]] |
| Volatility equation | Ljung-Box on $\{\tilde{a}_t^2\}$ | Test for remaining ARCH effects |
| Normality | QQ-plot, Shapiro-Wilk | Test distributional assumption |

> [!NOTE]
> If the Ljung-Box test on $\{\tilde{a}_t^2\}$ shows significant autocorrelation, the volatility model is inadequate and needs refinement.

## Related
- [[3 Reference/procedure-model-checking-for-arch-garch_202604201225\|Model Checking for ARCH/GARCH]]
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]
- [[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH(m,s) Model]]