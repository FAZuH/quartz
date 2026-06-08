---
publish: true
aliases:
  - Limiting Probability
created: 2026-04-09T23:07:39.192+07:00
modified: 2026-04-10T00:09:22.362+07:00
published: 2026-04-10T00:09:22.362+07:00
creation-time: 2026-03-28 08:31
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

For a [[def-discrete-time-markov-chain_202603280806|Markov chain]] $\{X_n, n \geq 0\}$, the **limiting probability** $\pi_j$ of [[def-state-stochastic_202603280801|state]] $j$ represents the long-run probability that the process will be in [[def-state-stochastic_202603280801|state]] $j$, independent of the initial [[def-state-stochastic_202603280801|state]] $i$:

$\pi_j = \lim_{n \to \infty} P_{ij}^n$

where $P_{ij}^n$ is the [[def-n-step-transition-matrix_202603280812|n-step transition probability]] from [[def-state-stochastic_202603280801|state]] $i$ to [[def-state-stochastic_202603280801|state]] $j$.

## Properties

$$
\begin{align}
\pi_{j} & = \sum_{k}\pi_{k}P_{kj} \\
\sum_{j}\pi_{j} & = 1 \\
\pi_j & = \frac{1}{\mu_{jj}}
\end{align}
$$

## Related

- [[def-stationary-distribution_202603280834|Stationary Distribution]]
- [[theorem-limiting-distribution_202603280833|Limiting Distribution Theorem]]
- [[comparison-limiting-vs-hitting_202603280836|Limiting vs Hitting Probability]]
