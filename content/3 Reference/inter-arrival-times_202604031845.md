---
publish: true
aliases:
  - Inter-arrival Times
created: 2026-04-09T23:07:39.423+07:00
modified: 2026-04-10T04:33:17.782+07:00
published: 2026-04-10T04:33:17.782+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $\{N(t), t \geq 0\}$ be a [[poisson-process_202604031845|Poisson process]] of rate $\lambda$.

The **Inter-arrival Times** $\{T_n, n = 1, 2, \dots\}$ are defined as:

- $T_1$ = time of the first event
- $T_n$ = elapsed time between the $(n-1)$-th and $n$-th event, for $n > 1$

> [!TIP] Interpretation
> Each event "resets the clock." The time until the next event is always exponential with the same rate, regardless of how long you've already waited.
>
> This follows from the [[memoryless-property_202604031840|memoryless property]]: the process has no memory of the past.

## Distribution

$T_n \stackrel{\text{i.i.d.}}{\sim} \text{Exp}(\lambda)$

## Proof Sketch

$P(T_1 > t) = P(N(t) = 0) = e^{-\lambda t}$

So $T_1 \sim \text{Exp}(\lambda)$. For $T_2$, conditioning on $T_1 = s$:

$P(T_2 > t \mid T_1 = s) = P(\text{0 events in } (s, s+t] \mid T_1 = s) = e^{-\lambda t}$

By [[independent-and-stationary-increments_202604031839|independent and stationary increments]], this does not depend on $s$, so $T_2$ is independent of $T_1$ and also $\text{Exp}(\lambda)$. By induction, all $T_n$ are i.i.d. $\text{Exp}(\lambda)$.

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[waiting-times-(poisson)_202604031845|Waiting Times]]
- [[memoryless-property_202604031840|Memoryless Property]]
