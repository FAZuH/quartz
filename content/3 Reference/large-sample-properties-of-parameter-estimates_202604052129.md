---
publish: true
aliases:
  - Large Sample Properties of Parameter Estimates
created: 2026-04-09T23:07:39.437+07:00
modified: 2026-04-09T23:07:39.438+07:00
published: 2026-04-09T23:07:39.438+07:00
creation-time: 2026-04-05 21:29
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Properties

Large Sample Properties of Parameter Estimates describe the asymptotic behavior of estimators from maximum likelihood and least squares methods.

## Asymptotic Properties

For large $n$, estimates from maximum likelihood and least squares (conditional or unconditional) are:

- Approximately **normal**
- **Unbiased**
- **Consistent**

> [!NOTE] Equivalence
> For large samples, conditional least squares, unconditional least squares, and maximum likelihood produce identical estimates asymptotically.

## Variance-Covariance Structure

The asymptotic variance-covariance matrix of parameter estimates depends on the model structure.

### AR(p) Models

Parameters $\phi_1, \ldots, \phi_p$ have variance-covariance approximately $\frac{1}{n} \sigma^2 \Gamma^{-1}$ where $\Gamma$ is the autocovariance matrix.

### MA(q) Models

Parameter estimates have higher variance than AR models due to nonlinear estimation.

### ARMA(p,q) Models

Combined variance structure from both AR and MA components.

## Practical Implications

| Sample Size | Method Preference | Reason |
|-------------|------------------|--------|
| Small $(n < 50)$ | MLE or Unconditional LS | Uses all information |
| Medium $(50 \leq n < 200)$ | Any method | Results converge |
| Large $(n \geq 200)$ | Conditional LS acceptable | Simple, fast |

## Related

- [[maximum-likelihood-method_202604052129|Maximum Likelihood Method]]
- [[conditional-least-squares_202604052128|Conditional Least Squares]]
- [[unconditional-least-squares_202604052128|Unconditional Least Squares]]
