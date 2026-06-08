---
publish: true
aliases:
  - Granger Causality Test
created: 2026-06-01T12:24:11.276+07:00
modified: 2026-06-01T12:24:11.276+07:00
published: 2026-06-01T12:24:11.276+07:00
creation-time: 2026-06-01 12:24
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Statistical test for determining whether one time series is useful in forecasting another; used for variable selection in VAR models.

## Procedure

A test for determining whether lagged values of one [[time-series-data_202603161400|time series]] variable help predict another. If variable $X$ **Granger-causes** variable $Y$, then past values of $X$ contain information that improves the forecast of $Y$ beyond using only past values of $Y$.

> [!NOTE]
> Granger causality does **not** imply true causality — it only tests for **predictive power** based on temporal precedence.

### Procedure

**Step 1:** Estimate the restricted model (no lags of $X$):

$$
Y_t = \alpha_0 + \sum_{i=1}^{p} \beta_i Y_{t-i} + u_t
$$

**Step 2:** Estimate the unrestricted model (with lags of $X$):

$$
Y_t = \alpha_0 + \sum_{i=1}^{p} \beta_i Y_{t-i} + \sum_{j=1}^{p} \gamma_j X_{t-j} + v_t
$$

**Step 3:** Compute the F-statistic:

$$
F = \frac{(\text{SSR}_R - \text{SSR}_U) / p}{\text{SSR}_U / (n - 2p - 1)}
$$

where $\text{SSR}_R$ and $\text{SSR}_U$ are sum of squared residuals from the restricted and unrestricted models.

### Hypotheses

- $H_0$: $\gamma_1 = \gamma_2 = \cdots = \gamma_p = 0$ ($X$ does **not** Granger-cause $Y$)
- $H_1$: At least one $\gamma_j \neq 0$ ($X$ does Granger-cause $Y$)

Under $H_0$, $F \sim F_{(p,\, n-2p-1)}$.

### Decision

If $F > F_{\alpha, (p,\, n-2p-1)}$ → reject $H_0$ → $X$ Granger-causes $Y$.

Test both directions to determine the relationship:

- **Unidirectional**: $X \to Y$ or $Y \to X$
- **Bidirectional**: $X \leftrightarrow Y$ (both variables Granger-cause each other)
- **Independent**: no Granger causality in either direction

### Use in VAR

If variables show **bidirectional** Granger causality, a [[Vector Autoregression (VAR)]] model is appropriate.

## Related

- [[Vector Autoregression (VAR)]]
- [[Impulse Response Function (IRF)]]
- [[Variance Decomposition]]
- [[aic-criterion_202603300224|AIC Criterion]]
