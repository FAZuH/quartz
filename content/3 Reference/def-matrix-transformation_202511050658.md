---
publish: true
aliases:
  - Matrix Transformation
  - Matrix Operator
created: 2026-02-22T19:23:58.398+07:00
modified: 2026-02-22T19:23:58.398+07:00
published: 2026-02-22T19:23:58.398+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-11-05 06:58
status: baby
parent:
  - "[[matrices]]"
---


## Definition

Let
- $R^n$, $R^m$ : [[3 Reference/def-linear-space_202509170852\|Linear space]]
- $\mathbf{x}\in R^n$, $\mathbf{w}\in R^m$ : Vectors

If
$$
\mathbf{w}=A\mathbf{x}
$$

Then 
- We view the $\mathbf{w}=A\mathbf{x}$ as the **transformation** that maps a vector $\mathbf{x}$ in $R^n$ to a vector $\mathbf{w}$ in $R^m$ by multiplying $\mathbf{x}$ on the left by $A$
- We call this a **matrix transformation** (or **matrix operator** in case where $m=n$)
- We denote it by $T_{A}:R^n\to R^n$
- Sometimes we denote it by $\mathbf{x}\xrightarrow{T_{A}}\mathbf{w}$, which is read "$T_{A}$ maps $\mathbf{x}$ to $\mathbf{w}$"