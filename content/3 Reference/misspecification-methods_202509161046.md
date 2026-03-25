---
publish: true
aliases:
  - Misspecification Methods
created: 2026-03-25T15:22:40.616+07:00
modified: 2026-03-25T15:22:40.616+07:00
published: 2026-03-25T15:22:40.616+07:00
tags:
  - 
creation-time: 2025-09-16 10:46
status: in progress
parent:
  - "[[econometrics]]"
---

- [[#Omitting relevant predictor]]
- [[#Including irrelevant predictor]]
- [[#Using an incorrect functional form of the model]]
- [[#Measurement errors]]
- [[#Incorrect specification of the error term]]

### Omitting relevant predictor

**Example**

- Correct model: $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + \underline{\beta\_2 X\_{2i}} + e\_i$
- Misspecified: $Y\_i = \hat{\beta}\_0 + \hat{\beta}_1 X_{1i} + e\_i$
- Error term: $e\_i = e\_{1i} + \underline{\beta\_2 X\_{2i}}$

**Consequences**

- If $X\_2$ correlates with $X\_1$, estimators biased and inconsistent.
- Otherwise, $\hat{\beta}\_0$ biased; $\hat{\beta}\_1$ unbiased.
- Error variance estimate inaccurate.
- Estimator variance biased.
- Invalid confidence intervals, hypothesis tests, and forecasts.

### Including irrelevant predictor

**Example**

- Correct model: $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + \beta\_2 X\_{2i} + e\_i$
- Misspecified: $Y\_i = \hat{\beta}_0 + \hat{\beta}_1 X_{1i} + \hat{\beta}_2 X_{2i} + \underline{\hat{\beta}_3 X_{3i}} + e_{3i}$
- Error term: $e\_{3i} = e\_{1i} - \underline{\hat{\beta}_3 X_{3i}}$

**Consequences**

- Estimators **unbiased**, error variance estimate **accurate**, **valid** confidence intervals and hypothesis tests.
- But, estimators **inefficient** (larger variance than correct model). Therefore, model is less accurate.

### Using an incorrect functional form of the model

Occurs when estimated functional form differs from population regression function.

**Consequences**: Biased, inconsistent coefficient estimators.

**Detection**: Plot estimated function vs data.

**Example**: Using log-linear ($\ln Y\_i = \hat{\beta}_0 + \hat{\beta}_1 \ln X_{1i} + \hat{\beta}_2 \ln X_{2i} + e_{4i}$) when linear is correct.

### Measurement errors

Occurs from using proxies ($Y\_i^\* = Y + \epsilon\_Y$, $X\_i^\* = X + \epsilon\_X$) instead of true values.

Misspecified model: $Y\_i^\* = \hat{\beta}\_0^\* + \hat{\beta}_1^\* X_{1i}^\* + \hat{\beta}_2^\* X_{2i}^\* + e\_i^\*$

Leads to biased estimates.

### Incorrect specification of the error term

**Example**

- Correct: $Y\_i = \beta X\_i \cdot e\_i$ (multiplicative)
- Misspecified: $Y\_i = \hat{\beta} X\_i + e\_i$ (additive)

**Consequences**: True model has misspecified error $\implies$ estimators biased.

**Detection**: If estimator biased $\implies$ error term is source of misspecification.
