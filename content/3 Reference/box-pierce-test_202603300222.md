---
publish: true
aliases:
  - Box-Pierce Test
created: 2026-03-30T02:22:32.160+07:00
modified: 2026-03-31T19:12:08.680+07:00
published: 2026-03-31T19:12:08.680+07:00
cssclasses: ""
creation-time: 2026-03-30 02:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Definition

The**Box-Pierce test** tests whether all [[3 Reference/autocovariance-and-autocorrelation_202603161400\|autocorrelations]] up to lag $m$ are jointly zero (i.e., whether the series is white noise).

### Hypotheses

$$
\begin{align}
H_0 & : \rho_1 = \rho_2 = \dots = \rho_m = 0 \quad \text{(white noise)} \\
H_1 & : \text{At least one } \rho_k \neq 0
\end{align}
$$

### Test Statistic

$$Q = T \sum_{k=1}^{m} r_k^2$$

where:
- $T$ = number of observations
- $m$ = maximum lag (typically $m \approx T/4$)

### Distribution

Under $H_0$: $Q \sim \chi^2_m$

### Decision Rule

Reject $H_0$ at level $\alpha$ if:

$$Q > \chi^2_{m, \alpha}$$

> [!WARNING] Limitation
> Box-Pierce approximation to $\chi^2$ is poor for small $n$ (e.g., $n < 100$). Use [[3 Reference/ljung-box-test_202603300222\|Ljung-Box Test]] instead in that case.

## Related

- [[3 Reference/ljung-box-test_202603300222\|Ljung-Box Test]]
- [[3 Reference/sample-autocorrelation_202603161400\|Sample Autocorrelation (ACF)]]
- [[3 Reference/white-noise_202603161400\|White Noise]]