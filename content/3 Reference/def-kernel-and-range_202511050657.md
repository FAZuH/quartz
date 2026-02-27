---
publish: true
aliases:
  - Kernel and Range
  - Kernel
  - Range
created: 2026-02-22T19:23:58.394+07:00
modified: 2026-02-22T19:23:58.394+07:00
published: 2026-02-22T19:23:58.394+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-11-05 06:57
status: baby
parent:
  - "[[matrices]]"
---


## Definition

Let $T_{A} : R^n\to R^m$ : [[3 Reference/def-matrix-transformation_202511050658\|Matrix transformation]]

If $\operatorname{ker}(T_{A})$ is a set of all vectors in $R^n$ that $T_{A}$ maps to $\{ \mathbf{0} \}$

Then 
- We call $\operatorname{ker}(T_{A})$ the **kernel** of $T_{A}$
- $\forall \mathbf{x}\in(\operatorname{ker}(T_{A})\subseteq R^n) : \mathbf{x}\xrightarrow{T_{A}}\{ \mathbf{0} \}$

If $R(T_{A})$ is the set of all vectors in $R^m$ that are images under $\mathbf{x}\xrightarrow{T_{A}}\{ \mathbf{0} \}$ of at least one vector in $R^n$

Then we call $R^n$ the **range** of $T_{A}$


> [!note]
> In brief:
> $$
> \begin{align}
> \operatorname{ker}(T_{A}) & = \text{null space of }A \\
> R(T_{A}) & = \text{column space of }A
> \end{align}
> $$