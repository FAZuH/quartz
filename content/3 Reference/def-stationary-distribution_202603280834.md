---
publish: true
aliases:
  - Stationary Distribution
created: 2026-04-09T23:07:39.318+07:00
modified: 2026-04-09T23:07:39.318+07:00
published: 2026-04-09T23:07:39.318+07:00
cssclasses: ""
creation-time: 2026-03-28 08:34
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A probability vector $\pi = (\pi_0, \pi_1, \dots)$ is a **stationary distribution** if it satisfies:

$$\pi = \pi \mathbf{P} \quad \text{and} \quad \sum_j \pi_j = 1$$

> [!TIP] Interpretation
> If the initial [[3 Reference/def-state-stochastic_202603280801\|state]] $X_0$ is chosen according to $\pi$, then the probability of being in state $j$ at any time $n$ is also $\pi_j$ (i.e., $P(X_n = j) = \pi_j$ for all $n$).

## Properties

- A stationary distribution may exist without a limiting distribution
- For an irreducible ergodic Markov chain, the limiting distribution always exists and equals the unique stationary distribution
- Periodic chains can have stationary distributions but no limiting distributions

## Example

For TPM $\mathbf{P} = \begin{bmatrix}\frac{1}{2} & \frac{1}{2} & 0 \\ \frac{1}{4} & \frac{1}{2} & \frac{1}{4} \\ 0 & \frac{1}{2} & \frac{1}{2}\end{bmatrix}$, solving $\pi = \pi \mathbf{P}$:

- $\pi_1 = \frac{1}{4}$
- $\pi_2 = \frac{1}{2}$
- $\pi_3 = \frac{1}{4}$

## Related

- [[3 Reference/def-limiting-probability_202603280831\|Limiting Probability]]
- [[3 Reference/theorem-limiting-distribution_202603280833\|Limiting Distribution Theorem]]
- [[3 Reference/def-ergodic-state_202603280835\|Ergodic State]]
