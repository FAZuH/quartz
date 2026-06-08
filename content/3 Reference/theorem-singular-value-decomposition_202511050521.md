---
publish: true
aliases:
  - Singular Value Decomposition
  - SVD
created: 2026-04-09T23:07:39.717+07:00
modified: 2026-04-09T23:07:39.718+07:00
published: 2026-04-09T23:07:39.718+07:00
tags:
  - 
creation-time: 2025-11-05 05:21
status: in progress
parent:
  - "[[matrices]]"
---

The <u>decomposition</u> of any matrix into the product of an orthogonal matrix, a diagonal matrix with nonzero diagonal elements ranked from highest to lowest, and another orthogonal matrix.

## Theorem

Let

- $A$ : $m\times n$ [[Def-matrix|matrix]]
- $k$ : [[def-rank-and-nullity_202510080316|Rank]] of $A$

Let

- $U$ : $m\times m$ matrix
- $\Sigma$ : $m\times n$ matrix
- $V$ : $n\times n$ matrix

If

- $V=\begin{bmatrix}\mathbf{v}_{1} & \dots & \mathbf{v}_{n}\end{bmatrix}$ [[def-orthogonal_202510011638|orthogonally]] diagonalizes $A^TA$
- Nonzero diagonal entries of $\Sigma$ are $\sigma_{1}=\sqrt{ \lambda_{1} }$, $\dots$, $\sigma_{k}=\sqrt{ \lambda_{k} }$, where $\lambda_{1},\dots,\lambda_{k}$ are nonzero [[def-eigenvalue-eigenvector_202511050458|eigenvalues]] of $A^TA$ corresponding to the [[def-row-and-column-vector_202509240741|column vectors]] of $V$
- Column vectors of $V$ are ordered so that $\sigma_{1}\geq \dots \geq\sigma_{k}>0$
- $\mathbf{u}_{i}= \dfrac{A\mathbf{v}_{i}}{||A\mathbf{v}_{i}||}= \dfrac{1}{\sigma_{i}}A\mathbf{v}_{i},\quad i=1,2,\dots,k$
- $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$ is an [[def-orthogonal-and-orthonormal-sets_202510061213|orthonormal]] [[def-basis_202510061042|basis]] for $\operatorname{col}(A)$[^1]
- $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k},\mathbf{u}_{k+1},\dots,\mathbf{u}_{m} \}$ is an extension of $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$ to an orthonormal basis for $R^m$

Then

$$
\begin{align}
A & = U\Sigma V^T \\
 & = \begin{bmatrix}
\mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_k & | & \mathbf{u}_{k+1} & \cdots & \mathbf{u}_m
\end{bmatrix}
\left[\begin{array}{cccc|c}
\sigma_1 & 0 & \cdots & 0 & \\
0 & \sigma_2 & \cdots & 0 & 0_{k \times (n-k)} \\
\vdots & \vdots & \ddots & \vdots & \\
0 & 0 & \cdots & \sigma_k & \\
\hline
& 0_{(m-k) \times k} & & & 0_{(m-k) \times (n-k)}
\end{array}\right]
\begin{bmatrix}
\mathbf{v}_1^T \\
\mathbf{v}_2^T \\
\vdots \\
\mathbf{v}_k^T \\
\hline
\mathbf{v}_{k+1}^T \\
\vdots \\
\mathbf{v}_n^T
\end{bmatrix}
\end{align}
$$

## Procedure

To compute the SVD of an $m \times n$ matrix $A$ with rank $k$:

1. Compute **$A^TA$** (an $n \times n$ symmetric matrix)

2. Find **eigenvalues and eigenvectors of** $A^TA$
   - Find all eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ of $A^TA$
   - Find corresponding eigenvectors for each eigenvalue

3. **Normalize** the eigenvectors

4. **Order** eigenvalues and eigenvectors
   - Order eigenvalues from largest to smallest: $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_k > 0 = \lambda_{k+1} = \cdots = \lambda_n$
   - Order the corresponding unit eigenvectors accordingly to form $V = [\mathbf{v}_1 \quad \mathbf{v}_2 \quad \cdots \quad \mathbf{v}_n]$

5. Construct **$\Sigma$** (an $m \times n$ matrix)
   - Compute singular values: $\sigma_i = \sqrt{\lambda_i}$ for $i = 1, 2, \dots, k$
   - Place $\sigma_1, \sigma_2, \dots, \sigma_k$ on the diagonal
   - Fill remaining entries with zeros

6. Construct **$U$** (an $m \times m$ matrix)
   - For $i = 1, 2, \dots, k$: compute $\mathbf{u}_i = \frac{1}{\sigma_i} A\mathbf{v}_i$
   - If $m>k$, extend $U$ with [[def-solution-space_202510061127|solution space]] of $A^T\mathbf{x}=0$
   - Form $U = [\mathbf{u}_1 \quad \mathbf{u}_2 \quad \cdots \quad \mathbf{u}_m]$

7. (Optional) **Verify**: $A = U\Sigma V^T$

In short,

1. Descending sort normalized eigenvalues ($\sigma_{i}^{2}$) & eigenvectors ($\mathbf{v}_{i}$) of $A^TA$
2. $V=\begin{bmatrix}\mathbf{v}_{i} & \dots & \mathbf{v}_{k} \end{bmatrix}$. If $n>k$,
3. $\Sigma=\operatorname{diag}(\sigma_{i}),i=1,\dots,k$
4. $U:\mathbf{u}_{i}=\frac{1}{\sigma_{i}}A\mathbf{v}_{i}$
5. Column stack $U$ with $\operatorname{null}(A^T)$ if $k<m$

> [!tip]
> Based on [[def-rank-and-nullity_202510080316#Tranpose product rank theorem|Tranpose product rank theorem]]
>
> $\operatorname{rank}(A^TA)=\operatorname{rank}(A)=k$
>
> Based on [[def-rank-and-nullity_202510080316#Number of Nonzero Eigenvalues Theorem|Number of Nonzero Eigenvalues Theorem]]
>
> $\operatorname{rank}(A)=k=\text{number of nonzero eigenvalues (counting multiplicity/duplicates)}$

## Example

Let $A = \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{bmatrix}$

### Step 1: Compute $A^TA$

$$
\begin{align}
A^TA &= \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & -1 \end{bmatrix}\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{bmatrix} \\
&= \begin{bmatrix} 2 & 1 & -1 \\ 1 & 2 & 1 \\ -1 & 1 & 2 \end{bmatrix}
\end{align}
$$

### Step 2: Find eigenvalues and eigenvectors of $A^TA$

**Finding eigenvalues:**

$$
\begin{align}
\det(A^TA - \lambda I) &= \det\begin{bmatrix} 2-\lambda & 1 & -1 \\ 1 & 2-\lambda & 1 \\ -1 & 1 & 2-\lambda \end{bmatrix} = 0 \\
\lambda_1 &= 4, \quad \lambda_2 = 2, \quad \lambda_3 = 0
\end{align}
$$

Thus, $\operatorname{rank}(A)=k=2$

**Finding eigenvectors:**

For $\lambda_1 = 4$:

$$
\begin{align}
\begin{bmatrix} -2 & 1 & -1 \\ 1 & -2 & 1 \\ -1 & 1 & -2 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} &= \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \\ \\

x_1 &= x_3 \\
x_2 &= x_1
\end{align}
$$

For $\lambda_2 = 2$:

$$
\begin{align}
\begin{bmatrix} 0 & 1 & -1 \\ 1 & 0 & 1 \\ -1 & 1 & 0 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} &= \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \\ \\

x_2 &= x_3 \\
x_1 &= -x_3
\end{align}
$$

For $\lambda_3 = 0$:

$$
\begin{align}
\begin{bmatrix} 2 & 1 & -1 \\ 1 & 2 & 1 \\ -1 & 1 & 2 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} &= \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \\ \\

x_1 &= -x_3 \\
x_2 &= x_3
\end{align}
$$

Suppose $x_1 = 1$ for $\lambda_1$, $x_3 = 1$ for $\lambda_2$ and $\lambda_3$. The unnormalized eigenvectors are:

$$
\begin{align}
\mathbf{w}_{1} &= \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} \\
\mathbf{w}_{2} &= \begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix} \\
\mathbf{w}_{3} &= \begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix}
\end{align}
$$

### Step 3: Normalize the eigenvectors to unit length

For $\lambda_{1}=4$

$$
\begin{align}
\|\mathbf{w}_1\| &= \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3} \\
\mathbf{v}_1 &= \frac{1}{\sqrt{3}}\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{bmatrix}
\end{align}
$$

For $\lambda_{2}=2$

$$
\begin{align}
\|\mathbf{w}_2\| &= \sqrt{(-1)^2 + 1^2 + 1^2} = \sqrt{3} \\
\mathbf{v}_2 &= \frac{1}{\sqrt{3}}\begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{bmatrix}
\end{align}
$$

For $\lambda_{3}=0$

$$
\begin{align}
\|\mathbf{w}_3\| &= \sqrt{(-1)^2 + 1^2 + 1^2} = \sqrt{3} \\
\mathbf{v}_3 &= \frac{1}{\sqrt{3}}\begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{bmatrix}
\end{align}
$$

### Step 4: Order eigenvalues and eigenvectors

$$
V = \begin{bmatrix} \mathbf{v}_{1} & \mathbf{v}_{2} & \mathbf{v}_{3} \end{bmatrix} =  \begin{bmatrix} \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \end{bmatrix}
$$

### Step 5: Construct $\Sigma$

$$
\begin{align}
\sigma_1 &= \sqrt{\lambda_1} = 2 \\
\sigma_2 &= \sqrt{\lambda_2} = \sqrt{2} \\ 
\sigma_3 &= \sqrt{\lambda_3} = 0 \\ \\

\Sigma &= \begin{bmatrix} 2 & 0 & 0 \\ 0 & \sqrt{2} & 0 \\ 0 & 0 & 0 \end{bmatrix}
\end{align}
$$

### Step 6: Construct $U$

For $i = 1, 2$: compute $\mathbf{u}_i = \frac{1}{\sigma_i} A\mathbf{v}_i$

For $i=1$

$$
\begin{align}
\mathbf{u}_1 &= \frac{1}{2}\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{bmatrix}\begin{bmatrix} \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{bmatrix} \\
&= \frac{1}{2}\begin{bmatrix} \frac{2}{\sqrt{3}} \\ \frac{2}{\sqrt{3}} \\ 0 \end{bmatrix} \\
&= \begin{bmatrix} \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ 0 \end{bmatrix}
\end{align}
$$

For $i=2$

$$
\begin{align}
\mathbf{u}_2 &= \frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{bmatrix}\begin{bmatrix} -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{bmatrix} \\
&= \frac{1}{\sqrt{2}}\begin{bmatrix} 0 \\ \frac{2}{\sqrt{3}} \\ -\frac{2}{\sqrt{3}} \end{bmatrix} \\
&= \begin{bmatrix} 0 \\ \sqrt{\frac{2}{3}} \\ -\sqrt{\frac{2}{3}} \end{bmatrix}
\end{align}
$$

Notice that $3=m>k=2$. Thus we extend $U$ with $\operatorname{null}(A^T)$:

Find $\mathbf{u}_3$ in $\operatorname{null}(A^T)$:

$$
\begin{align}
A^T\mathbf{x} &= \mathbf{0} \\
\begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & -1 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} &= \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \\ \\

x_1 + x_3 &= 0 \\
x_1 + x_2 &= 0 \\
x_2 - x_3 &= 0
\end{align}
$$

So $x_3 = -x_1$, $x_2 = -x_1$. Suppose $x_{1}=1$

Unnormalized vector: $\mathbf{x}=\begin{bmatrix} 1 \\ -1 \\ -1 \end{bmatrix}$

$$
\begin{align}
\|\mathbf{u}_3\| &= \sqrt{1^2 + (-1)^2 + (-1)^2} = \sqrt{3} \\
\mathbf{u}_3 &= \frac{1}{\sqrt{3}}\begin{bmatrix} 1 \\ -1 \\ -1 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{3}} \\ -\frac{1}{\sqrt{3}} \\ -\frac{1}{\sqrt{3}} \end{bmatrix}
\end{align}
$$

Therefore

$$
U = \begin{bmatrix} \mathbf{u}_{1} & \mathbf{u}_{2} & \mathbf{u}_{3} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{3}} & 0 & \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \sqrt{\frac{2}{3}} & -\frac{1}{\sqrt{3}} \\ 0 & -\sqrt{\frac{2}{3}} & -\frac{1}{\sqrt{3}} \end{bmatrix}
$$

### Step 7: Verify

$$
A = U\Sigma V^T = \begin{bmatrix} \frac{1}{\sqrt{3}} & 0 & \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \sqrt{\frac{2}{3}} & -\frac{1}{\sqrt{3}} \\ 0 & -\sqrt{\frac{2}{3}} & -\frac{1}{\sqrt{3}} \end{bmatrix}\begin{bmatrix} 2 & 0 & 0 \\ 0 & \sqrt{2} & 0 \\ 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \end{bmatrix}
$$

## Related theorems

### Eigenvalues of $X^TX$ and $XX^T$

Let $X$ be an $m \times n$ matrix.

The nonzero eigenvalues of $X^TX$ and $XX^T$ are identical.

> [!note]
> This explains why we can compute SVD using either $X^TX$ or $XX^T$ - they share the same nonzero eigenvalues, which determine the singular values.

### Existence of SVD

Let $X$ be an $m \times n$ matrix with $\operatorname{rank}(X) = s \leq n$.

Then $X$ can be written as:

$$
X = L^T \begin{bmatrix} \Lambda^{1/2} & \mathbf{0} \\ \mathbf{0} & \mathbf{0} \end{bmatrix} M^T
$$

where:

- $L$ and $M$ are orthogonal matrices
- $\Lambda$ is a diagonal matrix containing the nonzero eigenvalues of $XX^T$ or $X^TX$, ordered from largest to smallest

> [!note]
> This is equivalent to the standard SVD form $X = U\Sigma V^T$, where $U = L^T$, $\Sigma = \begin{bmatrix} \Lambda^{1/2} & \mathbf{0} \\ \mathbf{0} & \mathbf{0} \end{bmatrix}$, and $V^T = M^T$.

### Rank and Nonzero Eigenvalues

For any matrix $X$:

$$
\operatorname{rank}(X) = \text{number of nonzero eigenvalues of } X^TX \text{ (or } XX^T\text{)}
$$

Equivalently, the column rank and row rank equal the number of nonzero singular values.

> [!note]
> This connects [[def-rank-and-nullity_202510080316|Rank]] to eigenvalues through SVD, providing a computational method for determining rank.

### Rank of Kronecker Product

Let $A$ be an $m \times n$ matrix and $B$ be a $p \times q$ matrix.

Then:

$$
\operatorname{rank}(A \otimes B) = \operatorname{rank}(A) \times \operatorname{rank}(B)
$$

where $\otimes$ denotes the Kronecker product.

### Non-negative Definite Characterization

Let $A$ be an $n \times n$ symmetric matrix.

Then $A$ is positive semidefinite if and only if:

$$
\operatorname{tr}(AB) \geq 0
$$

for all positive semidefinite matrices $B$.

where $\operatorname{tr}(\cdot)$ denotes the trace of a matrix.

### Rayleigh Quotient Bounds

Let $A$ be an $m \times m$ [[def-positive-definite-matrix_202512101405|Positive Semidefinite Matrix]] with nonzero eigenvalues ordered as $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_s > 0$.

For any nonzero vector $\mathbf{x} \in \mathbb{R}^m$:

**Case 1:** If $s = m$ (full rank):

$$
\lambda_s \leq \frac{\mathbf{x}^T A \mathbf{x}}{\mathbf{x}^T \mathbf{x}} \leq \lambda_1
$$

**Case 2:** If $s < m$ (rank deficient):

$$
0 \leq \frac{\mathbf{x}^T A \mathbf{x}}{\mathbf{x}^T \mathbf{x}} \leq \lambda_1
$$

> [!note]
> The quantity $\frac{\mathbf{x}^T A \mathbf{x}}{\mathbf{x}^T \mathbf{x}}$ is called the Rayleigh quotient. This theorem shows that:
>
> - The largest eigenvalue $\lambda_1$ is the maximum value of the Rayleigh quotient
> - The smallest nonzero eigenvalue $\lambda_s$ is the minimum value (when $A$ is full rank)
> - When $A$ is rank deficient, the Rayleigh quotient can reach 0

## Code implementation

```python
import numpy as np
from scipy.linalg import null_space

np.set_printoptions(precision=2, suppress=True)


A = np.array([
    [2, 3],
    [4, 5],
    [6, 7]
])

print(f"{A=}")
#|%%--%%| <jIh\n\n{k=}laa2rII|bCEGstAtvo>

k = int(np.linalg.matrix_rank(A))
m, n = A.shape

ATA = A.T @ A

eigval, eigvec = np.linalg.eig(ATA)

# Descending sort
idx = np.argsort(eigval)[::-1]
eigval_sorted = eigval[idx]
V = eigvec[:, idx]
sigma = np.sqrt(eigval_sorted[:k])

Sigma = np.zeros((m, n))
Sigma[:k, :k] = np.diag(sigma)

U_k = np.column_stack([A @ V[:, i] / sigma[i] for i in range(k)])
if k < m:
    U = np.column_stack([U_k, null_space(A.T)])
else:
    U = U_k


#|%%--%%| <bCEGstAtvo|gnwb7rDeUd>

print(U @ Sigma @ V.T)
print(A)
print(np.allclose(A, U @ Sigma @ V.T))
```

[^1]: [[def-row-space,-column-space,-null-space_202510061124|Column Space]]
