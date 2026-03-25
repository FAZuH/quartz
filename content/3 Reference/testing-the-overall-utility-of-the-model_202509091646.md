---
publish: true
aliases:
  - Testing the Overall Utility of the  Model
created: 2026-03-25T15:22:40.596+07:00
modified: 2026-03-25T15:22:40.596+07:00
published: 2026-03-25T15:22:40.596+07:00
tags:
  - 
creation-time: 2025-09-09 16:46
status: in progress
parent:
  - "[[Linear Mo[[Def-mean|mean]]]"
---

[[def-test_202508050827|Test]] the model for significancy on all predictor variables simultaneously using an $F$ test.

## Motivation

To test if the model is useful in explaining the predictor variable, we can use t-test on each $\beta\_i$ of the model.

However, this method is generally not recommended, because it for each t-test, the probability of getting a [[def-test-error-types_202508050828|Type I error]] increases.

To properly test the utility of a multiple linear regression model, we will need to do a **global test** (test that encompasses all the $\beta$ parameters)

> [!warning]
>
> A rejection in the $H\_0$ of the test means that the model is “statistically useful”. However, this does not mean the “best”.
>
> Instead, there might be other models which is more reliable.

## Assumptions

See [[assumptions-for-the-error-component_202509091314|Assumptions for the Error Component]]

## Hypotheses

- $H\_0 : \beta\_1 = \beta\_2 = \dots = \beta\_k =0$
- $H\_1 :$  Atleast one $\beta\_i \neq 0$

## Test statistic

$$
\begin{align\*}
F &= \frac{(SS\_{yy} - SSE)/k}{SSE/(n-(k+1))}\\
&= \frac{MS(\text{Model})}
{MSE}
\end{align\*}
$$

## Critical region

Reject $H\_0$, if

- $F > F\_{\alpha;k;n-(k+1)}$
- $\alpha > \text{p-value}$
