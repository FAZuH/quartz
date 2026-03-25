---
publish: true
aliases:
  - Chapter 6 Exercises
created: 2026-03-25T15:22:40.605+07:00
modified: 2026-03-25T15:22:40.605+07:00
published: 2026-03-25T15:22:40.605+07:00
tags:
  - 
creation-time: 2025-12-11 14:08
status: in progress
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---

## 6.23

> Let $\bar{X}$ denote the [[Def-mean|mean]] of a [[Def-random-sample|random sample]] of size 25 from a [[Continuous Distributions#Gamma distribution|gamma-type distribution]] with $\alpha=4$ and $\beta>0$. Use the [[mathstat5.3#Theorem 5.3.1 Central limit theorem|central limit theorem]] to find an approximate 0.954 [[def-confidence-interval_202507220823|confidence Interval]] for $\mu$, the mean of the gamma distribution.
>
> Hint: Base the confidence interval on the [[Def-random-variable|random variable]] $(\bar{X}-4\beta)/(4\beta^2/25)^{1/2}=5\bar{X}/2\beta-10$

**Answer**
Untuk distribusi gamma dengan parameter $\alpha = 4$ dan $\beta$, diketahui:
$$
\begin{align} E\[X] &= \alpha\beta = 4\beta = \mu\\
\text{Var}(X) &= \alpha\beta^2 = 4\beta^2
\end{align}
$$

Berdasarkan [[mathstat5.3#Theorem 5.3.1 Central limit theorem|teorema limit pusat]], untuk sampel berukuran $n = 25$:
$$
\begin{align}
\frac{\bar{X} - \mu}{\sqrt{\text{Var}(\bar{X})}} & = \frac{\bar{X} - 4\beta}{\sqrt{4\beta^2/25}}  \\
& = \frac{\bar{X} - 4\beta}{2\beta/5} \\
& = \frac{5\bar{X}}{2\beta}-10 \xrightarrow{D} N(0,1)
\end{align}
$$

Karena diketahui $\mu=4\beta$, untuk confidence interval 95.4%, dengan $z\_{0.023} = 2$, dapat diperoleh:
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

## 6.26

> It is known that a [[Def-random-variable|random variable]] $X$ has a [[Discrete Distributions#Poisson distribution|Poisson distribution]] with parameter $\mu$. A sample of 200 observations from this population has a [[Def-mean|mean]] equal to 3.4. Construct an approximate 90 percent [[def-confidence-interval_202507220823|confidence Interval]] for $\mu$.

**Answer**

Untuk distribusi [[Discrete Distributions#Poisson distribution|Poisson]] dengan parameter $\mu$, diketahui:
$$
\begin{align}
E\[X] &= \mu\\
\text{Var}(X) &= \mu
\end{align}
$$

Berdasarkan [[mathstat5.3#Theorem 5.3.1 Central limit theorem|teorema limit pusat]], untuk sampel berukuran besar $n = 200$:
$$\frac{\bar{X} - \mu}{\sqrt{\mu/n}} \xrightarrow{D} N(0,1)$$

Untuk confidence interval 90%, dengan $\alpha = 0.10$ sehingga $z\_{0.05} = 1.645$, dapat diperoleh:
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

## 6.27

> Let $Y\_{1}\<Y\_{2}<\dots\<Y\_{n}$ denote the [[Def-order-statistics|order statistics]] of a [[Def-random-sample|random sample]] of size $n$ from a distribution that has [[Def-probability-density-function-(pdf)|p.d.f.]] $f(x)=3x^2/\theta^3, 0\<x<\theta$, zero elsewhere.
>
> (a) Show that $\operatorname{Pr}(c\<Y\_{n}/\theta<1)=1-c^{3n}$, where $0\<c<1$
> (b) If $n$ is 4 and if the observed value of $Y$, is 2.3, what is a 95 percent [[def-confidence-interval_202507220823|confidence interval]] for 8?

**Answer**

### 6.27.a

Diketahui cdf dari $X$:

$$F(x) = \int\_0^x \frac{3t^2}{\theta^3} dt = \frac{x^3}{\theta^3}, \quad 0 < x < \theta$$

Berdasarkan [[mathstat4.4#CDF of order statistics|CDF of order statistics]], maksimum $Y\_n$ distribusinya adalah:
$$F\_{Y\_n}(y) = \[F(y)]^n = \left(\frac{y^3}{\theta^3}\right)^n = \frac{y^{3n}}{\theta^{3n}}$$

Maka:
$$
\begin{align}
P(c < Y\_n/\theta < 1) &= P(c\theta < Y\_n < \theta)\\
&= F\_{Y\_n}(\theta) - F\_{Y\_n}(c\theta)\\
&= \frac{\theta^{3n}}{\theta^{3n}} - \frac{(c\theta)^{3n}}{\theta^{3n}}\\
&= \boxed{1 - c^{3n}}
\end{align}
$$

$\therefore$ Terbukti bahwa $\operatorname{Pr}(c\<Y\_{n}/\theta<1)=1-c^{3n}$

### 6.27.b

Untuk $n = 4$ dan confidence itnerval 95%, berarti:
$$
\begin{align}
P(c < Y\_4/\theta < 1) & = 1 - c^{12} = 0.95 \\
\iff c^{12} & = 0.05 \\
\iff c & = (0.05)^{1/12}  \\
& = 0.7943
\end{align}
$$

Karena $P(c < Y\_4/\theta < 1) = 0.95$ dan $Y\_{4}=2.3$, dapat peroleh:
$$
\begin{align} \\
c &< \frac{Y\_4}{\theta} < 1\\
\frac{Y\_4}{1} &< \theta < \frac{Y\_4}{c} \\
Y\_4 &< \theta < \frac{Y\_4}{0.7943} \\
2.3 &< \theta < \frac{2.3}{0.7943}  \\
2.3 &< \theta < 2.896
\end{align}
$$

$\therefore$ Confidence interval 95% untuk $\theta$ adalah $\boxed{(2.3, 2.896)}$

## 6.29

> Let $X\_{1},X\_{2},\dots,X\_{n}$ be a [[Def-random-sample|random sample]] from a [[Continuous Distributions#Gamma distribution|gamma distribution]] with known parameter $\alpha=3$ and unknown $\beta>0$. Discuss the construction of a [[def-confidence-interval_202507220823|confidence interval]] for $\beta$.
>
> Hint: What is the distribution of $2\sum\_{i=1}^nX\_{i}/\beta$? Follow the procedure outlined in Exercise 6.28.

**Answer**

Dari [[common-distribution-equations_202507221712#Gamma Distribution Relationships|Gamma Distribution Relationships]], diketahui bahwa jika $X\_i \sim \text{Gamma}(\alpha, \beta)$, maka:
$$\frac{2X\_i}{\beta} \sim \chi^2(2\alpha)$$

Sehingga untuk $\alpha = 3$:
$$\frac{2X\_i}{\beta} \sim \chi^2(6)$$

Karena $X\_1, X\_2, \ldots, X\_n$ saling bebas, maka:
$$
\begin{align}
\frac{2\sum\_{i=1}^n X\_i}{\beta} &= \sum\_{i=1}^n \frac{2X\_i}{\beta}\\
&\sim \chi^2(6n)
\end{align}
$$

Untuk konstruksi confidence interval $(1-\alpha)100%$ :
$$
\begin{align}
1-\alpha & = P\left(\chi^2\_{\alpha/2, 6n} < \frac{2\sum\_{i=1}^n X\_i}{\beta} < \chi^2\_{1-\alpha/2, 6n}\right) \\
&= P\left( \chi^2\_{\alpha/2, 6n} < \frac{2\sum\_{i=1}^n X\_i}{\beta} < \chi^2\_{1-\alpha/2, 6n} \right)\\
&= \boxed{P\left( \frac{2\sum\_{i=1}^n X\_i}{\chi^2\_{1-\alpha/2, 6n}} < \beta < \frac{2\sum\_{i=1}^n X\_i}{\chi^2\_{\alpha/2, 6n}} \right)}
\end{align}
$$

$\therefore$ Confidence interval $(1-\alpha)100%$ untuk $\beta$ adalah $\boxed{\left(\frac{2\sum\_{i=1}^n X\_i}{\chi^2\_{1-\alpha/2, 6n}}, \frac{2\sum\_{i=1}^n X\_i}{\chi^2\_{\alpha/2, 6n}}\right)}$

## 6.35

> Let $X$ and $Y$ be the [[Def-mean|means]] of two independent [[Def-random-sample|random sample]], each of size $n$, from the respective distributions $N(\mu\_{1},\sigma^2)$ and $N(\mu\_{2},\sigma^2)$, where the common variance is known. Find $n$ such that
>
> $$ \operatorname{Pr}(\bar{X}-\bar{Y}-\sigma/5<\mu\_{1}-\mu\_{2}<\bar{X}-\bar{Y}+\sigma/5)=0.90 $$

**Answer**

Karena $\bar{X} \sim N(\mu\_1, \sigma^2/n)$ dan $\bar{Y} \sim N(\mu\_2, \sigma^2/n)$ saling bebas, maka:
$$
\begin{align}
E\[\bar{X} - \bar{Y}] &= \mu\_1 - \mu\_2\ \\
\text{Var}(\bar{X} - \bar{Y}) &= \text{Var}(\bar{X}) + \text{Var}(\bar{Y})\\
&= \frac{\sigma^2}{n} + \frac{\sigma^2}{n}\\
&= \frac{2\sigma^2}{n}
\end{align}
$$

Sehingga $\bar{X} - \bar{Y} \sim N\left(\mu\_1 - \mu\_2, \frac{2\sigma^2}{n}\right)$

Perhatikan bahwa
$$\frac{(\bar{X} - \bar{Y}) - (\mu\_1 - \mu\_2)}{\sqrt{2\sigma^2/n}} = \frac{(\bar{X} - \bar{Y}) - (\mu\_1 - \mu\_2)}{\sigma\sqrt{2/n}} \sim N(0,1)$$

Sehingga
$$
\begin{align}
0.90 & = P(\bar{X}-\bar{Y}-\sigma/5<\mu\_{1}-\mu\_{2}<\bar{X}-\bar{Y}+\sigma/5) \\
& = P(-\sigma/5 < (\bar{X}-\bar{Y}) - (\mu\_{1}-\mu\_{2}) < \sigma/5)\\
&= P\left(\frac{-\sigma/5}{\sigma\sqrt{2/n}} < \frac{(\bar{X}-\bar{Y}) - (\mu\_{1}-\mu\_{2})}{\sigma\sqrt{2/n}} < \frac{\sigma/5}{\sigma\sqrt{2/n}}\right)\\
&= P\left(\frac{-1/5}{\sqrt{2/n}} < Z < \frac{1/5}{\sqrt{2/n}}\right)\\
&= P\left(-\frac{\sqrt{n}}{5\sqrt{2}} < Z < \frac{\sqrt{n}}{5\sqrt{2}}\right)
\end{align}
$$

Untuk confidence interval 90%, $z\_{0.05} = 1.645$. Sehingga:
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
