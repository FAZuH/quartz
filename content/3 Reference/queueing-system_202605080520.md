---
publish: true
aliases:
  - Queueing System
created: 2026-05-08T05:33:03.434+07:00
modified: 2026-05-21T21:03:36.242+07:00
published: 2026-05-21T21:03:36.242+07:00
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

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Klasifikasi sistem antrian.** Sebuah loket tiket memiliki 1 petugas, melayani maksimal 2 pelanggan sekaligus (1 dilayani + 1 menunggu). Pelanggan datang Poisson($\lambda = 2$/menit), waktu layanan $\text{Exp}(\mu = 3$/menit). Pelanggan yang datang saat penuh pergi. Tuliskan sistem ini dalam Kendall notation.

> **Jawaban:** M/M/1/2. M = Poisson arrivals, M = exponential service, 1 = satu server, 2 = kapasitas sistem (termasuk yang dilayani).

**Metrik dasar.** Jika $L = 30/49$ dan $\lambda_{\text{eff}} = 2 \cdot (1 - \pi_2) = 2 \cdot \frac{45}{49}$, hitung $W$ menggunakan Little's Law.

> **Jawaban:** $\lambda_{\text{eff}} = \lambda(1 - \pi_2) = 2(1 - \frac{4}{19}) = \frac{30}{19}$ (pakai hasil 2025 Q10). $W = L / \lambda_{\text{eff}} = \frac{30/49}{30/19} = \frac{19}{49}$ menit.