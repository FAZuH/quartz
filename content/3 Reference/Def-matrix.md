---
publish: true
aliases:
  - Matrix
  - Scalar
  - Square Matrix
  - Main Diagonal
  - Entry
  - Entries
  - Order
created: 2026-03-25T15:22:40.646+07:00
modified: 2026-03-25T15:22:40.646+07:00
published: 2026-03-25T15:22:40.646+07:00
creation-time: 2025-07-15 02:13
status: complete
tag:
parent:
  - "[[matrices]]"
  - "[[linear-algebra|linear algebra]]"
---

## Definition

A **matrix** a rectangular array of numbers. The numbers in the array are called the **entries** in the matrix.

## Remark

A matrix with only one row is called a **[[def-row-and-column-vector_202509240741|row vector]]** (or matrix). Similarly, a matrix with only one column is called a **column vector** (or matrix). ^def-row-column-vector

We use capital letters to denote matrices, and lowercase letter to denote numercal quantities, e.g.,
$$
A=\begin{bmatrix}
2 & 1 & 7 \\
3 & 4 & 2
\end{bmatrix}=\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
$$

When disussing matrices, we often refer to the numerical quantities are **scalars**. ^def-scalar

The entry that occusr in row $i$ and column $j$ of matrix $A$ will is denoted by $a\_{ij}$, or sometimes $(A)_{ij}$. Thus a general $m\times n$ matrix is written as
$$
A=\begin{bmatrix}
a_{11} & a\_{12} & \dots & a\_{1n} \\
a\_{21} & a\_{22} & \dots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a\_{m1} & a\_{m2} & \dots & a\_{mn}
\end{bmatrix}
$$

A general $1\times n$ row vector $\mathbf{a}$ and a general $m\times 1$ column vector $\mathbf{b}$ is written as
$$
\begin{align}
\mathbf{a}&=\begin{bmatrix}
a\_{1},a\_{2},\dots,a\_{n}
\end{bmatrix} \\
\mathbf{b}&=\begin{bmatrix}
b\_{1} \\
b\_{2} \\
\vdots \\
b\_{m}
\end{bmatrix}
\end{align}
$$

A matrix $A$ of size $n\times n$ is called a **square matrix of order $n$**, and the diagonal entries are said to be on the **main diagonal** of $A$. ^def-square-matrix
