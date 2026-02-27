---
publish: true
aliases:
  - 1.7 Continuous Random Variables
created: 2026-02-22T19:24:22.068+07:00
modified: 2026-02-22T19:24:22.069+07:00
published: 2026-02-22T19:24:22.069+07:00
cssclasses: ""
creation-time: 2025-07-02 22:36
status: baby
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[3 Reference/mathstat1.6\|1.6 Discrete Random Variables]] | [[3 Reference/mathstat1.8\|1.8 Expectation of Random Variable]] >>

## Definition 1.7.1: Continuous random variable
## Definition

Let
- $X$ : [[3 Reference/mathstat1.5#Example pmf of discrete random variable\|Random variable]]
- $F(x)$ : [[3 Reference/mathstat1.5#Definition 1.5.2 Cumulative distribution function (cdf)\|cdf]] of $X$

If $F(x)$ is continuous for all $x\in \mathbb{R}$

Then we say $X$ is a **continuous random variable**


## Definition: Probability density function (pdf)
## Definition

Let $X$ : [[3 Reference/Def-continuous-random-variable\|Continuous random variable]]

If
$ f_{X}(x) = P[X=x] = 0, \quad \forall x\in \mathbb{R} $$

Then we say that $f_{X}(x)$ is the **probability density function** (pdf) of $X$


## Definition: Support of continuous random variable
## Definition

Let
- $X$ : [[3 Reference/Def-continuous-random-variable\|Continuous random variable]]
- $\mathcal{D}$ : [[3 Reference/def-space_202507171031\|Space]] of $X$
- $f_{X}(x)$ : [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] of $X$

Then the **support** of $X$ is defined as
$  \mathcal{S}_X = \{ x \in \mathcal{D} : f_{X}(x)>0  \} $$



## Definition 1.7.2: Quantile
## Definition

Let
- $0<p<1$
- $X$ : Random variable

If 
- $\xi_{p}$ such that 
	- $P(X<\xi_{p})\leq p$
	- $P(X\leq \xi_{p})\geq p$

Then
- We say $\xi_{p}$ is the **quantile** of order $p$ of $X$
- We say $\xi_{p}$ is the $(100p)$th **percentile** of $X$


## Theorem 1.7.1: Finding the pdf of a transformation
## Theorem

Let
- $X$ : Continuous random variable, with
	- pdf $f_{X}(x)$
	- Support $\mathcal{S}_{X}$
- $g: \mathcal{S}_X \to \mathbb{R}$, one-to-one and differentiable
- $Y=g(X)$, with
	- Support $\mathcal{S}_{Y}=\{ y=g(x):s\in S_{X} \}$
- $x=g^{-1}(y)$ : Inverse of $g$
- $\frac{d}{dy}x=\frac{d}{dy}g^{-1}(y)$

Then pdf of $Y$ is given by
$ f_{Y}(y)=f_{X}(g^{-1}(y)) \left| \frac{d}{dy}x \right|, \quad \forall y\in \mathcal{S}_{Y} $$



## Exercise
### Example 1.7.6
Let $X$ have the pdf
$$
f(x)=\begin{cases}
4x^3 & 0<x<1 \\
0 & \text{elsewhere}
\end{cases}
$$

Consider the random variable $Y=-\log X$. Here are the steps of [[3 Reference/mathstat1.7#Theorem 1.7.1 Finding the pdf of a transformation]]:
1. The support of $Y=-\log X$ is $(0,\infty)$
2. If $y=-\log x$, then $x=e^{-y}$
3. $\frac{d}{dy}x=-e^{-y}$
4. Thus the pdf of $Y$ is:
$$
\begin{align}
f_{Y}(y) & =f_{X}(e^{-y})|-e^{-y}| \\
 & = 4(e^{-y})^3e^{-y} \\
 & = 4e^{-4y}
\end{align}
$$

