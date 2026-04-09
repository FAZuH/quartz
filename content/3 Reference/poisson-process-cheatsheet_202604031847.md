---
publish: true
aliases:
  - Poisson Process Cheatsheet
created: 2026-04-03T18:47:54.516+07:00
modified: 2026-04-09T22:02:40.986+07:00
published: 2026-04-09T22:02:40.986+07:00
tags:
  - type/cheatsheet
cssclasses: ""
creation-time: 2026-04-03 18:47
status: in progress
parent:
  - "[[stochastic-model]]"
---


# Cheatsheet: Poisson Process

## Core Distributions

$$ \begin{align}
N(t) &\sim \text{Po}(\lambda t) \\
T_n &\stackrel{\text{i.i.d.}}{\sim} \text{Exp}(\lambda) \\
W_n &\sim \text{Gamma}(n, \lambda)
\end{align} $$

Where $N(t)$ = count by time $t$, $T_n$ = [[3 Reference/inter-arrival-times_202604031845\|inter-arrival time]], $W_n$ = [[3 Reference/waiting-times-(poisson)_202604031845\|waiting time]] to $n$-th event.

## Key Relationships

| Relationship | Formula |
|---|---|
| Count vs Waiting | $N(t) \geq n \iff W_n \leq t$ |
| Waiting time as sum | $W_n = \sum_{i=1}^n T_i$ |
| Poisson mean | $E[N(t)] = \lambda t$ |
| Exponential mean | $E[T_n] = \frac{1}{\lambda}$ |
| Gamma mean/variance | $E[W_n] = \frac{n}{\lambda}$, $\text{Var}(W_n) = \frac{n}{\lambda^2}$ |

## Conditional Distribution

Given $N(t) = n$, arrival times are distributed as order statistics of $n$ i.i.d. $\text{Uniform}(0, t)$:

$$f(s_1, \dots, s_n \mid N(t) = n) = \frac{n!}{t^n}, \quad 0 < s_1 < \cdots < s_n < t$$

## Thinning

Each event classified as type I (prob $p$) or type II (prob $1-p$):

| Process | Rate | Independent? |
|---|---|---|
| $N_1(t)$ (type I) | $\lambda p$ | Yes |
| $N_2(t)$ (type II) | $\lambda(1-p)$ | Yes |

## Nonhomogeneous Poisson Process

$$N(t) \sim \text{Po}\left(m(t)\right), \quad m(t) = \int_0^t \lambda(s) \, ds$$

## Compound Poisson Process

$$X(t) = \sum_{i=1}^{N(t)} Y_i, \quad E[X(t)] = \lambda t \cdot E[Y], \quad \text{Var}(X(t)) = \lambda t \cdot E[Y^2]$$

## Related Distributions

| Distribution | Definition | Failure Rate |
|---|---|---|
| [[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential]] | Single stage | $r(t) = \lambda$ (constant) |
| [[3 Reference/hyperexponential-distribution_202604031846\|Hyperexponential]] | Mixture: pick one | $r(t) \to \min \lambda_i$ |
| [[3 Reference/hypoexponential-distribution_202604031846\|Hypoexponential]] | Sum of distinct rates | $r(t) \to \min \lambda_i$ |
| [[3 Reference/coxian-distribution_202604031846\|Coxian]] | Random sum | Discrete $r(n)$ |
