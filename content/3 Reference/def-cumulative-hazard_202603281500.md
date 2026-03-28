---
publish: true
aliases:
  - Cumulative Hazard
created: 2026-03-28T14:51:54.911+07:00
modified: 2026-03-28T14:51:54.911+07:00
published: 2026-03-28T14:51:54.911+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Cumulative Hazard $H(t)$**:
$$H(t) = \int\_0^t h(u)du = -\ln S(t)$$

Total hazard <u>accumulated up to time $t$</u>.

## About Cumulative Hazard

<u>Accumulated risk over time.</u>

Driving a car: every hour you drive, you face some hazard of an accident. $H(t)$ is the total risk you've accumulated after $t$ hours of driving. Even if the hourly risk is small, $H(t)$ keeps growing the longer you drive.

## Example

With Weibull hazard $\alpha=2, \lambda=0.001$, so $H(t) = 0.001t^2$:

| $t$ (days) | $H(t)$ |
|------------|--------|
| 10 | 0.1 |
| 30 | 0.9 |
| 60 | 3.6 |

By day 60, survival probability is $e^{-3.6} \approx 0.027$, meaning only 2.7% of people have avoided getting sick by day 60.

## Related

- [[def-hazard-function_202603281500|Hazard Function]]
- [[def-survival-function_202603281500|Survival Function]]
