---
publish: true
aliases:
  - Probability of Population Extinction
created: 2026-05-08T06:23:06.539+07:00
modified: 2026-06-05T03:11:27.230+07:00
published: 2026-06-05T03:11:27.230+07:00
creation-time: 2026-05-08 06:18
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Definition

For a [[birth-and-death-process_202605080517|birth and death process]] with absorbing state $0$ ($\lambda_0 = \mu_0 = 0$), the **probability of population extinction** is $\lim_{t \to \infty} p_0(t)$.

> **Theorem 6.2 (Allen).** Let $\mu_0 = 0 = \lambda_0$ with initial population $X(0) = m \geq 1$.

**(i) Infinite State Space.** Suppose $\mu_i > 0$ and $\lambda_i > 0$ for all $i = 1, 2, \ldots$

If $\sum_{i=1}^{\infty} \frac{\mu_1\mu_2 \cdots \mu_i}{\lambda_1\lambda_2 \cdots \lambda_i} = \infty,$ then $\lim_{t \to \infty} p_0(t) = 1$ (certain extinction).

If $\sum_{i=1}^{\infty} \frac{\mu_1\mu_2 \cdots \mu_i}{\lambda_1\lambda_2 \cdots \lambda_i} < \infty,$ then

$\lim_{t \to \infty} p_0(t) = \frac{\sum_{i=m}^{\infty} \frac{\mu_1\mu_2\cdots\mu_i}{\lambda_1\lambda_2\cdots\lambda_i}}{1 + \sum_{i=1}^{\infty} \frac{\mu_1\mu_2\cdots\mu_i}{\lambda_1\lambda_2\cdots\lambda_i}}$

**(ii) Finite State Space.** If $\lambda_i = 0$ for $i \geq N$, then $\lim_{t \to \infty} p_0(t) = 1$ (extinction is certain).

> [!TIP] Interpretation
> When the death rates dominate the birth rates sufficiently (making the infinite sum diverge), extinction is guaranteed. When birth rates dominate more strongly, there is a positive probability that the population grows indefinitely (i.e., extinction is not certain).

> [!NOTE]- Example: Simple Birth and Death Process
> For $\lambda_i = \lambda i$ and $\mu_i = \mu i$:
>
> $\sum_{i=1}^{\infty} \frac{\mu_1\cdots\mu_i}{\lambda_1\cdots\lambda_i} = \sum_{i=1}^{\infty} \left(\frac{\mu}{\lambda}\right)^i = \begin{cases} \infty, & \mu \geq \lambda \\ \frac{\mu/\lambda}{1 - \mu/\lambda} < \infty, & \mu < \lambda \end{cases}$
>
> - If $\mu \geq \lambda$: extinction is certain ($\lim p_0(t) = 1$)
> - If $\mu < \lambda$: $\lim p_0(t) = (\mu/\lambda)^m$ (not certain; positive probability of indefinite growth)

## Related

- [[expected-time-to-extinction_202605080619|Expected Time to Extinction]]
- [[birth-and-death-process_202605080517|Birth and Death Process]]
- [[def-extinction-probability_202603280851|Extinction Probability]]
- [[stochastic-logistic-growth-process_202605080619|Stochastic Logistic Growth Process]]
