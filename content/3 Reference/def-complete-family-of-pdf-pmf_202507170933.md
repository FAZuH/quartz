---
publish: true
aliases:
  - Complete Family of pdf/pmf
created: 2026-03-25T15:22:40.624+07:00
modified: 2026-03-25T15:22:40.624+07:00
published: 2026-03-25T15:22:40.624+07:00
creation-time: 2025-07-17 09:33
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let:

- $Z$ : [[mathstat1.5#Definition 1.5.1 Random variable|Random variable]]
- [[mathstat1.7#Definition Probability density function (pdf)|pdf]]/[[mathstat1.6#Definition 1.6.2 Probability mass function (pmf)|pmf]] of $Z$ is one member of the family ${ h(z;\theta) : \theta\in \Omega }$

If $\forall \theta \in\Omega: E\[u(Z)]=0\implies u(z)=0$ [[def-almost-surely|almost surely]] with respect to $h(z;\theta),\forall \theta \in \Omega$

Then the family $h(z;\theta) : \theta\in \Omega$ is called a **complete family** of pdf/pmfs.

## Remark

In short, If $E\[u(Z)] = 0$ for all $\theta$ implies $u(Z) = 0$ ([[def-almost-surely|almost surely]]), then the family is complete.

"Almost surely" means "with probability 1" or equivalently "except possibly on a set of probability zero."

The if statement can be reworded as _"If the condition $E\[u(Z)]=0$ for every $\theta\in \Omega$ requries $u(z)=0$, except on a set of points that has probability zero for each $h(z;\theta)$, $\theta\in \Omega$"_

In practical terms, if something happens almost surely, it might technically fail on some points, but those points have zero probability of occurring.
