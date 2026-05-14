---
publish: true
aliases:
  - Transition Rate Matrix
created: 2026-05-08T05:33:03.440+07:00
modified: 2026-05-08T05:33:03.440+07:00
published: 2026-05-08T05:33:03.440+07:00
cssclasses: ""
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

For a homogeneous [[3 Reference/continuous-time-markov-chain_202605080515\|CTMC]] on discrete state space $S$, the **transition rate** from state $i$ to state $j$ ($i \neq j$) is defined as:

$$q_{ij} = \nu_i P_{ij}$$

where:
- $\nu_i$ is the rate of the exponential sojourn time in state $i$
- $P_{ij}$ is the probability that the process enters state $j$ when leaving $i$

The **transition rate matrix** (or **Q-matrix**, **generator matrix**) is:

$$Q = (q_{ij})_{i,j \in S}$$

with the diagonal entries:

$$q_{ii} = -\sum_{j \neq i} q_{ij} = -\nu_i$$

so that each row sums to $0$.

> [!TIP] Interpretation
> The Q-matrix is one of two equivalent ways to specify a CTMC (the other being the transition probability function). The off-diagonal entry $q_{ij}$ represents the instantaneous rate at which the process transitions from $i$ to $j$.

## From Q-matrix to Parameters

Given $Q$, we can recover $\nu_i$ and $P_{ij}$:

$$\nu_i = \sum_{j \neq i} q_{ij}$$

$$P_{ij} = \frac{q_{ij}}{\nu_i} = \frac{q_{ij}}{\sum_{j \neq i} q_{ij}}$$

## CTMC via Transition Rates

A CTMC can be defined directly through its transition rates. For small $h > 0$:

$$\Pr\{X(t+h) = j \mid X(t) = i\} = \begin{cases} q_{ij}h + o(h), & i \neq j \\ 1 - \nu_i h + o(h), & i = j \end{cases}$$

## Related

- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]
- [[3 Reference/ctmc-transition-probability-function_202605080516\|CTMC Transition Probability Function]]
- [[3 Reference/def-transition-probability-matrix_202603280810\|Transition Probability Matrix]]