---
publish: true
aliases:
  - CTMC Chapman-Kolmogorov Equation
created: 2026-06-05T03:16:31.377+07:00
modified: 2026-06-05T03:16:31.378+07:00
published: 2026-06-05T03:16:31.378+07:00
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Theorem

For all $s, t \geq 0$ and all states $i, j$:

$P_{ij}(t+s) = \sum_{k=0}^{\infty} P_{ik}(t) P_{kj}(s)$

> [!TIP] Interpretation
> To go from state $i$ to state $j$ in time $t+s$, the process first goes from $i$ to some intermediate state $k$ in time $t$ (with probability $P_{ik}(t)$), and then from $k$ to $j$ in the remaining time $s$ (with probability $P_{kj}(s)$). We sum over all possible intermediate states $k$.

This is the continuous-time analog of the [[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov Equation]] for discrete-time Markov chains.

## Matrix Form

In matrix notation, with $P(t) = (P_{ij}(t))$:

$P(t+s) = P(t) P(s)$

## Key Role

The Chapman-Kolmogorov equation is essential for deriving the [[kolmogorov-differential-equations_202605080518|Kolmogorov Differential Equations]] (both forward and backward), which govern the evolution of the TPF.

## Related

- [[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov Equation]]
- [[ctmc-transition-probability-function_202605080516|CTMC Transition Probability Function]]
- [[kolmogorov-differential-equations_202605080518|Kolmogorov Differential Equations]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**CTMC 2-state.** Misalkan CTMC dengan $S = \{0, 1\}$ dan $Q = \begin{bmatrix} -\lambda & \lambda \\ \mu & -\mu \end{bmatrix}$. Diketahui $P_{00}(t) = \frac{\mu}{\lambda+\mu} + \frac{\lambda}{\lambda+\mu}e^{-(\lambda+\mu)t}$.

Verifikasi persamaan Chapman-Kolmogorov $P_{00}(t+s) = P_{00}(t)P_{00}(s) + P_{01}(t)P_{10}(s)$.

> **Petunjuk:** Gunakan $P_{01}(t) = 1 - P_{00}(t)$ dan $P_{10}(t) = \frac{\mu}{\lambda+\mu}(1 - e^{-(\lambda+\mu)t})$. Substitusi dan sederhanakan.
