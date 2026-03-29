---
publish: true
aliases:
  - Limiting Distribution Theorem
created: 2026-03-28T17:51:12.055+07:00
modified: 2026-03-28T17:51:12.056+07:00
published: 2026-03-28T17:51:12.056+07:00
creation-time: 2026-03-28 08:33
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Theorem

Let $\mathbf{P}$ be a [[def-transition-probability-matrix_202603280810|transition probability matrix (TPM)]] on finite [[def-state-stochastic_202603280801|state]] space.

Then there exists $\pi = (\pi\_0, \pi\_1, \dots, \pi\_N)$ such that:

$$\pi\_j = \lim\_{n \to \infty} P\_{ij}^{(n)}, \quad \forall i, j$$

The limiting distribution satisfies:
$$\pi = \pi \mathbf{P} \quad \text{and} \quad \sum\_j \pi\_j = 1$$

> [!TIP] Interpretation
> For regular chains, the limiting distribution exists and equals the unique stationary distribution. The long-run behavior is independent of the initial state.

## Related

- [[def-limiting-probability_202603280831|Limiting Probability]]
- [[def-stationary-distribution_202603280834|Stationary Distribution]]
- [[def-regular-tpm_202603280832|Regular TPM]]
