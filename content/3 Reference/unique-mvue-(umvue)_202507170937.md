---
publish: true
aliases:
  - Unique MVUE (UMVUE)
  - Lehmann and Scheffe Theorem
  - UMVUE
  - UUMVE
created: 2026-04-09T23:07:39.752+07:00
modified: 2026-04-09T23:07:39.753+07:00
published: 2026-04-09T23:07:39.753+07:00
cssclasses: ""
creation-time: 2025-07-17 09:37
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Theorem

Let
- $X_{1},\dots,X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y_{1}=u_{1}(X_{1},\dots,X_{n})$ : [[3 Reference/def-complete-sufficient-statistic_202507170931\|Complete sufficient statistic]] for $\theta$

If $\varphi(Y_{1})$ is an [[3 Reference/mathstat4.1#Definition 4.1.3 Unbiased estimator\|unbiased estimator]] of $\theta$

Then $\varphi(Y_{1})$ is the **unique [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]]** (UMVUE) of $\theta$

## Proof

By [[3 Reference/mathstat7.3#Theorem 7.3.1 Rao-Blackwell\|Rao-Blackwell theorem]], if $Y_{2}$ is any unbiased estimate of $\theta$, then $E[Y_{2}|Y_{1}]$ is an unbiased estimate of $\theta$ with $\text{Var}([E(Y_{2}|Y_{1})]) \leq \text{Var}(Y_{2})$.

But $E[Y_{2}|Y_{1}]$ is a function of $Y_{1}$, so by [[3 Reference/def-complete-family-of-pdf-pmf_202507170933\|completeness]] it must concide with $\varphi(Y_{1})$.

Thus regardless of the particular value of $\theta$, $\text{Var}_{\theta}[\varphi(Y_{1})]\leq \text{Var}_{\theta}(Y_{2})$.

## Remark

In the reference book, this theorem is called Lehmann and Scheffe theorem.

The Lehmann-Scheffé theorem states that if $T$ is a **complete sufficient statistic** for a parameter $\theta$, then a function of it is **UMVUE**, if it's **unbiased and exists**

## Example

> Let $X_{1},X_{2},\dots,X_{n}$ represent a [[3 Reference/Def-random-sample\|random sample]] from the discrete distribution with pdf $f(x;\theta)=\theta^x(1-\theta)^{1-x},x=0,1,\;0<\theta< 1$, zero elsewhere.
> 
> Show that $Y_{1}=\sum_{i=1}^nX_{i}$ is a complete, sufficient statistic for $\theta$. Find the unique function of $Y_{1}$ that is the unbiased minimum variance estimator for $\theta$

$$
\begin{align}
\theta^x(1-\theta)^{1-x} & = \exp[x\ln\theta + (1-x)\ln(1-\theta)] \\
 & = \exp[x\ln\theta + \ln(1-\theta)-x\ln(1-\theta)] \\
\end{align}
$$

Then $f(x;\theta)$ has the form of [[3 Reference/def-regular-exponential-class_202507170942\|regular exponential class]], with
- $\mathcal{S}=\{ 0,1 \}$ : Independent of $\theta$
- $p(\theta)=\ln\theta$ : Continuous, nontrivial function
- $K(x) = x$ : Nontrivial function
- $H(x) = \ln(1-\theta)$
- $q(\theta)=x\ln(1-\theta)$


By [[3 Reference/theorem-neyman-theorem_202508052229\|Neyman Theorem]], $Y_{1}$ is a [[3 Reference/def-sufficient-statistic_202507170925\|sufficient statistic]]:
$$
\begin{align}
L(\theta) & = \prod_{i=1}^n \theta^x(1-\theta)^{1-x_{i}} \\
 & = \theta^{nx}(1-\theta)^{n-\sum_{i=1}^nx_{i}}
\end{align}
$$

Notice that $X\sim Bernoulli(\theta)$, thus $Y_1 = \sum_{i=1}^nX_{i}\sim Binom(n,\theta)$, and $E(Y_{1})=n\theta$.

So, $Y_{2}=\frac{Y_{1}}{n}$ is an [[3 Reference/Def-unbiased-estimator\|unbiased estimator]] for $\theta$, and becuase $Y_{1}$ is complete sufficient statistic, so is $Y_{2}$.

As a result, by definition of [[3 Reference/unique-mvue-(umvue)_202507170937\|Unique MVUE (UMVUE)]], $Y_{2}$ is an unbiased minimum variance estimator for $\theta$ .

> Let $X_{1},X_{2},\dots,X_{n}$ random sample of size $n$ from distribution of $Gamma(3,\beta)$, with $\beta>0$

$$
\begin{align}
\frac{1}{\Gamma(3)\beta^\alpha}x^{\alpha-1}e^{-x/\beta} & = \frac{1}{2\beta^3}x^2e^{-x/\beta} \\
 & = \exp\left[ -\ln2 + 3\ln\beta + 2\ln x - \frac{x}{\beta} \right]
\end{align}
$$

- $p(\beta)=-\frac{1}{\beta}$
- $K(x)=x$
- $H(x)=2\ln x$
- $q(\theta)=-3\ln\beta$

$$
\begin{align}
\prod_{i=1}^n \frac{1}{2\beta^3}x^2e^{-x_{i}/\beta} & = \frac{1}{2^n\beta^{3n}}x^{2n}e^{-1/\beta\sum_{i=1}^n x_{i}}
\end{align}
$$


Since $E(X)=3\beta$, we have $E\left( \frac{X}{3} \right)=\beta$.

Let
$$
Y_{2} = \frac{1}{3}\bar{X} = \frac{1}{3n}\sum_{i=1}^n X_{i}
$$


This statistic $Y_{2}$ is unbiased for $\beta$
$$
\begin{align}
E(Y_{2}) & = E\left( \frac{1}{3}\bar{X} \right) \\
 & = \frac{1}{3}E(\bar{X}) \\
 & = \frac{1}{3}E(X) \\
 & = \frac{1}{3} \cdot 3\beta \\
 & = \beta
\end{align}
$$

