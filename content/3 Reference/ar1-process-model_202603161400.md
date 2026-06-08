---
publish: true
aliases:
  - AR(1) Process
created: 2026-04-09T23:07:38.994+07:00
modified: 2026-04-09T23:07:38.995+07:00
published: 2026-04-09T23:07:38.995+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $a_{t}$ : [[white-noise_202603161400|white noise]], independent of its past values of $Z_{t}$

The first-order autoregressive process (AR(1)) $Z_{t}$ is defined as

$Z_t = \phi Z_{t-1} + a_t$

Where $\phi$ is a constant

## Stationarity Condition

The AR(1) process is [[weakly-stationary_202603161400|weakly stationary]] if and only if:
$|\phi| < 1$
This is equivalent to the root of the [[ar-characteristic-equation_202603161400|characteristic equation]] $1 - \phi B = 0$ lying outside the unit circle ($|B| > 1$, because $1-\phi B = 0 \iff 1 = \phi B \iff B = \frac{1}{\phi}$).

## Autocorrelation Function

For a stationary AR(1) process, the [[autocovariance-and-autocorrelation_202603161400|autocorrelation function (ACF)]] is:
$\rho_k = \phi^k, \quad k \geq 0$
The ACF decays exponentially towards zero.

## Example: Explosive AR(1) Process

An AR(1) process $Z_t = \phi Z_{t-1} + a_t$ where $|\phi| > 1$.
In this case, the weights of past shocks do not decay but grow exponentially. The variance increases rapidly with time, and the series "explodes," moving away from its starting value. This is a non-stationary process.

## Example: Mean of an AR(1) Process

Let $a_{t}$ be white noise, and let $\{ Y_{t} \}$ be an AR(1) process

$$
\begin{align}
E[Y_{t}]  & = E[a_{t} + \phi Y_{t-1}]
\end{align}
$$

## Example: Variance of an AR(1) Process

Let $\{ Y_{t} \}$ be an AR(1) process defined as:
$Y_{t} = 0.2 + 0.4 Y_{t-1} + a_{t}$

Where $a_{t}$ is [[white-noise_202603161400|white noise]] process with mean 0 and variance 1.

By definition, since $a_{t}$ is independent of its past $Y_{t}$ values, then $\text{Cov}(Y_{t},a_{t}) = 0$ for all $t$.

An AR(1) process is said to be weakly stationary, if $|\phi| < 1$. Therefore $Y_{t}$ is weakly stationary. Consequently, $E{Y_{t}}=\mu$ and $\text{Var}(Y_{t}) = \sigma^{2}$ is constant for all $t$.

Its variance is:

$$
\begin{align}
\text{Var}(Y_{t}) & = \text{Var}(0.2 + 0.4Y_{t-1} + a_{t}) \\
 & = \text{Var}(0.4Y_{t-1}) + \text{Var}(a_{t}) + 2\text{Cov}(0.4Y_{t-1},a_{t}) \\
\sigma^{2} & = 0.16\sigma^{2} + 1 \\
0.84 \sigma^{2} & = 1 \\
\sigma^{2} & = \frac{1}{0.84} = 1.19
\end{align}
$$
