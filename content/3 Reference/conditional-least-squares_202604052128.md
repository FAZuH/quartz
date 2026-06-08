---
publish: true
aliases:
  - Conditional Least Squares
created: 2026-04-09T23:07:39.061+07:00
modified: 2026-06-02T10:11:39.258+07:00
published: 2026-06-02T10:11:39.258+07:00
creation-time: 2026-04-05 21:28
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

Conditional Least Squares treats the time series model as a **regression problem**. The key idea: condition on the first few observations (treat them as given), then minimize the sum of squared one-step-ahead prediction errors.

### The Conditional Sum of Squares $S_c$

For a model with parameters $\boldsymbol{\theta}$, the **prediction error** at time $t$ given past data is $e_t(\boldsymbol{\theta})$. The **conditional sum of squares** aggregates these errors over $n$ observations:

$S_c(\boldsymbol{\theta}) = \sum_{t=1+p}^{n} e_t(\boldsymbol{\theta})^2$

where $p$ is the number of initial observations conditioned on. Minimizing $S_c$ with respect to $\boldsymbol{\theta}$ gives the CLS estimates. This is exactly analogous to ordinary least squares in regression — the core operation is $\frac{\partial S_c}{\partial \theta_j} = 0$ (set the derivative to zero to find the parameter values that minimize prediction error).

## AR(1)

**Model:** $Y_t = \mu + \phi Y_{t-1} + e_t$, where $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameters:** $\mu$ (mean level), $\phi$ (autoregressive coefficient).

Condition on $Y_1$ (treat it as given) and predict $Y_2, Y_3, \ldots, Y_n$:

$e_t = Y_t - \mu - \phi Y_{t-1}, \quad t = 2, 3, \ldots, n$

The conditional sum of squares aggregates these $(n-1)$ prediction errors:

$S_c(\mu, \phi) = \sum_{t=2}^{n} (Y_t - \mu - \phi Y_{t-1})^2$

Our goal: find $\hat{\mu}, \hat{\phi}$ that make $S_c$ as small as possible. Do this by taking partial derivatives and setting them to zero (first-order condition for a minimum).

### Step 1: Estimate $\mu$

Take the derivative of $S_c$ with respect to $\mu$:

$\frac{\partial S_c}{\partial \mu} = -2\sum_{t=2}^{n} (Y_t - \mu - \phi Y_{t-1}) = 0$

This says: the sum of prediction errors must equal zero — a standard property of OLS residuals. Solving:

$$$\begin{aligned}
\sum_{t=2}^{n} (Y_t - \mu - \phi Y_{t-1}) &= 0 \\[6pt]
\sum_{t=2}^{n} Y_t - (n-1)\mu - \phi\sum_{t=2}^{n} Y_{t-1} &= 0 \\[6pt]
\hat{\mu} &= \frac{1}{n-1}\left(\sum_{t=2}^{n} Y_t - \phi\sum_{t=2}^{n} Y_{t-1}\right)
\end{aligned}$$

For a stationary AR(1) with large $n$, the two sums are approximately equal (both approximate $(n-1)\mu_Y$), so:

$$\hat{\mu} \approx \frac{1}{n}\sum_{t=1}^{n} Y_t = \bar{Y}$$

### Step 2: Estimate $\phi$

Now "plug in" $\hat{\mu} = \bar{Y}$ into $S_c$ and take the derivative with respect to $\phi$:

$$\begin{aligned}
S_c(\phi) &= \sum_{t=2}^{n} \big((Y_t - \bar{Y}) - \phi(Y_{t-1} - \bar{Y})\big)^2 \\[6pt]
\frac{\partial S_c}{\partial \phi} &= -2\sum_{t=2}^{n} \big((Y_t - \bar{Y}) - \phi(Y_{t-1} - \bar{Y})\big)(Y_{t-1} - \bar{Y}) = 0
\end{aligned}$$

This is a single linear equation in $\phi$. Solve:

$$\begin{aligned}
\sum_{t=2}^{n} (Y_t - \bar{Y})(Y_{t-1} - \bar{Y}) - \phi\sum_{t=2}^{n} (Y_{t-1} - \bar{Y})^2 &= 0 \\[6pt]
\hat{\phi} &= \frac{\sum_{t=2}^{n} (Y_t - \bar{Y})(Y_{t-1} - \bar{Y})}{\sum_{t=2}^{n} (Y_{t-1} - \bar{Y})^2}
\end{aligned}$$

> [!NOTE] Comparison with sample ACF $r_1$
> The numerator matches $\sum (Y_t - \bar{Y})(Y_{t-1} - \bar{Y})$ used in $r_1$. The denominator differs slightly — it omits the last term $(Y_n - \bar{Y})^2$ that $r_1$ would include. For stationary processes with large $n$, this difference is negligible: $\hat{\phi}_{\text{CLS}} \approx r_1$.

## AR(2)

**Model:** $Y_t = \mu + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + e_t$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameters:** $\mu, \phi_1, \phi_2$.

Condition on $Y_1, Y_2$ (treat as given). The one-step-ahead prediction error for $t = 3, \ldots, n$:

$$e_t = Y_t - \mu - \phi_1(Y_{t-1} - \mu) - \phi_2(Y_{t-2} - \mu)$$

The conditional sum of squares:

$$S_c(\mu, \phi_1, \phi_2) = \sum_{t=3}^{n} \big(Y_t - \mu - \phi_1(Y_{t-1} - \mu) - \phi_2(Y_{t-2} - \mu)\big)^2$$

Set $\hat{\mu} \approx \bar{Y}$ (by the same logic as AR(1)), and center the data: $Y_t^* = Y_t - \bar{Y}$:

$$S_c(\phi_1, \phi_2) = \sum_{t=3}^{n} \big(Y_t^* - \phi_1 Y_{t-1}^* - \phi_2 Y_{t-2}^*\big)^2$$

To minimize, take partial derivatives with respect to $\phi_1$ and $\phi_2$ and set to zero:

$$\begin{aligned}
\frac{\partial S_c}{\partial \phi_1} &= -2\sum_{t=3}^{n} \big(Y_t^* - \phi_1 Y_{t-1}^* - \phi_2 Y_{t-2}^*\big)Y_{t-1}^* = 0 \\[6pt]
\frac{\partial S_c}{\partial \phi_2} &= -2\sum_{t=3}^{n} \big(Y_t^* - \phi_1 Y_{t-1}^* - \phi_2 Y_{t-2}^*\big)Y_{t-2}^* = 0
\end{aligned}$$

Divide both equations by $\sum_{t=1}^{n} (Y_t^*)^2$ and recognize the sample autocorrelations $r_k = \frac{\sum Y_t^* Y_{t-k}^*}{\sum (Y_t^*)^2}$:

$$\begin{aligned}
r_1 - \phi_1 - \phi_2 r_1 &= 0 \\
r_2 - \phi_1 r_1 - \phi_2 &= 0
\end{aligned}$$

This is the **sample Yule-Walker system** — exactly the same as method of moments. Solving gives the same $\hat{\phi}_1, \hat{\phi}_2$ as the Yule-Walker estimator. For large $n$, CLS and method of moments are equivalent for stationary AR models.

## AR(p)

Minimizing $S_c$ yields the same system as the **sample Yule-Walker equations**.

> [!TIP] Connection
> For stationary AR(p), conditional least squares and method of moments (Yule-Walker) produce nearly identical estimates for large samples.

## MA(1)

**Model:** $Y_t = e_t - \theta e_{t-1}$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameter:** $\theta$ (moving average coefficient; $\mu = 0$ assumed for simplicity).

Unlike AR models, MA models cannot be written as a direct regression — $Y_t$ depends on unobserved past errors $e_{t-1}$, not past observed $Y_{t-1}$. However, under **invertibility** ($|\theta| < 1$), the MA(1) has an infinite AR representation:

$$Y_t = -\sum_{j=1}^{\infty} \theta^{j} Y_{t-j} + e_t$$

This expresses $Y_t$ as a linear combination of past observable $Y_{t-j}$ plus the current error. In practice, this infinite sum is truncated to the available data length, $t-1$ terms:

$$e_t(\theta) = Y_t + \theta Y_{t-1} + \theta^2 Y_{t-2} + \cdots + \theta^{t-1} Y_1$$

The conditional sum of squares is then:

$$S_c(\theta) = \sum_{t=2}^{n} \big[e_t(\theta)\big]^2 = \sum_{t=2}^{n} \big(Y_t + \theta Y_{t-1} + \theta^2 Y_{t-2} + \cdots + \theta^{t-1} Y_1\big)^2$$

Notice $\theta$ appears inside the squared sum raised to many powers — this is **nonlinear in $\theta$**. Setting $\frac{\partial S_c}{\partial \theta} = 0$ yields a polynomial equation with no closed-form solution. Numerical optimization (e.g., Gauss-Newton, BFGS) is required.

## MA(2)

**Model:** $Y_t = e_t - \theta_1 e_{t-1} - \theta_2 e_{t-2}$, with $e_t \sim \text{WN}(0, \sigma_e^2)$.

**Unknown parameters:** $\theta_1, \theta_2$ (assuming $\mu = 0$).

As with MA(1), the invertible AR($\infty$) representation expresses $Y_t$ in terms of past observables:

$$Y_t = -\sum_{j=1}^{\infty} \pi_j Y_{t-j} + e_t$$

where the $\pi$-weights depend recursively on $\theta_1, \theta_2$:

$$\pi_1 = -\theta_1, \qquad \pi_2 = -\theta_2 - \theta_1\pi_1, \qquad \pi_j = -\theta_1\pi_{j-1} - \theta_2\pi_{j-2} \;\text{ for } j \geq 3$$

Truncating to the available $t-1$ observations, the prediction error at time $t$:

$$e_t(\theta_1, \theta_2) = Y_t + \sum_{j=1}^{t-1} \pi_j(\theta_1, \theta_2)\,Y_{t-j}$$

The conditional sum of squares:

$$S_c(\theta_1, \theta_2) = \sum_{t=3}^{n} \left(Y_t + \sum_{j=1}^{t-1} \pi_j(\theta_1, \theta_2)\,Y_{t-j}\right)^2$$

Since $\pi_j$ is a nonlinear function of $\theta_1, \theta_2$, minimizing $S_c$ requires numerical optimization (e.g., Gauss-Newton).

## Mixed Models (ARMA)

For ARMA(p,q), the model has both autoregressive and moving average components:

$$Y_t = \mu + \sum_{i=1}^{p} \phi_i(Y_{t-i} - \mu) + e_t - \sum_{j=1}^{q} \theta_j e_{t-j}$$

Rearranging to express the prediction error:

$$e_t = (Y_t - \mu) - \sum_{i=1}^{p} \phi_i(Y_{t-i} - \mu) + \sum_{j=1}^{q} \theta_j e_{t-j}$$

Unlike pure AR or pure MA, computing $e_t$ now requires knowing both past $Y$'s and past $e$'s. The past $e$'s are not directly observed — they must be computed **recursively** given candidate parameter values.

### Model Fitting Procedure

1. **Set initial values:** Assume $e_{p+1-q} = e_{p-q} = \cdots = e_0 = 0$ (the pre-sample errors are zeros).
2. **Compute errors recursively:** For $t = p+1, \ldots, n$:
   $$e_t = (Y_t - \hat{\mu}) - \sum_{i=1}^{p} \hat{\phi}_i(Y_{t-i} - \hat{\mu}) + \sum_{j=1}^{q} \hat{\theta}_j e_{t-j}$$
   At each $t$, the past errors $e_{t-j}$ are already computed from previous steps.
3. **Minimize:** $S_c = \sum_{t=p+1}^{n} e_t^2$ using nonlinear optimization over $(\mu, \phi_1, \ldots, \phi_p, \theta_1, \ldots, \theta_q)$.

This recursive error computation is why CLS for ARMA requires numerical methods — $S_c$ is not a simple quadratic form in the parameters.

## Related

- [[conditional-sum-of-squares-function_202604052127|Conditional Sum of Squares Function]]
- [[least-square-method_202604052128|Least Square Method]]
- [[unconditional-least-squares_202604052128|Unconditional Least Squares]]
$$$
