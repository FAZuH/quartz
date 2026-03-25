---
publish: true
aliases:
  - Moving Average Process
created: 2026-03-25T15:22:40.622+07:00
modified: 2026-03-25T15:22:40.622+07:00
published: 2026-03-25T15:22:40.622+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let ${ e\_{t} }$ : [[white-noise_202603161400|White noise]]

A **moving average process** is defined as:
$$
Y\_{t} = \frac{e\_{t}+e\_{t-1}}{2}
$$

## Properties

$$
\begin{align}
E\[Y\_{t}] & = E\left\[ \frac{e\_{t}+e\_{t-1}}{2} \right] \\
& = \frac{E\[e\_{t}]+E\[e\_{t-1}]}{2} \\
& = 0 \\
\\
\text{Var}(Y\_{t})  & = \text{Var}\left( \frac{e\_{t}+e\_{t-1}}{2} \right) \\
& = \frac{1}{4} \[\text{Var}(e\_{t})+\text{Var}(e\_{t-1})] \\
& = \frac{1}{4} \cdot 2\sigma^{2}_{e} \\
& = \frac{1}{2}\sigma^{2}_{e}
\end{align}
$$

For covariance,
$$
\begin{align}
\text{Cov}(Y\_{t},Y\_{t-k}) & = \text{Cov}\left( \frac{e\_{t}+e\_{t-1}}{2}, \frac{e\_{t-k}+e\_{t-k-1}}{2}\right) \\
& = \frac{1}{4}\text{Cov}(e\_{t}+e\_{t-1},e\_{t-k}+e\_{t-k-1}) \\
& = \frac{1}{4}\[\text{Cov}(e\_{t},e\_{t-k}) + \text{Cov}(e\_{t},e\_{t-k-1}) + \text{Cov}(e\_{t-1},e\_{t-k}) + \text{Cov}(e\_{t-1},e\_{t-k-1})]\\
\end{align}
$$

Notice that $\text{Cov}(e\_{s},e\_{s})=\text{Var}(e\_{s})=\sigma\_{e}^{2},\quad\forall s$

Consider all cases for $k$:

If $k=0$, then
$$
\begin{align}
\text{Cov}(Y\_{t},Y\_{t-k}) & = \frac{1}{4} \[\sigma^{2}_{e} + 0 + 0 + \sigma^{2}_{e}] \\
\text{Var}(Y\_{t}) & = \frac{1}{2}\sigma^{2}\_{e}
\end{align}
$$

If $k=1$, then
$$
\text{Cov}(Y\_{t},Y\_{t-k})  = \frac{1}{4}\[0 + 0 + \sigma^{2}_{e} + 0] = \frac{1}{4}\sigma^{2}_{e}
$$

Otherwise, if $k\geq2$
$$
\text{Cov}(Y\_{t},Y\_{t-k})  = \frac{1}{4}\[0 + 0 + 0 + 0] = 0
$$
