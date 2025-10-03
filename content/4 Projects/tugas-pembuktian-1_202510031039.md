---
{"publish":true,"aliases":["Tugas Pembuktian 1"],"created":"2025-10-03T10:39:59.790+07:00","modified":"2025-10-03T14:17:50.503+07:00","published":"2025-10-03T14:17:50.503+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-03 10:39","status":"baby","parent":["[[statistika-matematika-2-(take-3)_202509071819]]"]}
---

## 1.

> Misalkan $U_{n}$ [[3 Reference/Def-convergence-in-probability\|kovergen dalam probabilitas]] ke konstanta $c>0$ dan misalkan $V_{n}$ konvergen dalam probabilitas ke konstanta $d>0$.

### 1.a. 

> Buktikan $U_{n}V_{n}$ konvergen dalam probabilitas ke $cd$

### 1.b.

> Buktikan $U_{n}/V_{n}$ konvergen dalam probabilitas ke $c/d$, $d\neq 0$

## 2.

> Bukitkan bahwa hasil yang diperoleh dengan memaksimumkan $L(\theta)$ sama dengan hasil yang diperoleh dengan memaksimumkan $\ln L(\theta)$

## 3.

> Misalkan $X_{1},X_{2},\dots,X_{n}$ [[3 Reference/Def-random-sample\|sampel acak]] dari [[3 Reference/Continuous Distributions#Uniform distribution\|distribusi uniform]] $U(0,\theta)$. Buktikan bahwa $E[\operatorname{max}(X_{i})]=\frac{n\theta}{n+1}$.

Misalkan $Y_{1},Y_{2},\dots,Y_{n}$ adalah [[3 Reference/Def-order-statistics\|statistik terurut]] dari $X_{1},X_{2},\dots,X_{n}$. Berarti $Y_n=\max(X_{i})$ untuk setiap $i$.

Diketahui $X$ memiliki [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $\frac{1}{\theta}$, untuk $0<x<\theta$. [[3 Reference/Def-cumulative-distribution-function-(cdf)\|cdf]] dari $X$ adalah
$$
\begin{align}
F_{X}(x) & = \int_{-\infty}^x f(t)\; dt \\
 & = \int_{0}^x \frac{1}{\theta} dt \\
 & = \frac{t}{\theta} \Big|_{0}^x \\
 & = \frac{x}{\theta}
\end{align}
$$

Berdasarkan [[3 Reference/theorem-cdf-of-order-statistics_202510031046\|teorema cdf dari statistik terurut]], cdf dari $Y_{n}$ adalah
$$
\begin{align}
F_{Y_{n}}(x) & = [F_{X}(x)]^n \\
 & = \left[ \frac{x}{\theta} \right]^n \\
 & = \frac{x^n}{\theta^n}
\end{align}
$$

Dapat diperoleh pdf dari $Y_{n}$, yaitu
$$
\begin{align}
f_{Y_{n}}(x) & = \frac{d}{dx} F_{Y_{n}}(x) \\
 & = \frac{d}{dx} \frac{x^n}{\theta^n} \\
 & = \frac{1}{\theta^n}\cdot nx^{n-1}
\end{align}
$$

Sehingga, [[3 Reference/Def-expectation\|ekspektasi]] dari $Y_{n}$ dapat diperoleh, yaitu
$$
\begin{align}
E[Y_{n}] & = \int_{-\infty}^\infty x f_{Y_{n}}(x)\; dx \\
 & = \int_{0}^\theta x \frac{1}{\theta^n}\cdot nx^{n-1}\; dx \\
 & = \frac{1}{\theta^n} \int_{0}^\infty nx^n\; dx \\
 & = \frac{1}{\theta^n} \left[ \frac{n}{n+1}x^{n+1} \Big|_{0}^\theta \right] \\
 & = \frac{1}{\theta^n} \left[ \frac{n}{n+1}\theta^{n+1} \right] \\
 & = \frac{n\theta}{n+1}
\end{align}
$$

## 4.

> Misalkan $X_{1},X_{2},\dots,X_{n}$ [[3 Reference/Def-random-sample\|sampel acak]] dari [[3 Reference/Continuous Distributions#Uniform distribution\|distribusi uniform]] $U(0,\theta)$. Buktikan $\hat{\theta}=\operatorname{max}(X_{i})=Y_{n}$ konvergen dalam probabilitas ke $\theta$ atau [[3 Reference/Def-consistent-estimator\|penaksir yang konsisten]] untuk $\theta$.

Ambil sembarang $\epsilon>0$. 

Ingat bahwa $X\sim U(0,\theta)$ sehingga $Y_{n}=\max(X_{i})\leq\theta$.

Jika $\epsilon<\theta$ (agar $F_{Y_{n}}(\theta-\epsilon)\neq 0$) maka,
$$
\begin{align}
P[|Y_{n}-\theta|\geq\epsilon] & = P(\theta-Y_{n}\geq\epsilon) \\
 & = P(Y_{n}\leq\theta-\epsilon) \\
 & = F_{Y_{n}}(\theta - \epsilon) \\
 & = \left( \frac{\theta-\epsilon}{\theta} \right)^n \\
 & = \left( 1-\frac{\epsilon}{\theta} \right)^n
\end{align}
$$

Misalkan $\epsilon<\theta$. Maka, $0<1-\frac{\epsilon}{\theta}<1$ sehingga $\lim_{ n \to \infty }P[|Y_{n}-\theta|\geq\epsilon]=\lim_{ n \to \infty }\left( 1-\frac{\epsilon}{\theta} \right)^n=0$.

Akibatnya, berdasarkan definisi konvergen ke probabilitas, $Y_{n}\xrightarrow{P}\theta$.

Akibatnya, $Y_{n}$ adalah penaksir yang konsisten untuk $\theta$.