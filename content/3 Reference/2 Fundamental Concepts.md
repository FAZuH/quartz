---
{"creation-time":"2025-03-27 15:28","status":"adult","tags":["content-type/conceptual","content-type/referential"],"parent":["[[time series analysis]]"],"publish":true,"PassFrontmatter":true}
---


This note covers stochastic processes, and their core concepts:
- Mean
- Covariance functions
- Stationary
- Autocorrelation

---

## About time series and stochastic processes

A **stochastic process** is a sequence of random variables $\{Y_t: t\in\mathbb Z\}$, used to model time series data.

Its full probabilistic structure is defined by the joint distributions of all finite subsets of $Y_t$.

In practice, we **focus on means, variances, and covariances** (first and second moments) rather than the full distributions.

## Means, variances, and covariances

For a stochastic process $\{Y_t\}$, key functions are:

- **Mean function**
	$$\mu_t = E(Y_t)$$
	The expected value at time $t$.
- **Autocovariance function**
	$$\gamma_{t,s} = \operatorname{Cov}(Y_t, Y_s) = E[(Y_t - \mu_t)(Y_s - \mu_s)]$$
	Measuring dependence between $Y_t$ and $Y_s$.
- **Autocorrelation function**
	$$\rho_{t,s} = \operatorname{Corr}(Y_t, Y_s) = \frac{\gamma_{t,s}}{\sqrt{\gamma_{t,t} \gamma_{s,s}}}$$
	Unitless measure of linear dependence.

### Properties

- $\gamma_{t,t} = \operatorname{Var}(Y_t)$
- $|\rho_{t,s}| \leq 1$
- $\rho_{t,t} = 1$
- $\gamma_{t,s} = \gamma_{s,t},\quad\rho_{t,s} = \rho_{s,t}$ (symmetry)

A key result for covariance of linear combinations is:

$$
\operatorname{Cov}\left(\sum_{i=1}^m c_i Y_{t_i}, \sum_{j=1}^n d_j Y_{s_j}\right) = \sum_{i=1}^m \sum_{j=1}^n c_i d_j \operatorname{Cov}(Y_{t_i}, Y_{s_j})
$$

## Some stochastic processes

### Random walk

$$Y_t = e_1 + e_2 + \cdots + e_t$$

where
- $\{e_t\}$ are independent, identically distributed (i.i.d.) 
- $E(e_t) = 0$
- $\operatorname{Var}(e_t) = \sigma_e^2$

| Property        | Expression                                              |
| --------------- | ------------------------------------------------------- |
| Mean            | $E(Y_t) = 0$                                    |
| Variance        | $\operatorname{Var}(Y_t) = t \sigma_e^2$                |
| Autocovariance  | $\gamma_{t,s} = t \sigma_e^2\qquad1 \leq t \leq s$     |
| Autocorrelation | $\rho_{t,s} = \sqrt{\frac{t}{s}}\qquad1 \leq t \leq s$ |

### Moving average

$$Y_t = \{e_t\}$$

where
- i.i.d. 
- $E(e_t) = 0$
- $\operatorname{Var}(e_t) = \sigma_e^2$.

| Property        | Expression                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mean            | $E(Y_t) = 0$                                                                                                                                                |
| Variance        | $\operatorname{Var}(Y_t) = 0.5 \sigma_e^2$                                                                                                                 |
| Autocovariance  | $$ \gamma_{t,s} = \begin{cases} 0.5 \sigma_e^2 & ,\vert t-s\vert  = 0 \\ 0.25 \sigma_e^2 & ,\vert t-s\vert  = 1 \\ 0 & ,\vert t-s\vert  > 1 \end{cases} $$ |
| Autocorrelation | $$ \rho_{t,s} = \begin{cases} 1 & ,\vert t-s\vert  = 0 \\ 0.5 & ,\vert t-s\vert  = 1 \\ 0 & ,\vert t-s\vert  > 1 \end{cases} $$ |

