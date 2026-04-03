---
publish: true
aliases:
  - 4.1 Sampling and Statistics.md
created: 2026-03-25T15:22:40.620+07:00
modified: 2026-03-25T15:22:40.620+07:00
published: 2026-03-25T15:22:40.620+07:00
cssclasses: ""
creation-time: 2025-06-24 00:53
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[3 Reference/3.7-mixture-distributions_202507240801\|3.7 *Mixture Distributions]] | [[3 Reference/4.2-confidence-intervals_202507220822\|4.2 Confidence Intervals]] >>

## Definition 4.1.1: Random sample
## Definition

Let $X_{1},\dots, X_{n}$ : [[3 Reference/Def-random-sample\|Random samples]] of size $n$

If $X_{1},\dots, X_{n}$ are [[3 Reference/Def-independent-events\|independent]] and identically distributed (iid)

Then we say $X_{1},\dots, X_{n}$ are **random samples**

## Definition 4.1.2: Statistic
## Definition

Let $X_{1},\dots, X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]]

If $T = T(X_{1},\dots, X_{n})$, function of random samples

Then we say $T$ is a **statistic** of $X_{1},\dots, X_{n}$

## Definition: Estimator
## Definition

**Estimator** of $\theta$ is a [[3 Reference/Def-statistic\|statistic]] used to estimate an unknown parameter $\theta$.


## Definition 4.1.3: Unbiased estimator
## Definition

Let
- $X_{1},\dots, X_{n}$ : [[3 Reference/Def-random-sample\|Random samples]], with
	- $\Omega$ : Parameter space
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x;\theta), \quad \theta \in \Omega$
- $T$ : [[3 Reference/Def-statistic\|Statistic]] of $X_{1},\dots, X_{n}$

If
$E(T)=\theta,\quad \forall \theta\in \Omega$$

Then we say $T$ is an **unbiased** estimator of $\theta$


## Definition: Likelihood function
## Definition

Let
- $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]]
- $x_{1},\dots,x_{n}$ : Realization of $X_{1},\dots,X_{n}$
- $\theta$ : Parameter
- $f(x;\theta)$ : [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] of $X_{1},\dots,X_{n}$

If
$$
\begin{align}
L(\theta) & =L(\theta;x_{1},\dots ,x_{n}) \\
 & = \prod_{i=1}^nf(x_{i};\theta)
\end{align}
$$

Then we say $L(\theta)$ is the **likelihood function** of $X_{1},\dots,X_{n}$
