---
publish: true
aliases:
  - Chapter 9 Exercises
created: 2026-03-25T15:22:40.597+07:00
modified: 2026-03-25T15:22:40.597+07:00
published: 2026-03-25T15:22:40.597+07:00
tags:
  - 
creation-time: 2025-12-11 14:09
status: in progress
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---

## 9.6

> Let $X\_{1},X\_{2},\dots,X\_{10}$ be a [[Def-random-sample|random sample]] from a distribution that is $N(\theta\_{1},\theta\_{2})$\[^1]. Find a [[def-best-critical-region_202508052110|best test]] of the [[def-types-of-statistical-hypotheses_202508051003|simple hypothesis]] $H\_{0}: \theta\_{1}=\theta\_{1}'=0,; \theta\_{2}=\theta\_{2}'=1$ against the [[def-hypothesis_202508050806|alternative simple hypothesis]] $H\_{1}: \theta\_{1}=\theta\_{1}''=1,; \theta\_{2}=\theta\_{2}''=4$.

**Answer**

Untuk $H\_0: \theta\_1 = 0, \theta\_2 = 1$, [[Def-likelihood-function|fungsi likelihood]] adalah:
$$
\begin{align}
L\_0(x\_1,\dots,x\_{10}) &= \prod\_{i=1}^{10} \frac{1}{\sqrt{2\pi \cdot 1}} \exp\left(-\frac{(x\_i-0)^2}{2 \cdot 1}\right) \\
&= (2\pi)^{-5} \exp\left(-\frac{1}{2}\sum\_{i=1}^{10} x\_i^2\right)
\end{align}
$$

Untuk $H\_1: \theta\_1 = 1, \theta\_2 = 4$, fungsi likelihood adalah:
$$
\begin{align}
L\_1(x\_1,\dots,x\_{10}) &= \prod\_{i=1}^{10} \frac{1}{\sqrt{2\pi \cdot 4}} \exp\left(-\frac{(x\_i-1)^2}{2 \cdot 4}\right) \\
&= (8\pi)^{-5} \exp\left(-\frac{1}{8}\sum\_{i=1}^{10} (x\_i-1)^2\right)
\end{align}
$$

Berdasarkan [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]], [[def-best-critical-region_202508052110|best critical region]] didefinisikan oleh:
$$
\begin{align}
\frac{L\_1}{L\_0} &\geq k  \\
\frac{(8\pi)^{-5} \exp\left(-\frac{1}{8}\sum\_{i=1}^{10} (x\_i-1)^2\right)}{(2\pi)^{-5} \exp\left(-\frac{1}{2}\sum\_{i=1}^{10} x\_i^2\right)} &\geq k \\
\frac{(2\pi)^{-5}}{(8\pi)^{-5}} \exp\left(-\frac{1}{8}\sum\_{i=1}^{10} (x\_i-1)^2 + \frac{1}{2}\sum\_{i=1}^{10} x\_i^2\right) &\geq k \\
\frac{1}{4^5} \exp\left(-\frac{1}{8}\sum\_{i=1}^{10} (x\_i-1)^2 + \frac{1}{2}\sum\_{i=1}^{10} x\_i^2\right) &\geq k
\end{align}
$$

Perhatikan bahwa:
$$
\begin{align}
-\frac{1}{8}\sum\_{i=1}^{10} (x\_i-1)^2 + \frac{1}{2}\sum\_{i=1}^{10} x\_i^2 &= -\frac{1}{8}\sum\_{i=1}^{10} (x\_i^2 - 2x\_i + 1) + \frac{1}{2}\sum\_{i=1}^{10} x\_i^2 \\
&= -\frac{1}{8}\sum\_{i=1}^{10} x\_i^2 + \frac{1}{4}\sum\_{i=1}^{10} x\_i - \frac{10}{8} + \frac{1}{2}\sum\_{i=1}^{10} x\_i^2 \\
&= \frac{3}{8}\sum\_{i=1}^{10} x\_i^2 + \frac{1}{4}\sum\_{i=1}^{10} x\_i - \frac{5}{4}
\end{align}
$$

Ingat bahwa $k$ adalah suatu konstanta positif. Misalkan $k' = \ln(k) + 5\ln(4) + \frac{5}{4}$. Dapat diperoleh:
$$
\begin{align}
\frac{L\_1}{L\_0} = \frac{1}{4^5} \exp\left(\frac{3}{8}\sum\_{i=1}^{10} x\_i^2 + \frac{1}{4}\sum\_{i=1}^{10} x\_i - \frac{5}{4}\right) &\geq k \\
\frac{3}{8}\sum\_{i=1}^{10} x\_i^2 + \frac{1}{4}\sum\_{i=1}^{10} x\_i - \frac{5}{4} &\geq \ln(k \cdot 4^5) \\
3\sum\_{i=1}^{10} x\_i^2 + 2\sum\_{i=1}^{10} x\_i &\geq k'
\end{align}
$$

Karena koefisien dari $\sum x\_i^2$ dan $\sum x\_i$ keduanya positif, [[def-test_202508050827|critical region]] dapat ditulis sebagai:

$$\boxed{C: 3\sum\_{i=1}^{10} X\_i^2 + 2\sum\_{i=1}^{10} X\_i \geq k'}$$

untuk suatu konstanta $k$ positif dengan $k'=\ln(k) + 5\ln(4) + \frac{5}{4}$.

$\therefore$ Best test untuk hipotesis yang diberikan adalah tolak $H\_0$ jika $3\sum\_{i=1}^{10} X\_i^2 + 2\sum\_{i=1}^{10} X\_i \geq k'$.

## 9.10

> Let $X\_{1},X\_{2},\dots,X\_{10}$ denote a [[Def-random-sample|random sample]] of size $10$ from a [[Discrete Distributions#Poisson distribution|Poisson distribution]] with [[Def-mean|mean]] $\theta$. Show that the [[def-test_202508050827|critical region]] $C$ defined by $\sum\_{i=1}^{10}x\_{i}\geq 3$ is a [[def-best-critical-region_202508052110|best critical region]] for [[def-test_202508050827|testing]] $H\_{0}: \theta=0.1$ against $H\_{1}: \theta=0.5$. Determine, for this test, the [[def-size-of-critical-region_202507291323|significance level]] $\alpha$ and [[def-power-of-a-test_202508050833|power]] at $\theta=0.5$.

**Jawab**

Diketahui [[Def-probability-mass-function-(pmf)|pmf]] dari [[Discrete Distributions#Poisson distribution|distribusi Poisson]] adalah
$$f(x;\theta) = \frac{\theta^x e^{-\theta}}{x!}, \quad x = 0,1,2,\dots$$

[[Def-likelihood-function|Fungsi likelihood]] untuk sampel $X\_1, X\_2, \dots, X\_{10}$ adalah:
$$
\begin{align}
L(\theta) &= \prod\_{i=1}^{10} \frac{\theta^{x\_i} e^{-\theta}}{x\_i!} \\
&= \frac{\theta^{\sum\_{i=1}^{10} x\_i} e^{-10\theta}}{\prod\_{i=1}^{10} x\_i!}
\end{align}
$$

Untuk $H\_0: \theta = 0.1$:
$$L\_0 = \frac{(0.1)^{\sum x\_i} e^{-1}}{\prod x\_i!}$$

Untuk $H\_1: \theta = 0.5$:
$$L\_1 = \frac{(0.5)^{\sum x\_i} e^{-5}}{\prod x\_i!}$$

Sehingga diperoleh
$$
\begin{align}
\frac{L\_1}{L\_0} &= \frac{(0.5)^{\sum x\_i} e^{-5}}{(0.1)^{\sum x\_i} e^{-1}} \\
&= \left(\frac{0.5}{0.1}\right)^{\sum x\_i} e^{-4} \\
&= 5^{\sum x\_i} e^{-4}
\end{align}
$$

Berdasarkan [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]], [[def-best-critical-region_202508052110|best critical region]] didefinisikan oleh:
$$
\begin{align}
\frac{L\_1}{L\_0} &\geq k \\
5^{\sum x\_i} e^{-4} &\geq k \\
5^{\sum x\_i} &\geq ke^4 \\
\sum x\_i &\geq \log\_5(ke^4)
\end{align}
$$

Karena $\log\_5(ke^4)$ adalah konstanta positif [[def-test_202508050827|critical region]] berbentuk $\sum\_{i=1}^{10} x\_i \geq c$ untuk suatu konstanta $c$, artinya, $C: \sum\_{i=1}^{10} x\_i \geq 3$ adalah best critical region.

Di bawah $H\_{0}$, $\sum\_{i=1}^{10} X\_i \sim \text{Poisson}(10 \times 0.1) = \text{Poisson}(1)$ sehingga

$$
\begin{align}
\alpha &= P\_{H\_0}\left\[\sum\_{i=1}^{10} X\_i \geq 3\right] \\
&= 1 - P\[\sum\_{i=1}^{10} X\_i \leq 2] \\
&= 1 - \left(P\[Y=0] + P\[Y=1] + P\[Y=2]\right) \\
&= 1 - \left(\frac{1^0 e^{-1}}{0!} + \frac{1^1 e^{-1}}{1!} + \frac{1^2 e^{-1}}{2!}\right) \\
&= 1 - e^{-1}\left(1 + 1 + \frac{1}{2}\right) \\
&= 1 - \frac{5e^{-1}}{2} \\
&= \boxed{1 - \frac{5}{2e} \approx 0.0803}
\end{align}
$$

Di bawah $H\_1$, $\sum\_{i=1}^{10} X\_i \sim \text{Poisson}(10 \times 0.5) = \text{Poisson}(5)$. Misal $Y\sim \text{Poisson(5)}$,sehingga
$$
\begin{align}
\alpha &= P\_{H\_1}\left\[\sum\_{i=1}^{10} X\_i \geq 3\right] \\
&= 1 - P\[Y \leq 2]  \\
&= 1 - \left(\frac{5^0 e^{-5}}{0!} + \frac{5^1 e^{-5}}{1!} + \frac{5^2 e^{-5}}{2!}\right) \\
&= 1 - e^{-5}\left(1 + 5 + \frac{25}{2}\right) \\
&= 1 - \frac{37e^{-5}}{2} \\
&= \boxed{1 - \frac{37}{2e^5} \approx 0.875}
\end{align}
$$

$\therefore$ Critical region $C: \sum\_{i=1}^{10} x\_i \geq 3$ adalah best critical region dengan significane level $\alpha \approx 0.0803$ dan power $\approx 0.875$

## 9.12

> Let $X$ have a [[Def-probability-density-function-(pdf)|p.d.f.]] of the form $f(x;\theta)=1/\theta$, $0\<x<\theta$, zero elsewhere. Let $Y\_{1}\<Y\_{2}\<Y\_{3}\<Y\_{4}$ denote the [[Def-order-statistics|order statistics]] of a [[Def-random-sample|random sample]] of size $4$ from this distribution. Let the observed value of $Y\_{4}$ be $y\_{4}$. We reject $H\_{0}:\theta=1$ and accept $H\_{1}:\theta \neq 1$ if either $y\_{4} \leq \frac{1}{2}$ or $y\_{4}\geq 1$. Find the [[def-power-function_202508050833|power function]] $K(\theta)$, $0<\theta$, of the [[def-test_202508050827|test]].

**Answer**

Diketahui $f(x;\theta)$ berasal dari [[Continuous Distributions#Uniform distribution|distribusi uniform]] $U(0, \theta)$. CDF-nya adalah $F(x) = x/\theta$ untuk $0 < x < \theta$.

CDF dari statistik terurut terbesar, $Y\_4$, dari sampel ukuran $n=4$ adalah:
$$ G(y\_4) = \[F(y\_4)]^4 = (y\_4/\theta)^4, \quad 0 < y\_4 < \theta $$

Daerah penolakan adalah $C = {y\_4 : y\_4 \leq 1/2 \text{ atau } y\_4 \geq 1}$.
$$ K(\theta) = P(Y\_4 \leq 1/2 | \theta) + P(Y\_4 \geq 1 | \theta) $$

**Kasus 1: $0 < \theta \leq 1/2$**

- $P(Y\_4 \leq 1/2) = 1$
- $P(Y\_4 \geq 1) = 0$, karena $Y\_4 < \theta \leq 1/2$.
  Jadi, $K(\theta) = 1$.

**Kasus 2: $1/2 < \theta < 1$**

- $P(Y\_4 \leq 1/2) = G(1/2) = ( (1/2)/\theta )^4 = 1/(16\theta^4)$.
- $P(Y\_4 \geq 1) = 0$, karena $Y\_4 < \theta < 1$.
  Jadi, $K(\theta) = 1/(16\theta^4)$.

**Kasus 3: $\theta \geq 1$**

- $P(Y\_4 \leq 1/2) = G(1/2) = ( (1/2)/\theta )^4 = 1/(16\theta^4)$.
- $P(Y\_4 \geq 1) = 1 - P(Y\_4 < 1) = 1 - G(1) = 1 - (1/\theta)^4$.
  Jadi, $K(\theta) = \frac{1}{16\theta^4} + 1 - \frac{1}{\theta^4} = 1 - \frac{15}{16\theta^4}$.

Menggabungkan semua kasus, fungsi power adalah:
$$ K(\theta) = \begin{cases} 1 & 0 < \theta \leq 1/2 \ 1/(16\theta^4) & 1/2 < \theta < 1 \ 1 - 15/(16\theta^4) & \theta \geq 1 \end{cases} $$

$\therefore$ Fungsi power dari tes tersebut adalah $\boxed{K(\theta) = \begin{cases} 1 & 0 < \theta \leq 1/2 \ 1/(16\theta^4) & 1/2 < \theta < 1 \ 1 - 15/(16\theta^4) & \theta \geq 1 \end{cases}}$.

## 9.14

> Consider the two [[Continuous Distributions#Normal distribution|normal distributions]] $N(\mu\_{1},400)$ and $N(\mu\_{2},225)$. Let $\theta=\mu\_{1}-\mu\_2$. Let $\bar{x}$ and $\bar{y}$ denote the observed [[Def-mean|means]] of two independent [[Def-random-sample|random samples]], each of size $n$, from these two distributions. We reject $H\_{0}:\theta=0$ and accept $H\_{1}:\theta>0$ if and only if $\bar{x}-\bar{y} \geq c$. If $K(\theta)$ is the [[def-power-function_202508050833|power function]] of this test, find $n$ and $c$ so that $K(0)=0.05$ and $K(10)=0.90$, approximately.

**Answer**

Diketahui $\bar{X}\sim N(\mu\_1, 400/n)$ dan $\bar{Y}\sim N(\mu\_2, 225/n)$.

Misalkan $W = \bar{X}-\bar{Y}$. Karena $\bar{X}$ dan $\bar{Y}$ independen, $W$ berdistribusi normal dengan:

- $E\[W] = E\[\bar{X}]-E\[\bar{Y}] = \mu\_1-\mu\_2 = \theta$
- $\text{Var}(W) = \text{Var}(\bar{X})+\text{Var}(\bar{Y}) = \frac{400}{n} + \frac{225}{n} = \frac{625}{n}$
  Sehingga, $W \sim N(\theta, 625/n)$.

[[def-power-function_202508050833|Fungsi power]] $K(\theta)$ dari tes yang menolak $H\_0$ jika $W \geq c$ adalah:
$$ K(\theta) = P(W \geq c) = P\left(\frac{W-\theta}{\sqrt{625/n}} \geq \frac{c-\theta}{\sqrt{625/n}}\right) = P\left(Z \geq \frac{c-\theta}{25/\sqrt{n}}\right) $$
dimana $Z \sim N(0,1)$.

Diberikan dua kondisi:

1. $K(0) = 0.05$

   $P\left(Z \geq \frac{c}{25/\sqrt{n}}\right) = 0.05$.

   Dari tabel normal standar, $z\_{0.05} \approx 1.645$.

   Maka, $\frac{c}{25/\sqrt{n}} = 1.645 \implies c = 1.645 \frac{25}{\sqrt{n}}$ (1)

2. $K(10) = 0.90$.

   $P\left(Z \geq \frac{c-10}{25/\sqrt{n}}\right) = 0.90$.

   Dari tabel, nilai z yang sesuai adalah $z\_{0.90} = -z\_{0.10} \approx -1.282$.

   Maka, $\frac{c-10}{25/\sqrt{n}} = -1.282 \implies c-10 = -1.282 \frac{25}{\sqrt{n}}$ (2)

Substitusikan (1) ke dalam (2):
$$
\begin{align}
1.645 \frac{25}{\sqrt{n}} - 10 &= -1.282 \frac{25}{\sqrt{n}} \\
(1.645 + 1.282) \frac{25}{\sqrt{n}} &= 10 \\
2.927 \frac{25}{\sqrt{n}} &= 10 \\
\sqrt{n} &= \frac{2.927 \times 25}{10} = 7.3175 \\
n &= (7.3175)^2 \approx 53.54
\end{align}
$$
Karena $n$ harus bilangan bulat, $n$ dapat dibulatkan ke atas menjadi $n=54$.

Lalu, $c$ dapat dicari menggunakan $n=54$ dalam persamaan (1):
$$ c = 1.645 \frac{25}{\sqrt{54}} \approx 1.645 \times \frac{25}{7.348} \approx 5.596 $$

$\therefore$ Nilai $n$ dan $c$ yang memenuhi adalah $\boxed{n=54}$ dan $\boxed{c \approx 5.596}$.

## 9.18

> Let $X\_{1},X\_{2},\dots,X\_{n}$ denote a [[Def-random-sample|random sample]] from a [[Continuous Distributions#Normal distribution|normal distribution]] $N(\theta,16)$. Find the sample size $n$ and a [[def-uniformly-most-powerful-test_202508052119|uniformly most powerful test]] of $H\_{0}:\theta=25$ against $H\_{1}:\theta<25$ with [[def-power-function_202508050833|power function]] $K(\theta)$ so that approximately $K(25)=0.10$ and $K(23)=0.90$.

**Answer**

Diketahui $X\_i \sim N(\theta, 16)$, sehingga mean sampel $\bar{X} \sim N(\theta, 16/n)$.

Berdasarkan Teorema Karlin-Rubin (karena keluarga distribusi normal memiliki [[def-monotone-likelihood-ration-(mlr)_202508071604|Monotone Likelihood Ration (mlr)]]), [[def-uniformly-most-powerful-test_202508052119|uniformly most powerful test ]] adalah dengan menolak $H\_0$ jika statistik cukup $\bar{X}$ kurang dari suatu nilai kritis $c$.

Bentuk tes UMP: Tolak $H\_0$ jika $\bar{X} \leq c$.

[[def-power-function_202508050833|Fungsi power]] $K(\theta)$ adalah:
$$ K(\theta) = P(\bar{X} \leq c | \theta) = P\left(\frac{\bar{X}-\theta}{4/\sqrt{n}} \leq \frac{c-\theta}{4/\sqrt{n}}\right) = \Phi\left(\frac{c-\theta}{4/\sqrt{n}}\right) $$
dimana $\Phi$ adalah CDF dari distribusi normal standar.

Diberikan dua kondisi:

1. $K(25)=0.10$ (tingkat signifikansi $\alpha$).

   $\Phi\left(\frac{c-25}{4/\sqrt{n}}\right) = 0.10$.

   Dari tabel normal, $z\_{0.10} \approx -1.282$.

   Maka, $\frac{c-25}{4/\sqrt{n}} = -1.282 \implies c = 25 - 1.282 \frac{4}{\sqrt{n}}$ (1)

2. $K(23)=0.90$.

   $\Phi\left(\frac{c-23}{4/\sqrt{n}}\right) = 0.90$.

   Dari tabel normal, $z\_{0.90} \approx 1.282$.

   Maka, $\frac{c-23}{4/\sqrt{n}} = 1.282 \implies c = 23 + 1.282 \frac{4}{\sqrt{n}}$ (2)

Sehingga dapat diperoleh
$$
\begin{align}
25 - 1.282 \frac{4}{\sqrt{n}} &= 23 + 1.282 \frac{4}{\sqrt{n}} \\
2 &= 2 \left(1.282 \frac{4}{\sqrt{n}}\right) \\
1 &= \frac{5.128}{\sqrt{n}} \\
\sqrt{n} &= 5.128 \\
n &= (5.128)^2 \approx 26.29
\end{align}
$$

Karena $n$ harus bilangan bulat, kita bulatkan ke atas menjadi $n=27$.

Cari nilai $c$ menggunakan $n=27$ dalam persamaan (2):
$$ c = 23 + 1.282 \frac{4}{\sqrt{27}} \approx 23 + 1.282 \frac{4}{5.196} \approx 23 + 0.987 \approx 23.987 $$

$\therefore$ Ukuran sampel yang dibutuhkan adalah $\boxed{n=27}$, dan tes UMP adalah $\boxed{\text{Tolak } H\_0 \text{ jika } \bar{X} \leq 24}$.

## 9.21

> Let $X\_{1},X\_{2},\dots,X\_{n}$ be a [[Def-random-sample|random sample]] from a distribution with [[Def-probability-density-function-(pdf)|pdf]] $f(x;\theta)=\theta x^{\theta-1},0\<x<\infty$, zero elsewhere, where $\theta>0$. Find a [[def-sufficient-statistic_202507170925|sufficient statistic]] for $\theta$ and show that a [[def-uniformly-most-powerful-test_202508052119|uniformly most powerful test]] of $H\_{0}: \theta=6$ against $H\_{1}: \theta<6$ is based on this [[Def-statistic|statistic]].

**Jawab**

[[Def-likelihood-function|Fungsi likelihood]] untuk sampel adalah:
$$
\begin{align}
L(\theta) &= \prod\_{i=1}^n \theta x\_i^{\theta-1} \\
&= \theta^n \prod\_{i=1}^n x\_i^{\theta-1} \\
&= \theta^n \left(\prod\_{i=1}^n x\_i\right)^{\theta-1}
\end{align}
$$

Log-likelihood:
$$
\begin{align}
\ln L(\theta) &= n \ln \theta + (\theta-1) \sum\_{i=1}^n \ln x\_i \\
&= n \ln \theta + (\theta-1) \ln \left(\prod\_{i=1}^n x\_i\right)
\end{align}
$$

> [!note]
> Untuk mencari [[def-uniformly-most-powerful-test_202508052119|UMPT]], perlu dicari [[def-uniformly-most-powerful-critical-region_202508052119|UMP Critical Region]], perlu dicari [[def-best-critical-region_202508052110|Best Critical Region]] menggunakan [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]].
> Selain itu, dari Hogg\&Craig ed8,
> ![[assets/Pasted image 20250805231428.png]]

Perhatikan bahwa berdasarkan [[theorem-neyman-theorem_202508052229|Neyman Theorem]],  $Y\_{1} = \prod\_{i=1}^n X\_i=u\_{1}(\mathbf{X})$ adalah [[def-sufficient-statistic_202507170925|statistik cukup]] untuk $\theta$ dengan:
$$
\begin{align}
Y & =\theta^n\left( \prod x\_{i} \right)^{\theta-1} \cdot 1 \\
& = k\_{1}\[u\_{1}(\mathbf{x});\theta] \cdot k\_{2}(\mathbf{x})
\end{align}
$$

Misalkan $\theta\_1 < 6$. Rasio likelihood adalah:
$$
\begin{align}
\frac{L(\theta\_1)}{L(6)} &= \frac{\theta\_1^n \left(\prod x\_i\right)^{\theta\_1-1}}{6^n \left(\prod x\_i\right)^{6-1}} \\
&= \left(\frac{\theta\_1}{6}\right)^n \left(\prod x\_i\right)^{\theta\_1-6}
\end{align}
$$

Rasio log:
$$
\begin{align}
\ln\left(\frac{L(\theta\_1)}{L(6)}\right) &= n \ln\left(\frac{\theta\_1}{6}\right) + (\theta\_1-6) \ln\left(\prod x\_i\right) \\
&= n \ln\left(\frac{\theta\_1}{6}\right) + (\theta\_1-6) \sum\_{i=1}^n \ln x\_i
\end{align}
$$

Lalu:

1. Karena $\theta\_1 < 6$, maka $\theta\_1 - 6 < 0$.
2. Karena $\ln x\_i$ negatif untuk $0 < x\_i < 1$, maka $(\theta\_1-6) \sum \ln x\_i > 0$
3. Perhatikan bahwa $(\theta\_{1}-6)\sum \ln x\_{i}$ meningkat ketika $\sum \ln x\_i$ semakin negatif
4. Karena $\sum \ln x\_i = \ln\left(\prod x\_i\right)$ maka $\ln\left( \frac{L(\theta\_{1})}{L(6)} \right)$ meningkat ketika $\prod x\_i$ mengecil ($y$ mengecil maka $\ln (y)$ membesar)
5. Sehingga, $\forall\theta\_1 < 6$, [[def-best-critical-region_202508052110|best critical region]] adalah $\prod\_{i=1}^n X\_i \leq k$ untuk suatu konstanta $k$

Karena bentuk critical region sama untuk semua $\theta\_1 < 6$ (hanya konstanta $k$ yang berbeda, tergantung pada significance level), maka test yang menolak $H\_0$ ketika $\prod\_{i=1}^n X\_i \leq k$ adalah **uniformly most powerful test**.

$\therefore$ Statistik cukup untuk $\theta$ adalah $Y\_{1} = \prod\_{i=1}^n X\_i$. [[def-uniformly-most-powerful-test_202508052119|UMPT]] untuk $H\_0: \theta = 6$ melawan $H\_1: \theta < 6$ yang berkaitan dengan $Y\_{1}$ adalah menolak $H\_0$ ketika $\prod\_{i=1}^n X\_i \leq k$ untuk suatu konstanta $k$.

## 9.28

> Let $X\_{1},X\_{2},\dots,X\_{n}$ be a [[Def-random-sample|random sample]] from the [[Continuous Distributions#Normal distribution|normal distribution]] $N(\theta,1)$. Show that the [[Def-likelihood-function|likelihood]] ratio principle for testing $H\_{0}: \theta=\theta'$, where $\theta'$ is specified, against $H\_{1}: \theta\neq \theta'$ leads to the inequality $|\bar{x}-\theta'|\geq c$. Is this a [[def-uniformly-most-powerful-test_202508052119|uniformly most powerful test]] of $H\_{0}$ against $H\_{1}$?

Diketahui $X\_i \sim N(\theta, 1)$. Ambil sembarang $\theta \in \Omega$. Fungsi likelihood untuk sampel adalah:
$$
\begin{align}
L(\theta) &= \prod\_{i=1}^n \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{(x\_i-\theta)^2}{2}\right) \\
&= (2\pi)^{-n/2} \exp\left(-\frac{1}{2}\sum\_{i=1}^n (x\_i-\theta)^2\right) \ \\

\frac{\partial \ln L(\theta)}{\partial \theta} &= \frac{\partial}{\partial \theta}\left{\ln\left\[(2\pi)^{-n/2} \exp\left(-\frac{1}{2}\sum\_{i=1}^n (x\_i-\theta)^2\right)\right]\right} \\

&= \frac{\partial}{\partial \theta}\left{\ln\left\[(2\pi)^{-n/2}\right] + \ln\left\[\exp\left(-\frac{1}{2}\sum\_{i=1}^n (x\_i-\theta)^2\right)\right]\right} \\
&= \frac{\partial}{\partial \theta}\left{-\frac{1}{2}\sum\_{i=1}^n (x\_i-\theta)^2\right} \\
0 &= \sum\_{i=1}^n (x\_i-\theta) \\
0 & = \sum\_{i=1}^nx\_{i} - n\theta \\
\theta & = \bar{x}
\end{align}
$$

Sehingga diperoleh [[Def-maximum-likelihood-estimator-(mle)|MLE]] $\hat{\theta} = \bar{x}$ dan:
$$L(\hat{\theta}) = (2\pi)^{-n/2} \exp\left(-\frac{1}{2}\sum\_{i=1}^n (x\_i-\bar{x})^2\right)$$

[[def-likelihood-ratio-test_202512111531|Likelihood ratio]]-nya adalah:
$$
\begin{align}
\lambda &= \frac{L(\theta')}{L(\hat{\theta})} \\
&= \frac{\exp\left(-\frac{1}{2}\sum\_{i=1}^n (x\_i-\theta')^2\right)}{\exp\left(-\frac{1}{2}\sum\_{i=1}^n (x\_i-\bar{x})^2\right)} \\
&= \exp\left(-\frac{1}{2}\left\[\sum\_{i=1}^n (x\_i-\theta')^2 - \sum\_{i=1}^n (x\_i-\bar{x})^2\right]\right)
\end{align}
$$

Perhatikan bahwa:
$$
\begin{align}
\sum\_{i=1}^n (x\_i-\theta')^2 - \sum\_{i=1}^n (x\_i-\bar{x})^2 &= \sum\_{i=1}^n \[(x\_i-\theta')^2 - (x\_i-\bar{x})^2] \\
&= \sum\_{i=1}^n \[x\_i^2 - 2x\_i\theta' + (\theta')^2 - x\_i^2 + 2x\_i\bar{x} - \bar{x}^2] \\
&= \sum\_{i=1}^n \[2x\_i(\bar{x}-\theta') + (\theta')^2 - \bar{x}^2] \\
&= 2(\bar{x}-\theta')\sum\_{i=1}^n x\_i + n\[(\theta')^2 - \bar{x}^2] \\
&= 2n(\bar{x}-\theta')^2 + n\[(\theta')^2 - \bar{x}^2] \\
&= n(\bar{x}-\theta')^2
\end{align}
$$

Sehingga:
$$\lambda = \exp\left(-\frac{n(\bar{x}-\theta')^2}{2}\right)$$

Ambil sembarang $k$ konstanta positif. Dapat diperoleh
$$
\begin{align}
\exp\left(-\frac{n(\bar{x}-\theta')^2}{2}\right) &\leq k\\
-\frac{n(\bar{x}-\theta')^2}{2} &\leq \ln k \\
(\bar{x}-\theta')^2 &\geq -\frac{2\ln k}{n} \\
|\bar{x}-\theta'| &\geq c
\end{align}
$$

dimana $c = \sqrt{-\dfrac{2\ln k}{n}}$

Test ini bukan [[def-uniformly-most-powerful-test_202508052119|UMPT]], karena UMPT didefiniskan untuk $H\_{1}$ [[def-types-of-statistical-hypotheses_202508051003|composite hypothesis]], sementara $H\_{1}$ yang diberikan adalah [[def-types-of-statistical-hypotheses_202508051003|simple hypothesis]].

$\therefore$  Terbukti $|\bar{x}-\theta'| \geq c$. Tetapi, test ini bukan UMPT karena $H\_1$ adalah composite hypothesis.

## 9.29

> Let $X\_{1},X\_{2},\dots,X\_{n}$ be a [[Def-random-sample|random sample]] from the [[3.4-the-normal-distribution_202507240800|normal distribution]] $N(\theta\_{1},\theta\_{2})$.
>
> Show that the likelihood ratio principle for testing $H\_{0}:\theta\_{2}=\theta\_{2}'$ specified, and $\theta\_{1}$ specified, against $H\_{1}:\theta\_{2}\neq\theta\_{2}$, $\theta\_{1}$ unspecified, leads to a [[def-test_202508050827|test]] that rejects when $\sum\_{i}^n(x\_{i}-\bar{x})^{2}\leq c$ or $\sum\_{i}^n(x\_{i}-\bar{x})^{2}\geq c\_{2}$, where $c\_{1}\<c\_{2}$ are selected appropriately

Diketahui $X\_i \sim N(\theta\_1, \theta\_2)$. [[Def-likelihood-function|Fungsi likelihood]] untuk sampel adalah:
$$L(\theta\_1, \theta\_2) = \prod\_{i=1}^n \frac{1}{\sqrt{2\pi\theta\_2}} \exp\left(-\frac{(x\_i-\theta\_1)^2}{2\theta\_2}\right) = (2\pi\theta\_2)^{-n/2} \exp\left(-\frac{1}{2\theta\_2}\sum\_{i=1}^n (x\_i-\theta\_1)^2\right)$$

**Di bawah $H\_0$:** $\theta\_2 = \theta\_2'$ (specified), $\theta\_1$ unspecified.

Untuk memaksimumkan $L(\theta\_1, \theta\_2')$, cari $\hat{\theta}_1$ dengan:
$$
\begin{align}
\frac{\partial}{\partial \theta\_1}\ln L(\theta\_1, \theta\_2') &= \frac{\partial}{\partial \theta\_1}\left\[-\frac{1}{2\theta\_2'}\sum_{i=1}^n (x\_i-\theta\_1)^2\right] = 0 \\
\frac{1}{\theta\_2'}\sum\_{i=1}^n (x\_i-\theta\_1) &= 0 \\
\hat{\theta}\_1 &= \bar{x}
\end{align}
$$

Sehingga:
$$L(\hat{\theta}_1, \theta\_2') = (2\pi\theta\_2')^{-n/2} \exp\left(-\frac{1}{2\theta\_2'}\sum_{i=1}^n (x\_i-\bar{x})^2\right)$$

**Di bawah $H\_1$:** $\theta\_1$ dan $\theta\_2$ keduanya unspecified.

Untuk memaksimumkan $L(\theta\_1, \theta\_2)$:
$$
\begin{align}
\frac{\partial \ln L}{\partial \theta\_1} &= 0 \implies \hat{\theta}_1 = \bar{x} \\
\frac{\partial \ln L}{\partial \theta\_2} &= \frac{\partial}{\partial \theta\_2}\left\[-\frac{n}{2}\ln\theta\_2 - \frac{1}{2\theta\_2}\sum_{i=1}^n (x\_i-\bar{x})^2\right] = 0 \\
-\frac{n}{2\theta\_2} + \frac{1}{2\theta\_2^2}\sum\_{i=1}^n (x\_i-\bar{x})^2 &= 0 \\
\hat{\theta}_2 &= \frac{1}{n}\sum_{i=1}^n (x\_i-\bar{x})^2
\end{align}
$$

Sehingga:
$$L(\hat{\theta}\_1, \hat{\theta}\_2) = (2\pi\hat{\theta}\_2)^{-n/2} \exp\left(-\frac{n}{2}\right)$$

[[def-likelihood-ratio-test_202512111531|Likelihood ratio]] adalah:
$$
\begin{align}
\lambda &= \frac{L(\hat{\theta}\_1, \theta\_2')}{L(\hat{\theta}\_1, \hat{\theta}\_2)} \\
&= \frac{(2\pi\theta\_2')^{-n/2} \exp\left(-\frac{1}{2\theta\_2'}\sum (x\_i-\bar{x})^2\right)}{(2\pi\hat{\theta}\_2)^{-n/2} \exp(-n/2)} \\
&= \left(\frac{\hat{\theta}\_2}{\theta\_2'}\right)^{-n/2} \exp\left(-\frac{1}{2\theta\_2'}\sum (x\_i-\bar{x})^2 + \frac{n}{2}\right) \\
&= \left(\frac{\hat{\theta}\_2}{\theta\_2'}\right)^{-n/2} \exp\left(\frac{n}{2} - \frac{n\hat{\theta}\_2}{2\theta\_2'}\right) \\
&= \left(\frac{\hat{\theta}\_2}{\theta\_2'}\right)^{-n/2} \exp\left(\frac{n}{2}\left(1 - \frac{\hat{\theta}\_2}{\theta\_2'}\right)\right)
\end{align}
$$

Misalkan $S^2 = \sum\_{i=1}^n (x\_i-\bar{x})^2 = n\hat{\theta}\_2$. Maka:
$$\lambda = \left(\frac{S^2}{n\theta\_2'}\right)^{-n/2} \exp\left(\frac{n}{2}\left(1 - \frac{S^2}{n\theta\_2'}\right)\right)$$

Test menolak $H\_0$ ketika $\lambda \leq k$ untuk konstanta $k$.

Perhatikan bahwa $\lambda$ adalah fungsi dari $S^2/\theta\_2'$. Fungsi $\lambda(S^2)$ mencapai maksimum ketika $S^2 = n\theta\_2'$ dan menurun ketika $S^2$ menjauh dari $n\theta\_2'$ (baik lebih kecil atau lebih besar).

Karena $\lambda \leq k$ ekuivalen dengan $S^2 \leq c\_1$ atau $S^2 \geq c\_2$ untuk konstanta $c\_1 < n\theta\_2' < c\_2$ yang dipilih sesuai dengan tingkat signifikansi.

$\therefore$ Test menolak $H\_0$ ketika $\boxed{\sum\_{i=1}^n(x\_i-\bar{x})^2 \leq c\_1 \text{ atau } \sum\_{i=1}^n(x\_i-\bar{x})^2 \geq c\_2}$ dimana $c\_1 < c\_2$ dipilih sesuai tingkat signifikansi.

## 9.32

> Let $Y\_{1}\<Y\_{2}<\dots\<Y\_{5}$ be the [[Def-order-statistics|order statistics]] of a [[Def-random-sample|random sample]] of size $n=5$ from a distribution with [[Def-probability-density-function-(pdf)|p.d.f.]] $f(x;\theta)=\frac{1}{2}e^{-|x-\theta|}$, $-\infty\<x<\infty$, for all real $\theta$.
>
> Find the [[def-likelihood-ratio-test_202512111531|likelihood ratio test]] $\lambda$ for [[def-test_202508050827|testing]] $H\_{0}=\theta\_{0}$ against $H\_{1}:\theta\neq\theta\_{0}$.

[[Def-likelihood-function|Fungsi likelihood]] untuk sampel adalah:
$$
\begin{align}
L(\theta) &= \prod\_{i=1}^5 \frac{1}{2}e^{-|x\_i-\theta|} \\
&= \frac{1}{32} \exp\left(-\sum\_{i=1}^5 |x\_i-\theta|\right)
\end{align}
$$

Untuk memaksimumkan $L(\theta)$, perlu meminimumkan $\sum\_{i=1}^5 |x\_i-\theta|$. Diketahui bahwa median sampel meminimumkan jumlah deviasi absolut. Untuk $n=5$, median adalah $Y\_3$.

Sehingga $\hat{\theta} = Y\_3$ (statistik terurut ketiga).

**Di bawah $H\_0$:** $\theta = \theta\_0$
$$L(\theta\_0) = \frac{1}{32} \exp\left(-\sum\_{i=1}^5 |x\_i-\theta\_0|\right)$$

**Di bawah $H\_1$:** $\theta$ unspecified
$$L(\hat{\theta}) = L(Y\_3) = \frac{1}{32} \exp\left(-\sum\_{i=1}^5 |x\_i-Y\_3|\right)$$

[[def-likelihood-ratio-test_202512111531|Likelihood ratio]] adalah:
$$
\begin{align}
\lambda &= \frac{L(\theta\_0)}{L(\hat{\theta})} \\
&= \frac{\exp\left(-\sum\_{i=1}^5 |x\_i-\theta\_0|\right)}{\exp\left(-\sum\_{i=1}^5 |x\_i-Y\_3|\right)} \\
&= \exp\left(-\sum\_{i=1}^5 |x\_i-\theta\_0| + \sum\_{i=1}^5 |x\_i-Y\_3|\right) \\
&= \exp\left(\sum\_{i=1}^5 |x\_i-Y\_3| - \sum\_{i=1}^5 |x\_i-\theta\_0|\right)
\end{align}
$$

Perhatikan bahwa:
$$
\begin{align}
\sum\_{i=1}^5 |x\_i-Y\_3| & = \sum\_{i=1}^5 |Y\_i-Y\_3| \\
& = (Y\_3-Y\_1) + (Y\_3-Y\_2) + 0 + (Y\_4-Y\_3) + (Y\_5-Y\_3) \\
& = 2Y\_3 - Y\_1 - Y\_2 + Y\_4 + Y\_5 - 2Y\_3 \\
& = Y\_4 + Y\_5 - Y\_1 - Y\_2
\end{align}
$$

$\therefore$ Likelihood ratio test adalah $\boxed{\lambda = \exp\left(Y\_4 + Y\_5 - Y\_1 - Y\_2 - \sum\_{i=1}^5 |Y\_i-\theta\_0|\right)}$

## 9.34

> A [[Def-random-sample|random sample]] $X\_{1},X\_{2},\dots,X\_{n}$ arises from a distribution given by
>
> $$ \begin{align} H\_{0} & : f(x;\theta) = \frac{1}{\theta} & 0\<x< \theta ,\quad 0 \text{ elsewhere} \ H\_{1} & : f(x;\theta) = \frac{1}{\theta} e^{x/\theta} & 0\<x< \theta ,\quad 0 \text{ elsewhere} \end{align} $$
>
> Determine the [[def-likelihood-ratio-test_202512111531|likelihood ratio test]] $(\lambda)$ associated with the [[def-test_202508050827|test]] of $H\_{0}$ against $H\_{1}$.

**Di bawah $H\_0$:** $f(x;\theta) = \frac{1}{\theta}$ untuk $0\<x<\theta$ (distribusi [[Continuous Distributions#Uniform distribution|uniform]])

[[Def-likelihood-function|Fungsi likelihood]]:
$$L\_0(\theta) = \prod\_{i=1}^n \frac{1}{\theta} = \frac{1}{\theta^n}, \quad \theta \geq \max(x\_i) = x\_{(n)}$$

Untuk memaksimumkan $L\_0(\theta)$, pilih $\theta$ sekecil mungkin, yaitu $\hat{\theta}_0 = x_{(n)}$.

Sehingga:
$$L\_0(\hat{\theta}_0) = \frac{1}{x_{(n)}^n}$$

**Di bawah $H\_1$:** $f(x;\theta) = \frac{1}{\theta}e^{-x/\theta}$ untuk $x>0$ (distribusi [[Continuous Distributions#Exponential distribution|eksponensial]])

Fungsi likelihood:
$$
\begin{align}
L\_1(\theta) &= \prod\_{i=1}^n \frac{1}{\theta}e^{-x\_i/\theta} \\
&= \frac{1}{\theta^n} \exp\left(-\frac{1}{\theta}\sum\_{i=1}^n x\_i\right)
\end{align}
$$

Untuk memaksimumkan:
$$
\begin{align}
\frac{\partial \ln L\_1}{\partial \theta} &= \frac{\partial}{\partial \theta}\left\[-n\ln\theta - \frac{1}{\theta}\sum\_{i=1}^n x\_i\right] = 0 \\
-\frac{n}{\theta} + \frac{1}{\theta^2}\sum\_{i=1}^n x\_i &= 0 \\
\hat{\theta}_1 &= \frac{1}{n}\sum_{i=1}^n x\_i = \bar{x}
\end{align}
$$

Sehingga:
$$L\_1(\hat{\theta}\_1) = \frac{1}{\bar{x}^n} \exp\left(-\frac{n\bar{x}}{\bar{x}}\right) = \frac{1}{\bar{x}^n} e^{-n}$$

[[def-likelihood-ratio-test_202512111531|Likelihood ratio]] adalah:
$$
\begin{align}
\lambda &= \frac{L\_0(\hat{\theta}_0)}{L\_1(\hat{\theta}_1)} \\
&= \frac{1/x_{(n)}^n}{e^{-n}/\bar{x}^n} \\
&= \frac{\bar{x}^n}{x_{(n)}^n} e^{-n} \\
&= \left(\frac{\bar{x}}{x\_{(n)}}\right)^n e^{-n}
\end{align}
$$

$\therefore$ Likelihood ratio test adalah $\boxed{\lambda = \left(\frac{\bar{X}}{X\_{(n)}}\right)^n e^{-n}}$ dimana $X\_{(n)} = \max(X\_1, \ldots, X\_n)$.

## 9.47

> Consider a [[Def-random-sample|random sample]] $X\_{1},X\_{2},\dots,X\_{n}$ from a distribution with [[Def-probability-density-function-(pdf)|pdf]] $f(x;\theta)=\theta(1-x)^{\theta-1},; 0\<x<1$, zero elsewhere, where $\theta>0$.
>
> 1. Find the form of the [[def-uniformly-most-powerful-test_202508052119|uniformly most powerful test]] of $H\_{0}: \theta=1$ against $H\_{1}: \theta>1$.
> 2. What is the [[Def-likelihood-function|likelihood]] ratio for $\lambda$ for testing $H\_{0}: \theta=1$ against $H\_{1}: \theta\neq 1$?

### 9.47.1

Fungsi likelihood untuk sampel adalah:
$$
\begin{align}
L(\theta) &= \prod\_{i=1}^n \theta(1-x\_i)^{\theta-1} \\
&= \theta^n \prod\_{i=1}^n (1-x\_i)^{\theta-1} \\
&= \theta^n \left\[\prod\_{i=1}^n (1-x\_i)\right]^{\theta-1}
\end{align}
$$

Misalkan $\theta\_1 > 1$. Rasio likelihood adalah:
$$
\begin{align}
\frac{L(\theta\_1)}{L(1)} &= \frac{\theta\_1^n \left\[\prod\_{i=1}^n (1-x\_i)\right]^{\theta\_1-1}}{1^n \left\[\prod\_{i=1}^n (1-x\_i)\right]^{1-1}} \\
&= \theta\_1^n \left\[\prod\_{i=1}^n (1-x\_i)\right]^{\theta\_1-1} \ \\

\ln\left(\frac{L(\theta\_1)}{L(1)}\right) &= n\ln(\theta\_1) + (\theta\_1-1)\ln\left\[\prod\_{i=1}^n (1-x\_i)\right] \\
&= n\ln(\theta\_1) + (\theta\_1-1)\sum\_{i=1}^n \ln(1-x\_i)
\end{align}
$$

Karena $\theta\_1 > 1$, maka $\theta\_1 - 1 > 0$. Untuk $0 < x\_i < 1$, kita memiliki $0 < 1-x\_i < 1$ sehingga $\ln(1-x\_i) < 0$.

Rasio likelihood meningkat ketika $\sum\_{i=1}^n \ln(1-x\_i)$ meningkat (menjadi kurang negatif), yang terjadi ketika $\prod\_{i=1}^n (1-x\_i)$ meningkat.

Oleh karena itu, untuk setiap $\theta\_1 > 1$, [[def-best-critical-region_202508052110|best critical region]] adalah:
$$\prod\_{i=1}^n (1-X\_i) \geq k\iff\sum\_{i=1}^n \ln(1-X\_i) \geq k',\quad \forall \theta\_{1}>1$$
untuk suatu konstanta $k'$.

$\therefore$ UMPT untuk $H\_0: \theta = 1$ versus $H\_1: \theta > 1$ adalah:

$$\boxed{\text{Tolak } H\_0 \text{ jika } \sum\_{i=1}^n \ln(1-X\_i) \geq k'}$$

### 9.47.2

Untuk $H\_0: \theta = 1$:
$$
\begin{align}
L(1) & = \prod\_{i=1}^n (1-x\_i)^{1-1} = 1 \\
\ln L(\theta) &= n\ln(\theta) + (\theta-1)\sum\_{i=1}^n \ln(1-x\_i) \\
\frac{\partial \ln L}{\partial \theta} &= \frac{n}{\theta} + \sum\_{i=1}^n \ln(1-x\_i) = 0
\end{align}
$$

Sehingga:
$$\hat{\theta} = -\frac{n}{\sum\_{i=1}^n \ln(1-x\_i)}$$

Likelihood maksimum:
$$
\begin{align}
L(\hat{\theta}) &= \hat{\theta}^n \left\[\prod\_{i=1}^n (1-x\_i)\right]^{\hat{\theta}-1} \\
&= \left(-\frac{n}{\sum\_{i=1}^n \ln(1-x\_i)}\right)^n \left\[\prod\_{i=1}^n (1-x\_i)\right]^{-\frac{n}{\sum\_{i=1}^n \ln(1-x\_i)}-1}
\end{align}
$$

Likelihood ratio adalah:
$$\boxed{\lambda = \frac{L(1)}{L(\hat{\theta})} = \frac{1}{L(\hat{\theta})} = \frac{\left(\sum\_{i=1}^n \ln(1-x\_i)\right)^n}{(-n)^n} \left\[\prod\_{i=1}^n (1-x\_i)\right]^{\frac{n}{\sum\_{i=1}^n \ln(1-x\_i)}+1}}$$

\[^1]: [[Continuous Distributions#Normal distribution|Normal distribution]]
