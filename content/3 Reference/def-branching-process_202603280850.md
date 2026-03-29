---
publish: true
aliases:
  - Branching Process
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
creation-time: 2026-03-28 08:50
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A **Branching Process** is a population model where each individual produces $j$ offspring with probability $P\_j$.

$X\_n$ is the size of the $n$-th generation.

## Moments

| Moment | Formula |
| --- | --- |
| Mean offspring | $\mu = \sum\_{j=0}^{\infty} j P\_j$ |
| Expected size at gen $n$ | $E\[X\_n] = \mu^n$ |
| Variance at gen $n$ | $\text{Var}(X\_n) = \sigma^2 \mu^{n-1} \dfrac{1 - \mu^n}{1 - \mu}$ |

## Related

- [[def-extinction-probability_202603280851|Extinction Probability]]
