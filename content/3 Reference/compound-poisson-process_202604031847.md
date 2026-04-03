---
publish: true
aliases:
  - Compound Poisson Process
created: 2026-04-03T18:47:24.289+07:00
modified: 2026-04-03T19:14:18.473+07:00
published: 2026-04-03T19:14:18.473+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:47
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A **Compound Poisson Process** is defined as:

$$X(t) = \sum\_{i=1}^{N(t)} Y\_i$$

where:

- ${N(t), t \geq 0}$ is a [[poisson-process_202604031845|Poisson process]] with rate $\lambda$
- $Y\_1, Y\_2, \dots$ are i.i.d. random variables independent of $N(t)$

> [!TIP] Interpretation
> Events arrive according to a Poisson process, and each event carries a random "payload" $Y\_i$. The compound process tracks the cumulative total. Example: insurance claims arrive as Poisson, each with a random claim amount $Y\_i$; $X(t)$ is the total payout by time $t$.

## Moments

$$E\[X(t)] = \lambda t \cdot E\[Y\_i]$$

$$\text{Var}(X(t)) = \lambda t \cdot E\[Y\_i^2]$$

Derived via conditional expectation: $E\[X(t)] = E\[E\[X(t) \mid N(t)]] = E\[N(t) \cdot E\[Y]] = \lambda t \cdot E\[Y]$.

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[nonhomogeneous-poisson-process_202604031847|Nonhomogeneous Poisson Process]]
