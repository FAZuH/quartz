---
publish: true
aliases:
  - Unconditional Least Squares
created: 2026-04-05T21:28:51.064+07:00
modified: 2026-04-05T21:31:59.063+07:00
published: 2026-04-05T21:31:59.063+07:00
cssclasses: ""
creation-time: 2026-04-05 21:28
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Procedure

Unconditional Least Squares minimizes the unconditional sum of squares function $S(\phi, \mu)$ as a compromise between conditional least squares and full maximum likelihood.

## Procedure

### Step 1: Set Up the Function

$$S(\phi, \mu) = (1 - \phi^2)(Y_1 - \mu)^2 + \sum_{t=2}^n [Y_t - \mu - \phi(Y_{t-1} - \mu)]^2$$

### Step 2: Minimize Numerically

Set derivatives to zero:

$$\frac{\partial S}{\partial \phi} = 0$$
$$\frac{\partial S}{\partial \mu} = 0$$

> [!WARNING] No Closed-Form Solution
> The term $(1 - \phi^2)(Y_1 - \mu)^2$ makes these equations **nonlinear** in $\phi$ and $\mu$. Numerical optimization is required.

### Step 3: Use Numerical Methods

Apply iterative algorithms:
- Newton-Raphson
- Gradient descent
- Gauss-Newton

## Advantages
- Uses all observations (unlike conditional LS)
- Less computational burden than full MLE
- Better for short series or seasonal models

## Related

- [[3 Reference/unconditional-sum-of-squares-function_202604052128\|Unconditional Sum-of-Squares Function]]
- [[3 Reference/conditional-least-squares_202604052128\|Conditional Least Squares]]
- [[3 Reference/least-square-method_202604052128\|Least Square Method]]