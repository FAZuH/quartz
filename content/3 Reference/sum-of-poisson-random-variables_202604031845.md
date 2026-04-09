---
publish: true
aliases:
  - Sum of Poisson Random Variables
created: 2026-04-09T23:07:39.618+07:00
modified: 2026-04-09T23:07:39.620+07:00
published: 2026-04-09T23:07:39.620+07:00
tags:
  - type/theorem
cssclasses: ""
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Theorem

> Let $X$ and $Y$ be independent [[3 Reference/def-poisson-distribution_202509150822\|Poisson random variables]] with parameters $\mu$ and $\nu$ respectively.
>
> Then $X + Y \sim \text{Po}(\mu + \nu)$.

> [!TIP] Interpretation
> If two independent sources each produce events at Poisson rates, combining them gives a Poisson with the sum of the rates. The sum of independent Poissons is Poisson.

## Proof

By MGF convolution:
$$
\begin{align}
\phi_{X+Y}(t) &= \phi_X(t) \cdot \phi_Y(t) \\
&= e^{\mu(e^t - 1)} \cdot e^{\nu(e^t - 1)} \\
&= e^{(\mu + \nu)(e^t - 1)}
\end{align}
$$

This is the MGF of $\text{Po}(\mu + \nu)$, so $X + Y \sim \text{Po}(\mu + \nu)$.

## Related

- [[3 Reference/def-poisson-distribution_202509150822\|Poisson Distribution]]
- [[3 Reference/poisson-binomial-distribution_202604031845\|Poisson-Binomial Distribution]]
