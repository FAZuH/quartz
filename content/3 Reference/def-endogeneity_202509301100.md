---
{"publish":true,"aliases":["Endogeneity"],"created":"2025-09-30T11:00:57.092+07:00","modified":"2025-09-30T11:01:14.256+07:00","published":"2025-09-30T11:01:14.256+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-30 11:00","status":"baby","parent":["[[econometrics]]"]}
---


## Definition

Problem in regression models where predictor variables $X$ are correlated with the error term $\epsilon$, i.e.,
$$
E[X|\epsilon]\neq 0
$$

## Common causes

- **Omitted variable bias**: There is an important factor that is not included in the model.
- **Simultaneity**: Bidirectional relationship (e.g., cost & demand influences each other).
- **Measurement error**: $X$ is measured with high error.

## Consequences

[[3 Reference/estimating-the-model_202509091644\|OLS]] [[3 Reference/Def-estimator\|estimator]] becomes [[3 Reference/Def-unbiased-estimator\|biased]] and [[3 Reference/Def-consistent-estimator\|inconsistent]]. Interpretation of coefficient could be incorrect.


