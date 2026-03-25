---
publish: true
aliases:
  - Neyman Theorem
created: 2026-03-25T15:22:40.627+07:00
modified: 2026-03-25T15:22:40.627+07:00
published: 2026-03-25T15:22:40.627+07:00
creation-time: 2025-08-05 22:29
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X\_{1},\dots,X\_{n}=\mathbf{X}$ : [[Def-random-sample|Random sample]], with distribution that has [[Def-probability-density-function-(pdf)|pdf]]/[[Def-probability-mass-function-(pmf)|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y = u(\mathbf{X})$ : [[Def-statistic|Statistic]] for $\theta$
- $L(\theta)$ : [[Def-likelihood-function|Likelihood function]] of $X$

Then $Y$ is a [[def-sufficient-statistic_202507170925|sufficient statistic]] for $\theta$

If and only if

- $$\exists k,l \ni L(\theta) = k\[u(\mathbf{x});\theta]\cdot l(\mathbf{x})$$
- $l(\mathbf{x})$ is independent of $\theta$

## Remark

To determine if $Y$ is a sufficient statistic,

we have to show that its likelihood function

can be written as the multiplication of two functions:

1. A function of $Y$ that may depend on $\theta$
2. A function of the random sample that DOES NOT depend on $\theta$

## Example

> Let $X\_{1},X\_{2},\dots,X\_{n}$ represent a [[Def-random-sample|random sample]] from the [[def-poisson-distribution_202509150822|Poisson distribution]] with parameter $\lambda$. Prove that both $Y\_{1}=\sum X\_{i}$ and $Y\_{2}=\bar{x}$ are sufficient statistics for $\lambda$ using the factorization theorem.

$$
\begin{align}
L(\theta) & = \prod\_{i=1}^n \frac{e^{-\theta}\theta^{x\_{i}}}{x\_{i}!} \\
& = e^{-n\theta}\theta^{\sum\_{i=1}^nx\_{i}} \cdot \prod\_{i=1}^n x\_{i}!
\end{align}
$$

Let

- $k\_{1}\[u(X);\theta]=e^{-n\theta}\theta^{\sum\_{i=1}^nx\_{i}}$
- $k\_{2}(x)=\prod\_{i=1}^n x\_{i}!$

Notice that $u(X)$ is a function of $Y\_{1} =\sum X\_{i}$. Also, because $Y\_{2}=\frac{Y\_{1}}{n}$, then $u(X)$ is also a function of $u(X)$ (or that $k\_1 : e^{-n\theta}\theta^{n\bar{x}}$).
