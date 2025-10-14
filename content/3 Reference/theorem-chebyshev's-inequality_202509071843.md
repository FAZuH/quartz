---
{"publish":true,"aliases":["Chebyshev's Inequality"],"created":"2025-10-14T04:15:27.050+07:00","modified":"2025-10-14T04:15:27.050+07:00","published":"2025-10-14T04:15:27.050+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-07 18:43","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
---


## Theorem

Let:
- $X$ [[3 Reference/Def-random-variable\|Random Variable]]
- $\sigma^2\in \mathbb{R}$ [[3 Reference/Def-variance\|Variance]] of $X$
- $\mu=E(X)$ (by [[3 Reference/theorem-existence-of-lower-order-moments_202509071843\|Existence of Lower Order Moments]], $\sigma^2\in \mathbb{R}$ implies that $E(X)$ exists)

Then, for every $k > 0$
$$
\begin{align}
P(|X - \mu| \geq k\sigma) & \leq \frac{1}{k^2} \\
P(|X - \mu| < k\sigma) & \geq 1 - \frac{1}{k^2}
\end{align}
$$