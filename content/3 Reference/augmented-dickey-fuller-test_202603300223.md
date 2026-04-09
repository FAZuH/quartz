---
publish: true
aliases:
  - Augmented Dickey-Fuller Test
  - ADF Test
created: 2026-04-09T23:07:39.005+07:00
modified: 2026-04-09T23:07:39.006+07:00
published: 2026-04-09T23:07:39.006+07:00
cssclasses: ""
creation-time: 2026-03-30 02:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


> [!ERROR]
> Might have errors. I'll check later #TODO

## Definition

The **Augmented Dickey-Fuller (ADF) test** extends the [[3 Reference/dickey-fuller-test_202603300223\|Dickey-Fuller Test]] to AR(p) models where $p > 1$, handling autocorrelation in residuals.

## Model

For AR(p):$$\nabla Y_t = \pi Y_{t-1} + c_1 \nabla Y_{t-1} + c_2 \nabla Y_{t-2} + \dots + c_{p-1} \nabla Y_{t-p+1} + u_t$$

where:
- $\pi = \theta_1 + \theta_2 + \dots + \theta_p - 1 = \sum_{i=1}^{p}\theta_{i} -1$
- $c_i = -(\theta_{i+1} + \dots + \theta_p) = -\sum_{j=i+1}^{p} \theta_{j}$
- $u_{t}$ : [[3 Reference/white-noise_202603161400\|White noise]]

> [!TIP]
> $u_t$ is white noise — the error term after adding the lagged difference terms $\sum c_i \nabla Y_{t-i}$.
> 
> That's the whole point of ADF over DF: the extra lagged differences are chosen specifically so that $u_t$ is white noise (no remaining autocorrelation in residuals).

## Hypotheses

$$
\begin{align}
H_0& : \pi = 0 \quad \text{(unit root, non-stationary)} \\
H_1& : \pi < 0 \quad \text{(stationary)}
\end{align}
$$

## Test Statistic

$$\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})}$$

## Decision Rule

Reject $H_0$ if $|\tau| > |\tau_{\text{critical}}|$

> [!NOTE] Lag Selection
> The number of lagged difference terms ($p-1$) can be selected using AIC/BIC or by testing residual autocorrelation.

## Problem with DF Test

The DF test assumes $u_t$ is uncorrelated (white noise). When residuals are autocorrelated, DF test is invalid.

## Model Variants


Three variants of the ADF test depending on the assumed structure of the time series.

### Variant 1: No Constant, No Trend

**Model**:
$$\nabla Y_t = \pi Y_{t-1} + \sum_{i=1}^{p-1} c_i \nabla Y_{t-i} + u_t$$

**Use when**:
- Series appears to fluctuate around zero
- No apparent trend

### Variant 2: With Constant (Intercept)

**Model**:
$$\nabla Y_t = \beta_1 + \pi Y_{t-1} + \sum_{i=1}^{p-1} c_i \nabla Y_{t-i} + u_t$$

**Use when**:
- Series fluctuates around non-zero mean
- No apparent trend

### Variant 3: With Constant and Trend

**Model**:
$$\nabla Y_t = \beta_1 + \beta_2 t + \pi Y_{t-1} + \sum_{i=1}^{p-1} c_i \nabla Y_{t-i} + u_t$$

**Use when**:
- Series shows deterministic trend
- Want to test if trend is stochastic or deterministic

### Summary table

> [!NOTE] Critical Values
> Each variant has different critical values. Use the appropriate DF critical value table for the chosen model.

| Model                 | Equation                                                                                                         | When to Use             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| No constant/trend     | $\nabla Y_t = \pi Y_{t-1} + \textcolor{yellow}{\sum_{i=1}^{p-1} c_i \nabla Y_{t-i}} + u_t$                       | Fluctuates around zero  |
| With constant         | $\nabla Y_t = \beta_1 + \pi Y_{t-1} + \textcolor{yellow}{\sum_{i=1}^{p-1} c_i \nabla Y_{t-i}} + u_t$             | Non-zero mean, no trend |
| With constant & trend | $\nabla Y_t = \beta_1 + \beta_2 t + \pi Y_{t-1} + \textcolor{yellow}{\sum_{i=1}^{p-1} c_i \nabla Y_{t-i}} + u_t$ | Shows trend             |

> [!tip]
> Only difference with [[3 Reference/dickey-fuller-test_202603300223\|Dickey-Fuller Test]] is that this model adds 

## Related

- [[3 Reference/dickey-fuller-test_202603300223\|Dickey-Fuller Test]]
- [[3 Reference/weakly-stationary_202603161400\|Weakly Stationary]]
- [[3 Reference/differencing-to-achieve-stationarity_202603161400\|Differencing to Achieve Stationarity]]