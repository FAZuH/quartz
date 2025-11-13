---
{"publish":true,"aliases":["Gradient Operator"],"created":"2025-12-10T14:41:58.758+07:00","modified":"2025-12-10T14:42:07.374+07:00","published":"2025-12-10T14:42:07.374+07:00","tags":[null],"cssclasses":"","creation-time":"2025-12-10 14:41","status":"baby","parent":["[[matrices]]"]}
---


## Definition

Let $f: \mathbb{R}^n \to \mathbb{R}$ be a scalar function of vector $\mathbf{x} = \begin{bmatrix} x_1 & x_2 & \cdots & x_n \end{bmatrix}^T$.

The **gradient** of $f$ with respect to $\mathbf{x}$ is the column vector of partial derivatives:

$$
\nabla f(\mathbf{x}) = \frac{\partial f}{\partial \mathbf{x}} = \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \\ \vdots \\ \frac{\partial f}{\partial x_n} \end{bmatrix}
$$

The gradient points in the direction of steepest ascent of $f$.

## Example

Let $f(x_1, x_2) = x_1^2 + 3x_1x_2 + x_2^2$

$$
\begin{align}
\nabla f &= \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \end{bmatrix} \\
&= \begin{bmatrix} 2x_1 + 3x_2 \\ 3x_1 + 2x_2 \end{bmatrix}
\end{align}
$$

At $\mathbf{x} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$:

$$
\nabla f\left(\begin{bmatrix} 1 \\ 2 \end{bmatrix}\right) = \begin{bmatrix} 2(1) + 3(2) \\ 3(1) + 2(2) \end{bmatrix} = \begin{bmatrix} 8 \\ 7 \end{bmatrix}
$$
