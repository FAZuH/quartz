---
publish: true
created: 2026-03-25T15:22:40.607+07:00
modified: 2026-03-25T15:22:40.607+07:00
published: 2026-03-25T15:22:40.607+07:00
creation-time: 2025-03-27 17:19
status: in progress
tags:
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

This chapter explores models for time series with nonconstant means, termed nonstationary, contrasting them with deterministic trend models from Chapter 3. It emphasizes stochastic trends, common in economics and business, and introduces differencing as a method to achieve stationarity, leading to ARIMA models.

## Introduction to Nonstationarity

A time series is nonstationary if its mean varies over time. Models like $Y\_t = \mu\_t + X\_t$, where $\mu\_t$ is a nonconstant mean and $X\_t$ is stationary, assume a persistent deterministic trend. However, examples like the random walk (Exhibit 2.1) or monthly oil prices (Exhibit 5.1, January 1986–January 2006) suggest stochastic trends, where apparent trends arise without deterministic components.

## Stationarity Through Differencing

Differencing transforms nonstationary series into stationary ones. For an AR(1) model $Y\_t = \phi Y\_{t-1} + e\_t$:

- **$|\phi| < 1$**: Stationary (Chapter 4).
- **$|\phi| > 1$**: Explosive, e.g., $Y\_t = 3 Y\_{t-1} + e\_t$ yields $Y\_t = e\_t + 3 e\_{t-1} + 3^2 e\_{t-2} + \cdots + 3^t Y\_0$, with exponentially growing variance $\operatorname{Var}(Y\_t) = \frac{1}{8}(9^t - 1)\sigma\_e^2$ (Exhibit 5.2 simulation).
- **\phi = 1**: Random walk, $Y\_t = Y\_{t-1} + e\_t$, or $\nabla Y\_t = e\_t$, where $\nabla Y\_t = Y\_t - Y\_{t-1}$ is stationary white noise.

More generally, if $Y\_t = M\_t + X\_t$ and $M\_t$ changes slowly (deterministic or stochastic), $\nabla Y\_t$ may be stationary. Example: $Y\_t = M\_t + e\_t$, $M\_t = M\_{t-1} + \varepsilon\_t$, gives $\nabla Y\_t = \varepsilon\_t + e\_t - e\_{t-1}$, an MA(1) process. Second differencing, $\nabla^2 Y\_t$, handles linear trends, e.g., $M\_t = M\_{t-1} + W\_t$, $W\_t = W\_{t-1} + \varepsilon\_t$, yielding $\nabla^2 Y\_t = \varepsilon\_t + e\_t - 2 e\_{t-1} + e\_{t-2}$, an MA(2) process.

## ARIMA Models

An ARIMA($p,d,q$) model defines $W\_t = \nabla^d Y\_t$ as a stationary ARMA($p,q$) process, where $d$ is the differencing order (typically 1 or 2). It is defined as:

$$\phi\_p(B)(1-B)^d Y\_t = \theta\_0 + \theta\_q(B) \varepsilon\_t$$

where:

- $Y\_t$: Time series value at time $t$.
- $\varepsilon\_t$: Error term (white noise) at time $t$.
- $\theta\_0$: Constant term (mean of differenced series).
- $p$: Order of autoregressive terms.
- $d$: Order of differencing.
- $q$: Order of moving average terms.
- $B$: Backshift operator ($B Y\_t = Y\_{t-1}$).
- $(1-B)^d$: Differencing operator, applied $d$ times to make series stationary.
- $\phi\_p(B)$: Autoregressive operator, $\phi\_p(B) = 1 - \phi\_1 B - \phi\_2 B^2 - \dots - \phi\_p B^p$.
- $\theta\_q(B)$: Moving average operator, $\theta\_q(B) = 1 + \theta\_1 B + \theta\_2 B^2 + \dots + \theta\_q B^q$.

The model combines autoregressive (AR), differencing (I), and moving average (MA) components to model stationary or non-stationary time series.

### IMA(1,1) Model

$Y\_t = Y\_{t-1} + e\_t - \theta e\_{t-1}$:

| Property         | Expression                          |
|------------------|-------------------------------------|
| Representation   | $Y\_t = e\_t + (1 - \theta) \sum\_{j=1}^{t+m} e\_{t-j} - \theta e\_{-m-1}$ |
| Variance         | $\operatorname{Var}(Y\_t) = \[1 + \theta^2 + (1 - \theta)^2 (t + m)] \sigma\_e^2$ |
| Correlation      | $\operatorname{Corr}(Y\_t, Y\_{t-k}) \approx \sqrt{\frac{t + m - k}{t + m}} \approx 1$ (large $m$, moderate $k$) |

Weights persist, reflecting a stochastic trend.

### IMA(2,2) Model

$\nabla^2 Y\_t = e\_t - \theta\_1 e\_{t-1} - \theta\_2 e\_{t-2}$:

- Representation: $Y\_t = e\_t + \sum\_{j=1}^{t+m} \[1 + \theta\_2 + (1 - \theta\_1 - \theta\_2) j] e\_{t-j} + \text{initial terms}$.
- Variance grows rapidly; correlations remain near 1 for moderate lags (Exhibit 5.5 simulation, $\theta\_1 = 1$, $\theta\_2 = -0.6$).

### ARI(1,1) Model

$Y\_t = (1 + \phi) Y\_{t-1} - \phi Y\_{t-2} + e\_t$, $|\phi| < 1$:

- $\psi$-weights: $\psi\_k = \frac{1 - \phi^{k+1}}{1 - \phi}$, derived via $(1 - \phi x)(1 - x)(1 + \psi\_1 x + \cdots) = 1$.

## Constant Terms in ARIMA Models

For $W\_t = \nabla^d Y\_t$ with mean $\mu$, e.g., $W\_t = \theta\_0 + e\_t - \theta e\_{t-1}$ in IMA(1,1), $Y\_t$ gains a linear trend $(t + m + 1) \theta\_0$. Generally, a nonzero $E(\nabla^d Y\_t)$ implies a polynomial trend of degree $d$ in $Y\_t$.

## Other Transformations

### Logarithms

If $\sqrt{\operatorname{Var}(Y\_t)} = \mu\_t \sigma$, then $\operatorname{Var}(\log Y\_t) \approx \sigma^2$, stabilizing variance (e.g., oil prices, Exhibit 5.4). For percentage changes $Y\_t = (1 + X\_t) Y\_{t-1}$, $\nabla \log Y\_t \approx X\_t$, often stationary (e.g., electricity data, Exhibits 5.8–5.10).

### Power Transformations

Box-Cox transformation: $g(x) = \begin{cases} \frac{x^\lambda - 1}{\lambda}, & \lambda \neq 0 \ \log x, & \lambda = 0 \end{cases}$. Applied to positive data, $\lambda$ is estimated (e.g., $\lambda \approx 0$ for electricity data, Exhibit 5.11).

## Examples

### ARIMA(1,1,1)

To create an ARIMA(1,1,1) model as described in [ARIMA Models](#ARIMA%20Models), we set $p=1$, $d=1$, $q=1$. Below is the step-by-step derivation:

1. **Identify parameters**:
   - $p=1$: One autoregressive term.
   - $d=1$: One differencing.
   - $q=1$: One moving average term.

2. **Substitute into the general formula**:
   $$
   \phi\_1(B)(1-B)^1 Y\_t = \theta\_0 + \theta\_1(B) \varepsilon\_t
   $$
   Plugging in the operators:
   $$
   (1 - \phi\_1 B)(1-B) Y\_t = \theta\_0 + (1 + \theta\_1 B) \varepsilon\_t
   $$

3. **Expand the left-hand side**:
   Compute $(1 - \phi\_1 B)(1-B)$:
   $$
   (1 - \phi\_1 B)(1-B) = 1 - B - \phi\_1 B + \phi\_1 B^2 = 1 - (1 + \phi\_1) B + \phi\_1 B^2
   $$
   So the left-hand side becomes:
   $$
   \[1 - (1 + \phi\_1) B + \phi\_1 B^2] Y\_t
   $$

4. **Write the full equation**:
   $$
   \[1 - (1 + \phi\_1) B + \phi\_1 B^2] Y\_t = \theta\_0 + (1 + \theta\_1 B) \varepsilon\_t
   $$

5. **Apply the backshift operator**:
   - $B Y\_t = Y\_{t-1}$, $B^2 Y\_t = Y\_{t-2}$.
   - Left-hand side: $Y\_t - (1 + \phi\_1) Y\_{t-1} + \phi\_1 Y\_{t-2}$.
   - Right-hand side: $\theta\_0 + \varepsilon\_t + \theta\_1 \varepsilon\_{t-1}$.

6. **Final ARIMA(1,1,1) model**:
   $$
   Y\_t - (1 + \phi\_1) Y\_{t-1} + \phi\_1 Y\_{t-2} = \theta\_0 + \varepsilon\_t + \theta\_1 \varepsilon\_{t-1}
   $$
