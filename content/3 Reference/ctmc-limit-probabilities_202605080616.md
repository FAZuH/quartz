---
publish: true
aliases:
  - CTMC Limit Probabilities
created: 2026-06-05T03:16:31.416+07:00
modified: 2026-06-05T03:16:31.417+07:00
published: 2026-06-05T03:16:31.417+07:00
creation-time: 2026-05-08 06:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

For a CTMC $\{X(t) : t \geq 0\}$ with transition probability function $P_{ij}(t)$, the **limit probabilities** (or **steady-state probabilities**) are:

$\pi_j = \lim_{t \to \infty} P_{ij}(t), \quad \forall j \in S$

The process will be in state $j$ at time $t$ no matter where it initially started. If such limits exist, they are called the **limit probabilities** of $\{X(t)\}$.

> [!TIP] Interpretation
> $\pi_j$ is the **long-run proportion of time** the process spends in state $j$. If $\pi_j = 0.3$, then in the long run, the process is in state $j$ for 30% of the time.

## Key Properties

When limit probabilities exist ($\pi_j > 0$, $\sum \pi_j = 1$) (proven by [[existence-of-ctmc-limit-probabilities_202605080617|Existence of CTMC Limit Probabilities]]), they are also **stationary probabilities**:

$\pi_j = \sum_{i} \pi_i P_{ij}(t), \quad \forall t \geq 0$

If the initial state is chosen according to $\{\pi_j\}$, then the probability of being in state $j$ at time $t$ is $\pi_j$ for all $t$.

## From Kolmogorov to Limit Probabilities

When steady state is reached, the Kolmogorov forward equation yields:

$0 = -\pi_j \nu_j + \sum_{k \neq j} \pi_k q_{kj}$

which is the **balance equation** — rate at which the process leaves $j$ equals rate at which it enters $j$.

## Matrix Form

Let $\mathbf{1}$ be a column vector of 1's and $\boldsymbol{\pi}$ be the row vector of limit probabilities. Then:

$P \equiv \lim_{t \to \infty} P(t) = \mathbf{1}\boldsymbol{\pi}$

And:
$\boldsymbol{\pi} P = \boldsymbol{\pi}, \quad \boldsymbol{\pi} Q = \mathbf{0}$

> [!NOTE]
> The process is called **ergodic** when the limiting probabilities exist.

## Related

- [[existence-of-ctmc-limit-probabilities_202605080617|Existence of CTMC Limit Probabilities]]
- [[ctmc-balance-equations_202605080617|CTMC Balance Equations]]
- [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]
- [[def-stationary-distribution_202603280834|Stationary Distribution]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 9.** Diberikan $Q = \begin{bmatrix} -2 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 4 & -4 \end{bmatrix}$ pada $S = \{1, 2, 3\}$. Tentukan $\lim_{t \to \infty} P[X_t = 3 \mid X_0 = 1]$.

> [!NOTE]- Jawaban
> Selesaikan $\boldsymbol{\pi} Q = \mathbf{0}$ dengan $\sum \pi_i = 1$:
> $\begin{aligned} -2\pi_1 + \pi_2 &= 0 &\Rightarrow \pi_2 &= 2\pi_1 \\ 2\pi_1 - 3\pi_2 + 4\pi_3 &= 0 &\Rightarrow 2\pi_1 - 6\pi_1 + 4\pi_3 = 0 &\Rightarrow \pi_3 = \pi_1 \\ 2\pi_2 - 4\pi_3 &= 0 &\Rightarrow 4\pi_1 - 4\pi_1 = 0 &\text{(konsisten)} \end{aligned}$
> $\pi_1 + 2\pi_1 + \pi_1 = 1 \Rightarrow \pi_1 = 1/4$. Jadi $\pi_3 = 1/4$. $\lim_{t \to \infty} P[X_t = 3 \mid X_0 = 1] = \pi_3 = 1/4$.

**Kuis 2 2025 No. 6.** M/M/1/2: $\lambda = 3$/jam, $\mu = 4$/jam. Tentukan rata-rata jumlah tugas dalam sistem ($L$).

> [!NOTE]- Jawaban
> $\rho = 3/4$. Untuk M/M/1/2 (kapasitas 2):
> $\pi_1 = \rho \pi_0$, $\pi_2 = \rho \pi_1 = \rho^2 \pi_0$. $\pi_0(1 + \rho + \rho^2) = 1 \Rightarrow \pi_0 = \frac{1}{1 + 3/4 + 9/16} = \frac{16}{49}$.
> $L = 0 \cdot \pi_0 + 1 \cdot \pi_1 + 2 \cdot \pi_2 = \frac{12}{49} + \frac{18}{49} = \frac{30}{49}$.
