---
publish: true
aliases:
  - 7.4 Completeness and Uniqueness.md
created: 2026-04-09T23:07:39.479+07:00
modified: 2026-04-09T23:07:39.480+07:00
published: 2026-04-09T23:07:39.480+07:00
cssclasses: ""
creation-time: 2025-07-10 02:30
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[3 Reference/mathstat7.3\|7.3 Properties of a Sufficient Statistic.md]] | [[3 Reference/mathstat7.5\|7.5 The Exponential Class of Distributions.md]] >>

## Definition 7.4.1: Complete family of pdf/pmf
## Definition

Let:
- $Z$ : [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|Random variable]]
- [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]]/[[3 Reference/mathstat1.6#Definition 1.6.2 Probability mass function (pmf)\|pmf]] of $Z$ is one member of the family $\{ h(z;\theta) : \theta\in \Omega \}$

If $\forall \theta \in\Omega: E[u(Z)]=0\implies u(z)=0$ [[3 Reference/def-almost-surely\|almost surely]] with respect to $h(z;\theta),\forall \theta \in \Omega$

Then the family $h(z;\theta) : \theta\in \Omega$ is called a **complete family** of pdf/pmfs.


## Definition: Complete sufficient statistic

## Definition


Let $X_{1},\dots,X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with pdf/pmf $f(x;\theta)$, $\theta\in \Omega$

If
- $Y_{1}=u_{1}(X_{1},\dots,X_{n})$ : [[3 Reference/mathstat7.2#Definition 7.2.1 Sufficient statistic\|Sufficient statistic]] for $\theta$ with pdf/pmf $f_{Y_{1}}(y_{1};\theta)$
- Family $\{ f_{Y_{1}}(y_{1};\theta): \theta\in \Omega \}$ be [[3 Reference/def-complete-family-of-pdf-pmf_202507170933\|complete]]

Then $Y_{1}$ is a **complete sufficient statistic** for $\theta$


## Definition 7.4.1: Unique unbiased minimum variance estimator (UMVUE)
## Theorem

Let
- $X_{1},\dots,X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y_{1}=u_{1}(X_{1},\dots,X_{n})$ : [[3 Reference/def-complete-sufficient-statistic_202507170931\|Complete sufficient statistic]] for $\theta$

If $\varphi(Y_{1})$ is an [[3 Reference/mathstat4.1#Definition 4.1.3 Unbiased estimator\|unbiased estimator]] of $\theta$

Then $\varphi(Y_{1})$ is the **unique [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]]** (UMVUE) of $\theta$

