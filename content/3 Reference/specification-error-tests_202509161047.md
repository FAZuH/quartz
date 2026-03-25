---
publish: true
aliases:
  - Specification Error Tests
created: 2026-03-25T15:22:40.617+07:00
modified: 2026-03-25T15:22:40.617+07:00
published: 2026-03-25T15:22:40.617+07:00
tags:
  - 
creation-time: 2025-09-16 10:47
status: in progress
parent:
  - "[[econometrics]]"
---

## Detecting unimportant variables via likelihood ratio test

**Restricted** model (if $\beta\_2=0$): $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + e\_i$

**Unrestricted**: $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + \beta\_2 X\_{2i} + e\_i$

$LR = 2(ULLF - RLLF)$

## Detecting important variables via likelihood ratio test

**Unrestricted** (add $X\_3$): $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + \beta\_2 X\_{2i} + \beta\_3 X\_{3i} + e\_i$

**Restricted**: $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + \beta\_2 X\_{2i} + e\_i$

$LR = 2(ULLF - RLLF)$

## Detecting functional form errors via Ramsey RESET test.

**Model**: $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + \beta\_2 X\_{2i} + e\_i$

**Steps**:

1. Regress and get $\hat{Y}$.
2. Regress again with powers: $Y\_i = \beta\_0 + \beta\_1 X\_{1i} + \beta\_2 X\_{2i} + \beta\_3 \hat{Y}^2 + \beta\_4 \hat{Y}^3 + \beta\_5 \hat{Y}^4 + e\_i$

F-stat: $F = \frac{(R\_b^2 - R\_l^2)/k\_1}{(1 - R\_b^2)/(n - k\_2)}$

If $F > F\_{table}$, form incorrect.

If $F < F\_{table}$, form correct.

**Advantage**: No alternative model needed.

**Disadvantage**: No alternative if incorrect.

## Detecting error term specification

**Example**: True $Y\_i = \beta X\_i \cdot e\_i$; estimated $Y\_i = \hat{\beta} X\_i + e\_i$

Check if $\hat{\beta}$ unbiased for $\beta$; if not, error term misspecified.
