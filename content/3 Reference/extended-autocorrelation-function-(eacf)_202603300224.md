---
publish: true
aliases:
  - Extended Autocorrelation Function
  - EACF
created: 2026-04-09T23:07:39.386+07:00
modified: 2026-05-07T02:28:18.214+07:00
published: 2026-05-07T02:28:18.214+07:00
cssclasses: ""
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

1. **Start with AR(0)**: Compute sample ACF of $Y_t$ (original series)
2. **For each candidate AR order $k$**: Fit AR($k$) and compute residuals $\hat{a}_t$
3. **For each candidate MA order $j$**: Examine ACF of filtered series

$$W_{t,k,j} = Y_t - \hat{\phi}_1 Y_{t-1} - \dots - \hat{\phi}_k Y_{t-k}$$

4. **Create EACF table**: Mark whether ACF at lag $j+1$ is significantly different from zero
5. **Identify p,q**: For ARMA(p,q), the EACF table shows a <u>triangle of zeros</u> starting at row $p$, column $q$:
	- If AR order $k = p$ and MA order $j \geq q$: $W_{t,k,j}$ is MA($q$)
	- ACF at lag $j+1$ should be zero for $j \geq q$

## EACF Table Pattern

For ARMA(1,1):

|           | **MA(0)** | **MA(1)**    | **MA(2)** | **MA(3)** |
| --------- | --------- | ------------ | --------- | --------- |
| **AR(0)** | X         | X            | X         | X         |
| **AR(1)** | X         | <u>**O**</u> | O         | O         |
| **AR(2)** | X         | X            | O         | O         |
| **AR(3)** | X         | X            | X         | O         |

<u>Triangle of zeros</u> starts at (AR=1, MA=1) → ARMA(1,1)

> [!NOTE] Practical Limitation
> Sample EACF rarely shows a perfect triangle pattern. Look for approximate patterns.

## Decision Rule

EACF at lag $j+1$ is significant if:

$$|\text{ACF}| > \frac{1.96}{\sqrt{n-k-j}}$$

## Example: EACF of ARMA(1,1)

Consider the series with true model **ARMA(1,1)**:

$$Y_t = 0.7Y_{t-1} + a_t - 0.4a_{t-1}$$

**Step 1 — AR(0) row:** ACF of $Y_t$ tails off slowly (neither cuts off cleanly), meaning it is not a simple MA model. Mark X across all MA lags at AR(0).

**Step 2 — AR(1) row:** Fit AR(1) to $Y_t$, obtain residuals: $$W_{t,1,j} = Y_t - \hat{\phi}_1 Y_{t-1}$$ If $k=1=p$, residuals behave like MA(1). So:

- ACF at lag 1 (j=0): significant → **X**
- ACF at lag 2 (j=1): not significant → **O**
- ACF at lag 3 (j=2): not significant → **O**

**Step 3 — AR(2) row:** Overfitting AR order. Residuals no longer have clean MA structure, so zeros don't start at MA(1):

- ACF at lag 1: significant → **X**
- ACF at lag 2: significant → **X**
- ACF at lag 3: not significant → **O**

**Resulting table:**

| |**MA(0)**|**MA(1)**|**MA(2)**|**MA(3)**|
|---|---|---|---|---|
|**AR(0)**|X|X|X|X|
|**AR(1)**|X|**O**|O|O|
|**AR(2)**|X|X|O|O|
|**AR(3)**|X|X|X|O|

Triangle of zeros starts at **(AR=1, MA=1)** → identify as **ARMA(1,1)**.

**Significance check** at $n=100$, $k=1$, $j=1$: $$\text{threshold} = \frac{1.96}{\sqrt{100-1-1}} = \frac{1.96}{\sqrt{98}} \approx 0.198$$

Any $|\text{ACF}| < 0.198$ is marked O.

## Related

- [[3 Reference/sample-autocorrelation_202603161400\|Sample Autocorrelation (ACF)]]
- [[3 Reference/partial-autocorrelation-(pacf)_202603300223\|Partial Autocorrelation (PACF)]]
- [[3 Reference/armapq-process-model_202603161400\|ARMA(p,q) Process Model]]
- [[3 Reference/building-models-with-the-box-jenkins-strategy_202603161400\|Box-Jenkins Strategy]]