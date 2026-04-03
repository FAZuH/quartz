---
publish: true
aliases:
  - Waiting Times (Poisson)
created: 2026-04-03T18:45:39.743+07:00
modified: 2026-04-03T19:16:27.918+07:00
published: 2026-04-03T19:16:27.918+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let

- ${N(t), t \geq 0}$ be a [[poisson-process_202604031845|Poisson process]] of rate $\lambda$.
- $T\_i$ are the [[inter-arrival-times_202604031845|inter-arrival times]] at $i$-th event

The **Waiting Time** $W\_n$ is the time of occurrence of the $n$-th event:

$$W\_n = \sum\_{i=1}^n T\_i$$

> [!TIP] Interpretation
> The waiting time is the sum of $n$ independent exponential clocks. You need $n$ events to happen, and each takes exponential time — the total is gamma distributed.

## Distribution

Then $W\_n \sim \text{Gamma}(n, \lambda)$ with PDF:
$$f\_{W\_n}(t) = \lambda e^{-\lambda t} \frac{(\lambda t)^{n-1}}{(n-1)!}, \quad t \geq 0$$

## Key Relationship

$$N(t) \geq n \iff W\_n \leq t$$

The $n$-th event occurs by time $t$ if and only if at least $n$ events have occurred by time $t$.

## Proof via Equivalence

$$
\begin{align}
F\_{W\_n}(t) &= P(W\_n \leq t) = P(N(t) \geq n) \\
&= \sum\_{j=n}^{\infty} e^{-\lambda t} \frac{(\lambda t)^j}{j!}
\end{align}
$$

Differentiating with respect to $t$ yields the Gamma$(n, \lambda)$ PDF.

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[inter-arrival-times_202604031845|Inter-arrival Times]]
- [[conditional-distribution-of-arrival-times_202604031845|Conditional Distribution of Arrival Times]]
