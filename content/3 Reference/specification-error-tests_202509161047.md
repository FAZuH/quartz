---
publish: true
aliases:
  - Specification Error Tests
created: 2026-04-09T23:07:39.596+07:00
modified: 2026-04-09T23:07:39.597+07:00
published: 2026-04-09T23:07:39.597+07:00
tags:
  - 
creation-time: 2025-09-16 10:47
status: in progress
parent:
  - "[[econometrics]]"
---

## Detecting unimportant variables via likelihood ratio test

**Restricted** model (if $\beta_2=0$): $Y_i = \beta_0 + \beta_1 X_{1i} + e_i$

**Unrestricted**: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$

$LR = 2(ULLF - RLLF)$

## Detecting important variables via likelihood ratio test

**Unrestricted** (add $X_3$): $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + \beta_3 X_{3i} + e_i$

**Restricted**: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$

$LR = 2(ULLF - RLLF)$

## Detecting functional form errors via Ramsey RESET test.

**Model**: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$

**Steps**:

1. Regress and get $\hat{Y}$.
2. Regress again with powers: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + \beta_3 \hat{Y}^2 + \beta_4 \hat{Y}^3 + \beta_5 \hat{Y}^4 + e_i$

F-stat: $F = \frac{(R_b^2 - R_l^2)/k_1}{(1 - R_b^2)/(n - k_2)}$

If $F > F_{table}$, form incorrect.

If $F < F_{table}$, form correct.

**Advantage**: No alternative model needed.

**Disadvantage**: No alternative if incorrect.

## Detecting error term specification

**Example**: True $Y_i = \beta X_i \cdot e_i$; estimated $Y_i = \hat{\beta} X_i + e_i$

Check if $\hat{\beta}$ unbiased for $\beta$; if not, error term misspecified.
