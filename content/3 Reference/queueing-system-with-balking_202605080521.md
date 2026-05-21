---
publish: true
aliases:
  - Queueing System with Balking
created: 2026-05-08T05:33:03.436+07:00
modified: 2026-05-21T21:04:32.891+07:00
published: 2026-05-21T21:04:32.891+07:00
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

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Kuis 2 2025 No. 10.** Loket tiket: 1 petugas, kapasitas 2 (1 dilayani + 1 menunggu). $\lambda = 2$/menit, $\mu = 3$/menit. Pelanggan datang saat penuh → pergi (balking). Tentukan $\pi_0, \pi_1, \pi_2$.

> **Jawaban:** $\lambda_0 = \lambda_1 = 2$, $\lambda_2 = 0$ (balking). $\mu_1 = \mu_2 = 3$. $\pi_1 = \frac{2}{3}\pi_0$, $\pi_2 = \frac{2}{3}\pi_1 = \frac{4}{9}\pi_0$. $\pi_0(1 + \frac{2}{3} + \frac{4}{9}) = 1 \Rightarrow \pi_0 = \frac{9}{19}$, $\pi_1 = \frac{6}{19}$, $\pi_2 = \frac{4}{19}$.

**Kuis 2 2024 No. 3.** Taksi (rate 1/menit) dan pelanggan (rate 2/menit) di stasiun. Taksi selalu menunggu, pelanggan pergi (balking) jika tidak ada taksi. Tentukan rata-rata jumlah taksi menunggu.

> **Jawaban:** State $n$ = jumlah taksi. $\lambda_n = 1$ (taksi tiba), $\mu_n = 2$ untuk $n \geq 1$ (pelanggan ambil taksi). $\pi_n = (\frac{1}{2})^n \pi_0$, $\pi_0 = 1/2$. $L = \sum n \pi_n = \sum n (\frac{1}{2})^{n+1} = \frac{1/2}{(1-1/2)^2} \cdot \frac{1}{2} = 1$ taksi rata-rata.