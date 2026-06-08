---
publish: true
aliases:
  - Consistency of Linear System by its Constant Vector
created: 2026-04-09T23:07:39.647+07:00
modified: 2026-04-09T23:07:39.648+07:00
published: 2026-04-09T23:07:39.648+07:00
tags:
  - 
creation-time: 2025-10-06 11:35
status: in progress
parent:
  - "[[Elementary Linear Algebra]]"
---

## Theorem

A [[Def-linear-system|linear system]] $A\mathbf{x}=\mathbf{b}$ is [[Def-consistency-of-linear-system|consistent]] if and only if $\mathbf{b}$ is in [[def-row-space,-column-space,-null-space_202510061124|column space]] of $A$

## Example

Let $A\mathbf{x} = \mathbf{b}$ be the linear system

$$
\begin{bmatrix}
-1 & 3 & 2 \\
1 & 2 & -3 \\
2 & 1 & -2
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
1 \\
-9 \\
-3
\end{bmatrix}
$$

Show that $\mathbf{b}$ is in the column space of $A$ by expressing it as a [[def-linear-combination_202510020342|linear combination]] of the column vectors of $A$.

Solving the system by [[theorem-gaussian-elimination|Gaussian elimination]] yields (verify)

$$
x_1 = 2, \quad x_2 = -1, \quad x_3 = 3
$$

It follows from this that

$$
2\begin{bmatrix}
-1 \\
1 \\
2
\end{bmatrix}
-
\begin{bmatrix}
3 \\
2 \\
1
\end{bmatrix}
+ 3
\begin{bmatrix}
2 \\
-3 \\
-2
\end{bmatrix}
=
\begin{bmatrix}
1 \\
-9 \\
-3
\end{bmatrix}
$$

$\mathbf{b}=(2,-1,3)$ is a solution to $A\mathbf{x}=\mathbf{b}$. Therefore, $\mathbf{b}$ is in column space of $A$.
