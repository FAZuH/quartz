---
{"publish":true,"aliases":["Estimating the Model"],"created":"2025-09-09T16:39:17.841+07:00","modified":"2025-09-09T16:41:23.351+07:00","published":"2025-09-09T16:41:23.351+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:39","status":"baby","parent":["[[linear-model]]"]}
---


## Fitting a linear model

In the real world, it is often unfeasable to measure every observation in a population. We can approximate a model fit by withdrawing samples from the population instead.

Model fit uses the following notation to differentiate between sample and population model.

- $\widehat{y_i} = \widehat{\beta_0}+\widehat{\beta_1}x_i$

### Coefficient formulas

$$
\begin{align}
\hat\beta_1 &= \frac{
  \sum x_i y_i
  -\frac 1 n \sum x_i \sum y_i
}{
  \sum x_i^2
  - \frac 1 n(\sum x_i)^2
}\\
  \hat\beta_0 &= \bar y - \beta_1 \bar x
\end{align}
$$

or, in matrix form,

$$
\beta = (X^TX)^{-1}X^Ty
$$

## An estimator for error variance

The model should expect small errors for it to be accurate. Variations $(\sigma^2)$ in the data is allowed, but should be small. Considering its importance, estimation of $\sigma^2$ is necessary. The best estimate of $\sigma^2$ is the variance of residual $e_i$, which is the estimate of error $\epsilon_i$

![[assets/image-8.png]]

![[assets/image-9.png]]

Comparison of regression line using population data and sample data

| Regression Equation | Parameters (estimates) | Data | Notes |
| --- | --- | --- | --- |
| $E(y_i) = \beta_0 + \beta_1 x_i$ | $\beta_0,\beta_1$ | Population | Rarely done, since population is not always available |
| $\hat y_i = \hat \beta_0 + \hat \beta_1 x_i$ | $\hat \beta_0, \hat \beta_1$ | Sample | $\hat \beta_0, \hat \beta_1$ are estimators of $\beta_0, \beta_1$ |
| $\epsilon_i = y_i - E(y_i)$ | Error | Population | Not Known |
| $e_i = y_i - \hat y_i$ | Residual | Sample | Estimator of $\epsilon_i$ |

### Formulas

- Theoretically: $\sigma^2 = \int_{-\infty}^\infty \epsilon^2 f(\epsilon)\ d\epsilon$

**Emprically**,

$\sigma^2 = \dfrac{\sum_{i=1}^N e_i^2}{N}$

$s^2 = \dfrac{\sum_{i=1}^N \epsilon_i^2}{n - p}$

### Interpretation of $s^2$

We can anticipate that although the predicted value is different from the actual value, 95% of the actual values of $y_i$ are within $\hat y_i\pm2s$. A good model should give small $s$.
