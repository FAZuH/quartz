---
{"publish":true,"aliases":["The Multiple Regression Model"],"created":"2025-09-09T16:42:32.568+07:00","modified":"2025-09-09T17:08:58.264+07:00","published":"2025-09-09T17:08:58.264+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:42","status":"baby","parent":["[[linear-model]]"]}
---


## General form of the model

$$
Y = \beta_0 + \beta_1X_1 + \dots + \beta_k X_k + \epsilon; \quad \epsilon \sim NIID(0, \sigma^2)
$$

Where:

- $Y :$  Response variable
- $X_j :$  $j$-th predictor variable
- $\beta_0 :$  Intercept
- $\beta_j :$  $j$-th regression coefficient
- $\epsilon :$  Error component

## Model assumptions

- $y_i$ mutually indepentent between each other
- $Var(y_i) = \sigma^2 :$  The model has constant variance
- $Y, \epsilon :$  Probabilistic part of the model
- $E(Y|X) = \beta_0 + \dots+\beta_kX_k :$  Deterministic part of the model

### Assumptions for the error component

$\epsilon \sim NIID(0,\sigma^2)$

Or, in other words:

- Normally distributed
- Mutually independent
- $E(\varepsilon_i) = 0 :$ Mean of $\varepsilon_i$ is 0
- $Var(\varepsilon_i) = \sigma^2 :$ Variance of $\varepsilon_i$ is constant

Read further: https://people.duke.edu/~rnau/testing.htm

## Interpretation of model components

### The slope

$\beta_0$ is the mean value of $Y$ at $X_1=X_2=\dots=X_p = 0$

### The regression coefficients

For an increase in $X_i$ by 1 unit, then mean of $y$ increases by $\beta_i$ (assuming other predictors are constant)

It can be written mathematically as
$$
\frac{\nabla E[y_{i}|x_{i}]}{\nabla x_{k}} = \beta_{k}, \quad \nabla x_{k}=1
$$
Or for continuous regressors:
$$
\frac{\partial E[y_{i}|x_{i}]}{\partial x_{ik}} = \beta_{k}
$$

## Elasticity

**Elasticity** measures the *relative* change in the dependent variable $Y$ due to a *relative* change in $X_{k}$.

**Semi-elasticity** measures the *relative* change in the dependent variable $Y$ due to an (absolute) one-unit-change in $X_{k}$.

For a linear regression, the elasticity of $Y$ with respect to $X_{k}$ is
$$
\begin{align}
& \frac{\partial E[y_{i}|x_{i}]/E[y_{i}|x_{i}]}{\partial x_{ik}/x_{ik}} \\
= & \frac{\partial E[y_{i}|x_{i}]}{\partial x_{ik}} \cdot \frac{x_{ik}}{E[y_{i}|x_{i}]} \\
= &  
\frac{x_{ik}}{x'_{i}\beta}\beta_{k}
\end{align}
$$

Linear regression for $\log y_{i}=x_{i}'\beta+\varepsilon_{i}$, the elasticity of $Y$ with respect to $X_{k}$ is
$$
\frac{\partial E[y_{i}|x_{i}]/E[y_{i}|x_{i}]}{\partial x_{ik}/x_{ik}}= 
\beta_{k}x_{ik}
$$

$\beta_{k}$ measures the relative change in $Y$ due to a change in $X_{k}$ by one unit. Here, $b_{k}$ is called the semi-elasticity of $Y$ with respect to $X_{k}$.

