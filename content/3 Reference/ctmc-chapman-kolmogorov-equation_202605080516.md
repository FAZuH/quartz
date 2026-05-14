---
publish: true
aliases:
  - CTMC Chapman-Kolmogorov Equation
created: 2026-05-08T05:33:03.406+07:00
modified: 2026-05-08T05:33:03.406+07:00
published: 2026-05-08T05:33:03.406+07:00
cssclasses: ""
creation-time: 2026-05-08 05:16
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Theorem

For all $s, t \geq 0$ and all states $i, j$:

$$P_{ij}(t+s) = \sum_{k=0}^{\infty} P_{ik}(t) P_{kj}(s)$$

> [!TIP] Interpretation
> To go from state $i$ to state $j$ in time $t+s$, the process first goes from $i$ to some intermediate state $k$ in time $t$ (with probability $P_{ik}(t)$), and then from $k$ to $j$ in the remaining time $s$ (with probability $P_{kj}(s)$). We sum over all possible intermediate states $k$.

This is the continuous-time analog of the [[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov Equation]] for discrete-time Markov chains.

## Matrix Form

In matrix notation, with $P(t) = (P_{ij}(t))$:

$$P(t+s) = P(t) P(s)$$

## Key Role

The Chapman-Kolmogorov equation is essential for deriving the [[3 Reference/kolmogorov-differential-equations_202605080518\|Kolmogorov Differential Equations]] (both forward and backward), which govern the evolution of the TPF.

## Related

- [[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov Equation]]
- [[3 Reference/ctmc-transition-probability-function_202605080516\|CTMC Transition Probability Function]]
- [[3 Reference/kolmogorov-differential-equations_202605080518\|Kolmogorov Differential Equations]]