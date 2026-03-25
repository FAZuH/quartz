---
publish: true
aliases:
  - Moments
  - Moments
created: 2026-03-25T15:22:40.605+07:00
modified: 2026-03-25T15:22:40.605+07:00
published: 2026-03-25T15:22:40.605+07:00
creation-time: 2025-07-15 06:57
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

In general, if $m$ is a positive integer, and if $M^{(m)}(t)$ means the $m$-th derivative of $M(t)$, we have, by repeated differentiation with respect to $t$,
$$M^{(m)}(0) = E(X^m)$$

Now
$$E(X^m) = \int\_{-\infty}^\infty x^m f(x),dx \quad \text{or}\quad \sum\_{x}x^m p(x),$$
and in mechanics, the integrals (or sums) of this sort are called **moments**.

## Remark

Since $M(t)$ generates the values of $E(X^m), m=1,2,3,\dots$, it is called the [[Def-moment-generating-function-(mgf)|moment generating function (mgf)]].

We sometimes call $E(X^m)$ the **$m$-th moment** of the distribution, or the $m$-th moment of $X$.

Some important properties of moments include:
$$
\begin{align}
E(X)  & = \mu \\
E(X^2) & = \operatorname{Var}(X) + \[E(X)]^2
\end{align}
$$

For a random sample $X\_1, X\_2, \ldots, X\_n$, the **$m$-th sample moment** is defined as:
$$M\_m = \frac{1}{n}\sum\_{i=1}^n X\_i^m$$

The first few sample moments are:

- **First sample moment (sample mean)**: $M\_1 = \bar{X} = \frac{1}{n}\sum\_{i=1}^n X\_i$
- **Second sample moment**: $M\_2 = \frac{1}{n}\sum\_{i=1}^n X\_i^2$
- **Third sample moment**: $M\_3 = \frac{1}{n}\sum\_{i=1}^n X\_i^3$
