---
publish: true
aliases:
  - Forecasting Methods Cheatsheet
created: 2026-04-09T23:07:39.394+07:00
modified: 2026-04-09T23:07:39.395+07:00
published: 2026-04-09T23:07:39.395+07:00
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
| [[stochastic-process_202603161400\|Stochastic Process]] | Collection of random variables indexed by time  | $\{Y_t : t \in T\}$         |
| [[time-series-data_202603161400\|Time Series]]          | Data collected according to time order          | —                           |
| [[cross-section-data_202603161400\|Cross-section]]      | Data for multiple subjects at single time point | —                           |
| [[lag-definition_202603161400\|Lag]]                    | Offset from current index                       | $X_{t-k}$ is $X$ at lag $k$ |

### Mean, Covariance, and Correlation

$$
\begin{align}
E[Y_t] & = \mu_t  \\
\gamma_{t,s} & = \operatorname{Cov}(Y_t, Y_s) = E[(Y_t - \mu_t)(Y_s - \mu_s)] \\
\rho_{t,s} & = \operatorname{Corr}(Y_t, Y_s) = \frac{\gamma_{t,s}}{\sqrt{\gamma_{t,t}\gamma_{s,s}}}
\end{align}
$$

**Properties**

$$$
\begin{array}{lr} 
 \gamma_0 = \operatorname{Var}(Y_t) & \rho_0 = 1  \\
  \gamma_{t,s} = \gamma_{s,t} & |\rho_{t,s}| \leq 1 
  \end{array}$$

### [[time-series-components_202603161400\|Time Series Components]]

- **Trend**: Long-term <u>direction</u>
- **Seasonal**: Predictable patterns with <u>fixed period</u>
- **Cyclical**: Long-term waves with <u>no fixed period</u>
- **Irregular**: <u>Unpredictable</u> random deviations

## Stationarity

### [[strictly-stationary_202603161400\|Strictly Stationary]]

Joint distribution of $(Y_{t_1}, ..., Y_{t_n})$ equals that of $(Y_{t_1+k}, ..., Y_{t_n+k})$ for all lags $k$.

### [[weakly-stationary_202603161400\|Weakly Stationary]]

1. $E[Y_t] = \mu$ (constant mean)
2. $\operatorname{Cov}(Y_t, Y_{t-k}) = \gamma_k$ (depends only on lag $k$)

Condition 2 implies <u>constant variance</u>

**Theorem**: Strict stationarity + finite variance $\implies$ Weak stationarity

### Key Diagnostic

[[random-walk_202603161400\|Random Walk]]: $Y_t = Y_{t-1} + a_t$

- Mean: $E[Y_t] = 0$ (constant)
- Variance: $\operatorname{Var}(Y_t) = t\sigma_a^2$ (**not** stationary)
- **Not stationary** — variance depends on $t$

## White Noise

[[white-noise_202603161400\|White Noise]] $\{e_t\}$: uncorrelated random variables with:

$$E[e_t] = 0 \qquad \operatorname{Var}(e_t) = \sigma_e^2$$

$$\gamma_k = \begin{cases} \sigma_e^2 & k = 0 \\ 0 & k \neq 0 \end{cases} \qquad \rho_k = \begin{cases} 1 & k = 0 \\ 0 & k \neq 0 \end{cases}$$

## Autoregressive (AR) Processes

- [[backshift-operator_202603161400|Backshift Operator]]:  $B^k Z_t = Z_{t-k}$
- [[ar-characteristic-equation_202603161400|Characteristic Equation]]: $1 - \phi_1 x - \dots - \phi_p x^p = 0$

**[[arp-process-model_202603161400|AR(p) Process Model]]**

| Property         | Formula                                                                           |
| ---------------- | --------------------------------------------------------------------------------- |
| **Model**        | $Z_{t} = \phi_{1} Z_{t-1} + \phi_{2}Z_{t-2} + \dots + \phi_{p}Z_{t-p} + a_{t}$                   |
| **Stationarity** | Roots of $1 - \phi_1 x - \dots - \phi_p x^p = 0$ lie outside unit circle          |
| **Yule-Walker**  | $\rho_k = \phi_1 \rho_{k-1} + \dots + \phi_p \rho_{k-p}$<br>for $k = 1, \dots, p$ |
| **Variance**     | $\gamma_0 = \frac{\sigma_a^2}{1 - \phi_1\rho_1 - \dots - \phi_p\rho_p}$           |

**[[ar1-process-model_202603161400|AR(1) Process]]**

| Property         | Formula                                  |
| ---------------- | ---------------------------------------- |
| **Model**        | $Z_{t} = \phi Z_{t-1} + a_{t}$                   |
| **Stationarity** | $\lvert\phi\rvert < 1$                   |
| **ACF**          | $\rho_k = \phi^k$ (exponential decay)    |
| **Variance**     | $\gamma_0 = \frac{\sigma_a^2}{1-\phi^2}$ |

## Moving Average (MA) Processes

Always weakly stationary for finite $\theta_{i}$

**[[moving-average-process-maq_202603161400|MA(q) Process Model]]**

| Property         | Formula                                                                             |
| ---------------- | ----------------------------------------------------------------------------------- |
| **Model**        | $Z_{t} = a_{t} - \theta_1 a_{t-1} - \theta_{2} a_{t-2} - \dots - \theta_{q}a_{t-q}$ |

| Property                                                                 | Expression                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Autocovariance** ($\gamma_{k}$)                                        | $\begin{cases} \textcolor{#70CFFF}{(1 + \theta_1^2 + \theta_2^2 + \dots + \theta_q^2)}\sigma_e^2 & k=0 \\ \textcolor{#FFD700}{-\theta_k + \theta_1\theta_{k+1} + \theta_2\theta_{k+2} + \dots + \theta_{q-k}\theta_q}, & k = 1, 2, \dots, q \\ 0, & k > q \end{cases}$   |
| **Autocorrelation** ($\rho_{k}$)<br><br>*just build from<br>ACF formula* | $\begin{cases} 1, & k = 0 \\ \dfrac{\textcolor{#FFD700}{-\theta_k + \theta_1\theta_{k+1} + \theta_2\theta_{k+2} + \dots + \theta_{q-k}\theta_q}}{\textcolor{#70CFFF}{1 + \theta_1^2 + \theta_2^2 + \dots + \theta_q^2}}, & k = 1, 2, \dots, q \\ 0, & k > q \end{cases}$ |


**[[ma1-process-model_202603161400|MA(1) Process Model]]**

| Property           | Formula                                           |
| ------------------ | ------------------------------------------------- |
| **Model**          | $Z_{t} = a_{t} - \theta a_{t-1}$                  |
| **ACF**            | $\rho_1 = \frac{-\theta}{1+\theta^2}$             |
| **Bounds**         | $-0.5 \leq \rho_1 \leq 0.5$                       |
| **Non-uniqueness** | Replacing $\theta$ with $1/\theta$ gives same ACF |
| **Invertibility**  | Requires $\lvert\theta\rvert< 1$                  |

## ARMA Processes

**[[armapq-process-model_202603161400|ARMA(p,q) Process Model]]**

$$Z_t = \phi_1 Z_{t-1} + \dots + \phi_p Z_{t-p} + a_t - \theta_1 a_{t-1} - \dots - \theta_q a_{t-q}$$

| Condition         | Requirement                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Stationarity**  | Roots of AR [[ar-characteristic-equation_202603161400\|characteristic equation]] outside unit circle |
| **Invertibility** | Roots of MA [[ar-characteristic-equation_202603161400\|characteristic equation]] outside unit circle |

**[[arma11-process-model_202603161400|ARMA(1,1) Process Model]]**

$$Z_t = \phi Z_{t-1} + a_t - \theta a_{t-1}$$

| Property | Formula |
|----------|---------|
| **Variance** | $\gamma_0 = \frac{1-2\phi\theta+\theta^2}{1-\phi^2}\sigma_a^2$ |
| **ACF** | $\rho_1 = \frac{(1-\phi\theta)(\phi-\theta)}{1-2\phi\theta+\theta^2}$ |
| | $\rho_k = \phi\rho_{k-1}$ for $k \geq 2$ |

## ARIMA Models

- [[differencing-to-achieve-stationarity_202603161400|Differencing]]: $\nabla^d Z_{t} = \nabla^{d-1}Z_{t} - \nabla^{d-1}Z_{t-1}$

### [[arima-pdq-model-definition_202603161400\|ARIMA(p,d,q)]]

$W_t = \nabla^d Z_t$ 
where:
- $W_{t}$ : Stationary ARMA(p,q)
- $Z_{t}$ : The ARIMA(p,d,q) model

| Model | Formula |
|-------|---------|
| **IMA(d,q)** | ARIMA(0,d,q) — no AR component |
| **ARI(p,d)** | ARIMA(p,d,0) — no MA component |

- $d=1$, constant $\neq 0$: deterministic **linear trend**
- $d=2$, constant $\neq 0$: deterministic **quadratic trend**
- ARI(1,1) [[general-linear-process_202603161400|General Linear Process]] weights: $\psi_k = \frac{1-\phi^{k+1}}{1-\phi} \quad \text{for } k \geq 1$

## Smoothing Methods

**[[naive-method_202603161400|Naive]]**

$$F_{t+1} = X_t$$

**[[averaging-method_202603161400|Averaging]]**

$$F_{t+1} = \frac{1}{t}\sum_{i=1}^t X_i$$

**[[single-moving-average_202603161400|Single Moving Average (SMA)]]**

$$ \begin{aligned}
S_t &= \frac{1}{m} \sum_{i=t-m+1}^t X_i \\
F_{t+1} &= S_t
\end{aligned} $$

**[[double-moving-average_202603161400|Double Moving Average (DMA)]]**

$$$

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

$$$

**[[holt-winter-seasonal-method_202603161400|Holt-Winter Seasonal Method]]**

- **Additive** (constant seasonal variation):
$$F_{t+h} = S_t + hT_t + M_{t-p+h}$$

- **Multiplicative** (seasonal variation scales with level):
$$F_{t+h} = (S_t + hT_t) \cdot M_{t-p+h}$$

## [[forecasting-model-accuracy-measures_202603161400|Accuracy Measures]]

| Measure                                                   | Formula                                                                                        | Comment                                          |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **MAD**/**MAE**<br>(Mean <u>Absolute</u> Deviation/Error) | $$\frac{1}{n} \sum_{t=1}^n \lvert X_t - \hat{X}_t \rvert$$                                     | Mean absolute deviation of forecast errors       |
| **MSD**/**MSE**<br>(Mean <u>Squared</u> Deviation/Error)  | $$\frac{1}{n} \sum_{t=1}^n (X_t - \hat{X}_t)^2$$                                               | Penalizes large errors more                      |
| **RMSE**<br>(<u>Root</u> Mean <u>Squared</u> Error)       | $$\sqrt{\frac{1}{n} \sum_{t=1}^n (X_t - \hat{X}_t)^2}$$                                        | Same units as $X_t$<br>interpretable form of MSE |
| **MAPE**<br>(Mean <u>Absolute Percentage</u> Error)       | $$\frac{1}{n} \sum_{t=1}^n \left\lvert \frac{X_t - \hat{X}_t}{X_t} \right\rvert \times 100\%$$ | Scale-independent                                |
| **MPE**<br>(Mean <u>Percentage</u> Error)                 | $$\frac{1}{n} \sum_{t=1}^n \left( \frac{X_t - \hat{X}_t}{X_t} \right) \times 100\%$$           | Measures forecast bias                           |

## Stationarity Testing

**[[sample-autocorrelation_202603161400|Sample ACF]]**

$$r_k = \frac{\sum_{t=k+1}^n (z_t - \bar{z})(z_{t-k} - \bar{z})}{\sum_{t=1}^n (z_t - \bar{z})^2}$$


| Test           | Statistic                                       | Purpose                           |
| -------------- | ----------------------------------------------- | --------------------------------- |
| **Bartlett**   | $\lvert r_k\rvert > \frac{1.96}{\sqrt{n}}$      | Individual ACF significance       |
| **Box-Pierce** | $Q = T\sum_{k=1}^m r_k^2 \sim \chi^2_m$         | All ACF jointly zero              |
| **Ljung-Box**  | $LB = n(n+2)\sum r_k^2/(n-k)$                   | Box-Pierce improved for small $n$ |
| **ADF**        | $\tau = \frac{\hat{\pi}}{\text{se}(\hat{\pi})}$ | Unit root test                    |

**Decision**, reject $H_{0}$ if: 
- Box-Pierce/LB: $Q > \chi^2_{m,0.05}$ 
- ADF: $|\tau| > |\tau_{\text{critical}}|$ 

## Model Identification

| Model         | ACF                           | PACF                          |
| ------------- | ----------------------------- | ----------------------------- |
| **AR(p)**     | Decays exponentially          | <u>Cuts</u> off after lag $p$ |
| **MA(q)**     | <u>Cuts</u> off after lag $q$ | Decays exponentially          |
| **ARMA(p,q)** | Decays exponentially          | Decays exponentially          |

**EACF**


$$$

\begin{align}
AIC  & = -2\log L\_{\max} + \textcolor{yellow}{2}k  \\
BIC  & = -2\log L\_{\max} + k\textcolor{yellow}{\log n}
\end{align}

$$$

- AIC: prediction <u>efficiency</u>, no penalty for complex model
- BIC: <u>consistent</u> selection, heavier penalty for complex models

## Transformations

**[[log-transformation-for-variance-stabilization_202603161400|Log Transformation]]**

$$Y_t = \ln(Z_t) \qquad \text{Use when variance increases with level}$$

**[[percentage-changes-transformation_202603161400|Percentage Changes]]**

$$\frac{Z_t - Z_{t-1}}{Z_{t-1}} \approx \nabla \ln(Z_t)$$

(Approximation to percentage change; handles exponential growth)

## Box-Jenkins Strategy

1. **Identification**: Plot data, examine ACF/PACF, identify model
2. **Estimation**: Fit parameters (MLE, LS, or Method of Moments)
3. **Diagnostic**: Check residuals for white noise behavior
4. **Iterate**: Return to Step 1 if model deficient

**Principle of Parsimony**: Choose simplest model that fits well
$$$
