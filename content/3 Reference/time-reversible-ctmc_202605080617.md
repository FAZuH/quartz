---
publish: true
aliases:
  - Time Reversible CTMC
created: 2026-05-08T06:23:06.551+07:00
modified: 2026-05-08T06:23:06.552+07:00
published: 2026-05-08T06:23:06.552+07:00
cssclasses: ""
creation-time: 2026-05-08 06:17
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

An ergodic CTMC is **time reversible** if the process run backward in time has the same probabilistic structure as the original process.

## Condition for Time Reversibility

$$P_i q_{ij} = P_j q_{ji}, \quad \forall i \neq j$$

where $P_i$ are the limiting probabilities and $q_{ij}$ are transition rates.

> [!TIP] Interpretation
> The rate at which the process goes directly from state $i$ to state $j$ equals the rate at which it goes directly from $j$ to $i$. The process "looks the same" whether time runs forward or backward.

## Embedded Chain Perspective

Time reversibility of the CTMC is equivalent to time reversibility of the [[3 Reference/embedded-markov-chain_202605080616\|embedded DTMC]]:

$$\pi_i P_{ij} = \pi_j P_{ji}, \quad \forall i, j$$

where $\pi_i$ are the embedded chain's limiting probabilities.

## Relation Between CTMC and Embedded Probabilities

$$P_i = \frac{\pi_i / \nu_i}{\sum_j \pi_j / \nu_j}$$

## Reversed Process

Going backward in time:
- The time spent in state $i$ is still exponentially distributed with rate $\nu_i$
- The sequence of states forms a DTMC with transition probabilities $Q_{ij} = \frac{\pi_j P_{ji}}{\pi_i}$

## Finding Limiting Probabilities via Time Reversibility

**Proposition**: If we can find probabilities $\{P_i\}$ with $\sum P_i = 1$, $P_i \geq 0$, satisfying:

$$P_i q_{ij} = P_j q_{ji}, \quad \forall i \neq j$$

then the chain is time reversible and $\{P_i\}$ are the limiting probabilities.

This often provides an easier way to find limiting probabilities than solving balance equations directly.

## Related

- [[3 Reference/ergodic-birth-and-death-process-is-time-reversible_202605080617\|Ergodic Birth and Death Process is Time Reversible]]
- [[3 Reference/truncated-time-reversible-ctmc_202605080618\|Truncated Time Reversible CTMC]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]
- [[3 Reference/def-time-reversible-markov_202603280852\|Time Reversible Markov Chain]]