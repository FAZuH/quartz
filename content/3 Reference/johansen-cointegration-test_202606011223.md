---
publish: true
aliases:
  - Johansen Cointegration Test
created: 2026-06-01T12:23:02.345+07:00
modified: 2026-06-01T12:23:02.345+07:00
published: 2026-06-01T12:23:02.345+07:00
creation-time: 2026-06-01 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Maximum likelihood-based multivariate cointegration test that determines the number of cointegrating relationships using trace and maximum eigenvalue statistics.

## Procedure

A [[maximum-likelihood-method_202604052129|maximum likelihood estimation (MLE)]] based test for [[Cointegration]] that can handle **multiple variables** (vectors) simultaneously. Unlike the [[Engle-Granger Cointegration Test]], it can determine the **number** of cointegrating relationships.

### Model

The test is based on a [[Vector Autoregression (VAR)]] framework:

$$
\boldsymbol{Y}_t = A_1 Y_{t-1} + \cdots + A_p Y_{t-p} + B X_t + \boldsymbol{e}_t
$$

where:

- $\boldsymbol{Y}_t$ is a $k$-vector of non-stationary variables
- $X_t$ is a $d$-vector of deterministic variables
- $\boldsymbol{e}_t$ is a vector of innovations

### Two Test Statistics

**1. Trace Statistic**

$$
\lambda_{\text{trace}}(r) = -T \sum_{i=r+1}^{k} \ln(1 - \hat{\lambda}_i)
$$

- $H_0$: number of cointegrating vectors $\leq r$
- $H_1$: number of cointegrating vectors $> r$

**2. Maximum Eigenvalue Statistic**

$$
\lambda_{\text{max}}(r, r+1) = -T \ln(1 - \hat{\lambda}_{r+1})
$$

- $H_0$: number of cointegrating vectors $= r$
- $H_1$: number of cointegrating vectors $= r+1$

### Decision Procedure

Test sequentially: $r = 0, 1, 2, \ldots, k-1$ until $H_0$ is not rejected.

- If $\lambda_{\text{stat}} > \text{critical value}$ → reject $H_0$, test $r+1$
- If $\lambda_{\text{stat}} < \text{critical value}$ → stop, the number of cointegrating vectors is $r$

> [!NOTE]
> Both the trace and maximum eigenvalue tests should ideally point to the **same number** of cointegrating relationships.

## Related

- [[Cointegration]]
- [[Engle-Granger Cointegration Test]]
- [[Durbin-Watson Cointegration Test]]
- [[Vector Autoregression (VAR)]]
- [[maximum-likelihood-method_202604052129|Maximum Likelihood Method]]
