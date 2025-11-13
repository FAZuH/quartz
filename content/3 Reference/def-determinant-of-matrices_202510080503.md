---
{"publish":true,"aliases":["Determinant of Matrices"],"created":"2025-10-14T04:15:27.074+07:00","modified":"2025-10-14T04:15:27.074+07:00","published":"2025-10-14T04:15:27.074+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-08 05:03","status":"baby","parent":["[[Elementary Linear Algebra]]"]}
---


## Definition

Let $A$ : [[3 Reference/Def-matrix\|Square matrix]] of [[3 Reference/Def-matrix\|order]] $n$

Let
- $a_{ij}$ : Element of $A$ at row $i$ column $j$
- $M_{ij}$ : $(n-1)\times(n-1)$ square submatrix obtained by deleting row $i$ and column $j$ of $A$

Choose any $i \in \{ 1,\dots,n \}$

Then
$$
\det(A) = \sum_{j=1}^n(-1)^{i+j}a_{ij}\det (M_{ij})
$$

> [!note]
> You can choose $j\in \{ 1,\dots,n \}$, and sum over $i=1,\dots,n$ instead