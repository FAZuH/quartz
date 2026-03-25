---
publish: true
aliases:
  - Multinomial Distribution
created: 2026-03-25T15:22:40.613+07:00
modified: 2026-03-25T15:22:40.613+07:00
published: 2026-03-25T15:22:40.613+07:00
tags:
  - 
creation-time: 2025-09-15 08:22
status: in progress
parent:
  - "[[mathematical-statistics]]"
---

## Definition

$\mathbf{X} \sim \text{Multinomial}(n; p\_1, p\_2, \ldots, p\_k)$

Extension of [[def-binomial-distribution_202509150822|binomial distribution]] to $k$ categories.

$x\_{i}$ is the number of success in the $i$-th variable.

- [[Def-probability-mass-function-(pmf)|pmf]]: $\dfrac{n!}{x\_1!\cdots x\_k!}p\_1^{x\_1}\cdots p\_k^{x\_k}$
  - $x\_k = n-(x\_1+\cdots+x\_{k-1})$
  - $p\_k = 1-(p\_1+\cdots+p\_{k-1})$
- [[Def-mean|Mean]]: $E(X\_i) = np\_i$
- [[Def-variance|Variance]]: $\text{Var}(X\_i) = np\_i(1-p\_i)$
- Covariance: $\text{Cov}(X\_i, X\_j) = -np\_ip\_j$
