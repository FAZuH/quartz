---
publish: true
aliases:
  - Gram-Schmidt Orthogonalization
created: 2026-02-22T19:24:22.770+07:00
modified: 2026-02-22T19:24:22.779+07:00
published: 2026-02-22T19:24:22.779+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 14:01
status: baby
parent:
  - "[[Elementary Linear Algebra]]"
---


## Definition: Vectors

To transform [[3 Reference/def-linear-independence_202510060445\|linearly independent]] set $\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{r} \}$ into an [[3 Reference/def-orthogonal-and-orthonormal-sets_202510061213\|orthogonal]] set $\{ \mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{r} \}$: 
$$
\mathbf{v}_{i} = \mathbf{u}_{i} - \sum_{j=1}^{i-1} \frac{\langle \mathbf{u}_{i}, \mathbf{v}_{j} \rangle }{||\mathbf{v}_{j}||^{2}}\mathbf{v}_{j},\quad i=1,2,\dots,r
$$
where
- $\langle \mathbf{u}_{i},\mathbf{v}_{j} \rangle=u_{1}v_{1}+u_{2}v_{2}+\dots+u_{r}v_{r}$ ([[3 Reference/def-inner-product_202510061421\|Euclidean Inner Product]])
- $||\mathbf{v}_{j}||=\sqrt{ v_{1}^{2}+v_{2}^{2}+\dots+v_{r}^{2} }$ ([[3 Reference/def-norm_202510010836\|Norm]])

Continuing, the vector
$$
\mathbf{q}_{i} = \frac{1}{||\mathbf{v}_{i}||}\mathbf{v}_{i}
$$
form an [[3 Reference/def-orthogonal-and-orthonormal-sets_202510061213\|orthonormal]] set.

## Definition: Matrices

To transform [[3 Reference/def-linear-independence_202510060445\|linearly independent]] set $\{ A_{1},A_{2},\dots,A_{k} \}$ of [[3 Reference/Def-matrix\|matrices]] into an orthogonal set $\{ B_{1},B_{2},\dots,B_{k} \}$
$$
B_{i} = A_{i} - \sum_{j=1}^{i-1} \frac{A_{i} \cdot B_{j}}{B_{j} \cdot B_{j}} B_{j},\quad i=1,2,\dots,k:
$$
where $A \cdot B = \operatorname{tr}(A^TB)$ ([[3 Reference/def-inner-product_202510061421\|Frobenius Inner Product]])

### Corollary

Let
- $\mathcal{V}$ : Linear space
- $\{ A_{1},\dots,A_{k} \}$ : Nonempty linearly independent set of matrices in $\mathcal{V}$

If
$$ C_{i}=||B_{i}||^{-1}B_{i},\quad\forall i=1,\dots,k $$

Then the matrices $C_{1},\dots,C_{k}$ are [[3 Reference/def-orthogonal-and-orthonormal-sets_202510061213\|orthonormal]]


## Example

> Assume $R^{3}$ has the [[3 Reference/def-inner-product_202510061421\|Euclidean Inner Product]]. Apply the Gram-Schmidt process to transform the basis vectors
> $$ \mathbf{u}_{1}=(1,1,1),\quad\mathbf{u}_{2}=(0,1,1),\quad\mathbf{u}_{3}=(0,0,1) $$
> into an orthogonal basis $\{ \mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3} \}$, and then [[3 Reference/def-unit-vector_202510010840\|normalize]] the orthogonal basis vectors to obtain an [[3 Reference/def-orthogonal-and-orthonormal-sets_202510061213\|orthonormal]] basis $\{ \mathbf{q}_{1},\mathbf{q}_{2},\mathbf{q}_{3} \}$

1. $\mathbf{v}_{1}=\mathbf{u}_{1}=(1,1,1)$
2. 
$$
\begin{align}
\mathbf{v}_{2} & = \mathbf{u}_{2} - \frac{\langle \mathbf{u}_{2}, \mathbf{v}_{1} \rangle }{||\mathbf{v}_{1}||^{2}}\mathbf{v}_{1} \\
 & = (0,1,1) - \frac{0 \cdot 1 + 1 \cdot 1 + 1 \cdot 1}{1^{2}+1^{2}+1^{2}}(1,1,1) \\
 & = (0,1,1) - \frac{2}{3}(1,1,1) \\
 & = \left( -\frac{2}{3}, \frac{1}{3}, \frac{1}{3} \right)
\end{align}
$$
3. 
$$
\begin{align}
\mathbf{v}_{3} & = u_{3} - \frac{\langle \mathbf{u}_{3},\mathbf{v}_{1} \rangle }{||\mathbf{v}_{1}||^{2}}\mathbf{v}_{1} - \frac{\langle \mathbf{u}_{3},\mathbf{v}_{2} \rangle }{||\mathbf{v}_{2}||^{2}}\mathbf{v}_{2} \\
 & = (0,0,1) - \frac{1}{3}(1,1,1) - \frac{1/3}{2/3}\left( -\frac{2}{3}, \frac{1}{3}, \frac{1}{3} \right) \\
 & = \left( 0, -\frac{1}{2}, \frac{1}{2} \right)
\end{align}
$$

Thus, the vectors
$$
\mathbf{v}_{1} = (1,1,1),\quad\mathbf{v}_{2}=\left( -\frac{2}{3}, \frac{1}{3}, \frac{1}{3} \right),\quad\mathbf{v}_{3}=\left( 0, -\frac{1}{2}, \frac{1}{2} \right)
$$
form an orthogonal basis for $R^{3}$. The norm of these vectors are
$$
||\mathbf{v}_{1}||=\sqrt{ 3 },\quad||\mathbf{v}_{2}||=\frac{\sqrt{ 6 }}{3},\quad||\mathbf{v}_{3}||=\frac{1}{\sqrt{ 2 }}
$$
so an orthonormal basis for $R^{3}$ is
$$
\mathbf{q}_{1} = \frac{\mathbf{v}_{1}}{||\mathbf{v}_{1}||} = \left( \frac{1}{\sqrt{ 3 }}, \frac{1}{\sqrt{ 3 }}, \frac{1}{\sqrt{ 3 }} \right), \quad \mathbf{q}_{2} = \left( -\frac{2}{\sqrt{ 6 }}, \frac{1}{\sqrt{ 6 }}, \frac{1}{\sqrt{ 6 }} \right),\quad \mathbf{q}_{3}=\left( 0, -\frac{1}{\sqrt{ 2 }}, \frac{1}{\sqrt{ 2 }} \right)
$$
