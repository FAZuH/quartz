---
publish: true
aliases:
  - Least Square Method
created: 2026-04-05T21:28:29.072+07:00
modified: 2026-04-05T21:31:55.274+07:00
published: 2026-04-05T21:31:55.274+07:00
cssclasses: ""
creation-time: 2026-04-05 21:28
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## About

Least Square Method provides parameter estimates by minimizing the sum of squared residuals, with two main variants that differ in how they handle initial observations.

## Conditional vs Unconditional

| Method | Initial Values | Information Used | Complexity |
|--------|---------------|------------------|------------|
| **Conditional LS** | Fixed at observed $Y_1$ | Only $Y_2, \ldots, Y_n$ | Simpler, explicit for AR |
| **Unconditional LS** | Marginal distribution includes $Y_1$ | All observations | More complex, numerical |

## When to Use Each

### Conditional Least Squares
- Large samples (initial value impact negligible)
- Simple AR models
- Quick preliminary estimates
- Software default for many time series packages

### Unconditional Least Squares
- Short time series
- Seasonal models
- When precision for early observations matters
- Compromise between conditional LS and full MLE

## Comparison with Maximum Likelihood

| Aspect | Conditional LS | Unconditional LS | MLE |
|--------|---------------|------------------|-----|
| Uses all data | No ($Y_1$ excluded) | Yes | Yes |
| Distributional assumption | None required | Normal errors | Normal errors |
| Efficiency | Good for large $n$ | Better | Best (large $n$) |

## Related

- [[3 Reference/conditional-least-squares_202604052128\|Conditional Least Squares]]
- [[3 Reference/unconditional-least-squares_202604052128\|Unconditional Least Squares]]
- [[3 Reference/maximum-likelihood-method_202604052129\|Maximum Likelihood Method]]