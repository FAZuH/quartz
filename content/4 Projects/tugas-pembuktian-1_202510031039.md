---
publish: true
aliases:
  - Tugas Pembuktian 1
created: 2026-02-22T19:24:23.218+07:00
modified: 2026-02-22T19:24:23.218+07:00
published: 2026-02-22T19:24:23.218+07:00
tags:
  - 
creation-time: 2025-10-03 10:39
status: archived
parent:
  - "[[statistika-matematika-2-(take-3)_202509071819]]"
---

## 1.

> Misalkan $U\_{n}$ [[Def-convergence-in-probability|kovergen dalam probabilitas]] ke konstanta $c>0$ dan misalkan $V\_{n}$ konvergen dalam probabilitas ke konstanta $d>0$.

### 1.a.

> Buktikan $U\_{n}V\_{n}$ konvergen dalam probabilitas ke $cd$

### 1.b.

> Buktikan $U\_{n}/V\_{n}$ konvergen dalam probabilitas ke $c/d$, $d\neq 0$

## 2.

> Bukitkan bahwa hasil yang diperoleh dengan memaksimumkan $L(\theta)$ sama dengan hasil yang diperoleh dengan memaksimumkan $\ln L(\theta)$

Misalkan $\hat{\theta}$ adalah nilai parameter yang memaksimumkan fungsi likelihood $L(\theta)$. Dari kalkulus, kita tahu bahwa titik maksimum dari sebuah fungsi yang dapat diturunkan terjadi ketika turunan pertamanya sama dengan nol. Jadi,
$$
\frac{d}{d\theta} L(\theta) \bigg|\_{\theta=\hat{\theta}} = 0
$$
Sekarang, mari kita pertimbangkan fungsi log-likelihood, $\ln L(\theta)$. Untuk menemukan nilai $\theta$ yang memaksimumkannya, kita juga mengambil turunan pertamanya terhadap $\theta$ dan menyamakannya dengan nol. Menggunakan aturan rantai:
$$
\frac{d}{d\theta} \ln L(\theta) = \frac{1}{L(\theta)} \cdot \frac{d}{d\theta} L(\theta)
$$
Kita atur turunan ini sama dengan nol untuk mencari titik maksimum:
$$
\frac{1}{L(\theta)} \cdot \frac{d}{d\theta} L(\theta) = 0
$$
Karena fungsi likelihood $L(\theta)$ adalah sebuah probabilitas (atau perkalian probabilitas), nilainya selalu positif ($L(\theta) > 0$). Oleh karena itu, agar persamaan di atas bernilai nol, faktor lainnya harus nol:
$$
\frac{d}{d\theta} L(\theta) = 0
$$
Ini adalah kondisi yang sama persis dengan kondisi untuk memaksimumkan $L(\theta)$.

Secara lebih intuitif, fungsi logaritma natural, $\ln(x)$, adalah fungsi yang monoton naik secara tegas. Ini berarti bahwa jika $x\_1 > x\_2$, maka $\ln(x\_1) > \ln(x\_2)$. Dengan menerapkan ini pada fungsi likelihood, jika $L(\theta\_1) > L(\theta\_2)$, maka $\ln L(\theta\_1) > \ln L(\theta\_2)$. Akibatnya, nilai $\theta$ yang memaksimalkan nilai $L(\theta)$ pasti juga akan memaksimalkan nilai $\ln L(\theta)$.

Oleh karena itu, terbukti bahwa memaksimumkan $L(\theta)$ dan $\ln L(\theta)$ akan menghasilkan nilai $\theta$ yang sama.

## 3.

> Misalkan $X\_{1},X\_{2},\dots,X\_{n}$ [[Def-random-sample|sampel acak]] dari [[Continuous Distributions#Uniform distribution|distribusi uniform]] $U(0,\theta)$. Buktikan bahwa $E\[\operatorname{max}(X\_{i})]=\frac{n\theta}{n+1}$.

Misalkan $Y\_{1},Y\_{2},\dots,Y\_{n}$ adalah [[Def-order-statistics|statistik terurut]] dari $X\_{1},X\_{2},\dots,X\_{n}$. Berarti $Y\_n=\max(X\_{i})$ untuk setiap $i$.

Diketahui $X$ memiliki [[Def-probability-density-function-(pdf)|pdf]] $\frac{1}{\theta}$, untuk $0\<x<\theta$. [[Def-cumulative-distribution-function-(cdf)|cdf]] dari $X$ adalah
$$
\begin{align}
F\_{X}(x) & = \int\_{-\infty}^x f(t); dt \\
& = \int\_{0}^x \frac{1}{\theta} dt \\
& = \frac{t}{\theta} \Big|\_{0}^x \\
& = \frac{x}{\theta}
\end{align}
$$

Berdasarkan [[theorem-cdf-of-order-statistics_202510031046|teorema cdf dari statistik terurut]], cdf dari $Y\_{n}$ adalah
$$
\begin{align}
F\_{Y\_{n}}(x) & = \[F\_{X}(x)]^n \\
& = \left\[ \frac{x}{\theta} \right]^n \\
& = \frac{x^n}{\theta^n}
\end{align}
$$

Dapat diperoleh pdf dari $Y\_{n}$, yaitu
$$
\begin{align}
f\_{Y\_{n}}(x) & = \frac{d}{dx} F\_{Y\_{n}}(x) \\
& = \frac{d}{dx} \frac{x^n}{\theta^n} \\
& = \frac{1}{\theta^n}\cdot nx^{n-1}
\end{align}
$$

Sehingga, [[Def-expectation|ekspektasi]] dari $Y\_{n}$ dapat diperoleh, yaitu
$$
\begin{align}
E\[Y\_{n}] & = \int\_{-\infty}^\infty x f\_{Y\_{n}}(x); dx \\
& = \int\_{0}^\theta x \frac{1}{\theta^n}\cdot nx^{n-1}; dx \\
& = \frac{1}{\theta^n} \int\_{0}^\infty nx^n; dx \\
& = \frac{1}{\theta^n} \left\[ \frac{n}{n+1}x^{n+1} \Big|\_{0}^\theta \right] \\
& = \frac{1}{\theta^n} \left\[ \frac{n}{n+1}\theta^{n+1} \right] \\
& = \frac{n\theta}{n+1}
\end{align}
$$

## 4.

> Misalkan $X\_{1},X\_{2},\dots,X\_{n}$ [[Def-random-sample|sampel acak]] dari [[Continuous Distributions#Uniform distribution|distribusi uniform]] $U(0,\theta)$. Buktikan $\hat{\theta}=\operatorname{max}(X\_{i})=Y\_{n}$ konvergen dalam probabilitas ke $\theta$ atau [[Def-consistent-estimator|penaksir yang konsisten]] untuk $\theta$.

Ambil sembarang $\epsilon>0$.

Ingat bahwa $X\sim U(0,\theta)$ sehingga $Y\_{n}=\max(X\_{i})\leq\theta$.

Misalkan kasus bahwa $\epsilon<\theta$ (sehingga $F\_{Y\_{n}}(\theta-\epsilon)\neq 0$). Maka,
$$
\begin{align}
P\[|Y\_{n}-\theta|\geq\epsilon] & = P(\theta-Y\_{n}\geq\epsilon) \\
& = P(Y\_{n}\leq\theta-\epsilon) \\
& = F\_{Y\_{n}}(\theta - \epsilon) \\
& = \left( \frac{\theta-\epsilon}{\theta} \right)^n \\
& = \left( 1-\frac{\epsilon}{\theta} \right)^n
\end{align}
$$

Karena $\epsilon<\theta$, maka $0<1-\frac{\epsilon}{\theta}<1$ sehingga $\lim\_{ n \to \infty }P\[|Y\_{n}-\theta|\geq\epsilon]=\lim\_{ n \to \infty }\left( 1-\frac{\epsilon}{\theta} \right)^n=0$.

Misalkan kasus bahwa $\epsilon\geq\theta$. Maka $F\_{Y\_{n}}(\theta-\epsilon)=0$, sehingga $\lim\_{ n \to \infty }P\[|Y\_{n}-\theta|\geq\epsilon]=0$

Jadi, berdasarkan definisi konvergen ke probabilitas, $Y\_{n}\xrightarrow{P}\theta$.

Akibatnya, $Y\_{n}$ adalah penaksir yang konsisten untuk $\theta$.
