---
publish: true
aliases:
  - Coxian Distribution
created: 2026-04-03T18:46:50.818+07:00
modified: 2026-04-03T19:14:05.001+07:00
published: 2026-04-03T19:14:05.001+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $X\_1, \dots, X\_m$ be independent [[def-exponential-distribution-survival_202603281500|exponential random variables]] with distinct rates $\lambda\_1, \dots, \lambda\_m$. Let $N$ be a discrete random variable independent of these with $P(N = n) = P\_n$.

The **Coxian Random Variable** is:

$$Y = \sum\_{j=1}^N X\_j$$

> [!TIP] Interpretation
> An item goes through up to $m$ stages of treatment. After completing stage $n$, it quits the program with probability $r(n) = P(N = n \mid N \geq n)$. The total time spent in the program is Coxian.

## Connection to Discrete Failure Rate

If we interpret $N$ as a lifetime measured in discrete time periods, then:

$$r(n) = P(N = n \mid N \geq n)$$

is the **discrete time failure rate** — the probability the item "dies" in period $n$ given it survived to that point. This is the discrete analog of the [[failure-rate-function_202604031840|failure rate function]] $r(t)$.

## Density

Conditioning on $N$:
$$f\_Y(t) = \sum\_{n=1}^m P\_n f\_{X\_1 + \cdots + X\_n}(t)$$

where $f\_{X\_1 + \cdots + X\_n}$ is the [[hypoexponential-distribution_202604031846|hypoexponential]] density.

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution]]
- [[hypoexponential-distribution_202604031846|Hypoexponential Distribution]]
- [[failure-rate-function_202604031840|Failure Rate Function]]
