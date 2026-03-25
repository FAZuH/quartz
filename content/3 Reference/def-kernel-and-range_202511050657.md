---
publish: true
aliases:
  - Kernel and Range
  - Kernel
  - Range
created: 2026-03-25T15:22:40.619+07:00
modified: 2026-03-25T15:22:40.619+07:00
published: 2026-03-25T15:22:40.619+07:00
tags:
  - 
creation-time: 2025-11-05 06:57
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let $T\_{A} : R^n\to R^m$ : [[def-matrix-transformation_202511050658|Matrix transformation]]

If $\operatorname{ker}(T\_{A})$ is a set of all vectors in $R^n$ that $T\_{A}$ maps to ${ \mathbf{0} }$

Then

- We call $\operatorname{ker}(T\_{A})$ the **kernel** of $T\_{A}$
- $\forall \mathbf{x}\in(\operatorname{ker}(T\_{A})\subseteq R^n) : \mathbf{x}\xrightarrow{T\_{A}}{ \mathbf{0} }$

If $R(T\_{A})$ is the set of all vectors in $R^m$ that are images under $\mathbf{x}\xrightarrow{T\_{A}}{ \mathbf{0} }$ of at least one vector in $R^n$

Then we call $R^n$ the **range** of $T\_{A}$

> [!note]
> In brief:
> $$
> \begin{align}
> \operatorname{ker}(T\_{A}) & = \text{null space of }A \\
> R(T\_{A}) & = \text{column space of }A
> \end{align}
> $$
