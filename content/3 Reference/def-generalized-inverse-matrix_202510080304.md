---
publish: true
aliases:
  - Generalized Inverse Matrix
  - Generalized Inverse
  - G-Inverse
created: 2026-03-25T15:22:40.646+07:00
modified: 2026-03-25T15:22:40.646+07:00
published: 2026-03-25T15:22:40.646+07:00
tags:
  - 
creation-time: 2025-10-08 03:04
status: complete
parent:
  - "[[matrices]]"
---

## Definition

Let

- $A$ : [[Def-matrix|Matrix]] of size $m\times n$
- $G$ : Matrix of size $n\times m$

If
$$
AGA=A
$$

Then we call $G$ the **generalized inverse** (or g-inverse) of $A$

## Obtaining g-inverse matrix: General

Let $A$ : Matrix of size $m\times n$

1. Determine [[Def-matrix|square]] [[def-partitioned-matrices-and-submatrix|submatrix]] $M$ of [[Def-matrix|order]] $\operatorname{rank}(A)$ that is [[theorem-matrix-invertibility_202509241243|invertible]]
2. Create $n\times m$ [[def-zero-matrix_202509241049|zero matrix]], and insert $(M^{-1})^T$ where $M$ was taken from $A$

The result from the last step is $(A^{-1})^T$, the transpose of generalized inverse of $A$ satisfying $AA^{-1}A=A$

## Obtaining g-inverse matrix: Schur complement
