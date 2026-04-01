---
publish: true
aliases:
  - Box-Pierce Test
created: 2026-03-30T02:22:32.160+07:00
modified: 2026-03-31T19:12:08.680+07:00
published: 2026-03-31T19:12:08.680+07:00
creation-time: 2026-03-30 02:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

The**Box-Pierce test** tests whether all [[autocovariance-and-autocorrelation_202603161400|autocorrelations]] up to lag $m$ are jointly zero (i.e., whether the series is white noise).

### Hypotheses

$$
\begin{align}
H\_0 & : \rho\_1 = \rho\_2 = \dots = \rho\_m = 0 \quad \text{(white noise)} \\
H\_1 & : \text{At least one } \rho\_k \neq 0
\end{align}
$$

### Test Statistic

$$Q = T \sum\_{k=1}^{m} r\_k^2$$

where:

- $T$ = number of observations
- $m$ = maximum lag (typically $m \approx T/4$)

### Distribution

Under $H\_0$: $Q \sim \chi^2\_m$

### Decision Rule

Reject $H\_0$ at level $\alpha$ if:

$$Q > \chi^2\_{m, \alpha}$$

> [!WARNING] Limitation
> Box-Pierce approximation to $\chi^2$ is poor for small $n$ (e.g., $n < 100$). Use [[ljung-box-test_202603300222|Ljung-Box Test]] instead in that case.

## Related

- [[ljung-box-test_202603300222|Ljung-Box Test]]
- [[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]
- [[white-noise_202603161400|White Noise]]
