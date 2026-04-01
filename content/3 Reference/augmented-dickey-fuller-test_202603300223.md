---
publish: true
aliases:
  - Augmented Dickey-Fuller Test
  - ADF Test
created: 2026-03-30T02:23:22.224+07:00
modified: 2026-03-31T19:05:25.399+07:00
published: 2026-03-31T19:05:25.399+07:00
creation-time: 2026-03-30 02:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

> [!ERROR]
> Might have errors. I'll check later #TODO

## Definition

The **Augmented Dickey-Fuller (ADF) test** extends the [[dickey-fuller-test_202603300223|Dickey-Fuller Test]] to AR(p) models where $p > 1$, handling autocorrelation in residuals.

## Model

For AR(p):$$\nabla Y\_t = \pi Y\_{t-1} + c\_1 \nabla Y\_{t-1} + c\_2 \nabla Y\_{t-2} + \dots + c\_{p-1} \nabla Y\_{t-p+1} + u\_t$$

where:

- $\pi = \theta\_1 + \theta\_2 + \dots + \theta\_p - 1 = \sum\_{i=1}^{p}\theta\_{i} -1$
- $c\_i = -(\theta\_{i+1} + \dots + \theta\_p) = -\sum\_{j=i+1}^{p} \theta\_{j}$
- $u\_{t}$ : [[white-noise_202603161400|White noise]]

> [!TIP]
> $u\_t$ is white noise — the error term after adding the lagged difference terms $\sum c\_i \nabla Y\_{t-i}$.
>
> That's the whole point of ADF over DF: the extra lagged differences are chosen specifically so that $u\_t$ is white noise (no remaining autocorrelation in residuals).

## Hypotheses

$$
\begin{align}
H\_0& : \pi = 0 \quad \text{(unit root, non-stationary)} \\
H\_1& : \pi < 0 \quad \text{(stationary)}
\end{align}
$$

## Test Statistic

$$\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})}$$

## Decision Rule

Reject $H\_0$ if $|\tau| > |\tau\_{\text{critical}}|$

> [!NOTE] Lag Selection
> The number of lagged difference terms ($p-1$) can be selected using AIC/BIC or by testing residual autocorrelation.

## Problem with DF Test

The DF test assumes $u\_t$ is uncorrelated (white noise). When residuals are autocorrelated, DF test is invalid.

## Model Variants

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

### Summary table

> [!NOTE] Critical Values
> Each variant has different critical values. Use the appropriate DF critical value table for the chosen model.

| Model                 | Equation                                                                                                         | When to Use             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| No constant/trend     | $\nabla Y\_t = \pi Y\_{t-1} + \textcolor{yellow}{\sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i}} + u\_t$                       | Fluctuates around zero  |
| With constant         | $\nabla Y\_t = \beta\_1 + \pi Y\_{t-1} + \textcolor{yellow}{\sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i}} + u\_t$             | Non-zero mean, no trend |
| With constant & trend | $\nabla Y\_t = \beta\_1 + \beta\_2 t + \pi Y\_{t-1} + \textcolor{yellow}{\sum\_{i=1}^{p-1} c\_i \nabla Y\_{t-i}} + u\_t$ | Shows trend             |

> [!tip]
> Only difference with [[dickey-fuller-test_202603300223|Dickey-Fuller Test]] is that this model adds

## Related

- [[dickey-fuller-test_202603300223|Dickey-Fuller Test]]
- [[weakly-stationary_202603161400|Weakly Stationary]]
- [[differencing-to-achieve-stationarity_202603161400|Differencing to Achieve Stationarity]]
