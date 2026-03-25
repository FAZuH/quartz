---
publish: true
aliases:
  - Gradient Operator
created: 2026-03-25T15:22:40.626+07:00
modified: 2026-03-25T15:22:40.626+07:00
published: 2026-03-25T15:22:40.626+07:00
tags:
  - 
creation-time: 2025-12-10 14:41
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let $f: \mathbb{R}^n \to \mathbb{R}$ be a scalar function of vector $\mathbf{x} = \begin{bmatrix} x\_1 & x\_2 & \cdots & x\_n \end{bmatrix}^T$.

The **gradient** of $f$ with respect to $\mathbf{x}$ is the column vector of partial derivatives:

$$
\nabla f(\mathbf{x}) = \frac{\partial f}{\partial \mathbf{x}} = \begin{bmatrix} \frac{\partial f}{\partial x\_1} \ \frac{\partial f}{\partial x\_2} \ \vdots \ \frac{\partial f}{\partial x\_n} \end{bmatrix}
$$

The gradient points in the direction of steepest ascent of $f$.

## Example

Let $f(x\_1, x\_2) = x\_1^2 + 3x\_1x\_2 + x\_2^2$

$$
\begin{align}
\nabla f &= \begin{bmatrix} \frac{\partial f}{\partial x\_1} \ \frac{\partial f}{\partial x\_2} \end{bmatrix} \\
&= \begin{bmatrix} 2x\_1 + 3x\_2 \ 3x\_1 + 2x\_2 \end{bmatrix}
\end{align}
$$

At $\mathbf{x} = \begin{bmatrix} 1 \ 2 \end{bmatrix}$:

$$
\nabla f\left(\begin{bmatrix} 1 \ 2 \end{bmatrix}\right) = \begin{bmatrix} 2(1) + 3(2) \ 3(1) + 2(2) \end{bmatrix} = \begin{bmatrix} 8 \ 7 \end{bmatrix}
$$
