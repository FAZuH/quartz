---
publish: true
aliases:
  - Chapman-Kolmogorov Equation
created: 2026-04-09T23:07:39.104+07:00
modified: 2026-04-09T23:07:39.104+07:00
published: 2026-04-09T23:07:39.104+07:00
creation-time: 2026-03-28 08:11
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

The **Chapman-Kolmogorov Equation** gives the [[def-transition-probability_202603280807|transition probability]] to go from [[def-state-stochastic_202603280801|state]] $i$ to $j$ in $n + m$ steps:

$P_{ij}^{(n+m)} = \sum_{k=0}^{N} P_{ik}^{(n)} P_{kj}^{(m)}$

Where $N$ is the number of all [[def-state-stochastic_202603280801|states]].

> [!TIP] Interpretation
> To get somewhere in multiple steps, you must pass through some intermediate state. The equation formalizes: the probability of going from $i$ to $j$ in $n+m$ steps equals the sum over all possible intermediate states $k$ of the probability of going $i \to k$ in $n$ steps, then $k \to j$ in $m$ steps.

## Example

5-step transition from rain to rain =

- (2 steps to rain, then 3 steps rain→rain) +
- (2 steps to sunny, then 3 steps sunny→rain)

## Proof

$$
\begin{aligned}
P_{ij}^{n+m} &= P\{X_{n+m} = j \mid X_0 = i\} \\
&= \sum_{k=0}^{\infty} P\{X_{n+m} = j, X_n = k \mid X_0 = i\} \\
&= \sum_{k=0}^{\infty} P\{X_{n+m} = j \mid X_n = k, X_0 = i\} P\{X_n = k \mid X_0 = i\} \\
&= \sum_{k=0}^{\infty} P_{kj}^m P_{ik}^n
\end{aligned}
$$

## Related

- [[def-n-step-transition-matrix_202603280812|n-step Transition Matrix]]
- [[theorem-n-step-transition-identity_202603280813|n-step Transition Matrix Identity]]
