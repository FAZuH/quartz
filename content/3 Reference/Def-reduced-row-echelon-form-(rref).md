---
{"publish":true,"aliases":"Definition of Reduced Row Echelon Form (RREF) Reduced Row Echelon Form (RREF)","cssclasses":""}
---


## Definition

**Reduced row echelon form** is defined as a [[3 Reference/Def-row-echelon-form-(ref)\|row echelon form]] with the following additional property:
- Each column that contains a [[3 Reference/Def-row-echelon-form-(ref)#^def-leading1\|leading 1]] has zeros everywhere else in that column. 

## Remark
For example, 
$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

[[3 Reference/1.1 Introduction to Systems of Linear Equations#Definition Solution\|Solution set]] of a linear system can be obtained by its reduced row echelon form. For example, consider the following augmented matrix:
$$
\begin{bmatrix}
1 & 0 & 0 & 0 & 3 \\
0 & 1 & 0 & 0 & -1 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 5
\end{bmatrix}
$$
This matrix is in reduced row echelon form and correspond the system of equation
$$
\begin{matrix}
x_{1}&&&&=& 3 \\
&x_{2}&&&=& -1 \\
&&x_{3}&&=& 0 \\
&&&x_{4}&=& 5 \\
\end{matrix}
$$
Thus, the system has 1 solutions, which is $(3,-1,0,5)$.

> [!tip]
> We can use [[3 Reference/1.1 Introduction to Systems of Linear Equations#Theorem Elementary row operations\|elementary row operations]] to transform an augmented matrix to a reduced row echelon form to obtain its solution.
