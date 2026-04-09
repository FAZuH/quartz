---
publish: true
aliases:
  - Total Time on Test
created: 2026-04-09T23:07:39.740+07:00
modified: 2026-04-09T23:07:39.741+07:00
published: 2026-04-09T23:07:39.741+07:00
cssclasses: ""
creation-time: 2026-04-07 08:30
status: in progress
tags:
parent:
  - survival-model
---


## Definition

**Total Time on Test (TTT)** is the cumulative operating time contributed by all subjects in a survival study until the last failure or censoring time:

$$TTT = \sum_{i=1}^n t_i$$

where $t_i$ is the failure or censoring time for subject $i$.

> [!TIP] Interpretation
> TTT represents the total "machine-hours" or "person-years" that subjects contributed to the study. It accumulates all observed time, whether the subject experienced the event or was censored.

## Applications

| Application | Description |
|-------------|-------------|
| **Nelson-Aalen variance** | Appears in variance calculation for $\hat{H}(t)$ |
| **TTT Plot** | Diagnostic tool to check if data follows Weibull distribution |
| **TTT Transform** | Used to assess hazard rate behavior |

## Related

- [[3 Reference/def-survival-time_202603281500\|Survival Time]]
- [[3 Reference/def-nelson-aalen-estimator_202603281500\|Nelson-Aalen Estimator]]