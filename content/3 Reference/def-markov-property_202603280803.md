---
publish: true
aliases:
  - Markov Property
created: 2026-04-09T23:07:39.209+07:00
modified: 2026-04-09T23:07:39.210+07:00
published: 2026-04-09T23:07:39.210+07:00
creation-time: 2026-03-28 08:03
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $\{X_t\}$ be a [[def-stochastic-process_202603280800|stochastic process]].

The **Markov Property** states that, given the value of $X_t$, the values of $X_s$ for $s > t$ are not influenced by the values of $X_u$ for $u < t$.

$P\{X_{n+1} = j \mid X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0\} = P\{X_{n+1} = j \mid X_n = i\}$

> [!TIP] Interpretation
> The probability of any particular future behavior of the process, when its current state is known exactly, is not altered by additional knowledge concerning its past behavior.

## Related

- [[def-markov-process_202603280804|Markov Process]]
- [[def-discrete-time-markov-chain_202603280806|Discrete-time Markov Chain]]
