---
publish: true
aliases:
  - Variants of the ADF Test
created: 2026-03-30T02:25:42.411+07:00
modified: 2026-03-30T03:54:30.544+07:00
published: 2026-03-30T03:54:30.544+07:00
creation-time: 2026-03-30 02:25
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure: ADF Test Variants

Three variants of the ADF test depending on the assumed structure of the time series.

### Variant 1: No Constant, No Trend

**Model**:
$$\nabla Y\_t = \pi Y\_{t-1} + \sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i} + u\_t$$

**Use when**:

- Series appears to fluctuate around zero
- No apparent trend

### Variant 2: With Constant (Intercept)

**Model**:
$$\nabla Y\_t = \beta\_1 + \pi Y\_{t-1} + \sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i} + u\_t$$

**Use when**:

- Series fluctuates around non-zero mean
- No apparent trend

### Variant 3: With Constant and Trend

**Model**:
$$\nabla Y\_t = \beta\_1 + \beta\_2 t + \pi Y\_{t-1} + \sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i} + u\_t$$

**Use when**:

- Series shows deterministic trend
- Want to test if trend is stochastic or deterministic

## Decision Summary

| Model | Critical Value | When to Use |
|-------|---------------|-------------|
| No constant/trend | Most negative | Fluctuates around zero |
| With constant | Intermediate | Non-zero mean, no trend |
| With constant & trend | Least negative | Shows trend |

> [!NOTE] Critical Values
> Each variant has different critical values. Use the appropriate DF critical value table for the chosen model.

## Related

- [[definition-dickey-fuller-test_202603300223|Dickey-Fuller Test]]
- [[definition-augmented-dickey-fuller-test_202603300223|Augmented Dickey-Fuller Test]]
