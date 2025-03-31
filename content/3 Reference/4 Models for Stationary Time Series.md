---
{"creation-time":"2025-03-27 16:56","status":"adult","tags":null,"parent":["[[time series analysis]]"],"publish":true,"PassFrontmatter":true}
---


This note covers autoregressive moving average (ARMA) models, focusing on their statistical properties, stationarity, and invertibility.

It covers general linear processes, moving average (MA) processes, autoregressive (AR) processes, and mixed ARMA models.

## General Linear Processes

A time series $\{Y_t\}$ is modeled with an unobserved white noise series $\{e_t\}$, independent, zero-mean, identically distributed random variables.

A general linear process is:

$$ Y_t = e_t + \psi_1 e_{t-1} + \psi_2 e_{t-2} + \cdots $$

For convergence, $\sum_{i=1}^\infty \psi_i^2 < \infty$. Assuming $\psi_0 = 1$, the mean is $E(Y_t) = 0$, and autocovariance is:

$$ \gamma_k = \sigma_e^2 \sum_{i=0}^\infty \psi_i \psi_{i+k}, \quad k \geq 0 $$

Example: $\psi_j = \phi^j$, $|\phi| < 1$, yields:

$$ \operatorname{Var}(Y_t) = \frac{\sigma_e^2}{1 - \phi^2}, \quad \operatorname{Corr}(Y_t, Y_{t-k}) = \phi^k $$

This process is stationary, with autocovariance depending only on lag.

## Moving Average Processes

An MA($q$) process has finite nonzero $\psi$-weights:

$$ Y_t = e_t - \theta_1 e_{t-1} - \cdots - \theta_q e_{t-q} $$

### MA(1) Process
For $Y_t = e_t - \theta e_{t-1}$:

| Property         | Expression                          |
|------------------|-------------------------------------|
| Mean             | $E(Y_t) = 0$                        |
| Variance         | $\gamma_0 = \sigma_e^2 (1 + \theta^2)$ |
| Covariance       | $\gamma_1 = -\theta \sigma_e^2$     |
| Autocorrelation  | $\rho_1 = \frac{-\theta}{1 + \theta^2}$, $\rho_k = 0, k \geq 2$ |

$\rho_1$ ranges from $-0.5$ ($\theta = 1$) to $0.5$ ($\theta = -1$). Simulations show positive $\theta$ yields jagged series, negative $\theta$ smoother series.

### MA(2) Process
For $Y_t = e_t - \theta_1 e_{t-1} - \theta_2 e_{t-2}$:

| Property        | Expression                                                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Variance        | $\gamma_0 = (1 + \theta_1^2 + \theta_2^2) \sigma_e^2$                                                                                                                                         |
| Covariance      | $$\begin{align} \gamma_1 &= (-\theta_1 + \theta_1 \theta_2) \sigma_e^2 \\ \gamma_2 &= -\theta_2 \sigma_e^2 \end{align}$$                                                                      |
| Autocorrelation | $$\begin{align} \rho_1 &= \frac{-\theta_1 + \theta_1 \theta_2}{1 + \theta_1^2 + \theta_2^2} \\ \rho_2 &= \frac{-\theta_2}{1 + \theta_1^2 + \theta_2^2} \\ \rho_k &= 0, k \geq 3 \end{align}$$ |

Example: $\theta_1 = 1$, $\theta_2 = -0.6$ gives $\rho_1 = -0.678$, $\rho_2 = 0.254$.

### General MA($q$)
Autocorrelation cuts off after lag $q$:

$$ \rho_k = \begin{cases} 
-\frac{\theta_k + \theta_1 \theta_{k+1} + \cdots + \theta_{q-k} \theta_q}{1 + \theta_1^2 + \cdots + \theta_q^2}, & k = 1, \ldots, q \\
0, & k > q 
\end{cases} $$

## Autoregressive Processes

An AR($p$) process satisfies:

$$ Y_t = \phi_1 Y_{t-1} + \cdots + \phi_p Y_{t-p} + e_t $$

### AR(1) Process
For $Y_t = \phi Y_{t-1} + e_t$, $|\phi| < 1$ ensures stationarity:

| Property        | Expression                                        |
| --------------- | ------------------------------------------------- |
| Variance        | $\gamma_0 = \frac{\sigma_e^2}{1 - \phi^2}$        |
| Autocovariance  | $\gamma_k = \phi^k \frac{\sigma_e^2}{1 - \phi^2}$ |
| Autocorrelation | $\rho_k = \phi^k$                                 |

Positive $\phi$ yields smooth series, negative $\phi$ jagged series, with exponential decay.

### AR(2) Process
For $Y_t = \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + e_t$, stationarity requires roots of $1 - \phi_1 x - \phi_2 x^2 = 0$ to exceed 1 in modulus, satisfied by:

$$ \phi_1 + \phi_2 < 1, \quad \phi_2 - \phi_1 < 1, \quad |\phi_2| < 1 $$

Autocorrelation follows Yule-Walker equations:

$$ \rho_k = \phi_1 \rho_{k-1} + \phi_2 \rho_{k-2}, \quad k \geq 1 $$

Initial values: $\rho_1 = \frac{\phi_1}{1 - \phi_2}$, $\rho_2 = \frac{\phi_2 (1 - \phi_2) + \phi_1^2}{1 - \phi_2}$. Variance is:

$$ \gamma_0 = \left( \frac{1 - \phi_2}{1 + \phi_2} \right) \frac{\sigma_e^2}{(1 - \phi_2)^2 - \phi_1^2} $$

### General AR($p$)
Stationarity requires roots of $1 - \phi_1 x - \cdots - \phi_p x^p = 0$ to exceed 1 in modulus. Autocorrelation satisfies:

$$ \rho_k = \phi_1 \rho_{k-1} + \cdots + \phi_p \rho_{k-p}, \quad k \geq 1 $$

Variance: $\gamma_0 = \frac{\sigma_e^2}{1 - \phi_1 \rho_1 - \cdots - \phi_p \rho_p}$.

## Mixed Autoregressive Moving Average Model

An ARMA($p$,$q$) model is:

$$ Y_t = \phi_1 Y_{t-1} + \cdots + \phi_p Y_{t-p} + e_t - \theta_1 e_{t-1} - \cdots - \theta_q e_{t-q} $$

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

An MA($q$) process is invertible if it can be written as an infinite AR process, requiring roots of $1 - \theta_1 x - \cdots - \theta_q x^q = 0$ to exceed 1 in modulus. For MA(1), $|\theta| < 1$ ensures invertibility, resolving parameter nonuniqueness.

For further reading, see [[3 Reference/Invertability in Time Series Models\|Invertability in Time Series Models]].
