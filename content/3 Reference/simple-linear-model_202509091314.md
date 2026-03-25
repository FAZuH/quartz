---
publish: true
aliases:
  - Simple Linear Model
created: 2026-03-25T15:22:40.596+07:00
modified: 2026-03-25T15:22:40.596+07:00
published: 2026-03-25T15:22:40.596+07:00
tags:
  - 
creation-time: 2025-09-09 13:14
status: in progress
parent:
  - "[[Linear Model]]"
---

## General form

$$
\begin{equation}
Y = \beta\_0 + \beta\_1X + \epsilon\_1, \qquad \epsilon \sim NIID(0,\sigma^2)
\end{equation}
$$

- $Y$: Response or dependent variable
- $X$: Predictor, explanatory, or independent variable
- $\beta\_0$: Intercept
- $\beta\_1$: Slope
- $\epsilon$: Error component

We denote our sample estimations for the $i$-th observation using $y\_{i} = \beta\_{0}+\beta\_{1}x\_{i}+\epsilon\_{i}$.

> [!note]
>
> The predictor $X$ in linear model can be a quadratic, log, fractions, etc. As long as it can be substituted to obtain the form above, it’s still considered as a linear model
>
> e.g., $Y=\beta\_0+\beta\log(x)+\epsilon$. Substitute with $x^\*=\log(x)$, then you can see that it’s a linear model.

## Matrix form

$$
\begin{align\*}
\begin{bmatrix}y\_1 \y\_2 \\\vdots \y\_n\end{bmatrix}&= \begin{bmatrix}\beta\_0 + \beta\_1 x\_1 + \epsilon\_1 \\\beta\_0 + \beta\_1 x\_2 + \epsilon\_2 \\\vdots \\\beta\_0 + \beta\_1 x\_n + \epsilon\_n\end{bmatrix}\\
&=\begin{bmatrix}1 & x\_1 \1 & x\_2 \\\vdots & \vdots \1 & x\_n\end{bmatrix}\begin{bmatrix}\beta\_0 \\\beta\_1\end{bmatrix}+\begin{bmatrix}\epsilon\_1 \\\epsilon\_2 \\\vdots \\\epsilon\_n\end{bmatrix}\\
\mathbf{y} &= \mathbf{x}\boldsymbol{\beta} + \boldsymbol{\epsilon}; \quad \boldsymbol{\epsilon} \sim MVN(\mathbf{0}, \boldsymbol{\Sigma})
\end{align\*}
$$

> [!note]
> This matrix form can be extended for linear model with **multiple predictor**
