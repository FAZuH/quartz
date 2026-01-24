---
publish: true
aliases:
  - Maximum Likelihood Estimator (mle)
  - MLE
created: 2025-10-14T04:15:27.075+07:00
modified: 2025-10-21T08:01:49.900+07:00
published: 2025-10-21T08:01:49.900+07:00
cssclasses: ""
creation-time: 2025-07-15 08:01
status: baby
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Definition
Let
- $\mathbf{X}$ : Observed data
- $\theta$ : Parameter
- $L(\theta;\mathbf{X})$ : [[3 Reference/mathstat4.1#Definition Likelihood function\|Likelihood function]] 

If $\hat{\theta}=\operatorname{Argmax}L(\theta;\mathbf{X})$

Then $\hat{\theta}$ is a **maximum likelihood [[3 Reference/mathstat4.1#Definition Estimator\|estimator]]** (mle) of $\theta$

## Properties

The MLE has the following properties:

1. [[3 Reference/Def-consistent-estimator\|Consistenty]]
	$$\hat{\theta} \xrightarrow{P} \theta \quad \text{ketika } n \to \infty$$ 
2. Asymptotic normality
	$$\sqrt{n}(\hat{\theta} - \theta) \xrightarrow{d} N(0, V)$$
	Where $V$ is covariance matrix.
3. Asymptotic [[3 Reference/def-efficient-estimator_202507170919\|efficiency]]
	$$V = I(\theta)^{-1}$$
	Where $I(\theta)^{-1}$ is [[3 Reference/def-rao-cramer-lower-bound_202507171109\|Rao-Cramer Lower Bound]]


## See also

- [[3 Reference/Maximum Likelihood Estimation (MLE)\|Finding Maximum Likelihood Estimator]]

## Related theorems
- [[3 Reference/mathstat6.1#Theorem 6.1.2\|Theorem 6.1.2]]