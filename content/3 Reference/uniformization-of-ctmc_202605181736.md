---
publish: true
aliases:
  - Uniformization of CTMC
created: 2026-06-05T03:16:31.431+07:00
modified: 2026-06-05T03:16:31.432+07:00
published: 2026-06-05T03:16:31.432+07:00
creation-time: 2026-05-18 17:36
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

Let

- $\{X(t), t \geq 0\}$ a [[continuous-time-markov-chain_202605080515|continuous-time Markov chain]] with [[transition-rate-matrix_202605080516|transition rate matrix]] $\mathbf{Q}$ and state-dependent departure rates $v_i = \sum_{j \neq i} q_{ij}$
- $\gamma$ a constant satisfying $\gamma \geq \sup_i v_i$

**Uniformization** (or _randomization_) is a technique that converts the CTMC into a [[poisson-process_202604031845|Poisson process]] of rate $\gamma$ driving transitions in a [[def-discrete-time-markov-chain_202603280806|discrete-time Markov chain]] with one-step transition matrix $\mathbf{P}^*$.

> [!TIP] Interpretation
> Instead of having each state with its own exponential holding time parameter $v_i$, we "level the playing field" — events occur at a uniform rate $\gamma$ everywhere. At each event, the chain either makes a real transition (probability $v_i/\gamma$) or stays put (probability $1 - v_i/\gamma$). This decouples the timing from the state transitions, making numerical computation tractable.

## Uniformized Transition Matrix

Define the uniformized discrete-time transition matrix $\mathbf{P}^*$:

$$
P^*_{ij} = \begin{cases}
\dfrac{q_{ij}}{\gamma} = \dfrac{v_i P_{ij}}{\gamma}, & i \neq j \\[8pt]
1 - \dfrac{v_i}{\gamma}, & i = j
\end{cases}
$$

where $P_{ij}$ are the transition probabilities of the [[embedded-markov-chain_202605080616|embedded Markov chain]].

Equivalently, in matrix form:

$$
\mathbf{P}^* = \mathbf{I} + \frac{1}{\gamma} \mathbf{Q}
$$

## Transition Probability via Uniformization

The [[ctmc-transition-probability-function_202605080516|transition probability]] matrix $\mathbf{P}(t)$ is given by:

$$
\boxed{\mathbf{P}(t) = e^{\mathbf{Q}t} = \sum_{n=0}^{\infty} e^{-\gamma t} \frac{(\gamma t)^n}{n!} (\mathbf{P}^*)^n}
$$

The interpretation: $N \sim \text{Poisson}(\gamma t)$ events occur by time $t$. Given $N = n$ events, the state after $n$ transitions of the uniformized DTMC follows $(\mathbf{P}^*)^n$. A weighted sum over all possible numbers of Poisson events yields $\mathbf{P}(t)$.

## Procedure

1. Compute $v_i = \sum_{j \neq i} q_{ij}$ for each state $i$
2. Choose $\gamma \geq \max_i v_i$ (typically $\gamma = \max_i v_i$; larger $\gamma$ gives faster convergence but more terms)
3. Construct $\mathbf{P}^* = \mathbf{I} + \frac{1}{\gamma}\mathbf{Q}$
4. For a given $t$, truncate the series at $n = N$ where $e^{-\gamma t} (\gamma t)^N / N! < \epsilon$ (e.g., $\epsilon = 10^{-8}$)
5. Compute $\mathbf{P}(t)$ via the weighted sum

## Properties

| Property | Description |
|----------|-------------|
| **Decouples timing** | Transitions occur at Poisson rate $\gamma$, independent of the current state |
| **Self-loops** | $P^*_{ii} > 0$ when $v_i < \gamma$ — these are "fictitious" transitions where the chain stays in place |
| **Numerical stability** | Converges faster than direct matrix exponentiation for moderate $t$ |
| **Stochasticity** | $\mathbf{P}^*$ is a valid stochastic matrix (row sums = 1, entries $\geq 0$) |

## Related

- [[matrix-exponential_202605080518|Matrix Exponential]]
- [[kolmogorov-differential-equations_202605080518|Kolmogorov Differential Equations]]
- [[embedded-markov-chain_202605080616|Embedded Markov Chain]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Terapkan uniformization.** Untuk $Q = \begin{bmatrix} -2 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 2 & -2 \end{bmatrix}$:

(a) Tentukan $\gamma$ yang sesuai.

> [!NOTE]- Jawaban
> $\nu_0 = 2$, $\nu_1 = 3$, $\nu_2 = 2$. $\gamma = \max_i \nu_i = 3$.

(b) Konstruksi $\mathbf{P}^* = I + \frac{1}{\gamma}Q$.

> [!NOTE]- Jawaban
> $\mathbf{P}^* = \begin{bmatrix} 1 - \frac{2}{3} & \frac{2}{3} & 0 \\ \frac{1}{3} & 1 - \frac{3}{3} & \frac{2}{3} \\ 0 & \frac{2}{3} & 1 - \frac{2}{3} \end{bmatrix} = \begin{bmatrix} 1/3 & 2/3 & 0 \\ 1/3 & 0 & 2/3 \\ 0 & 2/3 & 1/3 \end{bmatrix}$.

(c) Interpretasi $P^*_{11} = 0$ dan $P^*_{00} = 1/3$.

> [!NOTE]- Jawaban
> $P^*_{11} = 0$ karena $\nu_1 = \gamma = 3$, jadi semua event Poisson di state 1 menghasilkan transisi riil. $P^*_{00} = 1/3$ adalah "fictitious transition" — proses tetap di state 0 dengan probabilitas $1 - \nu_0/\gamma = 1/3$.
