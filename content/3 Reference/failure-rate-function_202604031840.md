---
publish: true
aliases:
  - Failure Rate Function
created: 2026-04-03T18:40:44.286+07:00
modified: 2026-04-03T19:12:42.747+07:00
published: 2026-04-03T19:12:42.747+07:00
tags:
  - type/about
creation-time: 2026-04-03 18:40
status: in progress
parent:
  - "[[stochastic-model]]"
---

For a continuous positive random variable $X$ with PDF $f$ and CDF $F$, the **failure rate** (or **hazard rate**) function is:

$$r(t) = \frac{f(t)}{1 - F(t)}$$

## Interpretation

$r(t)$ represents the conditional probability density that a $t$-year-old item will fail. Specifically:

$$P(X \in (t, t+dt) \mid X > t) \approx r(t) , dt$$

It answers: "Given the item has survived to age $t$, what is the instantaneous risk of failure?"

## Uniqueness

The failure rate function **uniquely determines** the distribution:

$$F(t) = 1 - \exp\left(-\int\_0^t r(s) , ds\right)$$

## Examples

| Distribution | $r(t)$ | Interpretation |
|---|---|---|
| [[def-exponential-distribution-survival_202603281500\|Exponential]] | $\lambda$ (constant) | Item doesn't age — risk is the same at any age |
| [[hyperexponential-distribution_202604031846\|Hyperexponential]] | Decreasing to $\min \lambda\_i$ | As item ages, it's more likely the "long-lived" type |
| [[hypoexponential-distribution_202604031846\|Hypoexponential]] | Converges to $\min \lambda\_i$ as $t \to \infty$ | Dominated by slowest component for large $t$ |

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution]]
- [[memoryless-property_202604031840|Memoryless Property]]
- [[hyperexponential-distribution_202604031846|Hyperexponential Distribution]]
- [[hypoexponential-distribution_202604031846|Hypoexponential Distribution]]
