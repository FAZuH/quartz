---
publish: true
aliases:
  - Forecasting Methods Cheatsheet
created: 2026-03-29T21:04:46.757+07:00
modified: 2026-03-30T01:17:39.086+07:00
published: 2026-03-30T01:17:39.086+07:00
creation-time: 2026-03-29 21:04
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Time Series Fundamentals

### Basic Definitions

| Concept                                                 | Definition                                      | Formula                     |
| ------------------------------------------------------- | ----------------------------------------------- | --------------------------- |
| [[stochastic-process_202603161400\|Stochastic Process]] | Collection of random variables indexed by time  | ${Y\_t : t \in T}$         |
| [[time-series-data_202603161400\|Time Series]]          | Data collected according to time order          | —                           |
| [[cross-section-data_202603161400\|Cross-section]]      | Data for multiple subjects at single time point | —                           |
| [[lag-definition_202603161400\|Lag]]                    | Offset from current index                       | $X\_{t-k}$ is $X$ at lag $k$ |

### Mean, Covariance, and Correlation

$$E\[Y\_t] = \mu\_t \qquad \text{(Mean function)}$$

$$\gamma\_{t,s} = \operatorname{Cov}(Y\_t, Y\_s) = E\[(Y\_t - \mu\_t)(Y\_s - \mu\_s)]$$

$$\rho\_{t,s} = \operatorname{Corr}(Y\_t, Y\_s) = \frac{\gamma\_{t,s}}{\sqrt{\gamma\_{t,t}\gamma\_{s,s}}}$$

**Properties**: $\gamma\_0 = \operatorname{Var}(Y\_t)$, $\rho\_0 = 1$, $|\rho\_{t,s}| \leq 1$, $\gamma\_{t,s} = \gamma\_{s,t}$

### [[time-series-components_202603161400|Time Series Components]]

- **Trend**: Long-term direction
- **Seasonal**: Predictable patterns by calendar
- **Cyclical**: Long-term waves without fixed period
- **Irregular**: Unpredictable random deviations

## Stationarity

### [[strictly-stationary_202603161400|Strictly Stationary]]

Joint distribution of $(Y\_{t\_1}, ..., Y\_{t\_n})$ equals that of $(Y\_{t\_1+k}, ..., Y\_{t\_n+k})$ for all lags $k$.

### [[weakly-stationary_202603161400|Weakly Stationary]]

1. $E\[Y\_t] = \mu$ (constant mean)
2. $\operatorname{Cov}(Y\_t, Y\_{t-k}) = \gamma\_k$ (depends only on lag $k$)

**Theorem**: Strict stationarity + finite variance $\implies$ Weak stationarity

### Key Diagnostic

[[random-walk_202603161400|Random Walk]]: $Y\_t = Y\_{t-1} + a\_t$

- Mean: $E\[Y\_t] = 0$ (constant)
- Variance: $\operatorname{Var}(Y\_t) = t\sigma\_a^2$ (**not** stationary)
- **Not stationary** — variance depends on $t$

## White Noise

[[white-noise_202603161400|White Noise]] ${e\_t}$: uncorrelated random variables with:

$$E\[e\_t] = 0 \qquad \operatorname{Var}(e\_t) = \sigma\_e^2$$

$$\gamma\_k = \begin{cases} \sigma\_e^2 & k = 0 \ 0 & k \neq 0 \end{cases} \qquad \rho\_k = \begin{cases} 1 & k = 0 \ 0 & k \neq 0 \end{cases}$$

## Autoregressive (AR) Processes

### [[ar1-process-model_202603161400|AR(1)]]

$$Z\_t = \phi Z\_{t-1} + a\_t$$

| Property         | Formula                                  |
| ---------------- | ---------------------------------------- |
| **Stationarity** | $\lvert\phi\rvert < 1$                   |
| **ACF**          | $\rho\_k = \phi^k$ (exponential decay)    |
| **Variance**     | $\gamma\_0 = \frac{\sigma\_a^2}{1-\phi^2}$ |

### [[arp-process-model_202603161400|AR(p)]]

$$Z\_t = \phi\_1 Z\_{t-1} + \phi\_2 Z\_{t-2} + \dots + \phi\_p Z\_{t-p} + a\_t$$

| Property | Formula |
|----------|---------|
| **Stationarity** | Roots of $1 - \phi\_1 x - \dots - \phi\_p x^p = 0$ lie outside unit circle |
| **Yule-Walker** | $\rho\_k = \phi\_1 \rho\_{k-1} + \dots + \phi\_p \rho\_{k-p}$ for $k = 1, \dots, p$ |
| **Variance** | $\gamma\_0 = \frac{\sigma\_a^2}{1 - \phi\_1\rho\_1 - \dots - \phi\_p\rho\_p}$ |

### Backshift Operator

$$B Z\_t = Z\_{t-1} \qquad B^k Z\_t = Z\_{t-k}$$

Characteristic equation: $1 - \phi\_1 x - \dots - \phi\_p x^p = 0$

## Moving Average (MA) Processes

### [[moving-average-process-maq_202603161400|MA(q)]]

$$Z\_t = a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q}$$

| Property | Formula |
|----------|---------|
| **Stationarity** | Always stationary for finite $\theta\_i$ |
| **ACF** | $\rho\_k = 0$ for $k > q$ (**cuts off**) |

### [[ma1-process-model_202603161400|MA(1)]]

$$Z\_t = a\_t - \theta a\_{t-1}$$

| Property           | Formula                                           |
| ------------------ | ------------------------------------------------- |
| **ACF**            | $\rho\_1 = \frac{-\theta}{1+\theta^2}$             |
| **Bounds**         | $-0.5 \leq \rho\_1 \leq 0.5$                       |
| **Non-uniqueness** | Replacing $\theta$ with $1/\theta$ gives same ACF |
| **Invertibility**  | Requires $\lvert\theta\rvert< 1$                  |

## ARMA Processes

### [[armapq-process-model_202603161400|ARMA(p,q)]]

$$Z\_t = \phi\_1 Z\_{t-1} + \dots + \phi\_p Z\_{t-p} + a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q}$$

| Condition | Requirement |
|-----------|-------------|
| **Stationarity** | Roots of AR polynomial outside unit circle (depends on $\phi$) |
| **Invertibility** | Roots of MA polynomial outside unit circle (depends on $\theta$) |

### [[arma11-process-model_202603161400|ARMA(1,1)]]

$$Z\_t = \phi Z\_{t-1} + a\_t - \theta a\_{t-1}$$

| Property | Formula |
|----------|---------|
| **Variance** | $\gamma\_0 = \frac{1-2\phi\theta+\theta^2}{1-\phi^2}\sigma\_a^2$ |
| **ACF** | $\rho\_1 = \frac{(1-\phi\theta)(\phi-\theta)}{1-2\phi\theta+\theta^2}$ |
| | $\rho\_k = \phi\rho\_{k-1}$ for $k \geq 2$ |

## ARIMA Models

### [[arima-pdq-model-definition_202603161400|ARIMA(p,d,q)]]

$W\_t = \nabla^d Z\_t$ is stationary ARMA(p,q)

$$\nabla Z\_t = Z\_t - Z\_{t-1} \qquad \nabla^2 Z\_t = Z\_t - 2Z\_{t-1} + Z\_{t-2}$$

| Model | Formula |
|-------|---------|
| **IMA(d,q)** | ARIMA(0,d,q) — no AR component |
| **ARI(p,d)** | ARIMA(p,d,0) — no MA component |
| **IMA(1,1)** | $\nabla Z\_t = a\_t - \theta a\_{t-1}$ |
| **ARI(1,1)** | $\nabla Z\_t = \phi \nabla Z\_{t-1} + a\_t$ |

### Constant Term in ARIMA

- $d=1$, constant $\neq 0$: deterministic **linear trend**
- $d=2$, constant $\neq 0$: deterministic **quadratic trend**

### ARI(1,1) Weights

$$\psi\_k = \frac{1-\phi^{k+1}}{1-\phi} \quad \text{for } k \geq 1$$

## Smoothing Methods

### Naive Method

$$F\_{t+1} = X\_t$$

### Averaging Method

$$F\_{t+1} = \frac{1}{t}\sum\_{i=1}^t X\_i$$

### [[single-moving-average_202603161400|Single Moving Average (SMA)]]

$$S\_t = \frac{1}{m}\sum\_{i=t-m+1}^t X\_i \qquad F\_{t+1} = S\_t$$

### [[double-moving-average_202603161400|Double Moving Average (DMA)]]

$$S\_{1,t} = \text{SMA of } X \qquad S\_{2,t} = \text{SMA of } S\_1$$

$$F\_{t+h} = A\_t + hB\_t \quad \text{where } A\_t = 2S\_{1,t} - S\_{2,t}, \quad B\_t = \frac{2}{m-1}(S\_{1,t} - S\_{2,t})$$

### [[single-exponential-smoothing_202603161400|Single Exponential Smoothing (SES)]]

$$S\_t = \alpha X\_t + (1-\alpha)S\_{t-1} \qquad F\_{t+1} = S\_t$$

### [[double-exponential-smoothing_202603161400|Double Exponential Smoothing (Holt's)]]

$$S\_t = \alpha X\_t + (1-\alpha)(S\_{t-1} + T\_{t-1})$$

$$T\_t = \gamma(S\_t - S\_{t-1}) + (1-\gamma)T\_{t-1}$$

$$F\_{t+h} = S\_t + hT\_t$$

### [[holt-winter-seasonal-method_202603161400|Holt-Winter Seasonal Method]]

**Additive** (constant seasonal variation):
$$F\_{t+h} = S\_t + hT\_t + M\_{t-p+h}$$

**Multiplicative** (seasonal variation scales with level):
$$F\_{t+h} = (S\_t + hT\_t) \cdot M\_{t-p+h}$$

## Accuracy Measures

| Measure | Formula |
|---------|---------|
| **MAD/MAE** | $\frac{1}{n}\sum|X\_t - \hat{X}\_t|$ |
| **MSE/MSD** | $\frac{1}{n}\sum(X\_t - \hat{X}\_t)^2$ |
| **RMSE** | $\sqrt{\text{MSE}}$ |
| **MAPE** | $\frac{1}{n}\sum\left|\frac{X\_t - \hat{X}\_t}{X\_t}\right| \times 100%$ |
| **MPE** | $\frac{1}{n}\sum\frac{X\_t - \hat{X}\_t}{X\_t} \times 100%$ (measures bias) |

## Stationarity Testing

### Sample ACF

$$r\_k = \frac{\sum\_{t=k+1}^n (z\_t - \bar{z})(z\_{t-k} - \bar{z})}{\sum\_{t=1}^n (z\_t - \bar{z})^2}$$

### Tests

| Test | Statistic | Purpose |
|------|-----------|---------|
| **Bartlett** | $|r\_k| > \frac{1.96}{\sqrt{n}}$ | Individual ACF significance |
| **Box-Pierce** | $Q = T\sum\_{k=1}^m r\_k^2 \sim \chi^2\_m$ | All ACF jointly zero |
| **Ljung-Box** | $LB = n(n+2)\sum r\_k^2/(n-k)$ | Box-Pierce improved for small $n$ |
| **ADF** | $\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})}$ | Unit root test |

**Decision**: Reject $H\_0$ if $Q > \chi^2\_{m,0.05}$ (Box-Pierce/LB); if $|\tau| > |\tau\_{\text{critical}}|$ (ADF)

## Model Identification

### ACF Behavior

| Model | ACF | PACF |
|-------|-----|------|
| **AR(p)** | Decays exponentially | Cuts off after lag $p$ |
| **MA(q)** | Cuts off after lag $q$ | Decays exponentially |
| **ARMA(p,q)** | Decays exponentially | Decays exponentially |

### Model Selection Criteria

$$AIC = -2\log L\_{\max} + 2k \qquad BIC = -2\log L\_{\max} + k\log n$$

(AIC: prediction efficiency; BIC: consistent selection, heavier penalty)

## Transformations

### Log Transformation

$$Y\_t = \ln(Z\_t) \qquad \text{Use when variance increases with level}$$

### Percentage Changes

$$\frac{Z\_t - Z\_{t-1}}{Z\_{t-1}} \approx \nabla \ln(Z\_t)$$

(Approximation to percentage change; handles exponential growth)

## Box-Jenkins Strategy

1. **Identification**: Plot data, examine ACF/PACF, identify model
2. **Estimation**: Fit parameters (MLE, LS, or Method of Moments)
3. **Diagnostic**: Check residuals for white noise behavior
4. **Iterate**: Return to Step 1 if model deficient

**Principle of Parsimony**: Choose simplest model that fits well
