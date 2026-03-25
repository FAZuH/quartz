---
publish: true
aliases:
  - Linear System
  - Coefficient Matrix
  - Variable Vector
  - Vector of Unknowns
  - Constant Vector
created: 2026-03-25T15:22:40.645+07:00
modified: 2026-03-25T15:22:40.645+07:00
published: 2026-03-25T15:22:40.645+07:00
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

$$ \begin{matrix}
a\_{11}x\_{1} & + & a\_{12}x\_{2} & + & \dots & + &  a\_{1n}x\_{n} & = & b\_{1} \\
a\_{21}x\_{1} & + & a\_{22}x\_{2} & + & \dots & + &  a\_{2n}x\_{n} & = & b\_{2} \\
\vdots & & \vdots & &&  & \vdots &  & \vdots \\
a\_{m1}x\_{1} & + & a\_{m2}x\_{2} & + & \dots & + &  a\_{mn}x\_{n} & = & b\_{m} \\
\end{matrix} $$

A linear system may also be written in [[Def-matrix|matrix]] form as  $$ \mathbf{Ax}=\mathbf{b} $$ , where:

- $\mathbf{A} = \[a\_{ij}]$ is the $m \times n$ coefficient matrix
- $\mathbf{x} = \[x\_1, x\_2, \ldots, x\_n]^T$ is the variable vector
- $\mathbf{b} = \[b\_1, b\_2, \ldots, b\_m]^T$ is the constant vector

## Related theorems

- [[Def-solution-of-linear-system|Solution of Linear System]]
- [[theorem-elementary-row-operation_202510021405|Elementary Row Operation]]
- [[1.1 Introduction to Systems of Linear Equations#Theorem Solutions of linear system]]
- [[1.1 Introduction to Systems of Linear Equations#Theorem Elementary row operations]]
