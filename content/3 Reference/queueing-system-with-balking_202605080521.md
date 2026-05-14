---
publish: true
aliases:
  - Queueing System with Balking
created: 2026-05-08T05:33:03.436+07:00
modified: 2026-05-08T05:33:03.437+07:00
published: 2026-05-08T05:33:03.437+07:00
cssclasses: ""
creation-time: 2026-05-08 05:21
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

A **Queueing System with Balking** is a variant of the [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 queue]] where an arriving customer who finds $n$ others already in the system will join the system with probability $\alpha_n$, and **balk** (leave without joining) with probability $1 - \alpha_n$.

This is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] with:

$$\lambda_n = \lambda \alpha_n, \quad n \geq 0$$
$$\mu_n = \mu, \quad n \geq 1$$

> [!TIP] Interpretation
> Customers are deterred by long queues — the more people already waiting, the less likely a new arrival is to join. This models realistic behavior where customers have limited patience.

## Special Case: Finite Capacity $N$

When the system has finite capacity $N$:

$$\alpha_n = \begin{cases} 1, & n < N \\ 0, & n \geq N \end{cases}$$

This is the M/M/1/$N$ queue, where customers finding $N$ in the system are **lost** (no waiting room).

## Balking vs. Reneging

- **Balking**: Customer refuses to join upon arrival (depends on queue length at arrival time)
- **Reneging**: Customer joins but leaves before being served (depends on wait time)

## Related

- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]
- [[3 Reference/birth-and-death-queueing-models_202605080521\|Birth and Death Queueing Models]]
- [[3 Reference/queueing-system_202605080520\|Queueing System]]