---
publish: true
aliases:
  - Bayes Theorem
created: 2026-04-09T23:07:39.094+07:00
modified: 2026-04-09T23:07:39.095+07:00
published: 2026-04-09T23:07:39.095+07:00
creation-time: 2025-07-24 07:35
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $A_{1},\dots, A_{k}$ : [[Def-events|Events]]
- $P(A_{i})>0, \quad i=1,\dots, k$
- $B$ : Event

Suppose $A_{1},\dots, A_{k}$ form a partition of $\mathcal C$

Then

$$
\begin{align}
P(A_{j}|B) & = \frac{P(A_{j})P(B|A_{j})}{\sum_{i=1}^kP(A_{i})P(B|A_{i})}  \\ \\

P(A|B) & = \frac{P(B|A)\;P(A)}{P(B)}
\end{align}
$$
