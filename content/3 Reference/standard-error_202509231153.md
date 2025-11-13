---
{"publish":true,"aliases":["Standard Error"],"created":"2025-10-14T04:15:27.060+07:00","modified":"2025-10-14T04:15:27.060+07:00","published":"2025-10-14T04:15:27.060+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-23 11:53","status":"baby","parent":["[[econometrics]]"]}
---


## Formula
$$SE(\hat{\boldsymbol{\beta}}) = \sqrt{\text{diag}(\hat{\sigma}^2 (\mathbf{x}'\mathbf{x})^{-1})}$$

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
