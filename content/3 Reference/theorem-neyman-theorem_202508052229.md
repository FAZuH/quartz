---
{"publish":true,"aliases":["Neyman Theorem"],"created":"2025-10-14T04:15:27.067+07:00","modified":"2025-10-17T06:36:41.359+07:00","published":"2025-10-17T06:36:41.359+07:00","cssclasses":"","creation-time":"2025-08-05 22:29","status":"baby","tag":null,"parent":"[[Introduction to Mathematical Statistics]]"}
---


## Theorem

Let
- $X_{1},\dots,X_{n}=\mathbf{X}$ : [[3 Reference/Def-random-sample\|Random sample]], with distribution that has [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y = u(\mathbf{X})$ : [[3 Reference/Def-statistic\|Statistic]] for $\theta$
- $L(\theta)$ : [[3 Reference/Def-likelihood-function\|Likelihood function]] of $X$

Then $Y$ is a [[3 Reference/def-sufficient-statistic_202507170925\|sufficient statistic]] for $\theta$ 

If and only if 
- $$\exists k,l \ni L(\theta) = k[u(\mathbf{x});\theta]l(\mathbf{x})$$
- $l(\mathbf{x})$ is independent of $\theta$

## Remark

To determine if $Y$ is a sufficient statistic, 

we have to show that its likelihood function

can be written as the multiplication of two functions:
1. A function of $Y$ that may depend on $\theta$
2. A function of the random sample that DOES NOT depend on $\theta$

## Example

> Let $X_{1},X_{2},\dots,X_{n}$ represent a [[3 Reference/Def-random-sample\|random sample]] from the [[3 Reference/def-poisson-distribution_202509150822\|Poisson distribution]] with parameter $\lambda$. Prove that both $Y_{1}=\sum X_{i}$ and $Y_{2}=\bar{x}$ are sufficient statistics for $\lambda$ using the factorization theorem.

$$
\begin{align}
L(\theta) & = \prod_{i=1}^n \frac{e^{-\theta}\theta^{x_{i}}}{x_{i}!} \\
 & = e^{-n\theta}\theta^{\sum_{i=1}^nx_{i}} \cdot \prod_{i=1}^n x_{i}!
\end{align}
$$

Let
- $k_{1}[u(X);\theta]=e^{-n\theta}\theta^{\sum_{i=1}^nx_{i}}$
- $k_{2}(x)=\prod_{i=1}^n x_{i}!$

Notice that $u(X)$ is a function of $Y_{1} =\sum X_{i}$. Also, because $Y_{2}=\frac{Y_{1}}{n}$, then $u(X)$ is also a function of $u(X)$ (or that $k_1 : e^{-n\theta}\theta^{n\bar{x}}$).