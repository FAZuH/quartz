---
publish: true
aliases:
  - First Step Analysis
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
cssclasses: ""
creation-time: 2026-03-28 08:42
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Procedure

First Step Analysis (FSA) allows calculating specific properties of a Markov Chain, such as the probability of reaching a target state or the time until absorption, by analyzing the very first transition.

### Prerequisites

- A defined [[3 Reference/def-transition-probability-matrix_202603280810\|Transition Probability Matrix (TPM)]]
- Clear identification of target [[3 Reference/def-state-stochastic_202603280801\|states]] (hitting boundaries) and [[3 Reference/def-absorbing-state_202603280805\|absorbing states]]

## Calculating Hitting Probabilities

Use this procedure to determine the probability that a process starting in state $i$ will eventually hit a specific target state $j$.

1. **Identify boundary conditions.** Set:
   - $\pi_{\text{target}} = 1$
   - $\pi_{\text{others \& absorbing}} = 0$

2. **Formulate equations for transient states.** For each state $i$ that is not a boundary or absorbing state, express the hitting probability $\pi_i$ as a weighted sum:
   $$\pi_i = \sum_k P_{ik} \cdot \pi_k$$

3. **Solve the linear system.** Solve the resulting set of equations for all unknown $\pi_i$ values.

## Calculating Expected Time to Absorption

Use this procedure to find the average number of steps required to reach any absorbing state from a starting state $i$.

1. **Set boundary conditions.** For all [[3 Reference/def-absorbing-state_202603280805\|absorbing states]], the expected time to absorption is 0 ($\mu_{\text{absorbed}} = 0$).

2. **Formulate equations for transient states.** For each transient state $i$, add 1 (representing the current step) to the expected time remaining from all possible next states $k$:
   $$\mu_i = 1 + \sum_k P_{ik} \cdot \mu_k$$

3. **Solve the linear system.** Solve the resulting equations to find the expected time $\mu_i$ for each state.

## Example

See [[3 Reference/example-gambler-ruin-fsa_202603280843\|First Step Analysis - Gambler's Ruin Example]].

## Related

- [[3 Reference/def-hitting-probability-transient_202603280841\|Hitting Probability (Transient)]]
- [[3 Reference/def-mean-time-transient_202603280840\|Mean Time Spent in Transient States]]
- [[3 Reference/comparison-limiting-vs-hitting_202603280836\|Limiting vs Hitting Probability]]
