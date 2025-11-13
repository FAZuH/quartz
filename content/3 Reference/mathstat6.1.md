---
{"publish":true,"aliases":["6.1 Maximum Likelihood Estimation.md"],"created":"2025-10-14T04:15:27.074+07:00","modified":"2025-10-14T04:15:27.074+07:00","published":"2025-10-14T04:15:27.074+07:00","cssclasses":"","creation-time":"2025-07-02 13:53","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---

<< [[3 Reference/mathstat5.4\|5.4 Extensions to Multivariate Distributions.md]] | [[3 Reference/mathstat6.2\|6.2 Rao-Cramér Lower Bound and Efficiency.md]] >>

## Assumptions 6.1.1: Regularity conditions
> - $(\mathbf{R0})$ : The cdfs are distinct; i.e., $\theta \neq \theta'\implies F(x_{i};\theta)\neq F(x_{i};\theta')$ ^R0
> - $(\mathbf{R1})$ : The pdfs have common support for all $\theta$ ^R1
> - $(\mathbf{R2})$ : The point $\theta_{0}$ is an interior point in $\Omega$ ^R2

#TODO: What is an interior point?
#TODO: What is $\Omega$

## Theorem 6.1.1
> Assume
> - $\theta_{0}$ : True parameter
> - $E_{\theta_{0}}\left[\dfrac{f(X_{i};\theta)}{f(X_{i};\theta_{0})}\right]$ exists
> 
> Then, under assumptions (R0) and (R1)
> $$
> \lim_{ n \to \infty } P_{\theta_{0}}[L(\theta_{0},\mathbf{X})>L(\theta,\mathbf{X})] = 1, \quad \forall \theta \neq \theta_{0}
> $$

## Definition 6.1.1: Maximum Likelihood Estimator
![[3 Reference/Def-maximum-likelihood-estimator-(mle)#Definition]]

## Theorem 6.1.2
> Let
> - $X_{1},\dots, X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with
> 	- pdf $f(x;\theta), \theta\in\Omega$
> - Let $\eta=g(\theta)$ : Parameter of interest
> 
> If $\hat{\theta}$ is the mle of $\theta$
> 
> Then $g(\hat{\theta})$ is the mle of $\eta=g(\theta)$

## Theorem 6.1.3
> Assume
> - $X_{1},\dots, X_{n}$ satisfies all [[3 Reference/mathstat6.1#Assumptions 6.1.1 Regularity conditions\|regularity conditions]]
> - $\theta_{0}$ : True parameter
> - $f(x;\theta)$ : differentiable with respect to $\theta$ in $\Omega$
> 
> Then the likelihood equation $\frac{\partial}{\partial \theta}L(\theta) = 0$, or equivalently $\frac{\partial}{\partial \theta}l(\theta)=0$ has a solution $\hat{\theta}_{n}$ such that $\hat{\theta}_{n}\xrightarrow P \theta_{0}$

## Corollary 6.1.1
> Assume
> - $X_{1},\dots, X_{n}$ satisfies all [[3 Reference/mathstat6.1#Assumptions 6.1.1 Regularity conditions\|regularity conditions]]
> - $\theta_{0}$ : True parameter
> - $f(x;\theta)$ : differentiable with respect to $\theta$ in $\Omega$
> 
> If the likelihood equation has the unique solution $\hat{\theta_{0}}$
> 
> Then $\hat{\theta}_{0}$ is a [[3 Reference/mathstat5.1#Definition 5.1.2 Consistent estimator\|consistent estimator]] of $\theta_{0}$

## Exercise
### MLE on normal distribution

Let 
- $X_1, X_2, \ldots, X_n$ : Random sample, with 
	- Normal distribution 
	- Unknown mean $\mu = \theta$ 
	- Known variance $\sigma^2 = 1$.

Find the maximum likelihood estimator (MLE) of $\theta$ ($\mu$).

**Answer**

The pdf of $X_n \sim N(\theta, 1)$ is: $$f(x_i; \theta) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(x_i - \theta)^2}$$

The likelihood function is:
$$
\begin{align}
L(\theta) & = \prod_{i=1}^n f(x_i; \theta)  \\
 & = \prod_{i=1}^n \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(x_i - \theta)^2} \\
 & = \frac{1}{(2\pi)^{n/2}} e^{-\frac{1}{2}\sum_{i=1}^n(x_i - \theta)^2}
\end{align}
$$

Solving $\ln L(\theta)$:

$$\ln L(\theta) = -\frac{n}{2}\ln(2\pi) - \frac{1}{2}\sum_{i=1}^n(x_i - \theta)^2$$

Solving $\frac{\partial}{\partial \theta}\ln L(\theta)=0$:

$$
\begin{align}
\frac{d}{d\theta} \ln L(\theta) & = \frac{d}{d\theta}\left[-\frac{n}{2}\ln(2\pi) - \frac{1}{2}\sum_{i=1}^n(x_i - \theta)^2\right] \\

 0 & = 0 - \frac{1}{2}\sum_{i=1}^n \frac{d}{d\theta}(x_i - \theta)^2 \\

 0 & = -\frac{1}{2}\sum_{i=1}^n 2(x_i - \theta)(-1) \\

 0 & = \sum_{i=1}^n (x_i - \theta) \\

0  & = \sum_{i=1}^n x_i - n\theta \\

 n\theta & = \sum_{i=1}^n x_i \\

\theta  & = \frac{1}{n}\sum_{i=1}^n x_i  \\
 
 \theta & = \bar{x}

\end{align}
$$

$\therefore$ The maximum likelihood estimator of $\mu$ is:

$$\theta = \frac{1}{n}\sum_{i=1}^n X_i = \bar{X}$$

This shows that the sample mean is the MLE of the population mean for a normal distribution.

### MLE on normal distribution with multiple parameters

Let

- $X_1, X_2, \ldots, X_n$ : Random sample, with
    - Normal distribution
    - Unknown mean $\mu = \theta_1$
    - Unknown variance $\sigma^2 = \theta_2$

Find the maximum likelihood estimators (MLE) of $\theta_1$ and $\theta_2$.

**Answer**

The pdf of $X_i \sim N(\theta_1, \theta_2)$ is: $$f(x_i; \theta_1, \theta_2) = \frac{1}{\sqrt{2\pi\theta_2}} e^{-\frac{1}{2\theta_2}(x_i - \theta_1)^2}$$

The likelihood function is: 
$$ \begin{align} L(\theta_1, \theta_2) & = \prod_{i=1}^n f(x_i; \theta_1, \theta_2) \\
& = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\theta_2}} e^{-\frac{1}{2\theta_2}(x_i - \theta_1)^2}  \\
 & = \frac{1}{(2\pi\theta_2)^{n/2}} e^{-\frac{1}{2\theta_2}\sum_{i=1}^n(x_i - \theta_1)^2} \end{align}
$$

Solving $\ln L(\theta_1, \theta_2)$:

$$\ln L(\theta_1, \theta_2) = -\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\theta_2) - \frac{1}{2\theta_2}\sum_{i=1}^n(x_i - \theta_1)^2$$

**Finding MLE for $\theta_1$ (mean):**

Solving $\frac{\partial}{\partial \theta_1}\ln L(\theta_1, \theta_2)=0$:

$$ \begin{align} \frac{\partial}{\partial \theta_1} \ln L(\theta_1, \theta_2) & = \frac{\partial}{\partial \theta_1}\left[-\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\theta_2) - \frac{1}{2\theta_2}\sum_{i=1}^n(x_i - \theta_1)^2\right]  \\

0 & = 0 - 0 - \frac{1}{2\theta_2}\sum_{i=1}^n \frac{\partial}{\partial \theta_1}(x_i - \theta_1)^2  \\

0 & = -\frac{1}{2\theta_2}\sum_{i=1}^n 2(x_i - \theta_1)(-1)  \\

0 & = \frac{1}{\theta_2}\sum_{i=1}^n (x_i - \theta_1)  \\

0 & = \sum_{i=1}^n x_i - n\theta_1  \\

n\theta_1 & = \sum_{i=1}^n x_i  \\

\hat{\theta_1} & = \frac{1}{n}\sum_{i=1}^n x_i = \bar{x}

\end{align} $$

**Finding MLE for $\theta_2$ (variance):**

Solving $\frac{\partial}{\partial \theta_2}\ln L(\theta_1, \theta_2)=0$:

$$ \begin{align} \frac{\partial}{\partial \theta_2} \ln L(\theta_1, \theta_2) & = \frac{\partial}{\partial \theta_2}\left[-\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\theta_2) - \frac{1}{2\theta_2}\sum_{i=1}^n(x_i - \theta_1)^2\right]  \\

0 & = 0 - \frac{n}{2} \cdot \frac{1}{\theta_2} - \sum_{i=1}^n(x_i - \theta_1)^2 \cdot \frac{\partial}{\partial \theta_2}\left(\frac{1}{2\theta_2}\right)  \\

0 & = -\frac{n}{2\theta_2} - \sum_{i=1}^n(x_i - \theta_1)^2 \cdot \left(-\frac{1}{2\theta_2^2}\right)  \\

0 & = -\frac{n}{2\theta_2} + \frac{1}{2\theta_2^2}\sum_{i=1}^n(x_i - \theta_1)^2  \\

\frac{n}{2\theta_2} & = \frac{1}{2\theta_2^2}\sum_{i=1}^n(x_i - \theta_1)^2  \\

n\theta_2 & = \sum_{i=1}^n(x_i - \theta_1)^2  \\

\hat{\theta_2} & = \frac{1}{n}\sum_{i=1}^n(x_i - \theta_1)^2

\end{align} $$

Substituting $\hat{\theta_1} = \bar{x}$:

$$\hat{\theta_2} = \frac{1}{n}\sum_{i=1}^n(x_i - \bar{x})^2$$

$\therefore$ The maximum likelihood estimators are:

$$
\begin{align}
\hat{\theta_1} & = \frac{1}{n}\sum_{i=1}^n X_i && = \bar{x} \\
\hat{\theta_2} & = \frac{1}{n}\sum_{i=1}^n(X_i - \bar{X})^2 && =s^2
\end{align}
$$

Note that $\hat{\theta_2}$ is the biased sample variance (dividing by $n$ instead of $n-1$).
