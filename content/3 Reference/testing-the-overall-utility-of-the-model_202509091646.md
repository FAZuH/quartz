---
{"publish":true,"aliases":["Testing the Overall Utility of the  Model"],"created":"2025-09-09T16:46:14.701+07:00","modified":"2025-09-09T16:46:22.943+07:00","published":"2025-09-09T16:46:22.943+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:46","status":"baby","parent":["[[linear-model]]"]}
---


Often called the **global test**. Test the model for significancy using an $F$ test

## Motivation

To test if the model is useful in explaining the dependent variable, we can use t-test on each $\beta_i$ of the model.

However, this method is generally not recommended, because it for each t-test, the probability of getting a Type I error increases.

To properly test the utility of a multiple linear regression model, we will need to do a **global test** (test that encompasses all the $\beta$ parameters)

<aside>
💡

**Warning**

A rejection in the $H_0$ of the test means that the model is “statistically useful”. However, this does not mean the “best”.

Instead, there might be other models which is more reliable.

</aside>

## Assumptions

[Assumptions for the error component](The%20Multiple%20Linear%20Regression%20Model%20135a55f037f280d18b95db903d71af97.md) 

## Hypotheses

- $H_0 : \beta_1 = \beta_2 = \dots = \beta_p =0$
- $H_1 :$  Atleast one $\beta_i \neq 0$

## Test statistic

$$
\begin{align*}
F &= \frac{(SS_{yy} - SSE)/p}{SSE/(n-(p+1))}\\
&= \frac{MS(\text{Model})}
{MSE}
\end{align*}
$$

## Critical region

Reject $H_0$, if

- $F > F_{\alpha;p;n-(p+1)}$
- $\alpha > p-value$
