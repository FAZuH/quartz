---
publish: true
aliases:
  - cdf of Order Statistics
created: 2026-03-25T15:22:40.641+07:00
modified: 2026-03-25T15:22:40.641+07:00
published: 2026-03-25T15:22:40.641+07:00
tags:
  - 
creation-time: 2025-10-03 10:46
status: complete
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X\_{1},\dots,X\_{n}$ : [[Def-random-sample|Random sample]] with [[Def-probability-density-function-(pdf)|pdf]] $f(x)$
- $Y\_{1},\dots,Y\_{n}$ : [[Def-order-statistics|Order statistics]] of $X\_{1},\dots,X\_{n}$

Then [[Def-cumulative-distribution-function-(cdf)|cdf]] of $Y\_{1},\dots, Y\_{n}$ is given by

- $Y\_{1}$[^2]
  $$
  F\_{Y\_{1}}(x) = 1-\[1-F\_{X}(x)]^n
  $$

- $Y\_{k}$[^1]
  $$
  F\_{Y\_{k}}(x) = \sum\_{j=k}^n \binom n j \[F\_{X}(x)]^j\[1-F\_{X}(x)]^{n-j}
  $$

- $Y\_{n}$[^2]
  $$
  F\_{Y\_{n}}(x) = \[F\_{X}(x)]^n
  $$

## Example

> Let $Y\_{1}\<Y\_{2}\<Y\_{3}\<Y\_{4}$ be the [[Def-order-statistics|order statistics]] of a [[Def-random-sample|random sample]] of size $4$ from the distribution having [[Def-probability-density-function-(pdf)|pdf]] $f(x)=e^{-x},0\<x<\infty$, zero elsewhere.
>
> Find $P(3\leq Y\_{4})$.

$$
\begin{align}
P(3\leq Y\_{4}) & = 1 - P(Y\_{4}\leq3) \\
& = 1 - F\_{Y\_{4}}(3) \\
& = 1 - \[F\_{X}(3)]^{4} \\
& = 1 - \left\[ \int\_{0}^3 e^{-x}; dx \right]^4 \\
& = \boxed{0.1847}
\end{align}
$$

[^1]: https://en.wikipedia.org/wiki/Order_statistic#Cumulative_distribution_function_of_order_statistics "Taken in 2025-06-24"

[^2]: https://www.colorado.edu/amath/sites/default/files/attached-files/order_stats.pdf
