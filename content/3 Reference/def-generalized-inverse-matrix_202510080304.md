---
publish: true
aliases:
  - Generalized Inverse Matrix
  - Generalized Inverse
  - G-Inverse
created: 2026-04-09T23:07:39.154+07:00
modified: 2026-04-09T23:07:39.155+07:00
published: 2026-04-09T23:07:39.155+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-08 03:04
status: complete
parent:
  - "[[matrices]]"
---


## Definition

Let 
- $A$ : [[3 Reference/Def-matrix\|Matrix]] of size $m\times n$
- $G$ : Matrix of size $n\times m$

If
$$
AGA=A
$$

Then we call $G$ the **generalized inverse** (or g-inverse) of $A$

## Obtaining g-inverse matrix: General

Let $A$ : Matrix of size $m\times n$

1. Determine [[3 Reference/Def-matrix\|square]] [[3 Reference/def-partitioned-matrices-and-submatrix\|submatrix]] $M$ of [[3 Reference/Def-matrix\|order]] $\operatorname{rank}(A)$ that is [[3 Reference/theorem-matrix-invertibility_202509241243\|invertible]]
2. Create $n\times m$ [[3 Reference/def-zero-matrix_202509241049\|zero matrix]], and insert $(M^{-1})^T$ where $M$ was taken from $A$

The result from the last step is $(A^{-1})^T$, the transpose of generalized inverse of $A$ satisfying $AA^{-1}A=A$

## Obtaining g-inverse matrix: Schur complement

