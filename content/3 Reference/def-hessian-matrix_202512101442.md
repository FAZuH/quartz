---
publish: true
aliases:
  - Hessian Matrix
created: 2026-03-25T15:22:40.620+07:00
modified: 2026-03-25T15:22:40.620+07:00
published: 2026-03-25T15:22:40.620+07:00
tags:
  - 
creation-time: 2025-12-10 14:42
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let $f: \mathbb{R}^n \to \mathbb{R}$ be a twice-differentiable scalar function.

The **Hessian matrix** of $f$ is the $n \times n$ matrix of second partial derivatives:

$$
H\_f(\mathbf{x}) = \nabla^2 f(\mathbf{x}) = \begin{bmatrix}
\frac{\partial^2 f}{\partial x\_1^2} & \frac{\partial^2 f}{\partial x\_1 \partial x\_2} & \cdots & \frac{\partial^2 f}{\partial x\_1 \partial x\_n} \\
\frac{\partial^2 f}{\partial x\_2 \partial x\_1} & \frac{\partial^2 f}{\partial x\_2^2} & \cdots & \frac{\partial^2 f}{\partial x\_2 \partial x\_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^2 f}{\partial x\_n \partial x\_1} & \frac{\partial^2 f}{\partial x\_n \partial x\_2} & \cdots & \frac{\partial^2 f}{\partial x\_n^2}
\end{bmatrix}
$$

If $f$ is twice continuously differentiable, the Hessian is [[def-symmetric-matrix_202509241413|symmetric]] (by Schwarz's theorem).

## Example

Let $f(x\_1, x\_2) = x\_1^2 + 3x\_1x\_2 + 2x\_2^2$

First, compute the gradient:
$$
\nabla f = \begin{bmatrix} 2x\_1 + 3x\_2 \ 3x\_1 + 4x\_2 \end{bmatrix}
$$

Then compute second derivatives:

$$
\begin{align}
H\_f &= \begin{bmatrix}
\frac{\partial^2 f}{\partial x\_1^2} & \frac{\partial^2 f}{\partial x\_1 \partial x\_2} \\
\frac{\partial^2 f}{\partial x\_2 \partial x\_1} & \frac{\partial^2 f}{\partial x\_2^2}
\end{bmatrix} \\
&= \begin{bmatrix}
2 & 3 \\
3 & 4
\end{bmatrix}
\end{align}
$$

Note that the Hessian is constant (independent of $\mathbf{x}$) and symmetric.

The Hessian's eigenvalues determine whether $f$ has a local minimum, maximum, or saddle point:

- If $H\_f$ is [[Def-positive-definite-matrix|positive definite]]: local minimum
- If $H\_f$ is negative definite: local maximum
- If $H\_f$ is indefinite: saddle point
