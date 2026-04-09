---
publish: true
created: 2026-04-09T23:07:38.959+07:00
modified: 2026-04-09T23:07:38.961+07:00
published: 2026-04-09T23:07:38.961+07:00
cssclasses: ""
creation-time: 2025-03-27 17:19
status: in progress
tags:
parent:
  - "[[Time Series Analysis With Applications in R]]"
---


This chapter explores models for time series with nonconstant means, termed nonstationary, contrasting them with deterministic trend models from Chapter 3. It emphasizes stochastic trends, common in economics and business, and introduces differencing as a method to achieve stationarity, leading to ARIMA models.

## Introduction to Nonstationarity

A time series is nonstationary if its mean varies over time. Models like $Y_t = \mu_t + X_t$, where $\mu_t$ is a nonconstant mean and $X_t$ is stationary, assume a persistent deterministic trend. However, examples like the random walk (Exhibit 2.1) or monthly oil prices (Exhibit 5.1, January 1986–January 2006) suggest stochastic trends, where apparent trends arise without deterministic components.

## Stationarity Through Differencing

Differencing transforms nonstationary series into stationary ones. For an AR(1) model $Y_t = \phi Y_{t-1} + e_t$:

- **$|\phi| < 1$**: Stationary (Chapter 4).
- **$|\phi| > 1$**: Explosive, e.g., $Y_t = 3 Y_{t-1} + e_t$ yields $Y_t = e_t + 3 e_{t-1} + 3^2 e_{t-2} + \cdots + 3^t Y_0$, with exponentially growing variance $\operatorname{Var}(Y_t) = \frac{1}{8}(9^t - 1)\sigma_e^2$ (Exhibit 5.2 simulation).
- **\phi = 1**: Random walk, $Y_t = Y_{t-1} + e_t$, or $\nabla Y_t = e_t$, where $\nabla Y_t = Y_t - Y_{t-1}$ is stationary white noise.

More generally, if $Y_t = M_t + X_t$ and $M_t$ changes slowly (deterministic or stochastic), $\nabla Y_t$ may be stationary. Example: $Y_t = M_t + e_t$, $M_t = M_{t-1} + \varepsilon_t$, gives $\nabla Y_t = \varepsilon_t + e_t - e_{t-1}$, an MA(1) process. Second differencing, $\nabla^2 Y_t$, handles linear trends, e.g., $M_t = M_{t-1} + W_t$, $W_t = W_{t-1} + \varepsilon_t$, yielding $\nabla^2 Y_t = \varepsilon_t + e_t - 2 e_{t-1} + e_{t-2}$, an MA(2) process.

## ARIMA Models

An ARIMA($p,d,q$) model defines $W_t = \nabla^d Y_t$ as a stationary ARMA($p,q$) process, where $d$ is the differencing order (typically 1 or 2). It is defined as:

$$\phi_p(B)(1-B)^d Y_t = \theta_0 + \theta_q(B) \varepsilon_t$$

where:
- $Y_t$: Time series value at time $t$.
- $\varepsilon_t$: Error term (white noise) at time $t$.
- $\theta_0$: Constant term (mean of differenced series).
- $p$: Order of autoregressive terms.
- $d$: Order of differencing.
- $q$: Order of moving average terms.
- $B$: Backshift operator ($B Y_t = Y_{t-1}$).
- $(1-B)^d$: Differencing operator, applied $d$ times to make series stationary.
- $\phi_p(B)$: Autoregressive operator, $\phi_p(B) = 1 - \phi_1 B - \phi_2 B^2 - \dots - \phi_p B^p$.
- $\theta_q(B)$: Moving average operator, $\theta_q(B) = 1 + \theta_1 B + \theta_2 B^2 + \dots + \theta_q B^q$.

The model combines autoregressive (AR), differencing (I), and moving average (MA) components to model stationary or non-stationary time series.
### IMA(1,1) Model
$Y_t = Y_{t-1} + e_t - \theta e_{t-1}$:

| Property         | Expression                          |
|------------------|-------------------------------------|
| Representation   | $Y_t = e_t + (1 - \theta) \sum_{j=1}^{t+m} e_{t-j} - \theta e_{-m-1}$ |
| Variance         | $\operatorname{Var}(Y_t) = [1 + \theta^2 + (1 - \theta)^2 (t + m)] \sigma_e^2$ |
| Correlation      | $\operatorname{Corr}(Y_t, Y_{t-k}) \approx \sqrt{\frac{t + m - k}{t + m}} \approx 1$ (large $m$, moderate $k$) |

Weights persist, reflecting a stochastic trend.

### IMA(2,2) Model
$\nabla^2 Y_t = e_t - \theta_1 e_{t-1} - \theta_2 e_{t-2}$:

- Representation: $Y_t = e_t + \sum_{j=1}^{t+m} [1 + \theta_2 + (1 - \theta_1 - \theta_2) j] e_{t-j} + \text{initial terms}$.
- Variance grows rapidly; correlations remain near 1 for moderate lags (Exhibit 5.5 simulation, $\theta_1 = 1$, $\theta_2 = -0.6$).

### ARI(1,1) Model
$Y_t = (1 + \phi) Y_{t-1} - \phi Y_{t-2} + e_t$, $|\phi| < 1$:

- $\psi$-weights: $\psi_k = \frac{1 - \phi^{k+1}}{1 - \phi}$, derived via $(1 - \phi x)(1 - x)(1 + \psi_1 x + \cdots) = 1$.

## Constant Terms in ARIMA Models

For $W_t = \nabla^d Y_t$ with mean $\mu$, e.g., $W_t = \theta_0 + e_t - \theta e_{t-1}$ in IMA(1,1), $Y_t$ gains a linear trend $(t + m + 1) \theta_0$. Generally, a nonzero $E(\nabla^d Y_t)$ implies a polynomial trend of degree $d$ in $Y_t$.

## Other Transformations

### Logarithms
If $\sqrt{\operatorname{Var}(Y_t)} = \mu_t \sigma$, then $\operatorname{Var}(\log Y_t) \approx \sigma^2$, stabilizing variance (e.g., oil prices, Exhibit 5.4). For percentage changes $Y_t = (1 + X_t) Y_{t-1}$, $\nabla \log Y_t \approx X_t$, often stationary (e.g., electricity data, Exhibits 5.8–5.10).

### Power Transformations
Box-Cox transformation: $g(x) = \begin{cases} \frac{x^\lambda - 1}{\lambda}, & \lambda \neq 0 \\ \log x, & \lambda = 0 \end{cases}$. Applied to positive data, $\lambda$ is estimated (e.g., $\lambda \approx 0$ for electricity data, Exhibit 5.11).

## Examples

### ARIMA(1,1,1)

To create an ARIMA(1,1,1) model as described in [ARIMA Models](#ARIMA%20Models), we set $p=1$, $d=1$, $q=1$. Below is the step-by-step derivation:

1. **Identify parameters**:
   - $p=1$: One autoregressive term.
   - $d=1$: One differencing.
   - $q=1$: One moving average term.

2. **Substitute into the general formula**:
   $$
   \phi_1(B)(1-B)^1 Y_t = \theta_0 + \theta_1(B) \varepsilon_t
   $$
   Plugging in the operators:
   $$
   (1 - \phi_1 B)(1-B) Y_t = \theta_0 + (1 + \theta_1 B) \varepsilon_t
   $$

3. **Expand the left-hand side**:
   Compute $(1 - \phi_1 B)(1-B)$:
   $$
   (1 - \phi_1 B)(1-B) = 1 - B - \phi_1 B + \phi_1 B^2 = 1 - (1 + \phi_1) B + \phi_1 B^2
   $$
   So the left-hand side becomes:
   $$
   [1 - (1 + \phi_1) B + \phi_1 B^2] Y_t
   $$

4. **Write the full equation**:
   $$
   [1 - (1 + \phi_1) B + \phi_1 B^2] Y_t = \theta_0 + (1 + \theta_1 B) \varepsilon_t
   $$

5. **Apply the backshift operator**:
   - $B Y_t = Y_{t-1}$, $B^2 Y_t = Y_{t-2}$.
   - Left-hand side: $Y_t - (1 + \phi_1) Y_{t-1} + \phi_1 Y_{t-2}$.
   - Right-hand side: $\theta_0 + \varepsilon_t + \theta_1 \varepsilon_{t-1}$.

7. **Final ARIMA(1,1,1) model**:
   $$
   Y_t - (1 + \phi_1) Y_{t-1} + \phi_1 Y_{t-2} = \theta_0 + \varepsilon_t + \theta_1 \varepsilon_{t-1}
   $$
