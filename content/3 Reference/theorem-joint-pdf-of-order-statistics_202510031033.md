---
publish: true
aliases:
  - Joint pdf of Order Statistics
created: 2026-02-22T19:24:22.814+07:00
modified: 2026-02-22T19:24:22.815+07:00
published: 2026-02-22T19:24:22.815+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-03 10:33
status: baby
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Theorem

Let
- $X_{1} ,\dots, X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]] with
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x)$
	- [[3 Reference/Def-support-of-continuous-random-variable\|Support]] $(a,b)$
- $Y_{1} < \dots <Y_{n}$ : $n$ order statistics of $X_{1} ,\dots, X_{n}$

Then the **joint pdf** of $Y_{1},\dots,Y_{n}$ is
$$
g(y_{1} ,\dots, y_{n}) = \begin{cases}
n!f(y_{1}) \dots f(y_{n}) & a < y_{1} < \dots < y_{n} < b \\
0 & \text{elsewhere}
\end{cases}
$$
