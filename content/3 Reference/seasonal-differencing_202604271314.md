---
publish: true
aliases:
  - Seasonal Differencing
created: 2026-04-27T13:14:09.250+07:00
modified: 2026-04-27T13:14:09.250+07:00
published: 2026-04-27T13:14:09.250+07:00
creation-time: 2026-04-27 13:14
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

Let $Y_t$ be a time series with seasonal period $s$.

**Seasonal Differencing** (Difference musiman) is denoted by $\nabla_s Y_t$ and is defined as:

$$
\nabla_s Y_t = Y_t - Y_{t-s}
$$

> [!TIP] Interpretation
> It is used to remove seasonal trends. For example, subtracting the value of January last year from the value of January this year.

## Related

- [[differencing-to-achieve-stationarity|Differencing to Achieve Stationarity]]
