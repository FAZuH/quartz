---
publish: true
created: 2025-10-14T04:15:27.050+07:00
modified: 2025-10-14T04:15:27.050+07:00
published: 2025-10-14T04:15:27.050+07:00
cssclasses: ""
creation-time: 2025-07-06 23:41
status: baby
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


The **method of moments** is a method for point estimation that involves equating population moments with sample moments to estimate unknown parameters.

## Performing method of moments

To estimate $k$ unknown parameters $\theta_1, \theta_2, \ldots, \theta_k$:

1. **Express population moments in terms of parameters**
   Write the first $k$ population raw moments as functions of the parameters:
   $$\mu_1' = E(X) = g_1(\theta_1, \theta_2, \ldots, \theta_k)$$
   $$\mu_2' = E(X^2) = g_2(\theta_1, \theta_2, \ldots, \theta_k)$$
   $$\vdots$$
   $$\mu_k' = E(X^k) = g_k(\theta_1, \theta_2, \ldots, \theta_k)$$
    
2. **Set population moments equal to sample moments**
   $$g_1(\theta_1, \theta_2, \ldots, \theta_k) = m_1'$$
   $$g_2(\theta_1, \theta_2, \ldots, \theta_k) = m_2'$$
   $$\vdots$$
   $$g_k(\theta_1, \theta_2, \ldots, \theta_k) = m_k'$$
   
   where $m_j' = \frac{1}{n}\sum_{i=1}^n X_i^j$ is the $j$-th sample raw moment.
    
3. **Solve the system of equations**: Solve for $\theta_1, \theta_2, \ldots, \theta_k$ to obtain the method of moments estimators $\hat{\theta}_1, \hat{\theta}_2, \ldots, \hat{\theta}_k$.

> [!tip] Common approach using raw and central moments
> - First raw moment: $\mu_1' = E(X) = \bar{X}$
> - Central moments: $\mu_k = E[(X-\mu)^k] = \frac{1}{n}\sum_{i=1}^n(X_i-\bar{X})^k$ for $k=2,3,\ldots$
> 
> For many distributions, $\mu_1' = \mu$ and $\mu_2 = \sigma^2$ are sufficient.

## Properties of Method of Moments Estimators

- **Consistency**: Under regularity conditions, method of moments estimators are consistent
- **Simplicity**: Often easier to compute than maximum likelihood estimators
- **Not always efficient**: May not achieve the [[3 Reference/mathstat6.2#Theorem 6.2.1 Rao-Cramér lower bound\|Rao-Cramer lower bound]]
- **Existence**: May not always exist or be unique

## Comparison with Maximum Likelihood Estimation

| Method of Moments                                   | Maximum Likelihood                   |
| --------------------------------------------------- | ------------------------------------ |
| Equates **sample and population** moments           | Maximizes likelihood function        |
| Usually **simpler** calculations                    | Often more complex calculations      |
| May be **less efficient**                           | Asymptotically efficient             |
| Always **consistent** (under regularity conditions) | Consistent and asymptotically normal |

## Important formulas
- [[3 Reference/mathstat1.9#Definition 1.9.1 Mean\|Mean]]
- [[3 Reference/mathstat1.9#Definition 1.9.2 Variance\|Variance]]
- [[3 Reference/mathstat1.9#Definition Moments\|Moments]]
- [[3 Reference/Discrete Distributions]]
- [[3 Reference/Continuous Distributions]]

## Examples
### Example 1: Normal Distribution with Unknown Mean

Let
- $X_1, X_2, \ldots, X_n \sim N(\mu, \sigma^2)$, with
	- $\mu$ unknown 
	- $\sigma^2$ known

We know that 
- Population moment is $E[X]=\mu$, and 
- Sample moment is $m_{1}'=\frac{1}{n}\sum_{i=1}^n X_{i}=\bar{X}$.

**Step 1:** Express population moment in terms of parameter: $$\mu_1' = E[X] = \mu$$

**Step 2:** Set equal to sample moment: 
$$E[X] =\mu = m_1' = \bar{X}$$

**Step 3:** Solve: $$\hat{\mu} = \bar{X}$$

### Example 2: Normal Distribution with Two Unknown Parameters

Let
- $X_1, X_2, \ldots, X_n \sim N(\mu, \sigma^2)$, with
	- $\mu$ unknown 
	- $\sigma^2$ unknown

**Step 1:** Express population moments in terms of parameters:
$$
\begin{align}
\mu_1' & = E[X] \\
 &  = \mu \\ \\

\mu_2' & = E[X^2]  \\
 & = \text{Var}(X) + [E(X)]^2  \\
 & = \sigma^2 + \mu^2
\end{align}
$$

**Step 2:** Set equal to sample moments: 
$$
\begin{align}
\mu  & = m_1' = \bar{X} \\
\sigma^2 + \mu^2  & = m_2' = \frac{1}{n}\sum_{i=1}^n X_i^2
\end{align}
$$

**Step 3:** Solve: From the first equation: $\hat{\mu} = \bar{X}$

Substituting into the second equation: $$\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n X_i^2 - \bar{X}^2$$

Using the identity $\sum_{i=1}^n X_i^2 = \sum_{i=1}^n (X_i - \bar{X})^2 + n\bar{X}^2$: $$\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n (X_i - \bar{X})^2$$

Using the identity $\sum_{i=1}^n X_i^2 = \sum_{i=1}^n (X_i - \bar{X})^2 + n\bar{X}^2$: $$\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n (X_i - \bar{X})^2$$

### Example 3: Shifted Exponential Distribution

Let
- $X_1, X_2, \ldots, X_n$ be a random sample from a distribution with pdf:
- $$
f(x; \theta) =\begin{cases}
e^{-(x-\theta)}, & \quad \theta \leq x < \infty, \quad -\infty < \theta < \infty \\
 0 &  \quad \text{otherwise}
\end{cases} 
$$
- $\theta$ unknown

**Step 1:** Express population moment in terms of parameter:

For the shifted exponential distribution, let $Y = X - \theta$, so $Y \sim \text{Exponential}(1)$.

Since $X = Y + \theta$:
$$\mu_1' = E[X] = E[Y + \theta] = E[Y] + \theta = 1 + \theta$$

**Step 2:** Set equal to sample moment:
$$\theta + 1 = m_1' = \frac{1}{n}\sum_{i=1}^n X_i = \bar{X}$$

**Step 3:** Solve:
$$\hat{\theta} = \bar{X} - 1$$