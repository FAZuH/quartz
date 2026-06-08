---
publish: true
aliases:
  - Inner Product
  - Euclidean Inner Product
  - Frobenius Inner Product
created: 2026-04-09T23:07:39.172+07:00
modified: 2026-04-09T23:07:39.173+07:00
published: 2026-04-09T23:07:39.173+07:00
tags:
  - 
creation-time: 2025-10-06 14:21
status: in progress
parent:
  - "[[Elementary Linear Algebra]]"
---

## Definition: Vectors

Let $\mathbf{u},\mathbf{v}$ : Vectors in [[def-vector-space-axioms_202509240715|vector space]] $R^n$

Then the **inner product** of $\mathbf{u}$ and $\mathbf{v}$ is

$$
\langle \mathbf{u},\mathbf{v} \rangle = \mathbf{u}\cdot \mathbf{v} = u_{1}v_{1}+u_{2}v_{2}+\dots,u_{n}v_{n}
$$

## Definition: Matrices

Let

- $\mathcal{V}$ : [[def-linear-space_202509170852|Linear space]] of  $m\times n$ [[Def-matrix|matrices]]
- $A,B$ : $m\times n$ matrices in $\mathcal{V}$

Then the **inner product** of $A$ and $B$ is

$$
A\cdot B=\operatorname{tr}(A^TB)=\operatorname{tr}(AB^T)
$$
