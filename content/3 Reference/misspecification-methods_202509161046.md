---
publish: true
aliases:
  - Misspecification Methods
created: 2026-04-09T23:07:39.496+07:00
modified: 2026-04-09T23:07:39.497+07:00
published: 2026-04-09T23:07:39.497+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-16 10:46
status: in progress
parent:
  - "[[econometrics]]"
---


- [[3 Reference/misspecification-methods_202509161046#Omitting relevant predictor]]
- [[3 Reference/misspecification-methods_202509161046#Including irrelevant predictor]]
- [[3 Reference/misspecification-methods_202509161046#Using an incorrect functional form of the model]]
- [[3 Reference/misspecification-methods_202509161046#Measurement errors]]
- [[3 Reference/misspecification-methods_202509161046#Incorrect specification of the error term]]

### Omitting relevant predictor

**Example**
- Correct model: $Y_i = \beta_0 + \beta_1 X_{1i} + \underline{\beta_2 X_{2i}} + e_i$
- Misspecified: $Y_i = \hat{\beta}_0 + \hat{\beta}_1 X_{1i} + e_i$
- Error term: $e_i = e_{1i} + \underline{\beta_2 X_{2i}}$

**Consequences**
- If $X_2$ correlates with $X_1$, estimators biased and inconsistent.
- Otherwise, $\hat{\beta}_0$ biased; $\hat{\beta}_1$ unbiased.
- Error variance estimate inaccurate.
- Estimator variance biased.
- Invalid confidence intervals, hypothesis tests, and forecasts.

### Including irrelevant predictor

**Example**
- Correct model: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$
- Misspecified: $Y_i = \hat{\beta}_0 + \hat{\beta}_1 X_{1i} + \hat{\beta}_2 X_{2i} + \underline{\hat{\beta}_3 X_{3i}} + e_{3i}$
- Error term: $e_{3i} = e_{1i} - \underline{\hat{\beta}_3 X_{3i}}$

**Consequences**
- Estimators **unbiased**, error variance estimate **accurate**, **valid** confidence intervals and hypothesis tests.
- But, estimators **inefficient** (larger variance than correct model). Therefore, model is less accurate.

### Using an incorrect functional form of the model

Occurs when estimated functional form differs from population regression function.

**Consequences**: Biased, inconsistent coefficient estimators.

**Detection**: Plot estimated function vs data.

**Example**: Using log-linear ($\ln Y_i = \hat{\beta}_0 + \hat{\beta}_1 \ln X_{1i} + \hat{\beta}_2 \ln X_{2i} + e_{4i}$) when linear is correct.

### Measurement errors

Occurs from using proxies ($Y_i^* = Y + \epsilon_Y$, $X_i^* = X + \epsilon_X$) instead of true values.

Misspecified model: $Y_i^* = \hat{\beta}_0^* + \hat{\beta}_1^* X_{1i}^* + \hat{\beta}_2^* X_{2i}^* + e_i^*$

Leads to biased estimates.

### Incorrect specification of the error term

**Example**
- Correct: $Y_i = \beta X_i \cdot e_i$ (multiplicative)
- Misspecified: $Y_i = \hat{\beta} X_i + e_i$ (additive)

**Consequences**: True model has misspecified error $\implies$ estimators biased.

**Detection**: If estimator biased $\implies$ error term is source of misspecification.
