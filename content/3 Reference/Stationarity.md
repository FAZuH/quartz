---
{"publish":true,"created":"2025-07-24T11:50:56.285+07:00","modified":"2025-07-24T11:50:56.286+07:00","published":"2025-07-24T11:50:56.286+07:00","cssclasses":"","creation-time":"2025-03-27 15:46","status":"adult","tags":null,"parent":["[[time series analysis]]"]}
---


In time series, stationarity means dependence of previous observations "declines" over time, or formally, assumes the process’s **statistical properties are time-invariant**.

- **Strict Stationarity**: The joint distribution of $\{Y_{t_1}, \ldots, Y_{t_n}\}$ equals that of $\{Y_{t_1-k}, \ldots, Y_{t_n-k}\}$ for all $t_i$ and $k$. Implies **constant mean and variance**, and $\gamma_{t,s} = \gamma_{0,|t-s|}$.
- **Weak (Second-Order) Stationarity**: Requires constant mean and $\gamma_{t,t-k} = \gamma_{0,k}$ for all $t$ and $k$. Used throughout the book unless specified otherwise.

For stationary processes, we denote $\gamma_k = \operatorname{Cov}(Y_t, Y_{t-k})$, $\rho_k = \frac{\gamma_k}{\gamma_0}$, with properties: $\gamma_0 = \operatorname{Var}(Y_t)$, $\rho_0 = 1$, $\gamma_k = \gamma_{-k}$, $|\rho_k| \leq 1$.

![[Assets/stationaryvsnonstationary.webp|400]]

#TODO
Common solution to stationary data is to use differencing. Differencing works for these:
![|600](Assets/Pasted image 20250602023740.png)

But not these:
![|600](Assets/Pasted image 20250602023941.png)

## See also

- https://www.youtube.com/watch?v=aIdTGKjQWjA

## Examples

### White Noise

Defined as $\{e_t\}$, i.i.d. with $E(e_t) = 0$, $\operatorname{Var}(e_t) = \sigma_e^2$:

| Property             | Expression                  |
|----------------------|-----------------------------|
| Mean                 | $\mu_t = 0$                 |
| Autocovariance       | $\gamma_k = \begin{cases} \sigma_e^2 & ,k = 0 \\ 0 & ,k \neq 0 \end{cases}$ |
| Autocorrelation      | $\rho_k = \begin{cases} 1 & ,k = 0 \\ 0 & ,k \neq 0 \end{cases}$ |
| Stationarity         | Strict and weak             |

### Random Cosine Wave

Defined as $Y_t = \cos[2\pi(\frac{t}{12} + \Phi)]$, where $\Phi \sim \text{Uniform}(0,1)$:

| Property        | Expression                                              |
| --------------- | ------------------------------------------------------- |
| Mean            | $\mu_t = 0$                                             |
| Autocovariance  | $\gamma_{t,s} = \frac{1}{2} \cos[2\pi(\frac{t-s}{12})]$ |
| Autocorrelation | $\rho_k = \cos(2\pi \frac{k}{12})$                      |
| Stationarity    | Weak                                                    |

### Nonstationary Example: Random Walk

Variance $t \sigma_e^2$ and covariance $\gamma_{t,s} = t \sigma_e^2$ (for $t \leq s$) depend on $t$, not just $|t-s|$, so not stationary. Differencing $\nabla Y_t = Y_t - Y_{t-1} = e_t$ yields a stationary process (white noise).

See [[3 Reference/2 Fundamental Concepts#Random Walk]]
