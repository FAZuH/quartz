---
publish: true
aliases:
  - Endogeneity
created: 2026-03-25T15:22:40.626+07:00
modified: 2026-03-25T15:22:40.626+07:00
published: 2026-03-25T15:22:40.626+07:00
tags:
  - 
creation-time: 2025-09-30 11:00
status: in progress
parent:
  - "[[econometrics]]"
---

## Definition

Problem in regression models where predictor variables $X$ are correlated with the error term $\epsilon$, i.e.,
$$
E\[X|\epsilon]\neq 0
$$

## Common causes

- **Omitted variable bias**: There is an important factor that is not included in the model.
- **Simultaneity**: Bidirectional relationship (e.g., cost & demand influences each other).
- **Measurement error**: $X$ is measured with high error.

## Consequences

[[estimating-the-model_202509091644|OLS]] [[Def-estimator|estimator]] becomes [[Def-unbiased-estimator|biased]] and [[Def-consistent-estimator|inconsistent]]. Interpretation of coefficient could be incorrect.
