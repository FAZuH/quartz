---
{"publish":true,"aliases":["Solution of Linear System by Matrix Inversion"],"created":"2025-10-02T19:38:47.191+07:00","modified":"2025-10-02T20:08:33.049+07:00","published":"2025-10-02T20:08:33.049+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-02 19:38","status":"adult","parent":["[[Elementary Linear Algebra]]"]}
---


## Theorem

Let 
- $A$ : [[3 Reference/def-inverse-matrix_202509241225\|Invertible]] $n\times n$ [[3 Reference/Def-matrix\|matrix]]
- $\mathbf{b}$ : Any $n\times 1$ matrix

Then the [[3 Reference/Def-linear-system\|linear system]] $A\mathbf{x}=\mathbf{b}$ has exactly one [[3 Reference/Def-solution-of-linear-system\|solution]], namely,
$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

## Proof

Let 
- $A$ : [[3 Reference/def-inverse-matrix_202509241225\|Invertible]] $n\times n$ [[3 Reference/Def-matrix\|matrix]]
- $\mathbf{b}$ : Any $n\times 1$ matrix

Since $A(A^{-1}\mathbf{b})=(AA^{-1})\mathbf{b}=I\mathbf{b}=\mathbf{b}$, by definition of [[3 Reference/Def-solution-of-linear-system\|solution of linear system]], it follows that $\mathbf{x}=A^{-1}\mathbf{b}$ is a solution of $A\mathbf{x}=\mathbf{b}$.

Let $\mathbf{x}_{0}$ be any solution of $A\mathbf{x}=\mathbf{b}$. Then $A\mathbf{x}_{0}=\mathbf{b}$. Further,
$$
\begin{align}
A\mathbf{x}_{0} & = \mathbf{b} \\
A^{-1}A\mathbf{x}_{0} & = A^{-1}\mathbf{b} \\
\mathbf{x}_{0} & = A^{-1}\mathbf{b}
\end{align}
$$

We have shown that if $\mathbf{x}_{0}$ is an arbitrary solution of $A\mathbf{x}=\mathbf{b}$, then $\mathbf{x}_{0}=A^{-1}\mathbf{b}$. Therefore, $A^{-1}\mathbf{b}$ is the only solution of $A\mathbf{x}=\mathbf{b}$.
