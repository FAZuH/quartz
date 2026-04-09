---
publish: true
aliases:
  - Hyperexponential Distribution
created: 2026-04-09T23:07:39.411+07:00
modified: 2026-04-09T23:07:39.412+07:00
published: 2026-04-09T23:07:39.412+07:00
tags:
  - type/definition
cssclasses: ""
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

Let $X_1, \dots, X_n$ be independent [[3 Reference/def-exponential-distribution-survival_202603281500\|exponential random variables]] with respective rates $\lambda_1, \dots, \lambda_n$. Let $T$ be a discrete random variable independent of these, with $P(T = j) = P_j$ and $\sum_{j=1}^n P_j = 1$.

The **Hyperexponential Random Variable** is $X = X_T$, i.e., a mixture of exponentials:

$$1 - F(t) = \sum_{j=1}^n P_j e^{-\lambda_j t}$$

Density:
$$f(t) = \sum_{j=1}^n \lambda_j P_j e^{-\lambda_j t}$$

> [!TIP] Interpretation
> Imagine a bin with different types of batteries, each type having its own exponential lifetime. You pick one at random — the lifetime of your chosen battery is hyperexponential. It's a "mixture" model.

## Failure Rate

$$r(t) = \sum_{j=1}^n \lambda_j P(T = j \mid X > t)$$

As $t \to \infty$:
$$r(t) \to \min_j \lambda_j$$

The failure rate **converges to the smallest rate** (longest-lived type), because as the item ages, it becomes increasingly likely to be the most durable type.

## Related

- [[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution]]
- [[3 Reference/hypoexponential-distribution_202604031846\|Hypoexponential Distribution]]
- [[3 Reference/failure-rate-function_202604031840\|Failure Rate Function]]
