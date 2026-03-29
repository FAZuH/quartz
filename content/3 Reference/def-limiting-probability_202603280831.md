---
publish: true
aliases:
  - Limiting Probability
created: 2026-03-28T17:51:12.053+07:00
modified: 2026-03-28T17:51:12.055+07:00
published: 2026-03-28T17:51:12.055+07:00
creation-time: 2026-03-28 08:31
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

For a [[def-discrete-time-markov-chain_202603280806|Markov chain]] ${X\_n, n \geq 0}$, the **limiting probability** $\pi\_j$ of [[def-state-stochastic_202603280801|state]] $j$ represents the long-run probability that the process will be in [[def-state-stochastic_202603280801|state]] $j$, independent of the initial [[def-state-stochastic_202603280801|state]] $i$:

$$\pi\_j = \lim\_{n \to \infty} P\_{ij}^n$$

where $P\_{ij}^n$ is the [[def-n-step-transition-matrix_202603280812|n-step transition probability]] from [[def-state-stochastic_202603280801|state]] $i$ to [[def-state-stochastic_202603280801|state]] $j$.

## Relation to Mean Recurrence Time

The limiting probability is related to the **mean recurrence time** $\mu\_{jj}$ (expected time to return to state $j$ starting from $j$):

$$\pi\_j = \frac{1}{\mu\_{jj}}$$

## Related

- [[def-stationary-distribution_202603280834|Stationary Distribution]]
- [[theorem-limiting-distribution_202603280833|Limiting Distribution Theorem]]
- [[comparison-limiting-vs-hitting_202603280836|Limiting vs Hitting Probability]]
