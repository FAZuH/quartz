---
publish: true
aliases:
  - Determinants of Partitioned Matrices
created: 2026-02-22T19:24:22.741+07:00
modified: 2026-02-22T19:24:22.743+07:00
published: 2026-02-22T19:24:22.743+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-24 23:10
status: adult
parent:
  - "[[matrices]]"
---


## Theorem

Let 
- $A$ : [[3 Reference/Def-matrix\|Square matrix]]
- $A$ [[3 Reference/def-partitioned-matrices-and-submatrix\|partitioned]] as $$
A=\begin{bmatrix}
T & U \\
V & W
\end{bmatrix}
$$

If $T$ is square and [[3 Reference/def-inverse-matrix_202509241225\|nonsingular]] (invertible)

Then 
$$
|A|=|T|\; |W -  VT^{-1}U|
$$

That is, the determinant is the product of the determinant of the [[3 Reference/def-principal-submatrix_202509241406\|principal submatrix]] and the determinants of its Schur component

## Proof

$$
\begin{bmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{bmatrix}
=
\begin{bmatrix}
A_{11} & 0 \\
A_{21} & A_{22} - A_{21}A_{11}^{-1}A_{12}
\end{bmatrix}
\begin{bmatrix}
I & A_{11}^{-1}A_{12} \\
0 & I
\end{bmatrix}
$$