---
publish: true
aliases:
  - Transition Probability
created: 2026-04-09T23:07:39.336+07:00
modified: 2026-04-09T23:07:39.337+07:00
published: 2026-04-09T23:07:39.337+07:00
creation-time: 2026-03-28 08:07
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Suppose the conditional probability of $X_{n+1}$ being in [[def-state-stochastic_202603280801|state]] $j$ given that $X_n$ is in [[def-state-stochastic_202603280801|state]] $i$ is constant over time:

$P_{ij} = P(X_{n+1} = j \mid X_n = i), \quad \text{for all } n$

Then $P_{ij}$ is called the **one-step transition probability**.

> [!TIP] Interpretation
> Transition probability $P_{ij}$ is the probability of transitioning from state $i$ to state $j$ in one time step.

## Related

- [[def-transition-probability-matrix_202603280810|Transition Probability Matrix]]
- [[def-n-step-transition-matrix_202603280812|n-step Transition Matrix]]
- [[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov Equation]]
