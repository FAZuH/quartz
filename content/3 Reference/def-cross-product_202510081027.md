---
{"publish":true,"aliases":["Cross Product"],"created":"2025-10-14T04:15:27.051+07:00","modified":"2025-10-14T04:15:27.051+07:00","published":"2025-10-14T04:15:27.051+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-08 10:27","status":"baby","parent":["[[Elementary Linear Algebra]]"]}
---


## Definition

Let
- $\mathbf{u}=(u_{1},u_{2},u_{3})$ vectors in 3-space
- $\mathbf{v}=(v_{1},v_{2},v_{3})$ vectors in 3-space

Then
- We define the **cross product** $u\times v$ as
$$
\begin{align}
u\times v & = (u_{2}v_{3}-u_{3}v_{2},u_{3}v_{1}-u_{1}v_{3},u_{1}v_{2}-u_{2}v_{1}) \\
 & = \left(\begin{vmatrix}
u_{2} & u_{3} \\
v_{2} & v_{3}
\end{vmatrix},-\begin{vmatrix}
u_{1} & u_{3} \\
v_{1} & v_{3}
\end{vmatrix},\begin{vmatrix}
u_{1} & u_{2} \\
v_{1} & v_{2}
\end{vmatrix}\right)
\end{align}
$$

## Tip: Memorization

Look at the determinant form
$$
u\times v = \left(\begin{vmatrix}
u_{2} & u_{3} \\
v_{2} & v_{3}
\end{vmatrix},-\begin{vmatrix}
u_{1} & u_{3} \\
v_{1} & v_{3}
\end{vmatrix},\begin{vmatrix}
u_{1} & u_{2} \\
v_{1} & v_{2}
\end{vmatrix}\right)
$$

Imagine 
$$
\begin{bmatrix}
u_{1} & u_{2} & u_{3} \\
v_{1} & v_{2} & v_{3}
\end{bmatrix}
$$

- For first $u\times v$ component, just exclude column 1.
- Second component, exclude column 2, but negative
- Third component, exclude column 3