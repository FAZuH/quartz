---
publish: true
aliases:
  - Consistency of Linear System by its Constant Vector
created: 2025-10-14T04:15:27.042+07:00
modified: 2025-10-14T04:15:27.042+07:00
published: 2025-10-14T04:15:27.042+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 11:35
status: baby
parent:
  - "[[Elementary Linear Algebra]]"
---


## Theorem

A [[3 Reference/Def-linear-system\|linear system]] $A\mathbf{x}=\mathbf{b}$ is [[3 Reference/Def-consistency-of-linear-system\|consistent]] if and only if $\mathbf{b}$ is in [[3 Reference/def-row-space,-column-space,-null-space_202510061124\|column space]] of $A$

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

Show that $\mathbf{b}$ is in the column space of $A$ by expressing it as a [[3 Reference/def-linear-combination_202510020342\|linear combination]] of the column vectors of $A$.

Solving the system by [[3 Reference/theorem-gaussian-elimination\|Gaussian elimination]] yields (verify)
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