---
publish: true
aliases:
  - Engle-Granger Cointegration Test
created: 2026-06-01T12:22:46.033+07:00
modified: 2026-06-01T12:22:46.033+07:00
published: 2026-06-01T12:22:46.033+07:00
creation-time: 2026-06-01 12:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Two-step residual-based cointegration test that applies the ADF test to residuals from a long-run regression.

## Procedure

A two-step procedure for testing [[Cointegration]] between variables. The test uses the [[augmented-dickey-fuller-test_202603300223|ADF test]] on residuals from a long-run regression.

### Procedure

**Step 1: Estimate the Long-Run Regression**

Regress $Y_t$ on $X_t$:

$$
Y_t = \beta_0 + \beta_1 X_t + e_t
$$

Obtain the residuals $\hat{e}_t$.

**Step 2: Test Residuals for Stationarity**

Apply the ADF test to the residuals $\hat{e}_t$:

$$
\Delta \hat{e}_t = \gamma \hat{e}_{t-1} + \sum_{i=1}^{p} \delta_i \Delta \hat{e}_{t-i} + u_t
$$

**Decision:**

- If residuals are **stationary** (reject $H_0$: unit root) → variables are **cointegrated**, a long-run relationship exists
- If residuals are **non-stationary** (fail to reject $H_0$) → no cointegration

> [!WARNING] Critical Values
> Standard ADF critical values **do not apply** because the residuals are estimated, not observed. Use the **Engle-Granger critical values** (more negative than standard ADF critical values).

### Example

For a regression of trade balance (TB) on nominal exchange rate (NER):

$$
\text{TB}_t = 740.09 + 0.478 \cdot \text{NER}_t + \hat{e}_t
$$

ADF test on $\hat{e}_t$: statistic = $-4.73$, significant at 1% → TB and NER are **cointegrated**.

## Related

- [[Cointegration]]
- [[Johansen Cointegration Test]]
- [[Durbin-Watson Cointegration Test]]
- [[augmented-dickey-fuller-test_202603300223|Augmented Dickey-Fuller Test]]
- [[Error Correction Model (ECM)]]
