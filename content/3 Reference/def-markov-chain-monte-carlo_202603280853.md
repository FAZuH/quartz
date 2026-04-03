---
publish: true
aliases:
  - Markov Chain Monte Carlo
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
cssclasses: ""
creation-time: 2026-03-28 08:53
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

**Markov Chain Monte Carlo (MCMC)** is a method to sample from a distribution $\pi$ by constructing a [[3 Reference/def-time-reversible-markov_202603280852\|time reversible]] [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]].

## Metropolis-Hastings Algorithm

1. Propose jump from $i$ to $j$ with probability $q_{ij}$
2. Accept with probability:
   $$\alpha_{ij} = \min \left( 1, \frac{\pi_j q_{ji}}{\pi_i q_{ij}} \right)$$

## Related

- [[3 Reference/def-time-reversible-markov_202603280852\|Time Reversible Markov Chain]]
