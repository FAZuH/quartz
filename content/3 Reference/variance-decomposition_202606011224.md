---
publish: true
aliases:
  - Variance Decomposition
created: 2026-06-01T12:24:33.367+07:00
modified: 2026-06-01T12:24:33.367+07:00
published: 2026-06-01T12:24:33.367+07:00
creation-time: 2026-06-01 12:24
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Decomposes the forecast error variance of each variable in a VAR into proportions attributable to shocks from each variable in the system.

## Procedure

A complement to the [[Impulse Response Function (IRF)]] in [[Vector Autoregression (VAR)]] analysis. While IRF traces the effect of shocks over time, **Variance Decomposition** quantifies the **relative importance** of each shock in explaining the forecast error variance of each variable.

### Concept

For each variable in the VAR, the forecast error variance at each forecast horizon is decomposed into the proportion contributed by:

1. Shocks to the variable **itself**
2. Shocks to **each other variable** in the system

### Interpretation

At short horizons, a variable's own shocks typically dominate. At longer horizons, shocks from other variables may explain an increasing share of the variance.

### Example (GDP-Import, VAR(1))

| Period | Import (by Import shock) | Import (by GDP shock) | GDP (by Import shock) | GDP (by GDP shock) |
|:------:|:------------------------:|:---------------------:|:---------------------:|:------------------:|
| 1 | 100% | 0% | 41.4% | 58.6% |
| 2 | 92.6% | 7.4% | 49.3% | 50.7% |
| 5 | 91.3% | 8.7% | 71.2% | 28.8% |
| 10 | 90.8% | 9.2% | 83.6% | 16.4% |

**Observations:**

- Import variance is mainly explained by its own shocks (>90%) — Import is relatively **exogenous**
- GDP variance is increasingly explained by Import shocks over time (41% → 84%) — GDP is relatively **endogenous**
- This aligns with the Granger Causality result: Import → GDP is stronger than GDP → Import

### Exogeneity vs Endogeneity (Enders, 2015)

- If shocks to $\varepsilon_{zt}$ explain **none** of the forecast error variance of $\{y_t\}$ at all horizons → $\{y_t\}$ is **exogenous**
- If shocks to $\varepsilon_{zt}$ explain **all** of the forecast error variance of $\{y_t\}$ at all horizons → $\{y_t\}$ is **endogenous**
- In practice, a variable's own shocks dominate at short horizons, with other variables contributing more at longer horizons

## Related

- [[Impulse Response Function (IRF)]]
- [[Vector Autoregression (VAR)]]
- [[Granger Causality Test]]
- [[forecasting-model-accuracy-measures_202603161400|Forecasting Model Accuracy Measures]]
