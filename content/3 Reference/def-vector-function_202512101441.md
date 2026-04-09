---
publish: true
aliases:
  - Vector Function
created: 2026-04-09T23:07:39.352+07:00
modified: 2026-04-09T23:07:39.353+07:00
published: 2026-04-09T23:07:39.353+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-10 14:41
status: in progress
parent:
  - "[[matrices]]"
---


## Definition

Let $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$ be a function that maps a vector $\mathbf{x} \in \mathbb{R}^n$ to a vector $\mathbf{y} \in \mathbb{R}^m$.

Then $\mathbf{f}$ is called a **vector function** and can be written as:

$$
\mathbf{f}(\mathbf{x}) = \begin{bmatrix} f_1(\mathbf{x}) \\ f_2(\mathbf{x}) \\ \vdots \\ f_m(\mathbf{x}) \end{bmatrix}
$$

where each $f_i: \mathbb{R}^n \to \mathbb{R}$ is a scalar function.

## Example

Let $\mathbf{f}: \mathbb{R}^2 \to \mathbb{R}^3$ be defined as:

$$
\mathbf{f}\left(\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}\right) = \begin{bmatrix} x_1^2 + x_2 \\ 2x_1x_2 \\ x_2^2 - x_1 \end{bmatrix}
$$

Here, $f_1(x_1, x_2) = x_1^2 + x_2$, $f_2(x_1, x_2) = 2x_1x_2$, $f_3(x_1, x_2) = x_2^2 - x_1$.

For $\mathbf{x} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$:

$$
\mathbf{f}\left(\begin{bmatrix} 1 \\ 2 \end{bmatrix}\right) = \begin{bmatrix} 1 + 2 \\ 2(1)(2) \\ 4 - 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \\ 3 \end{bmatrix}
$$
