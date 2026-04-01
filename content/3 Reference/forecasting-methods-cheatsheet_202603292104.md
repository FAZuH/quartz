---
publish: true
aliases:
  - Forecasting Methods Cheatsheet
created: 2026-03-29T21:04:46.757+07:00
modified: 2026-03-31T19:36:21.701+07:00
published: 2026-03-31T19:36:21.701+07:00
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

$$
\begin{align}
E\[Y\_t] & = \mu\_t  \\
\gamma\_{t,s} & = \operatorname{Cov}(Y\_t, Y\_s) = E\[(Y\_t - \mu\_t)(Y\_s - \mu\_s)] \\
\rho\_{t,s} & = \operatorname{Corr}(Y\_t, Y\_s) = \frac{\gamma\_{t,s}}{\sqrt{\gamma\_{t,t}\gamma\_{s,s}}}
\end{align}
$$

**Properties**
$$
\begin{array}{lr}
\gamma\_0 = \operatorname{Var}(Y\_t) & \rho\_0 = 1  \\
\gamma\_{t,s} = \gamma\_{s,t} & |\rho\_{t,s}| \leq 1
\end{array}$$

### [[time-series-components_202603161400|Time Series Components]]

- **Trend**: Long-term <u>direction</u>
- **Seasonal**: Predictable patterns with <u>fixed period</u>
- **Cyclical**: Long-term waves with <u>no fixed period</u>
- **Irregular**: <u>Unpredictable</u> random deviations

## Stationarity

### [[strictly-stationary_202603161400|Strictly Stationary]]

Joint distribution of $(Y\_{t\_1}, ..., Y\_{t\_n})$ equals that of $(Y\_{t\_1+k}, ..., Y\_{t\_n+k})$ for all lags $k$.

### [[weakly-stationary_202603161400|Weakly Stationary]]

1. $E\[Y\_t] = \mu$ (constant mean)
2. $\operatorname{Cov}(Y\_t, Y\_{t-k}) = \gamma\_k$ (depends only on lag $k$)

Condition 2 implies <u>constant variance</u>

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

- [[backshift-operator_202603161400|Backshift Operator]]:  $B^k Z\_t = Z\_{t-k}$
- [[ar-characteristic-equation_202603161400|Characteristic Equation]]: $1 - \phi\_1 x - \dots - \phi\_p x^p = 0$

**[[arp-process-model_202603161400|AR(p) Process Model]]**

| Property         | Formula                                                                           |
| ---------------- | --------------------------------------------------------------------------------- |
| **Model**        | $Z\_{t} = \phi\_{1} Z\_{t-1} + \phi\_{2}Z\_{t-2} + \dots + \phi\_{p}Z\_{t-p} + a\_{t}$                   |
| **Stationarity** | Roots of $1 - \phi\_1 x - \dots - \phi\_p x^p = 0$ lie outside unit circle          |
| **Yule-Walker**  | $\rho\_k = \phi\_1 \rho\_{k-1} + \dots + \phi\_p \rho\_{k-p}$<br>for $k = 1, \dots, p$ |
| **Variance**     | $\gamma\_0 = \frac{\sigma\_a^2}{1 - \phi\_1\rho\_1 - \dots - \phi\_p\rho\_p}$           |

**[[ar1-process-model_202603161400|AR(1) Process]]**

| Property         | Formula                                  |
| ---------------- | ---------------------------------------- |
| **Model**        | $Z\_{t} = \phi Z\_{t-1} + a\_{t}$                   |
| **Stationarity** | $\lvert\phi\rvert < 1$                   |
| **ACF**          | $\rho\_k = \phi^k$ (exponential decay)    |
| **Variance**     | $\gamma\_0 = \frac{\sigma\_a^2}{1-\phi^2}$ |

## Moving Average (MA) Processes

Always weakly stationary for finite $\theta\_{i}$

**[[moving-average-process-maq_202603161400|MA(q) Process Model]]**

| Property         | Formula                                                                             |
| ---------------- | ----------------------------------------------------------------------------------- |
| **Model**        | $Z\_{t} = a\_{t} - \theta\_1 a\_{t-1} - \theta\_{2} a\_{t-2} - \dots - \theta\_{q}a\_{t-q}$ |

| Property                                                                 | Expression                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Autocovariance** ($\gamma\_{k}$)                                        | $\begin{cases} \textcolor{#70CFFF}{(1 + \theta\_1^2 + \theta\_2^2 + \dots + \theta\_q^2)}\sigma\_e^2 & k=0 \ \textcolor{#FFD700}{-\theta\_k + \theta\_1\theta\_{k+1} + \theta\_2\theta\_{k+2} + \dots + \theta\_{q-k}\theta\_q}, & k = 1, 2, \dots, q \ 0, & k > q \end{cases}$   |
| **Autocorrelation** ($\rho\_{k}$)<br><br>_just build from<br>ACF formula_ | $\begin{cases} 1, & k = 0 \ \dfrac{\textcolor{#FFD700}{-\theta\_k + \theta\_1\theta\_{k+1} + \theta\_2\theta\_{k+2} + \dots + \theta\_{q-k}\theta\_q}}{\textcolor{#70CFFF}{1 + \theta\_1^2 + \theta\_2^2 + \dots + \theta\_q^2}}, & k = 1, 2, \dots, q \ 0, & k > q \end{cases}$ |

**[[ma1-process-model_202603161400|MA(1) Process Model]]**

| Property           | Formula                                           |
| ------------------ | ------------------------------------------------- |
| **Model**          | $Z\_{t} = a\_{t} - \theta a\_{t-1}$                  |
| **ACF**            | $\rho\_1 = \frac{-\theta}{1+\theta^2}$             |
| **Bounds**         | $-0.5 \leq \rho\_1 \leq 0.5$                       |
| **Non-uniqueness** | Replacing $\theta$ with $1/\theta$ gives same ACF |
| **Invertibility**  | Requires $\lvert\theta\rvert< 1$                  |

## ARMA Processes

**[[armapq-process-model_202603161400|ARMA(p,q) Process Model]]**

$$Z\_t = \phi\_1 Z\_{t-1} + \dots + \phi\_p Z\_{t-p} + a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q}$$

| Condition         | Requirement                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Stationarity**  | Roots of AR [[ar-characteristic-equation_202603161400\|characteristic equation]] outside unit circle |
| **Invertibility** | Roots of MA [[ar-characteristic-equation_202603161400\|characteristic equation]] outside unit circle |

**[[arma11-process-model_202603161400|ARMA(1,1) Process Model]]**

$$Z\_t = \phi Z\_{t-1} + a\_t - \theta a\_{t-1}$$

| Property | Formula |
|----------|---------|
| **Variance** | $\gamma\_0 = \frac{1-2\phi\theta+\theta^2}{1-\phi^2}\sigma\_a^2$ |
| **ACF** | $\rho\_1 = \frac{(1-\phi\theta)(\phi-\theta)}{1-2\phi\theta+\theta^2}$ |
| | $\rho\_k = \phi\rho\_{k-1}$ for $k \geq 2$ |

## ARIMA Models

- [[differencing-to-achieve-stationarity_202603161400|Differencing]]: $\nabla^d Z\_{t} = \nabla^{d-1}Z\_{t} - \nabla^{d-1}Z\_{t-1}$

### [[arima-pdq-model-definition_202603161400|ARIMA(p,d,q)]]

$W\_t = \nabla^d Z\_t$
where:

- $W\_{t}$ : Stationary ARMA(p,q)
- $Z\_{t}$ : The ARIMA(p,d,q) model

| Model | Formula |
|-------|---------|
| **IMA(d,q)** | ARIMA(0,d,q) — no AR component |
| **ARI(p,d)** | ARIMA(p,d,0) — no MA component |

- $d=1$, constant $\neq 0$: deterministic **linear trend**
- $d=2$, constant $\neq 0$: deterministic **quadratic trend**
- ARI(1,1) [[general-linear-process_202603161400|General Linear Process]] weights: $\psi\_k = \frac{1-\phi^{k+1}}{1-\phi} \quad \text{for } k \geq 1$

## Smoothing Methods

**[[naive-method_202603161400|Naive]]**

$$F\_{t+1} = X\_t$$

**[[averaging-method_202603161400|Averaging]]**

$$F\_{t+1} = \frac{1}{t}\sum\_{i=1}^t X\_i$$

**[[single-moving-average_202603161400|Single Moving Average (SMA)]]**

$$ \begin{aligned}
S\_t &= \frac{1}{m} \sum\_{i=t-m+1}^t X\_i \\
F\_{t+1} &= S\_t
\end{aligned} $$

**[[double-moving-average_202603161400|Double Moving Average (DMA)]]**

$$
\begin{align}
S\_{1,t} &= \text{SMA of } X \\
S\_{2,t} &= \text{SMA of } S\_1 \\
A\_t &= 2S\_{1,t} - S\_{2,t} \\
B\_t &= \frac{2}{m-1}(S\_{1,t} - S\_{2,t}) \ \\

F\_{t+h} &= A\_t + hB\_t \\
\end{align}
$$

**[[single-exponential-smoothing_202603161400|Single Exponential Smoothing (SMA)]]**

$$
F\_{t+1} = \alpha X\_t + (1-\alpha)S\_{t-1}
$$

**[[double-exponential-smoothing_202603161400|Double Exponential Smoothing]]** / **[[double-exponential-smoothing_202603161400|Holt's Linear Trend]]**

$$
\begin{aligned}
S\_t &= \alpha X\_t + (1-\alpha)(S\_{t-1} + T\_{t-1}) \\
T\_t &= \gamma(S\_t - S\_{t-1}) + (1-\gamma)T\_{t-1} \\
F\_{t+h} &= S\_t + hT\_t
\end{aligned}
$$

**[[holt-winter-seasonal-method_202603161400|Holt-Winter Seasonal Method]]**

- **Additive** (constant seasonal variation):
  $$F\_{t+h} = S\_t + hT\_t + M\_{t-p+h}$$

- **Multiplicative** (seasonal variation scales with level):
  $$F\_{t+h} = (S\_t + hT\_t) \cdot M\_{t-p+h}$$

## [[forecasting-model-accuracy-measures_202603161400|Accuracy Measures]]

| Measure                                                   | Formula                                                                                        | Comment                                          |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **MAD**/**MAE**<br>(Mean <u>Absolute</u> Deviation/Error) | $$\frac{1}{n} \sum\_{t=1}^n \lvert X\_t - \hat{X}_t \rvert$$                                     | Mean absolute deviation of forecast errors       |
| **MSD**/**MSE**<br>(Mean <u>Squared</u> Deviation/Error)  | $$\frac{1}{n} \sum_{t=1}^n (X\_t - \hat{X}_t)^2$$                                               | Penalizes large errors more                      |
| **RMSE**<br>(<u>Root</u> Mean <u>Squared</u> Error)       | $$\sqrt{\frac{1}{n} \sum_{t=1}^n (X\_t - \hat{X}_t)^2}$$                                        | Same units as $X\_t$<br>interpretable form of MSE |
| **MAPE**<br>(Mean <u>Absolute Percentage</u> Error)       | $$\frac{1}{n} \sum_{t=1}^n \left\lvert \frac{X\_t - \hat{X}_t}{X\_t} \right\rvert \times 100%$$ | Scale-independent                                |
| **MPE**<br>(Mean <u>Percentage</u> Error)                 | $$\frac{1}{n} \sum_{t=1}^n \left( \frac{X\_t - \hat{X}\_t}{X\_t} \right) \times 100%$$           | Measures forecast bias                           |

## Stationarity Testing

**[[sample-autocorrelation_202603161400|Sample ACF]]**

$$r\_k = \frac{\sum\_{t=k+1}^n (z\_t - \bar{z})(z\_{t-k} - \bar{z})}{\sum\_{t=1}^n (z\_t - \bar{z})^2}$$

| Test           | Statistic                                       | Purpose                           |
| -------------- | ----------------------------------------------- | --------------------------------- |
| **Bartlett**   | $\lvert r\_k\rvert > \frac{1.96}{\sqrt{n}}$      | Individual ACF significance       |
| **Box-Pierce** | $Q = T\sum\_{k=1}^m r\_k^2 \sim \chi^2\_m$         | All ACF jointly zero              |
| **Ljung-Box**  | $LB = n(n+2)\sum r\_k^2/(n-k)$                   | Box-Pierce improved for small $n$ |
| **ADF**        | $\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})}$ | Unit root test                    |

**Decision**, reject $H\_{0}$ if:

- Box-Pierce/LB: $Q > \chi^2\_{m,0.05}$
- ADF: $|\tau| > |\tau\_{\text{critical}}|$

## Model Identification

| Model         | ACF                           | PACF                          |
| ------------- | ----------------------------- | ----------------------------- |
| **AR(p)**     | Decays exponentially          | <u>Cuts</u> off after lag $p$ |
| **MA(q)**     | <u>Cuts</u> off after lag $q$ | Decays exponentially          |
| **ARMA(p,q)** | Decays exponentially          | Decays exponentially          |

**EACF**

$$
\begin{align}
AIC  & = -2\log L\_{\max} + \textcolor{yellow}{2}k  \\
BIC  & = -2\log L\_{\max} + k\textcolor{yellow}{\log n}
\end{align}
$$

- AIC: prediction <u>efficiency</u>, no penalty for complex model
- BIC: <u>consistent</u> selection, heavier penalty for complex models

## Transformations

**[[log-transformation-for-variance-stabilization_202603161400|Log Transformation]]**

$$Y\_t = \ln(Z\_t) \qquad \text{Use when variance increases with level}$$

**[[percentage-changes-transformation_202603161400|Percentage Changes]]**

$$\frac{Z\_t - Z\_{t-1}}{Z\_{t-1}} \approx \nabla \ln(Z\_t)$$

(Approximation to percentage change; handles exponential growth)

## Box-Jenkins Strategy

1. **Identification**: Plot data, examine ACF/PACF, identify model
2. **Estimation**: Fit parameters (MLE, LS, or Method of Moments)
3. **Diagnostic**: Check residuals for white noise behavior
4. **Iterate**: Return to Step 1 if model deficient

**Principle of Parsimony**: Choose simplest model that fits well
