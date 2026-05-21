---
publish: true
aliases:
  - Continuous-Time Markov Chain
created: 2026-05-08T05:33:03.404+07:00
modified: 2026-05-21T20:58:32.307+07:00
published: 2026-05-21T20:58:32.307+07:00
cssclasses: ""
creation-time: 2026-05-08 05:15
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

Let $\{X(t) : t \geq 0\}$ be a continuous-time stochastic process taking values in the set of nonnegative integers. The process is a **Continuous-Time Markov Chain** (CTMC) if for all $s, t \geq 0$ and nonnegative integers $i, j, x(u)$ with $0 \leq u < s$:

$$
\Pr\{X(t+s) = j \mid X(s) = i, X(u) = x(u), 0 \leq u < s\} = \Pr\{X(t+s) = j \mid X(s) = i\}
$$

In other words, the conditional distribution of the future $X(t+s)$ given the present $X(s)$ and the past $X(u)$ depends only on the present and is independent of the past.

If $\Pr\{X(t+s) = j \mid X(s) = i\}$ is independent of $s$, then the CTMC is said to be **homogeneous** (has stationary transition probabilities).

> [!TIP] Interpretation
> A CTMC is the continuous-time analog of a [[3 Reference/def-discrete-time-markov-chain_202603280806\|discrete-time Markov chain]]. The key difference is that the process spends a random, exponentially-distributed amount of time in each state before jumping to another state.

## Equivalent Definition

A CTMC can be equivalently defined as a stochastic process where each time it enters state $i$:

1. The amount of time spent in state $i$ before making a transition is **exponentially distributed** with rate $\nu_i$.
2. When the process leaves state $i$, it enters state $j$ with probability $P_{ij}$, where $P_{ii} = 0$ and $\sum_j P_{ij} = 1$.

The amount of time spent in state $i$ and the next state visited must be **independent** random variables (otherwise the Markovian property is violated).

## Transition Probability Function

The **transition probability function** is:

$$P_{ij}(t) = \Pr\{X(t+s) = j \mid X(s) = i\}$$

with $P_{ij}(0) = 0$ for $i \neq j$ and $P_{ii}(0) = 1$.

## Relation to Poisson Process

The [[3 Reference/poisson-process_202604031845\|Poisson Process]] is a CTMC where transitions only go from state $n$ to $n+1$ (pure birth process).

## Related

- [[3 Reference/def-discrete-time-markov-chain_202603280806\|Discrete-time Markov Chain]]
- [[3 Reference/def-markov-property_202603280803\|Markov Property]]
- [[3 Reference/pure-birth-process_202605080516\|Pure Birth Process]]
- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 1.** Suatu reaksi kimia mengubah molekul A menjadi B secara irreversibel. Awalnya ada $N$ molekul A. Jika pada waktu $t$ terdapat $j$ molekul A, setiap molekul berubah menjadi B dalam $[t, t+h)$ dengan probabilitas $qh + o(h)$, untuk $q > 0$. Modelkan banyaknya molekul A sebagai CTMC.

Tentukan state-space (ruang keadaan).

> **Jawaban:** $\{0, 1, \ldots, N\}$. Karena awalnya ada $N$ molekul dan reaksi irreversibel (hanya berkurang), jumlah molekul A hanya bisa bernilai $0$ sampai $N$.