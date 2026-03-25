---
publish: true
created: 2026-03-25T15:22:40.586+07:00
modified: 2026-03-25T15:22:40.586+07:00
published: 2026-03-25T15:22:40.586+07:00
creation-time: 2025-03-28 20:52
status: in progress
tags:
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

This chapter addresses specifying ARIMA($p,d,q$) models for time series, focusing on selecting orders $p$, $d$, and $q$.

It introduces tools like the sample autocorrelation function (ACF), partial autocorrelation function (PACF), extended autocorrelation function (EACF), and the Dickey-Fuller unit-root test, applying them to simulated and real data.

## Overview of Model Specification

ARIMA models cover stationary and nonstationary series. The specification process, popularized as the Box-Jenkins method, involves:

1. Tentatively selecting $p$, $d$, and $q$.
2. Estimating parameters ($\phi$, $\theta$, $\sigma\_e$).
3. Checking model adequacy, iterating if needed.

## Properties of the Sample Autocorrelation Function

The Autocorrelation Function (ACF) measures the correlation between a time series and its own lagged values, showing how values at time $t$ relate to values at previous times $t-k$. Values range from -1 to 1; significant spikes indicate strong correlation at specific lags $k$.

The sample ACF, $r\_k = \frac{\sum\_{t=k+1}^n (Y\_t - \bar{Y})(Y\_{t-k} - \bar{Y})}{\sum\_{t=1}^n (Y\_t - \bar{Y})^2}$, estimates the theoretical ACF $\rho\_k$. Its sampling properties are complex, but for a stationary series $Y\_t = \mu + \sum\_{j=0}^\infty \psi\_j e\_{t-j}$ (with $\sum\_{j=0}^\infty \vert \psi\_j \vert < \infty$, $\sum\_{j=0}^\infty j \psi\_j^2 < \infty$), $\sqrt{n}(r\_k - \rho\_k)$ is asymptotically normal with variance:

$$ c\_{kk} = \sum\_{k=-\infty}^\infty (\rho\_{k+i} \rho\_{k+j} + \rho\_{k-i} \rho\_{k+j} - 2 \rho\_i \rho\_k \rho\_{k+j} - 2 \rho\_j \rho\_k \rho\_{k+i} + 2 \rho\_i \rho\_j \rho\_k^2) $$

### Special Cases

- **White Noise**: $\operatorname{Var}(r\_k) \approx \frac{1}{n}$, $\operatorname{Corr}(r\_k, r\_j) \approx 0$ ($k \neq j$).
- **AR(1), $\rho\_k = \phi^k$**: $\operatorname{Var}(r\_k) \approx \frac{1}{n} \left\[ \frac{(1 + \phi^2)(1 - \phi^{2k})}{1 - \phi^2} - 2k \phi^{2k} \right]$, e.g., $\operatorname{Var}(r\_1) \approx \frac{1 - \phi^2}{n}$.
- **MA(1)**: $c\_{11} = 1 - 3 \rho\_1^2 + 4 \rho\_1^4$, $c\_{kk} = 1 + 2 \rho\_1^2$ ($k > 1$).
- **MA(q)**: $\operatorname{Var}(r\_k) \approx \frac{1}{n} \left\[ 1 + 2 \sum\_{j=1}^q \rho\_j^2 \right]$ ($k > q$).

| Model     | $\operatorname{Var}(r\_1)$       | $\operatorname{Var}(r\_k)$, $k > 1$ | $\operatorname{Corr}(r\_1, r\_2)$ |
|-----------|--------------------------------|------------------------------------|-------------------------------|
| White Noise | $\frac{1}{n}$                | $\frac{1}{n}$                     | 0                             |
| AR(1), $\phi = 0.9$ | $\frac{0.19}{n}$      | $\frac{5.94}{n}$ (large $k$)      | $0.97$                        |
| MA(1), $\theta = 0.9$ | $\frac{0.50}{n}$      | $\frac{1.49}{n}$                  | $-0.86$                       |

## Partial and Extended Autocorrelation Functions

### Partial Autocorrelation Function (PACF)

- Measures the correlation between a time series and its lagged values, after removing the effects of earlier lags.
- For lag $k$, PACF shows the direct correlation between $y\_t$ and $y\_{t-k}$, adjusting for correlations at lags $< k$.

The PACF, $\phi\_{kk}$, measures **correlation between $Y\_t$ and $Y\_{t-k}$ after removing effects of $Y\_{t-1}, \ldots, Y\_{t-k+1}$:**

- $\phi\_{kk} = \operatorname{Corr}(Y\_t - \hat{Y}_t, Y_{t-k} - \hat{Y}\_{t-k})$, where $\hat{Y}\_t$ is the best linear predictor.
- **AR(p)**: $\phi\_{kk} = 0$ ($k > p$).
- **MA(1)**: $\phi\_{kk} = -\frac{\theta^k (1 - \theta^2)}{1 - \theta^{2(k+1)}}$ ($k \geq 1$), decays exponentially.
- Computed via Yule-Walker equations: $\rho\_j = \sum\_{m=1}^k \phi\_{km} \rho\_{j-m}$, solved recursively.

Sample PACF, $\hat{\phi}_{kk}$, uses $r\_k$ in place of $\rho\_k$; for AR(p), $\hat{\phi}_{kk} \sim N(0, \frac{1}{n})$ ($k > p$).

### Extended Autocorrelation Function (EACF)

- A tool to identify both AR and MA orders ($p$ and $q$) in ARIMA models by analyzing the autocorrelation of residuals after fitting an AR model.
- Presented as a table, where rows are AR orders and columns are MA orders; a "zero triangle" of insignificant autocorrelations indicates the appropriate $(p, q)$.

For ARMA($p,q$), the **EACF filters out AR components, leaving an MA(q) process.** Define $W\_{t,k,j} = Y\_t - \sum\_{m=1}^k \tilde{\phi}_m Y_{t-m}$, where $\tilde{\phi}_m$ are estimated iteratively. The sample ACF of $W_{t,k,j}$ cuts off after lag $q$ when $k = p$, forming a triangle of zeros in an EACF table.

| Model Behavior | ACF             | PACF            |
|----------------|-----------------|-----------------|
| AR(p)          | Tails off       | Cuts off at $p$ |
| MA(q)          | Cuts off at $q$ | Tails off       |
| ARMA(p,q)      | Tails off       | Tails off       |

## Specification of Simulated Time Series

Simulations (e.g., MA(1) with $\theta = 0.9$, AR(1) with $\phi = 0.9$, ARMA(1,1)) show ACF and PACF patterns often match theory, though sample variability can mislead (e.g., MA(2) resembling MA(1)).

## Nonstationarity

Nonstationary series (e.g., random walks, oil prices) exhibit slowly decaying sample ACFs. Differencing reduces them to stationary ARMA models (e.g., IMA(1,1) for oil prices). Overdifferencing introduces spurious MA terms (e.g., $\nabla^2 Y\_t = e\_t - e\_{t-1}$ for a random walk).

### Dickey-Fuller Unit-Root Test

Tests $H\_0: \alpha = 1$ in $Y\_t = \alpha Y\_{t-1} + X\_t$ ($X\_t$ stationary):

- Regression: $\nabla Y\_t = a Y\_{t-1} + \sum\_{j=1}^k \phi\_j \nabla Y\_{t-j} + e\_t$, $a = 0$ under $H\_0$.
- ADF statistic (t-statistic of $a$) has a nonstandard distribution; applied to a random walk, it supports a unit root.

## Other Specification Methods

- **AIC**: $\text{AIC} = -2 \log(\text{ML}) + 2k$, penalizes complexity.
- **AIC$\_c$**: Adds $\frac{2(k+1)(k+2)}{n-k-2}$ for bias correction.
- **BIC**: $\text{BIC} = -2 \log(\text{ML}) + k \log(n)$, consistent for true ARMA orders.
- **Hannan-Rissanen**: Fits high-order AR, uses residuals to estimate ARMA via regression.

Subset ARMA models (e.g., $Y\_t = 0.8 Y\_{t-12} + e\_t + 0.7 e\_{t-12}$) are identified via best-subset regression.

## Specification of Actual Time Series

- **LA Rainfall**: Logarithms suggest white noise.
- **Chemical Color**: AR(1) from PACF.
- **Hare Abundance**: Square root, AR(2) or AR(3).
- **Oil Prices**: IMA(1,1) or ARIMA(1,1,0) on logarithms.

## Summary

Tools like sample ACF, PACF, EACF, and unit-root tests guide ARIMA specification. Iteratively refining models balances simplicity and fit, as demonstrated with diverse examples.
