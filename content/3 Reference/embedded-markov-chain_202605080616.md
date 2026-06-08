---
publish: true
aliases:
  - Embedded Markov Chain
created: 2026-06-05T03:16:31.419+07:00
modified: 2026-06-05T03:16:31.420+07:00
published: 2026-06-05T03:16:31.420+07:00
creation-time: 2026-05-08 06:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

Given a CTMC $\{Y(t) : t \geq 0\}$ on state space $S$, the **Embedded Markov Chain** (or **jump process**) is the discrete-time process $\{X_n = Y(T_n) : n \in \mathbb{Z}^+\}$ where $T_n$ is the sojourn time between the $(n-1)$-th and $n$-th events.

The embedded chain is obtained by sampling the CTMC at the jump times (ignoring the time spent in each state).

## Jump Transition Probabilities

For $i, j \in S$:

$P_{ij} = \Pr\{X_{n+1} = j \mid X_n = i\} = \Pr\{Y(T_{n+1}) = j \mid Y(T_n) = i\}$

where $P_{ij}$ are exactly the entries of the [[transition-rate-matrix_202605080516|P-matrix]] from the Q-matrix specification: $P_{ij} = q_{ij}/\nu_i$ for $i \neq j$, and $P_{ii} = 0$.

## Key Properties

- The embedded chain is a **homogeneous discrete-time Markov chain** with countable state space
- $P_{ii} = 0$ for all $i$ — states do not transition to themselves (a CTMC always changes state at jump times)
- Periodicity is not possible in CTMC

> [!TIP] Interpretation
> The embedded chain captures the sequence of states visited, ignoring how long the process stays in each state. It provides the discrete-time "skeleton" of the CTMC. The CTMC can be viewed as an embedded DTMC with exponentially distributed holding times.

## Procedure: Construct from Q

Given $Q$:

1. **Read $\nu_i$** — diagonal entries as positive: $\nu_i = |q_{ii}|$
2. **Compute $P_{ij}$ for off-diagonal** — divide each entry by its row's $\nu_i$: $P_{ij} = \frac{q_{ij}}{\nu_i}, \quad i \neq j$
3. **Set $P_{ii} = 0$** — no self-transitions in the jump chain

> [!NOTE]- Example: Poisson Process
> For a [[poisson-process_202604031845|Poisson process]] $\{N(t) : t \geq 0\}$ with rate $\lambda$, the embedded MC has:
>
> $P_{i,i+1} = 1, \quad \forall i$
>
> It only jumps from $i$ to $i+1$ (pure birth process).

## Relation to Limiting Probabilities

The limiting probabilities of the CTMC are related to those of the embedded chain:

$P_i = \frac{\pi_i / \nu_i}{\sum_{j} \pi_j / \nu_j}$

where $P_i$ are CTMC limiting probabilities, $\pi_i$ are embedded DTMC limiting probabilities, and $\nu_i$ are transition rates.

## Related

- [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]
- [[transition-rate-matrix_202605080516|Transition Rate Matrix]]
- [[class-properties-of-ctmc_202605080616|Class Properties of CTMC]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 4.** Reaksi kimia: $N$ molekul A → B, laju $qj$ dari state $j$. Tentukan $P_{j, j-1}$ dan $P_{j, j}$ (probabilitas transisi embedded MC).

> [!NOTE]- Jawaban
> $P_{j, j-1} = 1$ untuk $j > 0$, $P_{0,0} = 1$ (absorbing). Karena hanya satu transisi yang mungkin ($j \to j-1$), probabilitas embedded MC untuk transisi tersebut adalah 1. $P_{jj} = 0$ untuk semua state non-absorbing (embedded MC selalu berubah state).

**Dari Q ke P.** Diberikan $Q = \begin{bmatrix} -2 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 2 & -2 \end{bmatrix}$. Tentukan matriks transisi embedded MC $P$.

> [!NOTE]- Jawaban
> $\nu_0 = 2$, $P_{01} = 1$. $\nu_1 = 3$, $P_{10} = 1/3$, $P_{12} = 2/3$. $\nu_2 = 2$, $P_{21} = 1$. Jadi $P = \begin{bmatrix} 0 & 1 & 0 \\ 1/3 & 0 & 2/3 \\ 0 & 1 & 0 \end{bmatrix}$.
