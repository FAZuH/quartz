---
publish: true
aliases:
  - ARIMA(p,d,q) Model
created: 2026-03-16T11:24:00.920+07:00
modified: 2026-03-16T13:34:42.677+07:00
published: 2026-03-16T13:34:42.677+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

Autoregressive Integrated Moving Average model. A process $Z_t$ is ARIMA(p,d,q) if its $d$-th difference $W_t = \nabla^d Z_t$ is a stationary [[3 Reference/armapq-process-model_202603161400\|ARMA(p,q)]] process.
- $p$: Order of autoregression.
- $d$: Degree of differencing.
- $q$: Order of moving average.

## Formulations

### ARIMA(p,1,q)
A specific case where $d=1$. Let $W_t = Z_t - Z_{t-1}$. The model is:
$$W_t = \phi_1 W_{t-1} + \dots + \phi_p W_{t-p} + a_t - \theta_1 a_{t-1} - \dots - \theta_q a_{t-q}$$
Substituting $W_t$:
$$(Z_t - Z_{t-1}) = \phi_1 (Z_{t-1} - Z_{t-2}) + \dots + \phi_p (Z_{t-p} - Z_{t-p-1}) + a_t - \dots$$
It resembles an ARMA(p+1, q) model but with one root of the AR polynomial exactly equal to 1.

## Property: Characteristic Polynomial of ARIMA(p,1,q)

The AR operator using the [[3 Reference/backshift-operator_202603161400\|backshift operator]] $B$ is:
$$\phi(B)(1-B) Z_t = \theta(B) a_t$$
The characteristic polynomial is:
$$\phi(x)(1-x) = 0$$
This polynomial has one root equal to 1 (the $(1-x)$ factor), which confirms the non-stationarity of the original series. The remaining roots must lie outside the unit circle for the differenced series to be stationary.

## Constant Term

If the differenced series $W_t = \nabla^d Z_t$ has a non-zero mean $\mu_W$, a constant term $\theta_0$ is added:
$$\phi(B) W_t = \theta_0 + \theta(B) a_t$$
where $\theta_0 = \mu_W (1 - \phi_1 - \dots - \phi_p)$.
- If $d=1$, a constant $\theta_0 \neq 0$ implies a **deterministic linear trend** in the original series $Z_t$.
- If $d=2$, it implies a **deterministic quadratic trend**.

## Sub-models

### Integrated Moving Average (IMA)
An ARIMA(p,d,q) model where the autoregressive order $p=0$. Denoted as IMA(d,q).

#### IMA(1,1)
$$\nabla Z_t = a_t - \theta a_{t-1} \quad \text{or} \quad Z_t = Z_{t-1} + a_t - \theta a_{t-1}$$
Non-stationary due to the unit root in the AR part; variance increases linearly with time. Common for series with a stochastic level.

#### IMA(2,2)
$$\nabla^2 Z_t = a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2} \quad \text{or} \quad Z_t = 2Z_{t-1} - Z_{t-2} + a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2}$$
Useful for modeling series with a stochastic trend.

### Autoregressive Integrated (ARI)
An ARIMA(p,d,q) model where the moving average order $q=0$. Denoted as ARI(p,d).

#### ARI(1,1)
$$\nabla Z_t = \phi \nabla Z_{t-1} + a_t \quad \text{or} \quad Z_t = (1+\phi)Z_{t-1} - \phi Z_{t-2} + a_t$$
where $|\phi| < 1$ for the differenced series to be stationary.

##### Procedure: Determining Weights for ARI(1,1)
Representing an ARI(1,1) process as a [[3 Reference/general-linear-process_202603161400\|general linear process]] $Z_t = \sum \psi_j a_{t-j}$:
1.  Use the relationship $(1-\phi B)(1-B) \psi(B) = 1$.
2.  Equate coefficients of $B^k$ on both sides.
3.  The recursive solution for $\psi_k$ is $\psi_k = (1+\phi)\psi_{k-1} - \phi \psi_{k-2}$ with $\psi_0 = 1$ and $\psi_1 = 1+\phi$.
4.  The explicit solution is $\psi_k = \frac{1-\phi^{k+1}}{1-\phi}$.
