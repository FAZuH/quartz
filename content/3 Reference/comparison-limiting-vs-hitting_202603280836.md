---
publish: true
aliases:
  - Limiting vs Hitting Probability
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
creation-time: 2026-03-28 08:36
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Comparison: Limiting vs Hitting Probability

Both often use the notation $\pi$, but represent fundamentally different concepts:

| Feature | [[def-limiting-probability_202603280831\|Limiting Probability]] $\pi\_j$ | Hitting Probability $\pi\_i(j)$ |
| :--- | :--- | :--- |
| **Question** | "In the long run, what % of time is spent in state $j$?" | "Starting at state $i$, what is the chance I **ever** reach state $j$?" |
| **System State** | Describes **steady state** (long-run) | Describes the **fate** of a single path |
| **Dependence** | **Independent** of starting state | **Heavily depends** on starting state $i$ |
| **Matrix Math** | Left-multiplication: $\pi = \pi \mathbf{P}$ | Right-multiplication: $u = \mathbf{P}u$ |
| **Indices** | Summing over columns: $\pi\_j = \sum\_k \pi\_k P\_{kj}$ | Summing over rows: $\pi\_i = \sum\_k P\_{ik} \pi\_k$ |
| **Boundaries** | No boundaries; requires $\sum \pi\_j = 1$ | **Requires boundaries** (Target=1, Other Absorbing=0) |

> [!TIP]
>
> - Use **Limiting Probability** when asked for "Long-run proportion" or "Steady state"
> - Use **Hitting Probability** (via **First Step Analysis**) when asked for "Probability of reaching/absorption" or "Chance of winning"

## Related

- [[def-limiting-probability_202603280831|Limiting Probability]]
- [[def-hitting-probability-transient_202603280841|Hitting Probability (Transient)]]
- [[procedure-first-step-analysis_202603280842|First Step Analysis]]
