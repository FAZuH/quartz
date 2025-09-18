---
{"publish":true,"aliases":["Partitioned Matrices","Partitioned Matrices"],"created":"2025-09-13T18:58:56.043+07:00","modified":"2025-09-13T01:37:39.000+07:00","published":"2025-09-13T01:37:39.000+07:00","cssclasses":"","creation-time":"2025-07-15 02:40","status":"baby","tag":null,"parent":"[[Elementary Linear Algebra]]"}
---


## Definition
**Partitioned matrix** is a matrix obtained from dividing a bigger matrix by inserting horizontal and vertical rules between selected rows and columns.

## Remark
For example, the following are three possible partitions of a general $3\times 4$ matrix $A$:

Partition of $A$ into four **submatrices** $A_{11},A_{12},A_{21}$ and $A_{22}$ :
$$
A=\left[ \begin{array}{ccc|c}
a_{11} & a_{12} & a_{13} & a_{14} \\
a_{22} & a_{22} & a_{23} & a_{24} \\
\hline
a_{11} & a_{12} & a_{12} & a_{14} \\
\end{array} \right]
=\begin{bmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{bmatrix}
$$

Partition of $A$ into row vectors $\mathbf{r}_{1},\mathbf{r}_{2}$ and $\mathbf{r}_{3}$ :
$$
A=\left[ \begin{array}
a_{11} & a_{12} & a_{13} & a_{14} \\
\hline
a_{22} & a_{22} & a_{23} & a_{24} \\
\hline
a_{11} & a_{12} & a_{12} & a_{14} \\
\end{array} \right]
=\begin{bmatrix}
\mathbf{r}_{1} \\
\mathbf{r}_{2} \\
\mathbf{r}_{3} \\
\end{bmatrix}
$$

Partition of $A$ into column vectors $\mathbf{c}_{1},\mathbf{c}_{2}$ and $\mathbf{c}_{3}$ :
$$
A=\left[ \begin{array}{c|c|c|c}
a_{11} & a_{12} & a_{13} & a_{14} \\
a_{22} & a_{22} & a_{23} & a_{24} \\
a_{11} & a_{12} & a_{12} & a_{14} \\
\end{array} \right]
=\begin{bmatrix}
\mathbf{c}_{1} & \mathbf{c}_{2} & \mathbf{c}_{3} & \mathbf{c}_{4}
\end{bmatrix}
$$
