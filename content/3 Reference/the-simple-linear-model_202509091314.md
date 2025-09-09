---
{"publish":true,"aliases":["The Simple Linear Model"],"created":"2025-09-09T13:14:06.706+07:00","modified":"2025-09-09T13:18:25.354+07:00","published":"2025-09-09T13:18:25.354+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 13:14","status":"baby","parent":["[[linear-model]]"]}
---


## The model

### General Form

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

> [!note]
> 
> The predictor $X$ in linear model can be a quadratic, log, fractions, etc. As long as it can be substituted to obtain the form above, it’s still considered as a linear model
> 
> e.g., $Y=\beta_0+\beta\log(x)+\epsilon$. Substitute with $x^*=\log(x)$, then you can see that it’s a linear model.

### Matrix Form

$$
\begin{align*}
\begin{bmatrix}y_1 \\y_2 \\\vdots \\y_n\end{bmatrix}&= \begin{bmatrix}\beta_0 + \beta_1 x_1 + \epsilon_1 \\\beta_0 + \beta_1 x_2 + \epsilon_2 \\\vdots \\\beta_0 + \beta_1 x_n + \epsilon_n\end{bmatrix}\\
&=\begin{bmatrix}1 & x_1 \\1 & x_2 \\\vdots & \vdots \\1 & x_n\end{bmatrix}\begin{bmatrix}\beta_0 \\\beta_1\end{bmatrix}+\begin{bmatrix}\epsilon_1 \\\epsilon_2 \\\vdots \\\epsilon_n\end{bmatrix}\\
\mathbf{y} &= \mathbf{x}\boldsymbol{\beta} + \boldsymbol{\epsilon}; \quad \boldsymbol{\epsilon} \sim MVN(\mathbf{0}, \boldsymbol{\Sigma})
\end{align*}
$$

> [!note]
> This matrix form can be extended for linear model with **multiple predictor**

### Why is the model called simple?

It is called simple because there is only one predictor, $X$. When there is more than one predictor, say $p$ variables: $X_1, X_2, \dots, X_p$, then the model is called multiple. See [The Multiple Linear Regression Model](The%20Multiple%20Linear%20Regression%20Model%20135a55f037f280d18b95db903d71af97.md).

### What is the interpretation of $β_1$ in this model?

When $x_i$ is increased by 1 unit, there is a change (increase or decrease depends on the sign) of $β_1$ unit in $y_i$.

## Model assumptions

The $NIID(0, \sigma^2)$ *(Normally and Independently Identically Distributed)* assumption for the error component $(\epsilon_i)$ stands for:

1. Zero mean
2. Normal distribution
3. Constant variance
4. Independency

The above assumptions can be further elaborated as:

### 1. Zero mean assumption

Since $\epsilon_i$ is deviation between $y_i$ and $\beta_0 + \beta_1x_i$, ideally, the error should be minimized to give the most accurate prediction, i.e., the mean of the error should be as close to 0 as possible. This is written mathematically as $E(y_i) = \beta_0 + \beta_1x_i$, or $E(\epsilon_i) = 0$

### 2. Normally distributed assumption

The model should be as close as possible to each data point. This assumptions prevents overfit or underfit problem.

The error should be small. And if it’s large, the frequency should be less than those with smaller deviation.

![[assets/image-4.png|600]]

> Illustration of normality assumption for error terms

### 3. Constant variance assumption (homoscedasticity)

Variation of $\epsilon_i$ (and hence, variation of $y_i$) is the same across conditions represented by $x_i$. In simpler terms, regardless of the value of the predictor $(x_i)$, the spread (variance) of the error term should remain constant.

![[assets/image-5.png|600]]

> Consequence of violating homoscedasticity assumption

### 4. Independency assumption

Error of a condition is not related with others; knowing the error for one observation should give no information about the error of another.
