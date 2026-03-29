---
publish: true
aliases:
  - Discrete-time Markov Chain
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
creation-time: 2026-03-28 08:06
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A **Discrete-time Markov Chain (DTMC)** is a [[def-stochastic-process_202603280800|stochastic process]] ${X\_n, n \geq 0}$ where the random variable at index $n+1$ depends only on the random variable at index $n$:

$$P{X\_{n+1} = j \mid X\_n = i, X\_{n-1} = i\_{n-1}, \dots, X\_1 = i\_1, X\_0 = i\_0} = P\_{ij}$$

> [!TIP] Interpretation
> State $n+1$ depends on state $n$, and only on state $n$. The future is conditionally independent of the past given the present.

## Properties

- State space can be discrete or continuous
- Time index is discrete: $n = 0, 1, 2, \dots$
- Satisfies the [[def-markov-property_202603280803|Markov property]]

## Related

- [[def-markov-property_202603280803|Markov Property]]
- [[def-transition-probability_202603280807|Transition Probability]]
- [[def-transition-probability-matrix_202603280810|Transition Probability Matrix]]
