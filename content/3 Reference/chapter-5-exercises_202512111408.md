---
publish: true
aliases:
  - Chapter 5 Exercises
created: 2026-03-25T15:22:40.610+07:00
modified: 2026-03-25T15:22:40.610+07:00
published: 2026-03-25T15:22:40.610+07:00
tags:
  - 
creation-time: 2025-12-11 14:08
status: in progress
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---

## 5.7

> Let $Y\_{n}$ : Sequence of [[mathstat1.5#Definition 1.5.1 Random variable|random variable]], with $Y\_{n}\sim b(n,p)$ ([[Discrete Distributions#Binomial distribution|check here]])
>
> Prove that $1-Y\_{n}/n$ [[mathstat5.1#Definition 5.1.1 Convergence in probability|converges in probability]] to $1-p$

**Answer**

Karena $Y\_{n}\sim b(n,p)$, berarti $E\[Y\_{n}]=np$ dan $\operatorname{Var}(Y\_{n})=np(1-p)$. Misalkan $\bar{Y}_{n}=\frac{Y_{n}}{n}$. Maka,

- $E\[\bar{Y\_n}] = \frac{E\[Y\_n]}{n} = \frac{np}{n} = p$
- $\text{Var}(\bar{Y\_n}) = \frac{\text{Var}(Y\_n)}{n^2} = \frac{np(1-p)}{n^2} = \frac{p(1-p)}{n}$

Misalkan $k=\frac{\epsilon}{\sigma}$. Berdasarkan [[mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality|teorema Chebyshev]],
$$
\begin{align}
P\left(\left|\bar{Y}\_{n}-E\[X]\right| > k\sigma \right) & \leq \frac{1}{k^2} \\

P\left(\left| \frac{Y\_{n}}{n} - p \right| > \epsilon \right) & \leq \frac{\sigma^2}{\epsilon^2}  \\

& \leq \frac{\operatorname{Var}(\bar{Y}\_{n})}{\epsilon^2} = \frac{p(1-p)}{n\epsilon^2} \\

\lim\_{n \to \infty} P\left(\left|\frac{Y\_n}{n} - p\right| > \epsilon\right)  & \leq \lim\_{n \to \infty} \frac{p(1-p)}{n\epsilon^2} = 0
\end{align}
$$

Sehingga diperoleh
$$
\lim\_{n \to \infty} P\left(\left|1 - \frac{Y\_n}{n} - (1-p)\right| > \epsilon\right) = 0
$$

Berdasarkan [[mathstat5.1#Definition 5.1.1 Convergence in probability|definisi konvergen dalam probabilitas]], terbukti bahwa $1-\frac{Y\_{n}}{n}\xrightarrow P 1-p$

## 5.8

> Let $S\_n^2$ denote the [[Def-variance|variance]] of a [[Def-random-sample|random sample]] of size $n$ from a distribution that is $N(\mu, \sigma^2)$. Prove that $nS\_n^2/(n-1)$ [[Def-convergence-in-probability|converges in probability]] to $\sigma^2$.

**Answer**

Diketahui $S\_n^2 = \frac{1}{n-1} \sum\_{i=1}^n (X\_i - \bar{X})^2$ adalah [[Def-variance|varians]] sampel dari distribusi $N(\mu, \sigma^2)$ dengan $S\_{n}^{2}\sim N\left( \sigma^{2}, \frac{2\sigma^4}{n-1} \right)$.

Misalkan $T\_n = \frac{n S\_n^2}{n-1}$. Maka,
$$
\begin{align}
E\[T\_n] & = E\left\[\frac{n S\_n^2}{n-1}\right] \\
& = \frac{n}{n-1} E\[S\_n^2] \\
& = \frac{n}{n-1} \sigma^2 \\

\text{Var}(T\_n) & = \text{Var}\left(\frac{n S\_n^2}{n-1}\right)  \\
& = \left(\frac{n}{n-1}\right)^2 \text{Var}(S\_n^2)  \\
& = \left(\frac{n}{n-1}\right)^2 \frac{2\sigma^4}{n-1}  \\
& = \frac{2n^2 \sigma^4}{(n-1)^3}.
\end{align}
$$

Berdasarkan [[mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality|teorema Chebyshev]], untuk setiap $\epsilon > 0$ berlaku
$$
P\left(\left|T\_n - \sigma^2\right| > \epsilon\right) \leq \frac{\text{Var}(T\_n)}{\epsilon^2} = \frac{2n^2 \sigma^4}{(n-1)^3 \epsilon^2}.
$$

Karena $\lim\_{n \to \infty} \frac{2n^2 \sigma^4}{(n-1)^3 \epsilon^2} = 0$, maka:
$$
\lim\_{n \to \infty} P\left(\left|T\_n - \sigma^2\right| > \epsilon\right) = 0.
$$

Berdasarkan [[mathstat5.1#Definition 5.1.1 Convergence in probability|definisi konvergen dalam probabilitas]], terbukti bahwa $\frac{n S\_n^2}{n-1} \xrightarrow{P} \sigma^2$.

$\therefore$ Terbukti bahwa $n S\_n^2/(n-1)$ konvergen dalam probabilitas ke $\sigma^2$.

## 5.10

> Let $Y\_{n}$ : $n$-th [[mathstat4.4#Definition Order statistics|Order statistic]] from [[mathstat4.1#Definition 4.1.1 Random sample|random sample]] of size $n$, with $Y\_{n}\sim U(0,\theta)$
>
> Prove that $Z\_{n}=\sqrt{ Y\_{n} }$ converges in probability to $\sqrt{ \theta }$

**Answer**

> [!quote] Dari Example 1 Section 5.1
> $Y\_{n}$ converges in distribution to a random variable that has a  degenerate distribution at the point $y=\theta$.

Artinya, $Y\_{n}\xrightarrow D \theta$. Berdasarkan [[mathstat5.2#Theorem 5.2.2|teorema 5.2.2]], diperoleh $Y\_{n}\xrightarrow P \theta$. Misalkan $Z\_{n} = g(Y\_{n}) = \sqrt{ Y\_{n} }$. Berdasarkan [[mathstat5.1#Theorem 5.1.4|teorema 5.1.4]], diperoleh $Z\_{n}\xrightarrow P \theta$, sehingga terbukti bahwa $Z\_{n}=\sqrt{ Y\_{n} }$ konvergen dalam probabilitas ke $\sqrt{ \theta }$

## 5.11

> Let $X\_n$ have a [[Continuous Distributions#Gamma distribution|gamma distribution]] with parameter $\alpha = n$ and $\beta$, where $\beta$ is not a function of $n$. Let $Y\_n = X\_n/n$. Find the [[Def-convergence-in-distribution|limiting distribution]] of $Y\_n$.

**Answer**

Diketahui $X\_n \sim \Gamma(n, \beta)$, memiliki [[Def-moment-generating-function-(mgf)|mgf]] $M\_{X\_n}(t) = (1 - \beta t)^{-n}$, untuk $t < \frac{1}{\beta}$.

Misalkan $Y\_n = \frac{X\_n}{n}$. mgf dari $Y\_n$ adalah:
$$
\begin{align}
M\_{Y\_n}(t) &= E\[e^{t Y\_n}]  \\
& = E\left\[e^{t \cdot \frac{X\_n}{n}}\right]  \\
& = M\_{X\_n}\left(\frac{t}{n}\right) \\
&= \left(1 - \beta \frac{t}{n}\right)^{-n}  \\
& = \left(1 - \frac{\beta t}{n}\right)^{-n}.
\end{align}
$$

Karena $\lim\_{ n \to \infty } \left( 1+\frac{b}{n} \right)^{cn} = e^{bc}$, maka $\lim\_{n \to \infty} M\_{Y\_n}(t) = e^{\beta t}$

Misalkan $X$ adalah variabel acak dengan mgf $M\_X(t) = e^{\beta t}$. $X$ adalah mgf dari [[Def-degenerate-distribution|distribusi degenerate]] di $\beta$, yaitu $P(X = \beta) = 1$. Berdasarkan [[mathstat5.2#Theorem 5.2.10 MGF technique|teorema teknik mgf]], karena $\lim\_{n \to \infty} M\_{Y\_n}(t) = M\_X(t)$, maka $Y\_n \xrightarrow{D} X$.

$\therefore$ Distribusi limit dari $Y\_n$ adalah distribusi degenerate di $\beta$.

## 5.12

> Let
>
> - $Z\_{n}$ : Sequence of random variables, with $Z\_{n}\sim\chi^2(n)$
> - $W\_{n} = Z\_{n}/n^2$
>
> Find the limiting distribution of $W\_{n}$

**Answer**

Diketahui mgf dari [[Continuous Distributions#Chi-square distribution|distribusi Chi-square]] adalah $M\_{Z\_{n}}(t)=(1-2t)^{-n/2}$, untuk $t< \frac{1}{2}$. Karena $W\_{n}=\frac{Z\_{n}}{n^2}$, mgf dari $W\_{n}$ dapat diperoleh dengan
$$
\begin{align}
M\_{W\_{t}}  & = E\[e^{tW\_{n}}] \\
& = E\left\[e^{\frac{t}{n^2}Z\_{n}}\right] \\
& = M\_{Z\_{n}}\left( \frac{t}{n^2} \right) \\
& = \left( 1- \frac{2t}{n^2} \right)^{-n/2}, \quad \text{Untuk } \frac{t}{n^2} < \frac{1}{2}\\
\end{align}
$$

Karena $\lim\_{ n \to \infty }\left( 1+\frac{b}{n} \right)^{cn}=e^{bc}$, dengan memisalkan $b=-2t$, $c=1$, dan $n=n^2$, dapat diperoleh
$$
\begin{align}
M\_{W\_{n}}(t) & = \left( 1 - \frac{2t}{n^2} \right)^{-n/2} \\

& = \left\[ \left( 1-\frac{2t}{n^2} \right)^{n^2} \right]^{-1/(2n)} \\

\lim\_{ n \to \infty }M\_{W\_{n}}(t)  & = \lim\_{ n \to \infty } \left(e^{-2t}\right)^{-1/(2n)}\\

& = \lim\_{ n \to \infty } e^{t/n} \\

& = e^{0} \\

& = 1
\end{align}
$$

Misalkan $X$ variabel acak dengan mgf $M\_{X}(t)$. Andaikan $X$ berdistribusi degenerate ke $0$, yang berakibat $M\_{X}(t)=E\left\[e^{tX}\right]=e^{t\cdot 0} = 1$. Karena $\lim\_{ n \to \infty }M\_{W\_{n}}(t) = M\_{X}(t)$, berdasarkan [[mathstat5.2#Theorem 5.2.10 MGF technique|teorema 5.2.10]], diperoleh $W\_{n}\xrightarrow D X$. Terbukti bahwa limiting distribution dari $W\_{n}$ adalah $X$.

## 5.13

> Let $X$ : Random variable, with $X\sim \chi^2(50)$
>
> Approximate $\operatorname{Pr}(40\<X<60)$

**Answer**

## 5.15

> Let
>
> - $Z\_{n}$ : Sequence of random variable, with $Z\_{n}\sim P(n)$
> - $Y\_{n}=(Z\_{n}-n)/\sqrt{ n }$
>
> Show that the limiting distribution of $Y\_{n}$ is normal with mean zero and variance $1$.

**Answer**

Diketahui mgf dari distribusi $P(n)$ adalah $M\_{Z\_{n}}=e^{n(e^t-1)}$. Dapat diperoleh mgf dari $M\_{Y\_{n}}$:
$$
\begin{align}
M\_{Y\_{n}}(t) & = E\left\[e^{tY\_{n}}\right] \\
& = E\left\[e^{t\cdot \frac{Z\_{n}-n}{\sqrt{ n }} }\right] \\
& = e^{-t\sqrt{ n }}E\left\[e^{ t/\sqrt{ n }Z\_{n} }\right] \\
& = e^{-t\sqrt{ n }}M\_{Z\_{n}}\left( \frac{t}{\sqrt{ n }} \right) \\
& = e^{-t\sqrt{ n }}e^{n(e^{t/\sqrt{ n }}-1)}
\end{align}
$$

Menggunakan [[Taylor Series#Extra Maclaurun series|Maclaurun series]] pada $f(x)=e^x$, perluaskan $e^{t/\sqrt{ n }}$ menjadi
$$
e^{t/\sqrt{ n }} = 1+\frac{t}{\sqrt{ n }} + \frac{t^2}{2n} + o\left( \frac{1}{n} \right) = \sum\_{n=0}^\infty \frac{(t/\sqrt{ n })^n}{n!}
$$

Sehingga diperoleh
$$
\begin{align}

M\_{Y\_{n}}(t) & = e^{-t\sqrt{ n }}e^{n(e^{t/\sqrt{ n }}-1)} \\

& = e^{-t\sqrt{ n }} e^{n\left( t/\sqrt{ n } + t^2/2n + o(1/n) \right)} \\

& = e^{-t\sqrt{ n }} e^{t\sqrt{ n }+t^2/2+o(1)} \\

& = e^{t^2/2+o(1)} \\

\lim\_{ n \to \infty } M\_{Y\_{n}}(t) & = \lim\_{ n \to \infty } e^{t^2/2+o(1)} \\

& = e^{t^2/2}

\end{align}
$$

Misalkan $X$ variabel acak dengan berdistribusi $N(0,1)$. Artinya, $M\_{X}(t)=e^{t^2/2}$. Berdasarkan [[mathstat5.2#Theorem 5.2.10 MGF technique|teorema 5.2.10]], karena $\lim\_{ n \to \infty }M\_{Y\_{n}}(t)=M\_{X}(t)$, maka $Y\_{n}\xrightarrow D X$, sehingga $Y\_{n}\xrightarrow D N(0,1)$. Terbukti bahwa limiting distribution dari $Y\_{n}$ adalah distribusi normal dengan mean $0$ dan variansi $1$.
