---
publish: true
aliases:
  - M/M/s Queue Example
created: 2026-05-08T05:33:03.426+07:00
modified: 2026-06-05T03:03:05.592+07:00
published: 2026-06-05T03:03:05.592+07:00
creation-time: 2026-05-08 05:22
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Example

Consider an [[m-m-s-queueing-system_202605080521|M/M/s queue]] with $s = 2$ servers, arrival rate $\lambda = 3$ customers per hour, and service rate $\mu = 2$ customers per hour per server.

> [!NOTE]- Solution
> **Step 1:** $\rho = \frac{\lambda}{s\mu} = \frac{3}{2 \times 2} = \frac{3}{4} < 1$ ✓
>
> **Step 2:**
>
> $\theta_0 = 1,\quad \theta_1 = \frac{3}{2},\quad \theta_2 = \frac{(3/2)^2}{2!} = \frac{9}{8},\quad \theta_j = \frac{9}{8}\left(\frac{3}{4}\right)^{j-2} \;(j \geq 2)$
>
> $\sum_{j=0}^{\infty} \theta_j = 1 + \frac{3}{2} + \frac{9}{8} \cdot \frac{1}{1 - 3/4} = 1 + \frac{3}{2} + \frac{9}{2} = 7$
>
> **Step 3:** $\pi_0 = \frac{1}{7}$, $\pi_1 = \frac{3}{14}$, $\pi_2 = \frac{9}{56}$
>
> **Step 4:**
>
> $L_Q = \frac{9}{56} \sum_{k=1}^{\infty} k\left(\frac{3}{4}\right)^k = \frac{9}{56} \cdot \frac{3/4}{(1-3/4)^2} = \frac{27}{14} \approx 1.93$
>
> $W_Q = \frac{L_Q}{\lambda} = \frac{9}{14} \approx 0.643 \text{ h},\quad W = W_Q + \frac{1}{\mu} = \frac{8}{7} \approx 1.14 \text{ h},\quad L = \lambda W = \frac{24}{7} \approx 3.43$
>
> Verify: $L = L_Q + \lambda/\mu = \frac{27}{14} + \frac{3}{2} = \frac{24}{7}$ ✓
>
> With 2 servers, average queue length ~1.93, wait time ~39 min in queue. M/M/1 with same capacity ($\mu=4$, 1 server): $\rho=3/4$, $L=3$. Multi-server distributes the load.

## Related

- [[m-m-s-queueing-system_202605080521|M/M/s Queueing System]]
- [[m-m-1-queueing-system_202605080520|M/M/1 Queueing System]]
- [[queueing-formula-l-=-λw_202605080520|Queueing Formula L = λW]]
