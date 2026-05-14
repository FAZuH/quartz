---
publish: true
aliases:
  - Truncated Time Reversible CTMC
created: 2026-05-08T06:23:06.554+07:00
modified: 2026-05-08T06:23:06.555+07:00
published: 2026-05-08T06:23:06.555+07:00
cssclasses: ""
creation-time: 2026-05-08 06:18
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Theorem

A time reversible CTMC that is **truncated** to a subset of states $A \subset S$ (by setting $q_{ij} = 0$ for $i \in A, j \notin A$) and remains irreducible is also time reversible.

The limiting probabilities of the truncated chain are:

$$P_j^A = \frac{P_j}{\sum_{i \in A} P_i}, \quad j \in A$$

where $P_j$ are the limiting probabilities of the original (untruncated) chain.

> [!TIP] Interpretation
> Truncation simply renormalizes the probabilities over the remaining states $A$. The time reversibility property is preserved because all transitions within $A$ continue at the same rates as before.

## Example: M/M/1 with Finite Capacity $N$

An M/M/1 queue where arrivals finding $N$ in the system do not enter is a truncation of the M/M/1 queue to $A = \{0, 1, \ldots, N\}$.

Original M/M/1 limit probabilities: $P_j = (1 - \rho)\rho^j$, where $\rho = \lambda/\mu$

Truncated to $A = \{0, \ldots, N\}$:

$$P_j^A = \frac{(1 - \rho)\rho^j}{\sum_{i=0}^N (1 - \rho)\rho^i} = \frac{\rho^j}{\sum_{i=0}^N \rho^i}, \quad j = 0, 1, \ldots, N$$

This is the well-known M/M/1/$N$ queue result.

## Related

- [[3 Reference/time-reversible-ctmc_202605080617\|Time Reversible CTMC]]
- [[3 Reference/ergodic-birth-and-death-process-is-time-reversible_202605080617\|Ergodic Birth and Death Process is Time Reversible]]
- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]