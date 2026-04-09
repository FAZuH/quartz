---
publish: true
aliases:
  - Eigenvalue
  - Eigenvector
created: 2026-04-09T23:07:39.135+07:00
modified: 2026-04-09T23:07:39.136+07:00
published: 2026-04-09T23:07:39.136+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-11-05 04:58
status: in progress
parent:
  - "[[matrices]]"
---


## Definition

Let 
- $A$ : $n\times n$ [[3 Reference/Def-matrix\|square matrix]]
- $\mathbf{x}$ : nonzero vector in $R^n$[^1] ^c5ad70

If for some scalar $\lambda$
$$
A\mathbf{x}=\lambda \mathbf{x}
$$

Then 
- $\lambda$ is called an **eigenvalue** of $A$
- $\mathbf{x}$ is called an **eigenvector** corresponding to $\lambda$

## Procedure: Finding eigenvalue

Let $A$ be matrix of interest.

Based on [[3 Reference/def-eigenvalue-eigenvector_202511050458#Proof 1]], the procedure is simply to:

1. Solve for $\lambda I$ : $\det(A-\lambda I)=0$[^2]

## Example: Finding eigenvalue

Let

$$
A = \begin{bmatrix} 3 & 1 \\ 1 & 3 \end{bmatrix}
$$

The eigenvalue of $A$ is:
$$
\begin{align}
\det(A - \lambda I) &= \det\begin{bmatrix} 3-\lambda & 1 \\ 1 & 3-\lambda \end{bmatrix} = 0 \\
(3-\lambda)(3-\lambda) - (1)(1) &= 0 \\
9 - 6\lambda + \lambda^2 - 1 &= 0 \\
\lambda^2 - 6\lambda + 8 &= 0 \\
(\lambda - 4)(\lambda - 2) &= 0 \\ \\
\end{align}
$$

The last equation above is true when $\lambda=4$ and $\lambda=2$. Thus, 
$$
\lambda I = \begin{bmatrix}
4 & 0 \\
0 & 2
\end{bmatrix}
$$

> [!note]
> The order of eigenvalues doesn't matter, but in some cases like [[3 Reference/theorem-singular-value-decomposition_202511050521\|Singular Value Decomposition]], the eigenvalues are sorted in descending order in the columns of $\lambda I$.

## Procedure: Finding eigenvector

Let $A$ be matrix of interest.

1. [[3 Reference/def-eigenvalue-eigenvector_202511050458#Procedure Finding eigenvalue\|Find eigenvalue(s)]] of $A$
2. Solve for $\mathbf{x}$ : $(A-\lambda I)\mathbf{x}=0$ for each eigenvalue

## Example: Finding eigenvector

For $\lambda_1 = 4$:

$$
\begin{align}
(A - 4I)\mathbf{x} &= \mathbf{0} \\

\begin{bmatrix} -1 & 1 \\ 1 & -1 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} &= \begin{bmatrix} 0 \\ 0 \end{bmatrix} \\ \\

-x_1 + x_2 &= 0 \\
x_2 &= x_1 \\ \\

\mathbf{v}_1 &= \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\end{align}
$$

> [!note] 
> Since $x_2 = x_1$, we have infinitely many solutions. Then
> $$ \begin{align} \mathbf{x} & = \begin{bmatrix} x_{1} \\ x_{2} \end{bmatrix} \\ & = \begin{bmatrix} x_{1} \\ x_{1} \end{bmatrix} \\ & = x_1\begin{bmatrix} 1 \\ 1 \end{bmatrix} \end{align} $$
>
> Setting $x_1 = 1$ gives the eigenvector $\mathbf{x}=\mathbf{v}_1=\begin{bmatrix}1 \\ 1\end{bmatrix}$. Any other arbitrary $x_{1}$ is also valid.

For $\lambda_2 = 2$:
$$
\begin{align}
(A - 2I)\mathbf{x} &= \mathbf{0} \\

\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} &= \begin{bmatrix} 0 \\ 0 \end{bmatrix} \\ \\

x_1 + x_2 &= 0 \\
x_2 &= -x_1 \\ \\

\mathbf{v}_2 &= \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{align}
$$

## Proof 1

$$
\begin{align}
A\mathbf{x} & = \lambda \mathbf{x} \\
A\mathbf{x}-\lambda \mathbf{x} & = 0 \\
A\mathbf{x}-(\lambda I) \mathbf{x} & = 0 \\
(A-\lambda I)\mathbf{x} & = 0
\end{align}
$$

Notice that this [[3 Reference/Def-linear-system\|system]] *always* has the [[3 Reference/Def-trivial-solution\|trivial solution]] $\mathbf{x}=0$, but $\mathbf{x}$ is by [[3 Reference/def-eigenvalue-eigenvector_202511050458#^c5ad70\|definition]], a nonzero vector.

Based on [[3 Reference/theorem-matrix-equivalency-statements_202510061112#^a\|(a)]] and [[3 Reference/theorem-matrix-equivalency-statements_202510061112#^a\|(g)]] of [[3 Reference/theorem-matrix-equivalency-statements_202510061112\|matrix equivalency statements]], the negation of the biconditional statement states "$\det(B)=0\iff B\mathbf{x}=\mathbf{0}$ has nontrivial solutions".
 
Therefore, for non-trivial solutions for $\mathbf{x}$ to exist, determinant of $(A-\lambda I)$ *must* be $0$, i.e.,
$$
\det(A-\lambda I)=0
$$


[^1]: [[3 Reference/def-vector-space-axioms_202509240715\|Vector Space]]

[^2]: [[3 Reference/def-determinant-of-matrices_202510080503\|Determinant of Matrices]]
