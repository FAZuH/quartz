---
publish: true
aliases:
  - Maximum Likelihood Method
created: 2026-04-05T21:29:06.215+07:00
modified: 2026-04-05T21:32:13.197+07:00
published: 2026-04-05T21:32:13.197+07:00
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

### Step 1: Joint Density of Errors

$$f(e_2, e_3, \ldots, e_n) = \left(\frac{1}{\sqrt{2\pi\sigma_e^2}}\right)^{n-1} \exp\left(-\frac{1}{2\sigma_e^2}\sum_{t=2}^n e_t^2\right)$$

### Step 2: Marginal Density of $Y_1$

$$f(Y_1) = \frac{1}{\sqrt{2\pi\sigma_e^2/(1-\phi^2)}} \exp\left(-\frac{(Y_1 - \mu)^2}{2\sigma_e^2/(1-\phi^2)}\right)$$

### Step 3: Complete Likelihood

$$L(\phi, \mu, \sigma_e^2) = f(Y_1) \cdot f(e_2, \ldots, e_n | Y_1)$$

### Step 4: Log-Likelihood

$$\log L = -\frac{n}{2}\log(2\pi\sigma_e^2) + \frac{1}{2}\log(1-\phi^2) - \frac{S(\phi, \mu)}{2\sigma_e^2}$$

Where $S(\phi, \mu)$ is the unconditional sum of squares.

### Step 5: Estimate $\sigma_e^2$

After obtaining $\hat{\phi}$ and $\hat{\mu}$:

$$\hat{\sigma}_e^2 = \frac{S(\hat{\phi}, \hat{\mu})}{n}$$

## Related

- [[3 Reference/unconditional-sum-of-squares-function_202604052128\|Unconditional Sum-of-Squares Function]]
- [[3 Reference/least-square-method_202604052128\|Least Square Method]]
- [[3 Reference/large-sample-properties-of-parameter-estimates_202604052129\|Large Sample Properties of Parameter Estimates]]