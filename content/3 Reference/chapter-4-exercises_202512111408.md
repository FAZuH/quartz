---
publish: true
aliases:
  - Chapter 4 Exercises
created: 2026-03-25T15:22:40.611+07:00
modified: 2026-03-25T15:22:40.611+07:00
published: 2026-03-25T15:22:40.611+07:00
tags:
  - 
creation-time: 2025-12-11 14:08
status: in progress
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---

## 4.59

> Let $Y\_1 < Y\_2 < Y\_3 < Y\_4 < Y\_5$ denote the [[Def-order-statistics|order statistics]] of a [[Def-random-sample|random sample]] of size 5 from a distribution having [[Def-probability-density-function-(pdf)|p.d.f.]] $f(x) = e^{-x}$, $0 < x < \infty$, zero elsewhere. Show that $Z\_1 = Y\_2$ and $Z\_2 = Y\_4 - Y\_2$ are independent.
>
> Hint: First find the joint p.d.f. of $Y\_2$ and $Y\_4$.

**Answer**

Diketahui $f(x) = e^{-x}$ untuk $x > 0$, merupakan [[Continuous Distributions#Exponential distribution|distribusi exponential]] dengan parameter $\lambda = 1$.

cdf dari distribusi eksponensial adalah: $$F(x) = 1 - e^{-x}, \quad x > 0$$

Berdasarkan teorema [[mathstat4.4#Marginal pdf of order statistics|marginal pdf of order statistics]], joint marginal pdf dari $Y\_i$ dan $Y\_j$ dengan $i < j$ adalah:
$$
g\_{i j}\left(y\_i, y\_j\right) = \begin{cases}
\frac{n!}{(i-1)!(j-i-1)!(n-j)!}\left\[F\left(y\_i\right)\right]^{i-1}\left\[F\left(y\_j\right)-F\left(y\_i\right)\right]^{j-i-1}\left\[1-F\left(y\_j\right)\right]^{n-j} f\left(y\_i\right) f\left(y\_j\right) & a\<y\_i\<y\_j\<b \\
0 & \text { elsewhere }
\end{cases}
$$

Untuk $Y\_2$ dan $Y\_4$ dengan $n = 5$, $i = 2$, $j = 4$:

$$
\begin{align}
g\_{2,4}(y\_2, y\_4) & = \frac{5!}{(2-1)!(4-2-1)!(5-4)!} \[F(y\_2)]^{2-1} \[F(y\_4)-F(y\_2)]^{4-2-1} \[1-F(y\_4)]^{5-4} f(y\_2)f(y\_4) \\
& = 120(1-e^{-u})(e^{-u}-e^{-v})(e^{-v})(e^{-u})(e^{-v}) \\
& = 120(1-e^{-u})(e^{-u}-e^{-v})e^{-u-2v}
\end{align}
$$

Misalkan $z\_1 = u$ dan $z\_2 = v - u$. Dapat diperoleh
$$
\begin{align}
g\_{2,4}(y\_2, y\_4) & = 120(1-e^{-z\_1})(e^{-z\_1}-e^{-(z\_1+z\_2)})e^{-z\_1-2(z\_1+z\_2)} \\
& = 120(1-e^{-z\_1})(e^{-z\_1}-e^{-z\_1}e^{-z\_2})e^{-3z\_1-2z\_2} \\
& = 120(1-e^{-z\_1})e^{-z\_1}(1-e^{-z\_2})e^{-3z\_1-2z\_2} \\
& = 120(1-e^{-z\_1})e^{-4z\_1}(1-e^{-z\_2})e^{-2z\_2} \\
& = \[120(1-e^{-z\_1})e^{-4z\_1}] \cdot \[(1-e^{-z\_2})e^{-2z\_2}]
\end{align}
$$

Karena joint pdf $g\_{2,4}(y\_2, y\_4)$ dapat diekspresikan sebagai $g(z\_1) \cdot h(z\_2)$, maka $Z\_1$ dan $Z\_2$ adalah independen.

$\therefore$ Terbukti bahwa $Z\_1 = Y\_2$ dan $Z\_2 = Y\_4 - Y\_2$ adalah independen.

## Chapter 5
