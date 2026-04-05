---
publish: true
aliases:
  - Invertible MA(q) Process
created: 2026-03-31T19:48:12.106+07:00
modified: 2026-04-05T18:27:39.515+07:00
published: 2026-04-05T18:27:39.515+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-03-31 19:48
status: in progress
parent:
  - "[[forecasting methods]]"
---


## Definition

An MA(q) process is said to be **invertible**, if the roots of the MA [[3 Reference/ar-characteristic-equation_202603161400\|characteristic]] polynomial lie outside the unit circle.

When **invertible**, MA(q) can be written as an AR process with infinite order:
$$ a_{t} = Z_{t} + \pi_{1}Z_{t-1} + \pi_{2}Z_{t-2} + \dots $$

## Inverting MA(1) to AR(∞)

Let $Z_{t} = a_{t} + \theta a_{t-1}$

Then $a_{t} = Z_{t} - \theta a_{t-1}$

Substituting $a_{t-1} = Z_{t-1} - \theta a_{t-2}$, then $a_{t-2} = Z_{t-2} - \theta a_{t-3}$, and so on:

$$
\begin{align}
a_{t} &= Z_{t} - \theta a_{t-1} \\
&= Z_{t} - \theta(Z_{t-1} - \theta a_{t-2}) \\
&= Z_{t} - \theta Z_{t-1} + \theta^{2}a_{t-2} \\
&= Z_{t} - \theta Z_{t-1} + \theta^{2}(Z_{t-2} - \theta a_{t-3}) \\
&= Z_{t} - \theta Z_{t-1} + \theta^{2}Z_{t-2} - \theta^{3}a_{t-3} \\
&= \cdots \\
&= Z_{t} - \theta Z_{t-1} + \theta^{2}Z_{t-2} - \theta^{3}Z_{t-3} + \dots \\
&= \sum_{j=0}^{\infty} (-\theta)^{j} Z_{t-j}
\end{align}
$$

This gives the AR($\infty$) representation:
$$a_t = Z_t - \theta Z_{t-1} + \theta^2 Z_{t-2} - \dots = \sum_{j=0}^\infty (-\theta)^j Z_{t-j}$$

with $\pi_j = (-\theta)^j$.

Notice that this converges if $|\theta| < 1$, since $|\theta|^j \to 0$ as $j \to \infty$.