---
publish: true
aliases:
  - Matrix Differentiation Properties
created: 2026-03-25T15:22:40.617+07:00
modified: 2026-03-25T15:22:40.617+07:00
published: 2026-03-25T15:22:40.617+07:00
tags:
  - 
creation-time: 2025-12-10 14:42
status: in progress
parent:
  - "[[matrices]]"
---

## Theorem

Let $\mathbf{x} \in \mathbb{R}^n$, $A$ be a constant matrix, and $f, g$ be differentiable functions.

### Basic Rules

**Linearity:**
$$
\frac{\partial}{\partial \mathbf{x}}(af + bg) = a\frac{\partial f}{\partial \mathbf{x}} + b\frac{\partial g}{\partial \mathbf{x}}
$$

**Product Rule (scalar):**
$$
\frac{\partial}{\partial \mathbf{x}}(fg) = f\frac{\partial g}{\partial \mathbf{x}} + g\frac{\partial f}{\partial \mathbf{x}}
$$

### Linear Forms

$$
\frac{\partial}{\partial \mathbf{x}}(\mathbf{a}^T\mathbf{x}) = \mathbf{a}
$$

$$
\frac{\partial}{\partial \mathbf{x}}(\mathbf{x}^T A) = A
$$

### Quadratic Forms

$$
\frac{\partial}{\partial \mathbf{x}}(\mathbf{x}^T\mathbf{x}) = 2\mathbf{x}
$$

$$
\frac{\partial}{\partial \mathbf{x}}(\mathbf{x}^T A \mathbf{x}) = (A + A^T)\mathbf{x}
$$

If $A$ is symmetric:
$$
\frac{\partial}{\partial \mathbf{x}}(\mathbf{x}^T A \mathbf{x}) = 2A\mathbf{x}
$$

### Chain Rule

For $\mathbf{f}(\mathbf{g}(\mathbf{x}))$:
$$
\frac{\partial \mathbf{f}}{\partial \mathbf{x}} = \frac{\partial \mathbf{f}}{\partial \mathbf{g}} \frac{\partial \mathbf{g}}{\partial \mathbf{x}}
$$

### Examples

**Example 1:** Linear form

Let $\mathbf{a} = \begin{bmatrix} 2 \ 3 \end{bmatrix}$ and $f(\mathbf{x}) = \mathbf{a}^T\mathbf{x} = 2x\_1 + 3x\_2$

$$
\frac{\partial f}{\partial \mathbf{x}} = \mathbf{a} = \begin{bmatrix} 2 \ 3 \end{bmatrix}
$$

**Example 2:** Quadratic form

Let $A = \begin{bmatrix} 2 & 1 \ 1 & 3 \end{bmatrix}$ and $f(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} = 2x\_1^2 + 2x\_1x\_2 + 3x\_2^2$

Since $A$ is symmetric:
$$
\frac{\partial f}{\partial \mathbf{x}} = 2A\mathbf{x} = 2\begin{bmatrix} 2 & 1 \ 1 & 3 \end{bmatrix}\begin{bmatrix} x\_1 \ x\_2 \end{bmatrix} = \begin{bmatrix} 4x\_1 + 2x\_2 \ 2x\_1 + 6x\_2 \end{bmatrix}
$$

**Example 3:** Chain rule

Let $\mathbf{g}(\mathbf{x}) = A\mathbf{x}$ where $A = \begin{bmatrix} 1 & 2 \ 3 & 4 \end{bmatrix}$, and $f(\mathbf{g}) = \mathbf{g}^T\mathbf{g}$

$$
\begin{align}
\frac{\partial f}{\partial \mathbf{x}} &= \frac{\partial f}{\partial \mathbf{g}} \frac{\partial \mathbf{g}}{\partial \mathbf{x}} \\
&= (2\mathbf{g}^T)(A) \\
&= 2(A\mathbf{x})^T A \\
&= 2\mathbf{x}^T A^T A
\end{align}
$$

Evaluating at $\mathbf{x} = \begin{bmatrix} 1 \ 1 \end{bmatrix}$:

$$
\begin{align}
A^T A &= \begin{bmatrix} 1 & 3 \ 2 & 4 \end{bmatrix}\begin{bmatrix} 1 & 2 \ 3 & 4 \end{bmatrix} = \begin{bmatrix} 10 & 14 \ 14 & 20 \end{bmatrix} \\
\frac{\partial f}{\partial \mathbf{x}}\bigg|\_{\mathbf{x}=\begin{bmatrix} 1 \ 1 \end{bmatrix}} &= 2\begin{bmatrix} 1 & 1 \end{bmatrix}\begin{bmatrix} 10 & 14 \ 14 & 20 \end{bmatrix} = 2\begin{bmatrix} 24 & 34 \end{bmatrix}
\end{align}
$$

As a column vector: $\begin{bmatrix} 48 \ 68 \end{bmatrix}$
