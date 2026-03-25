---
publish: true
aliases:
  - Binomial Distribution
created: 2026-03-25T15:22:40.593+07:00
modified: 2026-03-25T15:22:40.593+07:00
published: 2026-03-25T15:22:40.593+07:00
tags:
  - 
creation-time: 2025-09-15 08:22
status: in progress
parent:
  - "[[mathematical-statistics]]"
---

## Definition

$X \sim B(n,p)$

Models the number of successes in a fixed number of independent Bernoulli trials, each with the same probability of success

$x$ is the amount of success outcomes

- [[Def-probability-mass-function-(pmf)|pmf]]: $\binom{n}{x}p^x(1-p)^{n-x}$, $x \in {0,1,2,\ldots,n}$
- [[Def-mean|Mean]]: $np$
- [[Def-variance|Variance]]: $np(1-p)$
- [[Def-moment-generating-function-(mgf)|mgf]]: $(1-p+pe^t)^n$
