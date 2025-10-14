---
{"publish":true,"aliases":["Invertibility of Elementary Matrix"],"created":"2025-10-14T04:15:27.065+07:00","modified":"2025-10-14T04:15:27.065+07:00","published":"2025-10-14T04:15:27.065+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-02 14:35","status":"adult","parent":["[[Elementary Linear Algebra]]"]}
---


## Theorem

Let $E$ : Any [[3 Reference/def-elementary-matrix_202510021412\|elementary matrix]]

Then
- $E$ is [[3 Reference/def-inverse-matrix_202509241225\|invertible]]
- $E^{-1}$ is an *also* an elementary matrix

## Proof

If $E$ is an elementary matrix, then $E$ results by performing some [[3 Reference/theorem-elementary-row-operation_202510021405\|elementary row operation]] operation on $I$.

Let $E_{0}$ be the matrix that results when the inverse of this operation is performed on $I$.

Applying theorem [[3 Reference/theorem-row-operations-by-matrix-multiplications_202510021426\|Row Operations by Matrix Multiplications]], and using the fact that inverse row operations cancel the effect of each other, it follows that
$$
E_{0}E = EE_{0} = I
$$

Thus, by definition of [[3 Reference/def-inverse-matrix_202509241225\|inverse matrix]], $E_{0}$ is the inverse of $E_{0}$