---
publish: true
aliases:
  - Quasistationary Probability Distribution
created: 2026-05-08T06:23:06.541+07:00
modified: 2026-05-08T06:23:06.542+07:00
published: 2026-05-08T06:23:06.542+07:00
creation-time: 2026-05-08 06:19
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

In birth and death processes where the origin is absorbing ([[probability-of-population-extinction_202605080618|certain extinction]]), there is no stationary distribution. However, prior to extinction, the probability distribution of $X(t)$ can be approximately stationary for a long period of time (especially if the extinction time is very long).

This approximate stationary distribution is called the **quasistationary probability distribution** (or **quasiequilibrium**).

## Definition

Conditioned on non-extinction:

$q_i(t) = \frac{p_i(t)}{1 - p_0(t)}, \quad i = 1, 2, \ldots$

The quasistationary distribution is the limit: $q_i^* = \lim_{t \to \infty} q_i(t)$.

> [!TIP] Interpretation
> If you observe the process and it hasn't gone extinct for a very long time, $q_i^*$ gives the probability that the population is currently at size $i$. It describes the "metastable" behavior before eventual extinction.

## Formula for Finite State Space $\{0, 1, \ldots, N\}$

$q_i^* = \frac{\dfrac{\lambda_1\lambda_2\cdots\lambda_{i-1}}{\mu_1\mu_2\cdots\mu_i}}{\displaystyle\sum_{j=1}^{N} \frac{\lambda_1\lambda_2\cdots\lambda_{j-1}}{\mu_1\mu_2\cdots\mu_j}}, \quad i = 1, \ldots, N$

where $\lambda_1\cdots\lambda_0/\mu_1\cdots\mu_1 \equiv 1/\mu_1$ when $i = 1$.

## Matrix Form

Let $D$ be the $N \times N$ submatrix of the generator $Q$ (delete first row and column). The quasistationary distribution satisfies:

$D\mathbf{q} = \mathbf{0}, \quad \sum_{i=1}^N q_i = 1$

## Comparison with Stationary Distribution

| | Quasistationary ($q^*$) | Stationary ($\pi$) |
|---|---|---|
| Origin | $q_0^* = 0$ (conditioned away) | $\pi_0 > 0$ |
| Existence | Always exists for finite $N$ | Requires $\sum \theta_i < \infty$ |
| Interpretation | Conditional on survival | Long-run proportion |

## Related

- [[probability-of-population-extinction_202605080618|Probability of Population Extinction]]
- [[expected-time-to-extinction_202605080619|Expected Time to Extinction]]
- [[stochastic-logistic-growth-process_202605080619|Stochastic Logistic Growth Process]]
- [[stochastic-sis-epidemic-model_202605080620|Stochastic SIS Epidemic Model]]
