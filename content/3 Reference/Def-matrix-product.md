---
publish: true
aliases:
  - Matrix Product
created: 2026-04-09T23:07:39.215+07:00
modified: 2026-04-09T23:07:39.216+07:00
published: 2026-04-09T23:07:39.216+07:00
cssclasses: ""
creation-time: 2025-07-15 02:13
status: complete
tag:
parent:
  - "[[matrices]]"
  - "[[linear-algebra]]"
---


## Definition

Let
- $A$ : $m\times r$ [[3 Reference/Def-matrix\|matrix]] 
- $B$ : $r\times n$ matrix

Then the **product** $AB$ is a $m\times n$ matrix, whose entries are determined as follows:
1. To find the entry in row $i$ and column $j$ of $AB$, single out row $i$ from the matrix $A$ and column $j$ from the matrix $B$.
2. Multiply the corresponding entries from the row and column together, and then add up the resulting products. 

## Remark
See [[3 Reference/1.3 Matrices and Matrix Operations#Matrix multiplication\|matrix multiplication]] for example. As shown in the example, we can obtain specific entry $(AB)_{ij}$ only by knowing the $i$-th row of $A$ and $j$-th row of $B$:
$$
(AB)_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{ir}b_{rj}
$$
This formula is called the **row-column rule** for matrix multiplication.

One easy trick to determine the size of matrix multiplication is by looking at the pattern
$$
\begin{array}{ccc}
A & B & &AB \\
\colorbox{green}m\times r & r\times \colorbox{green}n & = & \colorbox{green}m \times \colorbox{green}n
\end{array}
$$
The "inner" size $r$ has to be equal for the multiplication to be defined.
