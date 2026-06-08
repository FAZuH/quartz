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
& = \exp\left[\ln \theta \cdot x + \ln\left(\frac{1}{x!}\right) - \theta\right] \\
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

Dari a, telah ditunjukkan bahwa distribusi Poisson termasuk kelas eksponensial reguler dengan $K(x) = x$. Misalkan $Y_1 = \sum_{i=1}^n K(X_i) = \sum_{i=1}^n X_i$. Berdasarkan [[mathstat7.5#Theorem 7.5.2|Teorema 7.5.2]], statistik $Y_{1}$ adalah statistik cukup dan komplit untuk $\theta$.

## 1.c

Perhatikan bahwa $E[Y_1] = E\left[\sum_{i=1}^n X_i\right] = \sum_{i=1}^n E[X_i]$. Karena $X_{i}$ berdistribusi Poisson($\theta$), maka $E[X_{i}]=\theta$. Sehingga didapati  $E[Y_{1}]= \sum_{i=1}^n \theta = n\theta$. Karena $E[Y_{1}]=n\theta\neq \theta$, maka $Y_{1}$ bukan penaksir tak bias untuk $\theta$.

## 1.d

Misalkan $\bar{X}=\frac{Y_{1}}{n}$. Perhatikan bahwa $E(\bar{X}) = E(Y_{1}/n)=n\theta/n=\theta$, sehingga $\bar{X}$ adalah penaksir tak bias untuk $\theta$.

Karena $Y_{1}$ adalah statistik cukup dan komplit untuk $\theta$, dan terdapat fungsi dari $Y_{1}$ yang merupakan penaksir tak bias untuk $\theta$, maka berdasarkan [[mathstat7.4#Definition 7.4.1 Unique unbiased minimum variance estimator (UMVUE)|Teorema 7.4.1]],  maka $\bar{X}$ adalah penaksir tak bias varians minimum unik (UUMVE) untuk $\theta$.

## 2.a

Menggunakan [[Maximum Likelihood Estimation (MLE)]]

$$
\begin{align}

L(\theta) & = \prod_{i=1}^n f(x_i; \theta)  \\
 
 & = \prod_{i=1}^n \frac{\theta^{x_i} e^{-\theta}}{x_i!} \\

 & = \frac{\theta^{\sum_{i=1}^n x_i} e^{-n\theta}}{\prod_{i=1}^n x_i!} \\

\ln L(\theta) & =  \sum_{i=1}^n x_i \ln \theta - n\theta - \sum_{i=1}^n \ln(x_i!) \\

\frac{d}{d\theta}\ln L(\theta) & = \frac{\sum_{i=1}^n x_i}{\theta} - n \\

\frac{\sum_{i=1}^n x_i}{\theta}  & = n \\

\theta & = \frac{\sum_{i=1}^n x_i}{n} = \bar{x}

\end{align}
$$

Menggunakan [[Method of Moments]]:

Diketahui mean dari distribusi Poisson($\theta$) adalah $E[X] = \theta$. Didapati momen sampel pertama $M_1 = \frac{1}{n}\sum_{i=1}^n X_i = \bar{X}$. Dengan menyamakan momen teoritis dengan momen sampel, didapati $E[X] = M_1\iff\theta = \bar{X}$. Jadi, $\hat{\theta} = \bar{X}$

Telah ditunjukkan pada nomor 1.d bahwa $E(\bar{X})$ adalah penaksir tak bias untuk $\theta$. Jadi, terbukti penaksir yang diperoleh menggunakan metode maksimum likelihood dan metode momen adalah penaksir tak bias untuk $\theta$.

## 2.b

$$
\begin{align}
f(x_1, x_2, \ldots, x_n; \theta)  & = \prod_{i=1}^n f(x_i; \theta) \\
 & = \prod_{i=1}^n \frac{\theta^{x_i} e^{-\theta}}{x_i!} \\
 & = \frac{\theta^{\sum_{i=1}^n x_i} e^{-n\theta}}{\prod_{i=1}^n x_i!} \\
 & = \theta^{\sum_{i=1}^n x_i} e^{-n\theta} \cdot \frac{1}{\prod_{i=1}^n x_i!}
\end{align}
$$

Misalkan

- $u_1(x_1, \ldots, x_n) = \sum_{i=1}^n x_i$
- $k_1[u_1(x_1, \ldots, x_n); \theta] = k_1\left(\sum_{i=1}^n x_i; \theta\right) = \theta^{\sum_{i=1}^n x_i} e^{-n\theta}$
- $k_2(x_1, \ldots, x_n) = \frac{1}{\prod_{i=1}^n x_i!}$

Perhatikan bahwa $k_1$ nonnegatif untuk $\theta > 0$, $k_2$ nonnegatif untuk semua $x_i \geq 0$, dan $k_2$ tidak bergantung pada $\theta$. Sehingga, berdasarkan [[mathstat7.2#Theorem 7.2.1 Neyman theorem|Theorem 7.2.1]],  $Y_1 = u_1(X_1, \ldots, X_n) = \sum_{i=1}^n X_i$ adalah statistik cukup untuk parameter $\theta$.

## 2.c

Karena $X_i \sim \text{Poisson}(\theta)$ dan independen, maka, $Y_1 = \sum_{i=1}^n X_i \sim \text{Poisson}(n\theta)$.  Diketahui pmf dari Poisson($n\theta$) adalah $f_{Y_1}(y_1; \theta) = \frac{(n\theta)^{y_1} e^{-n\theta}}{y_1!}, \quad y_1 = 0, 1, 2, \ldots$

Misalkan $E[u(Y_1)] = 0$ untuk semua $\theta > 0$. Maka didapati:

$$
\begin{align}
\sum_{y_1=0}^{\infty} u(y_1) \frac{(n\theta)^{y_1} e^{-n\theta}}{y_1!}  & = 0 \\

e^{-n\theta} \sum_{y_1=0}^{\infty} u(y_1) \frac{(n\theta)^{y_1}}{y_1!}  & = 0
\end{align}
$$

Karena $e^{-n\theta} > 0$ untuk semua $\theta > 0$, maka: $\sum_{y_1=0}^{\infty} u(y_1) \frac{(n\theta)^{y_1}}{y_1!} = 0 \quad \text{untuk semua } \theta > 0$

Misalkan $g(\theta) = \sum_{y_1=0}^{\infty} u(y_1) \frac{(n\theta)^{y_1}}{y_1!}$. $g(\theta)$ adalah [power series](https://en.wikipedia.org/wiki/Power_series) dalam $\theta$.

Karena $g(\theta) = 0$ untuk semua $\theta > 0$, dan power series yang bernilai nol pada interval terbuka harus memiliki semua koefisien sama dengan nol, maka: $u(y_1) = 0, y_1 = 0, 1, 2, \ldots$. Sehingga berdasarkan [[mathstat7.4#Definition 7.4.1 Complete family of pdf/pmf|Definisi 7.4.1]], keluarga $f_{Y_1}(y_1; \theta)$ adalah komplit. Terbukti bahwa $Y_{1}$ adalah statistik cukup yang komplit untuk $\theta$

## 2.d

Telah ditunjukkan pada [[#1.d]] bahwa $\bar{X}$ adalah penaksir tak bias varians minimum unik (UUMVE) untuk $\theta$.
