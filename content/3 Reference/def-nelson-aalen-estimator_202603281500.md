---
publish: true
aliases:
  - Nelson-Aalen Estimator
created: 2026-03-30T13:58:25.262+07:00
modified: 2026-03-30T13:58:25.262+07:00
published: 2026-03-30T13:58:25.262+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Nelson-Aalen Estimator**for cumulative hazard:

$$\hat{H}(t) = \sum_{t_i \leq t} \frac{d_i}{Y_i}$$

where:
- $d_i$ = number of events at time $t_i$
- $Y_i$ = number at risk just before $t_i$

## About Nelson-Aalen Approach

The Nelson-Aalen estimator calculates cumulative hazard by summing instantaneous hazard rates at each event time.

**Step-by-step Intuition:**

1. **At time $t_1$**: Out of $Y_1$ people at risk, $d_1$ fail.
   $$h(t_1) = \frac{d_1}{Y_1}$$

2. **At time $t_2$**: Out of $Y_2$ people at risk, $d_2$ fail.
   $$h(t_2) = \frac{d_2}{Y_2}$$

**Cumulative hazard up to $t_2$:**
$$H(t_2) = h(t_1) + h(t_2) = \frac{d_1}{Y_1} + \frac{d_2}{Y_2}$$

## Related

- [[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier Estimator]]
- [[3 Reference/def-cumulative-hazard_202603281500\|Cumulative Hazard]]