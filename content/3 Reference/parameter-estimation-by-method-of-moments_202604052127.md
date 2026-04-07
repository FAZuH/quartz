---
publish: true
aliases:
  - Parameter Estimation by Method of Moments
created: 2026-04-05T21:27:33.242+07:00
modified: 2026-04-05T21:31:48.416+07:00
published: 2026-04-05T21:31:48.416+07:00
cssclasses: ""
creation-time: 2026-04-05 21:27
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Procedure

Parameter Estimation by Method of Moments equates sample moments with theoretical moments to solve for unknown model parameters.

## AR(1)

For AR(1), the theoretical relationship is $\rho_1 = \phi_1$.

Replacing $\rho_1$ with sample autocorrelation $r_1$:

$$\hat{\phi}_1 = r_1$$

## AR(2)

For AR(2), the Yule-Walker equations relate parameters to autocorrelations:

$$\rho_1 = \phi_1 + \rho_1 \phi_2$$
$$\rho_2 = \rho_1 \phi_1 + \phi_2$$

Replacing $\rho_1, \rho_2$ with $r_1, r_2$:

$$r_1 = \hat{\phi}_1 + r_1 \hat{\phi}_2$$
$$r_2 = r_1 \hat{\phi}_1 + \hat{\phi}_2$$

The estimators are:

$$\hat{\phi}_1 = \frac{r_1(1 - r_2)}{1 - r_1^2}$$
$$\hat{\phi}_2 = \frac{r_2 - r_1^2}{1 - r_1^2}$$

## AR(p)

For AR(p), substitute $\rho_k$ with $r_k$ in the Yule-Walker equations:

$$
\begin{pmatrix}
r_1 \\
r_2 \\
\vdots \\
r_p
\end{pmatrix}
=
\begin{pmatrix}
1 & r_1 & \cdots & r_{p-1} \\
r_1 & 1 & \cdots & r_{p-2} \\
\vdots & \vdots & \ddots & \vdots \\
r_{p-1} & r_{p-2} & \cdots & 1
\end{pmatrix}
\begin{pmatrix}
\hat{\phi}_1 \\
\hat{\phi}_2 \\
\vdots \\
\hat{\phi}_p
\end{pmatrix}
$$

Solve this linear system to obtain $\hat{\phi}_1, \ldots, \hat{\phi}_p$.

> [!NOTE] Yule-Walker Estimator
> This method is also called the **Yule-Walker estimator** for AR models.

## MA(1)

For MA(1), the theoretical autocorrelation is:

$$\rho_1 = \frac{-\theta_1}{1 + \theta_1^2}$$

Setting $\rho_1 = r_1$ yields a quadratic equation in $\theta_1$. If $|r_1| < 0.5$, there are two real roots:

$$\frac{-1 \pm \sqrt{1 - 4r_1^2}}{2r_1}$$

The two roots multiply to 1, so only one satisfies the **invertibility condition** $|\theta_1| < 1$:

$$\hat{\theta}_1 = \frac{-1 + \sqrt{1 - 4r_1^2}}{2r_1}$$

> [!WARNING] Method Fails
> - If $|r_1| = 0.5$: solution is $\theta_1 = \pm 1$, not invertible
> - If $|r_1| > 0.5$: no real solution exists
>
> The method of moments is <u>unreliable for MA models</u>.

## ARMA(1,1)

For ARMA(1,1), the autocorrelation function is:

$$\rho_k = \phi_1^{k-1} \cdot \frac{(1 - \theta_1 \phi_1)(\phi_1 - \theta_1)}{1 - 2\theta_1\phi_1 + \theta_1^2}, \quad k \geq 1$$

Observe that $\rho_2 = \phi_1 \rho_1$, so:

$$\hat{\phi}_1 = \frac{r_2}{r_1}$$

Then use $\rho_1$ with $r_1$ and solve the resulting quadratic for $\hat{\theta}_1$, keeping only the invertible solution.

## Related

- [[3 Reference/method-of-moments_202604052126\|Method of Moments]]
- [[3 Reference/noise-variance-estimation_202604052127\|Noise Variance Estimation]]