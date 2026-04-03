---
publish: true
aliases:
  - Chapter 8 Exercises
created: 2026-03-25T15:22:40.595+07:00
modified: 2026-03-25T15:22:40.595+07:00
published: 2026-03-25T15:22:40.595+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-11 14:08
status: in progress
parent:
  - "[[exercises-from-5th-ed-book_202509261532]]"
---



## 8.15
> Let $X$ have a [[3 Reference/Continuous Distributions#Gamma distribution\|Gamma distribution]] with $\alpha=4$ and $\beta=\theta>0$.
> a. Find the [[3 Reference/def-fisher-information_202507170919\|Fisher Information]] $I(\theta)$.
> b. If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from this distribution, show that the [[3 Reference/Def-maximum-likelihood-estimator-(mle)\|m.l.e.]] of $\theta$ is an [[3 Reference/def-efficient-estimator_202507170919\|efficient estimator]] of $\theta$.

### 8.15.a
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

### 8.15.b
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

## 8.16

> Let $X$ be $N(0,\theta)$, $0<\theta<\infty$
> - a. Find the [[3 Reference/def-fisher-information_202507170919\|Fisher Information]] $I(\theta)$.
> - b. If $X_{1},X_{2},\dots,X_{n}$ is a [[3 Reference/Def-random-sample\|random sample]] from this distribution, show that the [[3 Reference/Def-maximum-likelihood-estimator-(mle)\|m.l.e]] of $\theta$ is an [[3 Reference/def-efficient-estimator_202507170919\|efficient estimator]] of $\theta$.

### 8.16.a

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

### 8.16.b

Dari [[3 Reference/chapter-8-exercises_202512111408#8.16.a]] diperoleh
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


## 8.27
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
## 8.29
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
