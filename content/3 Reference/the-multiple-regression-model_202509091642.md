---
publish: true
aliases:
  - The Multiple Regression Model
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
tags:
  - 
creation-time: 2025-09-09 16:42
status: in progress
parent:
  - "[[Linear Model]]"
---

## General form of the model

$$
Y = \beta\_0 + \beta\_1X\_1 + \dots + \beta\_k X\_k + \epsilon; \quad \epsilon \sim NIID(0, \sigma^2)
$$

Where:

- $Y :$  Response variable
- $X\_j :$  $j$-th predictor variable
- $\beta\_0 :$  Intercept
- $\beta\_j :$  $j$-th regression coefficient
- $\epsilon :$  Error component
- $k$ : Amount of predictor variables

## Model assumptions

- $y\_i$ mutually indepentent between each other
- $\operatorname{Var}(y\_i) = \sigma^2 :$  The model has constant [[Def-variance|variance]]
- $Y, \epsilon :$  Probabilistic part of the model
- $E(Y|X) = \beta\_0 + \dots+\beta\_kX\_k :$  Deterministic part of the model

The assumptions for the error component $\epsilon\_{i}$ is the same as the one on simple linear regression model: [[assumptions-for-the-error-component_202509091314|Assumptions for the Error Component]].

## Interpretation of model components

- **Slope**: $\beta\_0$ is the [[Def-mean|mean]] value of $Y$ at $X\_1=X\_2=\dots=X\_p = 0$
- **Regression coefficients**: For an increase in $X\_i$ by 1 unit, then mean of $y$ increases by $\beta\_i$ (assuming other predictors are constant)

## Elasticity

**Elasticity** measures the _relative_ change in the dependent variable $Y$ due to a _relative_ change in $X\_{k}$.

**Semi-elasticity** measures the _relative_ change in the dependent variable $Y$ due to an (absolute) one-unit-change in $X\_{k}$.

For a linear regression, the elasticity of $Y$ with respect to $X\_{k}$ is
$$
\begin{align}
\frac{\partial E\[y\_{i}|x\_{i}]/E\[y\_{i}|x\_{i}]}{\partial x\_{ik}/x\_{ik}}
\= & \frac{\partial E\[y\_{i}|x\_{i}]}{\partial x\_{ik}} \cdot \frac{x\_{ik}}{E\[y\_{i}|x\_{i}]} \\
\= &\
\frac{x\_{ik}}{x'_{i}\beta}\beta_{k}
\end{align}
$$

Linear regression for $\log(y\_{i})=x\_{i}'\beta+\varepsilon\_{i}$, the elasticity of $Y$ with respect to $X\_{k}$ is
$$
\frac{\partial E\[y\_{i}|x\_{i}]/E\[y\_{i}|x\_{i}]}{\partial x\_{ik}/x\_{ik}}=
\beta\_{k}x\_{ik}
$$

$\beta\_{k}$ measures the relative change in $Y$ due to a change in $X\_{k}$ by one unit. Here, $b\_{k}$ is called the semi-elasticity of $Y$ with respect to $X\_{k}$.
