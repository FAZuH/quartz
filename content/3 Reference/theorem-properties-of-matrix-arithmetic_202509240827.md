---
{"publish":true,"aliases":["Properties of Matrix Arithmetic"],"created":"2025-09-24T08:27:21.903+07:00","modified":"2025-10-02T02:22:13.875+07:00","published":"2025-10-02T02:22:13.875+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-24 08:27","status":"adult","parent":["[[linear-algebra|linear algebra]]","[[3 Reference/structure/matrices]]"]}
---


## Theorem

Assuming that the sizes of the [[matrices]] are such that the indicated operations can be performed, the following rules of [[3 Reference/Def-matrix\|matrix]] arithmetic are valid.

$$
\begin{align}
(a) \quad & A + B = B + A && \text{[Commutative law for matrix addition]} \\
(b) \quad & A + (B + C) = (A + B) + C && \text{[Associative law for matrix addition]} \\
(c) \quad & A(BC) = (AB)C && \text{[Associative law for matrix multiplication]} \\
(d) \quad & A(B + C) = AB + AC && \text{[Left distributive law]} \\
(e) \quad & (B + C)A = BA + CA && \text{[Right distributive law]} \\
(f) \quad & A(B - C) = AB - AC && \\
(g) \quad & (B - C)A = BA - CA && \\
(h) \quad & a(B + C) = aB + aC && \\
(i) \quad & a(B - C) = aB - aC && \\
(j) \quad & (a + b)C = aC + bC && \\
(k) \quad & (a - b)C = aC - bC && \\
(l) \quad & a(bC) = (ab)C && \\
(m) \quad & a(BC) = (aB)C = B(aC) &&
\end{align}
$$

## Remark

Unlike real numbers arithmetic where $ab=ba$, the equality of $AB$ and $BA$ can fail for 3 possible reasons:
1. $AB$ is defined, but not $BA$ (e.g., when $A$ is $2\times 3$ and $B$ is $3\times4$)
2. $AB$ and $BA$ is defined, but have different sizes (e.g., when $A$ is $2\times 3$ and $B$ is $3\times 2$)
3. $AB$ and $BA$ is defined, have same size, but is different
   
   Let
	$$
	A = \begin{bmatrix} -1 & 0 \\ 2 & 3 \end{bmatrix} \quad \text{and} \quad B = \begin{bmatrix} 1 & 2 \\ 3 & 0 \end{bmatrix}
	$$
	Multiplying gives
	$$
	AB = \begin{bmatrix} -1 & -2 \\ 11 & 4 \end{bmatrix} \quad \text{and} \quad BA = \begin{bmatrix} 3 & 6 \\ -3 & 0 \end{bmatrix}
	$$
	Thus, $AB \neq BA$.
