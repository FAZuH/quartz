---
publish: true
aliases:
  - Marginal pdf of Order Statistics
created: 2026-03-25T15:22:40.623+07:00
modified: 2026-03-25T15:22:40.623+07:00
published: 2026-03-25T15:22:40.623+07:00
tags:
  - 
creation-time: 2025-10-03 10:45
status: in progress
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X\_{1},\dots,X\_{n}$ : [[Def-random-sample|Random sample]] with [[Def-probability-density-function-(pdf)|pdf]] $f(x), a\<x\<b$
- $Y\_{1},\dots,Y\_{n}$ : [[Def-order-statistics|Order statistics]] of $X\_{1},\dots,X\_{n}$

Then marginal pdf of $Y\_{1},\dots, Y\_{n}$ is given by:

- **$Y\_{1}$**
  $$
  g\_1\left(y\_1\right)= \begin{cases}
  n\left\[1-F\left(y\_1\right)\right]^{n-1} f\left(y\_1\right), & a\<y\_1\<b \\
  0, & \text {elsewhere}
  \end{cases}
  $$

- **$Y\_{k}$**
  $$
  g\_k\left(y\_k\right)=
  \begin{cases}
  \frac{n!}{(n-k)!(k-1)!}\left\[1-F\left(y\_k\right)\right]^{n-k}\left\[F\left(y\_k\right)\right]^{k-1} f\left(y\_k\right) & a\<y\_k\<b \\
  0 & \text {elsewhere}
  \end{cases}
  $$

- **$Y\_{n}$**
  $$
  g\_n\left(y\_n\right)= \begin{cases}
  n\left\[F\left(y\_n\right)\right]^{n-1} f\left(y\_n\right), & a\<y\_n\<b \\
  0, & \text{elsewhere}\end
  {cases}
  $$

The joint marginal pdf of $Y\_{i}$ and $Y\_{j}$ is given by:
$$
g\_{i j}\left(y\_i, y\_j\right) = \begin{cases}
\frac{n!}{(i-1)!(j-i-1)!(n-j)!}\left\[F\left(y\_i\right)\right]^{i-1}\left\[F\left(y\_j\right)-F\left(y\_i\right)\right]^{j-i-1}\left\[1-F\left(y\_j\right)\right]^{n-j} f\left(y\_i\right) f\left(y\_j\right) & a\<y\_i\<y\_j\<b \\
0 & \text { elsewhere }
\end{cases}
$$
