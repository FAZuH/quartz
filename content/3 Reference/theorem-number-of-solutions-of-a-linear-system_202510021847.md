---
{"publish":true,"aliases":["Number of Solutions of a Linear System"],"created":"2025-10-14T04:15:27.052+07:00","modified":"2025-10-14T04:15:27.052+07:00","published":"2025-10-14T04:15:27.052+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-02 18:47","status":"adult","parent":["[[Elementary Linear Algebra]]"]}
---


## Theorem

Solution of a [[3 Reference/Def-linear-system\|linear system]] is either of the following:
1. Zero solution
2. One solution
3. Infinitely many solutions

There are no other possibilities.


![[assets/Pasted image 20250713060325.png]]

## Proof

Let $A\mathbf{x}=\mathbf{b}$ be a linear system.

Assume that $A\mathbf{x}=\mathbf{b}$ has more than one solution.

Let $\mathbf{x}_{1}$ and $\mathbf{x}_{2}$ be any two distinct solutions (i.e., $\mathbf{x}_{1}\neq \mathbf{x}_{2}$) of $A\mathbf{x}=\mathbf{b}$.

Let $\mathbf{x}_{0}=\mathbf{x}_{1}-\mathbf{x}_{2}$.

Because $\mathbf{x}_{1}\neq \mathbf{x}_{2}$, $\mathbf{x}_{0}$ is nonzero (therefore a [[3 Reference/Def-trivial-solution\|nontrivial solution]]); moreover,
$$
\begin{align}
A\mathbf{x}_{0} & = A(\mathbf{x}_{1}-\mathbf{x}_{2}) \\
 & = A\mathbf{x}_{1} - A\mathbf{x}_{2} \\
 & = \mathbf{b} - \mathbf{b} \\
 & = \mathbf{0}
\end{align}
$$
thus $\mathbf{x}_{0}$ is a nontrivial solution to a [[3 Reference/Def-homogeneous-linear-system\|homogeneous linear system]].

Let $k$ be any [[3 Reference/Def-matrix\|scalar]]. Then,
$$
\begin{align}
A(\mathbf{x}_{1}+k\mathbf{x}_{0}) & = A\mathbf{x}_{1}+A(k\mathbf{x}_{0}) \\
 & = A\mathbf{x}_{1} + k(A\mathbf{x}_{0}) \\
 & = \mathbf{b}+k\mathbf{0} \\
 & = \mathbf{b} + \mathbf{0} \\
 & = \mathbf{b}
\end{align}
$$

By definition of solution, we have found that $\mathbf{x}_{1}+k\mathbf{x}_{0}$ is a solution of $A\mathbf{x}=\mathbf{b}$.

Since $\mathbf{x}_{0}$ is nonzero and there are infinitely many choices for $k$, therefore the system of $A\mathbf{x}=\mathbf{b}$ has infinitely many solutions (i.e., we can choose any arbitrary $k$ and $A(\mathbf{x}_{1}+k\mathbf{x}_{0})=\mathbf{b}$ will be true).

Therefore, If $A\mathbf{x}=\mathbf{b}$ has more than one solution, then it has infinitely many solutions.

Lastly, notice that if $A\mathbf{x}=\mathbf{b}$ does not have more than solution, then it either has one solution or zero solution, completing the proof.
