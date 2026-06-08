---
publish: true
aliases:
  - Jarque-Bera Test
created: 2026-06-01T12:21:33.783+07:00
modified: 2026-06-01T12:21:33.783+07:00
published: 2026-06-01T12:21:33.783+07:00
creation-time: 2026-06-01 12:21
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Asymptotic test for normality of residuals based on the skewness and kurtosis of the OLS residuals.

## Procedure

Tests whether the residuals from a fitted model follow a normal distribution. It is an asymptotic (large-sample) test based on the [[least-square-method_202604052128|OLS]] residuals.

The test computes the **skewness** ($S$) and **kurtosis** ($K$) of the residuals and uses the test statistic:

$$
\text{JB} = \frac{n}{6}\left[ S^2 + \frac{(K - 3)^2}{4} \right]
$$

where:

- $n$ = sample size
- $S$ = skewness coefficient
- $K$ = kurtosis coefficient

### Hypotheses

- $H_0$: $S = 0$ and $K = 3$ (residuals are normally distributed)
- $H_1$: $S \neq 0$ or $K \neq 3$ (residuals are not normally distributed)

Under $H_0$:

$$
\text{JB} \sim \chi^2_{(2)}
$$

For a normally distributed variable, $S = 0$ and $K = 3$, so the JB statistic is expected to be $0$. If the JB statistic is significantly larger than the critical $\chi^2$ value, normality is rejected.

> [!TIP] Interpretation
> A significant JB test indicates the residuals are skewed or have heavy/light tails relative to a normal distribution. This can affect the validity of prediction limits and hypothesis tests that rely on normality.

## Related

- [[Durbin-Watson Test]]
- [[Breusch-Godfrey LM Test]]
- [[building-models-with-the-box-jenkins-strategy_202603161400|Box-Jenkins Strategy]]
