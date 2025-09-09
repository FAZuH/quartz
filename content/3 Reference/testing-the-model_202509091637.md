---
{"publish":true,"aliases":["Testing the Model"],"created":"2025-09-09T16:37:20.758+07:00","modified":"2025-09-09T16:38:06.425+07:00","published":"2025-09-09T16:38:06.425+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 16:37","status":"baby","parent":["[[linear-model]]"]}
---


To say the model is useful is to confirm whether $x$ can really be used to explain $y$. Basically,  changing the values of $x_i$ should relate to change in $y_i$, if $x$ is really an explanatory for $y$.

If $\beta_1 \approx 0$, then $x$ doesn’t affect $y$, which means the model is not useful.

This means, to assess the usefulness of the model, we need to test whether $\beta_1 \neq 0$.

## Hypothesis

- $H_0: \beta_1 = 0$
- $H_1: \beta_1 \neq 0$

## Test statistic

$$
\begin{align*}
t &= \frac{\hat \beta_1}{s_{\hat \beta_1}}
\sim t_{\text{df}=n-2}\\
s_{\hat\beta 1} &= \frac{s}{\sqrt{SS_{xx}}}\\
SS_{xx} &= \sum_{i=1}^n (x_i - \bar x)^2\\
s^2 &= \dfrac{\sum_{i=1}^N \epsilon_i^2}{n - p}
\end{align*}
$$

## Decision rule

Reject $H_0$ if:

- $t<-t_{\alpha/2}$  or  $t>t_{\alpha/2}$  for 2-sided test
- $t<-t_\alpha$  or  $t>t_\alpha$  for 1-sided test

![[assets/image-6.png]]

![[assets/image-7.png]]

## Assessing the model using confidence interval

We can construct the $(1-\alpha) \times 100\%$ confidence interval for $\beta_1$, which is

$$
(\hat\beta_1 - t_{\alpha/2} \times s_{\hat \beta_1},\quad
\hat\beta_1 + t_{\alpha/2} \times s_{\hat \beta_1})\\ \ \\
\hat\beta_1 \pm t_{\alpha/2} \times s_{\hat \beta_1}
$$

### **Interpretation**

- Let’s say the $95\%$ confidence interval is $(a, b), a < 0, b > 0$. Then there is a $0.95$ chance that $\beta_1$ may be $0$, as the inteval covers from negative to positive
- If $a > 0, b>0$. Then there is $0.95$ chance that $\beta_1 > 0$
- If $a < 0, b<0$. Then there is $0.95$ chance that $\beta_1 < 0$

### Example
