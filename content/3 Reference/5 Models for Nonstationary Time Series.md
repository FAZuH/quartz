---
{"creation-time":"2025-03-27 17:19","status":"baby","tags":null,"parent":["[[time series analysis]]"],"publish":true,"PassFrontmatter":true}
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

An ARIMA($p,d,q$) model defines $W_t = \nabla^d Y_t$ as a stationary ARMA($p,q$) process, where $d$ is the differencing order (typically 1 or 2). The model is:

$$ \phi(B)(1 - B)^d Y_t = \theta(B) e_t $$

using the backshift operator $B$ ($B Y_t = Y_{t-1}$).

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
