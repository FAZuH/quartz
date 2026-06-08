---
publish: true
aliases:
  - Linear System
  - Coefficient Matrix
  - Variable Vector
  - Vector of Unknowns
  - Constant Vector
created: 2026-04-09T23:07:39.202+07:00
modified: 2026-04-09T23:07:39.204+07:00
published: 2026-04-09T23:07:39.204+07:00
creation-time: 2025-07-15 01:45
status: complete
tag:
parent: "[[linear-algebra|linear algebra]]"
---

## Definition

**System of linear equations** (or **linear system**), is defined as a finite set of [[Def-linear-equation|linear equation]].

## Remark

The variables in linear system are called **unknowns** ^def-unknowns

A linear system of $m$ equations in $n$ unknowns is written as

$$$\begin{matrix}
a_{11}x_{1} & + & a_{12}x_{2} & + & \dots & + &  a_{1n}x_{n} & = & b_{1} \\
a_{21}x_{1} & + & a_{22}x_{2} & + & \dots & + &  a_{2n}x_{n} & = & b_{2} \\
\vdots & & \vdots & &&  & \vdots &  & \vdots \\
a_{m1}x_{1} & + & a_{m2}x_{2} & + & \dots & + &  a_{mn}x_{n} & = & b_{m} \\
\end{matrix} $$

A linear system may also be written in [[Def-matrix|matrix]] form as  $$ \mathbf{Ax}=\mathbf{b} $$ , where:
- $\mathbf{A} = [a_{ij}]$ is the $m \times n$ coefficient matrix
- $\mathbf{x} = [x_1, x_2, \ldots, x_n]^T$ is the variable vector
- $\mathbf{b} = [b_1, b_2, \ldots, b_m]^T$ is the constant vector

## Related theorems
- [[Def-solution-of-linear-system|Solution of Linear System]]
- [[theorem-elementary-row-operation_202510021405|Elementary Row Operation]]
- [[1.1 Introduction to Systems of Linear Equations#Theorem Solutions of linear system]]
- [[1.1 Introduction to Systems of Linear Equations#Theorem Elementary row operations]]
$$$
