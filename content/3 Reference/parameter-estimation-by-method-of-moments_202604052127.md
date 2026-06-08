---
publish: true
aliases:
  - Parameter Estimation by Method of Moments
created: 2026-04-09T23:07:39.541+07:00
modified: 2026-06-02T09:57:55.165+07:00
published: 2026-06-02T09:57:55.165+07:00
creation-time: 2026-04-05 21:27
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

Parameter Estimation by Method of Moments equates **sample moments** with **theoretical moments** to solve for unknown model parameters.

> **Sample moment:** Computed from the observed data (e.g., sample autocorrelation $r_k$).
> **Theoretical moment:** Expressed in terms of model parameters (e.g., $\rho_k$ as a function of $\phi_1, \ldots, \phi_p$).

By matching $r_k = \rho_k(\boldsymbol{\theta})$ for $k = 1, \ldots, K$ (where $K$ equals the number of unknown parameters), we form a system of equations and solve for $\hat{\boldsymbol{\theta}}$.

## AR(1)

**Model:** $Y_t = \mu + \phi Y_{t-1} + e_t$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameter:** $\phi$ (autoregressive coefficient).

**Theoretical moment:** For AR(1), the autocorrelation at lag 1 is $\rho_1 = \phi$.

**Sample moment:** Compute $r_1 = \frac{\sum_{t=2}^{n} (Y_t - \bar{Y})(Y_{t-1} - \bar{Y})}{\sum_{t=1}^{n} (Y_t - \bar{Y})^2}$ from the data.

Equating the two moments:

$\hat{\phi} = r_1$

This is the simplest case — one equation, one unknown, immediate solution.

## AR(2)

**Model:** $Y_t = \mu + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + e_t$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameters:** $\phi_1, \phi_2$ (two equations needed).

**Theoretical moments — Yule-Walker equations:** Multiply the model equation by $Y_{t-1}$ and $Y_{t-2}$, take expectations, and divide by $\gamma_0$:

$$$\begin{aligned}
\rho_1 &= \phi_1 + \phi_2 \rho_1 \\
\rho_2 &= \phi_1 \rho_1 + \phi_2
\end{aligned}$$

These express the theoretical autocorrelations ($\rho_1, \rho_2$) as functions of the unknown parameters ($\phi_1, \phi_2$).

**Sample moments:** Compute $r_1, r_2$ from the data. Substitute them for $\rho_1, \rho_2$:

$$\begin{aligned}
r_1 &= \hat{\phi}_1 + r_1 \hat{\phi}_2 \\
r_2 &= r_1 \hat{\phi}_1 + \hat{\phi}_2
\end{aligned}$$

**Solve the $2 \times 2$ system:** From the first equation: $\hat{\phi}_1 = r_1(1 - \hat{\phi}_2)$. Substitute into the second:

$$r_2 = r_1[r_1(1 - \hat{\phi}_2)] + \hat{\phi}_2 = r_1^2(1 - \hat{\phi}_2) + \hat{\phi}_2$$

$$r_2 = r_1^2 + \hat{\phi}_2(1 - r_1^2) \quad\Rightarrow\quad \hat{\phi}_2 = \frac{r_2 - r_1^2}{1 - r_1^2}$$

$$\begin{aligned}
\hat{\phi}_1 &= \frac{r_1(1 - r_2)}{1 - r_1^2} \\[6pt]
\hat{\phi}_2 &= \frac{r_2 - r_1^2}{1 - r_1^2}
\end{aligned}$$

**Numerical example:** For $r_1 = 0.7, r_2 = 0.4$:

$$\begin{aligned}
\hat{\phi}_1 &= \frac{0.7(1 - 0.4)}{1 - 0.7^2} = \frac{0.42}{0.51} \approx 0.824 \\[6pt]
\hat{\phi}_2 &= \frac{0.4 - 0.49}{1 - 0.49} = \frac{-0.09}{0.51} \approx -0.176
\end{aligned}$$

## AR(p)

**Model:** $Y_t = \mu + \phi_1 Y_{t-1} + \cdots + \phi_p Y_{t-p} + e_t$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameters:** $\phi_1, \ldots, \phi_p$ ($p$ equations needed — use $r_1, \ldots, r_p$).

Multiplying the model by $Y_{t-k}$ $(k = 1, \ldots, p)$, taking expectations, and dividing by $\gamma_0$ yields the **Yule-Walker equations**:

$$\rho_k = \phi_1 \rho_{k-1} + \phi_2 \rho_{k-2} + \cdots + \phi_p \rho_{k-p}, \quad k = 1, 2, \ldots, p$$

Substituting sample $r_k$ for theoretical $\rho_k$ gives the **sample Yule-Walker system**:

$$$

\begin{pmatrix}
r\_1 \\
r\_2 \\
\vdots \\
r\_p
\end{pmatrix}
=============

\begin{pmatrix}
1 & r\_1 & \cdots & r\_{p-1} \\
r\_1 & 1 & \cdots & r\_{p-2} \\
\vdots & \vdots & \ddots & \vdots \\
r\_{p-1} & r\_{p-2} & \cdots & 1
\end{pmatrix}
\begin{pmatrix}
\hat{\phi}\_1 \\
\hat{\phi}\_2 \\
\vdots \\
\hat{\phi}\_p
\end{pmatrix}

$$$

Solve this linear system to obtain $\hat{\phi}_1, \ldots, \hat{\phi}_p$.

> [!NOTE] Yule-Walker Estimator
> This method is also called the **Yule-Walker estimator** for AR models.

### AR(3) Worked Example

**Model:** $Y_t = \mu + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + \phi_3 Y_{t-3} + e_t$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameters:** $\phi_1, \phi_2, \phi_3$ — need 3 moment equations ($r_1, r_2, r_3$).

The Yule-Walker equations for $k = 1, 2, 3$:

$$\begin{aligned}
\rho_1 &= \phi_1 + \phi_2 \rho_1 + \phi_3 \rho_2 \\
\rho_2 &= \phi_1 \rho_1 + \phi_2 + \phi_3 \rho_1 \\
\rho_3 &= \phi_1 \rho_2 + \phi_2 \rho_1 + \phi_3
\end{aligned}$$

Substituting $r_k$ for $\rho_k$:

$$\begin{bmatrix}
1 & r_1 & r_2 \\
r_1 & 1 & r_1 \\
r_2 & r_1 & 1
\end{bmatrix}
\begin{bmatrix}
\hat{\phi}_1 \\ \hat{\phi}_2 \\ \hat{\phi}_3
\end{bmatrix}
=
\begin{bmatrix}
r_1 \\ r_2 \\ r_3
\end{bmatrix}$$

**Numerical example:** $r_1 = 0.7, r_2 = 0.5, r_3 = 0.3$:

$$\begin{bmatrix}
1 & 0.7 & 0.5 \\
0.7 & 1 & 0.7 \\
0.5 & 0.7 & 1
\end{bmatrix}
\begin{bmatrix}
\hat{\phi}_1 \\ \hat{\phi}_2 \\ \hat{\phi}_3
\end{bmatrix}
=
\begin{bmatrix}
0.7 \\ 0.5 \\ 0.3
\end{bmatrix}$$

Solving (e.g., by Gaussian elimination): $\hat{\phi}_1 \approx 0.595, \hat{\phi}_2 \approx 0.058, \hat{\phi}_3 \approx -0.038$.

## MA(1)

**Model:** $Y_t = e_t - \theta e_{t-1}$, with $e_t \sim \text{WN}(0, \sigma_e^2)$, $\mu = 0$ for simplicity.

**Unknown parameter:** $\theta$ (one equation needed).

**Theoretical moment:** For MA(1), the autocorrelation at lag 1 is:

$$\rho_1 = \frac{-\theta}{1 + \theta^2}$$

(This comes from $\gamma_0 = \sigma_e^2(1 + \theta^2)$ and $\gamma_1 = -\theta\sigma_e^2$.)

Equating $\rho_1 = r_1$ gives a quadratic in $\theta$:

$$r_1(1 + \theta^2) = -\theta \quad\Rightarrow\quad r_1\theta^2 + \theta + r_1 = 0$$

If $|r_1| < 0.5$, there are two real roots:

$$\hat{\theta} = \frac{-1 \pm \sqrt{1 - 4r_1^2}}{2r_1}$$

The product of the two roots is 1, so only one satisfies the **invertibility condition** $|\theta| < 1$. Choose:

$$\hat{\theta}_1 = \frac{-1 + \sqrt{1 - 4r_1^2}}{2r_1}$$

> [!WARNING] Method Fails
> - If $|r_1| = 0.5$: solution is $\theta_1 = \pm 1$, not invertible
> - If $|r_1| > 0.5$: no real solution exists
>
> The method of moments is <u>unreliable for MA models</u>.

### MA(2)

**Model:** $Y_t = e_t - \theta_1 e_{t-1} - \theta_2 e_{t-2}$, with $e_t \sim \text{WN}(0, \sigma_e^2)$, $\mu = 0$.

**Unknown parameters:** $\theta_1, \theta_2$ — need 2 moment equations ($r_1, r_2$).

**Theoretical moments:** The autocovariances of MA(2) are:

$$\begin{aligned}
\gamma_0 &= \sigma_e^2(1 + \theta_1^2 + \theta_2^2) \\
\gamma_1 &= \sigma_e^2(-\theta_1 + \theta_1\theta_2) = \sigma_e^2\,\theta_1(\theta_2 - 1) \\
\gamma_2 &= \sigma_e^2(-\theta_2)
\end{aligned}$$

Dividing $\gamma_1, \gamma_2$ by $\gamma_0$ gives the theoretical autocorrelations:

$$\rho_1 = \frac{-\theta_1(1 - \theta_2)}{1 + \theta_1^2 + \theta_2^2}, \qquad \rho_2 = \frac{-\theta_2}{1 + \theta_1^2 + \theta_2^2}$$

Setting $\rho_1 = r_1, \rho_2 = r_2$ yields two nonlinear equations. From $\rho_2$, isolate $\theta_2$:

$$\theta_2 = \frac{-\rho_2(1 + \theta_1^2)}{1 + \rho_2}$$

Substitute this expression for $\theta_2$ into $\rho_1$ and solve numerically for $\theta_1$. Accept only the pair satisfying the invertibility conditions: $|\theta_2| < 1$, $|\theta_1 \pm \theta_2| < 1$.

> [!WARNING] MLE Preferred for MA
> Method of moments for MA(q) with $q \geq 2$ requires solving nonlinear systems. MLE is strongly preferred.

## ARMA(1,1)

**Model:** $Y_t = \mu + \phi Y_{t-1} + e_t - \theta e_{t-1}$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameters:** $\phi, \theta$ — need 2 moment equations ($r_1, r_2$).

**Theoretical moments:** The autocorrelation function of ARMA(1,1) for $k \geq 1$:

$$\rho_k = \phi_1^{k-1} \cdot \frac{(1 - \theta_1 \phi_1)(\phi_1 - \theta_1)}{1 - 2\theta_1\phi_1 + \theta_1^2}, \quad k \geq 1$$

Observe that $\rho_2 = \phi_1 \rho_1$, so:

$$\hat{\phi}_1 = \frac{r_2}{r_1}$$

Then use $\rho_1$ with $r_1$ and solve the resulting quadratic for $\hat{\theta}_1$, keeping only the invertible solution.

**Numerical example:** $r_1 = 0.5, r_2 = 0.3$:

$$\hat{\phi}_1 = \frac{r_2}{r_1} = \frac{0.3}{0.5} = 0.6$$

Now use the $\rho_1$ formula with $\phi_1 = 0.6$:

$$\rho_1 = \frac{(1 - 0.6\theta_1)(0.6 - \theta_1)}{1 - 1.2\theta_1 + \theta_1^2} = 0.5$$

Multiplying both sides and rearranging:

$$0.6 - \theta_1 - 0.36\theta_1 + 0.6\theta_1^2 = 0.5(1 - 1.2\theta_1 + \theta_1^2)$$
$$0.6 - 1.36\theta_1 + 0.6\theta_1^2 = 0.5 - 0.6\theta_1 + 0.5\theta_1^2$$
$$0.1\theta_1^2 - 0.76\theta_1 + 0.1 = 0$$

Using quadratic formula: $\theta_1 = \frac{0.76 \pm \sqrt{0.5776 - 0.04}}{0.2} = \frac{0.76 \pm 0.7332}{0.2}$

Roots: $\theta_1 \approx 7.466$ or $\theta_1 \approx 0.134$. The invertible solution is $\hat{\theta}_1 \approx 0.134$.

## Related

- [[method-of-moments_202604052126|Method of Moments]]
- [[noise-variance-estimation_202604052127|Noise Variance Estimation]]
$$$
