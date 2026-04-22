---
publish: true
aliases:
  - Maximum Likelihood Method
created: 2026-04-09T23:07:39.484+07:00
modified: 2026-04-20T16:34:14.466+07:00
published: 2026-04-20T16:34:14.466+07:00
cssclasses: ""
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

$$L(\theta) = f(Y_1, Y_2, \ldots, Y_n | \theta)$$

The **maximum likelihood estimator (MLE)** is:

$$\hat{\theta} = \arg\max_\theta L(\theta)$$

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

Assume white noise $e_t \sim \text{NIID}(0, \sigma_e^2)$.

Recall for $X\sim N(0,\sigma^{2}_{e})$, the pdf is:
$$
f(X) = \frac{1}{\sqrt{ 2 \pi \sigma^{2} }} \exp\left( - \frac{x^{2}}{2\sigma^{2}} \right)
$$

### Step 1: Joint Density of Errors

The AR(1) errors are white noise: $e_t \sim \text{NIID}(0, \sigma_e^2)$ for $t = 2, 3, \ldots, n$. Since they are **independent and identically distributed**, the joint density equals the product of individual densities.

**Derivation:**

Recall the pdf of a normal random variable $X \sim N(\mu, \sigma^2)$ is:
$$f(X) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(X - \mu)^2}{2\sigma^2}\right)$$

Since $e_t$ has mean zero and variance $\sigma_e^2$:
$$f(e_t) = \frac{1}{\sqrt{2\pi\sigma_e^2}} \exp\left(-\frac{e_t^2}{2\sigma_e^2}\right)$$

The joint density is the product of $(n-1)$ independent densities:
$$
\begin{align}
f(e_2, e_3, \ldots, e_n) &= \prod_{t=2}^n f(e_t) \\[6pt]
&= \prod_{t=2}^n \frac{1}{\sqrt{2\pi\sigma_e^2}} \exp\left(-\frac{e_t^2}{2\sigma_e^2}\right) \\[6pt]
&= \left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right)^{n-1} \prod_{t=2}^n \exp\left(-\frac{e_t^2}{2\sigma_e^2}\right) \\[6pt]
&= \left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right)^{n-1} \exp\left(-\frac{1}{2\sigma_e^2}\sum_{t=2}^n e_t^2\right)
\end{align}
$$
### Step 2: Marginal Density of $Y_1$

For a **stationary** AR(1) process, the first observation $Y_1$ follows the stationary (marginal) distribution. The AR(1) model is:
$$Y_t = \mu + \phi Y_{t-1} + e_t$$

The stationary distribution is derived by noting that in the long run:
$$\text{Var}(Y_t) = \text{Var}(Y_{t-1}) = \sigma_Y^2$$

From the model equation:
$$
\begin{align}
\text{Var}(Y_t) &= \phi^2 \text{Var}(Y_{t-1}) + \text{Var}(e_t) \\[6pt]
\sigma_Y^2 &= \phi^2 \sigma_Y^2 + \sigma_e^2 \\[6pt]
\sigma_Y^2(1 - \phi^2) &= \sigma_e^2 \\[6pt]
\sigma_Y^2 &= \frac{\sigma_e^2}{1 - \phi^2}
\end{align}
$$


The stationary mean is $\mu_Y = \frac{\mu}{1 - \phi}$. Thus:
$$Y_1 \sim N\left(\frac{\mu}{1-\phi}, \frac{\sigma_e^2}{1-\phi^2}\right)$$

**Derivation:**

Substituting into the normal pdf with mean $\mu_Y = \frac{\mu}{1-\phi}$ and variance $\sigma_Y^2 = \frac{\sigma_e^2}{1-\phi^2}$:
$$
\begin{align}
f(Y_1) &= \frac{1}{\sqrt{2\pi \cdot \frac{\sigma_e^2}{1-\phi^2}}} \exp\left(-\frac{\left(Y_1 - \frac{\mu}{1-\phi}\right)^2}{2 \cdot \frac{\sigma_e^2}{1-\phi^2}}\right) \\[6pt]
&= \frac{\sqrt{1-\phi^2}}{\sqrt{2\pi\sigma_e^2}} \exp\left(-\frac{(1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2}{2\sigma_e^2}\right)
\end{align}
$$

### Step 3: Complete Likelihood

The complete likelihood is derived using the **chain rule of probability** (multiplication rule). This factorizes the joint density of all observations.

**Derivation:**

By the definition of conditional probability:
$$P(A, B) = P(A) \cdot P(B|A)$$

Applying this to the joint density of observations:
$$
\begin{align}
f(Y_1, Y_2, \ldots, Y_n | \phi, \mu, \sigma_e^2) &= f(Y_1 | \phi, \mu, \sigma_e^2) \cdot f(Y_2, \ldots, Y_n | Y_1, \phi, \mu, \sigma_e^2)
\end{align}
$$

Since $e_t = Y_t - \mu - \phi Y_{t-1}$ for $t \geq 2$, the distribution of future errors depends **only** on $Y_1$ through the deterministic relationship, not through stochastic dependence. Therefore:
$$f(e_2, \ldots, e_n | Y_1, \phi, \mu, \sigma_e^2) = f(e_2, \ldots, e_n | \phi, \mu, \sigma_e^2)$$

The complete likelihood is:
$$L(\phi, \mu, \sigma_e^2) = f(Y_1) \cdot f(e_2, \ldots, e_n | Y_1)$$

### Step 4: Log-Likelihood

The log-likelihood is obtained by combining Steps 1, 2, and 3, and taking the natural logarithm.

**Derivation:**

First, multiply the marginal density $f(Y_1)$ from Step 2 with the joint error density from Step 1:
$$
\begin{align}
L(\phi, \mu, \sigma_e^2) &= f(Y_1) \cdot f(e_2, \ldots, e_n) \\[6pt]
&= \frac{\sqrt{1-\phi^2}}{\sqrt{2\pi\sigma_e^2}} \exp\left(-\frac{(1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2}{2\sigma_e^2}\right) \\[6pt]
&\quad \cdot \left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right)^{n-1} \exp\left(-\frac{1}{2\sigma_e^2}\sum_{t=2}^n e_t^2\right)
\end{align}
$$

Taking the natural logarithm:

$$
\begin{align}
\log L &= \log\left(\frac{\sqrt{1-\phi^2}}{\sqrt{2\pi\sigma_e^2}}\right) - \frac{(1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2}{2\sigma_e^2} \\[6pt]
&\quad + (n-1)\log\left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right) - \frac{1}{2\sigma_e^2}\sum_{t=2}^n e_t^2 \\[6pt]
&= \frac{1}{2}\log(1-\phi^2) - \frac{1}{2}\log(2\pi\sigma_e^2) - \frac{(1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2}{2\sigma_e^2} \\[6pt]
&\quad - \frac{n-1}{2}\log(2\pi\sigma_e^2) - \frac{1}{2\sigma_e^2}\sum_{t=2}^n e_t^2 \\[6pt]
&= -\frac{n}{2}\log(2\pi\sigma_e^2) + \frac{1}{2}\log(1-\phi^2) - \frac{S(\phi, \mu)}{2\sigma_e^2}
\end{align}
$$

Where the **unconditional sum of squares** is:
$$S(\phi, \mu) = (1-\phi^2)\left(Y_1 - \frac{\mu}{1-\phi}\right)^2 + \sum_{t=2}^n \left(Y_t - \mu - \phi Y_{t-1}\right)^2$$

### Step 5: Estimate $\sigma_e^2$

The estimate of $\sigma_e^2$ is obtained by maximizing the log-likelihood with respect to $\sigma_e^2$, treating $\hat{\phi}$ and $\hat{\mu}$ as already estimated.

**Derivation:**

From Step 4, the log-likelihood is:
$$\log L = -\frac{n}{2}\log(2\pi\sigma_e^2) + \frac{1}{2}\log(1-\phi^2) - \frac{S(\phi, \mu)}{2\sigma_e^2}$$

Taking the partial derivative with respect to $\sigma_e^2$:
$$
\begin{align}
\frac{\partial \log L}{\partial \sigma_e^2} &= -\frac{n}{2} \cdot \frac{1}{\sigma_e^2} + \frac{S(\phi, \mu)}{2(\sigma_e^2)^2}
\end{align}
$$

Setting equal to zero for maximization:
$$
\begin{align}
-\frac{n}{2\sigma_e^2} + \frac{S(\phi, \mu)}{2(\sigma_e^2)^2} &= 0 \\[6pt]
\frac{n}{2\sigma_e^2} &= \frac{S(\phi, \mu)}{2(\sigma_e^2)^2} \\[6pt]
n &= \frac{S(\phi, \mu)}{\sigma_e^2} \\[6pt]
\hat{\sigma}_e^2 &= \frac{S(\hat{\phi}, \hat{\mu})}{n}
\end{align}
$$

After obtaining $\hat{\phi}$ and $\hat{\mu}$ (by maximizing the concentrated likelihood), the estimator is:
$$\hat{\sigma}_e^2 = \frac{S(\hat{\phi}, \hat{\mu})}{n}$$

## Related

- [[3 Reference/unconditional-sum-of-squares-function_202604052128\|Unconditional Sum-of-Squares Function]]
- [[3 Reference/least-square-method_202604052128\|Least Square Method]]
- [[3 Reference/large-sample-properties-of-parameter-estimates_202604052129\|Large Sample Properties of Parameter Estimates]]