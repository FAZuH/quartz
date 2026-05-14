---
publish: true
aliases:
  - M/M/1 Queue Example
created: 2026-05-08T05:33:03.421+07:00
modified: 2026-05-08T05:33:03.422+07:00
published: 2026-05-08T05:33:03.422+07:00
cssclasses: ""
creation-time: 2026-05-08 05:22
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Example

Consider an [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 queue]] with arrival rate $\lambda = 4$ customers per hour and service rate $\mu = 6$ customers per hour.

## Step 1: Check Steady-State Condition

Traffic intensity: $\rho = \frac{\lambda}{\mu} = \frac{4}{6} = \frac{2}{3} < 1$ ✓

## Step 2: Steady-State Probabilities

$$P_0 = 1 - \rho = 1 - \frac{2}{3} = \frac{1}{3}$$

$$P_n = (1-\rho)\rho^n = \frac{1}{3}\left(\frac{2}{3}\right)^n, \quad n \geq 1$$

## Step 3: Performance Metrics

| Metric | Formula | Value |
|--------|---------|-------|
| $L$ (avg. # in system) | $\frac{\rho}{1-\rho}$ | $\frac{2/3}{1/3} = 2$ customers |
| $W$ (avg. time in system) | $\frac{1}{\mu - \lambda}$ | $\frac{1}{6-4} = 0.5$ hours (30 min) |
| $L_Q$ (avg. # in queue) | $\frac{\rho^2}{1-\rho}$ | $\frac{4/9}{1/3} = \frac{4}{3} \approx 1.33$ customers |
| $W_Q$ (avg. wait in queue) | $\frac{\rho}{\mu - \lambda}$ | $\frac{2/3}{2} = \frac{1}{3}$ hour (20 min) |

## Step 4: Verify Little's Formula

$$L = \lambda W \implies 2 = 4 \times 0.5$$ ✓
$$L_Q = \lambda W_Q \implies \frac{4}{3} = 4 \times \frac{1}{3}$$ ✓

## Step 5: Busy Period

Mean busy period: $\mathbb{E}[B] = \frac{1}{\mu - \lambda} = \frac{1}{2} = 0.5$ hours

Mean idle period: $\mathbb{E}[I] = \frac{1}{\lambda} = \frac{1}{4} = 0.25$ hours

Proportion of empty time: $\frac{\mathbb{E}[I]}{\mathbb{E}[I] + \mathbb{E}[B]} = \frac{0.25}{0.75} = \frac{1}{3} = P_0$ ✓

> [!NOTE]
> The server is busy $\frac{2}{3}$ of the time and idle $\frac{1}{3}$ of the time. On average, there are 2 customers in the system, with typical waiting time of 30 minutes total (20 minutes in queue, 10 minutes in service).

## Related

- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]
- [[3 Reference/queueing-formula-l-=-λw_202605080520\|Queueing Formula L = λW]]