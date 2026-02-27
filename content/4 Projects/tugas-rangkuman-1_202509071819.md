---
publish: true
aliases:
  - Tugas Rangkuman 1
created: 2026-02-22T19:24:23.221+07:00
modified: 2026-02-22T19:24:23.222+07:00
published: 2026-02-22T19:24:23.222+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-07 18:19
status: archived
parent:
  - "[[statistika-matematika-2-(take-3)_202509071819]]"
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


## Theorem

Let:
- $X$ [[3 Reference/Def-random-variable\|Random Variable]]
- $\sigma^2\in \mathbb{R}$ [[3 Reference/Def-variance\|Variance]] of $X$
- $\mu=E(X)$ (by [[3 Reference/theorem-existence-of-lower-order-moments_202509071843\|Existence of Lower Order Moments]], $\sigma^2\in \mathbb{R}$ implies that $E(X)$ exists)

Then, for every $k > 0$
$$
P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}
$$

Or equivalently,
$$
P(|X - \mu| < k\sigma) \geq 1 - \frac{1}{k^2}
$$

## Example

> If $X$ is a [[3 Reference/Def-random-variable\|random variable]] such that $E(X)=3$ and $E(X^{2})=13$, use Chebyshev's inequality to determine a lower bound for the probability $P(-2<X<8)$

We have,
- $\mu=E(X)=3$
- $\sigma^{2}=E(X^{2})-[E(X)]^{2}=13-3^{2}=4$
- $\sigma=\sqrt{ \sigma^{2} }=\sqrt{ 4 }=2$

Then
$$
\begin{align}
P(-2<X<8) & = P(-2-3<X-3<8-3) \\
 & = P(-5<X-3<5) \\
 & = P(|X-3|<5)
\end{align}
$$

By Chebyshev's inequality, the form $P(|X-3|<5)$ has to satisfy $P(|X-\mu|<k\sigma)$. Thus
$$
\begin{align}
k\sigma & = 5 \\
k\cdot2 & = 5 \\
k & = \frac{5}{2}
\end{align}
$$

As a result, the lower bound for $P(-2<X<8)$ is:
$$
\begin{align}
P(-2<X<8) & = P(|X-3|<5) \\
 & = 1 - \frac{1}{k^{2}}  \\
 & = 1 - \frac{1}{\left( \frac{5}{2} \right)^{2}} \\
 & = 1 - \frac{4}{25} \\
 & = \boxed{0.84}
\end{align}
$$

**Example 1**
### Hogg & Craig 5th ed. 5.7.

Let
- $Y_{n}$ : Sequence of [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|random variable]], with
	- $Y_{n}\sim b(n,p)$ ([[3 Reference/Discrete Distributions#Discrete distribution cheatsheet\|check here]])

Prove that $1-Y_{n}/n$ [[3 Reference/mathstat5.1#Definition 5.1.1 Convergence in probability\|converges in probability]] to $1-p$

**Answer**

Karena $Y_{n}\sim b(n,p)$, berarti $E[Y_{n}]=np$ dan $\operatorname{Var}(Y_{n})=np(1-p)$. Misalkan $\bar{Y}_{n}=\frac{Y_{n}}{n}$. Maka,

- $E[\bar{Y_n}] = \frac{E[Y_n]}{n} = \frac{np}{n} = p$
- $\text{Var}(\bar{Y_n}) = \frac{\text{Var}(Y_n)}{n^2} = \frac{np(1-p)}{n^2} = \frac{p(1-p)}{n}$

Misalkan $k=\frac{\epsilon}{\sigma}$. Berdasarkan [[3 Reference/mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality\|teorema Chebyshev]], 
$$
\begin{align}
P\left(\left|\bar{Y}_{n}-E[X]\right| > k\sigma \right) & \leq \frac{1}{k^2} \\

P\left(\left| \frac{Y_{n}}{n} - p \right| > \epsilon \right) & \leq \frac{\sigma^2}{\epsilon^2}  \\
 
 & \leq \frac{\operatorname{Var}(\bar{Y}_{n})}{\epsilon^2} = \frac{p(1-p)}{n\epsilon^2} \\

\lim_{n \to \infty} P\left(\left|\frac{Y_n}{n} - p\right| > \epsilon\right)  & \leq \lim_{n \to \infty} \frac{p(1-p)}{n\epsilon^2} = 0
\end{align}
$$

Sehingga diperoleh
$$
\lim_{n \to \infty} P\left(\left|1 - \frac{Y_n}{n} - (1-p)\right| > \epsilon\right) = 0
$$

Berdasarkan [[3 Reference/mathstat5.1#Definition 5.1.1 Convergence in probability\|definisi konvergen dalam probabilitas]], terbukti bahwa $1-\frac{Y_{n}}{n}\xrightarrow P 1-p$


**Example 2**
Use proving [[3 Reference/mathstat5.1#Theorem 5.1.1 Weak law of large numbers\|Theorem 5.1.1 Weak law of large numbers]]