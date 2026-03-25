---
publish: true
aliases:
  - Likelihood Function
created: 2026-03-25T15:22:40.624+07:00
modified: 2026-03-25T15:22:40.625+07:00
published: 2026-03-25T15:22:40.625+07:00
creation-time: 2025-07-15 07:13
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X\_{1},\dots,X\_{n}$ : [[Def-random-sample|Random sample]]
- $x\_{1},\dots,x\_{n}$ : Realization of $X\_{1},\dots,X\_{n}$
- $\theta$ : Parameter
- $f(x;\theta)$ : [[Def-probability-density-function-(pdf)|pdf]] of $X\_{1},\dots,X\_{n}$

If
$$
\begin{align}
L(\theta) & =L(\theta;x\_{1},\dots ,x\_{n}) \\
& = \prod\_{i=1}^nf(x\_{i};\theta)
\end{align}
$$

Then we say $L(\theta)$ is the **likelihood function** of $X\_{1},\dots,X\_{n}$

## About likelihood function

**Likelihood function** returns the probability of observed data (the $x$'s) expressed as a function of the parameter ($\theta$).

## See also

- [[Maximum Likelihood Estimation (MLE)]]

## Related definitions

- [[Def-maximum-likelihood-estimator-(mle)|Maximum Likelihood Estimator]]

## Related theorems
