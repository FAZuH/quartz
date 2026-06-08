---
publish: true
aliases:
  - Joint pdf of Order Statistics
created: 2026-04-09T23:07:39.677+07:00
modified: 2026-04-09T23:07:39.678+07:00
published: 2026-04-09T23:07:39.678+07:00
tags:
  - 
creation-time: 2025-10-03 10:33
status: in progress
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X_{1} ,\dots, X_{n}$ : [[Def-random-sample|Random sample]] with
  - [[Def-probability-density-function-(pdf)|pdf]] $f(x)$
  - [[Def-support-of-continuous-random-variable|Support]] $(a,b)$
- $Y_{1} < \dots <Y_{n}$ : $n$ order statistics of $X_{1} ,\dots, X_{n}$

Then the **joint pdf** of $Y_{1},\dots,Y_{n}$ is

$$
g(y_{1} ,\dots, y_{n}) = \begin{cases}
n!f(y_{1}) \dots f(y_{n}) & a < y_{1} < \dots < y_{n} < b \\
0 & \text{elsewhere}
\end{cases}
$$
