---
publish: true
aliases:
  - Kolmogorov Differential Equations
created: 2026-05-08T05:33:03.414+07:00
modified: 2026-05-21T20:59:40.535+07:00
published: 2026-05-21T20:59:40.535+07:00
cssclasses: ""
creation-time: 2026-05-08 05:18
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Theorem

The **Kolmogorov differential equations** describe the evolution of the transition probability function $P_{ij}(t)$ of a [[3 Reference/ctmc-transition-probability-function_202605080516\|CTMC]].

## Forward Equation

Starting from the [[3 Reference/ctmc-chapman-kolmogorov-equation_202605080516\|Chapman-Kolmogorov equation]] and taking $h \to 0$:

$$\frac{d}{dt} P_{ij}(t) = \sum_{k \neq j} P_{ik}(t) q_{kj} - P_{ij}(t) \nu_j$$

where $q_{kj}$ are entries of the [[3 Reference/transition-rate-matrix_202605080516\|Q-matrix]] and $\nu_j = \sum_{k \neq j} q_{jk}$.

> [!TIP] Interpretation (Forward)
> The rate of change of $P_{ij}(t)$ equals the rate at which transitions arrive at $j$ from other states $k$ (via $q_{kj}$) minus the rate at which the process leaves $j$ (at rate $\nu_j$). The process runs **forward**: from $0$ to $t$ to $t + h$.

## Backward Equation

$$\frac{d}{dt} P_{ij}(t) = \sum_{k \neq i} q_{ik} P_{kj}(t) - \nu_i P_{ij}(t)$$

> [!TIP] Interpretation (Backward)
> The process runs **backward**: it starts $h$ later, first making an instantaneous transition from $i$ to $k$ (at rate $q_{ik}$), then proceeding to $j$ in time $t$. Alternatively, it stays in $i$ for small time $h$ then moves to $j$ in time $t$ (at rate $-\nu_i$).

## Matrix Form

Let $P(t) = (P_{ij}(t))$ and $Q$ be the Q-matrix.

- **Forward**: $P'(t) = P(t) Q$
- **Backward**: $P'(t) = Q P(t)$

## Solution

The solution is $P(t) = e^{Qt}$, where $e^{Qt}$ is the [[3 Reference/matrix-exponential_202605080518\|matrix exponential]].

## Related

- [[3 Reference/ctmc-transition-probability-function_202605080516\|CTMC Transition Probability Function]]
- [[3 Reference/transition-rate-matrix_202605080516\|Transition Rate Matrix]]
- [[3 Reference/matrix-exponential_202605080518\|Matrix Exponential]]
- [[3 Reference/ctmc-chapman-kolmogorov-equation_202605080516\|CTMC Chapman-Kolmogorov Equation]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 8.** Untuk $Q = \begin{bmatrix} -2 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 2 & -2 \end{bmatrix}$, tuliskan persamaan forward untuk $P_{00}(t)$.

> **Jawaban:** $\frac{d}{dt}P_{00}(t) = P_{00}(t)q_{00} + P_{01}(t)q_{10} + P_{02}(t)q_{20} = -2P_{00}(t) + P_{01}(t) \cdot 1$.

**CTMC 2-state.** Untuk $Q = \begin{bmatrix} -\lambda & \lambda \\ \mu & -\mu \end{bmatrix}$, selesaikan persamaan backward untuk $P_{00}(t)$.

> **Jawaban:** $\frac{d}{dt}P_{00}(t) = -\lambda P_{00}(t) + \lambda P_{10}(t)$. Dengan $P_{10} = 1 - P_{00}$: $\frac{d}{dt}P_{00} = -\lambda P_{00} + \lambda(1-P_{00}) = \lambda - (\lambda+\mu)P_{00}$. Solusi: $P_{00}(t) = \frac{\mu}{\lambda+\mu} + \frac{\lambda}{\lambda+\mu}e^{-(\lambda+\mu)t}$.