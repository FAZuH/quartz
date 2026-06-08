---
publish: true
aliases:
  - ECM Engle-Granger
created: 2026-06-01T12:23:21.078+07:00
modified: 2026-06-01T12:23:21.078+07:00
published: 2026-06-01T12:23:21.078+07:00
creation-time: 2026-06-01 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Two-step Error Correction Model that corrects short-run disequilibrium toward long-run equilibrium using the lagged cointegration error.

## Procedure

The **Engle-Granger two-step ECM** is a method for estimating an [[Error Correction Model (ECM)]] when variables are [[Cointegration|cointegrated]].

### Step 1: Long-Run Equilibrium Regression

Estimate the long-run relationship:

$$
Y_t = \beta_0 + \beta_1 X_t + e_t
$$

Save the residuals $e_t$, called the **equilibrium error**. Here, $\beta_1$ is the **long-run coefficient**.

### Step 2: Short-Run ECM with Error Correction

Model the changes (first differences) including the lagged equilibrium error:

$$
\Delta Y_t = \alpha_0 + \alpha_1 \Delta X_t + \alpha_2 e_{t-1} + u_t
$$

where:

- $\alpha_1$ = **short-run coefficient** (immediate effect of $\Delta X$ on $\Delta Y$)
- $\alpha_2$ = **error correction coefficient** (adjustment speed)
- $e_{t-1} = Y_{t-1} - \beta_0 - \beta_1 X_{t-1}$ (lagged cointegration error)

### Interpretation

- **$\alpha_2 < 0$ (expected)**: The system corrects toward equilibrium. If $Y_{t-1}$ was above equilibrium ($e_{t-1} > 0$), then $\Delta Y_t$ decreases.
- **$|\alpha_2|$**: The **speed of adjustment** — the proportion of disequilibrium corrected in one period.
- **Statistical significance of $\alpha_2$**: Validates the ECM specification.

### Example

For trade balance (TB) and nominal exchange rate (NER):

$$
\Delta \text{TB}_t = 43.25 + 0.225 \Delta \text{NER}_t - 0.391 e_{t-1}
$$

- **Short-run coefficient**: 0.225 (positive short-run effect of NER on TB)
- **Error correction coefficient**: $-0.391$
  - About 39% of disequilibrium is corrected each quarter
  - Full adjustment takes approximately $1/0.391 \approx 2.5$ quarters
- **Long-run coefficient**: 0.478 (from Step 1 regression)

> [!NOTE]
> The ECM can be extended with more lags (higher-order ECM) if needed.

## Related

- [[Error Correction Model (ECM)]]
- [[Cointegration]]
- [[Engle-Granger Cointegration Test]]
- [[ARDL Model]]
- [[least-squares-for-linear-trend-estimation_202603161400|Least Squares for Linear Trend]]
