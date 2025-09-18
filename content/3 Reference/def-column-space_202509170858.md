---
{"publish":true,"aliases":["Column Space"],"created":"2025-09-17T08:58:53.227+07:00","modified":"2025-09-17T09:11:29.504+07:00","published":"2025-09-17T09:11:29.504+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-17 08:58","status":"baby","parent":["[[matrices]]"]}
---


## Definition

Let $\mathbf{A}$ : [[3 Reference/Def-matrix\|Matrix]] of size $m\times n$

Suppose $C(\mathbf{A})$ is a set whose elements are column vectors with dimension $m$

If all vectors in $C(\mathbf{A})$ can be expressed as a linear combination of $n$ column vectors in $\mathbf{A}$

Then $C(\mathbf{A})$ is **column space** of $\mathbf{A}$

## Example

Let 
$$
\mathbf{A}=\begin{bmatrix}
2 & -4 & 0 & 0 \\
-1 & 2 & 0 & 0 \\
0 & 0 & 1 & 2
\end{bmatrix}
$$

Then the column vector $\begin{pmatrix}4 \\ -2 \\ -3\end{pmatrix}$, which can be expressed as
$$
\begin{pmatrix} 4 \\ -2 \\ -3 \end{pmatrix}
= 2\begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}
+ 0\begin{pmatrix} -4 \\ 2 \\ 0 \end{pmatrix}
- 3\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}
+ 0\begin{pmatrix} 0 \\ 0 \\ 2 \end{pmatrix}
$$
is an element of $C(\mathbf{A})$-the column space of $\mathbf{A}$.
