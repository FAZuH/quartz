---
publish: true
aliases:
  - Kronecker Product
created: 2026-03-25T15:22:40.617+07:00
modified: 2026-03-25T15:22:40.617+07:00
published: 2026-03-25T15:22:40.617+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-11-05 08:22
status: in progress
parent:
  - "[[matrices]]"
---


## Definition

**Kronecker multiplication**, denoted by $\otimes$, is defined for any two [[3 Reference/Def-matrix\|matrices]] $A_{n\times m}$ and $B_{p\times q}$ as
$$
A\otimes B = \begin{bmatrix}
a_{11}B & \dots & a_{1m}B \\
\vdots & \ddots & \vdots \\
a_{n1}B & \dots & a_{nm}B
\end{bmatrix}
$$

Kronecker matrix multiplication is a mapping
$$
R^{n\times m}\times R^{p\times q}\to R^{np\times mq}
$$

## Properties

- $|A\otimes B|=|A|^m|B|^n$
- $(aA)\otimes(bB)=ab(A\otimes B)=(abA)\otimes B=A\otimes(abB)$ : Scalar distributive & commutative
- $(A+B)\otimes(C)=A\otimes C+B\otimes C$ : Distributive
- $(A\otimes B)^T=A^T\otimes B^T$
- $(A\otimes B)(C\otimes D)=AC\otimes BD$
- If $A,B$ square matrices, then $\operatorname{tr(A\otimes B)}=\operatorname{tr}(A)\operatorname{tr}(B)$