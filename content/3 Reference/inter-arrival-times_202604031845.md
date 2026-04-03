---
publish: true
aliases:
  - Inter-arrival Times
created: 2026-04-03T18:45:34.638+07:00
modified: 2026-04-03T19:15:24.948+07:00
published: 2026-04-03T19:15:24.948+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let ${N(t), t \geq 0}$ be a [[poisson-process_202604031845|Poisson process]] of rate $\lambda$.

The **Inter-arrival Times** ${T\_n, n = 1, 2, \dots}$ are defined as:

- $T\_1$ = time of the first event
- $T\_n$ = elapsed time between the $(n-1)$-th and $n$-th event, for $n > 1$

> [!TIP] Interpretation
> Each event "resets the clock." The time until the next event is always exponential with the same rate, regardless of how long you've already waited.
>
> This follows from the [[memoryless-property_202604031840|memoryless property]]: the process has no memory of the past.

## Distribution

Let $T\_{n}$ be **Inter-arrival Times**

Then $T\_n \stackrel{\text{i.i.d.}}{\sim} \text{Exp}(\lambda)$.

## Proof Sketch

$$P(T\_1 > t) = P(N(t) = 0) = e^{-\lambda t}$$

So $T\_1 \sim \text{Exp}(\lambda)$. For $T\_2$, conditioning on $T\_1 = s$:

$$P(T\_2 > t \mid T\_1 = s) = P(\text{0 events in } (s, s+t] \mid T\_1 = s) = e^{-\lambda t}$$

By [[independent-and-stationary-increments_202604031839|independent and stationary increments]], this does not depend on $s$, so $T\_2$ is independent of $T\_1$ and also $\text{Exp}(\lambda)$. By induction, all $T\_n$ are i.i.d. $\text{Exp}(\lambda)$.

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[waiting-times-(poisson)_202604031845|Waiting Times]]
- [[memoryless-property_202604031840|Memoryless Property]]
