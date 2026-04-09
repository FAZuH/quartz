---
publish: true
aliases:
  - 7.2 A Sufficient Statistic for a Parameter
created: 2026-04-09T23:07:39.477+07:00
modified: 2026-04-09T23:07:39.478+07:00
published: 2026-04-09T23:07:39.478+07:00
cssclasses: ""
creation-time: 2025-07-07 00:29
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


<< [[3 Reference/mathstat7.1\|7.1 Measures of Quality Estimators.md]] | [[3 Reference/mathstat7.3\|7.3 Properties of a Sufficient Statistic.md]] >> 

## Definition 7.2.1: Sufficient statistic
## Definition

Let
- $X_1,\dots,X_n$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with joint [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y = u(\mathbf{X})$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]], with pdf/pmf $f_{Y}(y;\theta)$

Then $Y$ is a **sufficient statistic** for $\theta$

If and only if
- $ \frac{\prod_{i=1}^nf(x_{i};\theta)}{f_{Y}[u(\mathbf{x});\theta]} = H(\mathbf{x}) $$
- $H(\mathbf{X})$ does not depend upon $\theta$

> [!tip]
> A **sufficient statistic** $Y$ for $\theta$ (function of $\mathbf{x}$) completely explains $\theta$ for any $\mathbf{x}$ such that $Y=y$, meaning:
> - For any $\mathbf{x}$ such that $Y=y$, $\mathbf{x}$ no longer tells anything more about $\theta$ beyond what $Y = y$ already explains 


## Theorem 7.2.1: Neyman theorem
## Theorem

Let
- $X_{1},\dots,X_{n}=\mathbf{X}$ : [[3 Reference/Def-random-sample\|Random sample]], with distribution that has [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y = u(\mathbf{X})$ : [[3 Reference/Def-statistic\|Statistic]] for $\theta$
- $L(\theta)$ : [[3 Reference/Def-likelihood-function\|Likelihood function]] of $X$

Then $Y$ is a [[3 Reference/def-sufficient-statistic_202507170925\|sufficient statistic]] for $\theta$ 

If and only if 
- $\exists k,l \ni L(\theta) = k[u(\mathbf{x});\theta]\cdot l(\mathbf{x})$$
- $l(\mathbf{x})$ is independent of $\theta$
