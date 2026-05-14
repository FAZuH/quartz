---
publish: true
aliases:
  - Queueing System
created: 2026-05-08T05:33:03.434+07:00
modified: 2026-05-08T05:33:03.435+07:00
published: 2026-05-08T05:33:03.435+07:00
cssclasses: ""
creation-time: 2026-05-08 05:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## About

A **Queueing System** is a system where customers arrive at random times to a service facility, wait in queue if necessary, receive service, and then leave.

## Key Components

1. **Input Process / Arrival Process**: Probability distribution governing the pattern of customer arrivals (e.g., Poisson process, general distribution)
2. **Service Distribution**: Probability distribution of service times (e.g., exponential, deterministic)
3. **Queue Discipline**: Number of servers, order of service (FIFO, LIFO, priority), system capacity, population size

## Notation (Kendall's Notation)

Queueing models are described using the notation:

$$A/S/r/K/N$$

where:
- $A$: arrival process distribution
- $S$: service time distribution
- $r$: number of servers
- $K$: system capacity (optional, default $\infty$)
- $N$: population size (optional, default $\infty$)

| Symbol | Meaning |
|--------|---------|
| $M$ | Markovian / Memoryless (Poisson arrivals, exponential service) |
| $G$ | General distribution |
| $D$ | Deterministic |
| $E_k$ | Erlang-$k$ distribution |
| $H$ | Hyperexponential distribution |
| $PH$ | Phase-type distribution |

Commonly abbreviated as $A/S/r$ when capacity and population are infinite (FIFO discipline implied).

## Performance Metrics

- $L$: average number of customers in the system
- $L_Q$: average number of customers waiting in queue
- $W$: average time a customer spends in the system
- $W_Q$: average time a customer spends waiting in queue
- $\rho$: traffic intensity (server utilization)

## Common Assumptions
- Customer arrivals are random
- Service times are i.i.d. and independent of arrivals
- FIFO (first-in first-out) queue discipline
- System has reached steady-state equilibrium

## Related

- [[3 Reference/queueing-formula-l-=-λw_202605080520\|Queueing Formula L = λW]]
- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]
- [[3 Reference/m-m-s-queueing-system_202605080521\|M/M/s Queueing System]]
- [[3 Reference/birth-and-death-queueing-models_202605080521\|Birth and Death Queueing Models]]