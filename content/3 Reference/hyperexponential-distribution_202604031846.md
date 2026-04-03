---
publish: true
aliases:
  - Hyperexponential Distribution
created: 2026-04-03T18:46:33.915+07:00
modified: 2026-04-03T19:13:35.713+07:00
published: 2026-04-03T19:13:35.713+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $X\_1, \dots, X\_n$ be independent [[def-exponential-distribution-survival_202603281500|exponential random variables]] with respective rates $\lambda\_1, \dots, \lambda\_n$. Let $T$ be a discrete random variable independent of these, with $P(T = j) = P\_j$ and $\sum\_{j=1}^n P\_j = 1$.

The **Hyperexponential Random Variable** is $X = X\_T$, i.e., a mixture of exponentials:

$$1 - F(t) = \sum\_{j=1}^n P\_j e^{-\lambda\_j t}$$

Density:
$$f(t) = \sum\_{j=1}^n \lambda\_j P\_j e^{-\lambda\_j t}$$

> [!TIP] Interpretation
> Imagine a bin with different types of batteries, each type having its own exponential lifetime. You pick one at random — the lifetime of your chosen battery is hyperexponential. It's a "mixture" model.

## Failure Rate

$$r(t) = \sum\_{j=1}^n \lambda\_j P(T = j \mid X > t)$$

As $t \to \infty$:
$$r(t) \to \min\_j \lambda\_j$$

The failure rate **converges to the smallest rate** (longest-lived type), because as the item ages, it becomes increasingly likely to be the most durable type.

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution]]
- [[hypoexponential-distribution_202604031846|Hypoexponential Distribution]]
- [[failure-rate-function_202604031840|Failure Rate Function]]
