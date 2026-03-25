---
publish: true
aliases:
  - Bayes Theorem
created: 2026-03-25T15:22:40.618+07:00
modified: 2026-03-25T15:22:40.618+07:00
published: 2026-03-25T15:22:40.618+07:00
creation-time: 2025-07-24 07:35
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $A\_{1},\dots, A\_{k}$ : [[Def-events|Events]]
- $P(A\_{i})>0, \quad i=1,\dots, k$
- $B$ : Event

Suppose $A\_{1},\dots, A\_{k}$ form a partition of $\mathcal C$

Then
$$
\begin{align}
P(A\_{j}|B) & = \frac{P(A\_{j})P(B|A\_{j})}{\sum\_{i=1}^kP(A\_{i})P(B|A\_{i})}  \ \\

P(A|B) & = \frac{P(B|A);P(A)}{P(B)}
\end{align}
$$
