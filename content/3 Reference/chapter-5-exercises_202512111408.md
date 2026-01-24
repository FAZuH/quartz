---
publish: true
aliases:
  - Chapter 5 Exercises
created: 2025-12-11T14:08:38.908+07:00
modified: 2025-12-11T14:09:49.888+07:00
published: 2025-12-11T14:09:49.888+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-11 14:08
status: baby
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---


## 5.7

> Let $Y_{n}$ : Sequence of [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|random variable]], with $Y_{n}\sim b(n,p)$ ([[3 Reference/Discrete Distributions#Binomial distribution\|check here]])
> 
> Prove that $1-Y_{n}/n$ [[3 Reference/mathstat5.1#Definition 5.1.1 Convergence in probability\|converges in probability]] to $1-p$

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

## 5.8

> Let $S_n^2$ denote the [[3 Reference/Def-variance\|variance]] of a [[3 Reference/Def-random-sample\|random sample]] of size $n$ from a distribution that is $N(\mu, \sigma^2)$. Prove that $nS_n^2/(n-1)$ [[3 Reference/Def-convergence-in-probability\|converges in probability]] to $\sigma^2$.

**Answer**

Diketahui $S_n^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X})^2$ adalah [[3 Reference/Def-variance\|varians]] sampel dari distribusi $N(\mu, \sigma^2)$ dengan $S_{n}^{2}\sim N\left( \sigma^{2}, \frac{2\sigma^4}{n-1} \right)$.

Misalkan $T_n = \frac{n S_n^2}{n-1}$. Maka,
$$
\begin{align}
E[T_n] & = E\left[\frac{n S_n^2}{n-1}\right] \\
 & = \frac{n}{n-1} E[S_n^2] \\
 & = \frac{n}{n-1} \sigma^2 \\


\text{Var}(T_n) & = \text{Var}\left(\frac{n S_n^2}{n-1}\right)  \\
 & = \left(\frac{n}{n-1}\right)^2 \text{Var}(S_n^2)  \\
 & = \left(\frac{n}{n-1}\right)^2 \frac{2\sigma^4}{n-1}  \\
 & = \frac{2n^2 \sigma^4}{(n-1)^3}.
\end{align}
$$

Berdasarkan [[3 Reference/mathstat1.10#Theorem 1.10.3 Chebyshev’s inequality\|teorema Chebyshev]], untuk setiap $\epsilon > 0$ berlaku
$$
P\left(\left|T_n - \sigma^2\right| > \epsilon\right) \leq \frac{\text{Var}(T_n)}{\epsilon^2} = \frac{2n^2 \sigma^4}{(n-1)^3 \epsilon^2}.
$$

Karena $\lim_{n \to \infty} \frac{2n^2 \sigma^4}{(n-1)^3 \epsilon^2} = 0$, maka:
$$
\lim_{n \to \infty} P\left(\left|T_n - \sigma^2\right| > \epsilon\right) = 0.
$$

Berdasarkan [[3 Reference/mathstat5.1#Definition 5.1.1 Convergence in probability\|definisi konvergen dalam probabilitas]], terbukti bahwa $\frac{n S_n^2}{n-1} \xrightarrow{P} \sigma^2$.

$\therefore$ Terbukti bahwa $n S_n^2/(n-1)$ konvergen dalam probabilitas ke $\sigma^2$.

## 5.10

> Let $Y_{n}$ : $n$-th [[3 Reference/mathstat4.4#Definition Order statistics\|Order statistic]] from [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random sample]] of size $n$, with $Y_{n}\sim U(0,\theta)$
> 
> Prove that $Z_{n}=\sqrt{ Y_{n} }$ converges in probability to $\sqrt{ \theta }$

**Answer**

> [!quote] Dari Example 1 Section 5.1
> $Y_{n}$ converges in distribution to a random variable that has a  degenerate distribution at the point $y=\theta$.

Artinya, $Y_{n}\xrightarrow D \theta$. Berdasarkan [[3 Reference/mathstat5.2#Theorem 5.2.2\|teorema 5.2.2]], diperoleh $Y_{n}\xrightarrow P \theta$. Misalkan $Z_{n} = g(Y_{n}) = \sqrt{ Y_{n} }$. Berdasarkan [[3 Reference/mathstat5.1#Theorem 5.1.4\|teorema 5.1.4]], diperoleh $Z_{n}\xrightarrow P \theta$, sehingga terbukti bahwa $Z_{n}=\sqrt{ Y_{n} }$ konvergen dalam probabilitas ke $\sqrt{ \theta }$

## 5.11

> Let $X_n$ have a [[3 Reference/Continuous Distributions#Gamma distribution\|gamma distribution]] with parameter $\alpha = n$ and $\beta$, where $\beta$ is not a function of $n$. Let $Y_n = X_n/n$. Find the [[3 Reference/Def-convergence-in-distribution\|limiting distribution]] of $Y_n$.

**Answer**

Diketahui $X_n \sim \Gamma(n, \beta)$, memiliki [[3 Reference/Def-moment-generating-function-(mgf)\|mgf]] $M_{X_n}(t) = (1 - \beta t)^{-n}$, untuk $t < \frac{1}{\beta}$. 

Misalkan $Y_n = \frac{X_n}{n}$. mgf dari $Y_n$ adalah:
$$
\begin{align}
M_{Y_n}(t) &= E[e^{t Y_n}]  \\
 & = E\left[e^{t \cdot \frac{X_n}{n}}\right]  \\
 & = M_{X_n}\left(\frac{t}{n}\right) \\
&= \left(1 - \beta \frac{t}{n}\right)^{-n}  \\
 & = \left(1 - \frac{\beta t}{n}\right)^{-n}.
\end{align}
$$

Karena $\lim_{ n \to \infty } \left( 1+\frac{b}{n} \right)^{cn} = e^{bc}$, maka $\lim_{n \to \infty} M_{Y_n}(t) = e^{\beta t}$

Misalkan $X$ adalah variabel acak dengan mgf $M_X(t) = e^{\beta t}$. $X$ adalah mgf dari [[3 Reference/Def-degenerate-distribution\|distribusi degenerate]] di $\beta$, yaitu $P(X = \beta) = 1$. Berdasarkan [[3 Reference/mathstat5.2#Theorem 5.2.10 MGF technique\|teorema teknik mgf]], karena $\lim_{n \to \infty} M_{Y_n}(t) = M_X(t)$, maka $Y_n \xrightarrow{D} X$.

$\therefore$ Distribusi limit dari $Y_n$ adalah distribusi degenerate di $\beta$.

## 5.12

> Let
> - $Z_{n}$ : Sequence of random variables, with $Z_{n}\sim\chi^2(n)$
> - $W_{n} = Z_{n}/n^2$
> 
> Find the limiting distribution of $W_{n}$

**Answer**

Diketahui mgf dari [[3 Reference/Continuous Distributions#Chi-square distribution\|distribusi Chi-square]] adalah $M_{Z_{n}}(t)=(1-2t)^{-n/2}$, untuk $t< \frac{1}{2}$. Karena $W_{n}=\frac{Z_{n}}{n^2}$, mgf dari $W_{n}$ dapat diperoleh dengan
$$
\begin{align}
M_{W_{t}}  & = E[e^{tW_{n}}] \\
 & = E\left[e^{\frac{t}{n^2}Z_{n}}\right] \\
 & = M_{Z_{n}}\left( \frac{t}{n^2} \right) \\
 & = \left( 1- \frac{2t}{n^2} \right)^{-n/2}, \quad \text{Untuk } \frac{t}{n^2} < \frac{1}{2}\\
\end{align}
$$

Karena $\lim_{ n \to \infty }\left( 1+\frac{b}{n} \right)^{cn}=e^{bc}$, dengan memisalkan $b=-2t$, $c=1$, dan $n=n^2$, dapat diperoleh
$$
\begin{align}
M_{W_{n}}(t) & = \left( 1 - \frac{2t}{n^2} \right)^{-n/2} \\

& = \left[ \left( 1-\frac{2t}{n^2} \right)^{n^2} \right]^{-1/(2n)} \\

\lim_{ n \to \infty }M_{W_{n}}(t)  & = \lim_{ n \to \infty } \left(e^{-2t}\right)^{-1/(2n)}\\

 & = \lim_{ n \to \infty } e^{t/n} \\
 
 & = e^{0} \\
 
 & = 1
\end{align}
$$

Misalkan $X$ variabel acak dengan mgf $M_{X}(t)$. Andaikan $X$ berdistribusi degenerate ke $0$, yang berakibat $M_{X}(t)=E\left[e^{tX}\right]=e^{t\cdot 0} = 1$. Karena $\lim_{ n \to \infty }M_{W_{n}}(t) = M_{X}(t)$, berdasarkan [[3 Reference/mathstat5.2#Theorem 5.2.10 MGF technique\|teorema 5.2.10]], diperoleh $W_{n}\xrightarrow D X$. Terbukti bahwa limiting distribution dari $W_{n}$ adalah $X$.

## 5.13

> Let $X$ : Random variable, with $X\sim \chi^2(50)$
> 
> Approximate $\operatorname{Pr}(40<X<60)$

**Answer**

## 5.15

> Let 
> - $Z_{n}$ : Sequence of random variable, with $Z_{n}\sim P(n)$
> - $Y_{n}=(Z_{n}-n)/\sqrt{ n }$ 
> 
> Show that the limiting distribution of $Y_{n}$ is normal with mean zero and variance $1$.

**Answer**

Diketahui mgf dari distribusi $P(n)$ adalah $M_{Z_{n}}=e^{n(e^t-1)}$. Dapat diperoleh mgf dari $M_{Y_{n}}$:
$$
\begin{align}
M_{Y_{n}}(t) & = E\left[e^{tY_{n}}\right] \\
 & = E\left[e^{t\cdot \frac{Z_{n}-n}{\sqrt{ n }} }\right] \\
 & = e^{-t\sqrt{ n }}E\left[e^{ t/\sqrt{ n }Z_{n} }\right] \\
 & = e^{-t\sqrt{ n }}M_{Z_{n}}\left( \frac{t}{\sqrt{ n }} \right) \\
 & = e^{-t\sqrt{ n }}e^{n(e^{t/\sqrt{ n }}-1)}
\end{align}
$$

Menggunakan [[3 Reference/Taylor Series#Extra Maclaurun series\|Maclaurun series]] pada $f(x)=e^x$, perluaskan $e^{t/\sqrt{ n }}$ menjadi
$$
e^{t/\sqrt{ n }} = 1+\frac{t}{\sqrt{ n }} + \frac{t^2}{2n} + o\left( \frac{1}{n} \right) = \sum_{n=0}^\infty \frac{(t/\sqrt{ n })^n}{n!}
$$

Sehingga diperoleh
$$
\begin{align}

M_{Y_{n}}(t) & = e^{-t\sqrt{ n }}e^{n(e^{t/\sqrt{ n }}-1)} \\

& = e^{-t\sqrt{ n }} e^{n\left( t/\sqrt{ n } + t^2/2n + o(1/n) \right)} \\

& = e^{-t\sqrt{ n }} e^{t\sqrt{ n }+t^2/2+o(1)} \\

& = e^{t^2/2+o(1)} \\

\lim_{ n \to \infty } M_{Y_{n}}(t) & = \lim_{ n \to \infty } e^{t^2/2+o(1)} \\

& = e^{t^2/2}

\end{align}
$$

Misalkan $X$ variabel acak dengan berdistribusi $N(0,1)$. Artinya, $M_{X}(t)=e^{t^2/2}$. Berdasarkan [[3 Reference/mathstat5.2#Theorem 5.2.10 MGF technique\|teorema 5.2.10]], karena $\lim_{ n \to \infty }M_{Y_{n}}(t)=M_{X}(t)$, maka $Y_{n}\xrightarrow D X$, sehingga $Y_{n}\xrightarrow D N(0,1)$. Terbukti bahwa limiting distribution dari $Y_{n}$ adalah distribusi normal dengan mean $0$ dan variansi $1$.

