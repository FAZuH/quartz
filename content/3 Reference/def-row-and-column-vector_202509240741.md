---
{"publish":true,"aliases":["Row Vector","Column Vector","Row and Column Vector"],"created":"2025-10-14T04:15:27.072+07:00","modified":"2025-10-14T04:15:27.072+07:00","published":"2025-10-14T04:15:27.072+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-24 07:41","status":"adult","parent":["[[Elementary Linear Algebra]]"]}
---


## Definition

For an $m \times n$ [[3 Reference/Def-matrix\|matrix]]

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

the vectors

$$
\begin{align}
\mathbf{r}_1 &= [a_{11} \, a_{12} \, \cdots \, a_{1n}] \\
\mathbf{r}_2 &= [a_{21} \, a_{22} \, \cdots \, a_{2n}] \\
\vdots \\
\mathbf{r}_m &= [a_{m1} \, a_{m2} \, \cdots \, a_{mn}]
\end{align}
$$

in $R^n$ that are formed from the rows of $A$ are called the row vectors of $A$, and the vectors

$$
\mathbf{c}_1 = \begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{m1} \end{bmatrix}, \quad
\mathbf{c}_2 = \begin{bmatrix} a_{12} \\ a_{22} \\ \vdots \\ a_{m2} \end{bmatrix}, \quad \cdots, \quad
\mathbf{c}_n = \begin{bmatrix} a_{1n} \\ a_{2n} \\ \vdots \\ a_{mn} \end{bmatrix}
$$

in $R^m$ formed from the columns of $A$ are called the column vectors of $A$.