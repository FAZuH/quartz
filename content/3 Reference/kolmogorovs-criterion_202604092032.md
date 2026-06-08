---
publish: true
aliases:
  - Kolmogorovs Criterion
created: 2026-04-09T23:29:02.795+07:00
modified: 2026-04-09T23:29:02.795+07:00
published: 2026-04-09T23:29:02.795+07:00
creation-time: 2026-04-09 20:32
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---

> A stationary Markov chain is [[def-time-reversible-markov_202603280852|time reversible]] if and only if for any cycle of states $i \to i_1 \to \dots \to i_k \to i$, the product of transition probabilities is the same in both directions:
>
> $P_{i,i_1} P_{i_1,i_2} \dots P_{i_k,i} = P_{i,i_k} P_{i_k,i_{k-1}} \dots P_{i_1,i}$

> [!TIP] Interpretation
> A process is time reversible if the likelihood of following any closed loop of states is exactly equal to the likelihood of following that same loop in reverse.
