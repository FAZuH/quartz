---
publish: true
aliases:
  - Product of Partitioned Matrices
created: 2026-03-25T15:22:40.621+07:00
modified: 2026-03-25T15:22:40.621+07:00
published: 2026-03-25T15:22:40.621+07:00
tags:
  - 
creation-time: 2025-10-08 04:37
status: in progress
parent:
  - "[[Elementary Linear Algebra]]"
---

## Theorem

Let

- $A=\begin{bmatrix}A\_{11} & A\_{12} \ A\_{21} & A\_{22}\end{bmatrix}$
- $B=\begin{bmatrix}B\_{11} & B\_{12} \ B\_{21} & B\_{22}\end{bmatrix}$

Then
$$
\begin{align}
AB & = \begin{bmatrix}
A\_{11} & A\_{12} \\
A\_{21} & A\_{22}
\end{bmatrix}
\begin{bmatrix}
B\_{11} & B\_{12} \\
B\_{21} & B\_{22}
\end{bmatrix} \\
& = \begin{bmatrix}
A\_{11}B\_{11}+A\_{12}B\_{21} & A\_{11}B\_{12}+A\_{12}B\_{22} \\
A\_{21}B\_{11}+A\_{22}B\_{21} & A\_{21}B\_{12}+A\_{12}B\_{22} \\
\end{bmatrix}
\end{align}
$$

> [!tip]
> The pattern is the same as [[Def-matrix-product|matrix product]] with real numbers.
