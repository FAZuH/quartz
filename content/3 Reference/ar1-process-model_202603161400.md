---
publish: true
aliases:
  - AR(1) Process
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-30T08:19:52.057+07:00
published: 2026-03-30T08:19:52.057+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $a\_{t}$ : [[white-noise_202603161400|white noise]], independent of its past values of $Z\_{t}$

The first-order autoregressive process (AR(1)) $Z\_{t}$ is defined as

$$Z\_t = \phi Z\_{t-1} + a\_t$$

Where $\phi$ is a constant

## Stationarity Condition

The AR(1) process is [[weakly-stationary_202603161400|weakly stationary]] if and only if:
$$|\phi| < 1$$
This is equivalent to the root of the [[ar-characteristic-equation_202603161400|characteristic equation]] $1 - \phi B = 0$ lying outside the unit circle ($|B| > 1$, because $1-\phi B = 0 \iff 1 = \phi B \iff B = \frac{1}{\phi}$).

## Autocorrelation Function

For a stationary AR(1) process, the [[autocovariance-and-autocorrelation_202603161400|autocorrelation function (ACF)]] is:
$$\rho\_k = \phi^k, \quad k \geq 0$$
The ACF decays exponentially towards zero.

## Example: Explosive AR(1) Process

An AR(1) process $Z\_t = \phi Z\_{t-1} + a\_t$ where $|\phi| > 1$.
In this case, the weights of past shocks do not decay but grow exponentially. The variance increases rapidly with time, and the series "explodes," moving away from its starting value. This is a non-stationary process.

## Example: Mean of an AR(1) Process

Let $a\_{t}$ be white noise, and let ${ Y\_{t} }$ be an AR(1) process

$$
\begin{align}
E\[Y\_{t}]  & = E\[a\_{t} + \phi Y\_{t-1}]
\end{align}
$$

## Example: Variance of an AR(1) Process

Let ${ Y\_{t} }$ be an AR(1) process defined as:
$$ Y\_{t} = 0.2 + 0.4 Y\_{t-1} + a\_{t} $$

Where $a\_{t}$ is [[white-noise_202603161400|white noise]] process with mean 0 and variance 1.

By definition, since $a\_{t}$ is independent of its past $Y\_{t}$ values, then $\text{Cov}(Y\_{t},a\_{t}) = 0$ for all $t$.

An AR(1) process is said to be weakly stationary, if $|\phi| < 1$. Therefore $Y\_{t}$ is weakly stationary. Consequently, $E{Y\_{t}}=\mu$ and $\text{Var}(Y\_{t}) = \sigma^{2}$ is constant for all $t$.

Its variance is:

$$
\begin{align}
\text{Var}(Y\_{t}) & = \text{Var}(0.2 + 0.4Y\_{t-1} + a\_{t}) \\
& = \text{Var}(0.4Y\_{t-1}) + \text{Var}(a\_{t}) + 2\text{Cov}(0.4Y\_{t-1},a\_{t}) \\
\sigma^{2} & = 0.16\sigma^{2} + 1 \\
0.84 \sigma^{2} & = 1 \\
\sigma^{2} & = \frac{1}{0.84} = 1.19
\end{align}
$$
