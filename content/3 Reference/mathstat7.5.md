---
publish: true
aliases:
  - 7.5 The Exponential Class of Distributions.md
created: 2026-03-25T15:22:40.618+07:00
modified: 2026-03-25T15:22:40.618+07:00
published: 2026-03-25T15:22:40.618+07:00
creation-time: 2025-07-10 02:30
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat7.4|7.4 Completeness and Uniqueness.md]] | [[mathstat7.6_202507171008|7.6 Functions of Parameter]] >>

## Definition 7.5.1: Regular exponential class

![[def-regular-exponential-class_202507170942#Definition]]

## Theorem 7.5.1

> Let
>
> - $X\_{1},\dots,X\_{n}$ : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]], with
>   - Distribution that represents a regular case of the exponential class
>   - pdf/pmf $$ f(x;\theta)=\begin{cases}  \exp\[p(\theta)K(x)+H(x)+q(\theta)] & x\in \mathcal{S} \  0 & \text{elsewhere} \end{cases} $$
> - $Y\_{1}=\sum\_{i=1}^n K(X\_{i})$
>
> Then
>
> 1. pdf/pmf of $Y\_{1}$ has the form $$ f\_{Y\_{1}} (y\_{1};\theta) = R(y\_{1})\exp\[p(\theta)y\_{1}+nq(\theta)] $$ for $y\_{1}\in \mathcal{S}_{Y_{1}}$ and some function $R(y\_{1})$. Neither $\mathcal{S}_{Y_{1}}$ nor $R(y\_{1})$ depends on $\theta$
> 2. $$E(Y\_{1})=-1 \frac{q'(\theta)}{p'(\theta)}$$
> 3. $$ \operatorname{Var} (Y\_{1})=n \frac{1}{p'(\theta)^3} { p''(\theta)q'(\theta) - q''(\theta)p'(\theta) }$$

> [!remark]
> [[#Theorem 7.5.2]] fits into the 4th case of this theorem.

## Theorem 7.5.2

> Let
>
> - $X$ : Random variable, with
>   - $f(x ; \theta), \gamma<\theta<\delta$ : pdf/pmf
>   - Distribution is a [[def-regular-exponential-class_202507170942|regular case of exponential class]]
> - $X\_1, X\_2, \ldots, X\_n$ : Random sample from the distribution of $X$
> - $Y\_1=\sum\_{i=1}^n K\left(X\_i\right)$
>
> Then $Y\_1$ is a [[def-complete-sufficient-statistic_202507170931|complete sufficient statistic]] for $\theta$
