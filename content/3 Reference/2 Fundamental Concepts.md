---
{"creation-time":"2025-03-27 15:28","status":"adult","tags":null,"parent":["[[time series analysis]]"],"publish":true,"PassFrontmatter":true}
---


This note covers stochastic processes, and their core concepts:
- Mean
- Covariance functions
- Stationary
- Autocorrelation

## Time Series and Stochastic Processes

A **stochastic process** is a sequence of random variables $\{Y_t: t = 0, \pm 1, \pm 2, \ldots\}$, used to model time series data.

Its full probabilistic structure is defined by the joint distributions of all finite subsets of $Y_t$.

In practice, we **focus on means, variances, and covariances (first and second moments) rather than the full distributions**.

If the joint distributions are multivariate normal, these moments fully specify the process.

## Means, Variances, and Covariances

For a stochastic process $\{Y_t\}$, key functions are:

- **Mean function**: $\mu_t = E(Y_t)$, the expected value at time $t$, which may vary with $t$.
- **Autocovariance function**: $\gamma_{t,s} = \operatorname{Cov}(Y_t, Y_s) = E[(Y_t - \mu_t)(Y_s - \mu_s)]$, measuring dependence between $Y_t$ and $Y_s$.
- **Autocorrelation function**: $\rho_{t,s} = \operatorname{Corr}(Y_t, Y_s) = \frac{\gamma_{t,s}}{\sqrt{\gamma_{t,t} \gamma_{s,s}}}$, a unitless measure of linear dependence, where $|\rho_{t,s}| \leq 1$.

### Properties

- $\gamma_{t,t} = \operatorname{Var}(Y_t)$, $\rho_{t,t} = 1$.
- $\gamma_{t,s} = \gamma_{s,t}$, $\rho_{t,s} = \rho_{s,t}$ (symmetry).
- $|\gamma_{t,s}| \leq \sqrt{\gamma_{t,t} \gamma_{s,s}}$.

A key result for covariance of linear combinations is:

$$
\operatorname{Cov}\left(\sum_{i=1}^m c_i Y_{t_i}, \sum_{j=1}^n d_j Y_{s_j}\right) = \sum_{i=1}^m \sum_{j=1}^n c_i d_j \operatorname{Cov}(Y_{t_i}, Y_{s_j})
$$

### Examples

#### Random Walk

Defined as $Y_t = e_1 + e_2 + \cdots + e_t$, where $\{e_t\}$ are independent, identically distributed (i.i.d.) with $E(e_t) = 0$ and $\operatorname{Var}(e_t) = \sigma_e^2$.

| Property        | Expression                                              |
| --------------- | ------------------------------------------------------- |
| Mean            | $\mu_t = E(Y_t) = 0$                                    |
| Variance        | $\operatorname{Var}(Y_t) = t \sigma_e^2$                |
| Autocovariance  | $\gamma_{t,s} = t \sigma_e^2$ for $1 \leq t \leq s$     |
| Autocorrelation | $\rho_{t,s} = \sqrt{\frac{t}{s}}$ for $1 \leq t \leq s$ |

#### Moving Average

Defined as $\{e_t\}$, i.i.d. with $E(e_t) = 0$, $\operatorname{Var}(e_t) = \sigma_e^2$.

| Property        | Expression                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mean            | $\mu_t = 0$                                                                                                                                                |
| Variance        | $\operatorname{Var}(Y_t) = 0.5 \sigma_e^2$                                                                                                                 |
| Autocovariance  | $$ \gamma_{t,s} = \begin{cases} 0.5 \sigma_e^2 & ,\vert t-s\vert  = 0 \\ 0.25 \sigma_e^2 & ,\vert t-s\vert  = 1 \\ 0 & ,\vert t-s\vert  > 1 \end{cases} $$ |
| Autocorrelation | $$ \rho_{t,s} = \begin{cases} 1 & ,\vert t-s\vert  = 0 \\ 0.5 & ,\vert t-s\vert  = 1 \\ 0 & ,\vert t-s\vert  > 1 \end{cases} $$ |

