---
publish: true
aliases:
  - Durbin-Watson Cointegration Test
created: 2026-06-01T12:22:53.501+07:00
modified: 2026-06-01T12:22:53.501+07:00
published: 2026-06-01T12:22:53.501+07:00
creation-time: 2026-06-01 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Tests cointegration using the Durbin-Watson statistic from the long-run regression, with critical values developed by Sargan and Bhargava.

## Procedure

An alternative test for [[Cointegration]] that uses the [[Durbin-Watson Test|Durbin-Watson]] statistic $d$ from the estimated long-run regression.

### Procedure

**Step 1:** Estimate the long-run regression:

$$
Y_t = \beta_0 + \beta_1 X_t + e_t
$$

**Step 2:** Obtain the Durbin-Watson statistic $d$ from this regression.

**Step 3:** Compare $d$ to the critical values developed by **Sargan and Bhargava**.

### Hypotheses

- $H_0$: $d = 0$ (no cointegration — residuals follow a random walk)
- $H_1$: $d > 0$ (cointegration — residuals are stationary)

Note: This is **different** from the [[Durbin-Watson Test|standard Durbin-Watson test]] where $H_0$ is $d = 2$ (no autocorrelation).

### Critical Values (Sargan-Bhargava)

| Significance Level | Critical Value |
|:------------------:|:--------------:|
| $\alpha = 1\%$     | 0.511 |
| $\alpha = 5\%$     | 0.386 |
| $\alpha = 10\%$    | 0.322 |

**Decision:** If the computed $d$ is **greater** than the critical value → reject $H_0$ → variables are cointegrated.

### Example

From the TB-NER regression, $d = 1.083$. Since $1.083 > 0.511$ (all critical values), the variables are **cointegrated**, consistent with the [[Engle-Granger Cointegration Test]] result.

## Related

- [[Cointegration]]
- [[Engle-Granger Cointegration Test]]
- [[Johansen Cointegration Test]]
- [[Durbin-Watson Test]]
