---
publish: true
aliases:
  - M/M/s Queueing System
created: 2026-05-08T05:33:03.428+07:00
modified: 2026-05-08T05:33:03.429+07:00
published: 2026-05-08T05:33:03.429+07:00
cssclasses: ""
creation-time: 2026-05-08 05:21
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

The **M/M/s Queueing System** is a multi-server queue where:
- Customers arrive according to a [[3 Reference/poisson-process_202604031845\|Poisson process]] with rate $\lambda$
- Service times are i.i.d. $\text{Exp}(\mu)$
- There are **$s$ servers**, each working at rate $\mu$
- Queue discipline is FIFO

$X(t)$ is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] with:

$$\lambda_n = \lambda, \quad n \geq 0$$

$$\mu_n = \begin{cases} n\mu, & 1 \leq n \leq s \\ s\mu, & n > s \end{cases}$$

> [!TIP] Interpretation
> When $n \leq s$ customers are in the system, $n$ servers are busy and each works at rate $\mu$, giving total departure rate $n\mu$. When $n > s$, all $s$ servers are busy, giving total departure rate $s\mu$. Customers beyond $s$ wait in queue.

## Key Quantities

- Number of customers in service: $\min\{X(t), s\}$
- Number of customers in queue: $\max\{X(t) - s, 0\}$

## Traffic Intensity

$$\rho = \frac{\lambda}{s\mu}$$

Steady state exists only when $\rho < 1$ (the arrival rate is less than the maximum service rate).

## Steady-State Probabilities

The auxiliary quantity:

$$\theta_j = \begin{cases} \frac{(\lambda/\mu)^j}{j!}, & j \leq s \\ \frac{(\lambda/\mu)^s}{s!}\left(\frac{\lambda}{s\mu}\right)^{j-s}, & j > s \end{cases}$$

Then $\pi_0 = 1 / \sum_{j=0}^{\infty} \theta_j$ and $\pi_k = \theta_k \pi_0$.

## Performance Metrics

- Mean queue length: $L_Q = \sum_{k=s+1}^{\infty} (k-s) \pi_k$
- Mean waiting time in queue: $W_Q = L_Q / \lambda$
- Mean time in system: $W = W_Q + 1/\mu$
- Mean # in system: $L = \lambda W = L_Q + \lambda/\mu$

## Related

- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]
- [[3 Reference/m-m-∞-queueing-system_202605080521\|M/M/∞ Queueing System]]
- [[3 Reference/birth-and-death-queueing-models_202605080521\|Birth and Death Queueing Models]]