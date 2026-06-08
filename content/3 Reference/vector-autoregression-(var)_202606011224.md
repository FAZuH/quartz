---
publish: true
aliases:
  - Vector Autoregression (VAR)
created: 2026-06-01T12:24:00.085+07:00
modified: 2026-06-02T12:02:34.551+07:00
published: 2026-06-02T12:02:34.551+07:00
creation-time: 2026-06-01 12:24
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

A multivariate time series model where each variable is regressed on its own lags and lags of all other variables in the system, treating all variables as endogenous.

## Definition

**Vector Autoregression (VAR)** is a non-structural multivariate [[time-series-data_202603161400|time series]] model developed by **C. A. Sims (1980)** as an alternative to structural econometric models. VAR treats all variables as endogenous and minimizes theoretical restrictions to better capture empirical economic phenomena.

### Key Characteristics

1. **No distinction** between endogenous and exogenous variables — all variables believed to be interrelated are included
2. **No parameter restrictions** for model identification
3. Uses **lagged values** of all variables to capture their effects on each other

### VAR($p$) Model (Standard Form)

For an $n$-variable system with $p$ lags:

$$
\boldsymbol{x}_t = A_0 + A_1 \boldsymbol{x}_{t-1} + A_2 \boldsymbol{x}_{t-2} + \cdots + A_p \boldsymbol{x}_{t-p} + \boldsymbol{e}_t
$$

where:

- $\boldsymbol{x}_t$ = $(n \times 1)$ vector of variables
- $A_0$ = $(n \times 1)$ vector of intercepts
- $A_i$ = $(n \times n)$ coefficient matrices
- $\boldsymbol{e}_t$ = $(n \times 1)$ vector of error terms (serially uncorrelated, constant variance)

### Estimation

Each equation in the standard form can be estimated by [[least-square-method_202604052128|OLS]] since the right-hand side contains only predetermined variables and error terms have constant variance.

### Model Specification

Two key decisions:

1. **Variable selection** — determined using [[granger-causality-test_202606011224|Granger Causality Test]]; variables with bidirectional causality are included
2. **Optimal lag length** — determined by [[aic-criterion_202603300224|AIC]], [[bic-criterion_202603300224|SIC]], HQ, LR, or FPE criteria; choose the lag that minimizes the criterion

### Types of VAR

| Type | Condition |
|------|-----------|
| **VAR in Level** | All variables stationary at level \[$I(0)$] |
| **VAR in Difference** | Variables non-stationary at level, stationary after differencing, **no cointegration** |
| **VECM** (Restricted VAR) | Variables non-stationary at level but **cointegrated** |

## Structural vs Reduced Form

### Structural (Primitive) Form

The structural form allows **contemporaneous relationships** between variables. Cannot be estimated directly by OLS — regressors correlate with errors.

**Matrix notation for VAR(1):**

$$
\boxed{B \boldsymbol{x}_t = \Gamma_0 + \Gamma_1 \boldsymbol{x}_{t-1} + \boldsymbol{\varepsilon}_t}
$$

where:

- $\boldsymbol{x}_t$ = $(n \times 1)$ vector of variables
- $B$ = $(n \times n)$ coefficient matrix for contemporaneous relations (diagonal = 1)
- $\Gamma_0$ = $(n \times 1)$ intercept vector
- $\Gamma_1$ = $(n \times n)$ coefficient matrix for lag 1
- $\boldsymbol{\varepsilon}_t$ = $(n \times 1)$ structural shock vector, $\boldsymbol{\varepsilon}_t \sim N(\mathbf{0}, \Sigma_\varepsilon)$ with $\Sigma_\varepsilon$ diagonal (shocks uncorrelated)

**Bivariate VAR(1) — structural form:**

$$
\begin{aligned}
y_t &= b_{10} - b_{12}z_t + \gamma_{11}y_{t-1} + \gamma_{12}z_{t-1} + \varepsilon_{yt} \\
z_t &= b_{20} - b_{21}y_t + \gamma_{21}y_{t-1} + \gamma_{22}z_{t-1} + \varepsilon_{zt}
\end{aligned}
$$

In matrix form:

$$
\begin{bmatrix} 1 & b_{12} \\ b_{21} & 1 \end{bmatrix}
\begin{bmatrix} y_t \\ z_t \end{bmatrix}
=
\begin{bmatrix} b_{10} \\ b_{20} \end{bmatrix}
+
\begin{bmatrix} \gamma_{11} & \gamma_{12} \\ \gamma_{21} & \gamma_{22} \end{bmatrix}
\begin{bmatrix} y_{t-1} \\ z_{t-1} \end{bmatrix}
+
\begin{bmatrix} \varepsilon_{yt} \\ \varepsilon_{zt} \end{bmatrix}
$$

> [!WARNING] Cannot Estimate Directly
> The structural form cannot be estimated by OLS because $y_t$ affects $z_t$ and $z_t$ affects $y_t$ simultaneously — regressors and errors are correlated.

### Reduced (Standard) Form

Multiply both sides by $B^{-1}$ to eliminate contemporaneous effects:

$$
\boxed{\boldsymbol{x}_t = A_0 + A_1 \boldsymbol{x}_{t-1} + \boldsymbol{e}_t}
$$

where $A_0 = B^{-1}\Gamma_0$, $A_1 = B^{-1}\Gamma_1$, and $\boldsymbol{e}_t = B^{-1}\boldsymbol{\varepsilon}_t$.

**Bivariate VAR(1) — reduced form:**

$$
\begin{aligned}
y_t &= a_{10} + a_{11}y_{t-1} + a_{12}z_{t-1} + e_{1t} \\
z_t &= a_{20} + a_{21}y_{t-1} + a_{22}z_{t-1} + e_{2t}
\end{aligned}
$$

**Properties of $\boldsymbol{e}_t$:**

- $E(\boldsymbol{e}_t) = \mathbf{0}$ (zero mean)
- $\text{Var}(\boldsymbol{e}_t) = \Sigma_e = B^{-1} \Sigma_\varepsilon (B^{-1})'$ (constant)
- $e_{1t}$ and $e_{2t}$ **are correlated** (contemporaneous correlation), unlike $\varepsilon_{1t}, \varepsilon_{2t}$ which are independent
- No serial correlation

### Procedure: Converting Structural → Reduced Form

**Given:** Structural form $B \boldsymbol{x}_t = \Gamma_0 + \Gamma_1 \boldsymbol{x}_{t-1} + \boldsymbol{\varepsilon}_t$ with $\boldsymbol{\varepsilon}_t \sim N(\mathbf{0}, \Sigma_\varepsilon)$.

**Step 1:** Compute $B^{-1}$ — the inverse of the contemporaneous coefficient matrix.

**Step 2:** Compute reduced-form intercept:

$$
A_0 = B^{-1} \Gamma_0
$$

**Step 3:** Compute reduced-form coefficient matrix:

$$
A_1 = B^{-1} \Gamma_1
$$

**Step 4:** Compute reduced-form errors and their distribution:

$$
\begin{aligned}
\boldsymbol{e}_t &= B^{-1} \boldsymbol{\varepsilon}_t \\[4pt]
E(\boldsymbol{e}_t) &= \mathbf{0} \\[4pt]
\Sigma_e &= B^{-1} \Sigma_\varepsilon (B^{-1})'
\end{aligned}
$$

**Example (bivariate):** Given $B = \begin{bmatrix} 1 & b_{12} \\ b_{21} & 1 \end{bmatrix}$:

$$
B^{-1} = \frac{1}{1 - b_{12}b_{21}} \begin{bmatrix} 1 & -b_{12} \\ -b_{21} & 1 \end{bmatrix}
$$

Then $A_1$, $\Sigma_e$ are computed via matrix multiplication.

> [!TIP] Special Case: Lower Triangular $B$
> If $b_{21} = 0$ (lower triangular), then $B^{-1} = \begin{bmatrix} 1 & -b_{12} \\ 0 & 1 \end{bmatrix}$ (no determinant factor needed), and:
>
> $$
> \Sigma_e = \begin{bmatrix} 1 & -b_{12} \\ 0 & 1 \end{bmatrix}
> \begin{bmatrix} \sigma_1^2 & 0 \\ 0 & \sigma_2^2 \end{bmatrix}
> \begin{bmatrix} 1 & 0 \\ -b_{12} & 1 \end{bmatrix}
> = \begin{bmatrix} \sigma_1^2 + b_{12}^2\sigma_2^2 & -b_{12}\sigma_2^2 \\ -b_{12}\sigma_2^2 & \sigma_2^2 \end{bmatrix}
> $$

## Analysis Tools

After estimating a VAR, three main analyses are available:

1. **Forecasting** — extrapolating current and future values using past information
2. **[[impulse-response-function-(irf)_202606011224|Impulse Response Function (IRF)]]** — tracing the effect of a shock to one variable on all variables over time
3. **[[variance-decomposition_202606011224|Variance Decomposition]]** — decomposing forecast error variance into proportions attributable to each variable's shocks

## Related

- [[granger-causality-test_202606011224|Granger Causality Test]]
- [[impulse-response-function-(irf)_202606011224|Impulse Response Function (IRF)]]
- [[variance-decomposition_202606011224|Variance Decomposition]]
- [[vecm_202606011224|VECM]]
- [[univariate-vs-multivariate-models_202603161400|Univariate vs Multivariate Models]]
