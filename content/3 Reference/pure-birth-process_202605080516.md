---
publish: true
aliases:
  - Pure Birth Process
created: 2026-05-08T05:33:03.430+07:00
modified: 2026-05-08T05:33:03.431+07:00
published: 2026-05-08T05:33:03.431+07:00
cssclasses: ""
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

A **Pure Birth Process** is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] where $\mu_n = 0$ for all $n$ (no deaths occur).

The process only moves from state $n$ to state $n+1$ with birth rate $\lambda_n$. The transition rates are:

$$\Pr\{X(t+h) = n+1 \mid X(t) = n\} = \lambda_n h + o(h)$$
$$\Pr\{X(t+h) = n \mid X(t) = n\} = 1 - \lambda_n h + o(h)$$

> [!TIP] Interpretation
> A pure birth process models a population or system that only grows over time—members can be added but never removed. The Poisson process is the simplest case where $\lambda_n = \lambda$ (constant birth rate).

## Special Cases

- **Poisson Process**: $\lambda_n = \lambda$ for all $n$ (constant rate)
- **Yule Process**: $\lambda_n = n\lambda$ (linear rate, each member gives birth independently)

## Related

- [[3 Reference/poisson-process_202604031845\|Poisson Process]]
- [[3 Reference/yule-process_202605080517\|Yule Process]]
- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]