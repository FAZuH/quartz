---
{"publish":true,"aliases":["Probability Density Function (pdf)","Probability Density Function (pdf)","pdf"],"created":"2025-08-16T00:08:21.418+07:00","modified":"2025-08-16T00:08:21.419+07:00","published":"2025-08-16T00:08:21.419+07:00","cssclasses":"","creation-time":"2025-07-15 06:25","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
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
