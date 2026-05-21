---
publish: true
aliases:
  - Kaplan-Meier Estimator
created: 2026-04-09T23:07:39.183+07:00
modified: 2026-05-19T11:11:04.755+07:00
published: 2026-05-19T11:11:04.755+07:00
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

## Example

Suppose a study follows 5 subjects with the following data:

| Time $t_i$ | $Y_i$ (at risk) | $d_i$ (events) | $1 - d_i/Y_i$ | $\hat{S}(t)$ |
|-------------|-----------------|----------------|---------------|--------------|
| 0 | 5 | 0 | 1.000 | 1.000 |
| 3 | 5 | 1 | $1 - 1/5 = 0.800$ | $1.000 \times 0.800 = 0.800$ |
| 5 | 4 | 1 | $1 - 1/4 = 0.750$ | $0.800 \times 0.750 = 0.600$ |
| 8 | 3 | 1 | $1 - 1/3 = 0.667$ | $0.600 \times 0.667 = 0.400$ |

**Interpretation**: After $t=3$, 80% of subjects survive. By $t=8$, only 40% remain. Each step down corresponds to an event time; the curve stays flat between events.

> [!TIP] Interpretation
> The Kaplan-Meier curve is a **step function**: it drops only at event times and stays constant between them. Censored observations reduce $Y_i$ for subsequent steps but don't cause a drop themselves.

## Related

- [[3 Reference/def-nelson-aalen-estimator_202603281500\|Nelson-Aalen Estimator]]
- [[3 Reference/def-survival-function_202603281500\|Survival Function]]