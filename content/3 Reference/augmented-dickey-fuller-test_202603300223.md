---
publish: true
aliases:
  - Augmented Dickey-Fuller Test
created: 2026-03-30T02:23:22.224+07:00
modified: 2026-03-30T02:23:22.224+07:00
published: 2026-03-30T02:23:22.224+07:00
creation-time: 2026-03-30 02:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

---

creation-time: 2026-03-30 14:00
status: in progress
parent:

- "[[forecasting methods]]"
  publish: true
  aliases:
- Augmented Dickey-Fuller Test
- ADF Test

---

## Definition

The **Augmented Dickey-Fuller (ADF) test** extends the [[definition-dickey-fuller-test_202603300223|Dickey-Fuller test]] to AR(p) models where $p > 1$, handling autocorrelation in residuals.

### Problem with DF Test

The DF test assumes $u\_t$ is uncorrelated (white noise). When residuals are autocorrelated, DF test is invalid.

### Model

For AR(p):$$\nabla Y\_t = \pi Y\_{t-1} + c\_1 \nabla Y\_{t-1} + c\_2 \nabla Y\_{t-2} + \dots + c\_{p-1} \nabla Y\_{t-p+1} + u\_t$$

where:

- $\pi = \theta\_1 + \theta\_2 + \dots + \theta\_p - 1$
- $c\_i = -(\theta\_{i+1} + \dots + \theta\_p)$

### Hypotheses

$$H\_0: \pi = 0 \quad \text{(unit root, non-stationary)}$$

$$H\_1: \pi < 0 \quad \text{(stationary)}$$

### Test Statistic

$$\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})}$$

### Decision Rule

Reject $H\_0$ if $|\tau| > |\tau\_{\text{critical}}|$

> [!NOTE] Lag Selection
> The number of lagged difference terms ($p-1$) can be selected using AIC/BIC or by testing residual autocorrelation.

## Model Variants

| Model | Equation |
|-------|----------|
| No constant/trend | $\nabla Y\_t = \pi Y\_{t-1} + \sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i} + u\_t$ |
| With constant | $\nabla Y\_t = \beta\_1 + \pi Y\_{t-1} + \sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i} + u\_t$ |
| With constant & trend | $\nabla Y\_t = \beta\_1 + \beta\_2 t + \pi Y\_{t-1} + \sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i} + u\_t$ |

## Related

- [[definition-dickey-fuller-test_202603300223|Dickey-Fuller Test]]
- [[weakly-stationary_202603161400|Weakly Stationary]]
- [[differencing-to-achieve-stationarity_202603161400|Differencing to Achieve Stationarity]]
