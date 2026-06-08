---
publish: true
aliases:
  - n-step Transition Matrix Example
created: 2026-04-09T23:07:39.381+07:00
modified: 2026-04-09T23:07:39.382+07:00
published: 2026-04-09T23:07:39.382+07:00
creation-time: 2026-03-28 08:55
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: n-step Transition Matrix

Following from [[example-transition-matrix_202603280854|Transition Matrix Example]], let:

$\mathbf{P} = \begin{Vmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{Vmatrix}$

Using the [[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov]] equation, we can compute the probability that if today is rains, then 4 days later it will be rains ($\mathbf{P}^{(4)}_{00}$):

$\mathbf{P}^{(4)} = \mathbf{P}^4 = \begin{Vmatrix}0.5749 & 0.4251 \\ 0.5668 & 0.4332\end{Vmatrix}$

Thus, $\mathbf{P}^{(4)}_{00} = 0.5749$

Interpretations:

- $P^{(4)}_{00} = 0.5749$: If it rains today, probability it rains 4 days later is 57.49%
- $P^{(4)}_{01} = 0.4251$: If it rains today, probability it's sunny 4 days later is 42.51%
- $P^{(4)}_{10} = 0.5668$: If it's sunny today, probability it rains 4 days later is 56.68%
- $P^{(4)}_{11} = 0.4332$: If it's sunny today, probability it's sunny 4 days later is 43.32%

> [!NOTE]
> Each row sums to 1 (total probability from any starting state).

## Related

- [[def-n-step-transition-matrix_202603280812|n-step Transition Matrix]]
- [[example-transition-matrix_202603280854|Transition Matrix Example]]
