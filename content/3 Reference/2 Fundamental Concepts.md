---
publish: true
created: 2026-02-22T19:23:58.298+07:00
modified: 2026-02-22T19:23:58.298+07:00
published: 2026-02-22T19:23:58.298+07:00
tags:
  - content-type/conceptual
  - content-type/referential
cssclasses: ""
creation-time: 2025-03-27 15:28
status: adult
parent:
  - "[[Time Series Analysis With Applications in R]]"
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

For a stochastic process $\{Y_t\}$, its key functions are:

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

Suppose that
- $\{ e_{t} \}$ are independent, identically distributed (i.i.d.)
- $E(e_{t}) = 0$
- $\operatorname{Var}(e_{t}) = \sigma_{e}^2$

### Random walk

$$
\begin{align}
Y_t &= e_1 + e_2 + \cdots + e_t\\
&= \sum_{i=1}^t e_{i} \\
\end{align}
$$

| Property        | Expression                                             |
| --------------- | ------------------------------------------------------ |
| Mean            | $E(Y_t) = 0$                                           |
| Variance        | $\operatorname{Var}(Y_t) = t \sigma_e^2$               |
| Autocovariance  | $\gamma_{t,s} = t \sigma_e^2\qquad1 \leq t \leq s$     |
| Autocorrelation | $\rho_{t,s} = \sqrt{\frac{t}{s}}\qquad1 \leq t \leq s$ |

Notice the variance of the process increases with time.

Random walk also has the inductive form:

$$
\begin{align}
Y_{t} = Y_{t-1} + e_{t}
\end{align}
$$

With "initial state" $Y_{1} = e_{1}$.

> [!TIP] Intuition
> If the $e_{t}$ is interpreted as the size of "step" taken at time $t$,
> then $Y_{t}$ can be interpreted as the position of the "random walker" at time $t$.

Also notice the following autororrelation values

![foo|500](assets/Pasted image 20250428140032.png)

Values of $Y$ at neighboring time points are more and **more strongly and positively correlated as time goes by**.

On the other hand, the values of $Y$ at distant time points are **less and less correlated**.

Code example:

```python
import random

random_walk: list[float] = [0.0]
for _ in range(100):
    random_walk.append(random_walk[-1] + random.uniform(-1,1))

import matplotlib.pyplot as plt
plt.plot(random_walk)
plt.show()
```

### Moving average

$$
Y_{t} = \frac{e_{t}+e_{t-1}}{2}
$$

| Property        | Expression                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mean            | $E(Y_t) = 0$                                                                                                                                               |
| Variance        | $\operatorname{Var}(Y_t) = 0.5 \sigma_e^2$                                                                                                                 |
| Autocovariance  | $$ \gamma_{t,s} = \begin{cases} 0.5 \sigma_e^2 & ,\vert t-s\vert  = 0 \\ 0.25 \sigma_e^2 & ,\vert t-s\vert  = 1 \\ 0 & ,\vert t-s\vert  > 1 \end{cases} $$ |
| Autocorrelation | $$ \rho_{t,s} = \begin{cases} 1 & ,\vert t-s\vert  = 0 \\ 0.5 & ,\vert t-s\vert  = 1 \\ 0 & ,\vert t-s\vert  > 1 \end{cases} $$                            |

Notice that values of $Y$ at $k$ units of time apart have the same correlation no matter where they occur (for any $t,s$).

This leads us to an important concept in time series which is stationarity, which will be covered in [Stationarity](Stationarity.md).
