---
{"publish":true,"aliases":["Inverse of Partitioned Matrices"],"created":"2025-10-06T03:52:12.555+07:00","modified":"2025-10-06T04:02:20.883+07:00","published":"2025-10-06T04:02:20.883+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-06 03:52","status":"baby","parent":["[[matrices]]"]}
---


## Theorem

Let 
- $T$ : $m\times m$ [[3 Reference/theorem-matrix-invertibility_202509241243\|nonsingular]] [[3 Reference/Def-matrix\|square matrix]]
- $U$ $m\times n$ matrix
- $V$ : $n\times m$ matrix 
- $W$ : $n\times n$ square matrix
-  $A = \begin{bmatrix} T & U \\ V & W \end{bmatrix}$
- $B  = \begin{bmatrix} W & V \\ U & T \end{bmatrix}$

If 
$$Q=W-VT^{-1}U$$

Then
- $A$ and $B$ is nonsingular

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