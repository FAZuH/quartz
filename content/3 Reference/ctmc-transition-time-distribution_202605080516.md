---
publish: true
aliases:
  - CTMC Transition Time Distribution
created: 2026-06-05T03:16:31.383+07:00
modified: 2026-06-05T03:16:31.384+07:00
published: 2026-06-05T03:16:31.384+07:00
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Properties

Let $T_i$ denote the amount of time that a [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]] $\{X(t) : t \geq 0\}$ <u>stays in state $i$ before making a transition</u> to a different state.

$T_i$ satisfies the **memoryless property**:

$\Pr\{T_i > t + s \mid T_i > s\} = \Pr\{T_i > t\}, \quad \forall s, t \geq 0$
Since $T_i$ is memoryless, it must be **exponentially distributed**:

$T_i \sim \text{Exp}(\nu_i)$

where $\nu_i$ is the **transition rate** out of state $i$.

> [!TIP] Interpretation
> The exponential transition time is a **fundamental property** of CTMCs. It follows directly from the Markovian assumption: the probability that the process stays in state $i$ for at least $t$ more time units is independent of how long it has already been in that state.

## Proof

By the [[def-markov-property_202603280803|Markov Property]] and the homogeneity of the CTMC:

$$
\begin{aligned}
\Pr\{T_i > t + s \mid T_i > s\}
&= \Pr\{X(0, t+s] = i \mid X[0, s] = i\} \\
&= \Pr\{X(s, t+s] = i \mid X[0, s] = i\} \\
&= \Pr\{X(s, t+s] = i \mid X(s) = i\} \\
&= \Pr\{X(0, t] = i \mid X(0) = i\} \\
&= \Pr\{T_i > t\}
\end{aligned}
$$

## Implications

- The probability that the process leaves state $i$ in a small time interval $h$ is approximately $\nu_i h$.
- The mean sojourn time in state $i$ is $\mathbb{E}[T_i] = 1/\nu_i$.
- The exponential distribution's memoryless property is what makes CTMCs analytically tractable.

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution]]
- [[memoryless-property_202604031840|Memoryless Property]]
- [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 5.** Pada reaksi kimia di atas, jika terdapat $j$ molekul A, setiap molekul berubah menjadi B dengan laju $q$. Tentukan ekspektasi waktu hingga semua molekul A habis.

> [!NOTE]- Jawaban
> $\sum_{j=1}^N \frac{1}{qj}$. Waktu transisi dari $j$ ke $j-1$ adalah $T_j \sim \text{Exp}(qj)$, sehingga $\mathbb{E}[T_j] = 1/(qj)$. Jumlahkan untuk $j = N, N-1, \ldots, 1$.

**Kuis 2 2024 No. 2a.** Pure birth process dimulai dari $X(0)=0$ dengan $\lambda_0=1$, $\lambda_1=3$, $\lambda_2=2$, $\lambda_3=5$. Tentukan $\mathbb{E}[W_3]$ dan $\text{Var}(W_3)$.

> [!NOTE]- Jawaban
> $\mathbb{E}[W_3] = \frac{1}{1} + \frac{1}{3} + \frac{1}{2} = \frac{11}{6}$. $\text{Var}(W_3) = \frac{1}{1^2} + \frac{1}{3^2} + \frac{1}{2^2} = 1 + \frac{1}{9} + \frac{1}{4} = \frac{49}{36}$.
