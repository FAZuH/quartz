---
publish: true
aliases:
  - Invertible MA(q) Process
created: 2026-03-31T19:48:12.106+07:00
modified: 2026-03-31T20:02:46.107+07:00
published: 2026-03-31T20:02:46.107+07:00
tags:
  - 
creation-time: 2026-03-31 19:48
status: in progress
parent:
---

## Definition

An MA(q) process is said to be **invertible**, if the roots of the MA [[ar-characteristic-equation_202603161400|characteristic]] polynomial lie outside the unit circle.

When **invertible**, MA(q) can be written as an AR process with infinite order:
$$ a\_{t} = Z\_{t} + \pi\_{1}Z\_{t-1} + \pi\_{2}Z\_{t-2} + \dots $$

## Inverting MA(1) to AR(∞)

Let $Z\_{t} = a\_{t} + \theta a\_{t-1}$

Then $a\_{t} = Z\_{t} - \theta a\_{t-1}$

Substituting $a\_{t-1} = Z\_{t-1} - \theta a\_{t-2}$, then $a\_{t-2} = Z\_{t-2} - \theta a\_{t-3}$, and so on:

$$
\begin{align}
a\_{t} &= Z\_{t} - \theta a\_{t-1} \\
&= Z\_{t} - \theta(Z\_{t-1} - \theta a\_{t-2}) \\
&= Z\_{t} - \theta Z\_{t-1} + \theta^{2}a\_{t-2} \\
&= Z\_{t} - \theta Z\_{t-1} + \theta^{2}(Z\_{t-2} - \theta a\_{t-3}) \\
&= Z\_{t} - \theta Z\_{t-1} + \theta^{2}Z\_{t-2} - \theta^{3}a\_{t-3} \\
&= \cdots \\
&= Z\_{t} - \theta Z\_{t-1} + \theta^{2}Z\_{t-2} - \theta^{3}Z\_{t-3} + \dots \\
&= \sum\_{j=0}^{\infty} (-\theta)^{j} Z\_{t-j}
\end{align}
$$

This gives the AR($\infty$) representation:
$$a\_t = Z\_t - \theta Z\_{t-1} + \theta^2 Z\_{t-2} - \dots = \sum\_{j=0}^\infty (-\theta)^j Z\_{t-j}$$

with $\pi\_j = (-\theta)^j$.

Notice that this converges if $|\theta| < 1$, since $|\theta|^j \to 0$ as $j \to \infty$.
