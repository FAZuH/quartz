---
{"publish":true,"aliases":["Testing the Individual Model Parameters"],"created":"2025-09-13T18:59:07.011+07:00","modified":"2025-09-15T07:00:58.212+07:00","published":"2025-09-15T07:00:58.212+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:46","status":"baby","parent":["[[Linear Model]]"]}
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

![[3 Reference/the-multiple-regression-model_202509091642#Assumptions for the error component\|Assumptions for the error component]]

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
