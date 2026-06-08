---
publish: true
aliases:
  - Continuously Compounded Return
created: 2026-04-20T12:23:16.359+07:00
modified: 2026-04-20T13:41:19.569+07:00
published: 2026-04-20T13:41:19.569+07:00
creation-time: 2026-04-20 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

> An alternative interpretation of [[definition-log-returns_202604201223|Log-Returns]] as the continuously compounded rate of return.

## Definition

Given log-return $r_t = \log(p_t) - \log(p_{t-1})$, we have:

$$
e^{r_t} = \frac{p_t}{p_{t-1}} \implies p_t = e^{r_t} \cdot p_{t-1}
$$

This can also be written as:

$$
p_t = \lim_{n \to \infty} \left(1 + \frac{r_t}{n}\right)^n p_{t-1}
$$

## Interpretation

> [!TIP] Interpretation
> The continuously compounded return $r_t$ represents the instantaneous growth rate that, if compounded continuously over the period, would transform $p_{t-1}$ into $p_t$.

This is the standard return measure used in:

- Financial [[time-series-data_202603161400|econometrics]]
- Option pricing models (Black-Scholes)
- Portfolio theory
- Risk management (VaR calculations)

## Relationship to Log-Returns

Continuously compounded returns **are** log-returns. The two terms are used interchangeably in financial econometrics:

- Log-return emphasizes the mathematical form ($\log$ difference)
- Continuously compounded return emphasizes the economic interpretation (instantaneous growth rate)

## Related

- [[definition-log-returns_202604201223|Log-Returns]]
- [[definition-arch(m)-model_202604201223|ARCH(m) Model]]
