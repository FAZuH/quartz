---
publish: true
aliases:
  - Determinants of Partitioned Matrices
created: 2026-04-09T23:07:39.653+07:00
modified: 2026-04-09T23:07:39.653+07:00
published: 2026-04-09T23:07:39.653+07:00
tags:
  - 
creation-time: 2025-09-24 23:10
status: complete
parent:
  - "[[matrices]]"
---

## Theorem

Let

- $A$ : [[Def-matrix|Square matrix]]
- $A$ [[def-partitioned-matrices-and-submatrix|partitioned]] as \$\$
  A=\begin{bmatrix}
  T & U \\
  V & W
  \end{bmatrix}

$$

If $T$ is square and [[def-inverse-matrix_202509241225|nonsingular]] (invertible)

Then 
$$

|A|=|T|; |W -  VT^{-1}U|

$$

That is, the determinant is the product of the determinant of the [[def-principal-submatrix_202509241406|principal submatrix]] and the determinants of its Schur component

## Proof

$$

\begin{bmatrix}
A\_{11} & A\_{12} \\
A\_{21} & A\_{22}
\end{bmatrix}
=============

\begin{bmatrix}
A\_{11} & 0 \\
A\_{21} & A\_{22} - A\_{21}A\_{11}^{-1}A\_{12}
\end{bmatrix}
\begin{bmatrix}
I & A\_{11}^{-1}A\_{12} \\
0 & I
\end{bmatrix}

$$
$$
