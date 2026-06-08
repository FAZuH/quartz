---
publish: true
aliases:
  - Solution of Linear System by Matrix Inversion
created: 2026-04-09T23:07:39.718+07:00
modified: 2026-04-09T23:07:39.719+07:00
published: 2026-04-09T23:07:39.719+07:00
tags:
  - 
creation-time: 2025-10-02 19:38
status: complete
parent:
  - "[[Elementary Linear Algebra]]"
---

## Theorem

Let

- $A$ : [[def-inverse-matrix_202509241225|Invertible]] $n\times n$ [[Def-matrix|matrix]]
- $\mathbf{b}$ : Any $n\times 1$ matrix

Then the [[Def-linear-system|linear system]] $A\mathbf{x}=\mathbf{b}$ has exactly one [[Def-solution-of-linear-system|solution]], namely,

$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

## Proof

Let

- $A$ : [[def-inverse-matrix_202509241225|Invertible]] $n\times n$ [[Def-matrix|matrix]]
- $\mathbf{b}$ : Any $n\times 1$ matrix

Since $A(A^{-1}\mathbf{b})=(AA^{-1})\mathbf{b}=I\mathbf{b}=\mathbf{b}$, by definition of [[Def-solution-of-linear-system|solution of linear system]], it follows that $\mathbf{x}=A^{-1}\mathbf{b}$ is a solution of $A\mathbf{x}=\mathbf{b}$.

Let $\mathbf{x}_{0}$ be any solution of $A\mathbf{x}=\mathbf{b}$. Then $A\mathbf{x}_{0}=\mathbf{b}$. Further,

$$
\begin{align}
A\mathbf{x}_{0} & = \mathbf{b} \\
A^{-1}A\mathbf{x}_{0} & = A^{-1}\mathbf{b} \\
\mathbf{x}_{0} & = A^{-1}\mathbf{b}
\end{align}
$$

We have shown that if $\mathbf{x}_{0}$ is an arbitrary solution of $A\mathbf{x}=\mathbf{b}$, then $\mathbf{x}_{0}=A^{-1}\mathbf{b}$. Therefore, $A^{-1}\mathbf{b}$ is the only solution of $A\mathbf{x}=\mathbf{b}$.
