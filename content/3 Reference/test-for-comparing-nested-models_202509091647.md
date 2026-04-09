---
publish: true
aliases:
  - Test for Comparing Nested Models
created: 2026-04-09T23:07:39.629+07:00
modified: 2026-04-09T23:07:39.630+07:00
published: 2026-04-09T23:07:39.630+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-09 16:47
status: in progress
parent:
  - "[[Linear Model]]"
---



In regression analysis, we often want to determine which one among a set of candidate models best fits the data. This page discusses a **test for comparing nested models**.

## Terms

- Nested model: Two models are nested if one model contains all the terms of the second model and at least one additional term.
- Complete/full model: The more complex of the nested models.
    
    $$
    E(y) = \beta_0 + \beta_1 x_1 + \dots + \beta_g x_g
    $$
    
- Reduced/restricted model: The simpler of the nested models.
    
    $$
    \begin{align*}
    E(y) =\ &\beta_0 + \beta_1 x_1 + \dots + \beta_g x_g\\
    &\textcolor{yellow}{+\beta_{g+1}x_{g+1} + \dots+\beta_kx_k}
    \end{align*}
    $$
    

## Steps

1. Determine the complete and reduced models
2. Determine the decision rule
3. Compute the test statistic
4. Make a conclusion

## Hypotheses

- $H_0 : \beta_{g + 1} + \beta_{g + 2} = \dots = \beta_k = 0$
- $H_1 :$  Atleast one of the $\beta$ coefficients being tested is not $0$

## Test statistic

$$
F = \frac{(SSE_R - SSE_C)/\text{df}_1}{SSE_C/\text{df}_2}
$$

Where:

- $\text{df}_1 :$  Amount of coefficients being compared/tested
- $\text{df}_2 = n - (p + 1)$
- $SSE_C = s_C^2\times \text{df}_C$
- $SSE_R = s_R^2\times \text{df}_R$
- $MSE_C = SSE_C / \text{df}_2$
- $n :$  Total sample size
- $p :$  Number of predictors
- $R :$ Reduced
- $C :$  Complete

## Decision rule

Reject $H_0$, if at least one of
- $F > F_\alpha$, at degrees of freedoms $\text{df}_1$ and $\text{df}_2$ ([[3 Reference/test-for-comparing-nested-models_202509091647#Test statistic\|See here]])
- $\alpha > \text{p-value}$
