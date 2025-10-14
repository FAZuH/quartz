---
{"publish":true,"aliases":["5.2 Convergence in Distribution.md"],"created":"2025-10-14T04:15:27.071+07:00","modified":"2025-10-14T04:15:27.071+07:00","published":"2025-10-14T04:15:27.071+07:00","cssclasses":"","creation-time":"2025-06-24 04:00","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---

<< [[3 Reference/mathstat5.1\|5.1 Convergence in Probability.md]] | [[3 Reference/mathstat5.3\|5.3 Central Limit Theorem.md]] >>

## Definition 5.2.1: Converges in distribution
![[3 Reference/Def-convergence-in-probability#Definition]]

## Remark 5.2.2: Stirling's formula
> In advanced calculus, the following approximation is derived:
> $$
> \Gamma(k+1) \approx \sqrt{ 2\pi }k^{k+1/2}e^{-k}
> $$

## Theorem 5.2.1
> $$X_{n}\xrightarrow{P}X \implies X_{n}\xrightarrow{D}X$$

## Theorem 5.2.2
> $$X_{n}\xrightarrow{D}b \iff X_{n}\xrightarrow{P}b$$

> [!note]
> Although in ![[3 Reference/structure/Introduction to Mathematical Statistics#^reference-mathematicalstatistics-1]] it is said stated that $X_{n}\xrightarrow{D}b \implies X_{n}\xrightarrow{P}b$, the converse is actually true. So we use $\iff$ instead.

## Theorem 5.2.3
> Suppose
> - $X_{n}\xrightarrow DX$
> - $Y_{n}\xrightarrow P0$
> 
> Then
> $$
> X_{n}+Y_{n}\xrightarrow DX
> $$

## Theorem 5.2.4
> Suppose
> - $X_{n}\xrightarrow DX$
> - $g:\mathcal{S}\to X$ is [[3 Reference/5.1 Continuous Functions#5.1.5 Definition Continuous function on a set\|continuous]]
> 
> Then
> $$
> g(X_{n})\xrightarrow D g(X)
> $$

## Theorem 5.2.5: Slutsky's theorem
> Let
> - $X_{n},X,A_{n},B_{n}$ : Random variables
> - $a,b$ : Constants
> 
> If
> - $X_{n}\xrightarrow D X$
> - $X_{n}\xrightarrow P a$
> - $B_{n}\xrightarrow P b$
> 
> Then
> $$
> A_{n}+B_{n}X_{n}\xrightarrow D a + bX
> $$


## Definition 5.2.2: Bounded in probability
![[3 Reference/Def-bounded-in-probability#Definition]]

## Theorem 5.2.6
> Let
> - $\{ X_{n} \}$ : Sequence of random variables
> - $X$ : Random variable
> 
> If
> $$
> X_{n}\xrightarrow D X
> $$
> 
> Then $X_{n}$ is bounded in probability

## Theorem 5.2.7
> Let $\{ X_{n} \}, \{ Y_{n} \}$ : Sequences of random variables
> 
> Suppose
> - $\{ X_{n} \}$ bounded in probability
> - $Y_{n}\xrightarrow P 0$
> 
> Then
> $$
> X_{n}Y_{n}\xrightarrow P 0
> $$

#TODO: Make sense of 5.2.8, 5.2.9
## Theorem 5.2.8
> Let $\{ Y_{n} \}$ : Sequence of random variables
> 
> Suppose
> - $\{ Y_{n} \}$ bounded in probability
> - $X_{n} = o_{p}(Y_{n})$
> 
> Then $X_{n}\xrightarrow P 0$ 

## Theorem 5.2.9
> Let $\{ X_{n} \}$ : Sequence of random variables
> 
> Suppose
> - $\sqrt{ n }(X_{n}-\theta)\xrightarrow D N(0,\sigma^2)$
> - $g(x)$ is differentiable at $\theta$
> - $g'(\theta)\neq 0$
> 
> Then
> $$
> \sqrt{ n }[g(X_{n}) - g(\theta)] \xrightarrow D N(0, \sigma^2(g'(\theta))^2)
> $$

## Theorem 5.2.10: MGF technique
> Let
> - $\{ X_{n} \}$ : Sequence of random variables, with
> 	- [[3 Reference/mathstat1.9#Definition 1.9.3 Moment generating function (mgf)\|mgf]] $M_{X_{n}}(t)$ which exists for $-h<t<h$ for all $n$
> - $X$ : Random variable, with
> 	- mgf $M(t)$ which exists for $|t|\leq h_{1}\leq h$
> 
> If
> $$
> \lim_{ n \to \infty } M_{X_{n}}(t)=M(t),\quad\forall|t|\leq h_{1}
> $$
> 
> Then
> $$
> X_{n}\xrightarrow D X
> $$

> [!note]
> The MGF uniquely determines a distribution (when it exists in a neighborhood of zero). So **if the MGFs converge, the underlying distributions must also converge**.

## Theorem 0
> Let
> - $\{ X_{n} \}$ : Sequence of random variables
> - $c$ : Constant
> 
> Then
> $$
> X_{n} \xrightarrow P c \iff 
> X_n \xrightarrow{D} c
> $$
> [^1]

> [!note]
> For convergence to a constant $c$, convergence in probability and convergence in distribution are equivalent.

## Theorem 1
> Let
> - $U_{n}$ : Random variable
> - $F_{n}(u)$ : cdf of $U_{n}$
> - $c\neq0$
> 
> Then
> $$U_{n}\xrightarrow P c \implies\frac{U_{n}}{c}\xrightarrow P 1$$

## Theorem 2
> Let
> - $U_{n}$ : Random variable
> - $F_{n}(u)$ : cdf of $U_{n}$
> - $c\in \mathbb{P}$
> 
> If
> - $U_{n}\xrightarrow P c$
> - $\operatorname{Pr}(U_{n}<0)=0, \quad \forall n=1,2,\dots$
> 
> Then
> $$
> \sqrt{ U_{n} } \xrightarrow{P} \sqrt{ c }
> $$

## Theorem 2.5
> Let
> - $U_{n}, V_{n}$ : Sequences of random variables
> - $c,d>0$ : Constants
> 
> If
> - $U_{n}\xrightarrow P c$
> - $V_{n}\xrightarrow P d$
> 
> Then
> - $U_{n}V_{n}\xrightarrow P cd$
> - $\frac{U_{n}}{V_{n}}\xrightarrow P \frac{c}{d},\quad d\neq 0$

## Theorem 3
> Let
> - $U_{n}$ : Random variable
> - $V_{n}$ : Random variable
> - $W_{n} = U_{n}/V_{n}$
> 
> If
> - $U_{n}\xrightarrow D F(u)$
> - $V_{n}\xrightarrow P 1$
> 
> Then
> $$
> W_{n} \xrightarrow{D} F(w)
> $$

## Proposition 5.2.16
> If $$\lim_{ n \to \infty }\phi(n)=0$$
>
> Then
> $$
> \begin{align}
> \lim_{ n \to \infty } \left[ 1+\frac{b}{n} + \frac{\phi(n)}{n} \right]^{cn} & = \lim_{ n \to \infty } \left( 1+\frac{b}{n} \right)^{cn} \\
>  & = e^{bc}
> \end{align}
> $$

## Exercise

### Exercise 5.1 of Hogg & Craig 5th ed.

> Let $\bar{X}_{n}$ denote the mean of a random sample of size $n$ from a distribution that is $N(\mu, \sigma^2)$. Find the limiting distribution of $\bar{X}_{n}$.
> 
> Based on [Theorem 5.1.1: Weak law of large numbers](mathstat5.1.md#Theorem%205.1.1%20Weak%20law%20of%20large%20numbers), 
> $$
> \bar{X}_{n}\xrightarrow P\mu
> $$
> 
> Consequently, the limiting distribution of $\bar{X}_{n}$ is $\mu$.

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

### Hogg & Craig 5th ed. 5.10.

Let
- $Y_{n}$ : $n$-th [[3 Reference/mathstat4.4#Definition Order statistics\|Order statistic]] from [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random sample]] of size $n$, with
	- $Y_{n}\sim U(0,\theta)$

Prove that $Z_{n}=\sqrt{ Y_{n} }$ converges in probability to $\sqrt{ \theta }$

**Answer**

> [!quote] Dari Example 1 Section 5.1
> $Y_{n}$ converges in distribution to a random variable that has a  degenerate distribution at the point $y=\theta$.

Artinya, $Y_{n}\xrightarrow D \theta$. Berdasarkan [[3 Reference/mathstat5.2#Theorem 5.2.2\|teorema 5.2.2]], diperoleh $Y_{n}\xrightarrow P \theta$. Misalkan $Z_{n} = g(Y_{n}) = \sqrt{ Y_{n} }$. Berdasarkan [[3 Reference/mathstat5.1#Theorem 5.1.4\|teorema 5.1.4]], diperoleh $Z_{n}\xrightarrow P \theta$, sehingga terbukti bahwa $Z_{n}=\sqrt{ Y_{n} }$ konvergen dalam probabilitas ke $\sqrt{ \theta }$

### Hogg & Craig 5th ed. 5.12.

Let
- $Z_{n}$ : Sequence of random variables, with $Z_{n}\sim\chi^2(n)$
- $W_{n} = Z_{n}/n^2$

Find the limiting distribution of $W_{n}$

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

### Hogg & Craig 5th ed. 5.13.

Let
- $X$ : Random variable, with
	- $X\sim \chi^2(50)$

Approximate $\operatorname{Pr}(40<X<60)$

**Answer**

### Hogg & Craig 5th ed. 5.15.

Let
- $Z_{n}$ : Sequence of random variable, with $Z_{n}\sim P(n)$
- $Y_{n}=(Z_{n}-n)/\sqrt{ n }$ 

Show that the limiting distribution of $Y_{n}$ is normal with mean zero and variance $1$.

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

### Example 1
![[assets/Pasted image 20250702162934.png]]
![[assets/Pasted image 20250702162947.png]]

### Example 2

![[assets/Pasted image 20250702162907.png]]

[^1]: Taken from Theorem 1 in Section 5.2: Convergence in Probability of Hogg & Craig 5th ed.

