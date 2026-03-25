---
publish: true
aliases:
  - Jacobian Matrix
created: 2026-03-25T15:22:40.613+07:00
modified: 2026-03-25T15:22:40.613+07:00
published: 2026-03-25T15:22:40.613+07:00
tags:
  - 
creation-time: 2025-12-10 14:42
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$ be a vector function with components $f\_1, f\_2, \ldots, f\_m$.

The **Jacobian matrix** of $\mathbf{f}$ with respect to $\mathbf{x} = \begin{bmatrix} x\_1 & \cdots & x\_n \end{bmatrix}^T$ is:

$$
J\_{\mathbf{f}}(\mathbf{x}) = \frac{\partial \mathbf{f}}{\partial \mathbf{x}^T} = \begin{bmatrix}
\frac{\partial f\_1}{\partial x\_1} & \frac{\partial f\_1}{\partial x\_2} & \cdots & \frac{\partial f\_1}{\partial x\_n} \\
\frac{\partial f\_2}{\partial x\_1} & \frac{\partial f\_2}{\partial x\_2} & \cdots & \frac{\partial f\_2}{\partial x\_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f\_m}{\partial x\_1} & \frac{\partial f\_m}{\partial x\_2} & \cdots & \frac{\partial f\_m}{\partial x\_n}
\end{bmatrix}
$$

This is an $m \times n$ matrix where the $i$-th row is $\nabla f\_i^T$.

## Example

Let $\mathbf{f}: \mathbb{R}^2 \to \mathbb{R}^3$ be:

$$
\mathbf{f}\left(\begin{bmatrix} x\_1 \ x\_2 \end{bmatrix}\right) = \begin{bmatrix} x\_1^2 + x\_2 \ 2x\_1x\_2 \ x\_2^2 \end{bmatrix}
$$

$$
\begin{align}
J\_{\mathbf{f}} &= \begin{bmatrix}
\frac{\partial f\_1}{\partial x\_1} & \frac{\partial f\_1}{\partial x\_2} \\
\frac{\partial f\_2}{\partial x\_1} & \frac{\partial f\_2}{\partial x\_2} \\
\frac{\partial f\_3}{\partial x\_1} & \frac{\partial f\_3}{\partial x\_2}
\end{bmatrix} \\
&= \begin{bmatrix}
2x\_1 & 1 \\
2x\_2 & 2x\_1 \\
0 & 2x\_2
\end{bmatrix}
\end{align}
$$

At $\mathbf{x} = \begin{bmatrix} 1 \ 2 \end{bmatrix}$:

$$
J\_{\mathbf{f}}\left(\begin{bmatrix} 1 \ 2 \end{bmatrix}\right) = \begin{bmatrix}
2 & 1 \\
4 & 2 \\
0 & 4
\end{bmatrix}
$$
