---
{"publish":true,"aliases":["Generalized Inverse Matrix","Generalized Inverse","G-Inverse"],"created":"2025-10-14T04:15:27.064+07:00","modified":"2025-10-14T04:15:27.064+07:00","published":"2025-10-14T04:15:27.064+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-08 03:04","status":"adult","parent":["[[matrices]]"]}
---


## Definition

Let 
- $A$ : [[3 Reference/Def-matrix\|Matrix]] of size $m\times n$
- $G$ : Matrix of size $n\times m$

If
$$
AGA=A
$$

Then we call $G$ the **generalized inverse** (or g-inverse) of $A$

## Obtaining g-inverse matrix: General

Let $A$ : Matrix of size $m\times n$

1. Determine [[3 Reference/Def-matrix\|square]] [[3 Reference/def-partitioned-matrices-and-submatrix\|submatrix]] $M$ of [[3 Reference/Def-matrix\|order]] $\operatorname{rank}(A)$ that is [[3 Reference/theorem-matrix-invertibility_202509241243\|invertible]]
2. Find $M^{-1}$
3. Obtain $(M^{-1})^T$
4. Create [[3 Reference/def-zero-matrix_202509241049\|zero matrix]] of size $n\times m$, and place $(M^{-1})^T$ in positions corresponding to where $M$ was extracted from $A$

The result from the last step is $A^{-1}$, the generalized inverse of $A$ satisfying $AA^{-1}A=A$

## Obtaining g-inverse matrix: Schur complement

