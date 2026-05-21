---
publish: true
aliases:
  - CTMC Balance Equations
created: 2026-05-08T06:23:06.517+07:00
modified: 2026-05-21T21:01:36.153+07:00
published: 2026-05-21T21:01:36.153+07:00
cssclasses: ""
creation-time: 2026-05-08 06:17
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

The **balance equations** for a CTMC equate the rate at which the process leaves a state with the rate at which it enters that state.

For each state $j \in S$:

$$\nu_j \pi_j = \sum_{k \neq j} \pi_k q_{kj}$$

where:
- $\nu_j = \sum_{k \neq j} q_{jk}$ is the rate of leaving state $j$
- $q_{kj}$ is the transition rate from $k$ to $j$
- $\pi_j$ is the [[3 Reference/ctmc-limit-probabilities_202605080616\|limit probability]] of state $j$

> [!TIP] Interpretation
> The left side ($\nu_j \pi_j$) is the rate at which the process leaves state $j$. The right side ($\sum \pi_k q_{kj}$) is the rate at which it enters $j$. In steady state, these must be equal — otherwise the probability mass would accumulate or drain from state $j$.

## Matrix Form

$$\boldsymbol{\pi} Q = \mathbf{0}, \quad \sum_{k} \pi_k = 1$$

## For Birth and Death Processes

| State | Balance Equation |
|-------|------------------|
| 0 | $\lambda_0 \pi_0 = \mu_1 \pi_1$ |
| 1 | $(\lambda_1 + \mu_1)\pi_1 = \mu_2 \pi_2 + \lambda_0 \pi_0$ |
| 2 | $(\lambda_2 + \mu_2)\pi_2 = \mu_3 \pi_3 + \lambda_1 \pi_1$ |
| $n \geq 1$ | $(\lambda_n + \mu_n)\pi_n = \mu_{n+1} \pi_{n+1} + \lambda_{n-1} \pi_{n-1}$ |

These simplify to: $\lambda_n \pi_n = \mu_{n+1} \pi_{n+1}$ for all $n \geq 0$.

## Derivation from Forward Equation

Starting from the [[3 Reference/kolmogorov-differential-equations_202605080518\|Kolmogorov forward equation]] and taking $t \to \infty$:

$$\lim_{t \to \infty} \frac{d}{dt} P_{ij}(t) = \lim_{t \to \infty} \left[ -P_{ij}(t)\nu_j + \sum_{k \neq j} P_{ik}(t) q_{kj} \right]$$

At steady state, the derivative is zero, yielding: $0 = -\pi_j \nu_j + \sum_{k \neq j} \pi_k q_{kj}$.

## Related

- [[3 Reference/ctmc-limit-probabilities_202605080616\|CTMC Limit Probabilities]]
- [[3 Reference/existence-of-ctmc-limit-probabilities_202605080617\|Existence of CTMC Limit Probabilities]]
- [[3 Reference/solving-bd-process-balance-equations_202605080618\|Solving BD Process Balance Equations]]
- [[3 Reference/kolmogorov-differential-equations_202605080518\|Kolmogorov Differential Equations]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 10.** M/M/1/2: $\lambda = 2$/menit, $\mu = 3$/menit. Pelanggan yang datang saat sistem penuh (2 pelanggan) pergi (balking). Tuliskan dan selesaikan persamaan balance untuk $\pi_0, \pi_1, \pi_2$.

> **Jawaban:** State $\{0, 1, 2\}$ dengan $\lambda_0 = \lambda_1 = 2$, $\lambda_2 = 0$ (balking), $\mu_1 = \mu_2 = 3$.
> Balance: $\lambda_0 \pi_0 = \mu_1 \pi_1 \Rightarrow 2\pi_0 = 3\pi_1 \Rightarrow \pi_1 = \frac{2}{3}\pi_0$.
> $\lambda_1 \pi_1 = \mu_2 \pi_2 \Rightarrow 2\pi_1 = 3\pi_2 \Rightarrow \pi_2 = \frac{2}{3}\pi_1 = \frac{4}{9}\pi_0$.
> $\pi_0(1 + \frac{2}{3} + \frac{4}{9}) = 1 \Rightarrow \pi_0 = \frac{9}{19}$. $\pi_1 = \frac{6}{19}$, $\pi_2 = \frac{4}{19}$.

**Kuis 2 2024 No. 3.** Taksi tiba rate 1/menit, pelanggan tiba rate 2/menit. Pelanggan pergi jika tidak ada taksi. Modelkan state sebagai jumlah taksi menunggu (bisa 0, 1, 2, ...). Tulis balance equation untuk state $n \geq 1$.

> **Jawaban:** $\lambda = 1$ (taksi), $\mu = 2$ (pelanggan mengambil taksi). Balance: $\lambda \pi_n = \mu \pi_{n+1} \Rightarrow 1 \cdot \pi_n = 2 \cdot \pi_{n+1} \Rightarrow \pi_{n+1} = \frac{1}{2}\pi_n$. $\pi_n = (\frac{1}{2})^n \pi_0$.