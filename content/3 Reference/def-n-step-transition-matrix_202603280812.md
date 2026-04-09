---
publish: true
aliases:
  - n-step Transition Matrix
created: 2026-04-09T23:07:39.250+07:00
modified: 2026-04-09T23:07:39.251+07:00
published: 2026-04-09T23:07:39.251+07:00
cssclasses: ""
creation-time: 2026-03-28 08:12
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

The **n-step Transition Matrix** $\mathbf{P}^{(n)}$ contains probabilities that a [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ transitions to $j$ in $n$ steps:

$$P_{ij}^{(n)} = P(X_n = j \mid X_0 = i)$$

By the [[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov]] equation:

$$\mathbf{P}^{(n+m)} = \mathbf{P}^{(n)} \mathbf{P}^{(m)}$$

## Theorem

$$\mathbf{P}^{(n)} = \mathbf{P}^n$$

The n-step transition matrix equals the $n$-th power of the [[3 Reference/def-transition-probability-matrix_202603280810\|transition matrix]].

## Proof

See [[3 Reference/theorem-n-step-transition-identity_202603280813\|n-step Transition Matrix Identity]].

## Example

For $\mathbf{P} = \begin{Vmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{Vmatrix}$:

$$\mathbf{P}^{(4)} = \mathbf{P}^4 = \begin{Vmatrix}0.5749 & 0.4251 \\ 0.5668 & 0.4332\end{Vmatrix}$$

- $P^{(4)}_{00} = 0.5749$: If it rains today, probability it rains 4 days later is 57.49%
- $P^{(4)}_{01} = 0.4251$: If it rains today, probability it's sunny 4 days later is 42.51%

## Related

- [[3 Reference/def-transition-probability-matrix_202603280810\|Transition Probability Matrix]]
- [[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov Equation]]
