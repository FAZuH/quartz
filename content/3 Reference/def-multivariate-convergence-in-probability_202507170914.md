---
publish: true
aliases:
  - Multivariate Convergence in Probability
created: 2026-04-09T23:07:39.239+07:00
modified: 2026-04-09T23:07:39.240+07:00
published: 2026-04-09T23:07:39.240+07:00
creation-time: 2025-07-17 09:14
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $\mathbf{X}$ : [[def-random-vector_202507171028|Random vector]]
- $\{ \mathbf{X}_{n} \}$ : Sequence of $p$-dimensional vectors
- $\{ X_{n} \}$ and $\mathbf{X}$ defined on the same sample [[def-space_202507171031|space]]

If

$$
\lim_{ n \to \infty } P\left[||\mathbf{X}_{n} - \mathbf{X}||\geq \epsilon\right] = 0, \quad \forall \epsilon > 0
$$

Then

- We say $\{ \mathbf{X}_{n} \}$ **[[mathstat5.1#Definition 5.1.1 Convergence in probability|converges in probability]]** to $\mathbf{X}$
- We write $\mathbf{X}_{n}\xrightarrow P \mathbf{X}$
