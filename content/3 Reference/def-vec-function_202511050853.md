---
publish: true
aliases:
  - Vec Function
created: 2026-03-25T15:22:40.606+07:00
modified: 2026-03-25T15:22:40.606+07:00
published: 2026-03-25T15:22:40.606+07:00
tags:
  - 
creation-time: 2025-11-05 08:53
status: in progress
parent:
  - "[[matrices]]"
---

## Definition

Let

- $A$ : $n\times m$ [[Def-matrix|matrix]]
- $c\_{1},\dots,c\_{m}$ : [[def-row-and-column-vector_202509240741|Column vectors]] of $A$

Then **Vec function** is defined as
$$
\operatorname{vec}(A) = \begin{bmatrix} c\_{1} \ \vdots \ c\_{m} \end{bmatrix}
$$

## Example

Let $A = \begin{bmatrix} \colorbox{blue}1 & \colorbox{green}3 & \colorbox{red}5 \ \colorbox{blue}2 & \colorbox{green}4 & \colorbox{red}6 \end{bmatrix}$

Then $c\_1 = \begin{bmatrix} \colorbox{blue}1 \ \colorbox{blue}2 \end{bmatrix}$, $c\_2 = \begin{bmatrix} \colorbox{green}3 \ \colorbox{green}4 \end{bmatrix}$, $c\_3 = \begin{bmatrix} \colorbox{red}5 \ \colorbox{red}6 \end{bmatrix}$

$$
\operatorname{vec}(A) = \begin{bmatrix} c\_1 \ c\_2 \ c\_3 \end{bmatrix} = \begin{bmatrix} \colorbox{blue}1 \ \colorbox{blue}2 \ \colorbox{green}3 \ \colorbox{green}4 \ \colorbox{red}5 \ \colorbox{red}6 \end{bmatrix}
$$
