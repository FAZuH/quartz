---
publish: true
aliases:
  - Conditional Distribution of Arrival Times
created: 2026-04-09T23:07:39.061+07:00
modified: 2026-04-09T23:07:39.061+07:00
published: 2026-04-09T23:07:39.061+07:00
tags:
  - type/theorem
cssclasses: ""
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Theorem

Let $\{N(t), t \geq 0\}$ be a [[3 Reference/poisson-process_202604031845\|Poisson process]] of rate $\lambda$.

Given $N(t) = n$, the $n$ arrival times $S_1, S_2, \dots, S_n$ have the same distribution as the **order statistics** of $n$ i.i.d. $\text{Uniform}(0, t)$ random variables.

$\blacksquare$

The joint density is:

$$f(s_1, s_2, \dots, s_n \mid N(t) = n) = \frac{n!}{t^n}, \quad 0 < s_1 < s_2 < \cdots < s_n < t$$

> [!TIP] Interpretation
> If you know exactly $n$ events happened in $[0, t]$, the times at which they occurred are just like $n$ points dropped uniformly at random in the interval — there's no clustering or pattern.

## Proof

The event $\{S_1 = s_1, \dots, S_n = s_n, N(t) = n\}$ is equivalent to $\{T_1 = s_1, T_2 = s_2 - s_1, \dots, T_n = s_n - s_{n-1}, T_{n+1} > t - s_n\}$.

Using [[3 Reference/inter-arrival-times_202604031845\|inter-arrival times]] are i.i.d. $\text{Exp}(\lambda)$:

$$
\begin{align}
f(s_1, \dots, s_n \mid N(t) = n) &= \frac{\lambda e^{-\lambda s_1} \lambda e^{-\lambda(s_2 - s_1)} \cdots \lambda e^{-\lambda(s_n - s_{n-1})} e^{-\lambda(t - s_n)}}{e^{-\lambda t} (\lambda t)^n / n!} \\
&= \frac{n!}{t^n}
\end{align}
$$

which is the joint density of order statistics of $n$ i.i.d. $\text{Uniform}(0, t)$ variables.

## Remark

This is often paraphrased as: given $n$ events in $(0, t)$, the event times considered as **unordered** variables are distributed independently and uniformly over $(0, t)$.

## Related

- [[3 Reference/poisson-process_202604031845\|Poisson Process]]
- [[3 Reference/waiting-times-(poisson)_202604031845\|Waiting Times]]
