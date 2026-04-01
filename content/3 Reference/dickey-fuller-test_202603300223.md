---
publish: true
aliases:
  - Dickey-Fuller Test
created: 2026-03-30T02:23:03.085+07:00
modified: 2026-03-31T19:05:22.061+07:00
published: 2026-03-31T19:05:22.061+07:00
creation-time: 2026-03-30 02:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

> [!ERROR]
> Might have errors. I'll check later #TODO

## Definition

The **Dickey-Fuller (DF) test** tests for the presence of an [[ar-characteristic-equation_202603161400#Unit Root|unit root]] in an [[ar1-process-model_202603161400|AR(1) Process]] process.

This determines whether a time series is non-[[weakly-stationary_202603161400|stationary]] or not.

> [!tip]
> An AR(p) model is stationary, if all the roots $x$ of its [[ar-characteristic-equation_202603161400|characteristic equation]] is $|x|>1$.
>
> Unit root means there exists an $|x|=1$, which implies that the AR(p) model is not stationary.

## Model

$$Y\_t = \theta Y\_{t-1} + u\_t$$

If $\theta = 1$, the model becomes a random walk (non-stationary).

## Reformulation

$$\nabla Y\_t = \pi Y\_{t-1} + u\_t \quad \text{where } \pi = \theta - 1$$

## Hypotheses

$$
\begin{align}
H\_0 & : \pi = 0 \quad \text{(unit root present, non-stationary)} \\
H\_1 & : \pi < 0 \quad \text{(stationary)}
\end{align}
$$

## Test Statistic

$$\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})} = \frac{\hat{\theta} - 1}{\text{se}(\hat{\theta})}$$

## Distribution

The test statistic $\tau$ follows the **Dickey-Fuller distribution** (not standard t-distribution).

## Decision Rule

Reject $H\_0$ if $|\tau| > |\tau\_{\text{critical}}|$

> [!WARNING]
> Use DF critical values, not standard t-distribution tables. The DF distribution has fatter tails.

## Model Variants

| Model                 | Equation                                               |
| --------------------- | ------------------------------------------------------ |
| No constant/trend     | $\nabla Y\_t = \pi Y\_{t-1} + u\_t$                       |
| With constant         | $\nabla Y\_t = \beta\_1 + \pi Y\_{t-1} + u\_t$             |
| With constant & trend | $\nabla Y\_t = \beta\_1 + \beta\_2 t + \pi Y\_{t-1} + u\_t$ |

## Related

- [[augmented-dickey-fuller-test_202603300223|Augmented Dickey-Fuller Test]]
- [[random-walk_202603161400|Random Walk]]
- [[weakly-stationary_202603161400|Weakly Stationary]]
