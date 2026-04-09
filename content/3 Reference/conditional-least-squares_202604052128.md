---
publish: true
aliases:
  - Conditional Least Squares
created: 2026-04-09T23:07:39.061+07:00
modified: 2026-04-09T23:07:39.062+07:00
published: 2026-04-09T23:07:39.062+07:00
cssclasses: ""
creation-time: 2026-04-05 21:28
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Procedure

Conditional Least Squares minimizes the conditional sum of squares function to estimate model parameters, treating the model as a regression problem.

## AR(1)

### Step 1: Estimate $\mu$

Set $\frac{\partial S_c}{\partial \mu} = 0$, yielding:

$$\hat{\mu} = \frac{1}{n-1} \sum_{t=2}^n Y_t - \phi \sum_{t=2}^n Y_{t-1}$$

For large $n$ with stationary process:

$$\hat{\mu} \approx \bar{Y}$$

### Step 2: Estimate $\phi$

Set $\frac{\partial S_c}{\partial \phi} = 0$ with $\hat{\mu} = \bar{Y}$:

$$\hat{\phi} = \frac{\sum_{t=2}^n (Y_t - \bar{Y})(Y_{t-1} - \bar{Y})}{\sum_{t=2}^n (Y_{t-1} - \bar{Y})^2}$$

> [!NOTE] Comparison with $r_1$
> This is similar to sample autocorrelation $r_1$, but the denominator is missing one term $(Y_n - \bar{Y})^2$. For stationary processes with large $n$, the difference is negligible.

## AR(2)

Extend AR(1) approach:

$$\hat{\mu} \approx \bar{Y}$$

For $\phi_1, \phi_2$, solve the sample Yule-Walker equations:

$$
\begin{cases}
r_1 = \hat{\phi}_1 + r_1 \hat{\phi}_2 \\
r_2 = r_1 \hat{\phi}_1 + \hat{\phi}_2
\end{cases}
$$

## AR(p)

Minimizing $S_c$ yields the same system as the **sample Yule-Walker equations**.

> [!TIP] Connection
> For stationary AR(p), conditional least squares and method of moments (Yule-Walker) produce nearly identical estimates for large samples.

## MA(1)

For MA(1) model $Y_t = e_t - \theta e_{t-1}$, use the invertible AR representation:

$$Y_t = -\theta Y_{t-1} - \theta^2 Y_{t-2} - \cdots + e_t$$

The conditional sum of squares becomes:

$$S_c(\theta) = \sum_{t=2}^n [Y_t + \theta Y_{t-1} + \theta^2 Y_{t-2} + \cdots]^2$$

> [!WARNING] Nonlinear Optimization Required
> $S_c(\theta)$ is nonlinear in $\theta$. No explicit solution exists. Use numerical methods.

## Mixed Models (ARMA)

For ARMA(p,q), the conditional sum of squares involves both AR and MA components:

$$e_t = Y_t - \mu - \phi_1(Y_{t-1} - \mu) - \cdots - \phi_p(Y_{t-p} - \mu) + \theta_1 e_{t-1} + \cdots + \theta_q e_{t-q}$$

### Model Fitting Procedure

1. Set initial values: $e_{p+1-q} = e_{p-q} = \cdots = e_0 = 0$
2. Compute errors recursively: $e_t = Y_t - \hat{\mu} - \sum \hat{\phi}_i Y_{t-i} + \sum \hat{\theta}_j e_{t-j}$
3. Minimize $S_c = \sum e_t^2$ numerically

## Related

- [[3 Reference/conditional-sum-of-squares-function_202604052127\|Conditional Sum of Squares Function]]
- [[3 Reference/least-square-method_202604052128\|Least Square Method]]
- [[3 Reference/unconditional-least-squares_202604052128\|Unconditional Least Squares]]