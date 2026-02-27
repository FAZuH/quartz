---
publish: true
aliases:
  - Hessian Matrix
created: 2026-02-22T19:23:58.389+07:00
modified: 2026-02-22T19:23:58.389+07:00
published: 2026-02-22T19:23:58.389+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-10 14:42
status: baby
parent:
  - "[[matrices]]"
---


## Definition

Let $f: \mathbb{R}^n \to \mathbb{R}$ be a twice-differentiable scalar function.

The **Hessian matrix** of $f$ is the $n \times n$ matrix of second partial derivatives:

$$
H_f(\mathbf{x}) = \nabla^2 f(\mathbf{x}) = \begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
\frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
\end{bmatrix}
$$

If $f$ is twice continuously differentiable, the Hessian is [[3 Reference/def-symmetric-matrix_202509241413\|symmetric]] (by Schwarz's theorem).

## Example

Let $f(x_1, x_2) = x_1^2 + 3x_1x_2 + 2x_2^2$

First, compute the gradient:
$$
\nabla f = \begin{bmatrix} 2x_1 + 3x_2 \\ 3x_1 + 4x_2 \end{bmatrix}
$$

Then compute second derivatives:

$$
\begin{align}
H_f &= \begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} \\
\frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2}
\end{bmatrix} \\
&= \begin{bmatrix}
2 & 3 \\
3 & 4
\end{bmatrix}
\end{align}
$$

Note that the Hessian is constant (independent of $\mathbf{x}$) and symmetric.

The Hessian's eigenvalues determine whether $f$ has a local minimum, maximum, or saddle point:
- If $H_f$ is [[Def-positive-definite-matrix\|positive definite]]: local minimum
- If $H_f$ is negative definite: local maximum
- If $H_f$ is indefinite: saddle point
