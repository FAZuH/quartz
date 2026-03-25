---
publish: true
aliases:
  - Inner Product
  - Euclidean Inner Product
  - Frobenius Inner Product
created: 2026-03-25T15:22:40.603+07:00
modified: 2026-03-25T15:22:40.603+07:00
published: 2026-03-25T15:22:40.603+07:00
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
\langle \mathbf{u},\mathbf{v} \rangle = \mathbf{u}\cdot \mathbf{v} = u\_{1}v\_{1}+u\_{2}v\_{2}+\dots,u\_{n}v\_{n}
$$

## Definition: Matrices

Let

- $\mathcal{V}$ : [[def-linear-space_202509170852|Linear space]] of  $m\times n$ [[Def-matrix|matrices]]
- $A,B$ : $m\times n$ matrices in $\mathcal{V}$

Then the **inner product** of $A$ and $B$ is
$$
A\cdot B=\operatorname{tr}(A^TB)=\operatorname{tr}(AB^T)
$$
