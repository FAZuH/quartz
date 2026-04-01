---
publish: true
aliases:
  - Bartlett's Test for ACF
created: 2026-03-30T02:22:17.513+07:00
modified: 2026-03-31T18:38:30.254+07:00
published: 2026-03-31T18:38:30.254+07:00
creation-time: 2026-03-30 02:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

**Bartlett's test** tests the significance of individual sample autocorrelations $r\_k$ one at a time.

## Hypotheses

$$
\begin{align}
H\_{0} & : \rho\_{k} = 0 \\
H\_{1} & : \rho\_{k} \neq 0
\end{align}
$$

## Test Statistic

For white noise with large $n$:$$r\_k \sim N\left(0, \frac{1}{n}\right)$$

## Decision Rule

Reject $H\_0$ at significance level $\alpha$ if:

$$|r\_k| > \frac{z\_{\alpha/2}}{\sqrt{n}}$$

For $\alpha = 0.05$, reject if $|r\_k| > \dfrac{1.96}{\sqrt{n}}$

If all $|r\_k| < \dfrac{1.96}{\sqrt{n}}$, we conclude the series may be [[white-noise_202603161400|White Noise]] (no significant autocorrelation).

## Related

- [[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]
- [[correlogram_202603161400|Correlogram]]
- [[white-noise_202603161400|White Noise]]
