---
publish: true
aliases:
  - Embedded Markov Chain
created: 2026-05-08T06:23:06.523+07:00
modified: 2026-05-08T06:23:06.524+07:00
published: 2026-05-08T06:23:06.524+07:00
cssclasses: ""
creation-time: 2026-05-08 06:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

Given a CTMC $\{Y(t) : t \geq 0\}$ on state space $S$, the **Embedded Markov Chain** (or **jump process**) is the discrete-time process $\{X_n = Y(T_n) : n \in \mathbb{Z}^+\}$ where $T_n$ is the sojourn time between the $(n-1)$-th and $n$-th events.

The embedded chain is obtained by sampling the CTMC at the jump times (ignoring the time spent in each state).

## Jump Transition Probabilities

For $i, j \in S$:

$$P_{ij} = \Pr\{X_{n+1} = j \mid X_n = i\} = \Pr\{Y(T_{n+1}) = j \mid Y(T_n) = i\}$$

where $P_{ij}$ are exactly the entries of the [[3 Reference/transition-rate-matrix_202605080516\|P-matrix]] from the Q-matrix specification: $P_{ij} = q_{ij}/\nu_i$ for $i \neq j$, and $P_{ii} = 0$.

## Key Properties

- The embedded chain is a **homogeneous discrete-time Markov chain** with countable state space
- $P_{ii} = 0$ for all $i$ — states do not transition to themselves (a CTMC always changes state at jump times)
- Periodicity is not possible in CTMC

> [!TIP] Interpretation
> The embedded chain captures the sequence of states visited, ignoring how long the process stays in each state. It provides the discrete-time "skeleton" of the CTMC. The CTMC can be viewed as an embedded DTMC with exponentially distributed holding times.

## Example: Poisson Process

For a [[3 Reference/poisson-process_202604031845\|Poisson process]] $\{N(t) : t \geq 0\}$ with rate $\lambda$, the embedded MC has:

$$P_{i,i+1} = 1, \quad \forall i$$

It only jumps from $i$ to $i+1$ (pure birth process).

## Relation to Limiting Probabilities

The limiting probabilities of the CTMC are related to those of the embedded chain:

$$P_i = \frac{\pi_i / \nu_i}{\sum_{j} \pi_j / \nu_j}$$

where $P_i$ are CTMC limiting probabilities, $\pi_i$ are embedded DTMC limiting probabilities, and $\nu_i$ are transition rates.

## Related

- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]
- [[3 Reference/transition-rate-matrix_202605080516\|Transition Rate Matrix]]
- [[3 Reference/class-properties-of-ctmc_202605080616\|Class Properties of CTMC]]