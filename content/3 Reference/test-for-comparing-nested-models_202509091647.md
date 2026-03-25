---
publish: true
aliases:
  - Test for Comparing Nested Models
created: 2026-03-25T15:22:40.588+07:00
modified: 2026-03-25T15:22:40.588+07:00
published: 2026-03-25T15:22:40.588+07:00
tags:
  - 
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
  E(y) = \beta\_0 + \beta\_1 x\_1 + \dots + \beta\_g x\_g
  $$

- Reduced/restricted model: The simpler of the nested models.

  $$
  \begin{align\*}
  E(y) =\ &\beta\_0 + \beta\_1 x\_1 + \dots + \beta\_g x\_g\\
  &\textcolor{yellow}{+\beta\_{g+1}x\_{g+1} + \dots+\beta\_kx\_k}
  \end{align\*}
  $$

## Steps

1. Determine the complete and reduced models
2. Determine the decision rule
3. Compute the test statistic
4. Make a conclusion

## Hypotheses

- $H\_0 : \beta\_{g + 1} + \beta\_{g + 2} = \dots = \beta\_k = 0$
- $H\_1 :$  Atleast one of the $\beta$ coefficients being tested is not $0$

## Test statistic

$$
F = \frac{(SSE\_R - SSE\_C)/\text{df}\_1}{SSE\_C/\text{df}\_2}
$$

Where:

- $\text{df}\_1 :$  Amount of coefficients being compared/tested
- $\text{df}\_2 = n - (p + 1)$
- $SSE\_C = s\_C^2\times \text{df}\_C$
- $SSE\_R = s\_R^2\times \text{df}\_R$
- $MSE\_C = SSE\_C / \text{df}\_2$
- $n :$  Total sample size
- $p :$  Number of predictors
- $R :$ Reduced
- $C :$  Complete

## Decision rule

Reject $H\_0$, if at least one of

- $F > F\_\alpha$, at degrees of freedoms $\text{df}\_1$ and $\text{df}\_2$ ([[test-for-comparing-nested-models_202509091647#Test statistic|See here]])
- $\alpha > \text{p-value}$
