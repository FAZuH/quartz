---
publish: true
aliases:
  - Finding the pdf of a Transformation
  - Transformation Technique
created: 2026-04-09T23:07:39.659+07:00
modified: 2026-04-09T23:07:39.660+07:00
published: 2026-04-09T23:07:39.660+07:00
creation-time: 2025-07-24 13:32
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X$ : Continuous random variable, with
  - pdf $f_{X}(x)$
  - Support $\mathcal{S}_{X}$
- $g: \mathcal{S}_X \to \mathbb{R}$, one-to-one and differentiable
- $Y=g(X)$, with
  - Support $\mathcal{S}_{Y}=\{ y=g(x):s\in S_{X} \}$
- $x=g^{-1}(y)$ : Inverse of $g$
- $\frac{d}{dy}x=\frac{d}{dy}g^{-1}(y)$

Then pdf of $Y$ is given by
$f_{Y}(y)=f_{X}(g^{-1}(y)) \left| \frac{d}{dy}x \right|, \quad \forall y\in \mathcal{S}_{Y}$

## Remark

This theorem can be used in the following simple algorithm:

> Assuming $Y=g(X)$ is one-to-one:
>
> 1. Find $\mathcal{S}_{Y}$
> 2. Solve the inverse of the tranformation; i.e., solve for $x$ in terms of $y$ in $y=g(x)$, thereby obtaining $x=g^{-1}(y)$
> 3. Obtain $\frac{d}{dy}x$
> 4. The pdf of $Y$ is $f_Y(y)=f_{X}(g^{-1}(y)) \left| \frac{d}{dy}x \right|$

See [[#Example 1.7.6]] for example
