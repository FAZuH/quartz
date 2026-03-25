---
publish: true
created: 2026-03-25T15:22:40.643+07:00
modified: 2026-03-25T15:22:40.643+07:00
published: 2026-03-25T15:22:40.643+07:00
creation-time: 2025-03-27 16:56
status: complete
tags:
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

This note covers autoregressive (AR) and moving average (MA) models, focusing on their statistical properties, [stationarity](Stationarity.md), and invertibility.

It also covers general linear processes, moving average (MA) processes, autoregressive (AR) processes, and mixed ARMA models.

---

## General stochastic linear processes

> A way to represent a stochastic process in summationn

Let

- $t\in N$ : Time index
- $Y\_{t}$ : Process value at time $t$
- $e\_{t}$ : White noise error term at time t t t, i.i.d. with mean 0 and constant variance.

A general linear process is:

$$ Y\_t = e\_t + \psi\_1 e\_{t-1} + \psi\_2 e\_{t-2} + \cdots $$

Assuming $\psi\_0 = 1$, the mean is $E(Y\_t) = 0$, and autocovariance is:
$$ \gamma\_k = \sigma\_e^2 \sum\_{i=0}^\infty \psi\_i \psi\_{i+k}, \quad k \geq 0 $$

It is convergent if $\sum\_{i=1}^\infty \psi\_i^2 < \infty$.

- Example:

  Suppose $\psi\_j = \phi^j$ and $|\phi| < 1$.

  Then,
  $$ \operatorname{Var}(Y\_t) = \frac{\sigma\_e^2}{1 - \phi^2}, \quad \operatorname{Corr}(Y\_t, Y\_{t-k}) = \phi^k $$

## Moving average (MA) processes

An MA($q$) process has finite nonzero $\psi$-weights:

$$Y\_t = e\_t - \sum\_{i=1}^q \theta\_i e\_{t-i}$$
where:

- $q\in \mathbb{N}$ : Order of the model. Number of error terms
- $i\in \mathbb{N}$ : Time lag
- $\theta\_{i}$ : Model parameter for lag $i$
- $e\_{t-i}$ : Lagged error; error at time $t-i$

These models are called **short memory models**, since the errors doesn't last long into the future. To illustrate:

![](assets/Pasted image 20250602022612.png)

This goes back to the idea of [stationarity](Stationarity.md), where the dependence of previous observations "declines" over time, or in the case of MA models, actually disappear completely as you go into the future.

### MA(1) Process

$$Y\_t = e\_t - \textcolor{red}{\theta e\_{t-1}}$$

| Property        | Expression                                                      |
| --------------- | --------------------------------------------------------------- |
| Mean            | $E(Y\_t) = 0$                                                    |
| Variance        | $\gamma\_0 = \sigma\_e^2 (1 + \theta^2)$                          |
| Covariance      | $\gamma\_1 = -\theta \sigma\_e^2$                                 |
| Autocorrelation | $\rho\_1 = \frac{-\theta}{1 + \theta^2}$, $\rho\_k = 0, k \geq 2$ |

$\rho\_1$ ranges from $-0.5$ to $0.5$, at $\theta = -1$ to $1$ respectively.

Simulations show positive $\theta$ yields jagged series, negative $\theta$ smoother series.

### MA(2) Process

$$Y\_t = e\_t - \textcolor{red}{\theta\_1 e\_{t-1}} - \textcolor{yellow}{\theta\_2 e\_{t-2}}$$

|**Property**|**Expression**|
|---|---|
|**Variance**|$\gamma\_0 = \textcolor{#70CFFF}{(1 + \theta\_1^2 + \theta\_2^2)} \sigma\_e^2$|
|**Covariance**|$\begin{aligned} \gamma\_1 &= \textcolor{#FFD700}{(-\theta\_1 + \theta\_1 \theta\_2)} \sigma\_e^2 \ \gamma\_2 &= \textcolor{#FFD700}{-\theta\_2} \sigma\_e^2 \end{aligned}$|
|**Autocorrelation (ACF)**|$\begin{aligned} \rho\_1 &= \dfrac{\textcolor{#FFD700}{-\theta\_1 + \theta\_1 \theta\_2}}{\textcolor{#70CFFF}{1 + \theta\_1^2 + \theta\_2^2}} \ \rho\_2 &= \dfrac{\textcolor{#FFD700}{-\theta\_2}}{\textcolor{#70CFFF}{1 + \theta\_1^2 + \theta\_2^2}} \ \rho\_k &= 0, \quad k \geq 3 \end{aligned}$|

### General MA($q$)

|**Property**|**Expression**|
|---|---|
|**Model Equation**|$Y\_t = e\_t - \textcolor{#FF7070}{\theta\_1 e\_{t-1} - \theta\_2 e\_{t-2} - \dots - \theta\_q e\_{t-q}}, \quad e\_t \sim WN(0, \sigma\_e^2)$|
|**Mean**|$E(Y\_t) = 0$|
|**Variance**|$\text{Var}(Y\_t) = \gamma\_0 = \textcolor{#70CFFF}{(1 + \theta\_1^2 + \theta\_2^2 + \dots + \theta\_q^2)}\sigma\_e^2$|
|**Autocovariance**|$\text{Cov}(Y\_t, Y\_{t-k}) = \gamma\_k = \begin{cases} \textcolor{#FFD700}{-\theta\_k + \theta\_1\theta\_{k+1} + \theta\_2\theta\_{k+2} + \dots + \theta\_{q-k}\theta\_q}, & \text{for } k = 1, 2, \dots, q \ 0, & \text{for } k > q \end{cases}$|
|**Autocorrelation (ACF)**|$\text{Corr}(Y\_t, Y\_{t-k}) = \rho\_k = \begin{cases} 1, & \text{for } k = 0 \ \dfrac{\textcolor{#FFD700}{-\theta\_k + \theta\_1\theta\_{k+1} + \theta\_2\theta\_{k+2} + \dots + \theta\_{q-k}\theta\_q}}{\textcolor{#70CFFF}{1 + \theta\_1^2 + \theta\_2^2 + \dots + \theta\_q^2}}, & \text{for } k = 1, 2, \dots, q \ 0, & \text{for } k > q \end{cases}$|

### See also

- https://www.youtube.com/watch?v=zNLG8tsA\_Go

## Autoregressive (AR) processes

An AR($p$) process satisfies:

$$Y\_t = e\_t + \sum\_{i=1}^p \phi\_i Y\_{t-i}$$
where:

- $p\in \mathbb{N}$ : Order of the model. Number of recursions.
- $\phi\_{i}$ : Model parameter for lag $i$
- $e\_{t}$: Error at time $t$

In contrast to the [moving average model](#Moving%20average%20\(MA\)%20processes), in AR models each observation depends on all previous observation recursively.

### AR(1) Process

For $Y\_t = \phi Y\_{t-1} + e\_t$:

| Property        | Expression                                        |
| --------------- | ------------------------------------------------- |
| Variance        | $\gamma\_0 = \frac{\sigma\_e^2}{1 - \phi^2}$        |
| Autocovariance  | $\gamma\_k = \phi^k \frac{\sigma\_e^2}{1 - \phi^2}$ |
| Autocorrelation | $\rho\_k = \phi^k$                                 |

- $|\phi| < 1$ -> ${ Y\_{t} }$ is stationarity:

### AR(2) Process

|**Property**|**Expression**|
|---|---|
|**Model Equation**|$Y\_t = \phi\_1 Y\_{t-1} + \phi\_2 Y\_{t-2} + e\_t$|
|**Stationarity Conditions**|$\begin{cases} \textcolor{#FF7070}{\phi\_1 + \phi\_2 < 1} \ \textcolor{#FF7070}{\phi\_2 - \phi\_1 < 1} \ \textcolor{#FF7070}{\lvert \phi\_2 \rvert < 1} \end{cases}$|
|**Yule-Walker Equation**|$\rho\_k = \phi\_1 \rho\_{k-1} + \phi\_2 \rho\_{k-2}, \quad k \geq 1$|
|**First Lag ACF ($\rho\_1$)**|$\rho\_1 = \dfrac{\phi\_1}{1 - \phi\_2}$|
|**Second Lag ACF ($\rho\_2$)**|$\rho\_2 = \dfrac{\phi\_2 (1 - \phi\_2) + \phi\_1^2}{1 - \phi\_2}$|
|**Variance ($\gamma\_0$)**|$\gamma\_0 = \left( \dfrac{1 - \phi\_2}{1 + \phi\_2} \right) \dfrac{\sigma\_e^2}{\textcolor{#70CFFF}{(1 - \phi\_2)^2 - \phi\_1^2}}$|

### General AR($p$)

| **Property**              | **Expression**                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Autocorrelation (ACF)** | $\rho\_k = \textcolor{#FFD700}{\phi\_1 \rho\_{k-1} + \dots + \phi\_p \rho\_{k-p}}, \quad k \geq 1$   |
| **Variance ($\gamma\_0$)** | $\gamma\_0 = \dfrac{\sigma\_e^2}{\textcolor{#70CFFF}{1 - \phi\_1 \rho\_1 - \dots - \phi\_p \rho\_p}}$ |

## Autoregressive moving average (ARMA) process

An ARMA($p$,$q$) model is:

$$Y\_t = e\_t + \sum\_{i=1}^p \phi\_i Y\_{t-i} - \sum\_{i=1}^q \theta\_ie\_{t-i}$$

### ARMA(1,1) Model

For $Y\_t = \phi Y\_{t-1} + e\_t - \theta e\_{t-1}$, $|\phi| < 1$ ensures stationarity:

| Property        | Expression                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Variance        | $$\gamma\_0 = \frac{1 - 2 \phi \theta + \theta^2}{1 - \phi^2} \sigma\_e^2$$                                                    |
| Autocovariance  | $$\begin{align} \gamma\_1 &= \phi \gamma\_0 - \theta \sigma\_e^2 \ \gamma\_k &= \phi \gamma\_{k-1}, \quad k \geq 2 \end{align}$$ |
| Autocorrelation | $$\rho\_k = \frac{(1 - \theta \phi)(\phi - \theta)}{1 - 2 \theta \phi + \theta^2} \phi^{k-1}, \quad k \geq 1$$                |

### General ARMA($p$,$q$)

Stationarity requires AR roots to exceed 1 in modulus. Autocorrelation satisfies $\rho\_k = \phi\_1 \rho\_{k-1} + \cdots + \phi\_p \rho\_{k-p}$ for $k > q$.

## Invertibility

An MA($q$) process is invertible if it can be written as an infinite AR process, requiring roots of $1 - \theta\_1 x - \cdots - \theta\_q x^q = 0$ to exceed 1 in modulus.

An MA(1) is invertible, if $|\theta| < 1$ for all of its parameters.

For further reading, see [[Invertability in Time Series Models]].
