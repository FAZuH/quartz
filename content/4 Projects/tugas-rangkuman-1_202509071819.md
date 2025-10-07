---
{"publish":true,"aliases":["Tugas Rangkuman 1"],"created":"2025-09-13T18:58:06.126+07:00","modified":"2025-10-05T19:35:35.622+07:00","published":"2025-10-05T19:35:35.622+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-07 18:19","status":"archived","parent":["[[statistika-matematika-2-(take-3)_202509071819]]"]}
---

## Soal
### Soal no 1

Misalkan $X_{1},X_{2},X_{3}$ menyatakan [[3 Reference/Def-random-sample\|sampel random]] berukuran 3 dari suatu distribusi bertipe kontinu dengan [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x)$ yang positif pada $a<x<b$ dan sama dengan nol untuk yang lain, maka [[3 Reference/def-random-vector_202507171028#Joint probability density function (pdf)\|p.d.f. bersama]] dari $X_{1},X_{2},X_{3}$ adalah
$$
f(x_{1},x_{2},x_{3}) = \begin{cases}
f(x_{1})f(x_{2})f(x_{3}), & a<x_{i}<b,i=1,2,3 \\
0, & (x_{1},x_{2},x_{3}) \text{ yang lain}
\end{cases}
$$

Misalkan
$$
\begin{align}
Y_{1}&=\min(X_{1},X_{2},X_{3}),\\
Y_{2}&=\operatorname{mid}(X_{1},X_{2},X_{3}),\\
Y_{3}&=\max(X_{1},X_{2},X_{3}),
\end{align}
$$

Tentukan dicari p.d.f. bersama dari $Y_{1},Y_{2},Y_{3}$

### Soal no 2

Misalkan $X_{1},X_{2},\dots,X_{n}$ menyatakan [[3 Reference/Def-random-sample\|sampel random]] berukuran $n$ dari suatu distribusi bertipe kontinu dengan [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x)$ yang positif pada $a<x<b$ dan sama dengan nol untuk $x$ yang lain.

Misalkan $Y_{1}=\min(X_{1},X_{2},\dots,X_{n}),Y_{2}=X_{i}$ berikutnya sesuai dengan urutan besarnya, $\dots$, dan $Y_{n}=\max(X_{1},X_{2},\dots,X_{n})$, maka $Y_{i}=i=1,2,\dots,n$ disebut [[3 Reference/Def-order-statistics\|statistik terurut]] ke-$i$ dari sampel random $X_{1},X_{2},\dots,X_{n}$ dan [[3 Reference/mathstat4.4#Theorem 4.4.1 Joint pdf of order statistics\|p.d.f. bersama]] dari $Y_{1},Y_2,\dots,Y_{n}$ adalah 
$$
g(y_{1},y_{2},\dots,y_{n}) = \begin{cases}
(n!)f(y_{1})f(y_{2})\dots f(y_{n}), & a<y_{1}<y_{2}<\dots<y_{n}<b \\
0, & (y_{1},y_{2},\dots,y_{n}) \text{ yang lain}
\end{cases}
$$

- a. Tentukan pdf dari $Y_{1}$ dan $Y_{n}$
- b. Tentukan pdf bersama dari $Y_{2}$ dan $Y_{4}$

### Soal no 3

Jelaskan secara lengkap mengenai [[3 Reference/mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality\|pertidaksamaan Chebyshev]] dan berikan 2 contoh.

## Jawab

### Jawab no 1

Use [[3 Reference/mathstat4.4#Theorem 4.4.1 Joint pdf of order statistics\|Theorem 4.4.1 Joint pdf of order statistics]]
$$
g(y_{1} ,\dots, y_{n}) = \begin{cases}
n!f(y_{1}) \dots f(y_{n}) & a < y_{1} < \dots < y_{n} < b \\
0 & \text{elsewhere}
\end{cases}
$$

### Jawab no 2

**a. Use [[3 Reference/mathstat4.4#Marginal pdf of order statistics\|Marginal pdf and of order statistics]]**
$$
\begin{align}
g_1\left(y_1\right) & = \begin{cases}
    n\left[1-F\left(y_1\right)\right]^{n-1} f\left(y_1\right), & a<y_1<b \\
    0, & \text {elsewhere}
\end{cases} \\

g_n\left(y_n\right) & = \begin{cases}
	n\left[F\left(y_n\right)\right]^{n-1} f\left(y_n\right), & a<y_n<b \\
	0, & \text{elsewhere}\end
{cases}
\end{align}
$$

**b. Use [[3 Reference/mathstat4.4#Marginal pdf of order statistics\|Marginal pdf and of order statistics]]**
$$
g_{i j}\left(y_i, y_j\right) = \begin{cases}
    \frac{n!}{(i-1)!(j-i-1)!(n-j)!}\left[F\left(y_i\right)\right]^{i-1}\left[F\left(y_j\right)-F\left(y_i\right)\right]^{j-i-1}\left[1-F\left(y_j\right)\right]^{n-j} f\left(y_i\right) f\left(y_j\right) & a<y_i<y_j<b \\ 
    0 & \text { elsewhere }
\end{cases}
$$

### Jawab no 3


Explain using:
![[3 Reference/theorem-chebyshev's-inequality_202509071843\|Chebyshev's Inequality]]

**Example 1**
![[3 Reference/mathstat5.2#Hogg & Craig 5th ed. 5.7.\|Hogg & Craig 5th ed. 5.7.]]

**Example 2**
Use proving [[3 Reference/mathstat5.1#Theorem 5.1.1 Weak law of large numbers\|Theorem 5.1.1 Weak law of large numbers]]