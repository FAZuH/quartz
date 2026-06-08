---
publish: true
aliases:
  - cdf of Order Statistics
created: 2026-04-09T23:07:39.642+07:00
modified: 2026-04-09T23:07:39.644+07:00
published: 2026-04-09T23:07:39.644+07:00
tags:
  - 
creation-time: 2025-10-03 10:46
status: complete
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X_{1},\dots,X_{n}$ : [[Def-random-sample|Random sample]] with [[Def-probability-density-function-(pdf)|pdf]] $f(x)$
- $Y_{1},\dots,Y_{n}$ : [[Def-order-statistics|Order statistics]] of $X_{1},\dots,X_{n}$

Then [[Def-cumulative-distribution-function-(cdf)|cdf]] of $Y_{1},\dots, Y_{n}$ is given by

- $Y_{1}$[^2]

$$
F_{Y_{1}}(x) = 1-[1-F_{X}(x)]^n
$$

- $Y_{k}$[^1]

$$
F_{Y_{k}}(x) = \sum_{j=k}^n \binom n j [F_{X}(x)]^j[1-F_{X}(x)]^{n-j}
$$

- $Y_{n}$[^2]

$$
F_{Y_{n}}(x) = [F_{X}(x)]^n
$$

## Example

> Let $Y_{1}<Y_{2}<Y_{3}<Y_{4}$ be the [[Def-order-statistics|order statistics]] of a [[Def-random-sample|random sample]] of size $4$ from the distribution having [[Def-probability-density-function-(pdf)|pdf]] $f(x)=e^{-x},0<x<\infty$, zero elsewhere.
>
> Find $P(3\leq Y_{4})$.

$$
\begin{align}
P(3\leq Y_{4}) & = 1 - P(Y_{4}\leq3) \\
 & = 1 - F_{Y_{4}}(3) \\
 & = 1 - [F_{X}(3)]^{4} \\
 & = 1 - \left[ \int_{0}^3 e^{-x}\; dx \right]^4 \\
 & = \boxed{0.1847}
\end{align}
$$

[^1]: https://en.wikipedia.org/wiki/Order_statistic#Cumulative_distribution_function_of_order_statistics "Taken in 2025-06-24"

[^2]: https://www.colorado.edu/amath/sites/default/files/attached-files/order_stats.pdf
