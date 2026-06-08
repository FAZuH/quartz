---
publish: true
aliases:
  - Breusch-Godfrey LM Test
created: 2026-06-01T12:21:26.435+07:00
modified: 2026-06-01T12:21:26.435+07:00
published: 2026-06-01T12:21:26.435+07:00
creation-time: 2026-06-01 12:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Lagrange Multiplier test for higher-order serial correlation in residuals, applicable even with lagged dependent variables.

## Procedure

An alternative to the [[ljung-box-test_202603300222|Ljung-Box]] and [[box-pierce-test_202603300222|Box-Pierce]] statistics for testing serial correlation. The test belongs to the class of asymptotic (large-sample) tests known as **Lagrange Multiplier (LM)** tests.

Unlike the [[Durbin-Watson Test]] which only tests for **AR(1)** errors, the Breusch-Godfrey test may be used to test for **higher-order ARMA errors** and is applicable whether there are lagged dependent variables or not.

### Procedure

**Step 1:** Estimate the original regression model and obtain residuals $\hat{e}_t$.

**Step 2:** Regress $\hat{e}_t$ on the original regressors and $p$ lagged residuals $\hat{e}_{t-1}, \hat{e}_{t-2}, \ldots, \hat{e}_{t-p}$.

**Step 3:** Compute the test statistic:

$$
\text{LM} = n \cdot R^2
$$

where $R^2$ is from the auxiliary regression and $n$ is the sample size.

**Step 4:** Under $H_0$ of no serial correlation up to order $p$:

$$
\text{LM} \sim \chi^2_{(p)}
$$

> [!NOTE]
> If $\text{LM} > \chi^2_{\alpha, (p)}$, reject $H_0$ — significant serial correlation is present up to order $p$.

## Related

- [[Durbin-Watson Test]]
- [[ljung-box-test_202603300222|Ljung-Box Test]]
- [[box-pierce-test_202603300222|Box-Pierce Test]]
