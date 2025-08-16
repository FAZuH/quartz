---
{"publish":true,"aliases":["1.10 Important Inequalities.md"],"created":"2025-08-15T13:53:58.613+07:00","modified":"2025-08-15T13:53:58.614+07:00","published":"2025-08-15T13:53:58.614+07:00","cssclasses":"","creation-time":"2025-06-24 01:06","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
---


<< [[3 Reference/mathstat1.9\|1.9 Some Special Expectations.md]] | [[3 Reference/mathstat2.1\|2.1 Distributions of Two Random Variables.md]] >>

This page will show overview of some famous inequalities involving expectations.

## Theorem 1.10.1: Existence of lower order moments
> Let:
> - $X$ random variable
> - $m \in \mathbb{P}$
> - $k\in \mathbb{P}, \quad k\leq m$
> 
> If $E(X^m)$ exists, then $E(X^k)$ exists

If a higher-order moment exists, then all lower-order moments must also exist

## Theorem 1.10.2: Markov’s inequality
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
> Let:
> - $X$ random variable
> - $\sigma^2\in \mathbb{R}$ variance of $X$
> - $\mu=E(X)$ (by [[3 Reference/mathstat1.10#Theorem 1.10.1 Existence of lower order moments]], this implies that $E(X)$ exists)
> 
> Then, for every $k > 0$
$$
\begin{align}
P(|X - \mu| \geq k\sigma) & \leq \frac{1}{k^2} \\
P(|X - \mu| < k\sigma) & \geq 1 - \frac{1}{k^2}
\end{align}
$$

## Definition 1.10.1: Convex function
![[3 Reference/Def-convex-function#Definition]]

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
> $$ \phi[E(X)]\leq E[\phi(X)] $$


