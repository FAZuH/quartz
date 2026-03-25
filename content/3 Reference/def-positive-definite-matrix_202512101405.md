---
publish: true
aliases:
  - Positive Definite Matrix
  - Positive Semidefinite Matrix
  - Negative Definite Matrix
  - Negative Semidefinite Matrix
  - Indefinite Matrix
  - Definite Matrix
created: 2026-03-25T15:22:40.615+07:00
modified: 2026-03-25T15:22:40.615+07:00
published: 2026-03-25T15:22:40.615+07:00
tags:
  - 
creation-time: 2025-12-10 14:05
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let $A$ : $n \times n$ [[Def-matrix|symmetric matrix]]

Then $A$ is **positive definite** if for all nonzero vectors $\mathbf{x} \in \mathbb{R}^n$:

$$\mathbf{x}^T A \mathbf{x} > 0$$

Similarly:

- $A$ is **positive semidefinite** if $\mathbf{x}^T A \mathbf{x} \geq 0$ for all $\mathbf{x} \in \mathbb{R}^n$
- $A$ is **negative definite** if $\mathbf{x}^T A \mathbf{x} < 0$ for all nonzero $\mathbf{x} \in \mathbb{R}^n$
- $A$ is **negative semidefinite** if $\mathbf{x}^T A \mathbf{x} \leq 0$ for all $\mathbf{x} \in \mathbb{R}^n$
- $A$ is **indefinite** if $\mathbf{x}^T A \mathbf{x}$ takes both positive and negative values

## Theorems

Let $A$ : $n \times n$ symmetric matrix

### Eigenvalue Characterization Theorem

$A$ is positive definite if and only if all eigenvalues of $A$ are positive.

Similarly:

- $A$ is positive semidefinite if and only if all eigenvalues are nonnegative
- $A$ is negative definite if and only if all eigenvalues are negative
- $A$ is negative semidefinite if and only if all eigenvalues are nonpositive

| Definiteness  | All eigenvalues $\lambda\_i$ satisfy           |
| ------------- | --------------------------------------------- |
| Positive      | $\lambda\_i > 0$                               |
| Positive semi | $\lambda\_i \geq 0$                            |
| Negative      | $\lambda\_i < 0$                               |
| Negative semi | $\lambda\_i \leq 0$                            |
| Indefinite    | Some $\lambda\_i > 0$ and some $\lambda\_j < 0$ |

### Principal Minors Theorem (Sylvester's Criterion)

$A$ is positive definite if and only if all leading principal minors are positive.

The $k$-th leading principal minor is:
$$\det\begin{bmatrix} a\_{11} & \cdots & a\_{1k} \ \vdots & \ddots & \vdots \ a\_{k1} & \cdots & a\_{kk} \end{bmatrix}$$

for $k = 1, 2, \ldots, n$.

### Cholesky Decomposition Theorem

$A$ is positive definite if and only if there exists a unique lower triangular matrix $L$ with positive diagonal entries such that:

$$A = LL^T$$

This is called the **Cholesky decomposition** of $A$.

### Invertibility Theorem

If $A$ is positive definite, then $A$ is invertible and $A^{-1}$ is also positive definite.

### Quadratic Form Theorem

For any $n \times n$ matrix $B$, $B^TB$ is positive semidefinite.

If $B$ has full column rank, then $B^TB$ is positive definite.

> [!note]
> This is why $A^TA$ in [[theorem-singular-value-decomposition_202511050521|Singular Value Decomposition]] always has nonnegative eigenvalues.

## Examples

### Verifying positive definiteness using the definition

Let $A = \begin{bmatrix} 2 & 1 \ 1 & 2 \end{bmatrix}$

For any nonzero $\mathbf{x} = \begin{bmatrix} x\_1 \ x\_2 \end{bmatrix}$:

$$
\begin{align}
\mathbf{x}^T A \mathbf{x} &= \begin{bmatrix} x\_1 & x\_2 \end{bmatrix}\begin{bmatrix} 2 & 1 \ 1 & 2 \end{bmatrix}\begin{bmatrix} x\_1 \ x\_2 \end{bmatrix} \\
&= \begin{bmatrix} x\_1 & x\_2 \end{bmatrix}\begin{bmatrix} 2x\_1 + x\_2 \ x\_1 + 2x\_2 \end{bmatrix} \\
&= x\_1(2x\_1 + x\_2) + x\_2(x\_1 + 2x\_2) \\
&= 2x\_1^2 + x\_1x\_2 + x\_1x\_2 + 2x\_2^2 \\
&= 2x\_1^2 + 2x\_1x\_2 + 2x\_2^2 \\
&= 2(x\_1^2 + x\_1x\_2 + x\_2^2) \\
&= 2\left\[\left(x\_1 + \frac{x\_2}{2}\right)^2 + \frac{3x\_2^2}{4}\right] > 0
\end{align}
$$

Since $\mathbf{x}^T A \mathbf{x} > 0$ for all nonzero $\mathbf{x}$, $A$ is positive definite.

### Using eigenvalues

Let $A = \begin{bmatrix} 4 & 2 \ 2 & 3 \end{bmatrix}$

Find eigenvalues:

$$
\begin{align}
\det(A - \lambda I) &= \det\begin{bmatrix} 4-\lambda & 2 \ 2 & 3-\lambda \end{bmatrix} = 0 \\
(4-\lambda)(3-\lambda) - 4 &= 0 \\
12 - 7\lambda + \lambda^2 - 4 &= 0 \\
\lambda^2 - 7\lambda + 8 &= 0 \\
\lambda &= \frac{7 \pm \sqrt{49-32}}{2} = \frac{7 \pm \sqrt{17}}{2} \ \\

\lambda\_1 &\approx 5.56, \quad \lambda\_2 \approx 1.44
\end{align}
$$

Since both eigenvalues are positive, $A$ is positive definite.

### Using Sylvester's Criterion

Let $A = \begin{bmatrix} 3 & 1 & 0 \ 1 & 2 & 1 \ 0 & 1 & 3 \end{bmatrix}$

Check leading principal minors:

$$
\begin{align}
M\_1 &= \det\[3] = 3 > 0 \\
M\_2 &= \det\begin{bmatrix} 3 & 1 \ 1 & 2 \end{bmatrix} = 6 - 1 = 5 > 0 \\
M\_3 &= \det\begin{bmatrix} 3 & 1 & 0 \ 1 & 2 & 1 \ 0 & 1 & 3 \end{bmatrix} = 3(6-1) - 1(3-0) + 0 = 15 - 3 = 12 > 0
\end{align}
$$

Since all leading principal minors are positive, $A$ is positive definite.

### Indefinite matrix

Let $A = \begin{bmatrix} 1 & 0 \ 0 & -1 \end{bmatrix}$

The eigenvalues are $\lambda\_1 = 1$ and $\lambda\_2 = -1$.

Since eigenvalues have different signs, $A$ is indefinite.

We can verify: for $\mathbf{x} = \begin{bmatrix} 1 \ 0 \end{bmatrix}$:
$$\mathbf{x}^T A \mathbf{x} = 1 > 0$$

But for $\mathbf{x} = \begin{bmatrix} 0 \ 1 \end{bmatrix}$:
$$\mathbf{x}^T A \mathbf{x} = -1 < 0$$

### Positive semidefinite (not definite)

Let $A = \begin{bmatrix} 1 & 1 \ 1 & 1 \end{bmatrix}$

Find eigenvalues:

$$
\begin{align}
\det(A - \lambda I) &= (1-\lambda)^2 - 1 = 0 \\
\lambda^2 - 2\lambda &= 0 \\
\lambda(\lambda - 2) &= 0 \ \\

\lambda\_1 &= 2, \quad \lambda\_2 = 0
\end{align}
$$

Since one eigenvalue is zero and the other is positive, $A$ is positive semidefinite but not positive definite.
