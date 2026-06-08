---
publish: true
aliases:
  - M/M/1 Queueing System
created: 2026-06-05T03:16:31.390+07:00
modified: 2026-06-05T03:16:31.391+07:00
published: 2026-06-05T03:16:31.391+07:00
creation-time: 2026-05-08 05:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

The **M/M/1 Queueing System** is a single-server queue where:

- Customers arrive according to a [[poisson-process_202604031845|Poisson process]] with rate $\lambda$
- Service times are i.i.d. $\text{Exp}(\mu)$
- There is **one server**
- Queue discipline is FIFO

The number of customers in the system $X(t)$ is a [[birth-and-death-process_202605080517|birth and death process]] with:

$\lambda_n = \lambda, \quad n \geq 0$
$\mu_n = \mu, \quad n \geq 1$

## Steady-State Condition

The system reaches steady state only when $\lambda < \mu$ (or equivalently, $\rho = \lambda/\mu < 1$).

## Steady-State Probabilities

The long-run probability of $n$ customers in the system:

$P_n = \left(1 - \frac{\lambda}{\mu}\right) \left(\frac{\lambda}{\mu}\right)^n, \quad n \geq 0$

This is a geometric distribution with parameter $\rho = \lambda/\mu$.

## Performance Metrics

| Metric | Formula |
|--------|---------|
| $\pi_0$ (system empty) | $1 - \rho$ |
| $L$ (avg. # in system) | $\frac{\lambda}{\mu - \lambda} = \frac{\rho}{1-\rho}$ |
| $W$ (avg. time in system) | $\frac{1}{\mu - \lambda}$ |
| $L_Q$ (avg. # in queue) | $\frac{\rho^2}{1-\rho}$ |
| $W_Q$ (avg. wait in queue) | $\frac{\rho}{\mu - \lambda}$ |

> [!NOTE]
> The waiting time distribution in M/M/1 is $T \sim \text{Exp}(\mu - \lambda)$. This follows because the total time in system for a customer finding $n$ ahead is $\text{Gamma}(n+1, \mu)$, and unconditioning over the geometric distribution of $n$ yields $\text{Exp}(\mu - \lambda)$.

## Busy Period

The mean busy period is $\mathbb{E}[B] = \frac{1}{\mu - \lambda}$. The mean idle period is $\mathbb{E}[I] = \frac{1}{\lambda}$.

The proportion of time the system is empty: $\pi_0 = \frac{\mathbb{E}[I]}{\mathbb{E}[I] + \mathbb{E}[B]} = 1 - \rho$.

## Traffic Intensity

$\rho = \frac{\lambda}{\mu}$

As $\rho \to 1$, $L \to \infty$ (the system "blows up"). A well-functioning system requires $\rho < 1$.

## Related

- [[queueing-system_202605080520|Queueing System]]
- [[m-m-s-queueing-system_202605080521|M/M/s Queueing System]]
- [[m-m-∞-queueing-system_202605080521|M/M/∞ Queueing System]]
- [[birth-and-death-queueing-models_202605080521|Birth and Death Queueing Models]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 10.** M/M/1 dengan kapasitas 2 (finite capacity). $\lambda = 2$/menit, $\mu = 3$/menit. Hitung $\rho$, cek kondisi steady-state, dan tentukan $\pi_n$ untuk $n = 0, 1, 2$.

> [!NOTE]- Jawaban
> $\rho = 2/3 < 1$ ✓. Untuk finite capacity, steady-state selalu ada. $\pi_1 = \rho \pi_0$, $\pi_2 = \rho^2 \pi_0$ (dengan $\lambda_2 = 0$). $\pi_0 = \frac{1}{1+\rho+\rho^2} = \frac{9}{19}$, $\pi_1 = \frac{6}{19}$, $\pi_2 = \frac{4}{19}$.

**M/M/1 — metrik performa.** Untuk M/M/1 dengan $\lambda = 4$/jam, $\mu = 6$/jam, hitung $L$ dan $W$.

> [!NOTE]- Jawaban
> $\rho = 2/3$. $L = \frac{\rho}{1-\rho} = \frac{2/3}{1/3} = 2$ pelanggan. $W = \frac{1}{\mu-\lambda} = \frac{1}{2} = 0.5$ jam.
