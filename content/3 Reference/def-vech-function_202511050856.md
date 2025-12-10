---
{"publish":true,"aliases":["Vech Function"],"created":"2025-11-05T08:56:34.781+07:00","modified":"2025-12-10T14:25:32.732+07:00","published":"2025-12-10T14:25:32.732+07:00","tags":[null],"cssclasses":"","creation-time":"2025-11-05 08:56","status":"baby","parent":["[[matrices]]"]}
---


## Definition

Let $A$ : $n\times n$ [[3 Reference/def-symmetric-matrix_202509241413\|symmetric matrix]] 

Then **vech function** (half-vectorization) stacks the lower triangular elements column-by-column: $$ \operatorname{vech}(A) = \begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{n1} \\ a_{22} \\ a_{32} \\ \vdots \\ a_{n2} \\ a_{33} \\ \vdots \\ a_{nn} \end{bmatrix} $$

The vech function is a mapping of $R^{n\times n}\mapsto R^{n(n+1)/2}$

## Example

$$
\operatorname{vech}\left(\begin{bmatrix}
\colorbox{blue}1 & 2 & 3 \\
\colorbox{blue}2 & \colorbox{green}4 & 5 \\
\colorbox{blue}3 & \colorbox{green}5 & \colorbox{red}6
\end{bmatrix}\right) = \begin{bmatrix}
\colorbox{blue}1 \\
\colorbox{blue}2 \\
\colorbox{blue}3 \\
\colorbox{green}4 \\
\colorbox{green}5 \\
\colorbox{red}6
\end{bmatrix}
$$