---
publish: true
aliases:
  - Markov Property
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
creation-time: 2026-03-28 08:03
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let ${X\_t}$ be a [[def-stochastic-process_202603280800|stochastic process]].

The **Markov Property** states that, given the value of $X\_t$, the values of $X\_s$ for $s > t$ are not influenced by the values of $X\_u$ for $u < t$.

$$P{X\_{n+1} = j \mid X\_n = i, X\_{n-1} = i\_{n-1}, \dots, X\_0 = i\_0} = P{X\_{n+1} = j \mid X\_n = i}$$

> [!TIP] Interpretation
> The probability of any particular future behavior of the process, when its current state is known exactly, is not altered by additional knowledge concerning its past behavior.

## Related

- [[def-markov-process_202603280804|Markov Process]]
- [[def-discrete-time-markov-chain_202603280806|Discrete-time Markov Chain]]
