---
{"publish":true,"aliases":["Gram-Schmidt Orthogonalization"],"created":"2025-10-14T04:15:27.060+07:00","modified":"2025-10-14T04:15:27.060+07:00","published":"2025-10-14T04:15:27.060+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-06 14:01","status":"baby","parent":["[[Elementary Linear Algebra]]"]}
---

## Definition: Vectors

To transform [[3 Reference/def-basis_202510061042\|basis]] $\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{r} \}$ into an [[3 Reference/def-orthogonal-and-orthonormal-sets_202510061213\|orthogonal]] basis $\{ \mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{r} \}$, use the following formula for $i=1,2,\dots,r$:
$$
\mathbf{v}_{i} = \mathbf{u}_{i} - \sum_{j=1}^{i-1} \frac{\langle \mathbf{u}_{i}, \mathbf{v}_{j} \rangle }{||\mathbf{v}_{j}||^{2}}\mathbf{v}_{j}
$$

## Definition: Matrices

Let
- $\mathcal{V}$ : [[3 Reference/def-linear-space_202509170852\|Linear space]]
- $\mathbf{A}_{1},\dots,\mathbf{A}_{k}$ : Nonempty [[3 Reference/def-linear-independence_202510060445\|linearly independent]] [[3 Reference/def-set_202510022014\|set]] of [[3 Reference/Def-matrix\|matrices]] in $\mathcal{V}$
- 
$$
x_{ij} = \frac{\mathbf{A}_{j}\cdot\mathbf{B}_{i}}{\mathbf{B}_{i}\cdot{\mathbf{B}_{i}}}, \quad i<j=1,\dots,k
$$

Then there exists unique scalars $x_{ij}$ ($i<j=1,\dots,k$) such that the set comprising the $k$ matrices
$$
\begin{align}
\mathbf{B}_{1} & = \mathbf{A}_{1} \\
\mathbf{B}_{2} & = \mathbf{A}_{2}  - x_{12}\mathbf{B}_{1} \\
\vdots \\
\mathbf{B}_{j} & = \mathbf{A}_{j} - x_{j-1,j}\mathbf{B}_{j-1} - \dots - x_{1j}\mathbf{B}_{1} \\
\vdots \\
\mathbf{B}_{k} & = \mathbf{A}_{k} - x_{k-1,k}\mathbf{B}_{k-1} - \dots - x_{1k} \mathbf{B}_{1}
\end{align}
$$
is orthogonal. 

Further, $\mathbf{B}_{1},\mathbf{B}_{2},\dots,\mathbf{B}_{k}$ are nonnull

### Corollary

Let
- $\mathcal{V}$ : Linear space
- $\{ \mathbf{A}_{1},\dots,\mathbf{A}_{k} \}$ : Nonempty linearly independent set of matrices in $\mathcal{V}$

If
$$
\mathbf{C}_{1}||\mathbf{B}_{1}||^{-1}\mathbf{B}_{1},\dots,\mathbf{C}_{k}=||\mathbf{B}_{k}||^{-1}\mathbf{B}_{k}
$$

Then the matrices $\mathbf{C}_{1},\dots,\mathbf{C}_{k}$ are orthonormal

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
