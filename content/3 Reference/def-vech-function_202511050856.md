---
publish: true
aliases:
  - Vech Function
created: 2026-03-25T15:22:40.601+07:00
modified: 2026-03-25T15:22:40.601+07:00
published: 2026-03-25T15:22:40.601+07:00
tags:
  - 
creation-time: 2025-11-05 08:56
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let $A$ : $n\times n$ [[def-symmetric-matrix_202509241413|symmetric matrix]]

Then **vech function** (half-vectorization) stacks the lower triangular elements column-by-column: $$ \operatorname{vech}(A) = \begin{bmatrix} a\_{11} \ a\_{21} \ \vdots \ a\_{n1} \ a\_{22} \ a\_{32} \ \vdots \ a\_{n2} \ a\_{33} \ \vdots \ a\_{nn} \end{bmatrix} $$

The vech function is a mapping of $R^{n\times n}\mapsto R^{n(n+1)/2}$

## Example

$$
\operatorname{vech}\left(\begin{bmatrix}
\colorbox{blue}1 & 2 & 3 \\
\colorbox{blue}2 & \colorbox{green}4 & 5 \\
\colorbox{blue}3 & \colorbox{green}5 & \colorbox{red}6
\end{bmatrix}\right) = \begin{bmatrix}
\colorbox{blue}1 \\
\colorbox{blue}2 \\
\colorbox{blue}3 \\
\colorbox{green}4 \\
\colorbox{green}5 \\
\colorbox{red}6
\end{bmatrix}
$$
