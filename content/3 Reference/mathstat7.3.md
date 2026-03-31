---
publish: true
aliases:
  - 7.3 Properties of a Sufficient Statistic.md
created: 2026-03-25T15:22:40.609+07:00
modified: 2026-03-31T09:23:34.670+07:00
published: 2026-03-31T09:23:34.670+07:00
creation-time: 2025-07-10 02:30
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat7.2|7.2 A Sufficient Statistic for a Parameter.md]] | [[mathstat7.4|7.4 Completeness and Uniqueness.md]] >>

## Theorem 7.3.1: Rao-Blackwell

Let

- $X\_{1},\dots X\_{n}$ : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]], with
  - pdf/pmf $f(x;\theta)$, $\theta\in \Omega$
- $Y\_{1} =u\_{1}(X\_{1},\dots,X\_{n})$ : [[mathstat7.2#Definition 7.2.1 Sufficient statistic|Sufficient statistic]] for $\theta$
- $Y\_{2} =u\_{2}(X\_{1},\dots,X\_{n})$ : [[mathstat4.1#Definition 4.1.3 Unbiased estimator|Unbiased estimator]] for $\theta$

If $E(Y\_{2}|y\_1)=\varphi(y\_{1})$ defines a statistic $\varphi(Y\_{1})$

Then

- $\varphi(Y\_{1})$ is an unbiased estimator of $\theta$
- $\operatorname{Var}\[\varphi(Y\_{1})]\leq\operatorname{Var}(Y\_{2})$

$\blacksquare$

This theorem states "function $\varphi(y\_{1})=E(Y\_{2}|y\_{1})$ of the sufficient statistic $Y\_{1}$ is an unbiased estimator of $\theta$ having a smaller variance than that of the unbiased estimator $Y\_{2}$ of $\theta$".

In simpler terms, given

- $Y\_{1}$ : Sufficient statistic for $\theta$
- $Y\_{2}$ : Unbiased statistic for $\theta$

A function of $Y\_{1}$ (usually denoted as $\varphi (Y\_{1})$) is a better (lower/equal variance) unbiased estimator than $Y\_{2}$.

## Theorem 7.3.2

> Let
>
> - $X\_{1},\dots,X\_{n}$ : Random sample, with
>   - pdf/pmf $f(x;\theta)$, $\theta\in \Omega$
> - $Y\_{1}=u\_{1}(X\_{1},\dots,X\_{n})$ : Sufficient statistic for $\theta$
> - $\hat{\theta}$ : [[mathstat6.1#Definition 6.1.1 Maximum Likelihood Estimator|Maximum likelihood estimator]] of $\theta$
>
> If
>
> - $Y\_{1}$ exists
> - $\hat{\theta}$ exists uniquely
>
> Then $\hat{\theta}$ is a function of $Y\_{1}$
