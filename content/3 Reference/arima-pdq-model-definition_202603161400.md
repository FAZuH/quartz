---
publish: true
aliases:
  - ARIMA(p,d,q) Model
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-29T22:19:37.611+07:00
published: 2026-03-29T22:19:37.611+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $W\_{t}$ : [[armapq-process-model_202603161400|ARMA(p,q)]] that is [[weakly-stationary_202603161400|weakly stationary]]

An [[arp-process-model_202603161400|Autoregressive]], [[differencing-to-achieve-stationarity_202603161400|Integrated]], [[moving-average-process-maq_202603161400|Moving Average]] model $Z\_{t}$, often referred to **ARIMA(p,d,q)**, is defined as

$$
W\_{t} = \nabla^d Z\_{t}
$$

## Formulations

### ARIMA(p,1,q)

Let $W\_{t}$ be a weakly stationary ARMA(p,q) model, defined as

$$W\_t = \phi\_1 W\_{t-1} + \dots + \phi\_p W\_{t-p} + a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q}$$

The model ARIMA(p,1,q) is defined as:
$$
\begin{align}
W\_{t} & = \nabla^1Z\_{t} \\
\phi\_1 W\_{t-1} + \dots + \phi\_p W\_{t-p} + a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q} & = (Z\_{t} - Z\_{t-1}) \\
Z\_{t-1} + \phi\_1 W\_{t-1} + \dots + \phi\_p W\_{t-p} + a\_t - \theta\_1 a\_{t-1} - \dots - \theta\_q a\_{t-q} & = Z\_{t} \\
Z\_{t-1} + \phi\_1 (Z\_{t-1} - Z\_{t-2}) + \dots + \phi\_p (Z\_{t-p} - Z\_{t-p-1}) + a\_t - \dots & = Z\_{t}
\end{align}
$$

It resembles an ARMA(p+1, q) model but with one root of the [[ar-characteristic-equation_202603161400|AR polynomial]] exactly equal to 1.

## Property: Characteristic Polynomial of ARIMA(p,1,q)

The AR operator using the [[backshift-operator_202603161400|backshift operator]] $B$ is:
$$\phi(B)(1-B) Z\_t = \theta(B) a\_t$$
The characteristic polynomial is:
$$\phi(x)(1-x) = 0$$
This polynomial has one root equal to 1 (the $(1-x)$ factor), which confirms the non-stationarity of the original series. The remaining roots must lie outside the unit circle for the differenced series to be [[weakly-stationary_202603161400|stationary]].

## Constant Term

If the differenced series $W\_t = \nabla^d Z\_t$ has a non-zero mean $\mu\_W$, a constant term $\theta\_0$ is added:
$$\phi(B) W\_t = \theta\_0 + \theta(B) a\_t$$
where $\theta\_0 = \mu\_W (1 - \phi\_1 - \dots - \phi\_p)$.

- If $d=1$, a constant $\theta\_0 \neq 0$ implies a **[[linear-and-quadratic-deterministic-trends_202603161400|deterministic linear trend]]** in the original series $Z\_t$.
- If $d=2$, it implies a **[[linear-and-quadratic-deterministic-trends_202603161400|deterministic quadratic trend]]**.

## Sub-models

### Integrated Moving Average (IMA)

An ARIMA(p,d,q) model where the [[arp-process-model_202603161400|autoregressive]] order $p=0$ and is [[differencing-to-achieve-stationarity_202603161400|integrated]]. Denoted as IMA(d,q).

#### IMA(1,1)

$$\nabla Z\_t = a\_t - \theta a\_{t-1} \quad \text{or} \quad Z\_t = Z\_{t-1} + a\_t - \theta a\_{t-1}$$
Non-stationary due to the unit root in the AR part; variance increases linearly with time. Common for series with a [[stochastic-vs-deterministic-trend_202603161400|stochastic level]].

#### IMA(2,2)

$$\nabla^2 Z\_t = a\_t - \theta\_1 a\_{t-1} - \theta\_2 a\_{t-2} \quad \text{or} \quad Z\_t = 2Z\_{t-1} - Z\_{t-2} + a\_t - \theta\_1 a\_{t-1} - \theta\_2 a\_{t-2}$$
Useful for modeling series with a [[stochastic-vs-deterministic-trend_202603161400|stochastic trend]].

### Autoregressive Integrated (ARI)

An ARIMA(p,d,q) model where the [[moving-average-process_202603161400|moving average]] order $q=0$. Denoted as ARI(p,d).

#### ARI(1,1)

$$\nabla Z\_t = \phi \nabla Z\_{t-1} + a\_t \quad \text{or} \quad Z\_t = (1+\phi)Z\_{t-1} - \phi Z\_{t-2} + a\_t$$
where $|\phi| < 1$ for the differenced series to be [[weakly-stationary_202603161400|stationary]].

##### Procedure: Determining Weights for ARI(1,1)

Representing an ARI(1,1) process as a [[general-linear-process_202603161400|general linear process]] $Z\_t = \sum \psi\_j a\_{t-j}$:

1. Use the relationship $(1-\phi B)(1-B) \psi(B) = 1$.
2. Equate coefficients of $B^k$ on both sides.
3. The recursive solution for $\psi\_k$ is $\psi\_k = (1+\phi)\psi\_{k-1} - \phi \psi\_{k-2}$ with $\psi\_0 = 1$ and $\psi\_1 = 1+\phi$.
4. The explicit solution is $\psi\_k = \frac{1-\phi^{k+1}}{1-\phi}$.
