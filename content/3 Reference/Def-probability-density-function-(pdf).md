---
{"publish":true,"aliases":"Definition of Probability Density Function (pdf) Probability Density Function (pdf)","cssclasses":""}
---


## Definition

Let $X$ : Continuous random variable

If
$$ f_{X}(x) = P[X=x] = 0, \quad \forall x\in \mathbb{R} $$

Then we say that $f_{X}(x)$ is the **probability density function** (pdf) of $X$

## Properties
Also,
- $F_{X}(x)=\int_{-\infty}^x f_{X}(t)dt$
- $\frac{d}{dx}F_{X}(x)=f_{X}(x)$
- $P(a<X\leq b)=F_{X}(b)-F_{X}(a)=\int_{a}^b f_{X}(t)dt$
- $P(a<X\leq b)=P(a\leq X\leq b)=P(a\leq X<b)=P(a<X<b)$

Additionally, pdfs satisfies the following properties:
1. $f_{X}(x)\geq 0$
2. $\int_{-\infty}^\infty f_{X}(t)dt = 1$
