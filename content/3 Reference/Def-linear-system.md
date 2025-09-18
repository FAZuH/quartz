---
{"publish":true,"aliases":["Linear System"],"created":"2025-09-13T18:58:55.332+07:00","modified":"2025-10-02T19:35:00.402+07:00","published":"2025-10-02T19:35:00.402+07:00","cssclasses":"","creation-time":"2025-07-15 01:45","status":"adult","tag":null,"parent":"[[linear-algebra|linear algebra]]"}
---


## Definition
**System of linear equations** (or **linear system**), is defined as a finite set of [[3 Reference/Def-linear-equation\|linear equation]].

## Remark
The variables in linear system are called **unknowns** ^def-unknowns

A linear system of $m$ equations in $n$ unknowns is written as

$$ \begin{matrix}
a_{11}x_{1} & + & a_{12}x_{2} & + & \dots & + &  a_{1n}x_{n} & = & b_{1} \\
a_{21}x_{1} & + & a_{22}x_{2} & + & \dots & + &  a_{2n}x_{n} & = & b_{2} \\
\vdots & & \vdots & &&  & \vdots &  & \vdots \\
a_{m1}x_{1} & + & a_{m2}x_{2} & + & \dots & + &  a_{mn}x_{n} & = & b_{m} \\
\end{matrix} $$

A linear system may also be written in [[3 Reference/Def-matrix\|matrix]] form as  $$ \mathbf{Ax}=\mathbf{b} $$ , where:
- $\mathbf{A} = [a_{ij}]$ is the $m \times n$ coefficient matrix
- $\mathbf{x} = [x_1, x_2, \ldots, x_n]^T$ is the variable vector
- $\mathbf{b} = [b_1, b_2, \ldots, b_m]^T$ is the constant vector

## Related theorems
- [[3 Reference/Def-solution-of-linear-system\|Solution of Linear System]]
- [[3 Reference/theorem-elementary-row-operation_202510021405\|Elementary Row Operation]]
- [[3 Reference/1.1 Introduction to Systems of Linear Equations#Theorem Solutions of linear system]]
- [[3 Reference/1.1 Introduction to Systems of Linear Equations#Theorem Elementary row operations]]