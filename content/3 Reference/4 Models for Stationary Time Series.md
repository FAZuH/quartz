---
publish: true
created: 2026-02-22T19:23:58.333+07:00
modified: 2026-03-02T12:40:31.021+07:00
published: 2026-03-02T12:40:31.021+07:00
cssclasses: ""
creation-time: 2025-03-27 16:56
status: adult
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
- $Y_{t}$ : Process value at time $t$
- $e_{t}$ : White noise error term at time t t t, i.i.d. with mean 0 and constant variance.

A general linear process is:

$$ Y_t = e_t + \psi_1 e_{t-1} + \psi_2 e_{t-2} + \cdots $$

Assuming $\psi_0 = 1$, the mean is $E(Y_t) = 0$, and autocovariance is:
$$ \gamma_k = \sigma_e^2 \sum_{i=0}^\infty \psi_i \psi_{i+k}, \quad k \geq 0 $$

It is convergent if $\sum_{i=1}^\infty \psi_i^2 < \infty$.

- Example:

	Suppose $\psi_j = \phi^j$ and $|\phi| < 1$.
	
	Then,	
	$$ \operatorname{Var}(Y_t) = \frac{\sigma_e^2}{1 - \phi^2}, \quad \operatorname{Corr}(Y_t, Y_{t-k}) = \phi^k $$
## Moving average (MA) processes

An MA($q$) process has finite nonzero $\psi$-weights:

$$Y_t = e_t - \sum_{i=1}^q \theta_i e_{t-i}$$
where:
- $q\in \mathbb{N}$ : Order of the model. Number of error terms
- $i\in \mathbb{N}$ : Time lag
- $\theta_{i}$ : Model parameter for lag $i$
- $e_{t-i}$ : Lagged error; error at time $t-i$

These models are called **short memory models**, since the errors doesn't last long into the future. To illustrate:

![](assets/Pasted image 20250602022612.png)

This goes back to the idea of [stationarity](Stationarity.md), where the dependence of previous observations "declines" over time, or in the case of MA models, actually disappear completely as you go into the future.

### MA(1) Process

$$Y_t = e_t - \textcolor{red}{\theta e_{t-1}}$$

| Property        | Expression                                                      |
| --------------- | --------------------------------------------------------------- |
| Mean            | $E(Y_t) = 0$                                                    |
| Variance        | $\gamma_0 = \sigma_e^2 (1 + \theta^2)$                          |
| Covariance      | $\gamma_1 = -\theta \sigma_e^2$                                 |
| Autocorrelation | $\rho_1 = \frac{-\theta}{1 + \theta^2}$, $\rho_k = 0, k \geq 2$ |

$\rho_1$ ranges from $-0.5$ to $0.5$, at $\theta = -1$ to $1$ respectively.

Simulations show positive $\theta$ yields jagged series, negative $\theta$ smoother series.

### MA(2) Process

$$Y_t = e_t - \textcolor{red}{\theta_1 e_{t-1}} - \textcolor{yellow}{\theta_2 e_{t-2}}$$

|**Property**|**Expression**|
|---|---|
|**Variance**|$\gamma_0 = \textcolor{#70CFFF}{(1 + \theta_1^2 + \theta_2^2)} \sigma_e^2$|
|**Covariance**|$\begin{aligned} \gamma_1 &= \textcolor{#FFD700}{(-\theta_1 + \theta_1 \theta_2)} \sigma_e^2 \\ \gamma_2 &= \textcolor{#FFD700}{-\theta_2} \sigma_e^2 \end{aligned}$|
|**Autocorrelation (ACF)**|$\begin{aligned} \rho_1 &= \dfrac{\textcolor{#FFD700}{-\theta_1 + \theta_1 \theta_2}}{\textcolor{#70CFFF}{1 + \theta_1^2 + \theta_2^2}} \\ \rho_2 &= \dfrac{\textcolor{#FFD700}{-\theta_2}}{\textcolor{#70CFFF}{1 + \theta_1^2 + \theta_2^2}} \\ \rho_k &= 0, \quad k \geq 3 \end{aligned}$|

### General MA($q$)

|**Property**|**Expression**|
|---|---|
|**Model Equation**|$Y_t = e_t - \textcolor{#FF7070}{\theta_1 e_{t-1} - \theta_2 e_{t-2} - \dots - \theta_q e_{t-q}}, \quad e_t \sim WN(0, \sigma_e^2)$|
|**Mean**|$E(Y_t) = 0$|
|**Variance**|$\text{Var}(Y_t) = \gamma_0 = \textcolor{#70CFFF}{(1 + \theta_1^2 + \theta_2^2 + \dots + \theta_q^2)}\sigma_e^2$|
|**Autocovariance**|$\text{Cov}(Y_t, Y_{t-k}) = \gamma_k = \begin{cases} \textcolor{#FFD700}{-\theta_k + \theta_1\theta_{k+1} + \theta_2\theta_{k+2} + \dots + \theta_{q-k}\theta_q}, & \text{for } k = 1, 2, \dots, q \\ 0, & \text{for } k > q \end{cases}$|
|**Autocorrelation (ACF)**|$\text{Corr}(Y_t, Y_{t-k}) = \rho_k = \begin{cases} 1, & \text{for } k = 0 \\ \dfrac{\textcolor{#FFD700}{-\theta_k + \theta_1\theta_{k+1} + \theta_2\theta_{k+2} + \dots + \theta_{q-k}\theta_q}}{\textcolor{#70CFFF}{1 + \theta_1^2 + \theta_2^2 + \dots + \theta_q^2}}, & \text{for } k = 1, 2, \dots, q \\ 0, & \text{for } k > q \end{cases}$|


### See also

- https://www.youtube.com/watch?v=zNLG8tsA_Go

## Autoregressive (AR) processes

An AR($p$) process satisfies:

$$Y_t = e_t + \sum_{i=1}^p \phi_i Y_{t-i}$$
where:
- $p\in \mathbb{N}$ : Order of the model. Number of recursions.
- $\phi_{i}$ : Model parameter for lag $i$
- $e_{t}$: Error at time $t$

In contrast to the [moving average model](#Moving%20average%20(MA)%20processes), in AR models each observation depends on all previous observation recursively.

### AR(1) Process

For $Y_t = \phi Y_{t-1} + e_t$:

| Property        | Expression                                        |
| --------------- | ------------------------------------------------- |
| Variance        | $\gamma_0 = \frac{\sigma_e^2}{1 - \phi^2}$        |
| Autocovariance  | $\gamma_k = \phi^k \frac{\sigma_e^2}{1 - \phi^2}$ |
| Autocorrelation | $\rho_k = \phi^k$                                 |

-  $|\phi| < 1$ -> $\{ Y_{t} \}$ is stationarity:

### AR(2) Process

|**Property**|**Expression**|
|---|---|
|**Model Equation**|$Y_t = \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + e_t$|
|**Stationarity Conditions**|$\begin{cases} \textcolor{#FF7070}{\phi_1 + \phi_2 < 1} \\ \textcolor{#FF7070}{\phi_2 - \phi_1 < 1} \\ \textcolor{#FF7070}{\lvert \phi_2 \rvert < 1} \end{cases}$|
|**Yule-Walker Equation**|$\rho_k = \phi_1 \rho_{k-1} + \phi_2 \rho_{k-2}, \quad k \geq 1$|
|**First Lag ACF ($\rho_1$)**|$\rho_1 = \dfrac{\phi_1}{1 - \phi_2}$|
|**Second Lag ACF ($\rho_2$)**|$\rho_2 = \dfrac{\phi_2 (1 - \phi_2) + \phi_1^2}{1 - \phi_2}$|
|**Variance ($\gamma_0$)**|$\gamma_0 = \left( \dfrac{1 - \phi_2}{1 + \phi_2} \right) \dfrac{\sigma_e^2}{\textcolor{#70CFFF}{(1 - \phi_2)^2 - \phi_1^2}}$|
### General AR($p$)

| **Property**              | **Expression**                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Autocorrelation (ACF)** | $\rho_k = \textcolor{#FFD700}{\phi_1 \rho_{k-1} + \dots + \phi_p \rho_{k-p}}, \quad k \geq 1$   |
| **Variance ($\gamma_0$)** | $\gamma_0 = \dfrac{\sigma_e^2}{\textcolor{#70CFFF}{1 - \phi_1 \rho_1 - \dots - \phi_p \rho_p}}$ |

## Autoregressive moving average (ARMA) process

An ARMA($p$,$q$) model is:

$$Y_t = e_t + \sum_{i=1}^p \phi_i Y_{t-i} - \sum_{i=1}^q \theta_ie_{t-i}$$

### ARMA(1,1) Model
For $Y_t = \phi Y_{t-1} + e_t - \theta e_{t-1}$, $|\phi| < 1$ ensures stationarity:

| Property        | Expression                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Variance        | $$\gamma_0 = \frac{1 - 2 \phi \theta + \theta^2}{1 - \phi^2} \sigma_e^2$$                                                    |
| Autocovariance  | $$\begin{align} \gamma_1 &= \phi \gamma_0 - \theta \sigma_e^2 \\ \gamma_k &= \phi \gamma_{k-1}, \quad k \geq 2 \end{align}$$ |
| Autocorrelation | $$\rho_k = \frac{(1 - \theta \phi)(\phi - \theta)}{1 - 2 \theta \phi + \theta^2} \phi^{k-1}, \quad k \geq 1$$                |

### General ARMA($p$,$q$)
Stationarity requires AR roots to exceed 1 in modulus. Autocorrelation satisfies $\rho_k = \phi_1 \rho_{k-1} + \cdots + \phi_p \rho_{k-p}$ for $k > q$.

## Invertibility

An MA($q$) process is invertible if it can be written as an infinite AR process, requiring roots of $1 - \theta_1 x - \cdots - \theta_q x^q = 0$ to exceed 1 in modulus.

An MA(1) is invertible, if $|\theta| < 1$ for all of its parameters.

For further reading, see [[3 Reference/Invertability in Time Series Models]].
