---
publish: true
aliases:
  - Stationary Distribution
created: 2026-03-28T17:51:12.056+07:00
modified: 2026-03-28T17:51:12.056+07:00
published: 2026-03-28T17:51:12.056+07:00
creation-time: 2026-03-28 08:34
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A probability vector $\pi = (\pi\_0, \pi\_1, \dots)$ is a **stationary distribution** if it satisfies:

$$\pi = \pi \mathbf{P} \quad \text{and} \quad \sum\_j \pi\_j = 1$$

> [!TIP] Interpretation
> If the initial [[def-state-stochastic_202603280801|state]] $X\_0$ is chosen according to $\pi$, then the probability of being in state $j$ at any time $n$ is also $\pi\_j$ (i.e., $P(X\_n = j) = \pi\_j$ for all $n$).

## Properties

- A stationary distribution may exist without a limiting distribution
- For an irreducible ergodic Markov chain, the limiting distribution always exists and equals the unique stationary distribution
- Periodic chains can have stationary distributions but no limiting distributions

## Example

For TPM $\mathbf{P} = \begin{bmatrix}\frac{1}{2} & \frac{1}{2} & 0 \ \frac{1}{4} & \frac{1}{2} & \frac{1}{4} \ 0 & \frac{1}{2} & \frac{1}{2}\end{bmatrix}$, solving $\pi = \pi \mathbf{P}$:

- $\pi\_1 = \frac{1}{4}$
- $\pi\_2 = \frac{1}{2}$
- $\pi\_3 = \frac{1}{4}$

## Related

- [[def-limiting-probability_202603280831|Limiting Probability]]
- [[theorem-limiting-distribution_202603280833|Limiting Distribution Theorem]]
- [[def-ergodic-state_202603280835|Ergodic State]]
