---
publish: true
aliases:
  - 4.4 Order Statistics
created: 2026-04-09T23:07:39.469+07:00
modified: 2026-04-09T23:07:39.470+07:00
published: 2026-04-09T23:07:39.470+07:00
cssclasses: ""
creation-time: 2025-06-24 01:07
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[3 Reference/4.2.2-confidence-interval-for-difference-in-proportion_202507220849\|4.2.2 Confidence Interval for Difference in Proportion]] | [[3 Reference/4.5-introduction-to-hypothesis-testing_202507291322\|4.5 Introduction to Hypothesis Testing]] >>

## Definition: Order statistics
## Definition

Let $X_{1} ,\dots, X_{n}$ : [[3 Reference/Def-random-sample\|Random Sample]] with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x)$ and [[3 Reference/Def-support-of-continuous-random-variable\|support]] $(a,b)$

If
- $Y_{1} = \min\{X_1, \dots, X_n\}$
- $Y_{k}$ : $k$-th smallest value of $X_{1},\dots, X_{n}$
- $Y_{n} = \max\{X_1,\dots, X_n\}$ 

Then we say $Y_{1}, \dots ,Y_{n}$ is **order statistic** of $X_{1},\dots, X_{n}$


## Theorem 4.4.1: Joint pdf of order statistics
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


## Marginal pdf of order statistics
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

## CDF of order statistics
## Theorem

Let 
- $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]] with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x)$
- $Y_{1},\dots,Y_{n}$ : [[3 Reference/Def-order-statistics\|Order statistics]] of $X_{1},\dots,X_{n}$

Then [[3 Reference/Def-cumulative-distribution-function-(cdf)\|cdf]] of $Y_{1},\dots, Y_{n}$ is given by

- $Y_{1}$[^2]
$$
F_{Y_{1}}(x) = 1-[1-F_{X}(x)]$$

- $Y_{k}$[^1]
$$
F_{Y_{k}}(x) = \sum_{j=k}^n \binom n j [F_{X}(x)]^j[1-F_{X}(x)]^{n-j}
$$

- $Y_{n}$[^2]
$$
F_{Y_{n}}(x) = [F_{X}(x)]$$


## Exercise

### Example 1

Misal $Y_{1},Y_{2},Y_{3}$ statistik terurut dengan $n=3$.

Menggunakan [Marginal pdf and of order statistics](#Marginal%20pdf%20of%20order%20statistics), dapat diperoleh pdf marginal sebagai berikut:

1. **pdf marginal untuk $Y_1$** :
$$
    g_1(y_1) = \begin{cases}
    3[1-F(y_1)]^{2} f(y_1), & a < y_1 < b \\
    0, & \text{lainnya} \end{cases}
$$

2. **pdf marginal untuk $Y_2$** :

Untuk $a < y_2 < b$:
$$
\begin{align*}
    g_2(y_2) &= \frac{3!}{(2-1)!(3-2)!}[F(y_2)]^{2-1}[1-F(y_2)]^{3-2} f(y_2) \\
    &= \frac{6}{1! \cdot 1!}F(y_2)[1-F(y_2)] f(y_2) \\
    &= 6F(y_2)[1-F(y_2)] f(y_2) \\
\end{align*}
$$

dan $g_2(y_2) = 0$ untuk lainnya.

3. **pdf marginal untuk $Y_3$** :

$$
g_3(y_3) = \begin{cases}
    3[F(y_3)]^{2} f(y_3), & a < y_3 < b \\
    0, & \text{lainnya}
\end{cases}
$$


### Exercise 4.56 of Hogg & Craig 5th ed.

Let $Y_{1} < Y_{2} < Y_{3} < Y_{4}$ be the order statistics of a random sample of size 4 from the distribution having p.d.f. $f(x)=e^{-x}$, zero elsewhere. Find $Pr(3\leq Y_{4})$.

We will use [CDF of order statistics](#CDF%20of%20order%20statistics) to solve this problem.

![[assets/Pasted image 20250624044727.png]]

