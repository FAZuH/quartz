---
publish: true
aliases:
  - Marginal pdf of Order Statistics
created: 2026-02-22T19:24:22.821+07:00
modified: 2026-02-22T19:24:22.821+07:00
published: 2026-02-22T19:24:22.821+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-03 10:45
status: baby
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Theorem

Let 
- $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]] with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x), a<x<b$
- $Y_{1},\dots,Y_{n}$ : [[3 Reference/Def-order-statistics\|Order statistics]] of $X_{1},\dots,X_{n}$

Then marginal pdf of $Y_{1},\dots, Y_{n}$ is given by:
- **$Y_{1}$**
$$
g_1\left(y_1\right)= \begin{cases}
    n\left[1-F\left(y_1\right)\right]^{n-1} f\left(y_1\right), & a<y_1<b \\
    0, & \text {elsewhere}
\end{cases}
$$

- **$Y_{k}$**
$$
g_k\left(y_k\right)= 
\begin{cases}
	\frac{n!}{(n-k)!(k-1)!}\left[1-F\left(y_k\right)\right]^{n-k}\left[F\left(y_k\right)\right]^{k-1} f\left(y_k\right) & a<y_k<b \\
	0 & \text {elsewhere}
\end{cases}
$$

- **$Y_{n}$**
$$
g_n\left(y_n\right)= \begin{cases}
	n\left[F\left(y_n\right)\right]^{n-1} f\left(y_n\right), & a<y_n<b \\
	0, & \text{elsewhere}\end
{cases}
$$

The joint marginal pdf of $Y_{i}$ and $Y_{j}$ is given by:
$$
g_{i j}\left(y_i, y_j\right) = \begin{cases}
    \frac{n!}{(i-1)!(j-i-1)!(n-j)!}\left[F\left(y_i\right)\right]^{i-1}\left[F\left(y_j\right)-F\left(y_i\right)\right]^{j-i-1}\left[1-F\left(y_j\right)\right]^{n-j} f\left(y_i\right) f\left(y_j\right) & a<y_i<y_j<b \\ 
    0 & \text { elsewhere }
\end{cases}
$$