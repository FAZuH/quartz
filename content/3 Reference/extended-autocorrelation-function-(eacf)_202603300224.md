---
publish: true
aliases:
  - Extended Autocorrelation Function
  - EACF
created: 2026-03-30T02:24:21.115+07:00
modified: 2026-03-30T08:27:48.244+07:00
published: 2026-03-30T08:27:48.244+07:00
creation-time: 2026-03-30 02:24
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

The **Extended Autocorrelation Function (EACF)** is a method for identifying the orders $(p, q)$ of an ARMA model by <u>filtering out the AR</u> component and examining the resulting MA structure.

## Procedure

For ARMA(p,q), neither ACF nor PACF cuts off cleanly. EACF provides a systematic way to identify both $p$ and $q$.

1. **Start with AR(0)**: Compute sample ACF of $Y\_t$ (original series)
2. **For each candidate AR order $k$**: Fit AR($k$) and compute residuals $\hat{a}\_t$
3. **For each candidate MA order $j$**: Examine ACF of filtered series

$$W\_{t,k,j} = Y\_t - \hat{\phi}_1 Y_{t-1} - \dots - \hat{\phi}_k Y_{t-k}$$

4. **Create EACF table**: Mark whether ACF at lag $j+1$ is significantly different from zero
5. **Identify p,q**: For ARMA(p,q), the EACF table shows a <u>triangle of zeros</u> starting at row $p$, column $q$:
   - If AR order $k = p$ and MA order $j \geq q$: $W\_{t,k,j}$ is MA($q$)
   - ACF at lag $j+1$ should be zero for $j \geq q$

## EACF Table Pattern

For ARMA(1,1):

|           | **MA(0)** | **MA(1)** | **MA(2)** | **MA(3)** |
| --------- | --------- | --------- | --------- | --------- |
| **AR(0)** | X         | X         | X         | X         |
| **AR(1)** | X         | **O**     | O         | O         |
| **AR(2)** | X         | X         | O         | O         |
| **AR(3)** | X         | X         | X         | O         |

<u>Triangle of zeros</u> starts at (AR=1, MA=1) → ARMA(1,1)

> [!NOTE] Practical Limitation
> Sample EACF rarely shows a perfect triangle pattern. Look for approximate patterns.

## Decision Rule

EACF at lag $j+1$ is significant if:

$$|\text{ACF}| > \frac{1.96}{\sqrt{n-k-j}}$$

## Related

- [[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]
- [[partial-autocorrelation-(pacf)_202603300223|Partial Autocorrelation (PACF)]]
- [[armapq-process-model_202603161400|ARMA(p,q) Process Model]]
- [[building-models-with-the-box-jenkins-strategy_202603161400|Box-Jenkins Strategy]]
