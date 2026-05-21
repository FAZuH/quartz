---
publish: true
aliases:
  - Birth and Death Queueing Models
created: 2026-05-08T05:33:03.400+07:00
modified: 2026-05-21T21:04:14.472+07:00
published: 2026-05-21T21:04:14.472+07:00
cssclasses: ""
creation-time: 2026-05-08 05:21
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

A **Birth and Death Queueing Model** is a queueing system where the number of customers $X(t)$ follows a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]].

The model is characterized by:
- Arrival (birth) rates: $\lambda_n$, $n \geq 0$
- Departure (death) rates: $\mu_n$, $n \geq 1$

## Balance Equations

In steady state, the rate at which the process leaves a state equals the rate at which it enters:

$$\lambda_0 P_0 = \mu_1 P_1$$
$$(\lambda_n + \mu_n)P_n = \lambda_{n-1} P_{n-1} + \mu_{n+1} P_{n+1}, \quad n \geq 1$$

This yields the recurrence:

$$P_{n+1} = \frac{\lambda_n}{\mu_{n+1}} P_n$$

## General Solution

Define auxiliary quantities:

$$\theta_0 = 1, \quad \theta_j = \frac{\lambda_0 \lambda_1 \cdots \lambda_{j-1}}{\mu_1 \mu_2 \cdots \mu_j}, \quad j \geq 1$$

The steady-state probabilities are:

$$\pi_0 = \frac{1}{\sum_{j=0}^{\infty} \theta_j}$$
$$\pi_k = \theta_k \pi_0 = \frac{\theta_k}{\sum_{j=0}^{\infty} \theta_j}, \quad k \geq 1$$

Steady state exists when $\sum_{j=0}^{\infty} \theta_j < \infty$.

## Common Birth-Death Queueing Models

| Model | $\lambda_n$ | $\mu_n$ |
|-------|------------|---------|
| [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1]] | $\lambda$ | $\mu$ |
| [[3 Reference/m-m-s-queueing-system_202605080521\|M/M/s]] | $\lambda$ | $\min(n, s)\mu$ |
| [[3 Reference/m-m-∞-queueing-system_202605080521\|M/M/∞]] | $\lambda$ | $n\mu$ |
| M/M/1 with [[3 Reference/queueing-system-with-balking_202605080521\|Balking]] | $\lambda \alpha_n$ | $\mu$ |

## Related

- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/queueing-system_202605080520\|Queueing System]]
- [[3 Reference/m-m-1-queueing-system_202605080520\|M/M/1 Queueing System]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 6.** Server menangani maks 2 tugas sekaligus (1 dilayani + 1 menunggu). Tugas datang Poisson($\lambda = 3$/jam), layanan $\text{Exp}(\mu = 4$/jam). Tugas yang datang saat penuh tetap menunggu (tidak ada balking). Berapa rata-rata jumlah tugas dalam sistem?

> **Jawaban:** State $\{0, 1, 2\}$. $\lambda_0 = \lambda_1 = 3$, $\lambda_2 = 0$ (penuh tapi soal mengatakan tetap diterima dan menunggu — sebenarnya kapasitas tak terbatas? Tidak: "menangani paling banyak dua tugas". Jadi $\lambda_2 = 0$). $\mu_1 = 4$, $\mu_2 = 4$.
> $\theta_1 = 3/4$, $\theta_2 = 9/16$. $\pi_0 = \frac{1}{1 + 3/4 + 9/16} = \frac{16}{49}$, $\pi_1 = \frac{12}{49}$, $\pi_2 = \frac{9}{49}$. $L = 0 \cdot \frac{16}{49} + 1 \cdot \frac{12}{49} + 2 \cdot \frac{9}{49} = \frac{30}{49}$.

**Kuis 2 2025 No. 7.** Untuk sistem yang sama, berapa probabilitas sistem sedang melayani tepat satu tugas?

> **Jawaban:** $P(\text{tepat satu}) = \pi_1 = \frac{12}{49}$.