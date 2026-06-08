---
publish: true
aliases:
  - Maximum Likelihood Method
created: 2026-04-09T23:07:39.484+07:00
modified: 2026-06-02T09:59:16.131+07:00
published: 2026-06-02T09:59:16.131+07:00
creation-time: 2026-04-05 21:29
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## About

Maximum Likelihood Method estimates parameters by maximizing the probability of observing the given data, assuming a specific probability distribution for the process.

## Core Concept

The **likelihood function** $L(\theta | Y_1, \ldots, Y_n)$ is the joint probability density viewed as a function of parameters $\theta$, with data fixed.

$L(\theta) = f(Y_1, Y_2, \ldots, Y_n | \theta)$

The **maximum likelihood estimator (MLE)** is:

$\hat{\theta} = \arg\max_\theta L(\theta)$

Usually, maximize $\log L(\theta)$ for computational convenience.

## Advantages

- Uses <u>all information</u> in the data (not just moments)
- Asymptotically efficient (lowest variance)
- Consistent and asymptotically normal
- Works well for large samples

## Limitations

- Requires specification of full distributional form
- Computationally intensive for complex models

## Example: AR(1) Model

We estimate $(\mu, \phi, \sigma_e^2)$ for the model:

$Y_t = \mu + \phi Y_{t-1} + e_t, \qquad e_t \sim \text{NIID}(0, \sigma_e^2)$

**Unknown parameters:** $\mu$ (mean level), $\phi$ (autoregressive coefficient), $\sigma_e^2$ (noise variance).

**Goal:** Find the parameter values that make the observed data $(Y_1, Y_2, \ldots, Y_n)$ most probable. This requires writing the joint density $f(Y_1, \ldots, Y_n \mid \mu, \phi, \sigma_e^2)$ — the **likelihood function** — and maximizing it.

The full (exact) likelihood must account for ALL observations, including $Y_1$. Since $Y_1$ has no predecessor, its distribution is the stationary (marginal) distribution of the AR(1) process. The remaining $Y_2, \ldots, Y_n$ contribute through the conditional error densities.

### Step 1: Joint Density of the Errors $e_2, \ldots, e_n$

For $t \geq 2$, the error is $e_t = Y_t - \mu - \phi Y_{t-1}$. Since $e_t \sim \text{NIID}(0, \sigma_e^2)$ (Normal, Independent, Identically Distributed with mean 0, variance $\sigma_e^2$), each $e_t$ has pdf:

$f(e_t) = \frac{1}{\sqrt{2\pi\sigma_e^2}} \exp\!\left(-\frac{e_t^2}{2\sigma_e^2}\right)$

Because the errors are **independent** (the "I" in NIID), the joint density of $(e_2, \ldots, e_n)$ is the product of $(n-1)$ individual densities:

$$$\begin{aligned}
f(e_2, e_3, \ldots, e_n) &= \prod_{t=2}^n f(e_t) \\
&= \prod_{t=2}^n \frac{1}{\sqrt{2\pi\sigma_e^2}} \exp\!\left(-\frac{e_t^2}{2\sigma_e^2}\right) \\
&= \left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right)^{n-1} \prod_{t=2}^n \exp\!\left(-\frac{e_t^2}{2\sigma_e^2}\right) \\
&= \left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right)^{n-1} \exp\!\left(-\frac{1}{2\sigma_e^2}\sum_{t=2}^n e_t^2\right)
\end{aligned}$$
### Step 2: Marginal Density of $Y_1$

The first observation $Y_1$ has no predecessor, so its distribution is determined by the **stationary** (steady-state) properties of the AR(1) process. In a stationary AR(1), the mean and variance are constant over time:

$$\text{E}(Y_t) = \mu_Y = \frac{\mu}{1 - \phi}, \qquad \text{Var}(Y_t) = \sigma_Y^2$$

To find $\sigma_Y^2$, take the variance of both sides of $Y_t = \mu + \phi Y_{t-1} + e_t$. Since $Y_{t-1}$ and $e_t$ are independent and $\text{Var}(Y_t) = \text{Var}(Y_{t-1}) = \sigma_Y^2$ in stationarity:

$$\begin{aligned}
\text{Var}(Y_t) &= \phi^2 \text{Var}(Y_{t-1}) + \text{Var}(e_t) \\[6pt]
\sigma_Y^2 &= \phi^2 \sigma_Y^2 + \sigma_e^2 \\[6pt]
\sigma_Y^2(1 - \phi^2) &= \sigma_e^2 \\[6pt]
\sigma_Y^2 &= \frac{\sigma_e^2}{1 - \phi^2}
\end{aligned}$$

The stationary mean is $\mu_Y = \frac{\mu}{1 - \phi}$. Thus:
$$Y_1 \sim N\left(\frac{\mu}{1-\phi}, \frac{\sigma_e^2}{1-\phi^2}\right)$$

**Derivation:**

Substituting into the normal pdf with mean $\mu_Y = \frac{\mu}{1-\phi}$ and variance $\sigma_Y^2 = \frac{\sigma_e^2}{1-\phi^2}$:
$$$

\begin{align}
f(Y\_1) &= \frac{1}{\sqrt{2\pi \cdot \frac{\sigma\_e^2}{1-\phi^2}}} \exp\left(-\frac{\left(Y\_1 - \frac{\mu}{1-\phi}\right)^2}{2 \cdot \frac{\sigma\_e^2}{1-\phi^2}}\right) \\\[6pt]
&= \frac{\sqrt{1-\phi^2}}{\sqrt{2\pi\sigma\_e^2}} \exp\left(-\frac{(1-\phi^2)\left(Y\_1 - \frac{\mu}{1-\phi}\right)^2}{2\sigma\_e^2}\right)
\end{align}

$$$

### Step 3: Complete Likelihood via Factorization

The joint density of ALL observations $(Y_1, \ldots, Y_n)$ factorizes using the chain rule of probability:

$$f(Y_1, Y_2, \ldots, Y_n) = f(Y_1) \cdot f(Y_2, \ldots, Y_n \mid Y_1)$$

Intuition: the probability of observing the whole sequence equals the probability of the first value times the conditional probability of the rest, given the first.

Since $e_t = Y_t - \mu - \phi Y_{t-1}$ for $t \geq 2$, the distribution of $(Y_2, \ldots, Y_n)$ given $Y_1$ is equivalent to the distribution of $(e_2, \ldots, e_n)$ — because $Y_2 = \mu + \phi Y_1 + e_2$ is a deterministic function of $e_2$ given $Y_1$, and similarly for later observations. Therefore:

$$f(Y_2, \ldots, Y_n \mid Y_1) = f(e_2, \ldots, e_n)$$

The complete likelihood is the product of the marginal (Step 2) and the conditional error density (Step 1):

$$L(\mu, \phi, \sigma_e^2) = f(Y_1) \cdot f(e_2, \ldots, e_n)$$

### Step 4: Log-Likelihood

Combine the two density components from Steps 1–3. Multiply $f(Y_1)$ from Step 2 with the joint error density from Step 1:

$$\begin{aligned}
L(\mu, \phi, \sigma_e^2) &= \frac{\sqrt{1-\phi^2}}{\sqrt{2\pi\sigma_e^2}} \exp\!\left(-\frac{(1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2}{2\sigma_e^2}\right) \\
&\quad \cdot \left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right)^{n-1} \exp\!\left(-\frac{1}{2\sigma_e^2}\sum_{t=2}^{n} e_t^2\right)
\end{aligned}$$

Take the natural logarithm $\log L$ — this converts products to sums and makes differentiation tractable:

$$\begin{aligned}
\log L &= \frac{1}{2}\log(1-\phi^2) - \frac{1}{2}\log(2\pi\sigma_e^2) - \frac{(1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2}{2\sigma_e^2} \\
&\quad -\frac{n-1}{2}\log(2\pi\sigma_e^2) - \frac{1}{2\sigma_e^2}\sum_{t=2}^{n} (Y_t - \mu - \phi Y_{t-1})^2 \\[6pt]
&= -\frac{n}{2}\log(2\pi\sigma_e^2) + \frac{1}{2}\log(1-\phi^2) - \frac{S_*(\mu, \phi)}{2\sigma_e^2}
\end{aligned}$$

where the **unconditional sum of squares** is:

$$S_*(\mu, \phi) = (1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2 + \sum_{t=2}^{n} (Y_t - \mu - \phi Y_{t-1})^2$$

The first term $(1-\phi^2)(Y_1 - \frac{\mu}{1-\phi})^2$ accounts for $Y_1$'s contribution (weighted by its stationary variance). The sum is the familiar conditional sum of squares from CLS.

### Step 5: Estimate $\sigma_e^2$ (Concentrated Likelihood)

Rather than maximizing over all three parameters simultaneously, use the **concentrated likelihood** approach: first find the optimal $\sigma_e^2$ given any $(\mu, \phi)$, then maximize the resulting expression over $(\mu, \phi)$.

From Step 4, take the partial derivative of $\log L$ with respect to $\sigma_e^2$ and set it to zero (the first-order condition for a maximum):

$$\begin{aligned}
\frac{\partial \log L}{\partial \sigma_e^2} &= -\frac{n}{2\sigma_e^2} + \frac{S_*(\mu, \phi)}{2(\sigma_e^2)^2} = 0 \\[6pt]
\frac{n}{2\sigma_e^2} &= \frac{S_*(\mu, \phi)}{2(\sigma_e^2)^2} \\[6pt]
n &= \frac{S_*(\mu, \phi)}{\sigma_e^2} \\[6pt]
\hat{\sigma}_e^2 &= \frac{S_*(\hat{\mu}, \hat{\phi})}{n}
\end{aligned}$$

This says: **the MLE of $\sigma_e^2$ is the average squared one-step-ahead prediction error** (using the unconditional $S_*$ which includes the $Y_1$ term). Once $\hat{\mu}$ and $\hat{\phi}$ are obtained (by maximizing $\log L$ numerically), $\hat{\sigma}_e^2$ follows directly.

## Example: AR(2) Conditional MLE

**Model:** $Y_t = \mu + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + e_t$, with $e_t \sim \text{NIID}(0, \sigma_e^2)$.

**Unknown parameters:** $\mu, \phi_1, \phi_2, \sigma_e^2$.

The exact (unconditional) MLE for AR(2) requires the joint stationary distribution of $(Y_1, Y_2)$, which involves a $2 \times 2$ covariance matrix — making it more complex than AR(1). The **conditional** MLE simplifies by dropping the first two observations:

$$L_c(\mu, \phi_1, \phi_2, \sigma_e^2) = f(e_3, e_4, \ldots, e_n) = \prod_{t=3}^{n} \frac{1}{\sqrt{2\pi\sigma_e^2}} \exp\!\left(-\frac{e_t^2}{2\sigma_e^2}\right)$$

where $e_t = Y_t - \mu - \phi_1 Y_{t-1} - \phi_2 Y_{t-2}$.

Take the log:

$$\begin{aligned}
\log L_c &= -\frac{n-2}{2}\log(2\pi\sigma_e^2) - \frac{1}{2\sigma_e^2}\sum_{t=3}^{n} \big(Y_t - \mu - \phi_1 Y_{t-1} - \phi_2 Y_{t-2}\big)^2 \\[6pt]
&= -\frac{n-2}{2}\log(2\pi\sigma_e^2) - \frac{S_c(\mu, \phi_1, \phi_2)}{2\sigma_e^2}
\end{aligned}$$

The sum of squared errors $S_c$ is precisely the **conditional sum of squares** from CLS.

> [!TIP] Conditional MLE $\approx$ CLS for large $n$
> Maximizing $\log L_c$ is equivalent to minimizing $S_c$ — the $\hat{\phi}_i$ that minimize $S_c$ also maximize $\log L_c$. The noise variance estimate is $\hat{\sigma}_e^2 = S_c / (n-2)$ (MLE divides by effective sample size). For large $n$, this is practically identical to CLS.

The exact AR(2) MLE would additionally include the stationary density $f(Y_1, Y_2)$ with its $2 \times 2$ autocovariance matrix — requiring numerical optimization but giving slightly better estimates for small samples.

## Related

- [[unconditional-sum-of-squares-function_202604052128|Unconditional Sum-of-Squares Function]]
- [[least-square-method_202604052128|Least Square Method]]
- [[large-sample-properties-of-parameter-estimates_202604052129|Large Sample Properties of Parameter Estimates]]
$$$
