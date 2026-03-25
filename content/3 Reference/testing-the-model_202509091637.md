---
publish: true
aliases:
  - Testing the Model
created: 2026-03-25T15:22:40.624+07:00
modified: 2026-03-25T15:22:40.624+07:00
published: 2026-03-25T15:22:40.624+07:00
tags:
  - 
creation-time: 2025-09-09 16:37
status: in progress
parent:
  - "[[simple-linear-model_202509091314|The Simple Linear Model]]"
---

To say the model is useful is to confirm whether $x$ can really be used to explain $y$. Basically,  changing the values of $x\_i$ should relate to change in $y\_i$, if $x$ is really an explanatory for $y$.

If $\beta\_1 \approx 0$, then $x$ doesn’t affect $y$, which means the model is not useful.

This means, to assess the usefulness of the model, we need to [[def-test_202508050827|test]] whether $\beta\_1 \neq 0$.

## Hypothesis

- $H\_0: \beta\_1 = 0$
- $H\_1: \beta\_1 \neq 0$

## Test statistic

$$
t = \frac{\hat \beta\_1}{s\_{\hat \beta\_1}}  \sim t\_{\text{df}=n-2}\\
$$
Where:
$$
\begin{align\*}
s\_{\hat\beta\_{1}} &= \frac{s}{\sqrt{SS\_{xx}}}\\
SS\_{xx} &= \sum\_{i=1}^n (x\_i - \bar x)^2\\
s^2 &= \dfrac{\sum\_{i=1}^n \epsilon\_i^2}{n - k}
\end{align\*}
$$

## Decision rule

Reject $H\_0$ if:

- $t<-t\_{\alpha/2}$  or  $t>t\_{\alpha/2}$  for 2-sided test
- $t<-t\_\alpha$  or  $t>t\_\alpha$  for 1-sided test

![[assets/image-6.png]]

![[assets/image-7.png]]

## Assessing the model using [[def-confidence-interval_202507220823|confidence interval]]

We can construct the $(1-\alpha) \times 100%$ confidence interval for $\beta\_1$, which is

$$
\begin{align}
(\hat\beta\_1 - t\_{\alpha/2} \times s\_{\hat \beta\_1},\quad \hat\beta\_1 + t\_{\alpha/2} \times s\_{\hat \beta\_1}) \\
\end{align}
$$

If the value of $\hat{\beta}\_{1}$ is outside the confidence interval, then the model is not useful.
