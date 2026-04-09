---
publish: true
aliases:
  - Regular Transition Probability Matrix
created: 2026-04-09T23:07:39.295+07:00
modified: 2026-04-09T23:07:39.296+07:00
published: 2026-04-09T23:07:39.296+07:00
cssclasses: ""
creation-time: 2026-03-28 08:32
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A [[3 Reference/def-transition-probability-matrix_202603280810\|TPM]] $\mathbf{P}$ is **regular** if:
1. For every pair $i, j$, there is a path $k_1, k_2, \dots, k_r$ for which $P_{i k_1} P_{k_1 k_2} \dots P_{k_r j} > 0$
2. There is at least one [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ for which $P_{ii} > 0$

Equivalently, $\mathbf{P}^k$ has **all positive entries** for some $k > 0$.

## Properties

1. If $\mathbf{P}^k$ has no zero elements for some $k$, then $\mathbf{P}^{k+n}$ will also have no zero elements for all $n \geq 1$
2. A regular chain is necessarily [[3 Reference/def-irreducible_202603280823\|irreducible]] and [[3 Reference/def-period-stochastic_202603280825\|aperiodic]]

## Why Condition 2 Matters

Condition 2 ensures the chain is **aperiodic**.

Without it, a chain could be irreducible (condition 1 satisfied) but still periodic — meaning it cycles through states in a fixed pattern and never settles into a stationary distribution. A self-loop $P_{ii} > 0$ forces the chain to be able to "stay" at a state, breaking any fixed cycle and guaranteeing period 1.

Together: irreducible + aperiodic = regular = guaranteed convergence to unique stationary distribution regardless of initial state.

## Proof

See [[3 Reference/theorem-regular-irreducible-aperiodic_202603280901\|Regular chain is necessarily irreducible and aperiodic]].

## Related

- [[3 Reference/def-transition-probability-matrix_202603280810\|Transition Probability Matrix]]
- [[3 Reference/def-irreducible_202603280823\|Irreducible]]
- [[3 Reference/def-period-stochastic_202603280825\|Period (Stochastic)]]
