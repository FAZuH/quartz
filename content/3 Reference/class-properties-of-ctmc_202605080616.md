---
publish: true
aliases:
  - Class Properties of CTMC
created: 2026-05-08T06:23:06.514+07:00
modified: 2026-05-21T21:00:27.767+07:00
published: 2026-05-21T21:00:27.767+07:00
cssclasses: ""
creation-time: 2026-05-08 06:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Properties

For a CTMC $\{Y(t) : t \geq 0\}$ and its [[3 Reference/embedded-markov-chain_202605080616\|embedded Markov chain]] $\{X_n\}$, the classification of states is inherited from the embedded chain.

Let $i, j \in S$ and "$\leftrightarrow$" denote the communication property.

## Class Properties

| Property | Statement |
|----------|-----------|
| **Communication** | $i \leftrightarrow j$ in the CTMC $\iff$ $i \leftrightarrow j$ in the embedded MC |
| **State Partition** | Since communication partitions the embedded MC into classes, it also partitions the associated CTMC |
| **Irreducibility** | The CTMC is irreducible $\iff$ the embedded MC is irreducible |
| **Recurrence** | State $i$ is recurrent in the CTMC $\iff$ $i$ is recurrent in the embedded MC |
| **Transience** | State $i$ is transient in the CTMC $\iff$ $i$ is transient in the embedded MC |
| **Positive Recurrence** | State $i$ is positive recurrent in the CTMC $\iff$ $i$ is positive recurrent in the embedded MC |
| **Class Property** | Transient and recurrent are class properties of a CTMC |

> [!TIP] Interpretation
> All structural properties (communication, recurrence, transience, irreducibility) of a CTMC are determined entirely by the behavior of the embedded DTMC. This is because these properties depend only on which states are visited and with what probability — not on how long is spent in each state.

## Periodicity

Since $P_{ii} = 0$ in the embedded MC (the CTMC always changes state at jump times), **periodicity is not possible** in CTMCs. All states have period 1.

## Related

- [[3 Reference/embedded-markov-chain_202605080616\|Embedded Markov Chain]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]
- [[3 Reference/def-irreducible_202603280823\|Irreducible]]
- [[3 Reference/def-recurrent-transient_202603280824\|Recurrent vs Transient]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**Klasifikasi state dari embedded MC.** Untuk $Q = \begin{bmatrix} -2 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 2 & -2 \end{bmatrix}$, tentukan: (a) kelas komunikasi, (b) irreducible atau tidak, (c) recurrent atau transient.

> **Jawaban:** Embedded MC: $P = \begin{bmatrix} 0 & 1 & 0 \\ 1/3 & 0 & 2/3 \\ 0 & 1 & 0 \end{bmatrix}$. (a) Satu kelas: $\{0, 1, 2\}$ (semua state berkomunikasi — 0↔1, 1↔2, jadi 0↔2 via 1). (b) Irreducible. (c) Semua recurrent (state space finite + irreducible → positive recurrent). Tidak ada periodisitas di CTMC.

**Periodisitas.** Mengapa CTMC tidak memiliki periodisitas?

> **Jawaban:** Karena $P_{ii} = 0$ di embedded MC (selalu berubah state saat transisi), dan waktu holding bersifat eksponensial (kontinu). Transisi dapat terjadi kapan saja → periode selalu 1.