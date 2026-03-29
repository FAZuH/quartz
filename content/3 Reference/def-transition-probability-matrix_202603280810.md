---
publish: true
aliases:
  - Transition Probability Matrix
created: 2026-03-28T17:47:24.551+07:00
modified: 2026-03-28T17:47:24.552+07:00
published: 2026-03-28T17:47:24.552+07:00
creation-time: 2026-03-28 08:10
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

The **Transition Probability Matrix (TPM)** is the full set of all [[def-transition-probability_202603280807|transition probabilities]] $P\_{ij}$ in matrix form:

$$
\mathbf{P} = \begin{Vmatrix}
P\_{00} & P\_{01} & P\_{02} & \cdots \\
P\_{10} & P\_{11} & P\_{12} & \cdots \\
\vdots & \vdots & \vdots & \\
P\_{i0} & P\_{i1} & P\_{i2} & \cdots \\
\vdots & \vdots & \vdots &
\end{Vmatrix}
$$

Where $P\_{ij}$ is the [[def-transition-probability_202603280807|transition probability]] from [[def-state-stochastic_202603280801|state]] $i$ to [[def-state-stochastic_202603280801|state]] $j$.

## Interpretation

- $P\_{12}$ — probability of transitioning from [[def-state-stochastic_202603280801|state]] 1 to [[def-state-stochastic_202603280801|state]] 2 in one step
- $P\_{34}$ — transition probability from [[def-state-stochastic_202603280801|state]] 3 to 4
- $P\_{55}$ — transition probability from [[def-state-stochastic_202603280801|state]] 5 to 5

## Properties

Each row sums to 1: $\sum\_j P\_{ij} = 1$ for all $i$

## Procedure: Validating TPM

1. All entries $P\_{ij} \geq 0$
2. Each row sums to 1: $\sum\_j P\_{ij} = 1$ for all $i$

## Related

- [[def-transition-probability_202603280807|Transition Probability]]
- [[def-n-step-transition-matrix_202603280812|n-step Transition Matrix]]
- [[def-regular-tpm_202603280832|Regular TPM]]
