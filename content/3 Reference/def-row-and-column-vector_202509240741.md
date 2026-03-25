---
publish: true
aliases:
  - Row Vector
  - Column Vector
  - Row and Column Vector
created: 2026-03-25T15:22:40.646+07:00
modified: 2026-03-25T15:22:40.646+07:00
published: 2026-03-25T15:22:40.646+07:00
tags:
  - 
creation-time: 2025-09-24 07:41
status: complete
parent:
  - "[[Elementary Linear Algebra]]"
---

## Definition

For an $m \times n$ [[Def-matrix|matrix]]

$$
A = \begin{bmatrix}
a\_{11} & a\_{12} & \cdots & a\_{1n} \\
a\_{21} & a\_{22} & \cdots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a\_{m1} & a\_{m2} & \cdots & a\_{mn}
\end{bmatrix}
$$

the vectors

$$
\begin{align}
\mathbf{r}_1 &= \[a_{11} , a\_{12} , \cdots , a\_{1n}] \\
\mathbf{r}_2 &= \[a_{21} , a\_{22} , \cdots , a\_{2n}] \\
\vdots \\
\mathbf{r}_m &= \[a_{m1} , a\_{m2} , \cdots , a\_{mn}]
\end{align}
$$

in $R^n$ that are formed from the rows of $A$ are called the row vectors of $A$, and the vectors

$$
\mathbf{c}_1 = \begin{bmatrix} a_{11} \ a\_{21} \ \vdots \ a\_{m1} \end{bmatrix}, \quad
\mathbf{c}_2 = \begin{bmatrix} a_{12} \ a\_{22} \ \vdots \ a\_{m2} \end{bmatrix}, \quad \cdots, \quad
\mathbf{c}_n = \begin{bmatrix} a_{1n} \ a\_{2n} \ \vdots \ a\_{mn} \end{bmatrix}
$$

in $R^m$ formed from the columns of $A$ are called the column vectors of $A$.
