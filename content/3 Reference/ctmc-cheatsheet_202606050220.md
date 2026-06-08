---
publish: true
aliases:
  - CTMC Cheatsheet
created: 2026-06-05T02:21:19.613+07:00
modified: 2026-06-05T04:22:48.375+07:00
published: 2026-06-05T04:22:48.375+07:00
creation-time: 2026-06-05 02:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Core Definition

$P\{X(t+s)=j \mid X(s)=i, X(u)=x(u), 0 \leq u < s\} = P\{X(t+s)=j \mid X(s)=i\}$

| Property | Meaning |
|----------|---------|
| Homogeneous | $P\{X(t+s)=j \mid X(s)=i\}$ independent of $s$ |
| Transition probability function | $P_{ij}(t) = P\{X(t+s)=j \mid X(s)=i\}$ |
| Stationary transition probabilities | TPF depends only on $t$, not on $s$ |

## Equivalent Definition (via Holding Times)

A CTMC is a process where each visit to state $i$:

| Aspect             | Property                                            |
| ------------------ | --------------------------------------------------- |
| Sojourn time $T_i$ | $\text{Exp}(\nu_i)$                                 |
| Next state $j$     | Chosen w.p. $P_{ij}$, $P_{ii}=0$, $\sum_j P_{ij}=1$ |
| Independence       | $T_i$ and next state are independent                |

## Transition Time

$P\{T_i > t + s \mid T_i > s\} = P\{T_i > t\} \implies T_i \sim \text{Exp}(\nu_i)$

## Q-Matrix (Transition Rate Matrix)

$q_{ij} = \nu_i P_{ij}, \quad q_{ii} = -\sum_{j \neq i} q_{ij} = -\nu_i$

| From Q | Formula |
|--------|---------|
| $\nu_i$ | $\nu_i = \sum_{j \neq i} q_{ij}$ |
| $P_{ij}$ | $P_{ij} = q_{ij} / \nu_i$ |

Small-time behavior: $P_{ij}(h) = q_{ij}h + o(h)$ $(i \neq j)$, $P_{ii}(h) = 1 - \nu_i h + o(h)$

## Chapman-Kolmogorov Equation

$P_{ij}(t+s) = \sum_{k=0}^{\infty} P_{ik}(t) P_{kj}(s), \quad \text{matrix: } P(t+s) = P(t) P(s)$

## Kolmogorov Differential Equations

| Equation           | Formula                                                                                                                                                                                                      | Matrix Form     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Forward<br>j, Pik  | $\frac{d}{dt}P_{ij}(t) = \sum_{k \neq \textcolor{red}{j}} \textcolor{cyan}{P_{\textcolor{yellow}{ik}}(t)q_{\textcolor{lime}{kj}}} - \textcolor{cyan}{P_{ij}(t)}\textcolor{cyan}{\nu}_{\textcolor{red}{j}}$ | $P'(t) = P(t)Q$ |
| Backward<br>i, Pkj | $\frac{d}{dt}P_{ij}(t) = \sum_{k \neq \textcolor{red}{i}} \textcolor{cyan}{P_{\textcolor{lime}{kj}}(t)q_{\textcolor{yellow}{ik}}} - \textcolor{cyan}{P_{ij}(t)}\textcolor{cyan}{\nu}_{\textcolor{red}{i}}$ | $P'(t) = QP(t)$ |

**Solution:** $P(t) = e^{Qt}$, where $e^{Qt} = \sum_{n=0}^{\infty} \frac{(Qt)^n}{n!}$

**Matrix exponential:** $\frac{d}{dt}e^{Qt} = Qe^{Qt} = e^{Qt}Q$, with $P(0) = I$

## Embedded Markov Chain

$\{X_n = Y(T_n)\}$ — the CTMC sampled at jump times, ignoring holding times.

| Property              | Relation to Embedded MC                                                   |
| --------------------- | ------------------------------------------------------------------------- |
| Communication         | $i \leftrightarrow j$ in CTMC $\iff$ $i \leftrightarrow j$ in embedded MC |
| Irreducibility        | CTMC irreducible $\iff$ embedded MC irreducible                           |
| Recurrence/Transience | Same in CTMC and embedded MC                                              |
| Positive recurrence   | Same in CTMC and embedded MC                                              |
| Periodicity           | Not possible in CTMC ($P_{ii}=0$)                                         |

Limit probabilities: $P_i = \dfrac{\pi_i/\nu_i}{\sum_j \pi_j/\nu_j}$ where $\pi_i$ are embedded DTMC limits

## Balance Equations (Steady State)

$\nu_j \pi_j = \sum_{k \neq j} \pi_k q_{kj}, \quad \forall j$

Matrix form: $\boldsymbol{\pi} Q = \mathbf{0}$, $\sum_k \pi_k = 1$

| Condition | Formula |
|-----------|---------|
| Limit probabilities exist | Chain is irreducible AND positive recurrent |
| Also stationary | $\pi_j = \sum_i \pi_i P_{ij}(t)$, $\forall t$ |

## Birth and Death Process

| Parameter | Transitions |
|-----------|-------------|
| $\lambda_n$ (birth) | $n \to n+1$ |
| $\mu_n$ (death) | $n \to n-1$ |
| $\nu_n = \lambda_n + \mu_n$ | Rate out of $n$ |

$P_{n,n+1} = \frac{\lambda_n}{\lambda_n + \mu_n}, \quad P_{n,n-1} = \frac{\mu_n}{\lambda_n + \mu_n}$

**Balance equations:** $\lambda_n \pi_n = \mu_{n+1} \pi_{n+1}$, $n \geq 0$

**Solution:** $\pi_n = \dfrac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n}\pi_0$, $\quad \pi_0 = \dfrac{1}{1 + \sum_{n=1}^{\infty} \frac{\lambda_0\cdots\lambda_{n-1}}{\mu_1\cdots\mu_n}}$

Existence: $\sum_{n=1}^{\infty} \frac{\lambda_0\cdots\lambda_{n-1}}{\mu_1\cdots\mu_n} < \infty$

## Time Reversibility

$P_i q_{ij} = P_j q_{ji}, \quad \forall i \neq j$

| Fact | Statement |
|------|-----------|
| Ergodicity + BD process | Always time reversible |
| Truncation of reversible chain | Also time reversible, $P_j^A = P_j/\sum_{i \in A} P_i$ |
| M/M/s output in steady state | Poisson process with rate $\lambda$ |

## Related

- [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]
- [[ctmc-transition-time-distribution_202605080516|CTMC Transition Time Distribution]]
- [[transition-rate-matrix_202605080516|Transition Rate Matrix]]
- [[ctmc-transition-probability-function_202605080516|CTMC Transition Probability Function]]
- [[ctmc-chapman-kolmogorov-equation_202605080516|CTMC Chapman-Kolmogorov Equation]]
- [[kolmogorov-differential-equations_202605080518|Kolmogorov Differential Equations]]
- [[matrix-exponential_202605080518|Matrix Exponential]]
- [[embedded-markov-chain_202605080616|Embedded Markov Chain]]
- [[class-properties-of-ctmc_202605080616|Class Properties of CTMC]]
- [[ctmc-limit-probabilities_202605080616|CTMC Limit Probabilities]]
- [[ctmc-balance-equations_202605080617|CTMC Balance Equations]]
- [[time-reversible-ctmc_202605080617|Time Reversible CTMC]]
- [[birth-and-death-process_202605080517|Birth and Death Process]]
- [[poisson-process-cheatsheet_202604031847|Poisson Process Cheatsheet]]
