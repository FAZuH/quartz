---
publish: true
aliases:
  - Product of a Matrix with its Transpose is Symmetric
created: 2026-03-25T15:22:40.642+07:00
modified: 2026-03-25T15:22:40.642+07:00
published: 2026-03-25T15:22:40.642+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-24 21:12
status: complete
parent:
  - "[[matrices]]"
---


## Theorem

Let $A$ : [[3 Reference/Def-matrix\|Matrix]]

Then $AA^T$ and $A^TA$ is [[3 Reference/def-symmetric-matrix_202509241413\|symmetric]]

## Proof

Let $A$ be a $m\times n$ matrix. Then $AA^T$ is a $m\times m$ square matrix and $A^TA$ is a $n\times n$ square matrix.

By point 4 and 1 of [[3 Reference/theorem-properties-of-transpose-matrix_202509241322\|properties of transpose matrix]],
$$
\begin{align}
(AA^T)^T & = (A^T)^TA^T \\
 & = AA^T
\end{align}
$$
and
$$
\begin{align}
(A^TA)^T & = A^T(A^T)^T \\
 & = A^TA.
\end{align}
$$

Thus by [[3 Reference/def-symmetric-matrix_202509241413\|defininition of symmetric matrix]], $AA^T$ and $A^TA$ is symmetric.