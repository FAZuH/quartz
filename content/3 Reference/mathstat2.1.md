---
publish: true
aliases:
  - 2.1 Distributions of Two Random Variables.md
created: 2026-03-25T15:22:40.605+07:00
modified: 2026-03-25T15:22:40.605+07:00
published: 2026-03-25T15:22:40.605+07:00
creation-time: 2025-07-02 23:50
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat1.10|1.10 Important Inequalities.md]] | [[2.2-transformations-bivariate-random-variables_202507240549|2.2 Transformations: Bivariate Random Variables]] >>

#TODO: Marginal distributions

## Definition 2.1.1: Random vector

![[def-random-vector_202507171028#Definition]]

## Theorem 2.1.1

> Let
>
> - $(X\_{1},X\_{2})$ : Random vector
> - $Y\_{1}=g\_{1}(X\_{1},X\_{2})$
> - $Y\_{2}=g\_{2}(X\_{1},X\_{2})$
> - $E(Y\_{1}),E(Y\_{2})$ exist
>
> Then
> $$
> E(k\_{1}Y\_{1}+k\_{2}Y\_{2}) = k\_{1}E(Y\_{1}) + k\_{2}E(Y\_{2}), \quad \forall k\_{1},k\_{2}\in \mathbb{R}
> $$

## Definition 2.1.2: mgf of random vector of two random variables

> Let $\mathbf{X}=(X\_{1},X\_{2})'$ : Random vector
>
> If
> $$
> M\_{X\_{1},X\_{2}}(t\_{1},t\_{2}) = E(e^{ t\_{1}X\_{1}+t\_{2}X\_{2} })\text{ exists}, \quad |t\_{1}|\<h\_{1},|t\_{2}|\<h\_{2},h\_{1}\in \mathbb{P}, h\_{2}\in \mathbb{P}
> $$
>
> Then we say $M\_{X\_{1},X\_{2}}$ is the mgf of $\mathbf{X}$

## Definition 2.1.3: Expected value of random vector of two random variables

> Let $\mathbf{X}=(X,Y)'$ : Random vector
>
> If $E(X),E(Y)$ exist
>
> Then $E\[\mathbf{X}]=E\left\[\begin{matrix}E(X) \ E(Y)\end{matrix}\right]$ exist
