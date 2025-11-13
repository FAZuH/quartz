---
{"publish":true,"aliases":["Zero-Inflated Poisson Model"],"created":"2025-10-14T04:15:27.044+07:00","modified":"2025-10-14T04:15:27.044+07:00","published":"2025-10-14T04:15:27.044+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-15 09:11","status":"baby","parent":["[[categorical-data-analysis]]"]}
---


## Definition

Zero-inflated Poisson models handle count data with excess zeros beyond what a standard [[3 Reference/def-poisson-distribution_202509150822\|Poisson distribution]] predicts.

## Mathematical Formulation

The ZIP model assumes observations come from a mixture of two processes:

$$
P(Y = y) = \begin{cases} \pi + (1-\pi)e^{-\lambda} & \text{if } y = 0 \\ (1-\pi)\frac{\lambda^y e^{-\lambda}}{y!} & \text{if } y > 0 \end{cases}$$


where:

- $\pi$ = probability of structural zero (always zero)
- $1-\pi$ = probability of following Poisson process
- $\lambda$ = Poisson rate parameter for non-structural zeros

## Moments

**Mean:** $$\mathbb{E}[Y] = (1-\pi)\lambda$$

**Variance:** $$\text{Var}(Y) = (1-\pi)\lambda[1 + \pi\lambda]$$

**Variance-to-mean ratio:** $$\frac{\text{Var}(Y)}{\mathbb{E}[Y]} = 1 + \pi\lambda > 1$$

This creates overdispersion when $\pi > 0$.

## Regression Framework

**Poisson component:** $$\log(\lambda_i) = X_i\beta$$

**Zero-inflation component:** $$\text{logit}(\pi_i) = Z_i\gamma$$

where $X_i$ and $Z_i$ may contain different covariates.

## Likelihood Function

$$L(\beta, \gamma) = \prod_{i=1}^n \left[\pi_i + (1-\pi_i)e^{-\lambda_i}\right]^{I(y_i=0)} \left[(1-\pi_i)\frac{\lambda_i^{y_i}e^{-\lambda_i}}{y_i!}\right]^{I(y_i>0)}$$

**Log-likelihood:** $$\ell(\beta, \gamma) = \sum_{i: y_i=0} \log[\pi_i + (1-\pi_i)e^{-\lambda_i}] + \sum_{i: y_i>0} \log[(1-\pi_i)] + \sum_{i: y_i>0} [y_i\log(\lambda_i) - \lambda_i - \log(y_i!)]$$

## Model Comparison Tests

### Vuong Test

Tests ZIP vs standard Poisson: $$V = \frac{\sum_{i=1}^n m_i}{\sqrt{n \cdot \text{Var}(m_i)}}$$

where $m_i = \log\left(\frac{f_{\text{ZIP}}(y_i)}{f_{\text{Poisson}}(y_i)}\right)$

### Score Test

Tests $H_0: \pi = 0$ (no zero-inflation): $$S = \frac{\left(\sum_{i=1}^n (I(y_i=0) - e^{-\hat{\lambda}_i})\right)^2}{\sum_{i=1}^n e^{-\hat{\lambda}_i}(1-e^{-\hat{\lambda}_i})} \sim \chi^2_1$$

## Extensions

### Zero-Inflated Negative Binomial (ZINB)

Combines zero-inflation with negative binomial to handle both excess zeros and overdispersion:

$$P(Y = y) = \begin{cases} \pi + (1-\pi)\left(\frac{\alpha}{\alpha + \mu}\right)^\alpha & \text{if } y = 0 \ (1-\pi)\frac{\Gamma(y+\alpha)}{\Gamma(\alpha)y!}\left(\frac{\alpha}{\alpha + \mu}\right)^\alpha\left(\frac{\mu}{\alpha + \mu}\right)^y & \text{if } y > 0 \end{cases}$$

### Hurdle Models

Alternative two-part model where zeros and positives are modeled separately:

- Binary model for zero vs positive
- Truncated count model for positive values

$$P(Y = y) = \begin{cases} f_1(0) & \text{if } y = 0 \ (1-f_1(0))\frac{f_2(y)}{1-f_2(0)} & \text{if } y > 0 \end{cases}$$
