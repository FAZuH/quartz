---
publish: true
aliases:
  - Limiting Distribution Theorem
created: 2026-04-09T23:07:39.678+07:00
modified: 2026-04-09T23:07:39.679+07:00
published: 2026-04-09T23:07:39.679+07:00
cssclasses: ""
creation-time: 2026-03-28 08:33
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Theorem

Let $\mathbf{P}$ be a [[3 Reference/def-transition-probability-matrix_202603280810\|transition probability matrix (TPM)]] on finite [[3 Reference/def-state-stochastic_202603280801\|state]] space.

Then there exists $\pi = (\pi_0, \pi_1, \dots, \pi_N)$ such that:

$$\pi_j = \lim_{n \to \infty} P_{ij}^{(n)}, \quad \forall i, j$$

The limiting distribution satisfies:
$$\pi = \pi \mathbf{P} \quad \text{and} \quad \sum_j \pi_j = 1$$

> [!TIP] Interpretation
> For regular chains, the limiting distribution exists and equals the unique stationary distribution. The long-run behavior is independent of the initial state.

## Related

- [[3 Reference/def-limiting-probability_202603280831\|Limiting Probability]]
- [[3 Reference/def-stationary-distribution_202603280834\|Stationary Distribution]]
- [[3 Reference/def-regular-tpm_202603280832\|Regular TPM]]
