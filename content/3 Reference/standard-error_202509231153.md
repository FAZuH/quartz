---
publish: true
aliases:
  - Standard Error
created: 2026-04-09T23:07:39.601+07:00
modified: 2026-04-09T23:07:39.602+07:00
published: 2026-04-09T23:07:39.602+07:00
tags:
  - 
creation-time: 2025-09-23 11:53
status: in progress
parent:
  - "[[econometrics]]"
---

## Formula

$SE(\hat{\boldsymbol{\beta}}) = \sqrt{\text{diag}(\hat{\sigma}^2 (\mathbf{x}'\mathbf{x})^{-1})}$

Where:

$$
\begin{align}
\hat{\sigma}^2 & = \frac{SSE}{n-k} \\
SSE & = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
\end{align}
$$

## Other forms

$$
\begin{align}
\hat{\sigma}^{2} & = \frac{e'e}{n-k} \\
e & = y - X\hat{\beta} \\
\end{align}
$$
