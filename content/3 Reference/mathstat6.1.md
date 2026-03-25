---
publish: true
aliases:
  - 6.1 Maximum Likelihood Estimation.md
created: 2026-03-25T15:22:40.590+07:00
modified: 2026-03-25T15:22:40.591+07:00
published: 2026-03-25T15:22:40.591+07:00
creation-time: 2025-07-02 13:53
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat5.4|5.4 Extensions to Multivariate Distributions.md]] | [[mathstat6.2|6.2 Rao-Cramér Lower Bound and Efficiency.md]] >>

## Assumptions 6.1.1: Regularity conditions

> - $(\mathbf{R0})$ : The cdfs are distinct; i.e., $\theta \neq \theta'\implies F(x\_{i};\theta)\neq F(x\_{i};\theta')$ ^R0
> - $(\mathbf{R1})$ : The pdfs have common support for all $\theta$ ^R1
> - $(\mathbf{R2})$ : The point $\theta\_{0}$ is an interior point in $\Omega$ ^R2

#TODO: What is an interior point?
#TODO: What is $\Omega$

## Theorem 6.1.1

> Assume
>
> - $\theta\_{0}$ : True parameter
> - $E\_{\theta\_{0}}\left\[\dfrac{f(X\_{i};\theta)}{f(X\_{i};\theta\_{0})}\right]$ exists
>
> Then, under assumptions (R0) and (R1)
> $$
> \lim\_{ n \to \infty } P\_{\theta\_{0}}\[L(\theta\_{0},\mathbf{X})>L(\theta,\mathbf{X})] = 1, \quad \forall \theta \neq \theta\_{0}
> $$

> [!note]
> This theorem states that
>
> If $\theta\_{0}$ is true value of $\theta$,
>
> Then, asymptotically, $L(\theta\_{0})$ is the maximum value of $L(\theta)$.

## Definition 6.1.1: Maximum Likelihood Estimator

![[Def-maximum-likelihood-estimator-(mle)#Definition]]

## Theorem 6.1.2

> Let
>
> - $X\_{1},\dots, X\_{n}$ : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]], with
>   - pdf $f(x;\theta), \theta\in\Omega$
> - Let $\eta=g(\theta)$ : Parameter of interest
>
> If $\hat{\theta}$ is the mle of $\theta$
>
> Then $g(\hat{\theta})$ is the mle of $\eta=g(\theta)$

## Theorem 6.1.3

> Assume
>
> - $X\_{1},\dots, X\_{n}$ satisfies all [[#Assumptions 6.1.1 Regularity conditions|regularity conditions]]
> - $\theta\_{0}$ : True parameter
> - $f(x;\theta)$ : differentiable with respect to $\theta$ in $\Omega$
>
> Then the likelihood equation $\frac{\partial}{\partial \theta}L(\theta) = 0$, or equivalently $\frac{\partial}{\partial \theta}l(\theta)=0$ has a solution $\hat{\theta}_{n}$ such that $\hat{\theta}_{n}\xrightarrow P \theta\_{0}$

## Corollary 6.1.1

> Assume
>
> - $X\_{1},\dots, X\_{n}$ satisfies all [[#Assumptions 6.1.1 Regularity conditions|regularity conditions]]
> - $\theta\_{0}$ : True parameter
> - $f(x;\theta)$ : differentiable with respect to $\theta$ in $\Omega$
>
> If the likelihood equation has the unique solution $\hat{\theta\_{0}}$
>
> Then $\hat{\theta}_{0}$ is a [[mathstat5.1#Definition 5.1.2 Consistent estimator|consistent estimator]] of $\theta_{0}$

## Exercise

### MLE on normal distribution

Let

- $X\_1, X\_2, \ldots, X\_n$ : Random sample, with
  - Normal distribution
  - Unknown mean $\mu = \theta$
  - Known variance $\sigma^2 = 1$.

Find the maximum likelihood estimator (MLE) of $\theta$ ($\mu$).

**Answer**

The pdf of $X\_n \sim N(\theta, 1)$ is: $$f(x\_i; \theta) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(x\_i - \theta)^2}$$

The likelihood function is:
$$
\begin{align}
L(\theta) & = \prod\_{i=1}^n f(x\_i; \theta)  \\
& = \prod\_{i=1}^n \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(x\_i - \theta)^2} \\
& = \frac{1}{(2\pi)^{n/2}} e^{-\frac{1}{2}\sum\_{i=1}^n(x\_i - \theta)^2}
\end{align}
$$

Solving $\ln L(\theta)$:

$$\ln L(\theta) = -\frac{n}{2}\ln(2\pi) - \frac{1}{2}\sum\_{i=1}^n(x\_i - \theta)^2$$

Solving $\frac{\partial}{\partial \theta}\ln L(\theta)=0$:

$$
\begin{align}
\frac{d}{d\theta} \ln L(\theta) & = \frac{d}{d\theta}\left\[-\frac{n}{2}\ln(2\pi) - \frac{1}{2}\sum\_{i=1}^n(x\_i - \theta)^2\right] \\

0 & = 0 - \frac{1}{2}\sum\_{i=1}^n \frac{d}{d\theta}(x\_i - \theta)^2 \\

0 & = -\frac{1}{2}\sum\_{i=1}^n 2(x\_i - \theta)(-1) \\

0 & = \sum\_{i=1}^n (x\_i - \theta) \\

0  & = \sum\_{i=1}^n x\_i - n\theta \\

n\theta & = \sum\_{i=1}^n x\_i \\

\theta  & = \frac{1}{n}\sum\_{i=1}^n x\_i  \\

\theta & = \bar{x}

\end{align}
$$

$\therefore$ The maximum likelihood estimator of $\mu$ is:

$$\theta = \frac{1}{n}\sum\_{i=1}^n X\_i = \bar{X}$$

This shows that the sample mean is the MLE of the population mean for a normal distribution.

### MLE on normal distribution with multiple parameters

Let

- $X\_1, X\_2, \ldots, X\_n$ : Random sample, with
  - Normal distribution
  - Unknown mean $\mu = \theta\_1$
  - Unknown variance $\sigma^2 = \theta\_2$

Find the maximum likelihood estimators (MLE) of $\theta\_1$ and $\theta\_2$.

**Answer**

The pdf of $X\_i \sim N(\theta\_1, \theta\_2)$ is: $$f(x\_i; \theta\_1, \theta\_2) = \frac{1}{\sqrt{2\pi\theta\_2}} e^{-\frac{1}{2\theta\_2}(x\_i - \theta\_1)^2}$$

The likelihood function is:
$$ \begin{align} L(\theta\_1, \theta\_2) & = \prod\_{i=1}^n f(x\_i; \theta\_1, \theta\_2) \\
& = \prod\_{i=1}^n \frac{1}{\sqrt{2\pi\theta\_2}} e^{-\frac{1}{2\theta\_2}(x\_i - \theta\_1)^2}  \\
& = \frac{1}{(2\pi\theta\_2)^{n/2}} e^{-\frac{1}{2\theta\_2}\sum\_{i=1}^n(x\_i - \theta\_1)^2} \end{align}
$$

Solving $\ln L(\theta\_1, \theta\_2)$:

$$\ln L(\theta\_1, \theta\_2) = -\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\theta\_2) - \frac{1}{2\theta\_2}\sum\_{i=1}^n(x\_i - \theta\_1)^2$$

**Finding MLE for $\theta\_1$ (mean):**

Solving $\frac{\partial}{\partial \theta\_1}\ln L(\theta\_1, \theta\_2)=0$:

$$ \begin{align} \frac{\partial}{\partial \theta\_1} \ln L(\theta\_1, \theta\_2) & = \frac{\partial}{\partial \theta\_1}\left\[-\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\theta\_2) - \frac{1}{2\theta\_2}\sum\_{i=1}^n(x\_i - \theta\_1)^2\right]  \\

0 & = 0 - 0 - \frac{1}{2\theta\_2}\sum\_{i=1}^n \frac{\partial}{\partial \theta\_1}(x\_i - \theta\_1)^2  \\

0 & = -\frac{1}{2\theta\_2}\sum\_{i=1}^n 2(x\_i - \theta\_1)(-1)  \\

0 & = \frac{1}{\theta\_2}\sum\_{i=1}^n (x\_i - \theta\_1)  \\

0 & = \sum\_{i=1}^n x\_i - n\theta\_1  \\

n\theta\_1 & = \sum\_{i=1}^n x\_i  \\

\hat{\theta\_1} & = \frac{1}{n}\sum\_{i=1}^n x\_i = \bar{x}

\end{align} $$

**Finding MLE for $\theta\_2$ (variance):**

Solving $\frac{\partial}{\partial \theta\_2}\ln L(\theta\_1, \theta\_2)=0$:

$$ \begin{align} \frac{\partial}{\partial \theta\_2} \ln L(\theta\_1, \theta\_2) & = \frac{\partial}{\partial \theta\_2}\left\[-\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\theta\_2) - \frac{1}{2\theta\_2}\sum\_{i=1}^n(x\_i - \theta\_1)^2\right]  \\

0 & = 0 - \frac{n}{2} \cdot \frac{1}{\theta\_2} - \sum\_{i=1}^n(x\_i - \theta\_1)^2 \cdot \frac{\partial}{\partial \theta\_2}\left(\frac{1}{2\theta\_2}\right)  \\

0 & = -\frac{n}{2\theta\_2} - \sum\_{i=1}^n(x\_i - \theta\_1)^2 \cdot \left(-\frac{1}{2\theta\_2^2}\right)  \\

0 & = -\frac{n}{2\theta\_2} + \frac{1}{2\theta\_2^2}\sum\_{i=1}^n(x\_i - \theta\_1)^2  \\

\frac{n}{2\theta\_2} & = \frac{1}{2\theta\_2^2}\sum\_{i=1}^n(x\_i - \theta\_1)^2  \\

n\theta\_2 & = \sum\_{i=1}^n(x\_i - \theta\_1)^2  \\

\hat{\theta\_2} & = \frac{1}{n}\sum\_{i=1}^n(x\_i - \theta\_1)^2

\end{align} $$

Substituting $\hat{\theta\_1} = \bar{x}$:

$$\hat{\theta\_2} = \frac{1}{n}\sum\_{i=1}^n(x\_i - \bar{x})^2$$

$\therefore$ The maximum likelihood estimators are:

$$
\begin{align}
\hat{\theta\_1} & = \frac{1}{n}\sum\_{i=1}^n X\_i && = \bar{x} \\
\hat{\theta\_2} & = \frac{1}{n}\sum\_{i=1}^n(X\_i - \bar{X})^2 && =s^2
\end{align}
$$

Note that $\hat{\theta\_2}$ is the biased sample variance (dividing by $n$ instead of $n-1$).
