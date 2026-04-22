---
publish: true
aliases:
  - Conditional Variance
created: 2026-04-20T12:23:26.638+07:00
modified: 2026-04-20T12:47:00.882+07:00
published: 2026-04-20T12:47:00.882+07:00
cssclasses: ""
creation-time: 2026-04-20 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


> The conditional variance of a return series measures the **time-varying volatility** given past information.

## Definition

For a return [[3 Reference/time-series-data_202603161400\|series]] $\{r_t\}$, the conditional variance at time $t$ given information set $F_{t-1}$ is:

$$
\sigma_t^2 = \text{Var}(r_t | F_{t-1}) = E(r_t^2 | r_{t-1}, r_{t-2}, ...)
$$

The last equality holds when $E(r_t | F_{t-1}) = 0$ (zero conditional mean), which is typical for financial returns.

## Why Conditional Variance?

> [!TIP] Interpretation
> 1. An asset is **risky** if its return $r_t$ is volatile (changes a lot over time)
> 2. In statistics, we use **variance** to measure volatility (dispersion), and thus risk
> 3. We care about **conditional variance** because we want to use past history to **forecast** future variance

## Characteristics of Volatility

1. **Volatility Clustering**: High volatility periods cluster together; low volatility periods cluster together
2. **Continuity**: Volatility evolves continuously—jumps are rare
3. **Stationarity**: Volatility varies within a fixed range (mean-reverting)
4. **Leverage Effect**: Volatility responds differently to price increases vs decreases

## In ARCH/GARCH Models

[[3 Reference/definition-arch(m)-model_202604201223\|ARCH]]/[[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH]] models specifically model this conditional variance:
- [[3 Reference/armapq-process-model_202603161400\|ARMA]] models the **conditional mean**: $E(r_t | F_{t-1})$
- ARCH/GARCH models the **conditional variance**: $\text{Var}(r_t | F_{t-1}) = \sigma_t^2$

Together, they provide a complete description of the conditional distribution of returns.

## Related
- [[3 Reference/about-volatility-clustering_202604201222\|Volatility Clustering]]
- [[3 Reference/definition-arch(m)-model_202604201223\|ARCH(m) Model]]
- [[3 Reference/definition-garch(m,s)-model_202604201224\|GARCH(m,s) Model]]