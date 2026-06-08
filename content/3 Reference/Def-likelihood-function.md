---
publish: true
aliases:
  - Likelihood Function
created: 2026-04-09T23:07:39.189+07:00
modified: 2026-04-09T23:07:39.190+07:00
published: 2026-04-09T23:07:39.190+07:00
creation-time: 2025-07-15 07:13
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X_{1},\dots,X_{n}$ : [[Def-random-sample|Random sample]]
- $x_{1},\dots,x_{n}$ : Realization of $X_{1},\dots,X_{n}$
- $\theta$ : Parameter
- $f(x;\theta)$ : [[Def-probability-density-function-(pdf)|pdf]] of $X_{1},\dots,X_{n}$

If

$$
\begin{align}
L(\theta) & =L(\theta;x_{1},\dots ,x_{n}) \\
 & = \prod_{i=1}^nf(x_{i};\theta)
\end{align}
$$

Then we say $L(\theta)$ is the **likelihood function** of $X_{1},\dots,X_{n}$

## About likelihood function

**Likelihood function** returns the probability of observed data (the $x$'s) expressed as a function of the parameter ($\theta$).

## See also

- [[Maximum Likelihood Estimation (MLE)]]

## Related definitions

- [[Def-maximum-likelihood-estimator-(mle)|Maximum Likelihood Estimator]]

## Related theorems
