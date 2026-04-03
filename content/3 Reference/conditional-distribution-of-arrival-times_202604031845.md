---
publish: true
aliases:
  - Conditional Distribution of Arrival Times
created: 2026-04-03T18:45:46.706+07:00
modified: 2026-04-03T19:13:10.730+07:00
published: 2026-04-03T19:13:10.730+07:00
tags:
  - type/theorem
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Theorem

> Let ${N(t), t \geq 0}$ be a [[poisson-process_202604031845|Poisson process]] of rate $\lambda$.
>
> Given $N(t) = n$, the $n$ arrival times $S\_1, S\_2, \dots, S\_n$ have the same distribution as the **order statistics** of $n$ i.i.d. $\text{Uniform}(0, t)$ random variables.

The joint density is:

$$f(s\_1, s\_2, \dots, s\_n \mid N(t) = n) = \frac{n!}{t^n}, \quad 0 < s\_1 < s\_2 < \cdots < s\_n < t$$

> [!TIP] Interpretation
> If you know exactly $n$ events happened in $\[0, t]$, the times at which they occurred are just like $n$ points dropped uniformly at random in the interval — there's no clustering or pattern.

## Proof

The event ${S\_1 = s\_1, \dots, S\_n = s\_n, N(t) = n}$ is equivalent to ${T\_1 = s\_1, T\_2 = s\_2 - s\_1, \dots, T\_n = s\_n - s\_{n-1}, T\_{n+1} > t - s\_n}$.

Using [[inter-arrival-times_202604031845|inter-arrival times]] are i.i.d. $\text{Exp}(\lambda)$:

$$
\begin{align}
f(s\_1, \dots, s\_n \mid N(t) = n) &= \frac{\lambda e^{-\lambda s\_1} \lambda e^{-\lambda(s\_2 - s\_1)} \cdots \lambda e^{-\lambda(s\_n - s\_{n-1})} e^{-\lambda(t - s\_n)}}{e^{-\lambda t} (\lambda t)^n / n!} \\
&= \frac{n!}{t^n}
\end{align}
$$

which is the joint density of order statistics of $n$ i.i.d. $\text{Uniform}(0, t)$ variables.

## Remark

This is often paraphrased as: given $n$ events in $(0, t)$, the event times considered as **unordered** variables are distributed independently and uniformly over $(0, t)$.

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[waiting-times-(poisson)_202604031845|Waiting Times]]
