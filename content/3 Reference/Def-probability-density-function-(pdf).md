---
publish: true
aliases:
  - Probability Density Function (pdf)
  - pdf
created: 2026-03-25T15:22:40.641+07:00
modified: 2026-03-25T15:22:40.641+07:00
published: 2026-03-25T15:22:40.641+07:00
cssclasses: ""
creation-time: 2025-07-15 06:25
status: complete
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let $X$ : [[3 Reference/Def-continuous-random-variable\|Continuous random variable]]

If
$$ f_{X}(x) = P[X=x] = 0, \quad \forall x\in \mathbb{R} $$

Then we say that $f_{X}(x)$ is the **probability density function** (pdf) of $X$

## Properties
- $F_{X}(x)=\int_{-\infty}^x f_{X}(t)dt$
- $\frac{d}{dx}F_{X}(x)=f_{X}(x)$
- $P(a<X\leq b)=F_{X}(b)-F_{X}(a)=\int_{a}^b f_{X}(t)dt$
- $P(a<X\leq b)=P(a\leq X\leq b)=P(a\leq X<b)=P(a<X<b)$

Additionally, pdfs satisfies the following properties:
1. $f_{X}(x)\geq 0$
2. $\int_{-\infty}^\infty f_{X}(t)dt = 1$
