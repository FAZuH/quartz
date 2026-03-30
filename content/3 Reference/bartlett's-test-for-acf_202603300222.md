---
publish: true
aliases:
  - Bartlett's Test for ACF
created: 2026-03-30T02:22:17.513+07:00
modified: 2026-03-30T02:22:17.513+07:00
published: 2026-03-30T02:22:17.513+07:00
creation-time: 2026-03-30 02:22
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

---

creation-time: 2026-03-30 14:00
status: in progress
parent:

- "[[forecasting methods]]"
  publish: true
  aliases:
- Bartlett's Test

---

## Definition

**Bartlett's test** tests the significance of individual sample autocorrelations $r\_k$ one at a time.

### Hypotheses

$$H\_0: \rho\_k = 0 \quad \text{vs} \quad H\_1: \rho\_k \neq 0$$

### Test Statistic

For white noise with large $n$:$$r\_k \sim N\left(0, \frac{1}{n}\right)$$

### Decision Rule

Reject $H\_0$ at significance level $\alpha$ if:

$$|r\_k| > \frac{z\_{\alpha/2}}{\sqrt{n}}$$

For $\alpha = 0.05$: Reject if $|r\_k| > \dfrac{1.96}{\sqrt{n}}$

> [!NOTE] White Noise TestIf all $|r\_k| < \dfrac{1.96}{\sqrt{n}}$, we conclude the series may be white noise (no significant autocorrelation).

## Related

- [[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]
- [[correlogram_202603161400|Correlogram]]
- [[white-noise_202603161400|White Noise]]
