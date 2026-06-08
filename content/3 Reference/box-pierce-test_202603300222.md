---
publish: true
aliases:
  - Box-Pierce Test
created: 2026-04-09T23:07:39.021+07:00
modified: 2026-04-09T23:07:39.022+07:00
published: 2026-04-09T23:07:39.022+07:00
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
H_0 & : \rho_1 = \rho_2 = \dots = \rho_m = 0 \quad \text{(white noise)} \\
H_1 & : \text{At least one } \rho_k \neq 0
\end{align}
$$

### Test Statistic

$Q = T \sum_{k=1}^{m} r_k^2$

where:

- $T$ = number of observations
- $m$ = maximum lag (typically $m \approx T/4$)

### Distribution

Under $H_0$: $Q \sim \chi^2_m$

### Decision Rule

Reject $H_0$ at level $\alpha$ if:

$Q > \chi^2_{m, \alpha}$

> [!WARNING] Limitation
> Box-Pierce approximation to $\chi^2$ is poor for small $n$ (e.g., $n < 100$). Use [[ljung-box-test_202603300222|Ljung-Box Test]] instead in that case.

## Related

- [[ljung-box-test_202603300222|Ljung-Box Test]]
- [[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]
- [[white-noise_202603161400|White Noise]]
