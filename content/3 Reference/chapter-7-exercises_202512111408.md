---
publish: true
aliases:
  - Chapter 7 Exercises
created: 2026-03-25T15:22:40.617+07:00
modified: 2026-03-25T15:22:40.617+07:00
published: 2026-03-25T15:22:40.617+07:00
tags:
  - 
creation-time: 2025-12-11 14:08
status: in progress
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---

## 7.27

> Show that the first [[Def-order-statistics|order statistic]] $Y\_{1}$ of a [[Def-random-sample|random sample]] of size $n$ from the distribution having [[Def-probability-density-function-(pdf)|p.d.f.]] $f(x;\theta)=e^{-(x-\theta)},\theta\<x<\infty, -\infty<\theta<\infty$, zero elsewhere, is a [[def-complete-sufficient-statistic_202507170931|complete sufficient statistic]] for $\theta$. Fin the unique function of this [[Def-statistic|statistic]] which is the unbiased [[def-minimum-variance-unbiased-estimator-(mvue)_202507170925|unbiased minimum variance estimator]] of $\theta$.

**Jawab**

Misalkan $X$ sampel acak dengan pdf $f(x;\theta)=e^{-(x-\theta)}$, $\theta\<x<\infty$, $-\infty<\theta<\infty$. cdf dari $X$ adalah
$$ F(x;\theta) = \int\_\theta^x e^{-(t-\theta)} dt = \left\[ -e^{-(t-\theta)} \right]\_\theta^x = 1 - e^{-(x-\theta)} $$

Berdasarkan [[3 Reference/theorem-marginal-pdf-of-order-statistics_202510031045.md|teorema PDF marginal dari statistik terurut]], pdf dari $Y\_1$ dapat diperoleh dengan
$$
\begin{align}
g\_1(y\_1; \theta) & = n\left\[1-F\left(y\_1\right)\right]^{n-1} f\left(y\_1\right) \\
&= n\left\[1 - (1 - e^{-(y\_1-\theta)})\right]^{n-1} e^{-(y\_1-\theta)} \\
&= n\left\[e^{-(y\_1-\theta)}\right]^{n-1} e^{-(y\_1-\theta)} \\
&= n e^{-n(y\_1-\theta)}, \quad \theta \<y\_{1}<\infty
\end{align}
$$
Perhatikan bahwa [[Def-likelihood-function|fungsi likelihood]] dari sampel $\mathbf{X}=(X\_1, \dots, X\_n)$ adalah
$$
\begin{align}
L(\theta; \mathbf{x}) & = \prod\_{i=1}^n f(x\_i; \theta) \\
& = \prod\_{i=1}^n e^{-(x\_i-\theta)} \\
& = e^{-\sum x\_i + n\theta} \\
& = e^{n\theta}e^{-\sum x\_{i}} \\
& = \left( \frac{g\_1(y\_1; \theta)}{n e^{-ny\_1}} \right)\cdot e^{-\sum x\_i}
\end{align}
$$

Berdasarkan [[3 Reference/theorem-neyman-theorem_202508052229.md|teorema faktorisasi Neyman]], karena $L(\theta; \mathbf{x})$ dapat difaktorkan menjadi perkalian oleh suatu fungsi dari $Y\_{1}$ yang bergantung dengan $\theta$, dengan suatu fungsi yang tidak bergantung dengan $\theta$, maka $Y\_{1}$ adalah **[[def-sufficient-statistic_202507170925|statistik cukup]]** untuk $\theta$.

> [!note]
> Because the support of pdf of $Y\_{1}$ is $\theta\<y\_{1}<\infty$, which depends upon $\theta$, then we cannot use [[def-regular-exponential-class_202507170942|Regular Exponential Class]] definition to prove that $Y\_{1}$ is a complete statistic, as it violates the first condition where $\mathcal{S}$ does not depend upon $\theta$.
>
> Instead, we will use [[def-complete-family-of-pdf-pmf_202507170933|Complete Family of pdf/pmf]] definition by showing that if $E\[u(Y\_{1})]=0$, then $u(y\_{1})=0$ [[def-almost-surely|almost surely]].

Andaikan benar bahwa $E\[u(Y\_{1})]=0$ untuk setiap $\theta \in \Omega$. Artinya,
$$
\int\_{\theta}^\infty u(y\_{1}) \cdot ne^{-n(y\_{1}-\theta)}; dy\_{1} = 0,\quad\forall\theta \in \Omega
$$

Misalkan $w=g(y\_{1})=y\_{1}-\theta$ sehingga $g^{-1}(w)=w+\theta$, $\frac{d}{dw}g^{-1}(w)=1$, $g(\theta)=0$ dan $\lim\_{ y\_{1} \to \infty }g(y\_{1})=\infty$ . Maka, dengan substitusi variabel integral,
$$
\begin{align}

\int\_{\theta}^\infty u(y\_{1}) \cdot ne^{-n(y\_{1}-\theta)}; dy\_{1} & = 0 \\

\int\_{a}^b f(y\_{1})dy\_{1} = \int\_{g(a)}^{g(b)} f(g^{-1}(w))\cdot \left| \frac{d}{dw} g^{-1}(w) \right|; dw & = 0 \\

\int\_{0}^{\infty} u(g^{-1}(w)) \cdot ne^{-n(g^{-1}(w)-\theta)} \cdot 1; dw  & = 0 \\

\int\_{0}^\infty u(w+\theta) \cdot ne^{-nw}; dw & =0,\quad\forall\theta \in\Omega

\end{align}
$$

Diketahui bahwa $ne^{-nw}$ pada $(0,\infty)$ adalah pdf dari [[Continuous Distributions#Exponential distribution|distribusi eksponensial]], yang merupakan anggota regular exponential class, sehingga komplit.

Karena keluarga ${ ne^{-nw}:w>0}$ komplit, maka
$$
\int\_{0}^\infty u(w+\theta) \cdot ne^{-nw}; dw = 0 \implies u(w+\theta) = u(y\_{1}) = 0; \text{a.e.}, \quad\forall \theta \in\Omega
$$

Karena jika benar bahwa $E\[u(Y\_{1})]=0$ untuk setiap $\theta \in \Omega$ diperoleh $u(y\_{1})=0$ almost surely, maka berdasarkan [[def-complete-family-of-pdf-pmf_202507170933|definisi]], keluarga ${ g\_{1}(y\_{1};\theta):\theta \in \Omega }$ komplit.

Karena $Y\_{1}$ adalah statistik cukup $\theta$, dan pdf-nya berasal dari keluarga pdf yang komplit, berdasarkan definisi, maka $Y\_{1}$ adalah **[[def-complete-sufficient-statistic_202507170931|statistik cukup yang komplit]]**.

Perhatikan bahwa
$$
\begin{align}
E\[Y\_1] &= \int\_\theta^\infty y \cdot n e^{-n(y-\theta)} dy \\
&= \int\_0^\infty (u+\theta) n e^{-nu} du \quad (\text{misal } u=y-\theta) \\
&= \int\_0^\infty u \cdot n e^{-nu} du + \theta \int\_0^\infty n e^{-nu} du \\
&= \frac{1}{n} + \theta
\end{align}
$$
Maka, $E\left\[ Y\_1 - \frac{1}{n} \right] = E\[Y\_{1}] - \frac{1}{n} = \theta$ adalah [[Def-estimator|estimator]] dari $Y\_{1}$ yang [[Def-unbiased-estimator|tak bias]]. Ingat bahwa $Y\_{1}$ adalah statistik cukup yang komplit. Sehingga, berdasarkan [[unique-mvue-(umvue)_202507170937|teorema Lehmann-Scheffé]],  $Y\_{1}-\frac{1}{n}$ adalah **MVUE** untuk $\theta$.

$\therefore$ MVUE dari $\theta$ adalah $\boxed{Y\_1 - \frac{1}{n}}$.

## 7.40

> Let
>
> - $X\_{1},X\_{2},\dots,X\_{n}$ : [[Def-random-sample|Random sample]], with
>   - distribution $N(\theta,1), -\infty<\theta<\infty$
>
> Find [[def-minimum-variance-unbiased-estimator-(mvue)_202507170925|MVUE]] of $\theta^2$
>
> Hint: First determine $E(\bar X^2)$

**Answer**

Diketahui $\operatorname{Var}(X\_{i})=1$, dan $\bar{X}=\frac{1}{n}\sum\_{i=1}^nX\_{i}$ adalah [[Def-unbiased-estimator|statistik tak bias]] untuk $\theta$. Maka $E(\bar{X})=\theta$. Perhatikan bahwa
$$
\begin{align}
\operatorname{Var}(\bar{X}) & = \operatorname{Var}\left\[ \left( \frac{1}{n}\sum\_{i=1}^nX\_{i} \right) \right] \\
& = \frac{1}{n^2}\sum\_{i=1}^n\operatorname{Var}(X\_{i}) \\
& = \frac{1}{n^2} \sum\_{i=1}^n 1 \\
& = \frac{1}{n^2}\cdot n \\
& = \frac{1}{n}
\end{align}
$$
Sehingga dapat diperoleh
$$
\begin{align}
\operatorname{Var}(\bar{X}) & = E(\bar{X}^2)-\[E(\bar{X})]^2 \\
\iff E(\bar{X}^2) & =  \operatorname{Var}(\bar{X})+\[E(\bar{X})]^2 \\
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

Diketahui $\bar{X}$ adalah [[def-complete-sufficient-statistic_202507170931|statistik cukup yang komplit]]. Ingat bahwa $Y$ adalah fungsi dari $\bar{X}$, sehingga berdasarkan teorema [[unique-mvue-(umvue)_202507170937|Lehmann-Scheffé]], $Y=\bar{X}^2-1/n$ adalah [[def-minimum-variance-unbiased-estimator-(mvue)_202507170925|MVUE]] untuk $\theta^2$.

$\therefore$ MVUE dari $\theta^2$ adalah $\boxed{\bar{X}^2-1/n}$

## 7.41

> Let $X\_{1},\dots,X\_{n}$ : [[Def-random-sample|Random sample]], with distribution $N(0,\theta)$.
>
> Then $Y=\sum X\_{i}^2$ is a [[def-complete-sufficient-statistic_202507170931|complete sufficient statistic]] for $\theta$.
>
> Find [[def-minimum-variance-unbiased-estimator-(mvue)_202507170925|MVUE]] of $\theta^2$

**Answer**

Karena $X\_{i}\sim N(0,\theta)$, dapat diperoleh

$$
\begin{align}
& X\_{i}\sim N(0,\theta) \\
\iff & \frac{X\_{i}}{\sqrt{ \theta }}\sim N(0,1) \\
\iff & \frac{X\_{i}^2}{\theta}\sim \chi^2(1) \\
\iff & \sum\_{i=1}^n \frac{X\_{i}^2}{\theta}\sim \chi^2(n) \\
\iff & \frac{Y}{\theta}\sim \chi^2(n)
\end{align}
$$

Jadi,

- $E\left\[\frac{Y}{\theta}\right] = n$
- $\text{Var}\left(\frac{Y}{\theta}\right) = 2n\iff \operatorname{Var}(Y)=\theta^2\cdot 2n$

Perhatikan bahwa
$$
\begin{align}
E\[Y^2] & = \text{Var}(Y) + (E\[Y])^2 \\
& = 2n\theta^2+n^2\theta^2 \\
& = (n^2+2n)\theta^2 \\
\iff E\left\[ \frac{Y^2}{n^2+2n} \right] & = \theta^2
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
u(X\_1) = \begin{cases}
1 & \text{if } -c \leq X\_1 \leq c  \\
0 & \text{lainnya}
\end{cases}
$$

Maka, $$E\[u(X\_1)] = \Pr(-c \leq X\_1 \leq c) = \Phi(c - \theta) - \Phi(-c - \theta)$$

Berdasarkan teorema [[mathstat7.3#Theorem 7.3.1 Rao-Blackwell|Rao-Blackwell]] dan [[unique-mvue-(umvue)_202507170937|Lehmann and Scheffe Theorem]],  $\varphi(\bar{X}) = E\[u(X\_1)|\bar{X} = \bar{x}]$ adalah UMVUE.

Diberikan $\bar X  = \bar x$, $X\_1$ memiliki distribusi kondisional, $N\left(\theta + \frac{\rho\sigma\_1}{\sigma\_2}(\bar x - \theta), \sigma\_1^2(1 - \rho^2)\right)$ dimana:

- $\rho = \frac{1}{\sqrt{n}}$ (koefisien korelasi)
- $\sigma\_1^2 = 1$, $\sigma\_2^2 = \frac{1}{n}$

Sehingga diperoleh $X\_1|\bar{X} = \bar{x} \sim N\left(\bar{x}, \frac{n-1}{n}\right)$. Akibatnya,
$$
\begin{align}
\varphi(\bar{x}) & = \Pr(-c \leq X\_1 \leq c | \bar{X} = \bar{x}) \\
& = \Pr\left(\frac{-c - \bar{x}}{\sqrt{\frac{n-1}{n}}} \leq \frac{X\_1 - \bar{x}}{\sqrt{\frac{n-1}{n}}} \leq \frac{c - \bar{x}}{\sqrt{\frac{n-1}{n}}}\right) \\
& = \Phi\left(\sqrt{\frac{n}{n-1}} \cdot (c - \bar{x})\right) - \Phi\left(\sqrt{\frac{n}{n-1}} \cdot (-c - \bar{x})\right) \\
& = \Phi\left(\sqrt{\frac{n}{n-1}} \cdot (c - \bar{x})\right) - \Phi\left(-\sqrt{\frac{n}{n-1}} \cdot (c + \bar{x})\right)
\end{align}
$$

$\therefore$ Jadi, UMVUE dari $\Pr(-c \leq X \leq c)$ adalah
$$\boxed{\Phi\left(\sqrt{\frac{n}{n-1}} \cdot (c - \bar{X})\right) - \Phi\left(-\sqrt{\frac{n}{n-1}} \cdot (c + \bar{X})\right)}$$

## 7.43

> Let $X\_{1},X\_{2},\dots,X\_{n}$ be a [[Def-random-sample|random sample]] from a [[def-poisson-distribution_202509150822|Poisson distribution]] with parameter $\theta>0$. Find the unbiased [[def-minimum-variance-unbiased-estimator-(mvue)_202507170925|unbiased minimum variance estimator]] of $\operatorname{Pr}(X\leq 1)=(1+\theta)e^{-\theta}$.
>
> Hint: Let $u(x\_{1})=1,x\_{1}\leq 1$, zero elsewhere, and find $E\[u(X\_{1})|Y=y]$, where $Y=\sum\_{i}^n X\_{i}$. Make use of Example 2, Section 4.2

**Jawab**

Misalkan $X\_1, X\_2, \ldots, X\_n$ adalah sampel acak dari distribusi Poisson dengan parameter $\theta > 0$. PMF dari $X\_i$ adalah
$$f(x;\theta) = \frac{\theta^x e^{-\theta}}{x!}, \quad x = 0,1,2,\ldots$$

Perhatikan bahwa PMF ini dapat ditulis sebagai
$$f(x;\theta) = \exp\[x\ln\theta - \theta - \ln(x!)]$$

yang merupakan anggota [[def-regular-exponential-class_202507170942|regular exponential class]] dengan support tetap ${0,1,2,\ldots}$ yang tidak bergantung pada $\theta$, sehingga keluarga distribusi Poisson adalah komplit.

[[Def-likelihood-function|Fungsi likelihood]] dari sampel adalah
$$
\begin{align}
L(\theta; \mathbf{x}) &= \prod\_{i=1}^n \frac{\theta^{x\_i} e^{-\theta}}{x\_i!} \\
&= \frac{\theta^{\sum\_{i=1}^n x\_i} e^{-n\theta}}{\prod\_{i=1}^n x\_i!}
\end{align}
$$

Berdasarkan [[3 Reference/theorem-neyman-theorem_202508052229.md|teorema faktorisasi Neyman]], $Y = \sum\_{i=1}^n X\_i$ adalah [[def-sufficient-statistic_202507170925|statistik cukup]] untuk $\theta$. Karena keluarga Poisson komplit, maka $Y$ adalah [[def-complete-sufficient-statistic_202507170931|statistik cukup yang komplit]] untuk $\theta$.

> [!note]
> Note that you can also use [[mathstat7.5#Theorem 7.5.2|Theorem 7.5.2]] to prove $Y=\sum X\_{i}$ is is a [[def-complete-sufficient-statistic_202507170931|Complete Sufficient Statistic]].

Definisikan
$$u(X\_1) = \begin{cases} 1, & X\_1 \leq 1 \ 0, & X\_1 > 1 \end{cases}$$

Perhatikan bahwa
$$
\begin{align}
E\[u(X\_1)] &= P(X\_1 \leq 1) \\
&= P(X\_1 = 0) + P(X\_1 = 1) \\
&= e^{-\theta} + \theta e^{-\theta} \\
&= (1+\theta)e^{-\theta}
\end{align}
$$

Jadi $u(X\_1)$ adalah [[Def-unbiased-estimator|estimator tak bias]] untuk $(1+\theta)e^{-\theta}$.

Berdasarkan [[unique-mvue-(umvue)_202507170937|teorema Lehmann-Scheffé]], karena $Y$ adalah statistik cukup yang komplit, maka MVUE dari $(1+\theta)e^{-\theta}$ adalah
$$\phi(Y) = E\[u(X\_1) | Y]$$

Hitung $\phi(y)$:
$$
\begin{align}
\phi(y) &= E\[u(X\_1) | Y=y] \\
&= P(X\_1 \leq 1 | Y=y) \\
&= P(X\_1=0|Y=y) + P(X\_1=1|Y=y)
\end{align}
$$

Berdasarkan Example 2, Section 4.2, jika $X\_1 \sim \text{Poisson}(\theta)$ dan $\sum\_{i=2}^n X\_i \sim \text{Poisson}((n-1)\theta)$ independen, maka $Y = X\_1 + \sum\_{i=2}^n X\_i \sim \text{Poisson}(n\theta)$.

Distribusi kondisional $X\_1 | (Y=y)$ dapat diturunkan:
$$
\begin{align}
P(X\_1 = k | Y=y) &= \frac{P(X\_1 = k, \sum\_{i=2}^n X\_i = y-k)}{P(Y = y)} \\
&= \frac{\frac{\theta^k e^{-\theta}}{k!} \cdot \frac{\[(n-1)\theta]^{y-k} e^{-(n-1)\theta}}{(y-k)!}}{\frac{(n\theta)^y e^{-n\theta}}{y!}} \\
&= \binom{y}{k} \left(\frac{1}{n}\right)^k \left(\frac{n-1}{n}\right)^{y-k}
\end{align}
$$

Jadi $X\_1 | (Y=y) \sim \text{Binomial}\left(y, \frac{1}{n}\right)$.

Maka:
$$
\begin{align}
P(X\_1 = 0 | Y=y) &= \left(\frac{n-1}{n}\right)^y \\
P(X\_1 = 1 | Y=y) &= \frac{y}{n} \left(\frac{n-1}{n}\right)^{y-1}
\end{align}
$$

Sehingga:
$$
\begin{align}
\phi(y) &= \left(\frac{n-1}{n}\right)^y + \frac{y}{n} \left(\frac{n-1}{n}\right)^{y-1} \\
&= \left(\frac{n-1}{n}\right)^{y-1} \left\[\frac{n-1}{n} + \frac{y}{n}\right] \\
&= \left(\frac{n-1}{n}\right)^{y-1} \frac{y+n-1}{n}
\end{align}
$$

$\therefore$ MVUE dari $\operatorname{Pr}(X\leq 1) = (1+\theta)e^{-\theta}$ adalah $\boxed{\phi(Y) = \left(\frac{n-1}{n}\right)^Y + \frac{Y}{n} \left(\frac{n-1}{n}\right)^{Y-1}}$ dengan $Y = \sum\_{i=1}^n X\_i$.
