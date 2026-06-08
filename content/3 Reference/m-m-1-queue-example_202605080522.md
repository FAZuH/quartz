---
publish: true
aliases:
  - M/M/1 Queue Example
created: 2026-05-08T05:33:03.421+07:00
modified: 2026-06-05T03:02:48.163+07:00
published: 2026-06-05T03:02:48.163+07:00
creation-time: 2026-05-08 05:22
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Example

Consider an [[m-m-1-queueing-system_202605080520|M/M/1 queue]] with arrival rate $\lambda = 4$ customers per hour and service rate $\mu = 6$ customers per hour.

> [!NOTE]- Solution
> **Step 1:** Traffic intensity: $\rho = \frac{\lambda}{\mu} = \frac{4}{6} = \frac{2}{3} < 1$ ✓
>
> **Step 2:** $P_0 = 1 - \rho = \frac{1}{3}$, $\quad P_n = (1-\rho)\rho^n = \frac{1}{3}(\frac{2}{3})^n$
>
> **Step 3:**
>
> | Metric | Formula | Value |
> |--------|---------|-------|
> | $L$ | $\frac{\rho}{1-\rho}$ | $\frac{2/3}{1/3} = 2$ customers |
> | $W$ | $\frac{1}{\mu - \lambda}$ | $\frac{1}{6-4} = 0.5$ h (30 min) |
> | $L_Q$ | $\frac{\rho^2}{1-\rho}$ | $\frac{4/9}{1/3} = \frac{4}{3} \approx 1.33$ customers |
> | $W_Q$ | $\frac{\rho}{\mu - \lambda}$ | $\frac{2/3}{2} = \frac{1}{3}$ h (20 min) |
>
> **Step 4:** $L = \lambda W \implies 2 = 4 \times 0.5$ ✓, $\quad L_Q = \lambda W_Q \implies \frac{4}{3} = 4 \times \frac{1}{3}$ ✓
>
> **Step 5:** $\mathbb{E}[B] = \frac{1}{\mu - \lambda} = 0.5$ h, $\quad \mathbb{E}[I] = \frac{1}{\lambda} = 0.25$ h, $\quad \frac{\mathbb{E}[I]}{\mathbb{E}[I] + \mathbb{E}[B]} = \frac{1}{3} = P_0$ ✓
>
> The server is busy $\frac{2}{3}$ of the time and idle $\frac{1}{3}$ of the time. Average 2 customers in system, 30 min total (20 min queue, 10 min service).

## Related

- [[m-m-1-queueing-system_202605080520|M/M/1 Queueing System]]
- [[queueing-formula-l-=-λw_202605080520|Queueing Formula L = λW]]
