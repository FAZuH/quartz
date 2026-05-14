---
publish: true
aliases:
  - M/M/s Queue Example
created: 2026-05-08T05:33:03.426+07:00
modified: 2026-05-08T05:33:03.427+07:00
published: 2026-05-08T05:33:03.427+07:00
cssclasses: ""
creation-time: 2026-05-08 05:22
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Example

Consider an [[3 Reference/m-m-s-queueing-system_202605080521\|M/M/s queue]] with $s = 2$ servers, arrival rate $\lambda = 3$ customers per hour, and service rate $\mu = 2$ customers per hour per server.

## Step 1: Check Steady-State Condition

Traffic intensity per server: $\rho = \frac{\lambda}{s\mu} = \frac{3}{2 \times 2} = \frac{3}{4} < 1$ ✓

## Step 2: Auxiliary Quantities

$$\theta_0 = 1$$
$$\theta_1 = \frac{\lambda}{\mu} = \frac{3}{2}$$
$$\theta_2 = \frac{(\lambda/\mu)^2}{2!} = \frac{(3/2)^2}{2} = \frac{9/4}{2} = \frac{9}{8}$$
$$\theta_j = \frac{(\lambda/\mu)^s}{s!}\left(\frac{\lambda}{s\mu}\right)^{j-s} = \frac{9}{8}\left(\frac{3}{4}\right)^{j-2}, \quad j \geq 2$$

Sum of $\theta_j$:

$$\sum_{j=0}^{\infty} \theta_j = 1 + \frac{3}{2} + \frac{9}{8} \sum_{j=2}^{\infty} \left(\frac{3}{4}\right)^{j-2} = 1 + \frac{3}{2} + \frac{9}{8} \cdot \frac{1}{1 - 3/4} = 1 + \frac{3}{2} + \frac{9}{8} \cdot 4 = 1 + \frac{3}{2} + \frac{9}{2} = 7$$

## Step 3: Steady-State Probabilities

$$\pi_0 = \frac{1}{7}, \quad \pi_1 = \frac{3/2}{7} = \frac{3}{14}, \quad \pi_2 = \frac{9/8}{7} = \frac{9}{56}$$

## Step 4: Performance Metrics

**Average queue length $L_Q$:**

$$L_Q = \sum_{j=s+1}^{\infty} (j-s)\pi_j = \sum_{j=3}^{\infty} (j-2) \frac{9}{56}\left(\frac{3}{4}\right)^{j-2}$$

Let $k = j-2$, then:

$$L_Q = \frac{9}{56} \sum_{k=1}^{\infty} k\left(\frac{3}{4}\right)^k = \frac{9}{56} \cdot \frac{3/4}{(1-3/4)^2} = \frac{9}{56} \cdot \frac{3/4}{1/16} = \frac{9}{56} \cdot 12 = \frac{27}{14} \approx 1.93$$

**Wait in queue:** $W_Q = L_Q / \lambda = \frac{27/14}{3} = \frac{9}{14} \approx 0.643$ hours

**Time in system:** $W = W_Q + \frac{1}{\mu} = \frac{9}{14} + \frac{1}{2} = \frac{9}{14} + \frac{7}{14} = \frac{16}{14} = \frac{8}{7} \approx 1.14$ hours

**Customers in system:** $L = \lambda W = 3 \times \frac{8}{7} = \frac{24}{7} \approx 3.43$

Verify: $L = L_Q + \lambda/\mu = \frac{27}{14} + \frac{3}{2} = \frac{27}{14} + \frac{21}{14} = \frac{48}{14} = \frac{24}{7}$ ✓

> [!NOTE]
> With 2 servers, the average queue length is about 1.93 customers, and customers wait about 39 minutes in queue before starting service. Compare this to an M/M/1 with the same total service capacity: if $\mu = 4$ with 1 server, $\rho = 3/4$ and $L = 3$ customers. The multi-server system has slightly higher $L$ but distributes the load.

## Related

- [[3 Reference/m-m-s-queueing-system_202605080521\|M/M/s Queueing System]]
- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]
- [[3 Reference/queueing-formula-l-=-λw_202605080520\|Queueing Formula L = λW]]