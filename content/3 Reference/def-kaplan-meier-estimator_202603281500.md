---
publish: true
aliases:
  - Kaplan-Meier Estimator
created: 2026-03-28T14:55:12.403+07:00
modified: 2026-03-28T14:55:12.403+07:00
published: 2026-03-28T14:55:12.403+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Kaplan-Meier Estimator** for survival function:

$$\hat{S}(t) = \prod\_{t\_i \leq t} \left(1 - \frac{d\_i}{Y\_i}\right)$$

where:

- $d\_i$ = number of events at time $t\_i$
- $Y\_i$ = number at risk just before $t\_i$

## About Kaplan-Meier Approach

The Kaplan-Meier estimator builds the survival curve step-by-step, calculating the conditional probability of surviving past each observed event time.

**Timeline and Definitions:**

- $n = Y\_0$: Total number of subjects at the start
- $Y\_i$: Number at risk just before time $t\_i$
- $d\_i$: Number of events at time $t\_i$
- $c\_i$: Number censored between $t\_i$ and $t\_{i+1}$

**Step-by-step Intuition:**

1. **At time $t\_0$**: Everyone is alive.
   $$S(t\_0) = \Pr(T > t\_0) = 1$$

2. **At time $t\_1$**: $Y\_1$ people at risk. $d\_1$ events.
   $$S(t\_1) = S(t\_0) \times \left(1 - \frac{d\_1}{Y\_1}\right)$$

3. **At time $t\_2$**: $Y\_2 = n - d\_1 - c\_1$ people at risk.
   $$S(t\_2)= S(t\_1) \times \left(1 - \frac{d\_2}{Y\_2}\right)$$

## Related

- [[def-nelson-aalen-estimator_202603281500|Nelson-Aalen Estimator]]
- [[def-survival-function_202603281500|Survival Function]]
