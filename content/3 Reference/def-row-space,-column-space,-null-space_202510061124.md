---
publish: true
aliases:
  - Row Space, Column Space, Null Space
  - Row Space
  - Column Space
  - Null Space
created: 2026-04-09T23:07:39.299+07:00
modified: 2026-04-09T23:07:39.299+07:00
published: 2026-04-09T23:07:39.299+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 11:24
status: in progress
parent:
  - "[[Elementary Linear Algebra]]"
---


## Definition

Let
- $A$ : $m\times n$ [[3 Reference/Def-matrix\|matrix]]
- $U$ : [[3 Reference/def-subspace_202509240725\|Subspace]] of $R^n$
- $V$ : Subspace of $R^m$

If $U=\operatorname{span[R(A)]}$ then we call $R(A)$ **row space** of $A$

If $V=\operatorname{span}[C(A)]$ then we call $C(A)$ **column space** of $A$

If $N(A)$ : [[3 Reference/def-solution-space_202510061127\|Solution space]] of $A\mathbf{x}=\mathbf{0}$ (which is subspace of $R^n$) then we call $N(A)$ **null space** of $A$

## Interpretation

By definition of [[3 Reference/def-span_202509240805\|span]], any [[3 Reference/def-linear-combination_202510020342\|linear combination]] of columns of $A$ is in the column space of $A$. For example, if $\{ \mathbf{a}_{1},\mathbf{a}_{2},\mathbf{a}_{3} \}$ [[3 Reference/def-row-and-column-vector_202509240741\|column vectors]] of $A$, then $\mathbf{a}_{1}+3\mathbf{a}_{2}-4\mathbf{a}_{3}\in C(A)$.

ANY linear combination of columns of $A$, is in the column space of $A$.

And ANY linear combination of rows of $A$, is in the row space of $A$.

## Finding basis of column/row space

Let $A$ : $m\times n$ matrix

To find basis of $C(A)$:
1. Obtain [[3 Reference/Def-reduced-row-echelon-form-(rref)\|RREF]] of $A$
2. Find pivot column of $A$

To find basis of $R(A)$:
1. Obtain [[3 Reference/Def-reduced-row-echelon-form-(rref)\|RREF]] of $A^T$
2. Find pivot column of $A^T$

These pivot columns obtained from $A$ or $A^T$ form the basis for $C(A)$ and $R(A)$ respectively.

## Example: Checking if a vector is in column space

Let
$$
A=\begin{bmatrix}
2 & 1 & 0 & 5 & 2 \\
0 & -2 & 0 & -2 & 0 \\
1 & 2 & 2 & 4 & 0 \\
0 & -4 & -2 & -4 & 1
\end{bmatrix}
$$

Then,
$$
C(A) = \operatorname{span}\left\{
\begin{bmatrix} 2 \\ 0 \\ 1 \\ 0 \end{bmatrix},
\begin{bmatrix} 1 \\ -2 \\ 2 \\ -4 \end{bmatrix},
\begin{bmatrix} 0 \\ 0 \\ 2 \\ -2 \end{bmatrix},
\begin{bmatrix} 5 \\ -2 \\ 4 \\ -4 \end{bmatrix},
\begin{bmatrix} 2 \\ 0 \\ 0 \\ 1 \end{bmatrix}
\right\}
$$

Suppose we have $\mathbf{v}=\begin{bmatrix}2 & -1 & 3 & -4\end{bmatrix}^T$.

To check if $\mathbf{v}\in C(A)$, we have to check if there exists a [[3 Reference/Def-solution-of-linear-system\|solution]] $\mathbf{x}$ such that the [[3 Reference/def-linear-combination_202510020342\|linear combination]] $A\mathbf{x}=\mathbf{v}$ holds true.

> [!note]
> Basically, we're trying to see if $\mathbf{v}$ is in the [[3 Reference/def-span_202509240805\|span]] of column vectors of $A$. Check the definitions.

So,
$$
\begin{align}
A\mathbf{x} & = \mathbf{v} \\
\begin{bmatrix}
2 & 1 & 0 & 5 & 2 \\
0 & -2 & 0 & -2 & 0 \\
1 & 2 & 2 & 4 & 0 \\
0 & -4 & -2 & -4 & 1
\end{bmatrix}
\begin{bmatrix} x_{1} \\ x_{2} \\ x_{3} \\ x_{4} \\ x_{5} \end{bmatrix}
 & = \begin{bmatrix} 2 \\ -1 \\ 3 \\ -4 \end{bmatrix}
\end{align}
$$

Using [[3 Reference/theorem-gaussian-elimination\|Gaussian Elimination]], we end up with
$$
\begin{bmatrix}
1 & \frac{1}{2} & 0 & \frac{5}{2} & 1 \\
0 & 1 & 0 & 1 & 0 \\
0 & 0 & 1 & 0 & -\frac{1}{2} \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}  \\
x_{4} \\
x_{5}
\end{bmatrix}
= 
\begin{bmatrix}
1 \\
\frac{1}{2} \\
\frac{5}{8} \\
-\frac{6}{8}
\end{bmatrix}
$$

On the fourth row of $A$, we found that $0=-\frac{6}{8}$, which is a contradiction.

Thus, $A\mathbf{x}\neq\mathbf{v}$. Consequently, $\mathbf{v}$ is not in the column space of $A$.

## Example: Finding basis of column/row space

Let
$$
A = \begin{bmatrix}
1 & 2 & 3 \\
2 & 4 & 5 \\
1 & 2 & 2
\end{bmatrix}
$$

The RREF of $A$ and $A^T$ is:
$$
\begin{align}
\operatorname{RREF}(A) & = 
\begin{bmatrix}
\colorbox{green}1 & 2 & 0 \\
0 & 0 & \colorbox{green}1 \\
0 & 0 & 0
\end{bmatrix} \\
\operatorname{RREF}(A^T) & = 
\begin{bmatrix}
\colorbox{green}1 & 0 & -1 \\
0 & \colorbox{green}1 & 1 \\
0 & 0 & 0
\end{bmatrix}
\end{align}
$$

According to [[3 Reference/def-row-space,-column-space,-null-space_202510061124#Finding basis of column/row space]], 
- $C(A)=\operatorname{span}\{ [1,2,1]^T,[3,5,2]^T \}$
- $R(A)=\operatorname{span}\{ [1,2,3],[2,4,5] \}$

## Example: Finding null space

i.e., finding the solution space of $A^T$:

$$
A^T = \begin{bmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 3 & 5 & 2 \end{bmatrix}
$$

Row reduce $A^T$ to RREF:

$$
\begin{bmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 3 & 5 & 2 \end{bmatrix} \xrightarrow{R_2 - 2R_1} \begin{bmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ 3 & 5 & 2 \end{bmatrix} \xrightarrow{R_3 - 3R_1} \begin{bmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ 0 & -1 & -1 \end{bmatrix}
$$

$$
\xrightarrow{R_2 \leftrightarrow R_3} \begin{bmatrix} 1 & 2 & 1 \\ 0 & -1 & -1 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{-R_2} \begin{bmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{R_1 - 2R_2} \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{bmatrix}
$$

Columns 1 and 2 have pivots (basic variables x₁, x₂). Column 3 has no pivot (free variable x₃).

Set x₃ = 1:

- x₁ - 1 = 0 → x₁ = 1
- x₂ + 1 = 0 → x₂ = -1

Solution space: 
$$
\text{null}(A^T) = \text{span}\left\{\begin{bmatrix} 1 \\ -1 \\ 1 \end{bmatrix}\right\}
$$
