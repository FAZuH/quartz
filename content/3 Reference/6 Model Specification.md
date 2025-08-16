---
{"publish":true,"created":"2025-08-15T13:53:58.713+07:00","modified":"2025-08-15T13:53:58.714+07:00","published":"2025-08-15T13:53:58.714+07:00","cssclasses":"","creation-time":"2025-03-28 20:52","status":"baby","tags":null,"parent":["[[time series analysis]]"]}
---


This chapter addresses specifying ARIMA($p,d,q$) models for time series, focusing on selecting orders $p$, $d$, and $q$.

It introduces tools like the sample autocorrelation function (ACF), partial autocorrelation function (PACF), extended autocorrelation function (EACF), and the Dickey-Fuller unit-root test, applying them to simulated and real data.

## Overview of Model Specification

ARIMA models cover stationary and nonstationary series. The specification process, popularized as the Box-Jenkins method, involves:
1. Tentatively selecting $p$, $d$, and $q$.
2. Estimating parameters ($\phi$, $\theta$, $\sigma_e$).
3. Checking model adequacy, iterating if needed.

## Properties of the Sample Autocorrelation Function

The Autocorrelation Function (ACF) measures the correlation between a time series and its own lagged values, showing how values at time $t$ relate to values at previous times $t-k$. Values range from -1 to 1; significant spikes indicate strong correlation at specific lags $k$.

The sample ACF, $r_k = \frac{\sum_{t=k+1}^n (Y_t - \bar{Y})(Y_{t-k} - \bar{Y})}{\sum_{t=1}^n (Y_t - \bar{Y})^2}$, estimates the theoretical ACF $\rho_k$. Its sampling properties are complex, but for a stationary series $Y_t = \mu + \sum_{j=0}^\infty \psi_j e_{t-j}$ (with $\sum_{j=0}^\infty \vert \psi_j \vert < \infty$, $\sum_{j=0}^\infty j \psi_j^2 < \infty$), $\sqrt{n}(r_k - \rho_k)$ is asymptotically normal with variance:

$$ c_{kk} = \sum_{k=-\infty}^\infty (\rho_{k+i} \rho_{k+j} + \rho_{k-i} \rho_{k+j} - 2 \rho_i \rho_k \rho_{k+j} - 2 \rho_j \rho_k \rho_{k+i} + 2 \rho_i \rho_j \rho_k^2) $$

### Special Cases
- **White Noise**: $\operatorname{Var}(r_k) \approx \frac{1}{n}$, $\operatorname{Corr}(r_k, r_j) \approx 0$ ($k \neq j$).
- **AR(1), $\rho_k = \phi^k$**: $\operatorname{Var}(r_k) \approx \frac{1}{n} \left[ \frac{(1 + \phi^2)(1 - \phi^{2k})}{1 - \phi^2} - 2k \phi^{2k} \right]$, e.g., $\operatorname{Var}(r_1) \approx \frac{1 - \phi^2}{n}$.
- **MA(1)**: $c_{11} = 1 - 3 \rho_1^2 + 4 \rho_1^4$, $c_{kk} = 1 + 2 \rho_1^2$ ($k > 1$).
- **MA(q)**: $\operatorname{Var}(r_k) \approx \frac{1}{n} \left[ 1 + 2 \sum_{j=1}^q \rho_j^2 \right]$ ($k > q$).

| Model     | $\operatorname{Var}(r_1)$       | $\operatorname{Var}(r_k)$, $k > 1$ | $\operatorname{Corr}(r_1, r_2)$ |
|-----------|--------------------------------|------------------------------------|-------------------------------|
| White Noise | $\frac{1}{n}$                | $\frac{1}{n}$                     | 0                             |
| AR(1), $\phi = 0.9$ | $\frac{0.19}{n}$      | $\frac{5.94}{n}$ (large $k$)      | $0.97$                        |
| MA(1), $\theta = 0.9$ | $\frac{0.50}{n}$      | $\frac{1.49}{n}$                  | $-0.86$                       |

## Partial and Extended Autocorrelation Functions

### Partial Autocorrelation Function (PACF)

- Measures the correlation between a time series and its lagged values, after removing the effects of earlier lags.
- For lag $k$, PACF shows the direct correlation between $y_t$ and $y_{t-k}$, adjusting for correlations at lags $< k$.

The PACF, $\phi_{kk}$, measures **correlation between $Y_t$ and $Y_{t-k}$ after removing effects of $Y_{t-1}, \ldots, Y_{t-k+1}$:**
- $\phi_{kk} = \operatorname{Corr}(Y_t - \hat{Y}_t, Y_{t-k} - \hat{Y}_{t-k})$, where $\hat{Y}_t$ is the best linear predictor.
- **AR(p)**: $\phi_{kk} = 0$ ($k > p$).
- **MA(1)**: $\phi_{kk} = -\frac{\theta^k (1 - \theta^2)}{1 - \theta^{2(k+1)}}$ ($k \geq 1$), decays exponentially.
- Computed via Yule-Walker equations: $\rho_j = \sum_{m=1}^k \phi_{km} \rho_{j-m}$, solved recursively.

Sample PACF, $\hat{\phi}_{kk}$, uses $r_k$ in place of $\rho_k$; for AR(p), $\hat{\phi}_{kk} \sim N(0, \frac{1}{n})$ ($k > p$).

### Extended Autocorrelation Function (EACF)

- A tool to identify both AR and MA orders ($p$ and $q$) in ARIMA models by analyzing the autocorrelation of residuals after fitting an AR model.
- Presented as a table, where rows are AR orders and columns are MA orders; a "zero triangle" of insignificant autocorrelations indicates the appropriate $(p, q)$.

For ARMA($p,q$), the **EACF filters out AR components, leaving an MA(q) process.** Define $W_{t,k,j} = Y_t - \sum_{m=1}^k \tilde{\phi}_m Y_{t-m}$, where $\tilde{\phi}_m$ are estimated iteratively. The sample ACF of $W_{t,k,j}$ cuts off after lag $q$ when $k = p$, forming a triangle of zeros in an EACF table.

| Model Behavior | ACF             | PACF            |
|----------------|-----------------|-----------------|
| AR(p)          | Tails off       | Cuts off at $p$ |
| MA(q)          | Cuts off at $q$ | Tails off       |
| ARMA(p,q)      | Tails off       | Tails off       |

## Specification of Simulated Time Series

Simulations (e.g., MA(1) with $\theta = 0.9$, AR(1) with $\phi = 0.9$, ARMA(1,1)) show ACF and PACF patterns often match theory, though sample variability can mislead (e.g., MA(2) resembling MA(1)).

## Nonstationarity

Nonstationary series (e.g., random walks, oil prices) exhibit slowly decaying sample ACFs. Differencing reduces them to stationary ARMA models (e.g., IMA(1,1) for oil prices). Overdifferencing introduces spurious MA terms (e.g., $\nabla^2 Y_t = e_t - e_{t-1}$ for a random walk).

### Dickey-Fuller Unit-Root Test
Tests $H_0: \alpha = 1$ in $Y_t = \alpha Y_{t-1} + X_t$ ($X_t$ stationary):
- Regression: $\nabla Y_t = a Y_{t-1} + \sum_{j=1}^k \phi_j \nabla Y_{t-j} + e_t$, $a = 0$ under $H_0$.
- ADF statistic (t-statistic of $a$) has a nonstandard distribution; applied to a random walk, it supports a unit root.

## Other Specification Methods

- **AIC**: $\text{AIC} = -2 \log(\text{ML}) + 2k$, penalizes complexity.
- **AIC$_c$**: Adds $\frac{2(k+1)(k+2)}{n-k-2}$ for bias correction.
- **BIC**: $\text{BIC} = -2 \log(\text{ML}) + k \log(n)$, consistent for true ARMA orders.
- **Hannan-Rissanen**: Fits high-order AR, uses residuals to estimate ARMA via regression.

Subset ARMA models (e.g., $Y_t = 0.8 Y_{t-12} + e_t + 0.7 e_{t-12}$) are identified via best-subset regression.

## Specification of Actual Time Series

- **LA Rainfall**: Logarithms suggest white noise.
- **Chemical Color**: AR(1) from PACF.
- **Hare Abundance**: Square root, AR(2) or AR(3).
- **Oil Prices**: IMA(1,1) or ARIMA(1,1,0) on logarithms.

## Summary

Tools like sample ACF, PACF, EACF, and unit-root tests guide ARIMA specification. Iteratively refining models balances simplicity and fit, as demonstrated with diverse examples.
