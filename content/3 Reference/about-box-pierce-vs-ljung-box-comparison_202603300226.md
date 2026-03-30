---
publish: true
aliases:
  - Box-Pierce vs Ljung-Box Comparison
created: 2026-03-30T02:26:05.692+07:00
modified: 2026-03-30T03:54:45.699+07:00
published: 2026-03-30T03:54:45.699+07:00
creation-time: 2026-03-30 02:26
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Comparison

Both tests check whether all autocorrelations up to lag $m$ are jointly zero (white noise test).

### Box-Pierce Test

$$Q = T \sum\_{k=1}^{m} r\_k^2$$

### Ljung-Box Test

$$LB = n(n+2) \sum\_{k=1}^{m} \frac{r\_k^2}{n-k}$$

## Key Differences

| Aspect | Box-Pierce | Ljung-Box |
|--------|------------|------------|
| Formula | $Q = T\sum r\_k^2$ | $LB = n(n+2)\sum \frac{r\_k^2}{n-k}$ |
| Weighting | Equal weights | Weighted by $\frac{n+2}{n-k}$ |
| Best for | Large $n$ | Small $n$ |
| $\chi^2$ approximation | Poor for $n < 100$ | Better for all $n$ |

## Recommendations

| Sample Size | Test to Use |
|-------------|-------------|
| $n < 100$ | Ljung-Box |
| $n \geq 100$ | Either (Ljung-Box still preferred) |

> [!TIP] Why Ljung-Box is Better
> The weighting $\frac{n+2}{n-k}$ gives more weight to early lags where we have more data points, improving the $\chi^2$ approximation.

## Related

- [[definition-box-pierce-test_202603300222|Box-Pierce Test]]
- [[definition-ljung-box-test_202603300222|Ljung-Box Test]]
- [[white-noise_202603161400|White Noise]]
