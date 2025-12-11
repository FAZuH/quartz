---
{"publish":true,"aliases":["Exercises from 5th ed Book"],"created":"2025-10-14T04:15:27.075+07:00","modified":"2025-12-11T14:10:28.599+07:00","published":"2025-12-11T14:10:28.599+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-26 15:32","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
---


- [[3 Reference/chapter-4-exercises_202512111408\|Chapter 4 Exercises]]
- [[3 Reference/chapter-5-exercises_202512111408\|Chapter 5 Exercises]]
- [[3 Reference/chapter-6-exercises_202512111408\|Chapter 6 Exercises]]
- [[3 Reference/chapter-7-exercises_202512111408\|Chapter 7 Exercises]]
- [[3 Reference/chapter-8-exercises_202512111408\|Chapter 8 Exercises]]
- [[3 Reference/chapter-9-exercises_202512111409\|Chapter 9 Exercises]]



### 8.15
> Let $X$ have a [[3 Reference/Continuous Distributions#Gamma distribution\|Gamma distribution]] with $\alpha=4$ and $\beta=\theta>0$.
> a. Find the [[3 Reference/def-fisher-information_202507170919\|Fisher Information]] $I(\theta)$.
> b. If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from this distribution, show that the [[3 Reference/Def-maximum-likelihood-estimator-(mle)\|m.l.e.]] of $\theta$ is an [[3 Reference/def-efficient-estimator_202507170919\|efficient estimator]] of $\theta$.

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

### 8.16

> Let $X$ be $N(0,\theta)$, $0<\theta<\infty$
> - a. Find the [[3 Reference/def-fisher-information_202507170919\|Fisher Information]] $I(\theta)$.
> - b. If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from this distribution, show that the [[3 Reference/Def-maximum-likelihood-estimator-(mle)\|m.l.e]] of $\theta$ is an [[3 Reference/def-efficient-estimator_202507170919\|efficient estimator]] of $\theta$.

#### 8.16.a

Diketahui [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] dari [[3 Reference/Continuous Distributions#Normal distribution\|distribusi normal]] $N(0,\theta)$ adalah
$$
\begin{align}
f(X;\theta) & = \frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{(X-\mu)^2}{2\sigma^2}\right) \\
 & = \frac{1}{\theta\sqrt{2\pi}}\exp\left(-\frac{x^2}{2\theta^2}\right) \\
\end{align}
$$

Dapat diperoleh
$$
\begin{align}
\ln f(X;\theta) & = \ln\left[\frac{1}{\theta\sqrt{2\pi}}\exp\left(-\frac{x^2}{2\theta^2}\right)\right] \\
 & = \ln\left(\frac{1}{\theta\sqrt{2\pi}}\right) + \ln\left[\exp\left(-\frac{x^2}{2\theta^2}\right)\right] \\
 & = \ln(1) - \ln(\theta) - \ln(\sqrt{2\pi}) - \frac{x^2}{2\theta^2} \\
 & = -\ln\theta - \frac{1}{2}\ln(2\pi) - \frac{x^2}{2\theta^2}
\end{align}
$$

[[3 Reference/def-fisher-information_202507170919\|Fisher information]] untuk $n$ sampel adalah:
$$
\begin{align}
I_n(\theta) & = nI(\theta) \\
 & = -nE\left[\frac{\partial^2}{\partial \theta^2} \ln f(X;\theta)\right] \\
 & = -nE\left[\frac{\partial^2}{\partial \theta^2}\left(-\ln\theta - \frac{x^2}{2\theta^2}\right)\right] \\
 & = -nE\left[\frac{\partial}{\partial \theta}\left(-\frac{1}{\theta} + \frac{x^2}{\theta^3}\right)\right] \\
 & = -nE\left[\frac{1}{\theta^2} - \frac{3x^2}{\theta^4}\right] \\
 & = -n\left[\frac{1}{\theta^2} - \frac{3E(X^2)}{\theta^4}\right] \\
 & = -n\left[\frac{1}{\theta^2} - \frac{3\theta^2}{\theta^4}\right] \\
 & = -n\left[\frac{1}{\theta^2} - \frac{3}{\theta^2}\right] \\
 & = \frac{2n}{\theta^2}
\end{align}
$$

#### 8.16.b

Dari [[3 Reference/exercises-from-5th-ed-book_202509261532#8.16.a]] diperoleh
$$
\begin{align}
\ln f(X;\theta) & = -\ln\theta - \frac{1}{2}\ln(2\pi) - \frac{x^2}{2\theta^2}
\end{align}
$$
Perhatikan bahwa
$$
\begin{align}
\frac{d}{d\theta}\ln f(X;\theta) & = \frac{d}{d\theta}\left(-\ln\theta - \frac{1}{2}\ln(2\pi) - \frac{x^2}{2\theta^2}\right) \\
 & = -\frac{1}{\theta} - 0 - \frac{x^2}{2} \cdot \frac{d}{d\theta}(\theta^{-2}) \\
 & = -\frac{1}{\theta} - \frac{x^2}{2} \cdot (-2\theta^{-3}) \\
 & = -\frac{1}{\theta} + \frac{x^2}{\theta^3}
\end{align}
$$

Untuk sampel $X_1, X_2, \dots, X_n$, log-likelihood adalah:
$$
\ln L(\theta) = \sum_{i=1}^{n} \ln f(X_i;\theta) = -n\ln\theta - \frac{n}{2}\ln(2\pi) - \frac{1}{2\theta^2}\sum_{i=1}^{n}X_i^2
$$

Turunan pertama terhadap $\theta$:
$$
\begin{align}
\frac{d}{d\theta}\ln L(\theta) & = -\frac{n}{\theta} + \frac{1}{\theta^3}\sum_{i=1}^{n}X_i^2 \\
0 & = -\frac{n}{\theta} + \frac{1}{\theta^3}\sum_{i=1}^{n}X_i^2 \\
\frac{n}{\theta} & = \frac{1}{\theta^3}\sum_{i=1}^{n}X_i^2 \\
n\theta^2 & = \sum_{i=1}^{n}X_i^2 \\
\theta^2 & = \frac{1}{n}\sum_{i=1}^{n}X_i^2
\end{align}
$$

Berdasarkan definisi [[3 Reference/Def-maximum-likelihood-estimator-(mle)\|MLE]] untuk $\theta$ adalah
$$
\hat{\theta} = \sqrt{\frac{1}{n}\sum_{i=1}^{n}X_i^2}
$$

Variansi dari statistik $Y=\hat{\theta}$ adalah
$$
\operatorname{Var}(Y) = \operatorname{Var}\left(\sqrt{\frac{1}{n}\sum_{i=1}^{n}X_i^2}\right) = \frac{\theta^2}{2n}
$$

Andaikan berlaku [[3 Reference/mathstat6.1#Assumptions 6.1.1 Regularity conditions\|asumsi regularitas]] dan [[3 Reference/mathstat6.2#Assumptions 6.2.1 Additional regularity conditions 1\|asumsi regularitas tambahan 1]] berlaku, maka [[3 Reference/def-rao-cramer-lower-bound_202507171109\|Rao-Cramer Lower Bound]] adalah
$$
\text{CRLB} = \frac{1}{I_n(\theta)} = \frac{\theta^2}{2n}
$$

Karena $\operatorname{Var}(\hat{\theta}) = \text{CRLB}$, maka $\hat{\theta}$ adalah [[3 Reference/def-efficient-estimator_202507170919\|efficient estimator]] dari $\theta$.


### 8.27
> If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from a distribution with [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] $f(x;\theta)=3\theta^3(x+\theta)^{-4}$, $0<x<\theta$, zero elsewhere, where $0<\theta$, show that $Y=2X$ is an [[3 Reference/Def-unbiased-estimator\|unbiased estimator]] of $\theta$ and determine its [[3 Reference/mathstat6.2#^def-efficiency\|efficiency]].

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
> If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from $N(\theta,1)$, find a lower bound of the [[3 Reference/Def-variance\|variance]] of an estimator of $k(\theta)=\theta^2$. Determine an [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|unbiased minimum variance estimator]] of $\theta^2$ and then compute its [[3 Reference/mathstat6.2#^def-efficiency\|efficiency]].

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

> Let $X_{1},X_{2},\dots,X_{10}$ be a [[3 Reference/Def-random-sample\|random sample]] from a distribution that is $N(\theta_{1},\theta_{2})$[^1]. Find a [[3 Reference/def-best-critical-region_202508052110\|best test]] of the [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|simple hypothesis]] $H_{0}: \theta_{1}=\theta_{1}'=0,\; \theta_{2}=\theta_{2}'=1$ against the [[3 Reference/def-hypothesis_202508050806\|alternative simple hypothesis]] $H_{1}: \theta_{1}=\theta_{1}''=1,\; \theta_{2}=\theta_{2}''=4$.

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

> Let $X_{1},X_{2},\dots,X_{10}$ denote a [[3 Reference/Def-random-sample\|random sample]] of size $10$ from a [[3 Reference/Discrete Distributions#Poisson distribution\|Poisson distribution]] with [[3 Reference/Def-mean\|mean]] $\theta$. Show that the [[3 Reference/def-test_202508050827\|critical region]] $C$ defined by $\sum_{i=1}^{10}x_{i}\geq 3$ is a [[3 Reference/def-best-critical-region_202508052110\|best critical region]] for [[3 Reference/def-test_202508050827\|testing]] $H_{0}: \theta=0.1$ against $H_{1}: \theta=0.5$. Determine, for this test, the [[3 Reference/def-size-of-critical-region_202507291323\|significance level]] $\alpha$ and [[3 Reference/def-power-of-a-test_202508050833\|power]] at $\theta=0.5$.

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

### 9.12

> Let $X$ have a [[3 Reference/Def-probability-density-function-(pdf)\|p.d.f.]] of the form $f(x;\theta)=1/\theta$, $0<x<\theta$, zero elsewhere. Let $Y_{1}<Y_{2}<Y_{3}<Y_{4}$ denote the [[3 Reference/Def-order-statistics\|order statistics]] of a [[3 Reference/Def-random-sample\|random sample]] of size $4$ from this distribution. Let the observed value of $Y_{4}$ be $y_{4}$. We reject $H_{0}:\theta=1$ and accept $H_{1}:\theta \neq 1$ if either $y_{4} \leq \frac{1}{2}$ or $y_{4}\geq 1$. Find the [[3 Reference/def-power-function_202508050833\|power function]] $K(\theta)$, $0<\theta$, of the [[3 Reference/def-test_202508050827\|test]].

**Answer**

Diketahui $f(x;\theta)$ berasal dari [[3 Reference/Continuous Distributions#Uniform distribution\|distribusi uniform]] $U(0, \theta)$. CDF-nya adalah $F(x) = x/\theta$ untuk $0 < x < \theta$.

CDF dari statistik terurut terbesar, $Y_4$, dari sampel ukuran $n=4$ adalah:
$$ G(y_4) = [F(y_4)]^4 = (y_4/\theta)^4, \quad 0 < y_4 < \theta $$

Daerah penolakan adalah $C = \{y_4 : y_4 \leq 1/2 \text{ atau } y_4 \geq 1\}$.
$$ K(\theta) = P(Y_4 \leq 1/2 | \theta) + P(Y_4 \geq 1 | \theta) $$

**Kasus 1: $0 < \theta \leq 1/2$**
- $P(Y_4 \leq 1/2) = 1$
- $P(Y_4 \geq 1) = 0$, karena $Y_4 < \theta \leq 1/2$.
Jadi, $K(\theta) = 1$.

**Kasus 2: $1/2 < \theta < 1$**
- $P(Y_4 \leq 1/2) = G(1/2) = ( (1/2)/\theta )^4 = 1/(16\theta^4)$.
- $P(Y_4 \geq 1) = 0$, karena $Y_4 < \theta < 1$.
Jadi, $K(\theta) = 1/(16\theta^4)$.

**Kasus 3: $\theta \geq 1$**
- $P(Y_4 \leq 1/2) = G(1/2) = ( (1/2)/\theta )^4 = 1/(16\theta^4)$.
- $P(Y_4 \geq 1) = 1 - P(Y_4 < 1) = 1 - G(1) = 1 - (1/\theta)^4$.
Jadi, $K(\theta) = \frac{1}{16\theta^4} + 1 - \frac{1}{\theta^4} = 1 - \frac{15}{16\theta^4}$.

Menggabungkan semua kasus, fungsi power adalah:
$$ K(\theta) = \begin{cases} 1 & 0 < \theta \leq 1/2 \\ 1/(16\theta^4) & 1/2 < \theta < 1 \\ 1 - 15/(16\theta^4) & \theta \geq 1 \end{cases} $$

$\therefore$ Fungsi power dari tes tersebut adalah $\boxed{K(\theta) = \begin{cases} 1 & 0 < \theta \leq 1/2 \\ 1/(16\theta^4) & 1/2 < \theta < 1 \\ 1 - 15/(16\theta^4) & \theta \geq 1 \end{cases}}$.

### 9.14

> Consider the two [[3 Reference/Continuous Distributions#Normal distribution\|normal distributions]] $N(\mu_{1},400)$ and $N(\mu_{2},225)$. Let $\theta=\mu_{1}-\mu_2$. Let $\bar{x}$ and $\bar{y}$ denote the observed [[3 Reference/Def-mean\|means]] of two independent [[3 Reference/Def-random-sample\|random samples]], each of size $n$, from these two distributions. We reject $H_{0}:\theta=0$ and accept $H_{1}:\theta>0$ if and only if $\bar{x}-\bar{y} \geq c$. If $K(\theta)$ is the [[3 Reference/def-power-function_202508050833\|power function]] of this test, find $n$ and $c$ so that $K(0)=0.05$ and $K(10)=0.90$, approximately.

**Answer**

Diketahui $\bar{X}\sim N(\mu_1, 400/n)$ dan $\bar{Y}\sim N(\mu_2, 225/n)$.

Misalkan $W = \bar{X}-\bar{Y}$. Karena $\bar{X}$ dan $\bar{Y}$ independen, $W$ berdistribusi normal dengan:
- $E[W] = E[\bar{X}]-E[\bar{Y}] = \mu_1-\mu_2 = \theta$
- $\text{Var}(W) = \text{Var}(\bar{X})+\text{Var}(\bar{Y}) = \frac{400}{n} + \frac{225}{n} = \frac{625}{n}$
Sehingga, $W \sim N(\theta, 625/n)$.

[[3 Reference/def-power-function_202508050833\|Fungsi power]] $K(\theta)$ dari tes yang menolak $H_0$ jika $W \geq c$ adalah:
$$ K(\theta) = P(W \geq c) = P\left(\frac{W-\theta}{\sqrt{625/n}} \geq \frac{c-\theta}{\sqrt{625/n}}\right) = P\left(Z \geq \frac{c-\theta}{25/\sqrt{n}}\right) $$
dimana $Z \sim N(0,1)$.

Diberikan dua kondisi:

1. $K(0) = 0.05$
   
   $P\left(Z \geq \frac{c}{25/\sqrt{n}}\right) = 0.05$.
   
   Dari tabel normal standar, $z_{0.05} \approx 1.645$.
   
   Maka, $\frac{c}{25/\sqrt{n}} = 1.645 \implies c = 1.645 \frac{25}{\sqrt{n}}$ (1)

2. $K(10) = 0.90$.

   $P\left(Z \geq \frac{c-10}{25/\sqrt{n}}\right) = 0.90$.
   
   Dari tabel, nilai z yang sesuai adalah $z_{0.90} = -z_{0.10} \approx -1.282$.
   
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

### 9.18

> Let $X_{1},X_{2},\dots,X_{n}$ denote a [[3 Reference/Def-random-sample\|random sample]] from a [[3 Reference/Continuous Distributions#Normal distribution\|normal distribution]] $N(\theta,16)$. Find the sample size $n$ and a [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test]] of $H_{0}:\theta=25$ against $H_{1}:\theta<25$ with [[3 Reference/def-power-function_202508050833\|power function]] $K(\theta)$ so that approximately $K(25)=0.10$ and $K(23)=0.90$.

**Answer**

Diketahui $X_i \sim N(\theta, 16)$, sehingga mean sampel $\bar{X} \sim N(\theta, 16/n)$.

Berdasarkan Teorema Karlin-Rubin (karena keluarga distribusi normal memiliki [[3 Reference/def-monotone-likelihood-ration-(mlr)_202508071604\|Monotone Likelihood Ration (mlr)]]), [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test ]] adalah dengan menolak $H_0$ jika statistik cukup $\bar{X}$ kurang dari suatu nilai kritis $c$.

Bentuk tes UMP: Tolak $H_0$ jika $\bar{X} \leq c$.

[[3 Reference/def-power-function_202508050833\|Fungsi power]] $K(\theta)$ adalah:
$$ K(\theta) = P(\bar{X} \leq c | \theta) = P\left(\frac{\bar{X}-\theta}{4/\sqrt{n}} \leq \frac{c-\theta}{4/\sqrt{n}}\right) = \Phi\left(\frac{c-\theta}{4/\sqrt{n}}\right) $$
dimana $\Phi$ adalah CDF dari distribusi normal standar.

Diberikan dua kondisi:

1. $K(25)=0.10$ (tingkat signifikansi $\alpha$).

   $\Phi\left(\frac{c-25}{4/\sqrt{n}}\right) = 0.10$.
   
   Dari tabel normal, $z_{0.10} \approx -1.282$.
   
   Maka, $\frac{c-25}{4/\sqrt{n}} = -1.282 \implies c = 25 - 1.282 \frac{4}{\sqrt{n}}$ (1)

2. $K(23)=0.90$.

   $\Phi\left(\frac{c-23}{4/\sqrt{n}}\right) = 0.90$.
   
   Dari tabel normal, $z_{0.90} \approx 1.282$.
   
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

$\therefore$ Ukuran sampel yang dibutuhkan adalah $\boxed{n=27}$, dan tes UMP adalah $\boxed{\text{Tolak } H_0 \text{ jika } \bar{X} \leq 24}$.

### 9.21

> Let $X_{1},X_{2},\dots,X_{n}$ be a [[3 Reference/Def-random-sample\|random sample]] from a distribution with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x;\theta)=\theta x^{\theta-1},0<x<\infty$, zero elsewhere, where $\theta>0$. Find a [[3 Reference/def-sufficient-statistic_202507170925\|sufficient statistic]] for $\theta$ and show that a [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test]] of $H_{0}: \theta=6$ against $H_{1}: \theta<6$ is based on this [[3 Reference/Def-statistic\|statistic]].

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

> Let $X_{1},X_{2},\dots,X_{n}$ be a [[3 Reference/Def-random-sample\|random sample]] from the [[3 Reference/Continuous Distributions#Normal distribution\|normal distribution]] $N(\theta,1)$. Show that the [[3 Reference/Def-likelihood-function\|likelihood]] ratio principle for testing $H_{0}: \theta=\theta'$, where $\theta'$ is specified, against $H_{1}: \theta\neq \theta'$ leads to the inequality $|\bar{x}-\theta'|\geq c$. Is this a [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test]] of $H_{0}$ against $H_{1}$?

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

> Consider a [[3 Reference/Def-random-sample\|random sample]] $X_{1},X_{2},\dots,X_{n}$ from a distribution with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x;\theta)=\theta(1-x)^{\theta-1},\; 0<x<1$, zero elsewhere, where $\theta>0$.
> 1. Find the form of the [[3 Reference/def-uniformly-most-powerful-test_202508052119\|uniformly most powerful test]] of $H_{0}: \theta=1$ against $H_{1}: \theta>1$.
> 2. What is the [[3 Reference/Def-likelihood-function\|likelihood]] ratio for $\lambda$ for testing $H_{0}: \theta=1$ against $H_{1}: \theta\neq 1$?

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
