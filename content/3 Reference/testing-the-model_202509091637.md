---
publish: true
aliases:
  - Testing the Model
created: 2026-03-25T15:22:40.624+07:00
modified: 2026-03-25T15:22:40.624+07:00
published: 2026-03-25T15:22:40.624+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-09 16:37
status: in progress
parent:
  - "[[simple-linear-model_202509091314|The Simple Linear Model]]"
---


To say the model is useful is to confirm whether $x$ can really be used to explain $y$. Basically,  changing the values of $x_i$ should relate to change in $y_i$, if $x$ is really an explanatory for $y$.

If $\beta_1 \approx 0$, then $x$ doesn’t affect $y$, which means the model is not useful.

This means, to assess the usefulness of the model, we need to [[3 Reference/def-test_202508050827\|test]] whether $\beta_1 \neq 0$.

## Hypothesis

- $H_0: \beta_1 = 0$
- $H_1: \beta_1 \neq 0$

## Test statistic

$$ 
t = \frac{\hat \beta_1}{s_{\hat \beta_1}}  \sim t_{\text{df}=n-2}\\
$$
Where:
$$
\begin{align*}
s_{\hat\beta_{1}} &= \frac{s}{\sqrt{SS_{xx}}}\\
SS_{xx} &= \sum_{i=1}^n (x_i - \bar x)^2\\
s^2 &= \dfrac{\sum_{i=1}^n \epsilon_i^2}{n - k}
\end{align*}
$$

## Decision rule

Reject $H_0$ if:

- $t<-t_{\alpha/2}$  or  $t>t_{\alpha/2}$  for 2-sided test
- $t<-t_\alpha$  or  $t>t_\alpha$  for 1-sided test

![[assets/image-6.png]]

![[assets/image-7.png]]

## Assessing the model using [[3 Reference/def-confidence-interval_202507220823\|confidence interval]]

We can construct the $(1-\alpha) \times 100\%$ confidence interval for $\beta_1$, which is

$$
\begin{align}
(\hat\beta_1 - t_{\alpha/2} \times s_{\hat \beta_1},\quad \hat\beta_1 + t_{\alpha/2} \times s_{\hat \beta_1}) \\
\end{align}
$$

If the value of $\hat{\beta}_{1}$ is outside the confidence interval, then the model is not useful.