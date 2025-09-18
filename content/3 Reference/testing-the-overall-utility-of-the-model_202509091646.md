---
{"publish":true,"aliases":["Testing the Overall Utility of the  Model"],"created":"2025-09-13T18:59:08.404+07:00","modified":"2025-09-16T16:53:46.704+07:00","published":"2025-09-16T16:53:46.704+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:46","status":"baby","parent":["[[Linear Mo[[Def-mean|mean]]]"]}
---


[[3 Reference/def-test_202508050827\|Test]] the model for significancy on all predictor variables simultaneously using an $F$ test.

## Motivation

To test if the model is useful in explaining the predictor variable, we can use t-test on each $\beta_i$ of the model.

However, this method is generally not recommended, because it for each t-test, the probability of getting a [[3 Reference/def-test-error-types_202508050828\|Type I error]] increases.

To properly test the utility of a multiple linear regression model, we will need to do a **global test** (test that encompasses all the $\beta$ parameters)

> [!warning]
> 
> A rejection in the $H_0$ of the test means that the model is “statistically useful”. However, this does not mean the “best”.
> 
> Instead, there might be other models which is more reliable.

## Assumptions

See [[3 Reference/assumptions-for-the-error-component_202509091314\|Assumptions for the Error Component]]

## Hypotheses

- $H_0 : \beta_1 = \beta_2 = \dots = \beta_k =0$
- $H_1 :$  Atleast one $\beta_i \neq 0$

## Test statistic

$$
\begin{align*}
F &= \frac{(SS_{yy} - SSE)/k}{SSE/(n-(k+1))}\\
&= \frac{MS(\text{Model})}
{MSE}
\end{align*}
$$

## Critical region

Reject $H_0$, if

- $F > F_{\alpha;k;n-(k+1)}$
- $\alpha > \text{p-value}$
