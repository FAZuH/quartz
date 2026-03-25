---
publish: true
aliases:
  - Determinant of Matrices
created: 2026-03-25T15:22:40.591+07:00
modified: 2026-03-25T15:22:40.592+07:00
published: 2026-03-25T15:22:40.592+07:00
tags:
  - 
creation-time: 2025-10-08 05:03
status: in progress
parent:
  - "[[Elementary Linear Algebra]]"
---

## Definition

Let $A$ : [[Def-matrix|Square matrix]] of [[Def-matrix|order]] $n$

Let

- $a\_{ij}$ : Element of $A$ at row $i$ column $j$
- $M\_{ij}$ : $(n-1)\times(n-1)$ square submatrix obtained by deleting row $i$ and column $j$ of $A$

Choose any $i \in { 1,\dots,n }$

Then
$$
\det(A) = \sum\_{j=1}^n(-1)^{i+j}a\_{ij}\det (M\_{ij})
$$

> [!note]
> You can choose $j\in { 1,\dots,n }$, and sum over $i=1,\dots,n$ instead
