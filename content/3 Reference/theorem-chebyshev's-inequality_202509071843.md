---
publish: true
aliases:
  - Chebyshev's Inequality
created: 2025-10-14T04:15:27.050+07:00
modified: 2025-10-17T02:52:21.689+07:00
published: 2025-10-17T02:52:21.689+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-07 18:43
status: baby
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


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

## Example

> If $X$ is a [[3 Reference/Def-random-variable\|random variable]] such that $E(X)=3$ and $E(X^{2})=13$, use Chebyshev's inequality to determine a lower bound for the probability $P(-2<X<8)$

We have,
- $\mu=E(X)=3$
- $\sigma^{2}=E(X^{2})-[E(X)]^{2}=13-3^{2}=4$
- $\sigma=\sqrt{ \sigma^{2} }=\sqrt{ 4 }=2$

Then
$$
\begin{align}
P(-2<X<8) & = P(-2-3<X-3<8-3) \\
 & = P(-5<X-3<5) \\
 & = P(|X-3|<5)
\end{align}
$$

By Chebyshev's inequality, the form $P(|X-3|<5)$ has to satisfy $P(|X-\mu|<k\sigma)$. Thus
$$
\begin{align}
k\sigma & = 5 \\
k\cdot2 & = 5 \\
k & = \frac{5}{2}
\end{align}
$$

As a result, the lower bound for $P(-2<X<8)$ is:
$$
\begin{align}
P(-2<X<8) & = P(|X-3|<5) \\
 & = 1 - \frac{1}{k^{2}}  \\
 & = 1 - \frac{1}{\left( \frac{5}{2} \right)^{2}} \\
 & = 1 - \frac{4}{25} \\
 & = \boxed{0.84}
\end{align}
$$