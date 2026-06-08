---
publish: true
aliases:
  - Regular Exponential Class on Random Vectors
created: 2026-04-09T23:07:39.294+07:00
modified: 2026-04-09T23:07:39.295+07:00
published: 2026-04-09T23:07:39.295+07:00
creation-time: 2025-07-17 10:21
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X$ : Random variable, with
  - [[Def-probability-density-function-(pdf)|pdf]]/[[Def-probability-mass-function-(pmf)|pmf]] $f(x;\boldsymbol{\theta})$, $\boldsymbol{\theta}\in \Omega \subset R^m$
- $\mathcal{S}$ : [[Def-support-of-continuous-random-variable|Support]] of $X$

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
2. [[def-space_202507171031|Space]] $\Omega$ contains a nonempty, $m$-dimensional open rectangle
3. $p_{j}(\boldsymbol{\theta})$ are all nontrivial, functionally independent, continuous functions of $\boldsymbol{\theta}$
4. If $X$ [[Def-continuous-random-variable|continuous random variable]], then
   1. $K'_{j}(x)$ are all [[continuous functions|continuous]] for $a<x<b$, not [[Def-homogeneous-linear-equation|homogeneous linear function]] of the others.
   2. $H(x)$ : Continuous function of $x\in \mathcal{S}$
5. If $X$ [[Def-discrete-random-variable|discrete random variable]], then
   1. $K'_{j}(x)$ are all nontrivial functions of $x\in \mathcal{S}$, not homogeneous linear function of the others

Then we say $f(x;\boldsymbol{\theta})$ is a **regular case of the exponential family**
