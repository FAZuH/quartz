---
publish: true
aliases:
  - 1.8 Expectation of Random Variable
created: 2026-03-25T15:22:40.615+07:00
modified: 2026-03-25T15:22:40.615+07:00
published: 2026-03-25T15:22:40.615+07:00
creation-time: 2025-06-28 18:05
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat1.7|1.7 Continuous Random Variables]] | [[mathstat1.9|1.9 Some Special Expectations.md]] >>

## Definition 1.8.1: Expectation

![[Def-expectation#Definition]]

## Theorem 1.8.1: Expectation of a function

> Let
>
> - $X$ : [[Def-random-variable|Random variable]]
>
> - $Y=g(X)$
>
> > Let $X$ is a [[Def-continuous-random-variable|Continuous random variable]] with [[Def-probability-density-function-(pdf)|pdf]] $f\_{X}(x)$
> >
> > If $$\int\_{-\infty}^\infty|g(x)|f\_{X}(x)dx<\infty$$
> >
> > Then $E(Y)$ exists, given by
> > $$ E(Y) = \int\_{-\infty}^\infty g(x)f\_{X}(x)dx $$
>
> > Let
> >
> > - $X$ is a [[Def-discrete-random-variable|Discrete random variable]], with
> >   - [[Def-probability-mass-function-(pmf)|pmf]] $p\_{X}(x)$
> >   - [[Def-support-of-discrete-random-variable|Support]] $\mathcal{S}\_{X}$
> >
> > If $$\sum\_{x\in \mathcal{S}_{X}}|g(x)|p_{X}(x)<\infty$$
> >
> > Then $E(Y)$ exists, given by
> > $$ E(Y)=\sum\_{x\in \mathcal{S}_{X}} g(x)p_{X}(x)  $$

## Theorem 1.8.2: Linearity of expectation

> Let
>
> - $X$ : [[Def-random-variable|Random Variable]]
> - $g\_{1}(X),g\_{2}(X)$ : Functions of $X$
>
> If $E(g\_{1}(X)),E(g\_{2}(X))$ exists
>
> Then for any constants $k\_{1},k\_{2}$, the following [[#Definition 1.8.1 Expectation|expectation]] exists
> $$
> E\[k\_{1}g\_{1}(X)+k\_{2}g\_{2}(X)]=k\_{1}E\[g\_{1}(X)]+k\_{2}E\[g\_{2}(X)]
> $$

This theorem proves that expectation is a linear operator. This allows us to easily do simple linear operations with expectations.
