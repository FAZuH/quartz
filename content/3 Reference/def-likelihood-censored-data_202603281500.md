---
publish: true
aliases:
  - Likelihood for Censored Data
created: 2026-03-30T13:58:25.260+07:00
modified: 2026-03-30T13:58:25.260+07:00
published: 2026-03-30T13:58:25.260+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Likelihood for right-censored data**:

$$L = \prod_{i=1}^n [f(t_i)]^{\delta_i} [S(t_i)]^{1-\delta_i}$$

where $\delta_i$ is the event indicator:
- $\delta_i = 1$ if event observed at time $t_i$
- $\delta_i = 0$ if censored at time $t_i$

## Related

- [[3 Reference/def-censored-data_202603281500\|Censored Data]]
- [[3 Reference/def-survival-function_202603281500\|Survival Function]]