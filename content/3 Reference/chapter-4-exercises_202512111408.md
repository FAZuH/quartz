---
publish: true
aliases:
  - Chapter 4 Exercises
created: 2026-03-25T15:22:40.611+07:00
modified: 2026-03-25T15:22:40.611+07:00
published: 2026-03-25T15:22:40.611+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-11 14:08
status: in progress
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---


## 4.59


> Let $Y_1 < Y_2 < Y_3 < Y_4 < Y_5$ denote the [[3 Reference/Def-order-statistics\|order statistics]] of a [[3 Reference/Def-random-sample\|random sample]] of size 5 from a distribution having [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x) = e^{-x}$, $0 < x < \infty$, zero elsewhere. Show that $Z_1 = Y_2$ and $Z_2 = Y_4 - Y_2$ are independent.
> 
> Hint: First find the joint p.d.f. of $Y_2$ and $Y_4$.

**Answer**

Diketahui $f(x) = e^{-x}$ untuk $x > 0$, merupakan [[3 Reference/Continuous Distributions#Exponential distribution\|distribusi exponential]] dengan parameter $\lambda = 1$.

cdf dari distribusi eksponensial adalah: $$F(x) = 1 - e^{-x}, \quad x > 0$$

Berdasarkan teorema [[3 Reference/mathstat4.4#Marginal pdf of order statistics\|marginal pdf of order statistics]], joint marginal pdf dari $Y_i$ dan $Y_j$ dengan $i < j$ adalah:
$$
g_{i j}\left(y_i, y_j\right) = \begin{cases}
    \frac{n!}{(i-1)!(j-i-1)!(n-j)!}\left[F\left(y_i\right)\right]^{i-1}\left[F\left(y_j\right)-F\left(y_i\right)\right]^{j-i-1}\left[1-F\left(y_j\right)\right]^{n-j} f\left(y_i\right) f\left(y_j\right) & a<y_i<y_j<b \\ 
    0 & \text { elsewhere }
\end{cases}
$$

Untuk $Y_2$ dan $Y_4$ dengan $n = 5$, $i = 2$, $j = 4$:

$$
\begin{align}
g_{2,4}(y_2, y_4) & = \frac{5!}{(2-1)!(4-2-1)!(5-4)!} [F(y_2)]^{2-1} [F(y_4)-F(y_2)]^{4-2-1} [1-F(y_4)]^{5-4} f(y_2)f(y_4) \\
& = 120(1-e^{-u})(e^{-u}-e^{-v})(e^{-v})(e^{-u})(e^{-v}) \\
& = 120(1-e^{-u})(e^{-u}-e^{-v})e^{-u-2v}
\end{align}
$$

Misalkan $z_1 = u$ dan $z_2 = v - u$. Dapat diperoleh
$$
\begin{align}
g_{2,4}(y_2, y_4) & = 120(1-e^{-z_1})(e^{-z_1}-e^{-(z_1+z_2)})e^{-z_1-2(z_1+z_2)} \\
& = 120(1-e^{-z_1})(e^{-z_1}-e^{-z_1}e^{-z_2})e^{-3z_1-2z_2} \\
& = 120(1-e^{-z_1})e^{-z_1}(1-e^{-z_2})e^{-3z_1-2z_2} \\
& = 120(1-e^{-z_1})e^{-4z_1}(1-e^{-z_2})e^{-2z_2} \\
& = [120(1-e^{-z_1})e^{-4z_1}] \cdot [(1-e^{-z_2})e^{-2z_2}]
\end{align}
$$ 

Karena joint pdf $g_{2,4}(y_2, y_4)$ dapat diekspresikan sebagai $g(z_1) \cdot h(z_2)$, maka $Z_1$ dan $Z_2$ adalah independen.

$\therefore$ Terbukti bahwa $Z_1 = Y_2$ dan $Z_2 = Y_4 - Y_2$ adalah independen.

## Chapter 5
