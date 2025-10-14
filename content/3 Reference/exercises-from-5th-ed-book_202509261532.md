---
{"publish":true,"aliases":["Exercises from 5th ed Book"],"created":"2025-10-14T04:15:27.075+07:00","modified":"2025-10-14T04:15:27.075+07:00","published":"2025-10-14T04:15:27.075+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-26 15:32","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
---

## Chapter 4

### 4.59


> Let $Y_1 < Y_2 < Y_3 < Y_4 < Y_5$ denote the [[3 Reference/Def-order-statistics\|order statistics]] of a [[3 Reference/Def-random-sample\|random sample]] of size 5 from a distribution having [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x) = e^{-x}$, $0 < x < \infty$, zero elsewhere. Show that $Z_1 = Y_2$ and $Z_2 = Y_4 - Y_2$ are independent.
> 
> Hint: First find the joint p.d.f. of $Y_2$ and $Y_4$.

**Answer**

Diketahui $f(x) = e^{-x}$ untuk $x > 0$, merupakan [[3 Reference/Continuous Distributions#Exponential distribution\|distribusi exponential]] dengan parameter $\lambda = 1$.

cdf dari distribusi eksponensial adalah: $$F(x) = 1 - e^{-x}, \quad x > 0$$

Berdasarkan teorema [[3 Reference/mathstat4.4#Marginal pdf of order statistics\|marginal pdf of order statistics]], joint marginal pdf dari $Y_i$ dan $Y_j$ dengan $i < j$ adalah:
$$
g_{i j}\left(y_i, y_j\right) = \begin{cases}
    \frac{n!}{(i-1)!(j-i-1)!(n-j)!}\left[F\left(y_i\right)\right]^{i-1}\left[F\left(y_j\right)-F\left(y_i\right)\right]^{j-i-1}\left[1-F\left(y_j\right)\right]^{n-j} f\left(y_i\right) f\left(y_j\right) & a<y_i<y_j<b \\ 
    0 & \text { elsewhere }
\end{cases}
$$

Untuk $Y_2$ dan $Y_4$ dengan $n = 5$, $i = 2$, $j = 4$:

$$
\begin{align}
g_{2,4}(y_2, y_4) & = \frac{5!}{(2-1)!(4-2-1)!(5-4)!} [F(y_2)]^{2-1} [F(y_4)-F(y_2)]^{4-2-1} [1-F(y_4)]^{5-4} f(y_2)f(y_4) \\
& = 120(1-e^{-u})(e^{-u}-e^{-v})(e^{-v})(e^{-u})(e^{-v}) \\
& = 120(1-e^{-u})(e^{-u}-e^{-v})e^{-u-2v}
\end{align}
$$

Misalkan $z_1 = u$ dan $z_2 = v - u$. Dapat diperoleh
$$
\begin{align}
g_{2,4}(y_2, y_4) & = 120(1-e^{-z_1})(e^{-z_1}-e^{-(z_1+z_2)})e^{-z_1-2(z_1+z_2)} \\
& = 120(1-e^{-z_1})(e^{-z_1}-e^{-z_1}e^{-z_2})e^{-3z_1-2z_2} \\
& = 120(1-e^{-z_1})e^{-z_1}(1-e^{-z_2})e^{-3z_1-2z_2} \\
& = 120(1-e^{-z_1})e^{-4z_1}(1-e^{-z_2})e^{-2z_2} \\
& = [120(1-e^{-z_1})e^{-4z_1}] \cdot [(1-e^{-z_2})e^{-2z_2}]
\end{align}
$$ 

Karena joint pdf $g_{2,4}(y_2, y_4)$ dapat diekspresikan sebagai $g(z_1) \cdot h(z_2)$, maka $Z_1$ dan $Z_2$ adalah independen.

$\therefore$ Terbukti bahwa $Z_1 = Y_2$ dan $Z_2 = Y_4 - Y_2$ adalah independen.

## Chapter 5
### 5.7

Let $Y_{n}$ : Sequence of [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|random variable]], with $Y_{n}\sim b(n,p)$ ([[3 Reference/Discrete Distributions#Binomial distribution\|check here]])

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

### 5.8

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

### 5.10

Let $Y_{n}$ : $n$-th [[3 Reference/mathstat4.4#Definition Order statistics\|Order statistic]] from [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random sample]] of size $n$, with $Y_{n}\sim U(0,\theta)$

Prove that $Z_{n}=\sqrt{ Y_{n} }$ converges in probability to $\sqrt{ \theta }$

**Answer**

> [!quote] Dari Example 1 Section 5.1
> $Y_{n}$ converges in distribution to a random variable that has a  degenerate distribution at the point $y=\theta$.

Artinya, $Y_{n}\xrightarrow D \theta$. Berdasarkan [[3 Reference/mathstat5.2#Theorem 5.2.2\|teorema 5.2.2]], diperoleh $Y_{n}\xrightarrow P \theta$. Misalkan $Z_{n} = g(Y_{n}) = \sqrt{ Y_{n} }$. Berdasarkan [[3 Reference/mathstat5.1#Theorem 5.1.4\|teorema 5.1.4]], diperoleh $Z_{n}\xrightarrow P \theta$, sehingga terbukti bahwa $Z_{n}=\sqrt{ Y_{n} }$ konvergen dalam probabilitas ke $\sqrt{ \theta }$

### 5.11

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

### 5.12

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

### 5.13

Let $X$ : Random variable, with $X\sim \chi^2(50)$

Approximate $\operatorname{Pr}(40<X<60)$

**Answer**

### 5.15

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

## Chapter 6

### 6.23

Let $\bar{X}$ denote the [[3 Reference/Def-mean\|mean]] of a [[3 Reference/Def-random-sample\|random sample]] of size 25 from a [[3 Reference/Continuous Distributions#Gamma distribution\|gamma-type distribution]] with $\alpha=4$ and $\beta>0$. Use the [[3 Reference/mathstat5.3#Theorem 5.3.1 Central limit theorem\|central limit theorem]] to find an approximate 0.954 [[3 Reference/def-confidence-interval_202507220823\|confidence Interval]] for $\mu$, the mean of the gamma distribution.

Hint: Base the confidence interval on the [[3 Reference/Def-random-variable\|random variable]] $(\bar{X}-4\beta)/(4\beta^2/25)^{1/2}=5\bar{X}/2\beta-10$

**Answer**
Untuk distribusi gamma dengan parameter $\alpha = 4$ dan $\beta$, diketahui:
$$
\begin{align} E[X] &= \alpha\beta = 4\beta = \mu\\
\text{Var}(X) &= \alpha\beta^2 = 4\beta^2 
\end{align}
$$

Berdasarkan [[3 Reference/mathstat5.3#Theorem 5.3.1 Central limit theorem\|teorema limit pusat]], untuk sampel berukuran $n = 25$:
$$
\begin{align}
\frac{\bar{X} - \mu}{\sqrt{\text{Var}(\bar{X})}} & = \frac{\bar{X} - 4\beta}{\sqrt{4\beta^2/25}}  \\
 & = \frac{\bar{X} - 4\beta}{2\beta/5} \\
& = \frac{5\bar{X}}{2\beta}-10 \xrightarrow{D} N(0,1)
\end{align}
$$

Karena diketahui $\mu=4\beta$, untuk confidence interval 95.4%, dengan $z_{0.023} = 2$, dapat diperoleh:
$$
\begin{align}
0.954  & = P\left(-2 < \frac{5\bar{X}}{2\beta} - 10 < 2\right)\\
&= P\left(-2 < \frac{5\bar{X}}{2\beta} - 10 < 2 \right)\\
&= P\left(8 < \frac{5\bar{X}}{2\beta} < 12 \right)\\
&= P\left(\frac{16\beta}{5} < \bar{X} < \frac{24\beta}{5} \right)\\
&= P\left(\frac{5\bar{X}}{24} < \beta < \frac{5\bar{X}}{16} \right)\\
&= P\left(\frac{5\bar{X}}{6} < 4\beta < \frac{5\bar{X}}{4} \right)\\
&= P\left(\frac{5\bar{X}}{6} < \mu < \frac{5\bar{X}}{4} \right)
\end{align}
$$

$\therefore$ Confidence interval 95.4% untuk $\mu$ adalah $\boxed{\left(\frac{5\bar{X}}{6}, \frac{5\bar{X}}{4}\right)}$

### 6.26

It is known that a [[3 Reference/Def-random-variable\|random variable]] $X$ has a [[3 Reference/Discrete Distributions#Poisson distribution\|Poisson distribution]] with parameter $\mu$. A sample of 200 observations from this population has a [[3 Reference/Def-mean\|mean]] equal to 3.4. Construct an approximate 90 percent [[3 Reference/def-confidence-interval_202507220823\|confidence Interval]] for $\mu$.

**Answer**

Untuk distribusi [[3 Reference/Discrete Distributions#Poisson distribution\|Poisson]] dengan parameter $\mu$, diketahui:
$$
\begin{align}
E[X] &= \mu\\
\text{Var}(X) &= \mu
\end{align}
$$

Berdasarkan [[3 Reference/mathstat5.3#Theorem 5.3.1 Central limit theorem\|teorema limit pusat]], untuk sampel berukuran besar $n = 200$:
$$\frac{\bar{X} - \mu}{\sqrt{\mu/n}} \xrightarrow{D} N(0,1)$$

Untuk confidence interval 90%, dengan $\alpha = 0.10$ sehingga $z_{0.05} = 1.645$, dapat diperoleh:
$$P\left(-1.645 < \frac{\bar{X} - \mu}{\sqrt{\mu/n}} < 1.645\right) = 0.90$$

Dengan $\bar{x} = 3.4$ dan $n = 200$, kita perlu menyelesaikan:
$$
\begin{align}
-1.645 &< \frac{3.4 - \mu}{\sqrt{\mu/200}} < 1.645\\
-1.645\sqrt{\frac{\mu}{200}} &< 3.4 - \mu < 1.645\sqrt{\frac{\mu}{200}}
\end{align}
$$

Karena $n$ besar, dapat diaproksimasikan dengan
$$\sqrt{\mu/n} \approx \sqrt{\bar{x}/n} = \sqrt{3.4/200} = \sqrt{0.017} = 0.1304$$

Sehingga:
$$
\begin{align}
-1.645(0.1304) &< 3.4 - \mu < 1.645(0.1304)\\
-0.2145 &< 3.4 - \mu < 0.2145\\
3.4 - 0.2145 &< \mu < 3.4 + 0.2145\\
3.1855 &< \mu < 3.6145
\end{align}
$$

$\therefore$ Confidence interval 90% untuk $\mu$ adalah $\boxed{(3.185, 3.615)}$

### 6.27

Let $Y_{1}<Y_{2}<\dots<Y_{n}$ denote the [[3 Reference/Def-order-statistics\|order statistics]] of a [[3 Reference/Def-random-sample\|random sample]] of size $n$ from a distribution that has [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x)=3x^2/\theta^3, 0<x<\theta$, zero elsewhere.

(a) Show that $\operatorname{Pr}(c<Y_{n}/\theta<1)=1-c^{3n}$, where $0<c<1$
(b) If $n$ is 4 and if the observed value of $Y$, is 2.3, what is a 95 percent
[[3 Reference/def-confidence-interval_202507220823\|confidence interval]] for 8?

**Answer**

#### 6.27.a

Diketahui cdf dari $X$:

$$F(x) = \int_0^x \frac{3t^2}{\theta^3} dt = \frac{x^3}{\theta^3}, \quad 0 < x < \theta$$

Berdasarkan [[3 Reference/mathstat4.4#CDF of order statistics\|CDF of order statistics]], maksimum $Y_n$ distribusinya adalah:
$$F_{Y_n}(y) = [F(y)]^n = \left(\frac{y^3}{\theta^3}\right)^n = \frac{y^{3n}}{\theta^{3n}}$$

Maka:
$$
\begin{align}
P(c < Y_n/\theta < 1) &= P(c\theta < Y_n < \theta)\\
&= F_{Y_n}(\theta) - F_{Y_n}(c\theta)\\
&= \frac{\theta^{3n}}{\theta^{3n}} - \frac{(c\theta)^{3n}}{\theta^{3n}}\\
&= \boxed{1 - c^{3n}}
\end{align}
$$

$\therefore$ Terbukti bahwa $\operatorname{Pr}(c<Y_{n}/\theta<1)=1-c^{3n}$

#### 6.27.b

Untuk $n = 4$ dan confidence itnerval 95%, berarti:
$$
\begin{align}
P(c < Y_4/\theta < 1) & = 1 - c^{12} = 0.95 \\
\iff c^{12} & = 0.05 \\
\iff c & = (0.05)^{1/12}  \\
 & = 0.7943
\end{align}
$$


Karena $P(c < Y_4/\theta < 1) = 0.95$ dan $Y_{4}=2.3$, dapat peroleh:
$$
\begin{align} \\
c &< \frac{Y_4}{\theta} < 1\\
\frac{Y_4}{1} &< \theta < \frac{Y_4}{c} \\
 Y_4 &< \theta < \frac{Y_4}{0.7943} \\
2.3 &< \theta < \frac{2.3}{0.7943}  \\
2.3 &< \theta < 2.896 
\end{align}
$$

$\therefore$ Confidence interval 95% untuk $\theta$ adalah $\boxed{(2.3, 2.896)}$

### 6.29

Let $X_{1},X_{2},\dots,X_{n}$ be a [[3 Reference/Def-random-sample\|random sample]] from a [[3 Reference/Continuous Distributions#Gamma distribution\|gamma distribution]] with known parameter $\alpha=3$ and unknown $\beta>0$. Discuss the construction of a [[3 Reference/def-confidence-interval_202507220823\|confidence interval]] for $\beta$. 

Hint: What is the distribution of $2\sum_{i=1}^nX_{i}/\beta$? Follow the procedure outlined in Exercise 6.28.

**Answer**

Dari [[3 Reference/common-distribution-equations_202507221712#Gamma Distribution Relationships\|Gamma Distribution Relationships]], diketahui bahwa jika $X_i \sim \text{Gamma}(\alpha, \beta)$, maka:
$$\frac{2X_i}{\beta} \sim \chi^2(2\alpha)$$

Sehingga untuk $\alpha = 3$:
$$\frac{2X_i}{\beta} \sim \chi^2(6)$$

Karena $X_1, X_2, \ldots, X_n$ saling bebas, maka:
$$
\begin{align}
\frac{2\sum_{i=1}^n X_i}{\beta} &= \sum_{i=1}^n \frac{2X_i}{\beta}\\
&\sim \chi^2(6n)
\end{align}
$$

Untuk konstruksi confidence interval $(1-\alpha)100\%$ :
$$
\begin{align}
1-\alpha & = P\left(\chi^2_{\alpha/2, 6n} < \frac{2\sum_{i=1}^n X_i}{\beta} < \chi^2_{1-\alpha/2, 6n}\right) \\
&= P\left( \chi^2_{\alpha/2, 6n} < \frac{2\sum_{i=1}^n X_i}{\beta} < \chi^2_{1-\alpha/2, 6n} \right)\\
&= \boxed{P\left( \frac{2\sum_{i=1}^n X_i}{\chi^2_{1-\alpha/2, 6n}} < \beta < \frac{2\sum_{i=1}^n X_i}{\chi^2_{\alpha/2, 6n}} \right)}
\end{align}
$$

$\therefore$ Confidence interval $(1-\alpha)100\%$ untuk $\beta$ adalah $\boxed{\left(\frac{2\sum_{i=1}^n X_i}{\chi^2_{1-\alpha/2, 6n}}, \frac{2\sum_{i=1}^n X_i}{\chi^2_{\alpha/2, 6n}}\right)}$

### 6.35

Let $X$ and $Y$ be the [[3 Reference/Def-mean\|means]] of two independent [[3 Reference/Def-random-sample\|random sample]], each of size $n$, from the respective distributions $N(\mu_{1},\sigma^2)$ and $N(\mu_{2},\sigma^2)$, where the common variance is known. Find $n$ such that

$$ \operatorname{Pr}(\bar{X}-\bar{Y}-\sigma/5<\mu_{1}-\mu_{2}<\bar{X}-\bar{Y}+\sigma/5)=0.90 $$

**Answer**

Karena $\bar{X} \sim N(\mu_1, \sigma^2/n)$ dan $\bar{Y} \sim N(\mu_2, \sigma^2/n)$ saling bebas, maka:
$$
\begin{align}
E[\bar{X} - \bar{Y}] &= \mu_1 - \mu_2\\ \\
\text{Var}(\bar{X} - \bar{Y}) &= \text{Var}(\bar{X}) + \text{Var}(\bar{Y})\\
&= \frac{\sigma^2}{n} + \frac{\sigma^2}{n}\\
&= \frac{2\sigma^2}{n}
\end{align}
$$

Sehingga $\bar{X} - \bar{Y} \sim N\left(\mu_1 - \mu_2, \frac{2\sigma^2}{n}\right)$

Perhatikan bahwa
$$\frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)}{\sqrt{2\sigma^2/n}} = \frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)}{\sigma\sqrt{2/n}} \sim N(0,1)$$

Sehingga
$$
\begin{align}
0.90 & = P(\bar{X}-\bar{Y}-\sigma/5<\mu_{1}-\mu_{2}<\bar{X}-\bar{Y}+\sigma/5) \\
 & = P(-\sigma/5 < (\bar{X}-\bar{Y}) - (\mu_{1}-\mu_{2}) < \sigma/5)\\
 &= P\left(\frac{-\sigma/5}{\sigma\sqrt{2/n}} < \frac{(\bar{X}-\bar{Y}) - (\mu_{1}-\mu_{2})}{\sigma\sqrt{2/n}} < \frac{\sigma/5}{\sigma\sqrt{2/n}}\right)\\
 &= P\left(\frac{-1/5}{\sqrt{2/n}} < Z < \frac{1/5}{\sqrt{2/n}}\right)\\
 &= P\left(-\frac{\sqrt{n}}{5\sqrt{2}} < Z < \frac{\sqrt{n}}{5\sqrt{2}}\right)
\end{align}
$$

Untuk confidence interval 90%, $z_{0.05} = 1.645$. Sehingga:
$$
\begin{align}
\frac{\sqrt{n}}{5\sqrt{2}} &= 1.645\\
\sqrt{n} &= 1.645 \times 5\sqrt{2}\\
\sqrt{n} &= 8.225\sqrt{2}\\
\sqrt{n} &= 11.632\\
n &= 135.3
\end{align}
$$

$\therefore$ Nilai $n$ yang diperlukan adalah $\boxed{n = 136}$ (dibulatkan ke atas)

## Chapter 7

### 7.40
Let
- $X_{1},X_{2},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]], with
	- distribution $N(\theta,1), -\infty<\theta<\infty$

Find [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]] of $\theta^2$

Hint: First determine $E(\bar X^2)$

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

### 7.41
Let $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]], with distribution $N(0,\theta)$. 

Then $Y=\sum X_{i}^2$ is a [[3 Reference/def-complete-sufficient-statistic_202507170931\|complete sufficient statistic]] for $\theta$.

Find [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]] of $\theta^2$

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

### 7.42

In the notation of Example 2 of this section, is there an UMVE of $\operatorname{Pr}(-c\leq X\leq c)$? Here $c>0$.

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

## Chapter 8

### 8.15
Let $X$ have a [[3 Reference/Continuous Distributions#Gamma distribution\|Gamma distribution]] with $\alpha=4$ and $\beta=\theta>0$.
a. Find the [[3 Reference/def-fisher-information_202507170919\|Fisher Information]] $I(\theta)$.
b. If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from this distribution, show that the [[3 Reference/Def-maximum-likelihood-estimator-(mle)\|m.l.e.]] of $\theta$ is an [[3 Reference/def-efficient-estimator_202507170919\|efficient estimator]] of $\theta$.

#### 8.15.a
Diketahui pdf dari distribusi Gamma dengan $\alpha=4$ dan $\beta=\theta$ adalah:
$$ f(x;\theta) = \frac{1}{\Gamma(4)\theta^4}x^{4-1}e^{-x/\theta} = \frac{1}{6\theta^4}x^3 e^{-x/\theta} $$

Fungsi log-[[3 Reference/Def-likelihood-function\|likelihood]] untuk satu pengamatan $X$ adalah:
$$
\begin{align}
\ln L(\theta)  & = \ln\left(\frac{1}{6\theta^4}x^3 e^{-x/\theta}\right) \\
 & = \ln(1) - \ln(6\theta^4) + \ln(x^3) - \frac{x}{\theta} \\
 & = -\ln(6) - 4\ln(\theta) + 3\ln(x) - \frac{x}{\theta} 
\end{align}
$$

Turunan pertama $\ln L()\theta$:
$$ \frac{\partial \ln L}{\partial \theta} = \frac{\partial}{\partial \theta}\left(-\ln(6) - 4\ln\theta + 3\ln x - \frac{x}{\theta}\right) = -\frac{4}{\theta} + \frac{x}{\theta^2} $$

Turunan kedua $\ln L(\theta)$:
$$ \frac{\partial^2 \ln L}{\partial \theta^2} = \frac{\partial}{\partial \theta}\left(-\frac{4}{\theta} + \frac{x}{\theta^2}\right) = \frac{4}{\theta^2} - \frac{2x}{\theta^3} $$

Sehingga diperoleh
$$
\begin{align}
 I(\theta) & = -E\left[\frac{\partial^2 \ln L}{\partial \theta^2}\right] \\
 & = -E\left[\frac{4}{\theta^2} - \frac{2X}{\theta^3}\right] \\
 & = -\left(\frac{4}{\theta^2} - \frac{2E[X]}{\theta^3}\right) \\
 & = -\frac{4}{\theta^2} + \frac{2(4\theta)}{\theta^3} \\
 & = -\frac{4}{\theta^2} + \frac{8\theta}{\theta^3} \\
 & = \boxed{\frac{4}{\theta^2}}
\end{align}
$$

#### 8.15.b
Untuk sampel acak ukuran $n$, log-likelihoodnya adalah:
$$ \ln L(\theta) = \sum_{i=1}^n \ln f(x_i;\theta) = \sum_{i=1}^n \left(-\ln 6 - 4\ln\theta + 3\ln x_i - \frac{x_i}{\theta}\right) = -n\ln 6 - 4n\ln\theta + 3\sum_{i=1}^n \ln x_i - \frac{1}{\theta}\sum_{i=1}^n x_i $$

Sehingga didapati
$$ 
\begin{align}
\frac{\partial \ln L}{\partial \theta} & = -\frac{4n}{\theta} + \frac{1}{\theta^2}\sum_{i=1}^n x_i= 0 \\
 & \iff \frac{1}{\theta^2}\sum_{i=1}^n x_i = \frac{4n}{\theta} \\
 & \iff \hat{\theta} = \frac{\sum X_i}{4n} = \frac{\bar{X}}{4} 
\end{align}
$$

Perhatikan bahwa
$$
\begin{align}
E[\hat{\theta}] & = E\left[\frac{\bar{X}}{4}\right]  \\
 & = \frac{1}{4}E[\bar{X}]  \\
 & = \frac{1}{4}E[X]  \\
 & = \frac{1}{4}(4\theta)  \\
 & = \theta.
\end{align}
$$
Artinya, $\hat{\theta}$ adalaha penaksir tak bias untuk $\theta$

Ingat bahwa $X\sim \Gamma(4, \theta)$. Diketahui $\operatorname{Var}(X)=4\theta^2$. Dapat diperoleh
$$
\begin{align}
Var(\hat{\theta}) & = Var\left(\frac{\bar{X}}{4}\right)  \\
 & = \frac{1}{16}Var(\bar{X}) \\
 & = \frac{1}{16} \frac{Var(X)}{n}  \\
 & = \frac{1}{16} \frac{4\theta^2}{n} \\
 & = \frac{\theta^2}{4n}
\end{align}
$$

[[3 Reference/def-rao-cramer-lower-bound_202507171109\|Rao-Cramer Lower Bound]] untuk penaksir tak bias dari $\theta$ adalah:
$$ \frac{1}{nI(\theta)} = \frac{1}{n(4/\theta^2)} = \frac{\theta^2}{4n} $$

Karena $\operatorname{Var}(\hat{\theta})=\dfrac{1}{nI(\theta)}$, maka berdasarkan [[3 Reference/mathstat6.2#Corollary 6.2.1 Rao-Cramér bound for unbiased estimators\|Corollary 6.2.1 Rao-Cramér bound for unbiased estimators]], $\dfrac{\theta^2}{4n}$ adalah penaksir efisien untuk $\theta$.

### 8.27
If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from a distribution with [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x;\theta)=3\theta^3(x+\theta)^{-4}$, $0<x<\theta$, zero elsewhere, where $0<\theta$, show that $Y=2X$ is an [[3 Reference/Def-unbiased-estimator\|unbiased estimator]] of $\theta$ and determine its [[3 Reference/mathstat6.2#^def-efficiency\|efficiency]].

**Jawab**

Perhatikan bahwa
$$ 
\begin{align}
E(X) & = \int_0^\infty x \cdot 3\theta^3(x+\theta)^{-4} dx \\
 & = 3\theta^3 \int_\theta^\infty (u-\theta)u^{-4} du  \\
 & = 3\theta^3 \int_\theta^\infty (u^{-3} - \theta u^{-4}) du  \\
 & = 3\theta^3 \left[ -\frac{u^{-2}}{2} + \frac{\theta u^{-3}}{3} \right]_\theta^\infty  \\
 & = 3\theta^3 \left( \frac{1}{2\theta^2} - \frac{1}{3\theta^2} \right)  \\
 & = \frac{\theta}{2}
\end{align}
$$
sehingga
$$
\begin{align}
E(Y) & = E(2X) \\
 & = 2E(X) \\
 & = 2 \cdot \frac{\theta}{2} \\
 & = \theta
\end{align}
$$
sehingga terbukti bahwa <u>Y adalah penaksir tak bias untuk </u> $\theta$

Selanjutnya, akan dicari efisiensi dari $Y$. Pertama, akan dicari variansi $Y$:
$$ 
\begin{align}

E[X^2] & = \int_0^\infty x^2 \cdot 3\theta^3(x+\theta)^{-4} dx  \\
 & = 3\theta^3 \int_\theta^\infty (u-\theta)^2 u^{-4} du  \\
 & = 3\theta^3 \int_\theta^\infty (u^{-2} - 2\theta u^{-3} + \theta^2 u^{-4}) du  \\
 & = \theta^2 \\ \\

\operatorname{Var}(X) & = E[X^2] - (E[X])^2  \\
 & = \theta^2 - (\theta/2)^2  \\
 & = \frac{3\theta^2}{4} \\ \\

\operatorname{Var}(Y) & = \operatorname{Var}(2\bar{X})  \\
 & = 4 \operatorname{Var}(\bar{X})  \\
 & = \frac{4}{n}\operatorname{Var}(X)  \\
 & = \frac{3\theta^2}{n}
\end{align}
$$

Informasi Fisher $I(\theta)$:
$$ \ln f(x;\theta) = \ln 3 + 3\ln\theta - 4\ln(x+\theta) \implies \frac{\partial^2 \ln f}{\partial \theta^2} = -\frac{3}{\theta^2} + \frac{4}{(x+\theta)^2} $$

$I(\theta) = -E\left[-\frac{3}{\theta^2} + \frac{4}{(X+\theta)^2}\right] = \frac{3}{\theta^2} - 4E\left[\frac{1}{(X+\theta)^2}\right]$
$E\left[\frac{1}{(X+\theta)^2}\right] = \int_0^\infty \frac{3\theta^3}{(x+\theta)^6} dx = \frac{3}{5\theta^2}$
$I(\theta) = \frac{3}{\theta^2} - \frac{12}{5\theta^2} = \frac{3}{5\theta^2}$

$$
\begin{align}
\frac{[k'(\theta)]^2/nI(\theta)}{\operatorname{Var}(Y)} & = \frac{1/n\cdot \frac{3}{5\theta^2}}{3\theta^2/n} \quad (k'(\theta)=1 \text{ karena } Y \text{ tak bias}) \\
 & = \boxed{\frac{5}{9}}
\end{align}
$$
### 8.29
If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from $N(\theta,1)$, find a lower bound of the [[3 Reference/Def-variance\|variance]] of an estimator of $k(\theta)=\theta^2$. Determine an [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|unbiased minimum variance estimator]] of $\theta^2$ and then compute its [[3 Reference/mathstat6.2#^def-efficiency\|efficiency]].

**Jawab**

Untuk $N(\theta,1)$, diketahui $I(\theta)=1$. Batas bawah Cramer-Rao untuk $k(\theta)=\theta^2$ adalah:
$$ \frac{[k'(\theta)]^2}{nI(\theta)} = \frac{(2\theta)^2}{n(1)} = \frac{4\theta^2}{n} $$

Diketahui $\bar{X}\sim N(\theta,1/n)$ adalah [[3 Reference/def-complete-sufficient-statistic_202507170931\|statistik cukup yang komplit]] untuk $\theta$

Perhatikan bahwa
$$
\begin{align}
E[\bar{X}^2] & = \operatorname{Var}(\bar{X}) + (E[\bar{X}])^2 \\
 & = \frac{1}{n} + \theta^2
\end{align}
$$
Sehingga, $E[\bar{X}^2 - 1/n] = \theta^2$. Artinya, $T = \bar{X}^2 - 1/n$ adalah penaksir tak bias untuk $\theta^2$. Berdasarkan teorema [[3 Reference/unique-mvue-(umvue)_202507170937\|Lehmann Scheffe]], $T$ adalah MVUE untuk $\theta^2$.

Selanjutnya, akan dicari variansi dari $T$:
$$ \operatorname{Var}(T) = \operatorname{Var}(\bar{X}^2 - 1/n) = \operatorname{Var}(\bar{X}^2) $$

Misal $Z = \sqrt{n}(\bar{X}-\theta) \sim N(0,1)$, maka $\bar{X} = Z/\sqrt{n} + \theta$. Sehingga
$$ \bar{X}^2 = \left(\frac{Z}{\sqrt{n}} + \theta\right)^2 = \frac{Z^2}{n} + \frac{2\theta Z}{\sqrt{n}} + \theta^2 $$
Dan variansinya adalah
$$
\begin{align}
\operatorname{Var}(\bar{X}^2) & = \operatorname{Var}\left(\frac{Z^2}{n} + \frac{2\theta Z}{\sqrt{n}} + \theta^2\right) \\
 & = \operatorname{Var}\left(\frac{Z^2}{n} + \frac{2\theta Z}{\sqrt{n}}\right) \\
 & = \frac{1}{n^2}\operatorname{Var}(Z^2) + \frac{4\theta^2}{n}\operatorname{Var}(Z) + \frac{4\theta}{n\sqrt{n}}\operatorname{Cov}(Z^2, Z)
\end{align}
$$

Untuk $Z \sim N(0,1)$, diketahui $\operatorname{Var}(Z)=1$, $\operatorname{Var}(Z^2)=2$, dan $\operatorname{Cov}(Z^2,Z)=0$. Maka:
$$ \operatorname{Var}(T) = \frac{2}{n^2} + \frac{4\theta^2}{n} - 2\cdot0$$

Efisiensi dari $T$ adalah perbandingan antara batas bawah cramer (CRLB) dan variansi $T$:
$$
\begin{align}
\text{Efisiensi} & = \frac{\text{CRLB}}{\operatorname{Var}(T)} \\
 & = \frac{4\theta^2/n}{2/n^2 + 4\theta^2/n} \\
 & = \frac{4\theta^2/n}{(2+4n\theta^2)/n^2} \\
 & = \frac{4n\theta^2}{2+4n\theta^2} \\
 & = \boxed{\frac{2n\theta^2}{1+2n\theta^2}}
\end{align}
$$

## Chapter 9

### 9.6

Let $X_{1},X_{2},\dots,X_{10}$ be a [[3 Reference/Def-random-sample\|random sample]] from a distribution that is $N(\theta_{1},\theta_{2})$[^1]. Find a [[3 Reference/def-best-critical-region_202508052110\|best test]] of the [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|simple hypothesis]] $H_{0}: \theta_{1}=\theta_{1}'=0,\; \theta_{2}=\theta_{2}'=1$ against the [[3 Reference/def-hypothesis_202508050806\|alternative simple hypothesis]] $H_{1}: \theta_{1}=\theta_{1}''=1,\; \theta_{2}=\theta_{2}''=4$.

**Answer**

Untuk $H_0: \theta_1 = 0, \theta_2 = 1$, [[3 Reference/Def-likelihood-function\|fungsi likelihood]] adalah:
$$ 
\begin{align} 
L_0(x_1,\dots,x_{10}) &= \prod_{i=1}^{10} \frac{1}{\sqrt{2\pi \cdot 1}} \exp\left(-\frac{(x_i-0)^2}{2 \cdot 1}\right) \\
 &= (2\pi)^{-5} \exp\left(-\frac{1}{2}\sum_{i=1}^{10} x_i^2\right) 
\end{align} 
$$

Untuk $H_1: \theta_1 = 1, \theta_2 = 4$, fungsi likelihood adalah:
$$ 
\begin{align} 
L_1(x_1,\dots,x_{10}) &= \prod_{i=1}^{10} \frac{1}{\sqrt{2\pi \cdot 4}} \exp\left(-\frac{(x_i-1)^2}{2 \cdot 4}\right) \\
&= (8\pi)^{-5} \exp\left(-\frac{1}{8}\sum_{i=1}^{10} (x_i-1)^2\right) 
\end{align}
$$

Berdasarkan [[3 Reference/theorem-neyman-pearson-theorem_202508052132\|Neyman-Pearson Theorem]], [[3 Reference/def-best-critical-region_202508052110\|best critical region]] didefinisikan oleh:
$$ 
\begin{align} 
\frac{L_1}{L_0} &\geq k  \\
\frac{(8\pi)^{-5} \exp\left(-\frac{1}{8}\sum_{i=1}^{10} (x_i-1)^2\right)}{(2\pi)^{-5} \exp\left(-\frac{1}{2}\sum_{i=1}^{10} x_i^2\right)} &\geq k \\
\frac{(2\pi)^{-5}}{(8\pi)^{-5}} \exp\left(-\frac{1}{8}\sum_{i=1}^{10} (x_i-1)^2 + \frac{1}{2}\sum_{i=1}^{10} x_i^2\right) &\geq k \\
\frac{1}{4^5} \exp\left(-\frac{1}{8}\sum_{i=1}^{10} (x_i-1)^2 + \frac{1}{2}\sum_{i=1}^{10} x_i^2\right) &\geq k
\end{align} 
$$

Perhatikan bahwa:
$$ 
\begin{align} 
-\frac{1}{8}\sum_{i=1}^{10} (x_i-1)^2 + \frac{1}{2}\sum_{i=1}^{10} x_i^2 &= -\frac{1}{8}\sum_{i=1}^{10} (x_i^2 - 2x_i + 1) + \frac{1}{2}\sum_{i=1}^{10} x_i^2 \\
&= -\frac{1}{8}\sum_{i=1}^{10} x_i^2 + \frac{1}{4}\sum_{i=1}^{10} x_i - \frac{10}{8} + \frac{1}{2}\sum_{i=1}^{10} x_i^2 \\
&= \frac{3}{8}\sum_{i=1}^{10} x_i^2 + \frac{1}{4}\sum_{i=1}^{10} x_i - \frac{5}{4}
\end{align} 
$$

Ingat bahwa $k$ adalah suatu konstanta positif. Misalkan $k' = \ln(k) + 5\ln(4) + \frac{5}{4}$. Dapat diperoleh:
$$
\begin{align}
\frac{L_1}{L_0} = \frac{1}{4^5} \exp\left(\frac{3}{8}\sum_{i=1}^{10} x_i^2 + \frac{1}{4}\sum_{i=1}^{10} x_i - \frac{5}{4}\right) &\geq k \\
\frac{3}{8}\sum_{i=1}^{10} x_i^2 + \frac{1}{4}\sum_{i=1}^{10} x_i - \frac{5}{4} &\geq \ln(k \cdot 4^5) \\
3\sum_{i=1}^{10} x_i^2 + 2\sum_{i=1}^{10} x_i &\geq k'
\end{align} 
$$

Karena koefisien dari $\sum x_i^2$ dan $\sum x_i$ keduanya positif, [[3 Reference/def-test_202508050827\|critical region]] dapat ditulis sebagai:

$$\boxed{C: 3\sum_{i=1}^{10} X_i^2 + 2\sum_{i=1}^{10} X_i \geq k'}$$

untuk suatu konstanta $k$ positif dengan $k'=\ln(k) + 5\ln(4) + \frac{5}{4}$.

$\therefore$ Best test untuk hipotesis yang diberikan adalah tolak $H_0$ jika $3\sum_{i=1}^{10} X_i^2 + 2\sum_{i=1}^{10} X_i \geq k'$.

### 9.10

Let $X_{1},X_{2},\dots,X_{10}$ denote a [[3 Reference/Def-random-sample\|random sample]] of size $10$ from a [[3 Reference/Discrete Distributions#Poisson distribution\|Poisson distribution]] with [[3 Reference/Def-mean\|mean]] $\theta$. Show that the [[3 Reference/def-test_202508050827\|critical region]] $C$ defined by $\sum_{i=1}^{10}x_{i}\geq 3$ is a [[3 Reference/def-best-critical-region_202508052110\|best critical region]] for [[3 Reference/def-test_202508050827\|testing]] $H_{0}: \theta=0.1$ against $H_{1}: \theta=0.5$. Determine, for this test, the [[3 Reference/def-size-of-critical-region_202507291323\|significance level]] $\alpha$ and [[3 Reference/def-power-of-a-test_202508050833\|power]] at $\theta=0.5$.

**Jawab**

Diketahui [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] dari [[3 Reference/Discrete Distributions#Poisson distribution\|distribusi Poisson]] adalah
$$f(x;\theta) = \frac{\theta^x e^{-\theta}}{x!}, \quad x = 0,1,2,\dots$$

[[3 Reference/Def-likelihood-function\|Fungsi likelihood]] untuk sampel $X_1, X_2, \dots, X_{10}$ adalah:
$$
\begin{align}
L(\theta) &= \prod_{i=1}^{10} \frac{\theta^{x_i} e^{-\theta}}{x_i!} \\
&= \frac{\theta^{\sum_{i=1}^{10} x_i} e^{-10\theta}}{\prod_{i=1}^{10} x_i!}
\end{align}
$$

Untuk $H_0: \theta = 0.1$:
$$L_0 = \frac{(0.1)^{\sum x_i} e^{-1}}{\prod x_i!}$$

Untuk $H_1: \theta = 0.5$:
$$L_1 = \frac{(0.5)^{\sum x_i} e^{-5}}{\prod x_i!}$$

Sehingga diperoleh
$$
\begin{align}
\frac{L_1}{L_0} &= \frac{(0.5)^{\sum x_i} e^{-5}}{(0.1)^{\sum x_i} e^{-1}} \\
&= \left(\frac{0.5}{0.1}\right)^{\sum x_i} e^{-4} \\
&= 5^{\sum x_i} e^{-4}
\end{align}
$$

Berdasarkan [[3 Reference/theorem-neyman-pearson-theorem_202508052132\|Neyman-Pearson Theorem]], [[3 Reference/def-best-critical-region_202508052110\|best critical region]] didefinisikan oleh:
$$
\begin{align}
\frac{L_1}{L_0} &\geq k \\
5^{\sum x_i} e^{-4} &\geq k \\
5^{\sum x_i} &\geq ke^4 \\
\sum x_i &\geq \log_5(ke^4)
\end{align}
$$

Karena $\log_5(ke^4)$ adalah konstanta positif [[3 Reference/def-test_202508050827\|critical region]] berbentuk $\sum_{i=1}^{10} x_i \geq c$ untuk suatu konstanta $c$, artinya, $C: \sum_{i=1}^{10} x_i \geq 3$ adalah best critical region.

Di bawah $H_{0}$, $\sum_{i=1}^{10} X_i \sim \text{Poisson}(10 \times 0.1) = \text{Poisson}(1)$ sehingga

$$
\begin{align}
\alpha &= P_{H_0}\left[\sum_{i=1}^{10} X_i \geq 3\right] \\
&= 1 - P[\sum_{i=1}^{10} X_i \leq 2] \\
&= 1 - \left(P[Y=0] + P[Y=1] + P[Y=2]\right) \\
&= 1 - \left(\frac{1^0 e^{-1}}{0!} + \frac{1^1 e^{-1}}{1!} + \frac{1^2 e^{-1}}{2!}\right) \\
&= 1 - e^{-1}\left(1 + 1 + \frac{1}{2}\right) \\
&= 1 - \frac{5e^{-1}}{2} \\
&= \boxed{1 - \frac{5}{2e} \approx 0.0803}
\end{align}
$$

Di bawah $H_1$, $\sum_{i=1}^{10} X_i \sim \text{Poisson}(10 \times 0.5) = \text{Poisson}(5)$. Misal $Y\sim \text{Poisson(5)}$,sehingga
$$
\begin{align}
\alpha &= P_{H_1}\left[\sum_{i=1}^{10} X_i \geq 3\right] \\
&= 1 - P[Y \leq 2]  \\
&= 1 - \left(\frac{5^0 e^{-5}}{0!} + \frac{5^1 e^{-5}}{1!} + \frac{5^2 e^{-5}}{2!}\right) \\
&= 1 - e^{-5}\left(1 + 5 + \frac{25}{2}\right) \\
&= 1 - \frac{37e^{-5}}{2} \\
&= \boxed{1 - \frac{37}{2e^5} \approx 0.875}
\end{align}
$$

$\therefore$ Critical region $C: \sum_{i=1}^{10} x_i \geq 3$ adalah best critical region dengan significane level $\alpha \approx 0.0803$ dan power $\approx 0.875$


### 9.21

Let $X_{1},X_{2},\dots,X_{n}$ be a [[3 Reference/Def-random-sample\|random sample]] from a distribution with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x;\theta)=\theta x^{\theta-1},0<x<\infty$, zero elsewhere, where $\theta>0$. Find a [[3 Reference/def-sufficient-statistic_202507170925\|sufficient statistic]] for $\theta$ and show that a [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test]] of $H_{0}: \theta=6$ against $H_{1}: \theta<6$ is based on this [[3 Reference/Def-statistic\|statistic]].

**Jawab**

[[3 Reference/Def-likelihood-function\|Fungsi likelihood]] untuk sampel adalah:
$$
\begin{align}
L(\theta) &= \prod_{i=1}^n \theta x_i^{\theta-1} \\
&= \theta^n \prod_{i=1}^n x_i^{\theta-1} \\
&= \theta^n \left(\prod_{i=1}^n x_i\right)^{\theta-1}
\end{align}
$$

Log-likelihood:
$$
\begin{align}
\ln L(\theta) &= n \ln \theta + (\theta-1) \sum_{i=1}^n \ln x_i \\
&= n \ln \theta + (\theta-1) \ln \left(\prod_{i=1}^n x_i\right)
\end{align}
$$

> [!note]
> Untuk mencari [[3 Reference/def-uniformly-most-powerful-test_202508052119\|UMPT]], perlu dicari [[3 Reference/def-uniformly-most-powerful-critical-region_202508052119\|UMP Critical Region]], perlu dicari [[3 Reference/def-best-critical-region_202508052110\|Best Critical Region]] menggunakan [[3 Reference/theorem-neyman-pearson-theorem_202508052132\|Neyman-Pearson Theorem]].
Selain itu, dari Hogg&Craig ed8, 
![[assets/Pasted image 20250805231428.png]]

Perhatikan bahwa berdasarkan [[3 Reference/theorem-neyman-theorem_202508052229\|Neyman Theorem]],  $Y_{1} = \prod_{i=1}^n X_i=u_{1}(\mathbf{X})$ adalah [[3 Reference/def-sufficient-statistic_202507170925\|statistik cukup]] untuk $\theta$ dengan:
$$
\begin{align}
Y & =\theta^n\left( \prod x_{i} \right)^{\theta-1} \cdot 1 \\
 & = k_{1}[u_{1}(\mathbf{x});\theta] \cdot k_{2}(\mathbf{x})
\end{align}
$$

Misalkan $\theta_1 < 6$. Rasio likelihood adalah:
$$
\begin{align}
\frac{L(\theta_1)}{L(6)} &= \frac{\theta_1^n \left(\prod x_i\right)^{\theta_1-1}}{6^n \left(\prod x_i\right)^{6-1}} \\
&= \left(\frac{\theta_1}{6}\right)^n \left(\prod x_i\right)^{\theta_1-6}
\end{align}
$$

Rasio log:
$$
\begin{align}
\ln\left(\frac{L(\theta_1)}{L(6)}\right) &= n \ln\left(\frac{\theta_1}{6}\right) + (\theta_1-6) \ln\left(\prod x_i\right) \\
&= n \ln\left(\frac{\theta_1}{6}\right) + (\theta_1-6) \sum_{i=1}^n \ln x_i
\end{align}
$$

Lalu:
1. Karena $\theta_1 < 6$, maka $\theta_1 - 6 < 0$.
2. Karena $\ln x_i$ negatif untuk $0 < x_i < 1$, maka $(\theta_1-6) \sum \ln x_i > 0$
3. Perhatikan bahwa $(\theta_{1}-6)\sum \ln x_{i}$ meningkat ketika $\sum \ln x_i$ semakin negatif
4. Karena $\sum \ln x_i = \ln\left(\prod x_i\right)$ maka $\ln\left( \frac{L(\theta_{1})}{L(6)} \right)$ meningkat ketika $\prod x_i$ mengecil ($y$ mengecil maka $\ln (y)$ membesar)
5. Sehingga, $\forall\theta_1 < 6$, [[3 Reference/def-best-critical-region_202508052110\|best critical region]] adalah $\prod_{i=1}^n X_i \leq k$ untuk suatu konstanta $k$

Karena bentuk critical region sama untuk semua $\theta_1 < 6$ (hanya konstanta $k$ yang berbeda, tergantung pada significance level), maka test yang menolak $H_0$ ketika $\prod_{i=1}^n X_i \leq k$ adalah **uniformly most powerful test**.

$\therefore$ Statistik cukup untuk $\theta$ adalah $Y_{1} = \prod_{i=1}^n X_i$. [[3 Reference/def-uniformly-most-powerful-test_202508052119\|UMPT]] untuk $H_0: \theta = 6$ melawan $H_1: \theta < 6$ yang berkaitan dengan $Y_{1}$ adalah menolak $H_0$ ketika $\prod_{i=1}^n X_i \leq k$ untuk suatu konstanta $k$.

### 9.28

Let $X_{1},X_{2},\dots,X_{n}$ be a [[3 Reference/Def-random-sample\|random sample]] from the [[3 Reference/Continuous Distributions#Normal distribution\|normal distribution]] $N(\theta,1)$. Show that the [[3 Reference/Def-likelihood-function\|likelihood]] ratio principle for testing $H_{0}: \theta=\theta'$, where $\theta'$ is specified, against $H_{1}: \theta\neq \theta'$ leads to the inequality $|\bar{x}-\theta'|\geq c$. Is this a [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test]] of $H_{0}$ against $H_{1}$?

**Jawab**

Diketahui $X_i \sim N(\theta, 1)$. Fungsi likelihood untuk sampel adalah:
$$
\begin{align}
L(\theta) &= \prod_{i=1}^n \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{(x_i-\theta)^2}{2}\right) \\
&= (2\pi)^{-n/2} \exp\left(-\frac{1}{2}\sum_{i=1}^n (x_i-\theta)^2\right) \\ \\

\frac{\partial \ln L(\theta)}{\partial \theta} &= \frac{\partial}{\partial \theta}\left\{\ln\left[(2\pi)^{-n/2} \exp\left(-\frac{1}{2}\sum_{i=1}^n (x_i-\theta)^2\right)\right]\right\} \\

&= \frac{\partial}{\partial \theta}\left\{\ln\left[(2\pi)^{-n/2}\right] + \ln\left[\exp\left(-\frac{1}{2}\sum_{i=1}^n (x_i-\theta)^2\right)\right]\right\} \\
&= \frac{\partial}{\partial \theta}\left\{-\frac{1}{2}\sum_{i=1}^n (x_i-\theta)^2\right\} \\
0 &= \sum_{i=1}^n (x_i-\theta) \\
0 & = \sum_{i=1}^nx_{i} - n\theta \\
\theta & = \bar{x}
\end{align}
$$

Sehingga $\hat{\theta} = \bar{x}$ dan:
$$L(\hat{\theta}) = L(\bar{x}) = (2\pi)^{-n/2} \exp\left(-\frac{1}{2}\sum_{i=1}^n (x_i-\bar{x})^2\right)$$

Likelihood ratio adalah:
$$
\begin{align}
\lambda &= \frac{L(\theta')}{L(\hat{\theta})} \\
&= \frac{\exp\left(-\frac{1}{2}\sum_{i=1}^n (x_i-\theta')^2\right)}{\exp\left(-\frac{1}{2}\sum_{i=1}^n (x_i-\bar{x})^2\right)} \\
&= \exp\left(-\frac{1}{2}\left[\sum_{i=1}^n (x_i-\theta')^2 - \sum_{i=1}^n (x_i-\bar{x})^2\right]\right)
\end{align}
$$

Perhatikan bahwa:
$$
\begin{align}
\sum_{i=1}^n (x_i-\theta')^2 - \sum_{i=1}^n (x_i-\bar{x})^2 &= \sum_{i=1}^n [(x_i-\theta')^2 - (x_i-\bar{x})^2] \\
&= \sum_{i=1}^n [x_i^2 - 2x_i\theta' + (\theta')^2 - x_i^2 + 2x_i\bar{x} - \bar{x}^2] \\
&= \sum_{i=1}^n [2x_i(\bar{x}-\theta') + (\theta')^2 - \bar{x}^2] \\
&= 2(\bar{x}-\theta')\sum_{i=1}^n x_i + n[(\theta')^2 - \bar{x}^2] \\
&= 2n(\bar{x}-\theta')^2 + n[(\theta')^2 - \bar{x}^2] \\
&= n(\bar{x}-\theta')^2 
\end{align}
$$

Sehingga:
$$\lambda = \exp\left(-\frac{n(\bar{x}-\theta')^2}{2}\right)$$

Misalkan $k$ konstanta positif. Dapat diperoleh
$$
\begin{align}
\exp\left(-\frac{n(\bar{x}-\theta')^2}{2}\right) &\leq k\\
-\frac{n(\bar{x}-\theta')^2}{2} &\leq \ln k \\
(\bar{x}-\theta')^2 &\geq -\frac{2\ln k}{n} \\
|\bar{x}-\theta'| &\geq c 
\end{align} 
$$

dimana $c = \sqrt{-\dfrac{2\ln k}{n}}$. 

Test ini bukan [[3 Reference/def-uniformly-most-powerful-test_202508052119\|UMPT]], karena UMPT didefiniskan untuk $H_{1}$ [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|composite hypothesis]], sementara $H_{1}$ yang diberikan adalah [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|simple hypothesis]].

$\therefore$  Diperoleh $|\bar{x}-\theta'| \geq c$, tetapi test ini bukan UMPT karena $H_1$ adalah composite hypothesis.

### 9.47

Consider a [[3 Reference/Def-random-sample\|random sample]] $X_{1},X_{2},\dots,X_{n}$ from a distribution with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x;\theta)=\theta(1-x)^{\theta-1},\; 0<x<1$, zero elsewhere, where $\theta>0$.
1. Find the form of the [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test]] of $H_{0}: \theta=1$ against $H_{1}: \theta>1$.
2. What is the [[3 Reference/Def-likelihood-function\|likelihood]] ratio for $\lambda$ for testing $H_{0}: \theta=1$ against $H_{1}: \theta\neq 1$?

#### 9.47.1

Fungsi likelihood untuk sampel adalah:
$$
\begin{align}
L(\theta) &= \prod_{i=1}^n \theta(1-x_i)^{\theta-1} \\
&= \theta^n \prod_{i=1}^n (1-x_i)^{\theta-1} \\
&= \theta^n \left[\prod_{i=1}^n (1-x_i)\right]^{\theta-1}
\end{align}
$$

Misalkan $\theta_1 > 1$. Rasio likelihood adalah:
$$
\begin{align}
\frac{L(\theta_1)}{L(1)} &= \frac{\theta_1^n \left[\prod_{i=1}^n (1-x_i)\right]^{\theta_1-1}}{1^n \left[\prod_{i=1}^n (1-x_i)\right]^{1-1}} \\
&= \theta_1^n \left[\prod_{i=1}^n (1-x_i)\right]^{\theta_1-1} \\ \\

\ln\left(\frac{L(\theta_1)}{L(1)}\right) &= n\ln(\theta_1) + (\theta_1-1)\ln\left[\prod_{i=1}^n (1-x_i)\right] \\
&= n\ln(\theta_1) + (\theta_1-1)\sum_{i=1}^n \ln(1-x_i) 
\end{align} 
$$

Karena $\theta_1 > 1$, maka $\theta_1 - 1 > 0$. Untuk $0 < x_i < 1$, kita memiliki $0 < 1-x_i < 1$ sehingga $\ln(1-x_i) < 0$.

Rasio likelihood meningkat ketika $\sum_{i=1}^n \ln(1-x_i)$ meningkat (menjadi kurang negatif), yang terjadi ketika $\prod_{i=1}^n (1-x_i)$ meningkat.

Oleh karena itu, untuk setiap $\theta_1 > 1$, [[3 Reference/def-best-critical-region_202508052110\|best critical region]] adalah:
$$\prod_{i=1}^n (1-X_i) \geq k\iff\sum_{i=1}^n \ln(1-X_i) \geq k',\quad \forall \theta_{1}>1$$
untuk suatu konstanta $k'$.

$\therefore$ UMPT untuk $H_0: \theta = 1$ versus $H_1: \theta > 1$ adalah:

$$\boxed{\text{Tolak } H_0 \text{ jika } \sum_{i=1}^n \ln(1-X_i) \geq k'}$$

#### 9.47.2

Untuk $H_0: \theta = 1$: 
$$
\begin{align}
L(1) & = \prod_{i=1}^n (1-x_i)^{1-1} = 1 \\
\ln L(\theta) &= n\ln(\theta) + (\theta-1)\sum_{i=1}^n \ln(1-x_i) \\
\frac{\partial \ln L}{\partial \theta} &= \frac{n}{\theta} + \sum_{i=1}^n \ln(1-x_i) = 0 
\end{align} 
$$

Sehingga:
$$\hat{\theta} = -\frac{n}{\sum_{i=1}^n \ln(1-x_i)}$$

Likelihood maksimum:
$$ 
\begin{align}
L(\hat{\theta}) &= \hat{\theta}^n \left[\prod_{i=1}^n (1-x_i)\right]^{\hat{\theta}-1} \\
&= \left(-\frac{n}{\sum_{i=1}^n \ln(1-x_i)}\right)^n \left[\prod_{i=1}^n (1-x_i)\right]^{-\frac{n}{\sum_{i=1}^n \ln(1-x_i)}-1} 
\end{align}
$$

Likelihood ratio adalah:
$$\boxed{\lambda = \frac{L(1)}{L(\hat{\theta})} = \frac{1}{L(\hat{\theta})} = \frac{\left(\sum_{i=1}^n \ln(1-x_i)\right)^n}{(-n)^n} \left[\prod_{i=1}^n (1-x_i)\right]^{\frac{n}{\sum_{i=1}^n \ln(1-x_i)}+1}}$$



[^1]: [[3 Reference/Continuous Distributions#Normal distribution\|Normal distribution]]
