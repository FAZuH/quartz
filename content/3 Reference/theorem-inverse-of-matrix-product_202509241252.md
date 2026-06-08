---
publish: true
aliases:
  - Inverse of Matrix Product
created: 2026-04-09T23:07:39.671+07:00
modified: 2026-04-09T23:07:39.672+07:00
published: 2026-04-09T23:07:39.672+07:00
tags:
  - 
creation-time: 2025-09-24 12:52
status: complete
parent:
  - "[[linear-algebra|linear algebra]]"
  - "[[matrices]]"
---

## Theorem

Let $A,B$ : [[def-inverse-matrix_202509241225|Invertible matrices]] of the same size

Then $AB$ is invertible and

$$
(AB)^{-1}=B^{-1}A^{-1}
$$

## Remark

This theorem can be extended to:

> [!theorem]
> A product of any number of invertible matrices is invertible, and the inverse of the product is the product of the inverses in the reverse order.

## Proof

Let $A,B$ : Invertible matrices of the same size

Then

$$
\begin{align}
(AB)(B^{-1}A^{-1}) & = A(BB^{-1})A^{-1} \\
 & = AIA^{-1} \\
 & = AA^{-1} \\
 & = I
\end{align}
$$

and

$$
\begin{align}
(B^{-1}A^{-1})(AB) & = B^{-1}(A^{-1}A)B \\
 & = B^{-1}IB \\
 & = B^{-1}B \\
 & = I
\end{align}
$$

By definition of inverse matrix, if $CD=DC=I$, then $C^{-1}=D$

Since we have that $(AB)(B^{-1}A^{-1}) = (B^{-1}A^{-1})(AB) = I$, we conclude that $(AB)^{-1}=B^{-1}A^{-1}$
