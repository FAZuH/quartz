---
publish: true
aliases:
  - Rank and Nullity
  - Rank
  - Nullity
created: 2026-04-09T23:07:39.286+07:00
modified: 2026-04-09T23:07:39.287+07:00
published: 2026-04-09T23:07:39.287+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-08 03:16
status: in progress
parent:
  - "[[Elementary Linear Algebra]]"
---


## Definition

Let $A$ : Matrix


Then 
- $n=\operatorname{dim}[R(A)]=\operatorname{dim}[C(A)]$ 
- We call $n$ the **rank** of $A$
- We denote $n=\operatorname{rank}(A)$
- We call $\operatorname{dim}[N(A)]$ the **nullity** of $A$

[^1]

## Theorems

Let $A$ : $m\times n$ matrix

### Rank-Nullity Theorem

$$
\operatorname{rank}(A) + \operatorname{nullity}(A) = n
$$

### Row Echelon Form Theorem

Let $R$ : [[3 Reference/Def-row-echelon-form-(ref)\|REF]] (or [[3 Reference/Def-reduced-row-echelon-form-(rref)\|RREF]]) of $A$ 

Then
- $\operatorname{rank}(A) = \text{number of nonzero rows in } R$
- $\operatorname{rank}(A)$ equals the number of pivot positions in $A$.

### Transpose Rank Theorem

$$
\operatorname{rank}(A) = \operatorname{rank}(A^T)
$$


> [!note]
> This follows from $\operatorname{dim}[R(A)] = \operatorname{dim}[C(A)]$.

### Tranpose product rank theorem

$$\operatorname{rank}(A^TA) = \operatorname{rank}(A)$$


**Proof**

If $A\mathbf{x} = \mathbf{0}$, then $A^TA\mathbf{x} = A^T(\mathbf{0}) = \mathbf{0}$

If $A^TA\mathbf{x} = \mathbf{0}$, then $\mathbf{x}^TA^TA\mathbf{x} = (A\mathbf{x})^T(A\mathbf{x}) = |A\mathbf{x}|^2 = 0$, so $A\mathbf{x} = \mathbf{0}$

Since $N(A^TA) = N(A)$, we have $\operatorname{nullity}(A^TA) = \operatorname{nullity}(A)$.

Both $A^TA$ and $A$ have $n$ columns, so by [[3 Reference/def-rank-and-nullity_202510080316#Rank-Nullity Theorem]]:

$$\operatorname{rank}(A^TA) = n - \operatorname{nullity}(A^TA) = n - \operatorname{nullity}(A) = \operatorname{rank}(A)$$

### Product Rank Theorem

Let $B$ : $n \times p$ matrix

Then
$$
\operatorname{rank}(AB) \leq \min\{\operatorname{rank}(A), \operatorname{rank}(B)\}
$$

### Invertible Matrix Rank Theorem

Suppose $m=n$, i.e., $A$ be a [[3 Reference/Def-matrix\|square matrix]] of order $n$

Then $A$ is invertible if and only if $\operatorname{rank}(A) = n$.

Equivalently, $A$ is invertible if and only if $\operatorname{nullity}(A) = 0$.

### Full Rank Theorem

Let $A$ be an $m \times n$ matrix.

Then
- $A$ has **full column rank** if $\operatorname{rank}(A) = n$ (number of columns)
	- This occurs if and only if the columns of $A$ are linearly independent
	- This occurs if and only if $\operatorname{nullity}(A) = 0$
  
- $A$ has **full row rank** if $\operatorname{rank}(A) = m$ (number of rows)
	- This occurs if and only if the rows of $A$ are linearly independent

### Equality of Row and Column Space Dimensions Theorem

Let $A$ : Matrix

Then $\operatorname{dim}[R(A)] = \operatorname{dim}[C(A)]$

## Theorems: Rank with eigenvalues and eigenvectors

### Number of Nonzero Eigenvalues Theorem

If $A$ is diagonalizable

Then
$$\operatorname{rank}(A) = \text{number of nonzero eigenvalues (counting multiplicity)}$$

### Zero Eigenvalue and Rank Deficiency Theorem

$\lambda = 0$ is an eigenvalue of $A$

If and only if $A$ is singular (rank-deficient)

### Geometric Multiplicity and Nullity

The geometric multiplicity of $\lambda = 0$ (dimension of its eigenspace) equals $\operatorname{nullity}(A)$.

Since the eigenspace for $\lambda = 0$ is $\{\mathbf{x} : A\mathbf{x} = 0\mathbf{x}\} = N(A)$:

$$\operatorname{dim}(\text{eigenspace of } \lambda = 0) = \operatorname{dim}[N(A)] = \operatorname{nullity}(A)$$

### Rank via Rank-Nullity Theorem

For an $n \times n$ matrix:

$$\operatorname{rank}(A) = n - \operatorname{nullity}(A) = n - \text{geometric multiplicity of } \lambda = 0$$

[^1]: [[3 Reference/def-row-space,-column-space,-null-space_202510061124\|Column space]], [[3 Reference/def-row-space,-column-space,-null-space_202510061124\|Row space]], [[3 Reference/def-row-space,-column-space,-null-space_202510061124\|Null space]], [[3 Reference/def-dimension_202510080329\|Dimension]]
