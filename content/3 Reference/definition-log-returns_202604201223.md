---
publish: true
aliases:
  - Log-Returns
created: 2026-04-20T12:23:08.328+07:00
modified: 2026-04-20T13:39:12.195+07:00
published: 2026-04-20T13:39:12.195+07:00
creation-time: 2026-04-20 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

> The log-difference between $t$ and $t-1$

## Definition

Let $p_t$ be the price of a financial asset at [[time-series-components_202603161400|time]] $t$ (e.g., daily stock price, currency exchange rate, commodity price).

The **log-return** at time $t$ is defined as:

$$
r_t = \log(p_t) - \log(p_{t-1}) = \log\left(\frac{p_t}{p_{t-1}}\right)
$$

## Approximation to Relative Returns

By Taylor expansion, for small $\frac{p_t - p_{t-1}}{p_{t-1}}$:

$$
r_t = \log\left(1 + \frac{p_t - p_{t-1}}{p_{t-1}}\right) \approx \frac{p_t - p_{t-1}}{p_{t-1}}
$$

So log-returns are approximately equal to **relative returns** (percentage changes).

## Why Use Log-Returns?

> [!TIP] Key Advantage: Additivity
> Log-returns have the **additivity property** that relative returns lack:
>
> - Multi-period return: $r_{t,t+k} = \log(p_{t+k}/p_t) = \sum_{i=1}^{k} r_{t+i}$
> - This makes statistical analysis much simpler

Other advantages:

- Log-returns are time-additive (compound naturally)
- Symmetric treatment of gains and losses
- Better statistical properties (closer to [[white-noise_202603161400|normality]])
- Mathematical convenience in continuous-time models

## Related

- [[definition-continuously-compounded-return_202604201223|Continuously Compounded Return]]
- [[about-volatility-clustering_202604201222|Volatility Clustering]]
