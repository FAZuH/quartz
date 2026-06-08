---
publish: true
aliases:
  - CTMC Transition Probability Function
  - TPF
created: 2026-06-05T03:16:31.380+07:00
modified: 2026-06-05T03:16:31.381+07:00
published: 2026-06-05T03:16:31.381+07:00
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

Suppose we are at state $i$. **Transition Probability Function**, denoted by $P_{ij}(t)$ represents the probability that after time $t$ we transition to state $j$

## Definition

The **transition probability function** (TPF) of a [[continuous-time-markov-chain_202605080515|CTMC]] is:

$P_{ij}(t) = \Pr\{X(t+s) = j \mid X(s) = i\}, \quad t \geq 0$

where $P_{ij}(t)$ denotes the probability that a process presently in state $i$ will be in state $j$ a time $t$ later.

## Initial Conditions

$P_{ij}(0) = \begin{cases} 1, & i = j \\ 0, & i \neq j \end{cases}$

## Infinitesimal Behavior

For small time $h > 0$, the TPF is related to the [[transition-rate-matrix_202605080516|transition rate matrix]] $Q = (q_{ij})$:

$P_{ij}(h) = q_{ij}h + o(h), \quad i \neq j$
$P_{ii}(h) = 1 - \nu_i h + o(h)$

where $\nu_i = \sum_{j \neq i} q_{ij}$.

> [!TIP] Interpretation
> The TPF fully characterizes the probabilistic behavior of a CTMC over any time interval $t$. While the Q-matrix describes instantaneous behavior, the TPF describes behavior over arbitrary duration.

## Two Specifications

A CTMC can be specified by either:

1. The **Q-matrix** (transition rates) — describes instantaneous dynamics
2. The **TPF** $P_{ij}(t)$ — describes behavior over any time $t$

The TPF can be obtained from $Q$ by solving the Kolmogorov differential equations.

## Related

- [[transition-rate-matrix_202605080516|Transition Rate Matrix]]
- [[kolmogorov-differential-equations_202605080518|Kolmogorov Differential Equations]]
- [[ctmc-chapman-kolmogorov-equation_202605080516|CTMC Chapman-Kolmogorov Equation]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 8.** Diberikan $Q = \begin{bmatrix} -2 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 2 & -2 \end{bmatrix}$. Manakah yang benar?

(A) $P_{00}(t) = e^{-2t}$, $P_{01}(t) = 2(1-e^{-2t})$

> [!NOTE]- Jawaban
> Salah. $P_{00}(t) = e^{-2t}$ hanya benar jika dari state 0 tidak bisa kembali — tetapi dari $Q$ terlihat state 0 selalu bertransisi ke 1, dan dari 1 bisa kembali ke 0. TPF harus memperhitungkan semua kemungkinan jalur.

(B) $P_{02}(t) = 0.5$ untuk $t$ besar — **Salah**, karena $\pi_2 \approx 0.5$ bukan berarti $P_{02}(t) = 0.5$ untuk semua $t$.

(C) $P_{00}(t) = e^{-2t}$, $P_{02}(t) = 0$ — **Salah**, state 2 bisa dicapai dari 0 melalui state 1.
