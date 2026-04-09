---
publish: true
aliases:
  - 1.10 Important Inequalities.md
created: 2026-04-09T23:07:39.458+07:00
modified: 2026-04-09T23:07:39.459+07:00
published: 2026-04-09T23:07:39.459+07:00
cssclasses: ""
creation-time: 2025-06-24 01:06
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


<< [[3 Reference/mathstat1.9\|1.9 Some Special Expectations.md]] | [[3 Reference/mathstat2.1\|2.1 Distributions of Two Random Variables.md]] >>

This page will show overview of some famous inequalities involving expectations.

## Theorem 1.10.1: Existence of lower order moments
## Theorem

> Let:
> - $X$ random variable
> - $m \in \mathbb{P}$
> - $k\in \mathbb{P}, \quad k\leq m$
> 
> If $E(X^m)$ exists, then $E(X^k)$ exists

If a higher-order moment exists, then all lower-order moments must also exist


## Theorem 1.10.2: Markov’s inequality
## Theorem
> Let:
> - $X$ random variable
> - $u(X) \to \mathbb{P}$
> - $E[u(X)]$ exists $\forall c\in \mathbb{P}$
> 
> Then
> $$
> P[u(X)\geq c] \leq \frac{E[u(X)]}{c}
> $$



## Theorem 1.10.3: Chebyshev’s inequality
## Theorem

Let:
- $X$ [[3 Reference/Def-random-variable\|Random Variable]]
- $\sigma^2\in \mathbb{R}$ [[3 Reference/Def-variance\|Variance]] of $X$
- $\mu=E(X)$ (by [[3 Reference/theorem-existence-of-lower-order-moments_202509071843\|Existence of Lower Order Moments]], $\sigma^2\in \mathbb{R}$ implies that $E(X)$ exists)

Then, for every $k > 0$
$$
P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}
$$

Or equivalently,
$$
P(|X - \mu| < k\sigma) \geq 1 - \frac{1}{k^2}
$$


## Definition 1.10.1: Convex function
## Definition
Let $\phi$ : Function defined on interval $(a,b)$, where $-\infty \leq a < b \leq \infty$

If 
$ \phi[\gamma x + (1-\gamma)y] \leq \gamma\phi(x) + (1-\gamma)\phi(y),\quad\forall x,y\in(a,b), 0<\gamma<1 $$

Then we say $\phi$ is a **convex function**

> [!note]
> If the inequality is strict (i.e., $<$ instead of $\leq$), then we say $\phi$ is **strictly convex**.

## Theorem 1.10.4
> If $\phi$ is differentiable on $(a,b)$
> 
> Then
> - $\phi$ is convex $\iff \phi'(x)\leq \phi'(y),\quad\forall a<x<y<b$
> - $\phi$ is strictly convex $\iff \phi'(x) < \phi'(y),\quad\forall a<x<y<b$

> If $\phi$ is twice differentiable on $(a,b)$
> 
> Then
> - $\phi$ is convex $\iff \phi''(x)\geq 0,\quad \forall a<x<b$
> - $\phi$ is strictly convex $\iff \phi''(x) > 0,\quad \forall a<x<b$

## Theorem 1.10.5: Jensen's inequality
## Theorem

> Let
> - $\phi$ is convex on an open interval $I$
> - $X$ : Random variable
> - $\mathcal{S}_{X}$ : Support of $X$
> 
> If
> - $\mathcal{S}_{X} \subseteq I$
> - $E(X)$ is finite
> 
> Then
> $ \phi[E(X)]\leq E[\phi(X)] $$

