---
publish: true
aliases:
  - Transition Rate Matrix
created: 2026-06-05T03:16:31.407+07:00
modified: 2026-06-05T03:16:31.408+07:00
published: 2026-06-05T03:16:31.408+07:00
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

For a homogeneous [[continuous-time-markov-chain_202605080515|CTMC]] on discrete state space $S$, the **transition rate** from state $i$ to state $j$ ($i \neq j$) is defined as:

$q_{ij} = \nu_i P_{ij}$

where:

- $\nu_i$ is the rate of the exponential sojourn time in state $i$ - the rate at which $i$ departs to any other state.
- $P_{ij}$ is the probability that the process enters state $j$ when leaving $i$

> [!tip]
> We have $\nu_{i}$ - the "overall" transition rate of state $i$ to $j$.
> We "restrict" it with $P_{ij}$ - the probability $i$ transitions specifically to $j$.
>
> The result is the "specific" rate of transitioning from state $i$ to $j$

## Transition Matrix

The **transition rate matrix** (or **Q-matrix**, **generator matrix**) is:

$Q = (q_{ij})_{i,j \in S}$

with the diagonal entries:

$q_{ii} = -\sum_{j \neq i} q_{ij} = -\nu_i$

so that each row sums to $0$.

> [!TIP] Interpretation
> The Q-matrix is one of two equivalent ways to specify a CTMC (the other being the transition probability function).
>
> **Off-diagonal entry** $q_{ij}$ represents the <u>instantaneous rate at which the process transitions</u> from $i$ to $j$.
>
> **Diagonal entry** $-\nu_{i}$ represents the <u>**negative** of rate at which state $i$ departs to ANY other state</u>. This is why it $v_{i}$ is the sum of $q_{ij}$s at row $i$
>
> So, $q_{ij}=\nu_{i}P_{ij}$ is multiplying the total depart rate from $i$ with transition probability of $i$ to $j$, which gives the specific transition rate from $i$ to $j$
>
> The **expected soujourn** time is $\frac{1}{v_{i}}$

## Illustration

![[assets/transition-rate-matrix_202605080516-1779399565770.webp|697]]

## From Q-matrix to Parameters

Given $Q$, we can recover $\nu_i$ and $P_{ij}$:

$$
\begin{align}
\nu_i & = \sum_{j \neq i} q_{ij} \\
P_{ij} & = \frac{q_{ij}}{\nu_i} & = \frac{q_{ij}}{\sum_{j \neq i} q_{ij}}
\end{align}
$$

## CTMC via Transition Rates

A CTMC can be defined directly through its transition rates. For small $h > 0$:

$\Pr\{X(t+h) = j \mid X(t) = i\} = \begin{cases} q_{ij}h + o(h), & i \neq j \\ 1 - \nu_i h + o(h), & i = j \end{cases}$

## Related

- [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]
- [[ctmc-transition-probability-function_202605080516|CTMC Transition Probability Function]]
- [[def-transition-probability-matrix_202603280810|Transition Probability Matrix]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 3.** Reaksi kimia: $N$ molekul A berubah menjadi B secara irreversibel. Jika ada $j$ molekul, laju transisi per molekul adalah $q$. Tentukan entri matriks generator $Q$ untuk transisi $j \to j-1$.

> [!NOTE]- Jawaban
> $q_{j, j-1} = qj$. Karena ada $j$ molekul independen, total laju transisi $j \to j-1$ adalah $qj$. Diagonal: $q_{jj} = -qj$. Semua entri lain nol (hanya transisi $j \to j-1$ yang mungkin).

**Kuis 2 2025 No. 8.** Diberikan $Q = \begin{bmatrix} -2 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 2 & -2 \end{bmatrix}$ pada $S = \{0, 1, 2\}$. Tentukan $\nu_0, \nu_1, \nu_2$ dan matriks embedded MC $P$.

> [!NOTE]- Jawaban
> $\nu_0 = 2$, $\nu_1 = 3$, $\nu_2 = 2$. $P = \begin{bmatrix} 0 & 1 & 0 \\ 1/3 & 0 & 2/3 \\ 0 & 1 & 0 \end{bmatrix}$. Diperoleh dari $P_{ij} = q_{ij}/\nu_i$ untuk $i \neq j$.
