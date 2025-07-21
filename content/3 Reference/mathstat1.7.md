---
{"publish":true,"aliases":"1.7 Continuous Random Variables","cssclasses":""}
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

Let $X$ : Continuous random variable

If
$ f_{X}(x) = P[X=x] = 0, \quad \forall x\in \mathbb{R} $$

Then we say that $f_{X}(x)$ is the **probability density function** (pdf) of $X$


## Definition: Support of continuous random variable
## Definition

Let
- $X$ : Discrete random variable
- $\mathcal{D}$ : Space of $X$
- $f_{X}(x)$ : pdf of $X$

If
$  \mathcal{S}_X = \{ x \in \mathcal{D} : f_{X}(x)>0  \} $$

Then we say $\mathcal{S}_{X}$ is the **support** of $X$


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
> Let
> - $X$ : Continuous random variable, with
> 	- pdf $f_{X}(x)$
> 	- Support $\mathcal{S}_{X}$
> - $g: \mathcal{S}_X \to \mathbb{R}$, one-to-one and differentiable
> - $Y=g(X)$, with
> 	- Support $\mathcal{S}_{Y}=\{ y=g(x):s\in S_{X} \}$
> - $x=g^{-1}(y)$ : Inverse of $g$
> - $\frac{d}{dy}x=\frac{d}{dy}g^{-1}(y)$
> 
> Then pdf of $Y$ is given by
> $$ f_{Y}(y)=f_{X}(g^{-1}(y)) \left| \frac{d}{dy}x \right|, \quad \forall y\in \mathcal{S}_{Y} $$

This theorem can be used in the following simple algorithm:

> Assuming $Y=g(X)$ is one-to-one:
> 1. Find $\mathcal{S}_{Y}$
> 2. Solve the inverse of the tranformation; i.e., solve for $x$ in terms of $y$ in $y=g(x)$, thereby obtaining $x=g^{-1}(y)$
> 3. Obtain $\frac{d}{dy}x$
> 4. The pdf of $Y$ is $f_Y(y)=f_{X}(g^{-1}(y)) \left| \frac{d}{dy}x \right|$

See [[3 Reference/mathstat1.7#Example 1.7.6]] for example

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

