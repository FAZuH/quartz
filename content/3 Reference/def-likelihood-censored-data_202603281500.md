---
publish: true
aliases:
  - Likelihood for Censored Data
created: 2026-03-30T13:58:25.260+07:00
modified: 2026-03-30T13:58:25.260+07:00
published: 2026-03-30T13:58:25.260+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Likelihood for right-censored data**:

$$L = \prod\_{i=1}^n \[f(t\_i)]^{\delta\_i} \[S(t\_i)]^{1-\delta\_i}$$

where $\delta\_i$ is the event indicator:

- $\delta\_i = 1$ if event observed at time $t\_i$
- $\delta\_i = 0$ if censored at time $t\_i$

## Related

- [[def-censored-data_202603281500|Censored Data]]
- [[def-survival-function_202603281500|Survival Function]]
