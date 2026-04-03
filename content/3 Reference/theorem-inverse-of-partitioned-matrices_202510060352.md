---
publish: true
aliases:
  - Inverse of Partitioned Matrices
created: 2026-03-25T15:22:40.606+07:00
modified: 2026-03-25T15:22:40.606+07:00
published: 2026-03-25T15:22:40.606+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 03:52
status: in progress
parent:
  - "[[matrices]]"
---


## Theorem

Let 
- $T$ : $m\times m$ [[3 Reference/theorem-matrix-invertibility_202509241243\|nonsingular]] [[3 Reference/Def-matrix\|square matrix]]
- $U$ $m\times n$ matrix
- $V$ : $n\times m$ matrix 
- $W$ : $n\times n$ square matrix

Let 
$$Q=W-VT^{-1}U$$

If $Q$ is [[3 Reference/theorem-matrix-invertibility_202509241243\|invertible]]

Then $A$ and $B$ is nonsingular

$$
\begin{align*}
\begin{bmatrix}
T & U \\
V & W
\end{bmatrix}^{-1}
&=
\begin{bmatrix}
T^{-1}+T^{-1}UQ^{-1}VT^{-1} & -T^{-1}UQ^{-1} \\
-Q^{-1}VT^{-1} & Q^{-1}
\end{bmatrix} \\
&=
\begin{bmatrix}
T^{-1} & 0 \\
0 & 0
\end{bmatrix}
+
\begin{bmatrix}
-T^{-1}U \\
I_{n}
\end{bmatrix}
Q^{-1}
\begin{bmatrix}
-VT^{-1} & I_{n}
\end{bmatrix} \\ \\

\begin{bmatrix}
W & V \\
U & T
\end{bmatrix}^{-1}
&=
\begin{bmatrix}
Q^{-1} & -Q^{-1}VT^{-1} \\
-T^{-1}UQ^{-1} & T^{-1}+T^{-1}UQ^{-1}VT^{-1}
\end{bmatrix} \\
&=
\begin{bmatrix}
0 & 0 \\
0 & T^{-1}
\end{bmatrix}
+
\begin{bmatrix}
I_n \\
-T^{-1}U
\end{bmatrix}
Q^{-1}
\begin{bmatrix}
I_n & -VT^{-1}
\end{bmatrix}
\end{align*}
$$

> [!tip]
> To make it easier to memorize,
> 
> Let 
> - $t=T^{-1}$
> - $u=T^{-1}U$
> - $v=VT^{-1}$
> - $q=Q^{-1}=(W-vU)^{-1}$
> 
> Then
> $$
> \begin{align*}
> \begin{bmatrix}
> T & U \\
> V & W
> \end{bmatrix}^{-1}
> &=
> \begin{bmatrix}
> t & 0 \\
> 0 & 0
> \end{bmatrix}
> +
> \begin{bmatrix}
> -u \\
> I_{n}
> \end{bmatrix}
> q
> \begin{bmatrix}
> -v & I_{n}
> \end{bmatrix} \\ \\
> 
> \begin{bmatrix}
> W & V \\
> U & T
> \end{bmatrix}^{-1}
> &=
> \begin{bmatrix}
> 0 & 0 \\
> 0 & t
> \end{bmatrix}
> +
> \begin{bmatrix}
> I_n \\
> -u
> \end{bmatrix}
> q
> \begin{bmatrix}
> I_n & -v
> \end{bmatrix}
> \end{align*}
> $$