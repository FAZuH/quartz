---
publish: true
aliases:
  - Chapter 7 Exercises
created: 2026-02-22T19:23:58.376+07:00
modified: 2026-02-22T19:23:58.376+07:00
published: 2026-02-22T19:23:58.376+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-11 14:08
status: baby
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---


## 7.27

> Show that the first [[3 Reference/Def-order-statistics\|order statistic]] $Y_{1}$ of a [[3 Reference/Def-random-sample\|random sample]] of size $n$ from the distribution having [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x;\theta)=e^{-(x-\theta)},\theta<x<\infty, -\infty<\theta<\infty$, zero elsewhere, is a [[3 Reference/def-complete-sufficient-statistic_202507170931\|complete sufficient statistic]] for $\theta$. Fin the unique function of this [[3 Reference/Def-statistic\|statistic]] which is the unbiased [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|unbiased minimum variance estimator]] of $\theta$.

**Jawab**

Misalkan $X$ sampel acak dengan pdf $f(x;\theta)=e^{-(x-\theta)}$, $\theta<x<\infty$, $-\infty<\theta<\infty$. cdf dari $X$ adalah
$$ F(x;\theta) = \int_\theta^x e^{-(t-\theta)} dt = \left[ -e^{-(t-\theta)} \right]_\theta^x = 1 - e^{-(x-\theta)} $$

Berdasarkan [[3 Reference/theorem-marginal-pdf-of-order-statistics_202510031045\|teorema PDF marginal dari statistik terurut]], pdf dari $Y_1$ dapat diperoleh dengan
$$ 
\begin{align}
g_1(y_1; \theta) & = n\left[1-F\left(y_1\right)\right]^{n-1} f\left(y_1\right) \\
&= n\left[1 - (1 - e^{-(y_1-\theta)})\right]^{n-1} e^{-(y_1-\theta)} \\
&= n\left[e^{-(y_1-\theta)}\right]^{n-1} e^{-(y_1-\theta)} \\
&= n e^{-n(y_1-\theta)}, \quad \theta <y_{1}<\infty
\end{align}
$$ 
Perhatikan bahwa [[3 Reference/Def-likelihood-function\|fungsi likelihood]] dari sampel $\mathbf{X}=(X_1, \dots, X_n)$ adalah
$$ 
\begin{align}
L(\theta; \mathbf{x}) & = \prod_{i=1}^n f(x_i; \theta) \\
 & = \prod_{i=1}^n e^{-(x_i-\theta)} \\
 & = e^{-\sum x_i + n\theta} \\
 & = e^{n\theta}e^{-\sum x_{i}} \\
 & = \left( \frac{g_1(y_1; \theta)}{n e^{-ny_1}} \right)\cdot e^{-\sum x_i}
\end{align}
$$

Berdasarkan [[3 Reference/theorem-neyman-theorem_202508052229\|teorema faktorisasi Neyman]], karena $L(\theta; \mathbf{x})$ dapat difaktorkan menjadi perkalian oleh suatu fungsi dari $Y_{1}$ yang bergantung dengan $\theta$, dengan suatu fungsi yang tidak bergantung dengan $\theta$, maka $Y_{1}$ adalah **[[3 Reference/def-sufficient-statistic_202507170925\|statistik cukup]]** untuk $\theta$.

> [!note]
> Because the support of pdf of $Y_{1}$ is $\theta<y_{1}<\infty$, which depends upon $\theta$, then we cannot use [[3 Reference/def-regular-exponential-class_202507170942\|Regular Exponential Class]] definition to prove that $Y_{1}$ is a complete statistic, as it violates the first condition where $\mathcal{S}$ does not depend upon $\theta$.
> 
> Instead, we will use [[3 Reference/def-complete-family-of-pdf-pmf_202507170933\|Complete Family of pdf/pmf]] definition by showing that if $E[u(Y_{1})]=0$, then $u(y_{1})=0$ [[3 Reference/def-almost-surely\|almost surely]].

Andaikan benar bahwa $E[u(Y_{1})]=0$ untuk setiap $\theta \in \Omega$. Artinya,
$$
\int_{\theta}^\infty u(y_{1}) \cdot ne^{-n(y_{1}-\theta)}\; dy_{1} = 0,\quad\forall\theta \in \Omega
$$

Misalkan $w=g(y_{1})=y_{1}-\theta$ sehingga $g^{-1}(w)=w+\theta$, $\frac{d}{dw}g^{-1}(w)=1$, $g(\theta)=0$ dan $\lim_{ y_{1} \to \infty }g(y_{1})=\infty$ . Maka, dengan substitusi variabel integral,
$$
\begin{align}

\int_{\theta}^\infty u(y_{1}) \cdot ne^{-n(y_{1}-\theta)}\; dy_{1} & = 0 \\

\int_{a}^b f(y_{1})dy_{1} = \int_{g(a)}^{g(b)} f(g^{-1}(w))\cdot \left| \frac{d}{dw} g^{-1}(w) \right|\; dw & = 0 \\

\int_{0}^{\infty} u(g^{-1}(w)) \cdot ne^{-n(g^{-1}(w)-\theta)} \cdot 1\; dw  & = 0 \\

\int_{0}^\infty u(w+\theta) \cdot ne^{-nw}\; dw & =0,\quad\forall\theta \in\Omega

\end{align}
$$

Diketahui bahwa $ne^{-nw}$ pada $(0,\infty)$ adalah pdf dari [[3 Reference/Continuous Distributions#Exponential distribution\|distribusi eksponensial]], yang merupakan anggota regular exponential class, sehingga komplit.

Karena keluarga $\{ ne^{-nw}:w>0\}$ komplit, maka
$$
\int_{0}^\infty u(w+\theta) \cdot ne^{-nw}\; dw = 0 \implies u(w+\theta) = u(y_{1}) = 0\; \text{a.e.}, \quad\forall \theta \in\Omega
$$

Karena jika benar bahwa $E[u(Y_{1})]=0$ untuk setiap $\theta \in \Omega$ diperoleh $u(y_{1})=0$ almost surely, maka berdasarkan [[3 Reference/def-complete-family-of-pdf-pmf_202507170933\|definisi]], keluarga $\{ g_{1}(y_{1};\theta):\theta \in \Omega \}$ komplit.

Karena $Y_{1}$ adalah statistik cukup $\theta$, dan pdf-nya berasal dari keluarga pdf yang komplit, berdasarkan definisi, maka $Y_{1}$ adalah **[[3 Reference/def-complete-sufficient-statistic_202507170931\|statistik cukup yang komplit]]**.

Perhatikan bahwa
$$ 
\begin{align}
E[Y_1] &= \int_\theta^\infty y \cdot n e^{-n(y-\theta)} dy \\
&= \int_0^\infty (u+\theta) n e^{-nu} du \quad (\text{misal } u=y-\theta) \\
&= \int_0^\infty u \cdot n e^{-nu} du + \theta \int_0^\infty n e^{-nu} du \\
&= \frac{1}{n} + \theta
\end{align}
$$ 
Maka, $E\left[ Y_1 - \frac{1}{n} \right] = E[Y_{1}] - \frac{1}{n} = \theta$ adalah [[3 Reference/Def-estimator\|estimator]] dari $Y_{1}$ yang [[3 Reference/Def-unbiased-estimator\|tak bias]]. Ingat bahwa $Y_{1}$ adalah statistik cukup yang komplit. Sehingga, berdasarkan [[3 Reference/unique-mvue-(umvue)_202507170937\|teorema Lehmann-Scheffé]],  $Y_{1}-\frac{1}{n}$ adalah **MVUE** untuk $\theta$.

$\therefore$ MVUE dari $\theta$ adalah $\boxed{Y_1 - \frac{1}{n}}$.


## 7.40
> Let
> - $X_{1},X_{2},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]], with
> 	- distribution $N(\theta,1), -\infty<\theta<\infty$
> 
> Find [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]] of $\theta^2$
> 
> Hint: First determine $E(\bar X^2)$

**Answer**

Diketahui $\operatorname{Var}(X_{i})=1$, dan $\bar{X}=\frac{1}{n}\sum_{i=1}^nX_{i}$ adalah [[3 Reference/Def-unbiased-estimator\|statistik tak bias]] untuk $\theta$. Maka $E(\bar{X})=\theta$. Perhatikan bahwa 
$$
\begin{align}
\operatorname{Var}(\bar{X}) & = \operatorname{Var}\left[ \left( \frac{1}{n}\sum_{i=1}^nX_{i} \right) \right] \\
 & = \frac{1}{n^2}\sum_{i=1}^n\operatorname{Var}(X_{i}) \\
 & = \frac{1}{n^2} \sum_{i=1}^n 1 \\
 & = \frac{1}{n^2}\cdot n \\
 & = \frac{1}{n}
\end{align}
$$
Sehingga dapat diperoleh
$$
\begin{align}
\operatorname{Var}(\bar{X}) & = E(\bar{X}^2)-[E(\bar{X})]^2 \\
\iff E(\bar{X}^2) & =  \operatorname{Var}(\bar{X})+[E(\bar{X})]^2 \\
 & = \frac{1}{n} + \theta^2
\end{align}
$$

Misalkan $Y=\bar{X}^2-1/n$. Maka, dapat diperoleh
$$
\begin{align}
E(Y) & = E\left( \bar{X}^2- \frac{1}{n} \right) \\
 & = E(\bar{X}^2)-\frac{1}{n} \\
 & = \left( \frac{1}{n} + \theta^2 \right) -\frac{1}{n} \\
 & = \theta^2
\end{align}
$$

Diketahui $\bar{X}$ adalah [[3 Reference/def-complete-sufficient-statistic_202507170931\|statistik cukup yang komplit]]. Ingat bahwa $Y$ adalah fungsi dari $\bar{X}$, sehingga berdasarkan teorema [[3 Reference/unique-mvue-(umvue)_202507170937\|Lehmann-Scheffé]], $Y=\bar{X}^2-1/n$ adalah [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]] untuk $\theta^2$.

$\therefore$ MVUE dari $\theta^2$ adalah $\boxed{\bar{X}^2-1/n}$

## 7.41
> Let $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]], with distribution $N(0,\theta)$. 
> 
> Then $Y=\sum X_{i}^2$ is a [[3 Reference/def-complete-sufficient-statistic_202507170931\|complete sufficient statistic]] for $\theta$.
> 
> Find [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]] of $\theta^2$

**Answer**

Karena $X_{i}\sim N(0,\theta)$, dapat diperoleh

$$
\begin{align}
 & X_{i}\sim N(0,\theta) \\
\iff & \frac{X_{i}}{\sqrt{ \theta }}\sim N(0,1) \\
\iff & \frac{X_{i}^2}{\theta}\sim \chi^2(1) \\
\iff & \sum_{i=1}^n \frac{X_{i}^2}{\theta}\sim \chi^2(n) \\
\iff & \frac{Y}{\theta}\sim \chi^2(n)
\end{align}
$$

Jadi, 
- $E\left[\frac{Y}{\theta}\right] = n$ 
- $\text{Var}\left(\frac{Y}{\theta}\right) = 2n\iff \operatorname{Var}(Y)=\theta^2\cdot 2n$

Perhatikan bahwa
$$
\begin{align}
E[Y^2] & = \text{Var}(Y) + (E[Y])^2 \\
 & = 2n\theta^2+n^2\theta^2 \\
 & = (n^2+2n)\theta^2 \\
 \iff E\left[ \frac{Y^2}{n^2+2n} \right] & = \theta^2
\end{align}
$$
Karena $\dfrac{Y^2}{n^2+2n}$ adalah fungsi dari statistik cukup yang komplit $Y$, berdasarkan teorema Lehmann-Scheffé, $\dfrac{Y^2}{n^2+2n}$ adalah MVUE untuk $\theta^2$.

$\therefore$ MVUE dari $\theta^2$ adalah $\boxed{\dfrac{Y^2}{n^2+2n}}$ 

## 7.42

> In the notation of Example 2 of this section, is there an UMVE of $\operatorname{Pr}(-c\leq X\leq c)$? Here $c>0$.

**Answer**

Untuk $X \sim N(\theta, 1)$ dapat diperoleh
$$\Pr(-c \leq X \leq c) = \Pr(X \leq c) - \Pr(X \leq -c) = \Phi(c - \theta) - \Phi(-c - \theta)$$

Misalkan
$$
u(X_1) = \begin{cases}
1 & \text{if } -c \leq X_1 \leq c  \\
 0 & \text{lainnya}
\end{cases}
$$

Maka, $$E[u(X_1)] = \Pr(-c \leq X_1 \leq c) = \Phi(c - \theta) - \Phi(-c - \theta)$$

Berdasarkan teorema [[3 Reference/mathstat7.3#Theorem 7.3.1 Rao-Blackwell\|Rao-Blackwell]] dan [[3 Reference/unique-mvue-(umvue)_202507170937\|Lehmann and Scheffe Theorem]],  $\varphi(\bar{X}) = E[u(X_1)|\bar{X} = \bar{x}]$ adalah UMVUE.

Diberikan $\bar X  = \bar x$, $X_1$ memiliki distribusi kondisional, $N\left(\theta + \frac{\rho\sigma_1}{\sigma_2}(\bar x - \theta), \sigma_1^2(1 - \rho^2)\right)$ dimana:
 - $\rho = \frac{1}{\sqrt{n}}$ (koefisien korelasi)
- $\sigma_1^2 = 1$, $\sigma_2^2 = \frac{1}{n}$

Sehingga diperoleh $X_1|\bar{X} = \bar{x} \sim N\left(\bar{x}, \frac{n-1}{n}\right)$. Akibatnya,
$$
\begin{align}
\varphi(\bar{x}) & = \Pr(-c \leq X_1 \leq c | \bar{X} = \bar{x}) \\
 & = \Pr\left(\frac{-c - \bar{x}}{\sqrt{\frac{n-1}{n}}} \leq \frac{X_1 - \bar{x}}{\sqrt{\frac{n-1}{n}}} \leq \frac{c - \bar{x}}{\sqrt{\frac{n-1}{n}}}\right) \\
 & = \Phi\left(\sqrt{\frac{n}{n-1}} \cdot (c - \bar{x})\right) - \Phi\left(\sqrt{\frac{n}{n-1}} \cdot (-c - \bar{x})\right) \\
 & = \Phi\left(\sqrt{\frac{n}{n-1}} \cdot (c - \bar{x})\right) - \Phi\left(-\sqrt{\frac{n}{n-1}} \cdot (c + \bar{x})\right)
\end{align}
$$

$\therefore$ Jadi, UMVUE dari $\Pr(-c \leq X \leq c)$ adalah
$$\boxed{\Phi\left(\sqrt{\frac{n}{n-1}} \cdot (c - \bar{X})\right) - \Phi\left(-\sqrt{\frac{n}{n-1}} \cdot (c + \bar{X})\right)}$$

## 7.43

> Let $X_{1},X_{2},\dots,X_{n}$ be a [[3 Reference/Def-random-sample\|random sample]] from a [[3 Reference/def-poisson-distribution_202509150822\|Poisson distribution]] with parameter $\theta>0$. Find the unbiased [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|unbiased minimum variance estimator]] of $\operatorname{Pr}(X\leq 1)=(1+\theta)e^{-\theta}$.
> 
> Hint: Let $u(x_{1})=1,x_{1}\leq 1$, zero elsewhere, and find $E[u(X_{1})|Y=y]$, where $Y=\sum_{i}^n X_{i}$. Make use of Example 2, Section 4.2

**Jawab**

Misalkan $X_1, X_2, \ldots, X_n$ adalah sampel acak dari distribusi Poisson dengan parameter $\theta > 0$. PMF dari $X_i$ adalah
$$f(x;\theta) = \frac{\theta^x e^{-\theta}}{x!}, \quad x = 0,1,2,\ldots$$

Perhatikan bahwa PMF ini dapat ditulis sebagai
$$f(x;\theta) = \exp[x\ln\theta - \theta - \ln(x!)]$$

yang merupakan anggota [[3 Reference/def-regular-exponential-class_202507170942\|regular exponential class]] dengan support tetap $\{0,1,2,\ldots\}$ yang tidak bergantung pada $\theta$, sehingga keluarga distribusi Poisson adalah komplit.

[[3 Reference/Def-likelihood-function\|Fungsi likelihood]] dari sampel adalah
$$
\begin{align}
L(\theta; \mathbf{x}) &= \prod_{i=1}^n \frac{\theta^{x_i} e^{-\theta}}{x_i!} \\
&= \frac{\theta^{\sum_{i=1}^n x_i} e^{-n\theta}}{\prod_{i=1}^n x_i!}
\end{align}
$$

Berdasarkan [[3 Reference/theorem-neyman-theorem_202508052229\|teorema faktorisasi Neyman]], $Y = \sum_{i=1}^n X_i$ adalah [[3 Reference/def-sufficient-statistic_202507170925\|statistik cukup]] untuk $\theta$. Karena keluarga Poisson komplit, maka $Y$ adalah [[3 Reference/def-complete-sufficient-statistic_202507170931\|statistik cukup yang komplit]] untuk $\theta$.

> [!note]
> Note that you can also use [[3 Reference/mathstat7.5#Theorem 7.5.2\|Theorem 7.5.2]] to prove $Y=\sum X_{i}$ is is a [[3 Reference/def-complete-sufficient-statistic_202507170931\|Complete Sufficient Statistic]].

Definisikan 
$$u(X_1) = \begin{cases} 1, & X_1 \leq 1 \\ 0, & X_1 > 1 \end{cases}$$

Perhatikan bahwa
$$
\begin{align}
E[u(X_1)] &= P(X_1 \leq 1) \\
&= P(X_1 = 0) + P(X_1 = 1) \\
&= e^{-\theta} + \theta e^{-\theta} \\
&= (1+\theta)e^{-\theta}
\end{align}
$$

Jadi $u(X_1)$ adalah [[3 Reference/Def-unbiased-estimator\|estimator tak bias]] untuk $(1+\theta)e^{-\theta}$.

Berdasarkan [[3 Reference/unique-mvue-(umvue)_202507170937\|teorema Lehmann-Scheffé]], karena $Y$ adalah statistik cukup yang komplit, maka MVUE dari $(1+\theta)e^{-\theta}$ adalah
$$\phi(Y) = E[u(X_1) | Y]$$

Hitung $\phi(y)$:
$$
\begin{align}
\phi(y) &= E[u(X_1) | Y=y] \\
&= P(X_1 \leq 1 | Y=y) \\
&= P(X_1=0|Y=y) + P(X_1=1|Y=y)
\end{align}
$$

Berdasarkan Example 2, Section 4.2, jika $X_1 \sim \text{Poisson}(\theta)$ dan $\sum_{i=2}^n X_i \sim \text{Poisson}((n-1)\theta)$ independen, maka $Y = X_1 + \sum_{i=2}^n X_i \sim \text{Poisson}(n\theta)$.

Distribusi kondisional $X_1 | (Y=y)$ dapat diturunkan:
$$
\begin{align}
P(X_1 = k | Y=y) &= \frac{P(X_1 = k, \sum_{i=2}^n X_i = y-k)}{P(Y = y)} \\
&= \frac{\frac{\theta^k e^{-\theta}}{k!} \cdot \frac{[(n-1)\theta]^{y-k} e^{-(n-1)\theta}}{(y-k)!}}{\frac{(n\theta)^y e^{-n\theta}}{y!}} \\
&= \binom{y}{k} \left(\frac{1}{n}\right)^k \left(\frac{n-1}{n}\right)^{y-k}
\end{align}
$$

Jadi $X_1 | (Y=y) \sim \text{Binomial}\left(y, \frac{1}{n}\right)$.

Maka:
$$
\begin{align}
P(X_1 = 0 | Y=y) &= \left(\frac{n-1}{n}\right)^y \\
P(X_1 = 1 | Y=y) &= \frac{y}{n} \left(\frac{n-1}{n}\right)^{y-1}
\end{align}
$$

Sehingga:
$$
\begin{align}
\phi(y) &= \left(\frac{n-1}{n}\right)^y + \frac{y}{n} \left(\frac{n-1}{n}\right)^{y-1} \\
&= \left(\frac{n-1}{n}\right)^{y-1} \left[\frac{n-1}{n} + \frac{y}{n}\right] \\
&= \left(\frac{n-1}{n}\right)^{y-1} \frac{y+n-1}{n}
\end{align}
$$

$\therefore$ MVUE dari $\operatorname{Pr}(X\leq 1) = (1+\theta)e^{-\theta}$ adalah $\boxed{\phi(Y) = \left(\frac{n-1}{n}\right)^Y + \frac{Y}{n} \left(\frac{n-1}{n}\right)^{Y-1}}$ dengan $Y = \sum_{i=1}^n X_i$.

