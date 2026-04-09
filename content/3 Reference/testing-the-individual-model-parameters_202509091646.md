---
publish: true
aliases:
  - Testing the Individual Model Parameters
created: 2026-04-09T23:07:39.631+07:00
modified: 2026-04-09T23:07:39.632+07:00
published: 2026-04-09T23:07:39.632+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-09 16:46
status: in progress
parent:
  - "[[Linear Model]]"
---


## Preliminary

### Variable definitions

Some variables that will be used throughout this page:

- $n :$  Number of observations
- $p + 1 :$  Number of coefficients ($\beta$) in the model
- $t_{q,v} :$  [Point percent function](https://www.notion.so/About-Cumulative-Distribution-Function-and-Percent-Point-Function-124a55f037f280439628f53a00e9d3fe?pvs=21) of a Student’s-t distribution at the $q-$th quantile
- $v = n - (k+1) :$  The degrees of freedom in $t_{q,v}$

### Warning

Failing to reject $H_0$ does not mean that the independent variable does not explain the dependent variable.

Instead, several conclusions are possible:

- There is **no relationship**
- A relationship exists, but a **Type II error** occurred
- A relationship exists, but is **different** than the hypothesized model

The most you can say after testing is:

- If $H_0$ is rejected: There is a sufficient evidence for the hypothesized relationship
- Else: There is insufficient evidence for the hypothesized relationship

### Recommendations

1. First, [[3 Reference/testing-the-overall-utility-of-the-model_202509091646\|test the overall model adequacy]].
    
    If $H_0$ is rejected, continue to step 2
    
    Else, consider hypothesizing a different model
    
2. Conduct t-tests on the most “important” $\beta$ coefficients. Usually only involves $\beta$s involved with higher-order terms
    
    Conducting a series of t-tests leads to an overall high Type I error rate
    

## Assumptions



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



## Test statistic

$$
t = \frac{\hat\beta_i}{s_{\hat \beta_{t}}} \sim t_v
$$

## Hypotheses

|  | **Two-tailed** | **Lower-tailed** | **Upper-tailed** |
| --- | --- | --- | --- |
| **Null hypothesis** | $H_0 : \beta_i = 0$ | $H_0 : \beta_i = 0$ | $H_0 : \beta_i = 0$ |
| **Alternative hypothesis** | $H_a : \beta_i \neq 0$ | $H_a : \beta_i < 0$ | $H_a : \beta_i > 0$ |
| **Rejection region** | $|t| > t_{\alpha/2,v}$ | $t < -t_{\alpha,v}$ | $t > t_{\alpha,v}$ |

## P-value

$$
\begin{align*}

 H_a &: \beta_i > 0,\quad p\text{-value}=
 \begin{cases}
  P/2 & t>0\\
  1 - P/2 & t < 0
 \end{cases}\\ \\

 H_a &: \beta_i < 0,\quad p\text{-value}=
 \begin{cases}
  1 - P/2 & t>0\\
  P/2 & t < 0
 \end{cases}

\end{align*}
$$

## Confidence interval

A $100(1-\alpha)\%$ confidence interval for a $\beta$ parameter is found by:

$$
\hat \beta_i \pm t_v^{-1}(\alpha/2) \times s_{\hat \beta_t}
$$
