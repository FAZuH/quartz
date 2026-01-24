---
publish: true
aliases:
  - Product of Partitioned Matrices
created: 2025-10-14T04:15:27.063+07:00
modified: 2025-10-14T04:15:27.063+07:00
published: 2025-10-14T04:15:27.063+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-08 04:37
status: baby
parent:
  - "[[Elementary Linear Algebra]]"
---


## Theorem

Let
- $A=\begin{bmatrix}A_{11} & A_{12} \\ A_{21} & A_{22}\end{bmatrix}$
- $B=\begin{bmatrix}B_{11} & B_{12} \\ B_{21} & B_{22}\end{bmatrix}$

Then
$$
\begin{align}
AB & = \begin{bmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{bmatrix}
\begin{bmatrix}
B_{11} & B_{12} \\
B_{21} & B_{22}
\end{bmatrix} \\
& = \begin{bmatrix}
A_{11}B_{11}+A_{12}B_{21} & A_{11}B_{12}+A_{12}B_{22} \\
A_{21}B_{11}+A_{22}B_{21} & A_{21}B_{12}+A_{12}B_{22} \\
\end{bmatrix}
\end{align}
$$

> [!tip]
> The pattern is the same as [[3 Reference/Def-matrix-product\|matrix product]] with real numbers.