---
publish: true
aliases:
  - Jacobian Matrix
created: 2025-12-10T14:42:16.451+07:00
modified: 2025-12-10T14:42:24.705+07:00
published: 2025-12-10T14:42:24.705+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-10 14:42
status: baby
parent:
  - "[[matrices]]"
---


## Definition

Let $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$ be a vector function with components $f_1, f_2, \ldots, f_m$.

The **Jacobian matrix** of $\mathbf{f}$ with respect to $\mathbf{x} = \begin{bmatrix} x_1 & \cdots & x_n \end{bmatrix}^T$ is:

$$
J_{\mathbf{f}}(\mathbf{x}) = \frac{\partial \mathbf{f}}{\partial \mathbf{x}^T} = \begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}
$$

This is an $m \times n$ matrix where the $i$-th row is $\nabla f_i^T$.

## Example

Let $\mathbf{f}: \mathbb{R}^2 \to \mathbb{R}^3$ be:

$$
\mathbf{f}\left(\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}\right) = \begin{bmatrix} x_1^2 + x_2 \\ 2x_1x_2 \\ x_2^2 \end{bmatrix}
$$

$$
\begin{align}
J_{\mathbf{f}} &= \begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \\
\frac{\partial f_3}{\partial x_1} & \frac{\partial f_3}{\partial x_2}
\end{bmatrix} \\
&= \begin{bmatrix}
2x_1 & 1 \\
2x_2 & 2x_1 \\
0 & 2x_2
\end{bmatrix}
\end{align}
$$

At $\mathbf{x} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$:

$$
J_{\mathbf{f}}\left(\begin{bmatrix} 1 \\ 2 \end{bmatrix}\right) = \begin{bmatrix}
2 & 1 \\
4 & 2 \\
0 & 4
\end{bmatrix}
$$
