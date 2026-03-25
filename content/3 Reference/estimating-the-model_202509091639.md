---
publish: true
aliases:
  - Estimating the Model
created: 2026-03-25T15:22:40.586+07:00
modified: 2026-03-25T15:22:40.586+07:00
published: 2026-03-25T15:22:40.586+07:00
tags:
  - 
creation-time: 2025-09-09 16:39
status: in progress
parent:
  - "[[simple-linear-model_202509091314|The Simple Linear Model]]"
---

## Fitting a linear model

In the real world, it is often unfeasable to measure every observation in a population. We can approximate a model fit by withdrawing samples from the population instead.

Model fit uses the following notation to differentiate between sample and population model, which is:
$$
\hat{y}_{i} = \hat{\beta}_{0}+\hat{\beta}\_{1}
$$

### Coefficient formulas

$$
\begin{align}
\hat\beta\_1 &= \frac{
\sum x\_i y\_i
-\frac 1 n \sum x\_i \sum y\_i
}{
\sum x\_i^2

- \frac 1 n(\sum x\_i)^2
  }\\
  \hat\beta\_0 &= \bar y - \beta\_1 \bar x
  \end{align}
  $$

or, in matrix form,

$$
\beta = (X^TX)^{-1}X^Ty
$$

## An [[Def-estimator|estimator]] for error [[Def-variance|variance]]

The best estimate of $\sigma^2$ is the variance of residual $e\_i$, which is the estimate of error $\epsilon\_i$

![[assets/image-8.png]]

![[assets/image-9.png|416x351]]

Comparison of regression line using population data and sample data

| Regression Equation | Parameters (estimates) | Data | Notes |
| --- | --- | --- | --- |
| $E(y\_i) = \beta\_0 + \beta\_1 x\_i$ | $\beta\_0,\beta\_1$ | Population | Rarely done, since population is not always available |
| $\hat y\_i = \hat \beta\_0 + \hat \beta\_1 x\_i$ | $\hat \beta\_0, \hat \beta\_1$ | Sample | $\hat \beta\_0, \hat \beta\_1$ are estimators of $\beta\_0, \beta\_1$ |
| $\epsilon\_i = y\_i - E(y\_i)$ | Error | Population | Not Known |
| $e\_i = y\_i - \hat y\_i$ | Residual | Sample | Estimator of $\epsilon\_i$ |

### Formulas

Theoretically,
$$
\begin{align}
\sigma^2 & = \operatorname{Var}(\epsilon) \\
& = E\[\epsilon-E(\epsilon)]^{2} \\
& = E(\epsilon^{2})-E(\epsilon)^{2} \\
& = E(\epsilon^{2}) \\
& = \int\_{\infty}^{\infty}\epsilon^{2}f(\epsilon);d\epsilon
\end{align}
$$

Emprically,
$$
\sigma^2  = \dfrac{\sum\_{i=1}^N e\_i^2}{N} = \frac{\sum\_{i=1}^N(y\_{i}-\[\beta\_{0}+\beta\_{1}x\_{i}])^{2}}{N} = \frac{SSE}{N}
$$
Where $N$ is the population size, and SSE is sum of squares error.

$$
s^2  = \dfrac{\sum\_{i=1}^n e\_i^2}{n-k}=\frac{\sum\_{i=1}^n(y\_{i}-\[\hat{\beta}_{0}+\hat{\beta}_{1}x\_{i}])^2}{n-k} = \frac{SSR}{n-k}
$$
Where $k$ is the amount of predictor variables, and SSR is sum of squares regression.

### Interpretation of $s^2$

We can anticipate that although the predicted value is different from the actual value, 95% of the actual values of $y\_i$ are within $\hat y\_i\pm2s$. A good model should give small $s$.
