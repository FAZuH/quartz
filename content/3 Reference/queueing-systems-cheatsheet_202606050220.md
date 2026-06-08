---
publish: true
aliases:
  - Queueing Systems Cheatsheet
created: 2026-06-05T02:21:28.489+07:00
modified: 2026-06-05T02:21:28.490+07:00
published: 2026-06-05T02:21:28.490+07:00
creation-time: 2026-06-05 02:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Kendall Notation

$A/S/r/K/N$

| Symbol | Meaning |
|--------|---------|
| $M$ | Markovian (Poisson arrivals / exponential service) |
| $G$ | General distribution |
| $D$ | Deterministic |
| $E_k$ | Erlang-$k$ |
| $r$ | Number of servers |
| $K$ | System capacity (default $\infty$) |
| $N$ | Population size (default $\infty$) |

Abbreviated as $A/S/r$ for FIFO, infinite capacity, infinite source.

## Little's Formula

| Formula | Variables |
|---------|-----------|
| $L = \lambda W$ | $L$: avg. # in system, $W$: avg. time in system |
| $L_Q = \lambda W_Q$ | $L_Q$: avg. # in queue, $W_Q$: avg. wait in queue |
| $L_{\text{service}} = \lambda E[S]$ | $E[S]$: mean service time |

Valid for almost any queueing model regardless of arrival process, servers, or discipline.

## Birth-Death Queueing Model

Birth ($\lambda_n$) = arrival, Death ($\mu_n$) = departure.

**Balance:** $\lambda_n \pi_n = \mu_{n+1} \pi_{n+1}$, $n \geq 0$

**General solution:**

$\pi_0 = \frac{1}{\sum_{j=0}^{\infty} \theta_j}, \quad \pi_k = \theta_k \pi_0, \quad \theta_0=1, \quad \theta_j = \frac{\lambda_0\lambda_1\cdots\lambda_{j-1}}{\mu_1\mu_2\cdots\mu_j}$

## M/M/1 Queue

| Parameter | Value |
|-----------|-------|
| Arrival rate | $\lambda$ |
| Service rate | $\mu$ |
| Traffic intensity | $\rho = \lambda/\mu$ |
| Steady state condition | $\rho < 1$ |

**Steady-state probabilities:** $\pi_n = (1-\rho)\rho^n$, $n \geq 0$ (geometric)

| Metric | Formula |
|--------|---------|
| $L$ (avg. # in system) | $\dfrac{\rho}{1-\rho}$ |
| $L_Q$ (avg. # in queue) | $\dfrac{\rho^2}{1-\rho}$ |
| $W$ (avg. time in system) | $\dfrac{1}{\mu - \lambda}$ |
| $W_Q$ (avg. wait in queue) | $\dfrac{\rho}{\mu - \lambda}$ |
| $E[B]$ (mean busy period) | $\dfrac{1}{\mu - \lambda}$ |
| $E[I]$ (mean idle period) | $\dfrac{1}{\lambda}$ |
| $\pi_0$ (system empty) | $1 - \rho = \dfrac{E[I]}{E[I] + E[B]}$ |

**Waiting time distribution:** $T \sim \text{Exp}(\mu - \lambda)$

## M/M/s Queue

$ \lambda_n = \lambda, \quad n \geq 0, \qquad \mu_n = \begin{cases} n\mu, & 1 \leq n \leq s \\ s\mu, & n > s \end{cases}$

| Quantity | Formula |
|----------|---------|
| Traffic intensity | $\rho = \dfrac{\lambda}{s\mu} < 1$ |
| $\theta_j$ ($j \leq s$) | $\dfrac{(\lambda/\mu)^j}{j!}$ |
| $\theta_j$ ($j > s$) | $\dfrac{(\lambda/\mu)^s}{s!}\left(\dfrac{\lambda}{s\mu}\right)^{j-s}$ |

**$W = W_Q + 1/\mu$**, **$L = L_Q + \lambda/\mu$**

## M/M/∞ Queue

$\lambda_n = \lambda, \quad \mu_n = n\mu$

**Steady state:** $\pi_k = \dfrac{(\lambda/\mu)^k e^{-\lambda/\mu}}{k!}$ (Poisson distribution)

| $L$ | $\lambda/\mu$ |
| $W$ | $1/\mu$ |

## Queueing with Balking

Customer finding $n$ in system joins with probability $\alpha_n$:

$\lambda_n = \lambda \alpha_n, \quad \mu_n = \mu$

Special case M/M/1/$N$: $\alpha_n = 1$ for $n < N$, $\alpha_n = 0$ for $n \geq N$.

## Key Relationships

$$$\begin{align}
L &= L_Q + \rho \quad \text{(single server)} \\
W &= W_Q + \frac{1}{\mu} \\
L &= L_Q + \frac{\lambda}{\mu} \quad \text{(general)}
\end{align} $$

## Related

- [[queueing-system_202605080520|Queueing System]]
- [[queueing-formula-l-=-λw_202605080520|Queueing Formula L = λW]]
- [[m-m-1-queueing-system_202605080520|M/M/1 Queueing System]]
- [[m-m-s-queueing-system_202605080521|M/M/s Queueing System]]
- [[m-m-∞-queueing-system_202605080521|M/M/∞ Queueing System]]
- [[birth-and-death-queueing-models_202605080521|Birth and Death Queueing Models]]
- [[queueing-system-with-balking_202605080521|Queueing System with Balking]]
- [[ctmc-cheatsheet_202606050220|CTMC Cheatsheet]]
$$$
