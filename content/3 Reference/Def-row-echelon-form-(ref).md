---
{"publish":true,"aliases":["Row Echelon Form (REF)"],"created":"2025-10-14T04:15:27.049+07:00","modified":"2025-10-14T04:15:27.049+07:00","published":"2025-10-14T04:15:27.049+07:00","cssclasses":"","creation-time":"2025-07-15 01:57","status":"adult","tags":null,"parent":["[[linear-algebra|linear algebra]]"]}
---


## Definition

**Row echelon form** is defined as the [[3 Reference/1.1 Introduction to Systems of Linear Equations#Definition Augmented matrix\|augmented matrix]] of a [[3 Reference/1.1 Introduction to Systems of Linear Equations#Definition Linear system\|linear system]] with the following properties:
1. If a row does not consist entirely of zeros, then the first nonzero number in the row is a 1. We call this a **leading 1.** ^def-leading1
2. If there are any rows that consist entirely of zeros, then they are grouped together at the bottom of the [[3 Reference/Def-matrix\|matrix]]. 
3. In any two successive rows that do not consist entirely of zeros, the leading 1 in the lower row occurs farther to the right than the leading 1 in the higher row. 

## Remark

For example, 
$$
\begin{bmatrix}
1 & 0 &  3 & -1 \\
0 & 1 & -4 & 2
\end{bmatrix}
$$

The above augmented matrix correspond to the linear system 
$$
\begin{matrix}
x &  & +\ 3z & = & -1 \\
 & y & -\ 4z & = & 2
\end{matrix}
$$

Since $x$ and $y$ correspond to the leading 1's in the augmented matrix, we call them **leading variables**. The remaining variables (in this case $z$) are called **free variables**. ^def-leading-free-variable