---
publish: true
aliases:
  - QR Decomposition
created: 2026-04-09T23:07:39.714+07:00
modified: 2026-04-09T23:07:39.715+07:00
published: 2026-04-09T23:07:39.715+07:00
tags:
  - 
creation-time: 2025-10-15 06:41
status: in progress
parent:
  - "[[matrices]]"
---

## Theorem

Let $A$ : an $m \times n$ [[Def-matrix|matrix]] with [[def-linear-independence_202510060445|linearly independent]] columns.

If

- $Q$ is an $m \times n$ matrix with [[def-orthogonal-and-orthonormal-sets_202510061213|orthonormal]] columns
- $R$ is an $n \times n$ [[def-triangular-matrix_202509241413|upper triangular matrix]] with positive diagonal entries

Then $A$ can be factored as

$$
A = QR
$$

## Procedure

1. Apply [[theorem-gram-schmidt-orthogonalization_202510061401|Gram-Schmidt Orthogonalization]] to columns of $A$ to obtain [[def-orthogonal_202510011638|orthogonal]] vectors $\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \}$
2. [[def-unit-vector_202510010840|Normalize]] to get [[def-orthogonal-and-orthonormal-sets_202510061213|orthonormal]] vectors $\mathbf{q}_{i} = \mathbf{v}_{i}/||\mathbf{v}_{i}||$
3. Form $Q = [\mathbf{q}_{1} \; \mathbf{q}_{2} \; \cdots \; \mathbf{q}_{n}]$
4. Form $R=Q^TA$

## Example

> Find the QR decomposition of
> $A = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 1 \end{bmatrix}$

Using the columns $\mathbf{u}_{1} = (1,1,1)$ and $\mathbf{u}_{2} = (0,1,1)$:

1. Apply Gram-Schmidt:
   - $\mathbf{v}_{1} = (1,1,1)$
   - $\mathbf{v}_{2} = (0,1,1) - \frac{2}{3}(1,1,1) = \left(-\frac{2}{3}, \frac{1}{3}, \frac{1}{3}\right)$

2. Normalize:
   - $\mathbf{q}_{1} = \frac{1}{\sqrt{3}}(1,1,1)$
   - $\mathbf{q}_{2} = \frac{3}{\sqrt{6}}\left(-\frac{2}{3}, \frac{1}{3}, \frac{1}{3}\right) = \left(-\frac{2}{\sqrt{6}}, \frac{1}{\sqrt{6}}, \frac{1}{\sqrt{6}}\right)$

3. Form $Q$:

$$
Q = \begin{bmatrix} 
\frac{1}{\sqrt{3}} & -\frac{2}{\sqrt{6}} \\
\frac{1}{\sqrt{3}} & \frac{1}{\sqrt{6}} \\
\frac{1}{\sqrt{3}} & \frac{1}{\sqrt{6}}
\end{bmatrix}
$$

4. Compute $R = Q^T A$:

$$
\begin{align}
R & = \begin{bmatrix}
\langle \mathbf{c}_{1},\mathbf{q}_{1} \rangle & \langle \mathbf{c}_{2},\mathbf{q}_{1} \rangle  \\
0 & \langle \mathbf{c}_{2},\mathbf{q}_{2} \rangle 
\end{bmatrix} \\
 & = \begin{bmatrix}
\sqrt{3} & \frac{2}{\sqrt{3}} \\
0 & \frac{\sqrt{6}}{3}
\end{bmatrix}
\end{align}
$$

Therefore:

$$
A = \begin{bmatrix} 
\frac{1}{\sqrt{3}} & -\frac{2}{\sqrt{6}} \\
\frac{1}{\sqrt{3}} & \frac{1}{\sqrt{6}} \\
\frac{1}{\sqrt{3}} & \frac{1}{\sqrt{6}}
\end{bmatrix}
\begin{bmatrix}
\sqrt{3} & \frac{2}{\sqrt{3}} \\
0 & \frac{\sqrt{6}}{3}
\end{bmatrix}
$$
