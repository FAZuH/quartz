---
publish: true
aliases:
  - Nelson-Aalen Estimator
created: 2026-03-30T13:58:25.262+07:00
modified: 2026-03-30T13:58:25.262+07:00
published: 2026-03-30T13:58:25.262+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Nelson-Aalen Estimator**for cumulative hazard:

$$\hat{H}(t) = \sum\_{t\_i \leq t} \frac{d\_i}{Y\_i}$$

where:

- $d\_i$ = number of events at time $t\_i$
- $Y\_i$ = number at risk just before $t\_i$

## About Nelson-Aalen Approach

The Nelson-Aalen estimator calculates cumulative hazard by summing instantaneous hazard rates at each event time.

**Step-by-step Intuition:**

1. **At time $t\_1$**: Out of $Y\_1$ people at risk, $d\_1$ fail.
   $$h(t\_1) = \frac{d\_1}{Y\_1}$$

2. **At time $t\_2$**: Out of $Y\_2$ people at risk, $d\_2$ fail.
   $$h(t\_2) = \frac{d\_2}{Y\_2}$$

**Cumulative hazard up to $t\_2$:**
$$H(t\_2) = h(t\_1) + h(t\_2) = \frac{d\_1}{Y\_1} + \frac{d\_2}{Y\_2}$$

## Related

- [[def-kaplan-meier-estimator_202603281500|Kaplan-Meier Estimator]]
- [[def-cumulative-hazard_202603281500|Cumulative Hazard]]
