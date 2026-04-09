---
publish: true
aliases:
  - Vec Function
created: 2026-04-09T23:07:39.350+07:00
modified: 2026-04-09T23:07:39.350+07:00
published: 2026-04-09T23:07:39.350+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-11-05 08:53
status: in progress
parent:
  - "[[matrices]]"
---


## Definition

Let 
- $A$ : $n\times m$ [[3 Reference/Def-matrix\|matrix]]
- $c_{1},\dots,c_{m}$ : [[3 Reference/def-row-and-column-vector_202509240741\|Column vectors]] of $A$

Then **Vec function** is defined as
$$
\operatorname{vec}(A) = \begin{bmatrix} c_{1} \\ \vdots \\ c_{m} \end{bmatrix}
$$

## Example

Let $A = \begin{bmatrix} \colorbox{blue}1 & \colorbox{green}3 & \colorbox{red}5 \\ \colorbox{blue}2 & \colorbox{green}4 & \colorbox{red}6 \end{bmatrix}$

Then $c_1 = \begin{bmatrix} \colorbox{blue}1 \\ \colorbox{blue}2 \end{bmatrix}$, $c_2 = \begin{bmatrix} \colorbox{green}3 \\ \colorbox{green}4 \end{bmatrix}$, $c_3 = \begin{bmatrix} \colorbox{red}5 \\ \colorbox{red}6 \end{bmatrix}$

$$
\operatorname{vec}(A) = \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} \colorbox{blue}1 \\ \colorbox{blue}2 \\ \colorbox{green}3 \\ \colorbox{green}4 \\ \colorbox{red}5 \\ \colorbox{red}6 \end{bmatrix}
$$