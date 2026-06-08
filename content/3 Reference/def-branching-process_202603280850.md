---
publish: true
aliases:
  - Branching Process
created: 2026-04-09T23:07:39.101+07:00
modified: 2026-05-18T18:31:06.778+07:00
published: 2026-05-18T18:31:06.778+07:00
creation-time: 2026-03-28 08:50
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A **Branching Process** is a population model where each individual produces $j$ offspring with probability $P_j$.

$X_n$ is the size of the $n$-th generation.

## Moments

| Moment | Formula |
| --- | --- |
| Mean offspring | $\mu = \sum_{j=0}^{\infty} j P_j$ |
| Expected size at gen $n$ | $E[X_n] = \mu^n$ |
| Variance at gen $n$ | $\text{Var}(X_n) = \sigma^2 \mu^{n-1} \dfrac{1 - \mu^n}{1 - \mu}$ |

## Example

Consider a population where each individual produces:

| Offspring $j$ | 0 | 1 | 2 |
|---------------|---|---|---|
| $P_j$          | 0.25 | 0.25 | 0.50 |

- Mean offspring: $\mu = 0 \cdot 0.25 + 1 \cdot 0.25 + 2 \cdot 0.50 = 1.25$
- Since $\mu > 1$, extinction is not certain: growth possible
- Expected size at generation 3: $E[X_3] = (1.25)^3 = 1.953125$
- If starting with $X_0 = 10$: $E[X_3] = 10 \cdot (1.25)^3 \approx 19.53$

> [!NOTE]
> Branching processes model phenomena like cell division, nuclear chain reactions, and the spread of surnames through generations.

## Related

- [[def-extinction-probability_202603280851|Extinction Probability]]
