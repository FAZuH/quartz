---
publish: true
aliases:
  - Markov Chain Monte Carlo
created: 2026-04-09T23:07:39.205+07:00
modified: 2026-05-18T18:31:24.887+07:00
published: 2026-05-18T18:31:24.887+07:00
cssclasses: ""
creation-time: 2026-03-28 08:53
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

**Markov Chain Monte Carlo (MCMC)** is a method to sample from a distribution $\pi$ by constructing a [[3 Reference/def-time-reversible-markov_202603280852\|time reversible]] [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]].

> [!TIP] Interpretation
> Directly sampling from a complex high-dimensional distribution $\pi$ is often impossible. MCMC solves this by constructing a Markov chain whose [[3 Reference/def-stationary-distribution_202603280834\|stationary distribution]] equals $\pi$. After running the chain long enough (burn-in), the states visited approximate samples from $\pi$.

## Metropolis-Hastings Algorithm

Given current state $i$:

1. **Propose** a candidate jump to $j$ from proposal distribution $q_{ij}$ (e.g., symmetric random walk: $q_{ij} = q_{ji}$)
2. **Accept** with probability:
   $$\alpha_{ij} = \min \left( 1, \frac{\pi_j q_{ji}}{\pi_i q_{ij}} \right)$$
   If accepted: move to $j$. If rejected: stay at $i$ (count $i$ again as a sample).

The acceptance ratio $\frac{\pi_j q_{ji}}{\pi_i q_{ij}}$ corrects for the proposal bias: if $j$ is more "desirable" under $\pi$, accept more often; if less, accept less often. This ensures $\pi$ is the stationary distribution.

## Related

- [[3 Reference/def-time-reversible-markov_202603280852\|Time Reversible Markov Chain]]
