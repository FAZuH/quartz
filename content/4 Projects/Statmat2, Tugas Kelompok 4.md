---
publish: true
created: 2026-02-22T19:24:23.010+07:00
modified: 2026-02-22T19:24:23.010+07:00
published: 2026-02-22T19:24:23.010+07:00
creation-time: 2025-07-10 10:43
status: archived
tags:
parent:
  - "[[Statistika Matematika 2]]"
---

![[assets/Pasted image 20250710090305.png]]
![[assets/Pasted image 20250710090314.png]]

## 1.a

$$
\begin{align}
f(x;\theta) & = \frac{1}{x!} \cdot e^{x \ln \theta} \cdot e^{-\theta} \\
& = \frac{1}{x!} \cdot e^{x \ln \theta - \theta} \\
& = \exp\left\[\ln \theta \cdot x + \ln\left(\frac{1}{x!}\right) - \theta\right] \\
\end{align}
$$

Misalkan

- $p(\theta) = \ln \theta$
- $K(x) = x$
- $H(x) = -\ln(x!)$
- $q(\theta) = -\theta$

Perhatikan bahwa

1. $\mathcal{S}$ tidak bergantung pada $\theta$
2. $p(\theta) = \ln \theta$ adalah fungsi kontinu, nontrivial untuk $\theta\in \Omega$
3. $K(x)=x$ fungsi nontrivial untuk $x\in \mathcal{S}$

Maka berdasarkan [[mathstat7.5#Definition 7.5.1 Regular exponential class|Definisi 7.5.1]], [[Discrete Distributions#Poisson distribution|distribusi Poisson]] merupakan kasus reguler dari kelas eksponensial yang bertipe diskrit.

## 1.b

Dari a, telah ditunjukkan bahwa distribusi Poisson termasuk kelas eksponensial reguler dengan $K(x) = x$. Misalkan $Y\_1 = \sum\_{i=1}^n K(X\_i) = \sum\_{i=1}^n X\_i$. Berdasarkan [[mathstat7.5#Theorem 7.5.2|Teorema 7.5.2]], statistik $Y\_{1}$ adalah statistik cukup dan komplit untuk $\theta$.

## 1.c

Perhatikan bahwa $E\[Y\_1] = E\left\[\sum\_{i=1}^n X\_i\right] = \sum\_{i=1}^n E\[X\_i]$. Karena $X\_{i}$ berdistribusi Poisson($\theta$), maka $E\[X\_{i}]=\theta$. Sehingga didapati  $E\[Y\_{1}]= \sum\_{i=1}^n \theta = n\theta$. Karena $E\[Y\_{1}]=n\theta\neq \theta$, maka $Y\_{1}$ bukan penaksir tak bias untuk $\theta$.

## 1.d

Misalkan $\bar{X}=\frac{Y\_{1}}{n}$. Perhatikan bahwa $E(\bar{X}) = E(Y\_{1}/n)=n\theta/n=\theta$, sehingga $\bar{X}$ adalah penaksir tak bias untuk $\theta$.

Karena $Y\_{1}$ adalah statistik cukup dan komplit untuk $\theta$, dan terdapat fungsi dari $Y\_{1}$ yang merupakan penaksir tak bias untuk $\theta$, maka berdasarkan [[mathstat7.4#Definition 7.4.1 Unique unbiased minimum variance estimator (UMVUE)|Teorema 7.4.1]],  maka $\bar{X}$ adalah penaksir tak bias varians minimum unik (UUMVE) untuk $\theta$.

## 2.a

Menggunakan [[Maximum Likelihood Estimation (MLE)]]
$$
\begin{align}

L(\theta) & = \prod\_{i=1}^n f(x\_i; \theta)  \\

& = \prod\_{i=1}^n \frac{\theta^{x\_i} e^{-\theta}}{x\_i!} \\

& = \frac{\theta^{\sum\_{i=1}^n x\_i} e^{-n\theta}}{\prod\_{i=1}^n x\_i!} \\

\ln L(\theta) & =  \sum\_{i=1}^n x\_i \ln \theta - n\theta - \sum\_{i=1}^n \ln(x\_i!) \\

\frac{d}{d\theta}\ln L(\theta) & = \frac{\sum\_{i=1}^n x\_i}{\theta} - n \\

\frac{\sum\_{i=1}^n x\_i}{\theta}  & = n \\

\theta & = \frac{\sum\_{i=1}^n x\_i}{n} = \bar{x}

\end{align}
$$

Menggunakan [[Method of Moments]]:

Diketahui mean dari distribusi Poisson($\theta$) adalah $E\[X] = \theta$. Didapati momen sampel pertama $M\_1 = \frac{1}{n}\sum\_{i=1}^n X\_i = \bar{X}$. Dengan menyamakan momen teoritis dengan momen sampel, didapati $E\[X] = M\_1\iff\theta = \bar{X}$. Jadi, $\hat{\theta} = \bar{X}$

Telah ditunjukkan pada nomor 1.d bahwa $E(\bar{X})$ adalah penaksir tak bias untuk $\theta$. Jadi, terbukti penaksir yang diperoleh menggunakan metode maksimum likelihood dan metode momen adalah penaksir tak bias untuk $\theta$.

## 2.b

$$
\begin{align}
f(x\_1, x\_2, \ldots, x\_n; \theta)  & = \prod\_{i=1}^n f(x\_i; \theta) \\
& = \prod\_{i=1}^n \frac{\theta^{x\_i} e^{-\theta}}{x\_i!} \\
& = \frac{\theta^{\sum\_{i=1}^n x\_i} e^{-n\theta}}{\prod\_{i=1}^n x\_i!} \\
& = \theta^{\sum\_{i=1}^n x\_i} e^{-n\theta} \cdot \frac{1}{\prod\_{i=1}^n x\_i!}
\end{align}
$$

Misalkan

- $u\_1(x\_1, \ldots, x\_n) = \sum\_{i=1}^n x\_i$
- $k\_1\[u\_1(x\_1, \ldots, x\_n); \theta] = k\_1\left(\sum\_{i=1}^n x\_i; \theta\right) = \theta^{\sum\_{i=1}^n x\_i} e^{-n\theta}$
- $k\_2(x\_1, \ldots, x\_n) = \frac{1}{\prod\_{i=1}^n x\_i!}$

Perhatikan bahwa $k\_1$ nonnegatif untuk $\theta > 0$, $k\_2$ nonnegatif untuk semua $x\_i \geq 0$, dan $k\_2$ tidak bergantung pada $\theta$. Sehingga, berdasarkan [[mathstat7.2#Theorem 7.2.1 Neyman theorem|Theorem 7.2.1]],  $Y\_1 = u\_1(X\_1, \ldots, X\_n) = \sum\_{i=1}^n X\_i$ adalah statistik cukup untuk parameter $\theta$.

## 2.c

Karena $X\_i \sim \text{Poisson}(\theta)$ dan independen, maka, $Y\_1 = \sum\_{i=1}^n X\_i \sim \text{Poisson}(n\theta)$.  Diketahui pmf dari Poisson($n\theta$) adalah $$f\_{Y\_1}(y\_1; \theta) = \frac{(n\theta)^{y\_1} e^{-n\theta}}{y\_1!}, \quad y\_1 = 0, 1, 2, \ldots$$

Misalkan $E\[u(Y\_1)] = 0$ untuk semua $\theta > 0$. Maka didapati:

$$
\begin{align}
\sum\_{y\_1=0}^{\infty} u(y\_1) \frac{(n\theta)^{y\_1} e^{-n\theta}}{y\_1!}  & = 0 \\

e^{-n\theta} \sum\_{y\_1=0}^{\infty} u(y\_1) \frac{(n\theta)^{y\_1}}{y\_1!}  & = 0
\end{align}
$$

Karena $e^{-n\theta} > 0$ untuk semua $\theta > 0$, maka: $$\sum\_{y\_1=0}^{\infty} u(y\_1) \frac{(n\theta)^{y\_1}}{y\_1!} = 0 \quad \text{untuk semua } \theta > 0$$

Misalkan $g(\theta) = \sum\_{y\_1=0}^{\infty} u(y\_1) \frac{(n\theta)^{y\_1}}{y\_1!}$. $g(\theta)$ adalah [power series](https://en.wikipedia.org/wiki/Power_series) dalam $\theta$.

Karena $g(\theta) = 0$ untuk semua $\theta > 0$, dan power series yang bernilai nol pada interval terbuka harus memiliki semua koefisien sama dengan nol, maka: $u(y\_1) = 0, y\_1 = 0, 1, 2, \ldots$. Sehingga berdasarkan [[mathstat7.4#Definition 7.4.1 Complete family of pdf/pmf|Definisi 7.4.1]], keluarga $f\_{Y\_1}(y\_1; \theta)$ adalah komplit. Terbukti bahwa $Y\_{1}$ adalah statistik cukup yang komplit untuk $\theta$

## 2.d

Telah ditunjukkan pada [[#1.d]] bahwa $\bar{X}$ adalah penaksir tak bias varians minimum unik (UUMVE) untuk $\theta$.
