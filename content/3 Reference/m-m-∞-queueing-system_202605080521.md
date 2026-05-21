---
publish: true
aliases:
  - M/M/∞ Queueing System
created: 2026-05-08T05:33:03.424+07:00
modified: 2026-05-21T21:05:15.797+07:00
published: 2026-05-21T21:05:15.797+07:00
cssclasses: ""
creation-time: 2026-05-08 05:21
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

The **M/M/∞ Queueing System** is a queue with infinite servers where:
- Customers arrive according to a [[3 Reference/poisson-process_202604031845\|Poisson process]] with rate $\lambda$
- Service times are i.i.d. $\text{Exp}(\mu)$
- There are **infinitely many servers**, so arriving customers are served immediately (no waiting)

This is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] with:

$$\lambda_n = \lambda, \quad \forall n$$
$$\mu_n = n\mu, \quad \forall n$$

> [!TIP] Interpretation
> Since there are always enough servers, every arriving customer goes directly into service. The departure rate is proportional to the number currently being served because each server works independently at rate $\mu$.

## Steady-State Probabilities

$$\pi_0 = e^{-\lambda/\mu}$$
$$\pi_k = \frac{(\lambda/\mu)^k e^{-\lambda/\mu}}{k!}, \quad k \geq 0$$

This is a **Poisson distribution** with mean $\lambda/\mu$.

## Performance Metrics

| Metric | Formula | Reasoning |
|--------|---------|-----------|
| $L$ | $\lambda/\mu$ | Mean of Poisson($\lambda/\mu$) |
| $W$ | $1/\mu$ | Average service time (no waiting) |

These satisfy Little's formula: $L = \lambda W$.

## Related

- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]
- [[3 Reference/m-m-s-queueing-system_202605080521\|M/M/s Queueing System]]
- [[3 Reference/poisson-process_202604031845\|Poisson Process]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**M/M/∞ — steady-state.** $\lambda = 3$/jam, $\mu = 2$/jam. Tentukan $\pi_n$.

> **Jawaban:** $\pi_n = \frac{(3/2)^n e^{-3/2}}{n!}$. Poisson dengan mean $\lambda/\mu = 1.5$. $\pi_0 = e^{-1.5} \approx 0.223$, $\pi_1 = 1.5 e^{-1.5} \approx 0.335$, $\pi_2 = \frac{2.25}{2} e^{-1.5} \approx 0.251$, dst.

**M/M/∞ vs M/M/1.** Bandingkan $L$ untuk M/M/∞ dan M/M/1 dengan $\lambda = 3$, $\mu = 2$.

> **Jawaban:** M/M/∞: $L = \lambda/\mu = 1.5$ (tidak ada antrian — selalu langsung dilayani). M/M/1: $\rho = 3/2 > 1$ → tidak mencapai steady-state! (sistem meledak). Perlu $\mu > \lambda$ untuk M/M/1.