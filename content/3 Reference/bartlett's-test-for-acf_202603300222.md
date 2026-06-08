---
publish: true
aliases:
  - Bartlett's Test for ACF
created: 2026-04-09T23:07:39.010+07:00
modified: 2026-04-09T23:07:39.011+07:00
published: 2026-04-09T23:07:39.011+07:00
creation-time: 2026-03-30 02:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

**Bartlett's test** tests the significance of individual sample autocorrelations $r_k$ one at a time.

## Hypotheses

$$
\begin{align}
H_{0} & : \rho_{k} = 0 \\
H_{1} & : \rho_{k} \neq 0
\end{align}
$$

## Test Statistic

For white noise with large $n$:$r_k \sim N\left(0, \frac{1}{n}\right)$

## Decision Rule

Reject $H_0$ at significance level $\alpha$ if:

$|r_k| > \frac{z_{\alpha/2}}{\sqrt{n}}$

For $\alpha = 0.05$, reject if $|r_k| > \dfrac{1.96}{\sqrt{n}}$

If all $|r_k| < \dfrac{1.96}{\sqrt{n}}$, we conclude the series may be [[white-noise_202603161400|White Noise]] (no significant autocorrelation).

## Related

- [[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]
- [[correlogram_202603161400|Correlogram]]
- [[white-noise_202603161400|White Noise]]
