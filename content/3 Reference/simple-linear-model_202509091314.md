---
publish: true
aliases:
  - Simple Linear Model
created: 2026-04-09T23:07:39.584+07:00
modified: 2026-04-09T23:07:39.585+07:00
published: 2026-04-09T23:07:39.585+07:00
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
Y = \beta_0 + \beta_1X + \epsilon_1, \qquad \epsilon \sim NIID(0,\sigma^2)
\end{equation}
$$

- $Y$: Response or dependent variable
- $X$: Predictor, explanatory, or independent variable
- $\beta_0$: Intercept
- $\beta_1$: Slope
- $\epsilon$: Error component

We denote our sample estimations for the $i$-th observation using $y_{i} = \beta_{0}+\beta_{1}x_{i}+\epsilon_{i}$.

> [!note]
>
> The predictor $X$ in linear model can be a quadratic, log, fractions, etc. As long as it can be substituted to obtain the form above, it’s still considered as a linear model
>
> e.g., $Y=\beta_0+\beta\log(x)+\epsilon$. Substitute with $x^*=\log(x)$, then you can see that it’s a linear model.

## Matrix form

$$
\begin{align*}
\begin{bmatrix}y_1 \\y_2 \\\vdots \\y_n\end{bmatrix}&= \begin{bmatrix}\beta_0 + \beta_1 x_1 + \epsilon_1 \\\beta_0 + \beta_1 x_2 + \epsilon_2 \\\vdots \\\beta_0 + \beta_1 x_n + \epsilon_n\end{bmatrix}\\
&=\begin{bmatrix}1 & x_1 \\1 & x_2 \\\vdots & \vdots \\1 & x_n\end{bmatrix}\begin{bmatrix}\beta_0 \\\beta_1\end{bmatrix}+\begin{bmatrix}\epsilon_1 \\\epsilon_2 \\\vdots \\\epsilon_n\end{bmatrix}\\
\mathbf{y} &= \mathbf{x}\boldsymbol{\beta} + \boldsymbol{\epsilon}; \quad \boldsymbol{\epsilon} \sim MVN(\mathbf{0}, \boldsymbol{\Sigma})
\end{align*}
$$

> [!note]
> This matrix form can be extended for linear model with **multiple predictor**
