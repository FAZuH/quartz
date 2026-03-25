---
publish: true
created: 2026-03-25T15:22:40.643+07:00
modified: 2026-03-25T15:22:40.643+07:00
published: 2026-03-25T15:22:40.643+07:00
creation-time: 2025-03-27 15:46
status: complete
tags:
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

In time series, stationarity means dependence of previous observations "declines" over time, or formally, assumes the process’s **statistical properties are time-invariant**.

- **Strict Stationarity**: The joint distribution of ${Y\_{t\_1}, \ldots, Y\_{t\_n}}$ equals that of ${Y\_{t\_1-k}, \ldots, Y\_{t\_n-k}}$ for all $t\_i$ and $k$. Implies **constant mean and variance**, and $\gamma\_{t,s} = \gamma\_{0,|t-s|}$.
- **Weak (Second-Order) Stationarity**: Requires constant mean and $\gamma\_{t,t-k} = \gamma\_{0,k}$ for all $t$ and $k$. Used throughout the book unless specified otherwise.

For stationary processes, we denote $\gamma\_k = \operatorname{Cov}(Y\_t, Y\_{t-k})$, $\rho\_k = \frac{\gamma\_k}{\gamma\_0}$, with properties: $\gamma\_0 = \operatorname{Var}(Y\_t)$, $\rho\_0 = 1$, $\gamma\_k = \gamma\_{-k}$, $|\rho\_k| \leq 1$.

![[stationaryvsnonstationary.webp|400]]

#TODO
Common solution to stationary data is to use differencing. Differencing works for these:
![|600](assets/Pasted image 20250602023740.png)

But not these:
![|600](assets/Pasted image 20250602023941.png)

## See also

- https://www.youtube.com/watch?v=aIdTGKjQWjA

## Examples

### White Noise

Defined as ${e\_t}$, i.i.d. with $E(e\_t) = 0$, $\operatorname{Var}(e\_t) = \sigma\_e^2$:

| Property        | Expression                                                                  |
| --------------- | --------------------------------------------------------------------------- |
| Mean            | $\mu\_t = 0$                                                                 |
| Autocovariance  | $\gamma\_k = \begin{cases} \sigma\_e^2 & ,k = 0 \ 0 & ,k \neq 0 \end{cases}$ |
| Autocorrelation | $\rho\_k = \begin{cases} 1 & ,k = 0 \ 0 & ,k \neq 0 \end{cases}$            |
| Stationarity    | Strict and weak                                                             |

### Random Cosine Wave

Defined as $Y\_t = \cos\[2\pi(\frac{t}{12} + \Phi)]$, where $\Phi \sim \text{Uniform}(0,1)$:

| Property        | Expression                                              |
| --------------- | ------------------------------------------------------- |
| Mean            | $\mu\_t = 0$                                             |
| Autocovariance  | $\gamma\_{t,s} = \frac{1}{2} \cos\[2\pi(\frac{t-s}{12})]$ |
| Autocorrelation | $\rho\_k = \cos(2\pi \frac{k}{12})$                      |
| Stationarity    | Weak                                                    |

### Nonstationary Example: Random Walk

Variance $t \sigma\_e^2$ and covariance $\gamma\_{t,s} = t \sigma\_e^2$ (for $t \leq s$) depend on $t$, not just $|t-s|$, so not stationary. Differencing $\nabla Y\_t = Y\_t - Y\_{t-1} = e\_t$ yields a stationary process (white noise).

See [[2 Fundamental Concepts#Random Walk]]
