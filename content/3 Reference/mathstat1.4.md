---
publish: true
aliases:
  - 1.4 Conditional Probability and Independence
created: 2026-04-09T23:07:39.462+07:00
modified: 2026-04-09T23:07:39.463+07:00
published: 2026-04-09T23:07:39.463+07:00
cssclasses: ""
creation-time: 2025-06-18 18:15
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[3 Reference/mathstat1.3\|1.3 The Probability Set Function]] | [[3 Reference/mathstat1.5\|1.5 Random Variables]] >>

## Definition 1.4.1: Conditional probability
## Definition
Let
- $B,A$ : [[3 Reference/Def-events\|Events]]
- $P(A)>0$

If $ P(B|A)=\frac{P(A\cap B)}{P(A)} $$

Then we say $P(B|A)$ is the **conditional probability** of $B$ given $A$

Moreover,
1. $P(B|A)\geq0$
2. $P(A|A)=1$
3. If $B_{1},\dots, B_{n}$ are mutually exclusive events, then
$P(\cup_{n=1}^\infty B_{n}|A)=\sum_{n=1}^\infty P(B_{n}|A)$$


## Theorem 1.4.1: Bayes theorem


## Definition

Let
- $A_{1},\dots, A_{k}$ : [[3 Reference/Def-events\|Events]]
- $P(A_{i})>0, \quad i=1,\dots, k$
- $B$ : Event

Suppose $A_{1},\dots, A_{k}$ form a partition of $\mathcal C$

Then 
$ 
\begin{align}
P(A_{j}|B) & = \frac{P(A_{j})P(B|A_{j})}{\sum_{i=1}^kP(A_{i})P(B|A_{i})}  \\ \\

P(A|B) & = \frac{P(B|A)\;P(A)}{P(B)}
\end{align}
$$


## Definition 1.4.2: Independency
## Definition
Let $A,B$ : [[3 Reference/Def-events\|Events]]

If $ P(A\cap B) = P(A)P(B) $$

Then we say that $A$ and $B$ are **independent**


## See also

- https://www.youtube.com/watch?v=XQoLVl31ZfQ
- https://www.youtube.com/watch?v=ibINrxJLvlM
- https://www.youtube.com/watch?v=OYT0AcuLXu8
