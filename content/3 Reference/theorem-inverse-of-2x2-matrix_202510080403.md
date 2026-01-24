---
publish: true
aliases:
  - Inverse of 2x2 Matrix
created: 2025-10-14T04:15:27.046+07:00
modified: 2025-10-14T04:21:33.427+07:00
published: 2025-10-14T04:21:33.427+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-08 04:03
status: baby
parent:
  - "[[Elementary Linear Algebra]]"
---


## Theorem

Let $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$

Then
- $A$ is [[3 Reference/theorem-matrix-invertibility_202509241243\|invertible]] if and only if $ad-bc\neq0$
- 
$$
A^{-1}=\frac{1}{ad-bc}\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$