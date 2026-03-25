---
publish: true
aliases:
  - 5.2 Convergence in Distribution.md
created: 2026-03-25T15:22:40.611+07:00
modified: 2026-03-25T15:22:40.611+07:00
published: 2026-03-25T15:22:40.611+07:00
creation-time: 2025-06-24 04:00
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat5.1|5.1 Convergence in Probability.md]] | [[mathstat5.3|5.3 Central Limit Theorem.md]] >>

## Definition 5.2.1: Converges in distribution

![[Def-convergence-in-distribution#Definition]]

## Remark 5.2.2: Stirling's formula

> In advanced calculus, the following approximation is derived:
> $$
> \Gamma(k+1) \approx \sqrt{ 2\pi }k^{k+1/2}e^{-k}
> $$

## Theorem 5.2.1

> $$X\_{n}\xrightarrow{P}X \implies X\_{n}\xrightarrow{D}X$$

## Theorem 5.2.2

> $$X\_{n}\xrightarrow{D}b \iff X\_{n}\xrightarrow{P}b$$

> [!note]
> Although in ![[Introduction to Mathematical Statistics#^reference-mathematicalstatistics-1]] it is said stated that $X\_{n}\xrightarrow{D}b \implies X\_{n}\xrightarrow{P}b$, the converse is actually true. So we use $\iff$ instead.

## Theorem 5.2.3

> Suppose
>
> - $X\_{n}\xrightarrow DX$
> - $Y\_{n}\xrightarrow P0$
>
> Then
> $$
> X\_{n}+Y\_{n}\xrightarrow DX
> $$

## Theorem 5.2.4

> Suppose
>
> - $X\_{n}\xrightarrow DX$
> - $g:\mathcal{S}\to X$ is [[5.1 Continuous Functions#5.1.5 Definition Continuous function on a set|continuous]]
>
> Then
> $$
> g(X\_{n})\xrightarrow D g(X)
> $$

## Theorem 5.2.5: Slutsky's theorem

> Let
>
> - $X\_{n},X,A\_{n},B\_{n}$ : Random variables
> - $a,b$ : Constants
>
> If
>
> - $X\_{n}\xrightarrow D X$
> - $X\_{n}\xrightarrow P a$
> - $B\_{n}\xrightarrow P b$
>
> Then
> $$
> A\_{n}+B\_{n}X\_{n}\xrightarrow D a + bX
> $$

## Definition 5.2.2: Bounded in probability

![[Def-bounded-in-probability#Definition]]

## Theorem 5.2.6

> Let
>
> - ${ X\_{n} }$ : Sequence of random variables
> - $X$ : Random variable
>
> If
> $$
> X\_{n}\xrightarrow D X
> $$
>
> Then $X\_{n}$ is bounded in probability

## Theorem 5.2.7

> Let ${ X\_{n} }, { Y\_{n} }$ : Sequences of random variables
>
> Suppose
>
> - ${ X\_{n} }$ bounded in probability
> - $Y\_{n}\xrightarrow P 0$
>
> Then
> $$
> X\_{n}Y\_{n}\xrightarrow P 0
> $$

#TODO: Make sense of 5.2.8, 5.2.9

## Theorem 5.2.8

> Let ${ Y\_{n} }$ : Sequence of random variables
>
> Suppose
>
> - ${ Y\_{n} }$ bounded in probability
> - $X\_{n} = o\_{p}(Y\_{n})$
>
> Then $X\_{n}\xrightarrow P 0$

## Theorem 5.2.9

> Let ${ X\_{n} }$ : Sequence of random variables
>
> Suppose
>
> - $\sqrt{ n }(X\_{n}-\theta)\xrightarrow D N(0,\sigma^2)$
> - $g(x)$ is differentiable at $\theta$
> - $g'(\theta)\neq 0$
>
> Then
> $$
> \sqrt{ n }\[g(X\_{n}) - g(\theta)] \xrightarrow D N(0, \sigma^2(g'(\theta))^2)
> $$

## Theorem 5.2.10: MGF technique

> Let
>
> - ${ X\_{n} }$ : Sequence of random variables, with
>   - [[mathstat1.9#Definition 1.9.3 Moment generating function (mgf)|mgf]] $M\_{X\_{n}}(t)$ which exists for $-h\<t\<h$ for all $n$
> - $X$ : Random variable, with
>   - mgf $M(t)$ which exists for $|t|\leq h\_{1}\leq h$
>
> If
> $$
> \lim\_{ n \to \infty } M\_{X\_{n}}(t)=M(t),\quad\forall|t|\leq h\_{1}
> $$
>
> Then
> $$
> X\_{n}\xrightarrow D X
> $$

> [!note]
> The MGF uniquely determines a distribution (when it exists in a neighborhood of zero). So **if the MGFs converge, the underlying distributions must also converge**.

## Theorem 0

> Let
>
> - ${ X\_{n} }$ : Sequence of random variables
> - $c$ : Constant
>
> Then
> $$
> X\_{n} \xrightarrow P c \iff
> X\_n \xrightarrow{D} c
> $$
> \[^1]

> [!note]
> For convergence to a constant $c$, convergence in probability and convergence in distribution are equivalent.

## Theorem 1

> Let
>
> - $U\_{n}$ : Random variable
> - $F\_{n}(u)$ : cdf of $U\_{n}$
> - $c\neq0$
>
> Then
> $$U\_{n}\xrightarrow P c \implies\frac{U\_{n}}{c}\xrightarrow P 1$$

## Theorem 2

> Let
>
> - $U\_{n}$ : Random variable
> - $F\_{n}(u)$ : cdf of $U\_{n}$
> - $c\in \mathbb{P}$
>
> If
>
> - $U\_{n}\xrightarrow P c$
> - $\operatorname{Pr}(U\_{n}<0)=0, \quad \forall n=1,2,\dots$
>
> Then
> $$
> \sqrt{ U\_{n} } \xrightarrow{P} \sqrt{ c }
> $$

## Theorem 2.5

> Let
>
> - $U\_{n}, V\_{n}$ : Sequences of random variables
> - $c,d>0$ : Constants
>
> If
>
> - $U\_{n}\xrightarrow P c$
> - $V\_{n}\xrightarrow P d$
>
> Then
>
> - $U\_{n}V\_{n}\xrightarrow P cd$
> - $\frac{U\_{n}}{V\_{n}}\xrightarrow P \frac{c}{d},\quad d\neq 0$

## Theorem 3

> Let
>
> - $U\_{n}$ : Random variable
> - $V\_{n}$ : Random variable
> - $W\_{n} = U\_{n}/V\_{n}$
>
> If
>
> - $U\_{n}\xrightarrow D F(u)$
> - $V\_{n}\xrightarrow P 1$
>
> Then
> $$
> W\_{n} \xrightarrow{D} F(w)
> $$

## Proposition 5.2.16

> If $$\lim\_{ n \to \infty }\phi(n)=0$$
>
> Then
> $$
> \begin{align}
> \lim\_{ n \to \infty } \left\[ 1+\frac{b}{n} + \frac{\phi(n)}{n} \right]^{cn} & = \lim\_{ n \to \infty } \left( 1+\frac{b}{n} \right)^{cn} \\
> & = e^{bc}
> \end{align}
> $$

## Exercise

### Exercise 5.1 of Hogg & Craig 5th ed.

> Let $\bar{X}_{n}$ denote the mean of a random sample of size $n$ from a distribution that is $N(\mu, \sigma^2)$. Find the limiting distribution of $\bar{X}_{n}$.
>
> Based on [Theorem 5.1.1: Weak law of large numbers](mathstat5.1.md#Theorem%205.1.1%20Weak%20law%20of%20large%20numbers),
> $$
> \bar{X}\_{n}\xrightarrow P\mu
> $$
>
> Consequently, the limiting distribution of $\bar{X}\_{n}$ is $\mu$.

### Hogg & Craig 5th ed. 5.7.

Let

- $Y\_{n}$ : Sequence of [[mathstat1.5#Definition 1.5.1 Random variable|random variable]], with
  - $Y\_{n}\sim b(n,p)$ ([[Discrete Distributions#Discrete distribution cheatsheet|check here]])

Prove that $1-Y\_{n}/n$ [[mathstat5.1#Definition 5.1.1 Convergence in probability|converges in probability]] to $1-p$

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

### Hogg & Craig 5th ed. 5.10.

Let

- $Y\_{n}$ : $n$-th [[mathstat4.4#Definition Order statistics|Order statistic]] from [[mathstat4.1#Definition 4.1.1 Random sample|random sample]] of size $n$, with
  - $Y\_{n}\sim U(0,\theta)$

Prove that $Z\_{n}=\sqrt{ Y\_{n} }$ converges in probability to $\sqrt{ \theta }$

**Answer**

> [!quote] Dari Example 1 Section 5.1
> $Y\_{n}$ converges in distribution to a random variable that has a  degenerate distribution at the point $y=\theta$.

Artinya, $Y\_{n}\xrightarrow D \theta$. Berdasarkan [[mathstat5.2#Theorem 5.2.2|teorema 5.2.2]], diperoleh $Y\_{n}\xrightarrow P \theta$. Misalkan $Z\_{n} = g(Y\_{n}) = \sqrt{ Y\_{n} }$. Berdasarkan [[mathstat5.1#Theorem 5.1.4|teorema 5.1.4]], diperoleh $Z\_{n}\xrightarrow P \theta$, sehingga terbukti bahwa $Z\_{n}=\sqrt{ Y\_{n} }$ konvergen dalam probabilitas ke $\sqrt{ \theta }$

### Hogg & Craig 5th ed. 5.12.

Let

- $Z\_{n}$ : Sequence of random variables, with $Z\_{n}\sim\chi^2(n)$
- $W\_{n} = Z\_{n}/n^2$

Find the limiting distribution of $W\_{n}$

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

### Hogg & Craig 5th ed. 5.13.

Let

- $X$ : Random variable, with
  - $X\sim \chi^2(50)$

Approximate $\operatorname{Pr}(40\<X<60)$

**Answer**

### Hogg & Craig 5th ed. 5.15.

Let

- $Z\_{n}$ : Sequence of random variable, with $Z\_{n}\sim P(n)$
- $Y\_{n}=(Z\_{n}-n)/\sqrt{ n }$

Show that the limiting distribution of $Y\_{n}$ is normal with mean zero and variance $1$.

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

### Example 1

![[assets/Pasted image 20250702162934.png]]
![[assets/Pasted image 20250702162947.png]]

### Example 2

![[assets/Pasted image 20250702162907.png]]

\[^1]: Taken from Theorem 1 in Section 5.2: Convergence in Probability of Hogg & Craig 5th ed.
