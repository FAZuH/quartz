---
publish: true
aliases:
  - Transition Probability Matrix
created: 2026-04-09T23:07:39.337+07:00
modified: 2026-04-09T23:07:39.338+07:00
published: 2026-04-09T23:07:39.338+07:00
cssclasses: ""
creation-time: 2026-03-28 08:10
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

The **Transition Probability Matrix (TPM)** is the full set of all [[3 Reference/def-transition-probability_202603280807\|transition probabilities]] $P_{ij}$ in matrix form:

$$
\mathbf{P} = \begin{Vmatrix}
P_{00} & P_{01} & P_{02} & \cdots \\
P_{10} & P_{11} & P_{12} & \cdots \\
\vdots & \vdots & \vdots & \\
P_{i0} & P_{i1} & P_{i2} & \cdots \\
\vdots & \vdots & \vdots &
\end{Vmatrix}
$$

Where $P_{ij}$ is the [[3 Reference/def-transition-probability_202603280807\|transition probability]] from [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ to [[3 Reference/def-state-stochastic_202603280801\|state]] $j$.

## Interpretation

- $P_{12}$ — probability of transitioning from [[3 Reference/def-state-stochastic_202603280801\|state]] 1 to [[3 Reference/def-state-stochastic_202603280801\|state]] 2 in one step
- $P_{34}$ — transition probability from [[3 Reference/def-state-stochastic_202603280801\|state]] 3 to 4
- $P_{55}$ — transition probability from [[3 Reference/def-state-stochastic_202603280801\|state]] 5 to 5

## Properties

Each row sums to 1: $\sum_j P_{ij} = 1$ for all $i$

## Procedure: Validating TPM

1. All entries $P_{ij} \geq 0$
2. Each row sums to 1: $\sum_j P_{ij} = 1$ for all $i$

## Related

- [[3 Reference/def-transition-probability_202603280807\|Transition Probability]]
- [[3 Reference/def-n-step-transition-matrix_202603280812\|n-step Transition Matrix]]
- [[3 Reference/def-regular-tpm_202603280832\|Regular TPM]]
