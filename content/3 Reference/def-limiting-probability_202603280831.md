---
publish: true
aliases:
  - Limiting Probability
created: 2026-04-09T23:07:39.192+07:00
modified: 2026-04-10T00:09:22.362+07:00
published: 2026-04-10T00:09:22.362+07:00
cssclasses: ""
creation-time: 2026-03-28 08:31
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

For a [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]] $\{X_n, n \geq 0\}$, the **limiting probability** $\pi_j$ of [[3 Reference/def-state-stochastic_202603280801\|state]] $j$ represents the long-run probability that the process will be in [[3 Reference/def-state-stochastic_202603280801\|state]] $j$, independent of the initial [[3 Reference/def-state-stochastic_202603280801\|state]] $i$:

$$\pi_j = \lim_{n \to \infty} P_{ij}^n$$

where $P_{ij}^n$ is the [[3 Reference/def-n-step-transition-matrix_202603280812\|n-step transition probability]] from [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ to [[3 Reference/def-state-stochastic_202603280801\|state]] $j$.

## Properties

$$
\begin{align}
\pi_{j} & = \sum_{k}\pi_{k}P_{kj} \\
\sum_{j}\pi_{j} & = 1 \\
\pi_j & = \frac{1}{\mu_{jj}}
\end{align}
$$

## Related

- [[3 Reference/def-stationary-distribution_202603280834\|Stationary Distribution]]
- [[3 Reference/theorem-limiting-distribution_202603280833\|Limiting Distribution Theorem]]
- [[3 Reference/comparison-limiting-vs-hitting_202603280836\|Limiting vs Hitting Probability]]
