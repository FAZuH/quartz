---
publish: true
created: 2026-03-25T15:22:40.604+07:00
modified: 2026-03-25T15:22:40.604+07:00
published: 2026-03-25T15:22:40.604+07:00
creation-time: 2025-03-27 17:07
status: in progress
tags:
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

Invertibility addresses whether a moving average (MA) or autoregressive moving average (ARMA) process can be **reexpressed as an infinite-order autoregressive (AR) process**.

This property ensures a unique mapping between the process and its autocorrelation function, critical for parameter estimation from observed data.

## Concept of Invertibility

For an MA($q$) process:

$$ Y\_t = e\_t - \theta\_1 e\_{t-1} - \theta\_2 e\_{t-2} - \cdots - \theta\_q e\_{t-q} $$

invertibility allows rewriting it as:

$$ Y\_t = \pi\_1 Y\_{t-1} + \pi\_2 Y\_{t-2} + \pi\_3 Y\_{t-3} + \cdots + e\_t $$

with coefficients $\pi\_j$. This is possible when the MA characteristic polynomial:

$$ \theta(x) = 1 - \theta\_1 x - \theta\_2 x^2 - \cdots - \theta\_q x^q $$

has roots exceeding 1 in modulus ($|\theta|<1$ for MA(1)).

Invertibility resolves nonuniqueness in MA models, where different $\theta$ values yield the same autocorrelation function.

### MA(1) Example

Consider $Y\_t = e\_t - \theta e\_{t-1}$. Rewrite as:

$$ e\_t = Y\_t + \theta e\_{t-1} $$

Substitute recursively:

$$ e\_t = Y\_t + \theta (Y\_{t-1} + \theta e\_{t-2}) = Y\_t + \theta Y\_{t-1} + \theta^2 e\_{t-2} $$

Continuing infinitely:

$$ e\_t = Y\_t + \theta Y\_{t-1} + \theta^2 Y\_{t-2} + \theta^3 Y\_{t-3} + \cdots $$

Thus:

$$ Y\_t = -\theta Y\_{t-1} - \theta^2 Y\_{t-2} - \theta^3 Y\_{t-3} - \cdots + e\_t $$

Notice that $Y\_t$ converges if and only if $|\theta| < 1$.

And if $Y\_t$ converges, then $Y\_t$ is invertible.

For $|\theta| \geq 1$, the series diverges, rendering it non-invertible.

### Nonuniqueness Issue

For MA(1), $\rho\_1 = -\theta / (1 + \theta^2)$. Replacing $\theta$ with $1/\theta$ yields the same $\rho\_1$.

Example:

$\theta = 2$ and $\theta = 1/2$ both give $\rho\_1 = -0.4$,
but only $\theta = 0.5$ (root $-2$) is invertible ($|0.5| < 1$),
while $\theta = 2$ (root $-0.5$) is not ($|2| > 1$).

### General MA($q$) and ARMA($p$,$q$)

Invertibility requires all roots of the MA characteristic equation $\theta(x) = 0$ to have modulus greater than 1.

For ARMA($p$,$q$), both stationarity (AR roots > 1 in modulus) and invertibility (MA roots > 1 in modulus) are required for a well-defined model.

## Implications

Invertibility ensures a unique, physically sensible MA representation, restricting attention to models where past observations can predict the noise term without infinite amplification.

## Python Example

```python
import numpy as np
import matplotlib.pyplot as plt

# Simulate MA(1) processes with invertible and non-invertible theta
np.random.seed(42)
n = 100
e_t = np.random.normal(0, 1, n + 1)  # White noise
theta_inv = 0.5   # Invertible: |theta| < 1
theta_non = 2.0   # Non-invertible: |theta| > 1

# Generate MA(1) series
Y_inv = np.zeros(n)
Y_non = np.zeros(n)
for t in range(n):
    Y_inv[t] = e_t[t + 1] - theta_inv * e_t[t]
    Y_non[t] = e_t[t + 1] - theta_non * e_t[t]

# Attempt to recover e_t (invert the process)
e_rec_inv = np.zeros(n)
e_rec_non = np.zeros(n)
for t in range(1, n):
    e_rec_inv[t] = Y_inv[t] + theta_inv * e_rec_inv[t - 1]
    e_rec_non[t] = Y_non[t] + theta_non * e_rec_non[t - 1]

# Plot original vs recovered noise
plt.figure(figsize=(12, 6))
plt.subplot(2, 1, 1)
plt.plot(e_t[1:], label='True $e_t$', alpha=0.5)
plt.plot(e_rec_inv, label='Recovered $e_t$ (Invertible, $\\theta=0.5$)', linestyle='--')
plt.title('Invertible MA(1)')
plt.legend()
plt.subplot(2, 1, 2)
plt.plot(e_t[1:], label='True $e_t$', alpha=0.5)
plt.plot(e_rec_non, label='Recovered $e_t$ (Non-invertible, $\\theta=2.0$)', linestyle='--')
plt.title('Non-invertible MA(1)')
plt.legend()
plt.tight_layout()
plt.show()

# Check autocorrelation
from statsmodels.tsa.stattools import acf
acf_inv = acf(Y_inv, nlags=5, fft=False)
acf_non = acf(Y_non, nlags=5, fft=False)
print(f"ACF (Invertible, theta={theta_inv}): {acf_inv[:3]}")
print(f"ACF (Non-invertible, theta={theta_non}): {acf_non[:3]}")
```

### Explanation

This code simulates two MA(1) processes: one with $\theta = 0.5$ (invertible) and one with $\theta = 2.0$ (non-invertible). It attempts to recover the white noise $e\_t$ using the infinite AR representation. For $\theta = 0.5$, the recovered $e\_t$ closely matches the true noise, while for $\theta = 2.0$, it diverges due to non-invertibility. The autocorrelation functions (ACF) are computed, showing both processes have the same $\rho\_1 \approx -0.4$, illustrating nonuniqueness without invertibility constraints.

Output plots demonstrate the stability of the invertible case versus the explosive behavior of the non-invertible case.
