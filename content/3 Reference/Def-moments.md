---
publish: true
aliases:
  - Moments
  - Moments
created: 2026-02-22T19:23:58.358+07:00
modified: 2026-02-22T19:23:58.358+07:00
published: 2026-02-22T19:23:58.358+07:00
cssclasses: ""
creation-time: 2025-07-15 06:57
status: baby
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

In general, if $m$ is a positive integer, and if $M^{(m)}(t)$ means the $m$-th derivative of $M(t)$, we have, by repeated differentiation with respect to $t$,
$$M^{(m)}(0) = E(X^m)$$

Now
$$E(X^m) = \int_{-\infty}^\infty x^m f(x)\,dx \quad \text{or}\quad \sum_{x}x^m p(x),$$
and in mechanics, the integrals (or sums) of this sort are called **moments**.

## Remark
Since $M(t)$ generates the values of $E(X^m), m=1,2,3,\dots$, it is called the [[3 Reference/Def-moment-generating-function-(mgf)\|moment generating function (mgf)]].

We sometimes call $E(X^m)$ the **$m$-th moment** of the distribution, or the $m$-th moment of $X$.

Some important properties of moments include:
$$
\begin{align}
E(X)  & = \mu \\
E(X^2) & = \operatorname{Var}(X) + [E(X)]^2
\end{align}
$$

For a random sample $X_1, X_2, \ldots, X_n$, the **$m$-th sample moment** is defined as:
$$M_m = \frac{1}{n}\sum_{i=1}^n X_i^m$$

The first few sample moments are:
- **First sample moment (sample mean)**: $M_1 = \bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$
- **Second sample moment**: $M_2 = \frac{1}{n}\sum_{i=1}^n X_i^2$
- **Third sample moment**: $M_3 = \frac{1}{n}\sum_{i=1}^n X_i^3$
