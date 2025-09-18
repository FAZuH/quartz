---
{"publish":true,"aliases":["Estimating the Model"],"created":"2025-09-13T18:59:03.768+07:00","modified":"2025-09-15T07:00:58.042+07:00","published":"2025-09-15T07:00:58.042+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:44","status":"baby","parent":["[[Linear Model]]"]}
---


## Fitting a model: ordinary least square (OLS)

$\boldsymbol{\beta}$ of a linear model can be estimated using:

$$
\boldsymbol \beta = (\mathbf x^T\mathbf x)^{-1}
\mathbf x^T \mathbf y
$$

## Estimating the variance of the error

The variance of the error compontent $\epsilon$ can be estimated using:

$$
s^2=MSE =\frac{SSE}{n-(p+1)}
$$

The MSE is an unbiased and consistent estimator for the variance of error in linear regression. This means that:

- Unbiased: The mathematical expectation of MSE is the actual variance of the error
- Consistent: As the sample size goes larger, the MSE approaces the true value of the variance of the error

> [!note]
> The $(p+1)$ part of the formula represents the number of coefficients ($\beta$) in the model.

### Interpretation

useful interpretation of the **estimated standard deviation** $s$ is that the interval $\pm2s$ will provide a rough approximation to the accuracy with which the model will predict future values of $y$ for given values of $x$
