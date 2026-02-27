---
publish: true
aliases:
  - Definition of Conditional Probability
  - Conditional Probability
created: 2026-02-22T19:23:58.382+07:00
modified: 2026-02-22T19:23:58.382+07:00
published: 2026-02-22T19:23:58.382+07:00
cssclasses: ""
creation-time: 2025-07-15 01:25
status: baby
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition
Let
- $B,A$ : [[3 Reference/Def-events\|Events]]
- $P(A)>0$

If $$ P(B|A)=\frac{P(A\cap B)}{P(A)} $$

Then we say $P(B|A)$ is the **conditional probability** of $B$ given $A$

Moreover,
1. $P(B|A)\geq0$
2. $P(A|A)=1$
3. If $B_{1},\dots, B_{n}$ are mutually exclusive events, then
$$P(\cup_{n=1}^\infty B_{n}|A)=\sum_{n=1}^\infty P(B_{n}|A)$$
