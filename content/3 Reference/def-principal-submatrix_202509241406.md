---
publish: true
aliases:
  - Principal Submatrix
created: 2026-04-09T23:07:39.267+07:00
modified: 2026-04-09T23:07:39.268+07:00
published: 2026-04-09T23:07:39.268+07:00
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
   \left[
   \begin{array}{c:ccc}
   a_{11} & a_{12} & a_{13} & a_{14} \\
   \hdashline
   a_{21} & a_{22} & a_{23} & a_{24} \\
   a_{31} & a_{32} & a_{33} & a_{34} \\
   a_{41} & a_{42} & a_{43} & a_{44}
   \end{array}
   \right]
   $$

2. 2nd principal submatrix
   $$
   \left[
   \begin{array}{cc:cc}
   a_{11} & a_{12} & a_{13} & a_{14} \\
   a_{21} & a_{22} & a_{23} & a_{24} \\
   \hdashline
   a_{31} & a_{32} & a_{33} & a_{34} \\
   a_{41} & a_{42} & a_{43} & a_{44}
   \end{array}
   \right]
   $$

3. 3rd principal submatrix
   $$
   \left[
   \begin{array}{ccc:c}
   a_{11} & a_{12} & a_{13} & a_{14} \\
   a_{21} & a_{22} & a_{23} & a_{24} \\
   a_{31} & a_{32} & a_{33} & a_{34} \\
   \hdashline
   a_{41} & a_{42} & a_{43} & a_{44}
   \end{array}
   \right]
   $$

4. 4th principal submatrix
   $$
   \begin{bmatrix}
   a_{11} & a_{12} & a_{13} & a_{14} \\
   a_{21} & a_{22} & a_{23} & a_{24} \\
   a_{31} & a_{32} & a_{33} & a_{34} \\
   a_{41} & a_{42} & a_{43} & a_{44}
   \end{bmatrix}
   $$
