---
publish: true
aliases:
  - Tugas Rangkuman 1
created: 2026-02-22T19:24:23.221+07:00
modified: 2026-02-22T19:24:23.222+07:00
published: 2026-02-22T19:24:23.222+07:00
tags:
  - 
creation-time: 2025-09-07 18:19
status: archived
parent:
  - "[[statistika-matematika-2-(take-3)_202509071819]]"
---

## Soal

### Soal no 1

Misalkan $X\_{1},X\_{2},X\_{3}$ menyatakan [[Def-random-sample|sampel random]] berukuran 3 dari suatu distribusi bertipe kontinu dengan [[Def-probability-density-function-(pdf)|p.d.f.]] $f(x)$ yang positif pada $a\<x\<b$ dan sama dengan nol untuk yang lain, maka [[def-random-vector_202507171028#Joint probability density function (pdf)|p.d.f. bersama]] dari $X\_{1},X\_{2},X\_{3}$ adalah
$$
f(x\_{1},x\_{2},x\_{3}) = \begin{cases}
f(x\_{1})f(x\_{2})f(x\_{3}), & a\<x\_{i}\<b,i=1,2,3 \\
0, & (x\_{1},x\_{2},x\_{3}) \text{ yang lain}
\end{cases}
$$

Misalkan
$$
\begin{align}
Y\_{1}&=\min(X\_{1},X\_{2},X\_{3}),\\
Y\_{2}&=\operatorname{mid}(X\_{1},X\_{2},X\_{3}),\\
Y\_{3}&=\max(X\_{1},X\_{2},X\_{3}),
\end{align}
$$

Tentukan dicari p.d.f. bersama dari $Y\_{1},Y\_{2},Y\_{3}$

### Soal no 2

Misalkan $X\_{1},X\_{2},\dots,X\_{n}$ menyatakan [[Def-random-sample|sampel random]] berukuran $n$ dari suatu distribusi bertipe kontinu dengan [[Def-probability-density-function-(pdf)|p.d.f.]] $f(x)$ yang positif pada $a\<x\<b$ dan sama dengan nol untuk $x$ yang lain.

Misalkan $Y\_{1}=\min(X\_{1},X\_{2},\dots,X\_{n}),Y\_{2}=X\_{i}$ berikutnya sesuai dengan urutan besarnya, $\dots$, dan $Y\_{n}=\max(X\_{1},X\_{2},\dots,X\_{n})$, maka $Y\_{i}=i=1,2,\dots,n$ disebut [[Def-order-statistics|statistik terurut]] ke-$i$ dari sampel random $X\_{1},X\_{2},\dots,X\_{n}$ dan [[mathstat4.4#Theorem 4.4.1 Joint pdf of order statistics|p.d.f. bersama]] dari $Y\_{1},Y\_2,\dots,Y\_{n}$ adalah
$$
g(y\_{1},y\_{2},\dots,y\_{n}) = \begin{cases}
(n!)f(y\_{1})f(y\_{2})\dots f(y\_{n}), & a\<y\_{1}\<y\_{2}<\dots\<y\_{n}\<b \\
0, & (y\_{1},y\_{2},\dots,y\_{n}) \text{ yang lain}
\end{cases}
$$

- a. Tentukan pdf dari $Y\_{1}$ dan $Y\_{n}$
- b. Tentukan pdf bersama dari $Y\_{2}$ dan $Y\_{4}$

### Soal no 3

Jelaskan secara lengkap mengenai [[mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality|pertidaksamaan Chebyshev]] dan berikan 2 contoh.

## Jawab

### Jawab no 1

Use [[mathstat4.4#Theorem 4.4.1 Joint pdf of order statistics|Theorem 4.4.1 Joint pdf of order statistics]]
$$
g(y\_{1} ,\dots, y\_{n}) = \begin{cases}
n!f(y\_{1}) \dots f(y\_{n}) & a < y\_{1} < \dots < y\_{n} < b \\
0 & \text{elsewhere}
\end{cases}
$$

### Jawab no 2

**a. Use [[mathstat4.4#Marginal pdf of order statistics|Marginal pdf and of order statistics]]**
$$
\begin{align}
g\_1\left(y\_1\right) & = \begin{cases}
n\left\[1-F\left(y\_1\right)\right]^{n-1} f\left(y\_1\right), & a\<y\_1\<b \\
0, & \text {elsewhere}
\end{cases} \\

g\_n\left(y\_n\right) & = \begin{cases}
n\left\[F\left(y\_n\right)\right]^{n-1} f\left(y\_n\right), & a\<y\_n\<b \\
0, & \text{elsewhere}\end
{cases}
\end{align}
$$

**b. Use [[mathstat4.4#Marginal pdf of order statistics|Marginal pdf and of order statistics]]**
$$
g\_{i j}\left(y\_i, y\_j\right) = \begin{cases}
\frac{n!}{(i-1)!(j-i-1)!(n-j)!}\left\[F\left(y\_i\right)\right]^{i-1}\left\[F\left(y\_j\right)-F\left(y\_i\right)\right]^{j-i-1}\left\[1-F\left(y\_j\right)\right]^{n-j} f\left(y\_i\right) f\left(y\_j\right) & a\<y\_i\<y\_j\<b \\
0 & \text { elsewhere }
\end{cases}
$$

### Jawab no 3

Explain using:
![[theorem-chebyshev's-inequality_202509071843|Chebyshev's Inequality]]

**Example 1**
![[mathstat5.2#Hogg & Craig 5th ed. 5.7.|Hogg & Craig 5th ed. 5.7.]]

**Example 2**
Use proving [[mathstat5.1#Theorem 5.1.1 Weak law of large numbers|Theorem 5.1.1 Weak law of large numbers]]
