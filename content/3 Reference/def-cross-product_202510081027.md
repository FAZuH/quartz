---
publish: true
aliases:
  - Cross Product
created: 2026-03-25T15:22:40.606+07:00
modified: 2026-03-25T15:22:40.607+07:00
published: 2026-03-25T15:22:40.607+07:00
tags:
  - 
creation-time: 2025-10-08 10:27
status: in progress
parent:
  - "[[Elementary Linear Algebra]]"
---

## Definition

Let

- $\mathbf{u}=(u\_{1},u\_{2},u\_{3})$ vectors in 3-space
- $\mathbf{v}=(v\_{1},v\_{2},v\_{3})$ vectors in 3-space

Then

- We define the **cross product** $u\times v$ as
  $$
  \begin{align}
  u\times v & = (u\_{2}v\_{3}-u\_{3}v\_{2},u\_{3}v\_{1}-u\_{1}v\_{3},u\_{1}v\_{2}-u\_{2}v\_{1}) \\
  & = \left(\begin{vmatrix}
  u\_{2} & u\_{3} \\
  v\_{2} & v\_{3}
  \end{vmatrix},-\begin{vmatrix}
  u\_{1} & u\_{3} \\
  v\_{1} & v\_{3}
  \end{vmatrix},\begin{vmatrix}
  u\_{1} & u\_{2} \\
  v\_{1} & v\_{2}
  \end{vmatrix}\right)
  \end{align}
  $$

## Tip: Memorization

Look at the determinant form
$$
u\times v = \left(\begin{vmatrix}
u\_{2} & u\_{3} \\
v\_{2} & v\_{3}
\end{vmatrix},-\begin{vmatrix}
u\_{1} & u\_{3} \\
v\_{1} & v\_{3}
\end{vmatrix},\begin{vmatrix}
u\_{1} & u\_{2} \\
v\_{1} & v\_{2}
\end{vmatrix}\right)
$$

Imagine
$$
\begin{bmatrix}
u\_{1} & u\_{2} & u\_{3} \\
v\_{1} & v\_{2} & v\_{3}
\end{bmatrix}
$$

- For first $u\times v$ component, just exclude column 1.
- Second component, exclude column 2, but negative
- Third component, exclude column 3
