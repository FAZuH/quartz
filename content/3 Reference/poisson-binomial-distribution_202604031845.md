---
publish: true
aliases:
  - Poisson-Binomial Distribution
created: 2026-04-09T23:07:39.552+07:00
modified: 2026-04-09T23:07:39.553+07:00
published: 2026-04-09T23:07:39.553+07:00
tags:
  - type/theorem
cssclasses: ""
creation-time: 2026-04-03 18:45
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Theorem

> Let $N \sim \text{Po}(\mu)$ and conditional on $N = n$, let $M \mid N = n \sim \text{Bin}(n, p)$.
>
> Then $M$ (unconditional on $N$) is Poisson distributed with parameter $\mu p$.

> [!TIP] Interpretation
> If you have a Poisson number of trials and each succeeds with probability $p$, the number of successes is still Poisson — just with a scaled-down rate.

## Proof

$$
\begin{align}
P(M = k) &= \sum_{n=k}^{\infty} P(M = k \mid N = n) P(N = n) \\
&= \sum_{n=k}^{\infty} \binom{n}{k} p^k (1-p)^{n-k} \cdot \frac{e^{-\mu} \mu^n}{n!} \\
&= \frac{e^{-\mu} p^k}{k!} \sum_{n=k}^{\infty} \frac{(\mu(1-p))^{n-k}}{(n-k)!} \mu^k \\
&= \frac{e^{-\mu} (\mu p)^k}{k!} \sum_{j=0}^{\infty} \frac{(\mu(1-p))^j}{j!} \\
&= \frac{e^{-\mu} (\mu p)^k}{k!} e^{\mu(1-p)} \\
&= \frac{e^{-\mu p} (\mu p)^k}{k!}
\end{align}
$$

Thus $M \sim \text{Po}(\mu p)$.

## Related

- [[3 Reference/def-poisson-distribution_202509150822\|Poisson Distribution]]
- [[3 Reference/sum-of-poisson-random-variables_202604031845\|Sum of Poisson Random Variables]]
