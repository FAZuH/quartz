---
publish: true
aliases:
  - Failure Rate Function
created: 2026-04-09T23:07:39.387+07:00
modified: 2026-04-10T04:57:15.934+07:00
published: 2026-04-10T04:57:15.934+07:00
tags:
  - type/about
cssclasses: ""
creation-time: 2026-04-03 18:40
status: in progress
parent:
  - "[[stochastic-model]]"
---


For a continuous positive random variable $X$ with PDF $f$ and CDF $F$, the **failure rate** (or **hazard rate**) function is:

$$r(t) = \frac{f(t)}{1 - F(t)}$$

## Interpretation

$r(t)$ represents the conditional probability density that a $t$-year-old item will fail. Specifically:

$$P(X \in (t, t+dt) \mid X > t) \approx r(t) \, dt$$

It answers: "Given the item has survived to age $t$, what is the instantaneous risk of failure?"

## Uniqueness

The failure rate function **uniquely determines** the distribution:

$$F(t) = 1 - \exp\left(-\int_0^t r(s) \, ds\right)$$

## Examples

| Distribution | $r(t)$ | Interpretation |
|---|---|---|
| [[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential]] | $\lambda$ (constant) | Item doesn't age — risk is the same at any age |
| [[3 Reference/hyperexponential-distribution_202604031846\|Hyperexponential]] | Decreasing to $\min \lambda_i$ | As item ages, it's more likely the "long-lived" type |
| [[3 Reference/hypoexponential-distribution_202604031846\|Hypoexponential]] | Converges to $\min \lambda_i$ as $t \to \infty$ | Dominated by slowest component for large $t$ |

## Related

- [[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution]]
- [[3 Reference/memoryless-property_202604031840\|Memoryless Property]]
- [[3 Reference/hyperexponential-distribution_202604031846\|Hyperexponential Distribution]]
- [[3 Reference/hypoexponential-distribution_202604031846\|Hypoexponential Distribution]]
