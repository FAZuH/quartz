---
{"publish":true,"aliases":["The Multiple Regression Model"],"created":"2025-09-13T18:59:07.028+07:00","modified":"2025-09-16T16:50:52.563+07:00","published":"2025-09-16T16:50:52.563+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:42","status":"baby","parent":["[[Linear Model]]"]}
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
- $k$ : Amount of predictor variables

## Model assumptions

- $y_i$ mutually indepentent between each other
- $\operatorname{Var}(y_i) = \sigma^2 :$  The model has constant [[3 Reference/Def-variance\|variance]]
- $Y, \epsilon :$  Probabilistic part of the model
- $E(Y|X) = \beta_0 + \dots+\beta_kX_k :$  Deterministic part of the model

The assumptions for the error component $\epsilon_{i}$ is the same as the one on simple linear regression model: [[3 Reference/assumptions-for-the-error-component_202509091314\|Assumptions for the Error Component]].

## Interpretation of model components

- **Slope**: $\beta_0$ is the [[3 Reference/Def-mean\|mean]] value of $Y$ at $X_1=X_2=\dots=X_p = 0$
- **Regression coefficients**: For an increase in $X_i$ by 1 unit, then mean of $y$ increases by $\beta_i$ (assuming other predictors are constant)

## Elasticity

**Elasticity** measures the *relative* change in the dependent variable $Y$ due to a *relative* change in $X_{k}$.

**Semi-elasticity** measures the *relative* change in the dependent variable $Y$ due to an (absolute) one-unit-change in $X_{k}$.

For a linear regression, the elasticity of $Y$ with respect to $X_{k}$ is
$$
\begin{align}
\frac{\partial E[y_{i}|x_{i}]/E[y_{i}|x_{i}]}{\partial x_{ik}/x_{ik}} 
= & \frac{\partial E[y_{i}|x_{i}]}{\partial x_{ik}} \cdot \frac{x_{ik}}{E[y_{i}|x_{i}]} \\
= &  
\frac{x_{ik}}{x'_{i}\beta}\beta_{k}
\end{align}
$$

Linear regression for $\log(y_{i})=x_{i}'\beta+\varepsilon_{i}$, the elasticity of $Y$ with respect to $X_{k}$ is
$$
\frac{\partial E[y_{i}|x_{i}]/E[y_{i}|x_{i}]}{\partial x_{ik}/x_{ik}}= 
\beta_{k}x_{ik}
$$

$\beta_{k}$ measures the relative change in $Y$ due to a change in $X_{k}$ by one unit. Here, $b_{k}$ is called the semi-elasticity of $Y$ with respect to $X_{k}$.

