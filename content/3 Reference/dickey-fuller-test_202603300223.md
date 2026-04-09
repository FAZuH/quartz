---
publish: true
aliases:
  - Dickey-Fuller Test
created: 2026-04-09T23:07:39.364+07:00
modified: 2026-04-09T23:07:39.365+07:00
published: 2026-04-09T23:07:39.365+07:00
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

The **Dickey-Fuller (DF) test** tests for the presence of an [[3 Reference/ar-characteristic-equation_202603161400#Unit Root\|unit root]] in an [[3 Reference/ar1-process-model_202603161400\|AR(1) Process]] process.

This determines whether a time series is non-[[3 Reference/weakly-stationary_202603161400\|stationary]] or not.

> [!tip]
> An AR(p) model is stationary, if all the roots $x$ of its [[3 Reference/ar-characteristic-equation_202603161400\|characteristic equation]] is $|x|>1$.
> 
> Unit root means there exists an $|x|=1$, which implies that the AR(p) model is not stationary.

## Model

$$Y_t = \theta Y_{t-1} + u_t$$

If $\theta = 1$, the model becomes a random walk (non-stationary).

## Reformulation

$$\nabla Y_t = \pi Y_{t-1} + u_t \quad \text{where } \pi = \theta - 1$$

## Hypotheses

$$
\begin{align}
H_0 & : \pi = 0 \quad \text{(unit root present, non-stationary)} \\
H_1 & : \pi < 0 \quad \text{(stationary)}
\end{align}
$$

## Test Statistic

$$\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})} = \frac{\hat{\theta} - 1}{\text{se}(\hat{\theta})}$$

## Distribution

The test statistic $\tau$ follows the **Dickey-Fuller distribution** (not standard t-distribution).

## Decision Rule

Reject $H_0$ if $|\tau| > |\tau_{\text{critical}}|$

> [!WARNING] 
> Use DF critical values, not standard t-distribution tables. The DF distribution has fatter tails.

## Model Variants

| Model                 | Equation                                               |
| --------------------- | ------------------------------------------------------ |
| No constant/trend     | $\nabla Y_t = \pi Y_{t-1} + u_t$                       |
| With constant         | $\nabla Y_t = \beta_1 + \pi Y_{t-1} + u_t$             |
| With constant & trend | $\nabla Y_t = \beta_1 + \beta_2 t + \pi Y_{t-1} + u_t$ |

## Related

- [[3 Reference/augmented-dickey-fuller-test_202603300223\|Augmented Dickey-Fuller Test]]
- [[3 Reference/random-walk_202603161400\|Random Walk]]
- [[3 Reference/weakly-stationary_202603161400\|Weakly Stationary]]