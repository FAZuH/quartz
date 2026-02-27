---
publish: true
aliases:
  - Negative Binomial Distribution
created: 2026-02-22T19:23:58.400+07:00
modified: 2026-02-22T19:23:58.400+07:00
published: 2026-02-22T19:23:58.400+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-15 08:22
status: baby
parent:
  - "[[mathematical-statistics]]"
---


## Definition

$X \sim \text{NB}(r,p)$

Distribution of number of failures ($x$) needed to get the $r$-th success

- pmf: $\binom{x+r-1}{r-1}p^r(1-p)^x$, $x \in {0,1,2,\ldots}$
- mean: $\dfrac{r(1-p)}{p}$
- var: $\dfrac{r(1-p)}{p^2}$
- mgf: $p^r[1-(1-p)e^t]^{-r}$, $t < -\ln(1-p)$
