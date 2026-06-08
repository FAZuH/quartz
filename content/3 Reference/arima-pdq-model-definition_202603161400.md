---
publish: true
aliases:
  - ARIMA(p,d,q) Model
created: 2026-04-09T23:07:38.997+07:00
modified: 2026-06-02T10:33:41.708+07:00
published: 2026-06-02T10:33:41.708+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $W_{t}$ : [[armapq-process-model_202603161400|ARMA(p,q)]] that is [[weakly-stationary_202603161400|weakly stationary]]

An [[arp-process-model_202603161400|Autoregressive]], [[differencing-to-achieve-stationarity_202603161400|Integrated]], [[moving-average-process-maq_202603161400|Moving Average]] model $Z_{t}$, often referred to **ARIMA(p,d,q)**, is defined as

$$
W_{t} = \nabla^d Z_{t}
$$

## Formulations

### ARIMA(p,1,q)

Let $W_{t}$ be a weakly stationary ARMA(p,q) model, defined as

$W_t = \phi_1 W_{t-1} + \dots + \phi_p W_{t-p} + a_t - \theta_1 a_{t-1} - \dots - \theta_q a_{t-q}$

The model ARIMA(p,1,q) is defined as:

$$
\begin{align}
W_{t} & = \nabla^1Z_{t} \\
\phi_1 W_{t-1} + \dots + \phi_p W_{t-p} + a_t - \theta_1 a_{t-1} - \dots - \theta_q a_{t-q} & = (Z_{t} - Z_{t-1}) \\
 Z_{t-1} + \phi_1 W_{t-1} + \dots + \phi_p W_{t-p} + a_t - \theta_1 a_{t-1} - \dots - \theta_q a_{t-q} & = Z_{t} \\
Z_{t-1} + \phi_1 (Z_{t-1} - Z_{t-2}) + \dots + \phi_p (Z_{t-p} - Z_{t-p-1}) + a_t - \dots & = Z_{t}
\end{align}
$$

It resembles an ARMA(p+1, q) model but with one root of the [[ar-characteristic-equation_202603161400|AR polynomial]] exactly equal to 1.

## Property: Characteristic Polynomial of ARIMA(p,1,q)

The AR operator using the [[backshift-operator_202603161400|backshift operator]] $B$ is:
$\phi(B)(1-B) Z_t = \theta(B) a_t$
The characteristic polynomial is:
$\phi(x)(1-x) = 0$
This polynomial has one root equal to 1 (the $(1-x)$ factor), which confirms the non-stationarity of the original series. The remaining roots must lie outside the unit circle for the differenced series to be [[weakly-stationary_202603161400|stationary]].

## Constant Term

If the differenced series $W_t = \nabla^d Z_t$ has a non-zero mean $\mu_W$, a constant term $\theta_0$ is added:
$\phi(B) W_t = \theta_0 + \theta(B) a_t$
where $\theta_0 = \mu_W (1 - \phi_1 - \dots - \phi_p)$.

- If $d=1$, a constant $\theta_0 \neq 0$ implies a **[[linear-and-quadratic-deterministic-trends_202603161400|deterministic linear trend]]** in the original series $Z_t$.
- If $d=2$, it implies a **[[linear-and-quadratic-deterministic-trends_202603161400|deterministic quadratic trend]]**.

## Sub-models

### Integrated Moving Average (IMA)

An ARIMA(p,d,q) model where the [[arp-process-model_202603161400|autoregressive]] order $p=0$ and is [[differencing-to-achieve-stationarity_202603161400|integrated]]. Denoted as IMA(d,q).

#### IMA(1,1)

$\nabla Z_t = a_t - \theta a_{t-1} \quad \text{or} \quad Z_t = Z_{t-1} + a_t - \theta a_{t-1}$
Non-stationary due to the unit root in the AR part; variance increases linearly with time. Common for series with a [[stochastic-vs-deterministic-trend_202603161400|stochastic level]].

#### IMA(2,2)

$\nabla^2 Z_t = a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2} \quad \text{or} \quad Z_t = 2Z_{t-1} - Z_{t-2} + a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2}$
Useful for modeling series with a [[stochastic-vs-deterministic-trend_202603161400|stochastic trend]].

### Autoregressive Integrated (ARI)

An ARIMA(p,d,q) model where the [[moving-average-process_202603161400|moving average]] order $q=0$. Denoted as ARI(p,d).

#### ARI(1,1)

$\nabla Z_t = \phi \nabla Z_{t-1} + a_t \quad \text{or} \quad Z_t = (1+\phi)Z_{t-1} - \phi Z_{t-2} + a_t$
where $|\phi| < 1$ for the differenced series to be [[weakly-stationary_202603161400|stationary]].

##### Procedure: Determining Weights for ARI(1,1)

Representing an ARI(1,1) process as a [[general-linear-process_202603161400|general linear process]] $Z_t = \sum \psi_j a_{t-j}$:

1. Use the relationship $(1-\phi B)(1-B) \psi(B) = 1$.
2. Equate coefficients of $B^k$ on both sides.
3. The recursive solution for $\psi_k$ is $\psi_k = (1+\phi)\psi_{k-1} - \phi \psi_{k-2}$ with $\psi_0 = 1$ and $\psi_1 = 1+\phi$.
4. The explicit solution is $\psi_k = \frac{1-\phi^{k+1}}{1-\phi}$.

## Examples

> [!EXAMPLE] 10 ARIMA(p,d,q) Model Specifications
> Each example defines $W_t = \nabla^d Z_t$, then shows the model for the stationary $W_t$, then expands back to $Z_t$.

1. **ARIMA$(0,1,0)$** _(Random Walk)_
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   W_t &= a_t \\[4pt]
   Z_t &= Z_{t-1} + a_t
   \end{aligned}$$
   Non-stationary; variance increases linearly with $t$.

   $$$
2. **ARIMA$(0,1,0)$ with drift** _(Random Walk with Drift)_
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   W_t &= \theta_0 + a_t \\[4pt]
   Z_t &= Z_{t-1} + \theta_0 + a_t
   \end{aligned}$$
   $\theta_0$ is the drift term — the series has both a stochastic trend and a deterministic linear trend.

   $$$
3. **ARIMA$(0,1,1)$** _(IMA(1,1) / Simple Exponential Smoothing)_
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   W_t &= (1 - \theta_1 B)a_t = a_t - \theta_1 a_{t-1} \\[4pt]
   Z_t &= Z_{t-1} + a_t - \theta_1 a_{t-1}
   \end{aligned}$$

   $$$
4. **ARIMA$(1,1,0)$** _(ARI(1,1))_
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   (1 - \phi_1 B)W_t &= a_t \\[4pt]
   W_t &= \phi_1 W_{t-1} + a_t \\[4pt]
   Z_t &= (1 + \phi_1)Z_{t-1} - \phi_1 Z_{t-2} + a_t
   \end{aligned}$$

   $$$
5. **ARIMA$(1,1,1)$**
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   (1 - \phi_1 B)W_t &= (1 - \theta_1 B)a_t \\[4pt]
   W_t &= \phi_1 W_{t-1} + a_t - \theta_1 a_{t-1} \\[4pt]
   Z_t &= (1 + \phi_1)Z_{t-1} - \phi_1 Z_{t-2} + a_t - \theta_1 a_{t-1}
   \end{aligned}$$

   $$$
6. **ARIMA$(0,1,2)$** _(IMA(1,2))_
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   W_t &= (1 - \theta_1 B - \theta_2 B^2)a_t = a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2} \\[4pt]
   Z_t &= Z_{t-1} + a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2}
   \end{aligned}$$

   $$$
7. **ARIMA$(2,1,0)$** _(ARI(2,1))_
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   (1 - \phi_1 B - \phi_2 B^2)W_t &= a_t \\[4pt]
   W_t &= \phi_1 W_{t-1} + \phi_2 W_{t-2} + a_t \\[4pt]
   Z_t &= (1 + \phi_1)Z_{t-1} + (\phi_2 - \phi_1)Z_{t-2} - \phi_2 Z_{t-3} + a_t
   \end{aligned}$$

   $$$
8. **ARIMA$(2,1,2)$**
   $$$\begin{aligned}
   W_t &= (1-B)Z_t = Z_t - Z_{t-1} \\[4pt]
   (1 - \phi_1 B - \phi_2 B^2)W_t &= (1 - \theta_1 B - \theta_2 B^2)a_t \\[4pt]
   W_t &= \phi_1 W_{t-1} + \phi_2 W_{t-2} + a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2}
   \end{aligned}$$

   $$$
9. **ARIMA$(1,2,1)$** _(Double differenced)_
   $$$\begin{aligned}
   W_t &= (1-B)^2 Z_t = Z_t - 2Z_{t-1} + Z_{t-2} \\[4pt]
   (1 - \phi_1 B)W_t &= (1 - \theta_1 B)a_t \\[4pt]
   W_t &= \phi_1 W_{t-1} + a_t - \theta_1 a_{t-1}
   \end{aligned}$$
   $d=2$ implies a quadratic trend in $Z_t$ if a constant term is present.

   $$$
10. **ARIMA$(0,2,2)$** _(IMA(2,2))_
    $$$\begin{aligned}
    W_t &= (1-B)^2 Z_t = Z_t - 2Z_{t-1} + Z_{t-2} \\[4pt]
    W_t &= (1 - \theta_1 B - \theta_2 B^2)a_t = a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2} \\[4pt]
    Z_t &= 2Z_{t-1} - Z_{t-2} + a_t - \theta_1 a_{t-1} - \theta_2 a_{t-2}
    \end{aligned}$$

    $$$

> [!TIP] Identifying ARIMA Orders from an Expanded Equation
>
> - The **maximum lag of $Z_{t-k}$** on the RHS (excluding $Z_t$ on LHS) gives $p + d$: match $Z_{t-1}$ through $Z_{t-p-d}$
> - The **maximum lag of $a_{t-j}$** on the RHS gives $q$
> - Example: $Z_t = 2Z_{t-1} - Z_{t-2} + a_t - \theta_1 a_{t-1}$ has $p+d = 2$ lags of $Z$ and $q = 1$ lag of $a$. Knowing $d$ requires testing for unit roots.
