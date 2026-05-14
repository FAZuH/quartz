---
publish: true
aliases:
  - CTMC Limit Probabilities
created: 2026-05-08T06:23:06.521+07:00
modified: 2026-05-08T06:23:06.522+07:00
published: 2026-05-08T06:23:06.522+07:00
cssclasses: ""
creation-time: 2026-05-08 06:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

For a CTMC $\{X(t) : t \geq 0\}$ with transition probability function $P_{ij}(t)$, the **limit probabilities** (or **steady-state probabilities**) are:

$$\pi_j = \lim_{t \to \infty} P_{ij}(t), \quad \forall j \in S$$

The process will be in state $j$ at time $t$ no matter where it initially started. If such limits exist, they are called the **limit probabilities** of $\{X(t)\}$.

> [!TIP] Interpretation
> $\pi_j$ is the **long-run proportion of time** the process spends in state $j$. If $\pi_j = 0.3$, then in the long run, the process is in state $j$ for 30% of the time.

## Key Properties

When limit probabilities exist ($\pi_j > 0$, $\sum \pi_j = 1$), they are also **stationary probabilities**:

$$\pi_j = \sum_{i} \pi_i P_{ij}(t), \quad \forall t \geq 0$$

If the initial state is chosen according to $\{\pi_j\}$, then the probability of being in state $j$ at time $t$ is $\pi_j$ for all $t$.

## From Kolmogorov to Limit Probabilities

When steady state is reached, the Kolmogorov forward equation yields:

$$0 = -\pi_j \nu_j + \sum_{k \neq j} \pi_k q_{kj}$$

which is the **balance equation** — rate at which the process leaves $j$ equals rate at which it enters $j$.

## Matrix Form

Let $\mathbf{1}$ be a column vector of 1's and $\boldsymbol{\pi}$ be the row vector of limit probabilities. Then:

$$P \equiv \lim_{t \to \infty} P(t) = \mathbf{1}\boldsymbol{\pi}$$

And:
$$\boldsymbol{\pi} P = \boldsymbol{\pi}, \quad \boldsymbol{\pi} Q = \mathbf{0}$$

> [!NOTE]
> The process is called **ergodic** when the limiting probabilities exist.

## Related

- [[3 Reference/existence-of-ctmc-limit-probabilities_202605080617\|Existence of CTMC Limit Probabilities]]
- [[3 Reference/ctmc-balance-equations_202605080617\|CTMC Balance Equations]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]
- [[3 Reference/def-stationary-distribution_202603280834\|Stationary Distribution]]