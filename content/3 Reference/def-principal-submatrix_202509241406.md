---
publish: true
aliases:
  - Principal Submatrix
created: 2026-03-25T15:22:40.644+07:00
modified: 2026-03-25T15:22:40.644+07:00
published: 2026-03-25T15:22:40.644+07:00
tags:
  - 
creation-time: 2025-09-24 14:06
status: complete
parent:
  - "[[matrices]]"
---

## Definition

The $k$-th **principal [[def-partitioned-matrices-and-submatrix|submatrix]]** of an $n\times n$ [[Def-matrix|matrix]] is the $k\times k$ submatrix consisting of the first $k$ rows and columns of $A$.

## Example

The principal submatrices of a general $4\times 4$ matrix are:

1. 1st principal submatrix
   $$
   \left\[
   \begin{array}{c:ccc}
   a\_{11} & a\_{12} & a\_{13} & a\_{14} \\
   \hdashline
   a\_{21} & a\_{22} & a\_{23} & a\_{24} \\
   a\_{31} & a\_{32} & a\_{33} & a\_{34} \\
   a\_{41} & a\_{42} & a\_{43} & a\_{44}
   \end{array}
   \right]
   $$

2. 2nd principal submatrix
   $$
   \left\[
   \begin{array}{cc:cc}
   a\_{11} & a\_{12} & a\_{13} & a\_{14} \\
   a\_{21} & a\_{22} & a\_{23} & a\_{24} \\
   \hdashline
   a\_{31} & a\_{32} & a\_{33} & a\_{34} \\
   a\_{41} & a\_{42} & a\_{43} & a\_{44}
   \end{array}
   \right]
   $$

3. 3rd principal submatrix
   $$
   \left\[
   \begin{array}{ccc:c}
   a\_{11} & a\_{12} & a\_{13} & a\_{14} \\
   a\_{21} & a\_{22} & a\_{23} & a\_{24} \\
   a\_{31} & a\_{32} & a\_{33} & a\_{34} \\
   \hdashline
   a\_{41} & a\_{42} & a\_{43} & a\_{44}
   \end{array}
   \right]
   $$

4. 4th principal submatrix
   $$
   \begin{bmatrix}
   a\_{11} & a\_{12} & a\_{13} & a\_{14} \\
   a\_{21} & a\_{22} & a\_{23} & a\_{24} \\
   a\_{31} & a\_{32} & a\_{33} & a\_{34} \\
   a\_{41} & a\_{42} & a\_{43} & a\_{44}
   \end{bmatrix}
   $$
