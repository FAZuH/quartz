---
publish: true
aliases:
  - Moving Average Process
created: 2026-04-09T23:07:39.507+07:00
modified: 2026-04-09T23:07:39.508+07:00
published: 2026-04-09T23:07:39.508+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $\{ e_{t} \}$ : [[white-noise_202603161400|White noise]]

A **moving average process** is defined as:

$$
Y_{t} = \frac{e_{t}+e_{t-1}}{2}
$$

## Properties

$$
\begin{align}
E[Y_{t}] & = E\left[ \frac{e_{t}+e_{t-1}}{2} \right] \\
& = \frac{E[e_{t}]+E[e_{t-1}]}{2} \\
& = 0 \\
\\
\text{Var}(Y_{t})  & = \text{Var}\left( \frac{e_{t}+e_{t-1}}{2} \right) \\
& = \frac{1}{4} [\text{Var}(e_{t})+\text{Var}(e_{t-1})] \\
& = \frac{1}{4} \cdot 2\sigma^{2}_{e} \\
& = \frac{1}{2}\sigma^{2}_{e} 
\end{align}
$$

For [[autocovariance-and-autocorrelation_202603161400|covariance]],

$$
\begin{align}
\text{Cov}(Y_{t},Y_{t-k}) & = \text{Cov}\left( \frac{e_{t}+e_{t-1}}{2}, \frac{e_{t-k}+e_{t-k-1}}{2}\right) \\
 & = \frac{1}{4}\text{Cov}(e_{t}+e_{t-1},e_{t-k}+e_{t-k-1}) \\
 & = \frac{1}{4}[\text{Cov}(e_{t},e_{t-k}) + \text{Cov}(e_{t},e_{t-k-1}) + \text{Cov}(e_{t-1},e_{t-k}) + \text{Cov}(e_{t-1},e_{t-k-1})]\\
\end{align}
$$

Notice that $\text{Cov}(e_{s},e_{s})=\text{Var}(e_{s})=\sigma_{e}^{2},\quad\forall s$

Consider all cases for $k$:

If $k=0$, then

$$
\begin{align}
\text{Cov}(Y_{t},Y_{t-k}) & = \frac{1}{4} [\sigma^{2}_{e} + 0 + 0 + \sigma^{2}_{e}] \\
 \text{Var}(Y_{t}) & = \frac{1}{2}\sigma^{2}_{e}
\end{align}
$$

If $k=1$, then

$$
\text{Cov}(Y_{t},Y_{t-k})  = \frac{1}{4}[0 + 0 + \sigma^{2}_{e} + 0] = \frac{1}{4}\sigma^{2}_{e}
$$

Otherwise, if $k\geq2$

$$
\text{Cov}(Y_{t},Y_{t-k})  = \frac{1}{4}[0 + 0 + 0 + 0] = 0
$$
