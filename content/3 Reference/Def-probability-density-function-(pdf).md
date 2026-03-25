---
publish: true
aliases:
  - Probability Density Function (pdf)
  - pdf
created: 2026-03-25T15:22:40.641+07:00
modified: 2026-03-25T15:22:40.641+07:00
published: 2026-03-25T15:22:40.641+07:00
creation-time: 2025-07-15 06:25
status: complete
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let $X$ : [[Def-continuous-random-variable|Continuous random variable]]

If
$$ f\_{X}(x) = P\[X=x] = 0, \quad \forall x\in \mathbb{R} $$

Then we say that $f\_{X}(x)$ is the **probability density function** (pdf) of $X$

## Properties

- $F\_{X}(x)=\int\_{-\infty}^x f\_{X}(t)dt$
- $\frac{d}{dx}F\_{X}(x)=f\_{X}(x)$
- $P(a\<X\leq b)=F\_{X}(b)-F\_{X}(a)=\int\_{a}^b f\_{X}(t)dt$
- $P(a\<X\leq b)=P(a\leq X\leq b)=P(a\leq X\<b)=P(a\<X\<b)$

Additionally, pdfs satisfies the following properties:

1. $f\_{X}(x)\geq 0$
2. $\int\_{-\infty}^\infty f\_{X}(t)dt = 1$
