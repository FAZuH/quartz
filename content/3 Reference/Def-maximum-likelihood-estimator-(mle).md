---
publish: true
aliases:
  - Maximum Likelihood Estimator (mle)
  - MLE
created: 2026-04-09T23:07:39.220+07:00
modified: 2026-04-09T23:07:39.221+07:00
published: 2026-04-09T23:07:39.221+07:00
creation-time: 2025-07-15 08:01
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $\mathbf{X}$ : Observed data
- $\theta$ : Parameter
- $L(\theta;\mathbf{X})$ : [[mathstat4.1#Definition Likelihood function|Likelihood function]]

If $\hat{\theta}=\operatorname{Argmax}L(\theta;\mathbf{X})$

Then $\hat{\theta}$ is a **maximum likelihood [[mathstat4.1#Definition Estimator|estimator]]** (mle) of $\theta$

## Properties

The MLE has the following properties:

1. [[Def-consistent-estimator|Consistenty]]
   $\hat{\theta} \xrightarrow{P} \theta \quad \text{ketika } n \to \infty$
2. Asymptotic normality
   $\sqrt{n}(\hat{\theta} - \theta) \xrightarrow{d} N(0, V)$
   Where $V$ is covariance matrix.
3. Asymptotic [[def-efficient-estimator_202507170919|efficiency]]
   $V = I(\theta)^{-1}$
   Where $I(\theta)^{-1}$ is [[def-rao-cramer-lower-bound_202507171109|Rao-Cramer Lower Bound]]

## See also

- [[Maximum Likelihood Estimation (MLE)|Finding Maximum Likelihood Estimator]]

## Related theorems

- [[mathstat6.1#Theorem 6.1.2|Theorem 6.1.2]]
