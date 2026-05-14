---
publish: true
aliases:
  - M/M/∞ Queueing System
created: 2026-05-08T05:33:03.424+07:00
modified: 2026-05-08T05:33:03.425+07:00
published: 2026-05-08T05:33:03.425+07:00
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