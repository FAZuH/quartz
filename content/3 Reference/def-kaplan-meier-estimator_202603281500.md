---
publish: true
aliases:
  - Kaplan-Meier Estimator
created: 2026-04-09T23:07:39.183+07:00
modified: 2026-04-09T23:07:39.184+07:00
published: 2026-04-09T23:07:39.184+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Kaplan-Meier Estimator** for survival function:

$$\hat{S}(t) = \prod_{t_i \leq t} \left(1 - \frac{d_i}{Y_i}\right)$$

where:
- $d_i$ = number of <u>events</u> occurred at time $t_i$ (not censored)
- $Y_i$ = number <u>at risk</u> just <u>before</u> $t_i$

## About Kaplan-Meier Approach

The Kaplan-Meier estimator builds the survival curve step-by-step, calculating the conditional probability of surviving past each observed event time.

**Timeline and Definitions:**
- $n = Y_0$: Total number of subjects at the start
- $Y_i$: Number at risk just before time $t_i$
- $d_i$: Number of events at time $t_i$
- $c_i$: Number censored between $t_i$ and $t_{i+1}$

**Step-by-step Intuition:**

1. **At time $t_0$**: Everyone is alive.
   $$S(t_0) = \Pr(T > t_0) = 1$$

2. **At time $t_1$**: $Y_1$ people at risk. $d_1$ events.
   $$S(t_1) = S(t_0) \times \left(1 - \frac{d_1}{Y_1}\right)$$

3. **At time $t_2$**: $Y_2 = n - d_1 - c_1$ people at risk.
   $$S(t_2)= S(t_1) \times \left(1 - \frac{d_2}{Y_2}\right)$$

## Related

- [[3 Reference/def-nelson-aalen-estimator_202603281500\|Nelson-Aalen Estimator]]
- [[3 Reference/def-survival-function_202603281500\|Survival Function]]