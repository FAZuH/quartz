---
publish: true
aliases:
  - 1.8 Expectation of Random Variable
created: 2026-04-09T23:07:39.465+07:00
modified: 2026-04-09T23:07:39.466+07:00
published: 2026-04-09T23:07:39.466+07:00
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
> > Let $X$ is a [[Def-continuous-random-variable|Continuous random variable]] with [[Def-probability-density-function-(pdf)|pdf]] $f_{X}(x)$
> >
> > If $\int_{-\infty}^\infty|g(x)|f_{X}(x)dx<\infty$
> >
> > Then $E(Y)$ exists, given by
> > $E(Y) = \int_{-\infty}^\infty g(x)f_{X}(x)dx$
>
> > Let
> >
> > - $X$ is a [[Def-discrete-random-variable|Discrete random variable]], with
> >   - [[Def-probability-mass-function-(pmf)|pmf]] $p_{X}(x)$
> >   - [[Def-support-of-discrete-random-variable|Support]] $\mathcal{S}_{X}$
> >
> > If $\sum_{x\in \mathcal{S}_{X}}|g(x)|p_{X}(x)<\infty$
> >
> > Then $E(Y)$ exists, given by
> > $E(Y)=\sum_{x\in \mathcal{S}_{X}} g(x)p_{X}(x) $

## Theorem 1.8.2: Linearity of expectation

> Let
>
> - $X$ : [[Def-random-variable|Random Variable]]
> - $g_{1}(X),g_{2}(X)$ : Functions of $X$
>
> If $E(g_{1}(X)),E(g_{2}(X))$ exists
>
> Then for any constants $k_{1},k_{2}$, the following [[#Definition 1.8.1 Expectation|expectation]] exists
>
> $$
> E[k_{1}g_{1}(X)+k_{2}g_{2}(X)]=k_{1}E[g_{1}(X)]+k_{2}E[g_{2}(X)]
> $$

This theorem proves that expectation is a linear operator. This allows us to easily do simple linear operations with expectations.
