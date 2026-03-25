---
publish: true
aliases:
  - Zero-Inflated Poisson Model
created: 2026-03-25T15:22:40.599+07:00
modified: 2026-03-25T15:22:40.599+07:00
published: 2026-03-25T15:22:40.599+07:00
tags:
  - 
creation-time: 2025-09-15 09:11
status: in progress
parent:
  - "[[categorical-data-analysis]]"
---

## Definition

Zero-inflated Poisson models handle count data with excess zeros beyond what a standard [[def-poisson-distribution_202509150822|Poisson distribution]] predicts.

## Mathematical Formulation

The ZIP model assumes observations come from a mixture of two processes:

$$
P(Y = y) = \begin{cases} \pi + (1-\pi)e^{-\lambda} & \text{if } y = 0 \ (1-\pi)\frac{\lambda^y e^{-\lambda}}{y!} & \text{if } y > 0 \end{cases}$$

where:

- $\pi$ = probability of structural zero (always zero)
- $1-\pi$ = probability of following Poisson process
- $\lambda$ = Poisson rate parameter for non-structural zeros

## Moments

**Mean:** $$\mathbb{E}\[Y] = (1-\pi)\lambda$$

**Variance:** $$\text{Var}(Y) = (1-\pi)\lambda\[1 + \pi\lambda]$$

**Variance-to-mean ratio:** $$\frac{\text{Var}(Y)}{\mathbb{E}\[Y]} = 1 + \pi\lambda > 1$$

This creates overdispersion when $\pi > 0$.

## Regression Framework

**Poisson component:** $$\log(\lambda\_i) = X\_i\beta$$

**Zero-inflation component:** $$\text{logit}(\pi\_i) = Z\_i\gamma$$

where $X\_i$ and $Z\_i$ may contain different covariates.

## Likelihood Function

$$L(\beta, \gamma) = \prod\_{i=1}^n \left\[\pi\_i + (1-\pi\_i)e^{-\lambda\_i}\right]^{I(y\_i=0)} \left\[(1-\pi\_i)\frac{\lambda\_i^{y\_i}e^{-\lambda\_i}}{y\_i!}\right]^{I(y\_i>0)}$$

**Log-likelihood:** $$\ell(\beta, \gamma) = \sum\_{i: y\_i=0} \log\[\pi\_i + (1-\pi\_i)e^{-\lambda\_i}] + \sum\_{i: y\_i>0} \log\[(1-\pi\_i)] + \sum\_{i: y\_i>0} \[y\_i\log(\lambda\_i) - \lambda\_i - \log(y\_i!)]$$

## Model Comparison Tests

### Vuong Test

Tests ZIP vs standard Poisson: $$V = \frac{\sum\_{i=1}^n m\_i}{\sqrt{n \cdot \text{Var}(m\_i)}}$$

where $m\_i = \log\left(\frac{f\_{\text{ZIP}}(y\_i)}{f\_{\text{Poisson}}(y\_i)}\right)$

### Score Test

Tests $H\_0: \pi = 0$ (no zero-inflation): $$S = \frac{\left(\sum\_{i=1}^n (I(y\_i=0) - e^{-\hat{\lambda}_i})\right)^2}{\sum_{i=1}^n e^{-\hat{\lambda}\_i}(1-e^{-\hat{\lambda}\_i})} \sim \chi^2\_1$$

## Extensions

### Zero-Inflated Negative Binomial (ZINB)

Combines zero-inflation with negative binomial to handle both excess zeros and overdispersion:

$$P(Y = y) = \begin{cases} \pi + (1-\pi)\left(\frac{\alpha}{\alpha + \mu}\right)^\alpha & \text{if } y = 0 \ (1-\pi)\frac{\Gamma(y+\alpha)}{\Gamma(\alpha)y!}\left(\frac{\alpha}{\alpha + \mu}\right)^\alpha\left(\frac{\mu}{\alpha + \mu}\right)^y & \text{if } y > 0 \end{cases}$$

### Hurdle Models

Alternative two-part model where zeros and positives are modeled separately:

- Binary model for zero vs positive
- Truncated count model for positive values

$$P(Y = y) = \begin{cases} f\_1(0) & \text{if } y = 0 \ (1-f\_1(0))\frac{f\_2(y)}{1-f\_2(0)} & \text{if } y > 0 \end{cases}$$
