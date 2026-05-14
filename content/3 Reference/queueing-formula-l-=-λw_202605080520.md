---
publish: true
aliases:
  - Queueing Formula L = λW
created: 2026-05-08T05:33:03.432+07:00
modified: 2026-05-08T05:33:03.433+07:00
published: 2026-05-08T05:33:03.433+07:00
cssclasses: ""
creation-time: 2026-05-08 05:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Properties

**Little's Formula** (or **Little's Law**) is a fundamental identity for queueing systems in steady state:

$$L = \lambda W$$

where:
- $L$: average number of customers in the system
- $\lambda$: average arrival rate of entering customers
- $W$: average time a customer spends in the system

> [!TIP] Interpretation
> Consider a long time period $T$. The average number of arrivals is $\lambda T$, and the average number of departures is $\lambda(T - W)$. The remaining customers in the system: $L = \lambda T - \lambda(T - W) = \lambda W$.

## Variants

For the queue (waiting line) only:

$$L_Q = \lambda W_Q$$

For customers in service:

$$\text{avg. number in service} = \lambda \mathbb{E}[S]$$

where $\mathbb{E}[S]$ is the mean service time.

## Cost Equation Derivation

The general cost identity underlying Little's formula:

$$\text{avg. rate system earns} = \lambda \times \text{avg. amount an entering customer pays}$$

By choosing appropriate cost rules (e.g., each customer pays $1 per unit time in system/queue), the specific variants are obtained.

## Validity

Little's formula holds for almost all queueing models, regardless of:
- Arrival process
- Number of servers
- Queue discipline

It requires only that the system is in steady state.

## Related

- [[3 Reference/queueing-system_202605080520\|Queueing System]]
- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]