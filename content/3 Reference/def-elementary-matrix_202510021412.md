---
publish: true
aliases:
  - Elementary Matrix
created: 2026-04-09T23:07:39.136+07:00
modified: 2026-04-09T23:07:39.137+07:00
published: 2026-04-09T23:07:39.137+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-02 14:12
status: complete
parent:
  - "[[Elementary Linear Algebra]]"
---


## Definition

A [[3 Reference/Def-matrix\|matrix]] $E$ is called an **elementary matrix** if it can be obtained from an [[3 Reference/def-identity-matrix_202509241204\|identity matrix]] by performing a <u>single</u> [[3 Reference/theorem-elementary-row-operation_202510021405\|elementary row operation]].

## Example

$$
(1) \begin{bmatrix}
1 & 0 \\
0 & -3
\end{bmatrix}\quad

(2) \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0
\end{bmatrix}\quad

(3) \begin{bmatrix}
1 & 0 & 3 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}\quad

(4) \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

1. Multiply 2nd row by $-3$
2. Interchange row 2 with row 4
3. Add 3 times row 3 to row 1
4. Multiply row 3 by 1 (Thus $E$ can be an identity matrix)