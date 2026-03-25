---
publish: true
aliases:
  - Vector Function
created: 2026-03-25T15:22:40.608+07:00
modified: 2026-03-25T15:22:40.608+07:00
published: 2026-03-25T15:22:40.608+07:00
tags:
  - 
creation-time: 2025-12-10 14:41
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$ be a function that maps a vector $\mathbf{x} \in \mathbb{R}^n$ to a vector $\mathbf{y} \in \mathbb{R}^m$.

Then $\mathbf{f}$ is called a **vector function** and can be written as:

$$
\mathbf{f}(\mathbf{x}) = \begin{bmatrix} f\_1(\mathbf{x}) \ f\_2(\mathbf{x}) \ \vdots \ f\_m(\mathbf{x}) \end{bmatrix}
$$

where each $f\_i: \mathbb{R}^n \to \mathbb{R}$ is a scalar function.

## Example

Let $\mathbf{f}: \mathbb{R}^2 \to \mathbb{R}^3$ be defined as:

$$
\mathbf{f}\left(\begin{bmatrix} x\_1 \ x\_2 \end{bmatrix}\right) = \begin{bmatrix} x\_1^2 + x\_2 \ 2x\_1x\_2 \ x\_2^2 - x\_1 \end{bmatrix}
$$

Here, $f\_1(x\_1, x\_2) = x\_1^2 + x\_2$, $f\_2(x\_1, x\_2) = 2x\_1x\_2$, $f\_3(x\_1, x\_2) = x\_2^2 - x\_1$.

For $\mathbf{x} = \begin{bmatrix} 1 \ 2 \end{bmatrix}$:

$$
\mathbf{f}\left(\begin{bmatrix} 1 \ 2 \end{bmatrix}\right) = \begin{bmatrix} 1 + 2 \ 2(1)(2) \ 4 - 1 \end{bmatrix} = \begin{bmatrix} 3 \ 4 \ 3 \end{bmatrix}
$$
