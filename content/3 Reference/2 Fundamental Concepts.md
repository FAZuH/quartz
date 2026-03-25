---
publish: true
created: 2026-03-25T15:22:40.643+07:00
modified: 2026-03-25T15:22:40.643+07:00
published: 2026-03-25T15:22:40.643+07:00
tags:
  - content-type/conceptual
  - content-type/referential
creation-time: 2025-03-27 15:28
status: complete
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

A **stochastic process** is a sequence of random variables ${Y\_t: t\in\mathbb Z}$, used to model time series data.

Its full probabilistic structure is defined by the joint distributions of all finite subsets of $Y\_t$.

In practice, we **focus on means, variances, and covariances** (first and second moments) rather than the full distributions.

## Means, variances, and covariances

For a stochastic process ${Y\_t}$, its key functions are:

- **Mean function**
  $$\mu\_t = E(Y\_t)$$
  The expected value at time $t$.
- **Autocovariance function**
  $$\gamma\_{t,s} = \operatorname{Cov}(Y\_t, Y\_s) = E\[(Y\_t - \mu\_t)(Y\_s - \mu\_s)]$$
  Measuring dependence between $Y\_t$ and $Y\_s$.
- **Autocorrelation function**
  $$\rho\_{t,s} = \operatorname{Corr}(Y\_t, Y\_s) = \frac{\gamma\_{t,s}}{\sqrt{\gamma\_{t,t} \gamma\_{s,s}}}$$
  Unitless measure of linear dependence.

### Properties

- $\gamma\_{t,t} = \operatorname{Var}(Y\_t)$
- $|\rho\_{t,s}| \leq 1$
- $\rho\_{t,t} = 1$
- $\gamma\_{t,s} = \gamma\_{s,t},\quad\rho\_{t,s} = \rho\_{s,t}$ (symmetry)

A key result for covariance of linear combinations is:

$$
\operatorname{Cov}\left(\sum\_{i=1}^m c\_i Y\_{t\_i}, \sum\_{j=1}^n d\_j Y\_{s\_j}\right) = \sum\_{i=1}^m \sum\_{j=1}^n c\_i d\_j \operatorname{Cov}(Y\_{t\_i}, Y\_{s\_j})
$$

## Some stochastic processes

Suppose that

- ${ e\_{t} }$ are independent, identically distributed (i.i.d.)
- $E(e\_{t}) = 0$
- $\operatorname{Var}(e\_{t}) = \sigma\_{e}^2$

### Random walk

$$
\begin{align}
Y\_t &= e\_1 + e\_2 + \cdots + e\_t\\
&= \sum\_{i=1}^t e\_{i} \\
\end{align}
$$

| Property        | Expression                                             |
| --------------- | ------------------------------------------------------ |
| Mean            | $E(Y\_t) = 0$                                           |
| Variance        | $\operatorname{Var}(Y\_t) = t \sigma\_e^2$               |
| Autocovariance  | $\gamma\_{t,s} = t \sigma\_e^2\qquad1 \leq t \leq s$     |
| Autocorrelation | $\rho\_{t,s} = \sqrt{\frac{t}{s}}\qquad1 \leq t \leq s$ |

Notice the variance of the process increases with time.

Random walk also has the inductive form:

$$
\begin{align}
Y\_{t} = Y\_{t-1} + e\_{t}
\end{align}
$$

With "initial state" $Y\_{1} = e\_{1}$.

> [!TIP] Intuition
> If the $e\_{t}$ is interpreted as the size of "step" taken at time $t$,
> then $Y\_{t}$ can be interpreted as the position of the "random walker" at time $t$.

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
Y\_{t} = \frac{e\_{t}+e\_{t-1}}{2}
$$

| Property        | Expression                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mean            | $E(Y\_t) = 0$                                                                                                                                               |
| Variance        | $\operatorname{Var}(Y\_t) = 0.5 \sigma\_e^2$                                                                                                                 |
| Autocovariance  | $$ \gamma\_{t,s} = \begin{cases} 0.5 \sigma\_e^2 & ,\vert t-s\vert  = 0 \ 0.25 \sigma\_e^2 & ,\vert t-s\vert  = 1 \ 0 & ,\vert t-s\vert  > 1 \end{cases} $$ |
| Autocorrelation | $$ \rho\_{t,s} = \begin{cases} 1 & ,\vert t-s\vert  = 0 \ 0.5 & ,\vert t-s\vert  = 1 \ 0 & ,\vert t-s\vert  > 1 \end{cases} $$                            |

Notice that values of $Y$ at $k$ units of time apart have the same correlation no matter where they occur (for any $t,s$).

This leads us to an important concept in time series which is stationarity, which will be covered in [Stationarity](Stationarity.md).
