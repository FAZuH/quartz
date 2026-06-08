---
publish: true
aliases:
  - Time Reversible CTMC
created: 2026-06-05T03:16:31.427+07:00
modified: 2026-06-05T03:16:31.429+07:00
published: 2026-06-05T03:16:31.429+07:00
creation-time: 2026-05-08 06:17
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

An ergodic CTMC is **time reversible** if the process run backward in time has the same probabilistic structure as the original process.

## Condition for Time Reversibility

$P_i q_{ij} = P_j q_{ji}, \quad \forall i \neq j$

where $P_i$ are the limiting probabilities and $q_{ij}$ are transition rates.

> [!TIP] Interpretation
> The rate at which the process goes directly from state $i$ to state $j$ equals the rate at which it goes directly from $j$ to $i$. The process "looks the same" whether time runs forward or backward.

## Embedded Chain Perspective

Time reversibility of the CTMC is equivalent to time reversibility of the [[embedded-markov-chain_202605080616|embedded DTMC]]:

$\pi_i P_{ij} = \pi_j P_{ji}, \quad \forall i, j$

where $\pi_i$ are the embedded chain's limiting probabilities.

## Relation Between CTMC and Embedded Probabilities

$P_i = \frac{\pi_i / \nu_i}{\sum_j \pi_j / \nu_j}$

## Reversed Process

Going backward in time:

- The time spent in state $i$ is still exponentially distributed with rate $\nu_i$
- The sequence of states forms a DTMC with transition probabilities $Q_{ij} = \frac{\pi_j P_{ji}}{\pi_i}$

## Finding Limiting Probabilities via Time Reversibility

**Proposition**: If we can find probabilities $\{P_i\}$ with $\sum P_i = 1$, $P_i \geq 0$, satisfying:

$P_i q_{ij} = P_j q_{ji}, \quad \forall i \neq j$

then the chain is time reversible and $\{P_i\}$ are the limiting probabilities.

This often provides an easier way to find limiting probabilities than solving balance equations directly.

## Related

- [[ergodic-birth-and-death-process-is-time-reversible_202605080617|Ergodic Birth and Death Process is Time Reversible]]
- [[truncated-time-reversible-ctmc_202605080618|Truncated Time Reversible CTMC]]
- [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]
- [[def-time-reversible-markov_202603280852|Time Reversible Markov Chain]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Verifikasi time reversibility.** Untuk BD process ergodik, buktikan bahwa $P_i q_{i,i+1} = P_{i+1} q_{i+1,i}$ (syarat time reversibility) ekuivalen dengan $\lambda_i P_i = \mu_{i+1} P_{i+1}$.

> [!NOTE]- Jawaban
> $q_{i,i+1} = \lambda_i$ (birth rate), $q_{i+1,i} = \mu_{i+1}$ (death rate). Jadi $P_i \lambda_i = P_{i+1} \mu_{i+1}$, yang merupakan persamaan detailed balance yang sudah terbukti dari balance equation BD process. Maka semua BD process ergodik bersifat time reversible.

**M/M/1 truncated.** M/M/1 dengan $\lambda = 3$, $\mu = 4$ ditruncate ke state $\{0, 1, 2\}$ (M/M/1/2). Jika original $\pi_n = (1-\rho)\rho^n$ dengan $\rho = 3/4$, tentukan $\pi_n$ untuk truncated chain.

> [!NOTE]- Jawaban
> $\pi_n^A = \frac{\pi_n}{\sum_{i=0}^2 \pi_i} = \frac{(1-\rho)\rho^n}{(1-\rho)(1+\rho+\rho^2)} = \frac{\rho^n}{1+\rho+\rho^2}$. $\pi_0 = \frac{16}{49}$, $\pi_1 = \frac{12}{49}$, $\pi_2 = \frac{9}{49}$.
