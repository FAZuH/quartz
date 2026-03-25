---
publish: true
aliases:
  - Joint pdf of Order Statistics
created: 2026-03-25T15:22:40.586+07:00
modified: 2026-03-25T15:22:40.586+07:00
published: 2026-03-25T15:22:40.586+07:00
tags:
  - 
creation-time: 2025-10-03 10:33
status: in progress
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X\_{1} ,\dots, X\_{n}$ : [[Def-random-sample|Random sample]] with
  - [[Def-probability-density-function-(pdf)|pdf]] $f(x)$
  - [[Def-support-of-continuous-random-variable|Support]] $(a,b)$
- $Y\_{1} < \dots \<Y\_{n}$ : $n$ order statistics of $X\_{1} ,\dots, X\_{n}$

Then the **joint pdf** of $Y\_{1},\dots,Y\_{n}$ is
$$
g(y\_{1} ,\dots, y\_{n}) = \begin{cases}
n!f(y\_{1}) \dots f(y\_{n}) & a < y\_{1} < \dots < y\_{n} < b \\
0 & \text{elsewhere}
\end{cases}
$$
