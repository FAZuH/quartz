---
publish: true
aliases:
  - Continuous-Time Markov Chain
  - CTMC
created: 2026-06-05T03:16:31.374+07:00
modified: 2026-06-05T03:16:31.376+07:00
published: 2026-06-05T03:16:31.376+07:00
creation-time: 2026-05-08 05:15
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $\{X(t) : t \geq 0\}$ be a continuous-time [[stochastic-process_202603161400|stochastic process]] taking values in the set of nonnegative integers. The process is a **Continuous-Time Markov Chain** (CTMC) if for all $s, t \geq 0$ and nonnegative integers $i, j, x(u)$ with $0 \leq u < s$:

$$
\Pr\{X(t+s) = j \mid X(s) = i, X(u) = x(u), 0 \leq u < s\} = \Pr\{X(t+s) = j \mid X(s) = i\}
$$

> [!hint]
> In other words, the conditional distribution of the future $X(t+s)$ given the present $X(s)$ and the past $X(u)$ depends only on the present and is independent of the past.

> [!TIP] Interpretation
> A CTMC is the continuous-time analog of a [[def-discrete-time-markov-chain_202603280806|discrete-time Markov chain]]. The key difference is that the process spends a random, exponentially-distributed amount of time in each state before jumping to another state.
>
> Each state i has its own rate $\nu_{i}$, so the sojourn time in state 0 could be Exp(2) and in state 1 could be Exp(5)

## Homogeneous CMTC

If $\Pr\{X(t+s) = j \mid X(s) = i\}$ is independent of $s$, then the CTMC is said to be **homogeneous** (has stationary transition probabilities).

It means the probability of going from $i$ to $j$ depends only on the length of the interval $t$, not on when it starts ($s$):

$\Pr\{X(t+s)=j \mid X(s)=i\} = \Pr\{X(t)=j \mid X(0)=i\}$

Same transition length $t$, same probability - whether you start at time 0, time 5, or time 100.

## Sojourn time

Sojourn time is the amount of <u>time the CTMC stays in a particular state</u> before jumping to a different state.

**Soujourn time** at state $i$ is often denoted by $T_{i}$. It is exponentially distributed:

$$
T_{i}\sim \operatorname{Exp}(\nu_{i})
$$

## Equivalent Definition

A CTMC can be equivalently defined as a stochastic process where each time it enters state $i$:

1. The amount of time spent in state $i$ before making a transition is **exponentially distributed** with rate $\nu_i$.
2. When the process leaves state $i$, it enters state $j$ with probability $P_{ij}$, where $P_{ii} = 0$ and $\sum_j P_{ij} = 1$.

The amount of time spent in state $i$ and the next state visited must be **independent** random variables (otherwise the Markovian property is violated).

> [!note]
> $P_{ii}= 0$ because, $P_{ij} = q_{ij} / ν_i$, and $q_{ii}$ is not a rate of an actual transition — staying in $i$ is not a jump. The off-diagonal $q_{ij}$ are the only real transitions, so self-transitions are excluded by definition.

## Transition Probability Function

The **transition probability function** is:

$P_{ij}(t) = \Pr\{X(t+s) = j \mid X(s) = i\}$

with $P_{ij}(0) = 0$ for $i \neq j$ and $P_{ii}(0) = 1$.

## Relation to Poisson Process

The [[poisson-process_202604031845|Poisson Process]] is a CTMC where transitions only go from state $n$ to $n+1$ (pure birth process).

## Related

- [[def-discrete-time-markov-chain_202603280806|Discrete-time Markov Chain]]
- [[def-markov-property_202603280803|Markov Property]]
- [[pure-birth-process_202605080516|Pure Birth Process]]
- [[birth-and-death-process_202605080517|Birth and Death Process]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 1.** Suatu reaksi kimia mengubah molekul A menjadi B secara irreversibel. Awalnya ada $N$ molekul A. Jika pada waktu $t$ terdapat $j$ molekul A, setiap molekul berubah menjadi B dalam $[t, t+h)$ dengan probabilitas $qh + o(h)$, untuk $q > 0$. Modelkan banyaknya molekul A sebagai CTMC.

Tentukan state-space (ruang keadaan).

> [!NOTE]- Jawaban
> $\{0, 1, \ldots, N\}$. Karena awalnya ada $N$ molekul dan reaksi irreversibel (hanya berkurang), jumlah molekul A hanya bisa bernilai $0$ sampai $N$.
