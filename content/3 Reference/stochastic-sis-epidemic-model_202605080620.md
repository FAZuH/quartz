---
publish: true
aliases:
  - Stochastic SIS Epidemic Model
created: 2026-05-08T06:23:06.549+07:00
modified: 2026-05-08T06:23:06.550+07:00
published: 2026-05-08T06:23:06.550+07:00
creation-time: 2026-05-08 06:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

The **Stochastic SIS (Susceptible-Infected-Susceptible) Epidemic Model** is a [[birth-and-death-process_202605080517|birth and death process]] where individuals recover without immunity.

- $N$: constant total population ($S(t) + I(t) = N$)
- $X(t)$: number of infectives at time $t$, state space $\{0, 1, \ldots, N\}$
- $\beta$: contact (transmission) rate
- $\gamma$: recovery rate

## Birth and Death Rates

$\lambda_i = \frac{\beta i (N-i)}{N}, \quad \mu_i = \gamma i$

with $\lambda_0 = \mu_0 = 0$ and $\lambda_N = 0$ (state $0$ is absorbing — disease extinction).

> [!TIP] Interpretation
> A "birth" is a new infection (susceptible → infective), proportional to the number of contacts between infectives and susceptibles. A "death" is a recovery (infective → susceptible).

## Basic Reproduction Number

$\mathcal{R}_0 = \frac{\beta}{\gamma}$

- If $\mathcal{R}_0 < 1$: disease dies out quickly
- If $\mathcal{R}_0 > 1$: an epidemic can occur, but extinction is still certain ($\lim_{t \to \infty} p_0(t) = 1$); expected extinction time grows rapidly with $\mathcal{R}_0$

## Quasistationary Distribution

Since state $0$ is absorbing, the quasistationary distribution (conditional on non-extinction) is:

$q_i^* = \frac{\mathcal{R}_0^i \binom{N}{i}}{\sum_{j=1}^{N} \mathcal{R}_0^j \binom{N}{j}}, \quad i = 1, \ldots, N$

## Deterministic Analog

The deterministic SIS model is logistic: $\frac{dI}{dt} = \lambda I(1 - I/K)$ with $\lambda = \beta - \gamma$ and $K = N(1 - 1/\mathcal{R}_0)$.

The equilibrium $I = 0$ is stable if $\mathcal{R}_0 < 1$. The endemic equilibrium $I = N(1 - 1/\mathcal{R}_0)$ exists and is stable if $\mathcal{R}_0 > 1$.

> [!NOTE]
> The stochastic mean of infectives is always less than the deterministic equilibrium, and ultimate extinction is certain in the stochastic model but not in the deterministic one.

## Related

- [[birth-and-death-process_202605080517|Birth and Death Process]]
- [[quasistationary-probability-distribution_202605080619|Quasistationary Probability Distribution]]
- [[stochastic-sir-epidemic-model_202605080620|Stochastic SIR Epidemic Model]]
- [[probability-of-population-extinction_202605080618|Probability of Population Extinction]]
