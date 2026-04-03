---
publish: true
aliases:
  - Regular Exponential Class on Random Vectors
created: 2026-03-25T15:22:40.598+07:00
modified: 2026-03-25T15:22:40.598+07:00
published: 2026-03-25T15:22:40.598+07:00
cssclasses: ""
creation-time: 2025-07-17 10:21
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Definition
Let
- $X$ : Random variable, with
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\boldsymbol{\theta})$, $\boldsymbol{\theta}\in \Omega \subset R^m$
- $\mathcal{S}$ : [[3 Reference/Def-support-of-continuous-random-variable\|Support]] of $X$

Suppose
$$
f(x;\boldsymbol{\theta}) = \begin{cases}
\exp\left[ \sum_{j=1}^m p_{j}(\boldsymbol{\theta})K_{j}(x) + H(x) + q(\boldsymbol{\theta}) \right] & \forall x\in \mathcal{S} \\
0 & \text{elsewhere}
\end{cases}
$$

Then we say $f(x;\boldsymbol{\theta})$ is a **member of the exponential class**

If
1. $\mathcal{S}$ does not depend upon $\boldsymbol{\theta}$
2. [[3 Reference/def-space_202507171031\|Space]] $\Omega$ contains a nonempty, $m$-dimensional open rectangle
3. $p_{j}(\boldsymbol{\theta})$ are all nontrivial, functionally independent, continuous functions of $\boldsymbol{\theta}$
4. If $X$ [[3 Reference/Def-continuous-random-variable\|continuous random variable]], then
	1. $K'_{j}(x)$ are all [[3 Reference/structure/continuous functions\|continuous]] for $a<x<b$, not [[3 Reference/Def-homogeneous-linear-equation\|homogeneous linear function]] of the others.
	2. $H(x)$ : Continuous function of $x\in \mathcal{S}$
5. If $X$ [[3 Reference/Def-discrete-random-variable\|discrete random variable]], then
	1. $K'_{j}(x)$ are all nontrivial functions of $x\in \mathcal{S}$, not homogeneous linear function of the others

Then we say $f(x;\boldsymbol{\theta})$ is a **regular case of the exponential family**