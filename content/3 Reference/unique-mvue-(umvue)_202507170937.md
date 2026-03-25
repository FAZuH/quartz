---
publish: true
aliases:
  - Unique MVUE (UMVUE)
  - Lehmann and Scheffe Theorem
  - UMVUE
  - UUMVE
created: 2026-03-25T15:22:40.618+07:00
modified: 2026-03-25T15:22:40.618+07:00
published: 2026-03-25T15:22:40.618+07:00
creation-time: 2025-07-17 09:37
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X\_{1},\dots,X\_{n}$ : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]], with
  - [[Def-probability-density-function-(pdf)|pdf]]/[[Def-probability-mass-function-(pmf)|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y\_{1}=u\_{1}(X\_{1},\dots,X\_{n})$ : [[def-complete-sufficient-statistic_202507170931|Complete sufficient statistic]] for $\theta$

If $\phi(Y\_{1})$ is an [[mathstat4.1#Definition 4.1.3 Unbiased estimator|unbiased estimator]] of $\theta$

Then $\phi(Y\_{1})$ is the **unique [[def-minimum-variance-unbiased-estimator-(mvue)_202507170925|MVUE]]** (UMVUE) of $\theta$

![[assets/Pasted image 20250721081812.png]]

## Remark

In the reference book, this theorem is called Lehmann and Scheffe theorem.

The Lehmann-Scheffé theorem states that if $T$ is a **complete sufficient statistic** for a parameter $\theta$, then a function of it is **UMVUE**, if it's **unbiased and exists**

## Example

> Let $X\_{1},X\_{2},\dots,X\_{n}$ represent a [[Def-random-sample|random sample]] from the discrete distribution with pdf $f(x;\theta)=\theta^x(1-\theta)^{1-x},x=0,1,;0<\theta< 1$, zero elsewhere.
>
> Show that $Y\_{1}=\sum\_{i=1}^nX\_{i}$ is a complete, sufficient statistic for $\theta$. Find the unique function of $Y\_{1}$ that is the unbiased minimum variance estimator for $\theta$

$$
\begin{align}
\theta^x(1-\theta)^{1-x} & = \exp\[x\ln\theta + (1-x)\ln(1-\theta)] \\
& = \exp\[x\ln\theta + \ln(1-\theta)-x\ln(1-\theta)] \\
\end{align}
$$

Then $f(x;\theta)$ has the form of [[def-regular-exponential-class_202507170942|regular exponential class]], with

- $\mathcal{S}={ 0,1 }$ : Independent of $\theta$
- $p(\theta)=\ln\theta$ : Continuous, nontrivial function
- $K(x) = x$ : Nontrivial function
- $H(x) = \ln(1-\theta)$
- $q(\theta)=x\ln(1-\theta)$

By [[theorem-neyman-theorem_202508052229|Neyman Theorem]], $Y\_{1}$ is a [[def-sufficient-statistic_202507170925|sufficient statistic]]:
$$
\begin{align}
L(\theta) & = \prod\_{i=1}^n \theta^x(1-\theta)^{1-x\_{i}} \\
& = \theta^{nx}(1-\theta)^{n-\sum\_{i=1}^nx\_{i}}
\end{align}
$$

Notice that $X\sim Bernoulli(\theta)$, thus $Y\_1 = \sum\_{i=1}^nX\_{i}\sim Binom(n,\theta)$, and $E(Y\_{1})=n\theta$.

So, $Y\_{2}=\frac{Y\_{1}}{n}$ is an [[Def-unbiased-estimator|unbiased estimator]] for $\theta$, and becuase $Y\_{1}$ is complete sufficient statistic, so is $Y\_{2}$.

As a result, by definition of [[unique-mvue-(umvue)_202507170937|Unique MVUE (UMVUE)]], $Y\_{2}$ is an unbiased minimum variance estimator for $\theta$ .

> Let $X\_{1},X\_{2},\dots,X\_{n}$ random sample of size $n$ from distribution of $Gamma(3,\beta)$, with $\beta>0$

$$
\begin{align}
\frac{1}{\Gamma(3)\beta^\alpha}x^{\alpha-1}e^{-x/\beta} & = \frac{1}{2\beta^3}x^2e^{-x/\beta} \\
& = \exp\left\[ -\ln2 + 3\ln\beta + 2\ln x - \frac{x}{\beta} \right]
\end{align}
$$

- $p(\beta)=-\frac{1}{\beta}$
- $K(x)=x$
- $H(x)=2\ln x$
- $q(\theta)=-3\ln\beta$

$$
\begin{align}
\prod\_{i=1}^n \frac{1}{2\beta^3}x^2e^{-x\_{i}/\beta} & = \frac{1}{2^n\beta^{3n}}x^{2n}e^{-1/\beta\sum\_{i=1}^n x\_{i}}
\end{align}
$$

Since $E(X)=3\beta$, we have $E\left( \frac{X}{3} \right)=\beta$.

Let
$$
Y\_{2} = \frac{1}{3}\bar{X} = \frac{1}{3n}\sum\_{i=1}^n X\_{i}
$$

This statistic $Y\_{2}$ is unbiased for $\beta$
$$
\begin{align}
E(Y\_{2}) & = E\left( \frac{1}{3}\bar{X} \right) \\
& = \frac{1}{3}E(\bar{X}) \\
& = \frac{1}{3}E(X) \\
& = \frac{1}{3} \cdot 3\beta \\
& = \beta
\end{align}
$$
