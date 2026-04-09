---
publish: true
aliases:
  - Confidence Interval for Survival
created: 2026-04-07T08:30:31.902+07:00
modified: 2026-04-07T10:19:56.116+07:00
published: 2026-04-07T10:19:56.116+07:00
cssclasses: ""
creation-time: 2026-04-07 08:30
status: in progress
tags:
parent:
  - survival-model
---


## Definition

A **confidence interval for $\hat{S}(t)$** provides uncertainty bounds around the [[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier]] estimate.

## Pointwise Confidence Interval Methods

Let 
- $z_{\alpha/2}$ : inverse [[3 Reference/Def-cumulative-distribution-function-(cdf)\|cdf]] of [[3 Reference/3.4-the-normal-distribution_202507240800\|Normal Distribution]]
- $\hat{S}(t)$ : [[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier estimate]]
- $\widehat{\text{Var}}[\hat{S}(t)]$ : [[3 Reference/def-greenwood-formula_202603281600\|Greenwood's Formula]]

### Linear Scale (Naive)

$$\hat{S}(t) \pm z_{\alpha/2} \sqrt{\widehat{\operatorname{Var}}[\hat{S}(t)]}$$

> [!WARNING] Problem
> Can produce values outside $[0, 1]$impossible for probabilities.

### Log-Log Transform (Recommended)

$$\left[\hat{S}(t)^{\exp(\mp z_{\alpha/2} \hat{\sigma}(t))}, \hat{S}(t)^{\exp(\pm z_{\alpha/2} \hat{\sigma}(t))}\right]$$

where:

$$\hat{\sigma}^2(t) = \frac{\widehat{\operatorname{Var}}[\hat{S}(t)]}{[\hat{S}(t) \ln \hat{S}(t)]^2}$$

The log-log transform ensures the CI stays within $[0, 1]$.

## For 95% Confidence Interval

$z_{0.025} = 1.96$

## For Nelson-Aalen Estimator

Variance of $\hat{H}(t)$:

$$\widehat{\operatorname{Var}}[\hat{H}(t)] = \sum_{t_i \leq t} \frac{d_i}{Y_i^2}$$

## Related

- [[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier Estimator]]
- [[3 Reference/def-greenwood-formula_202603281600\|Greenwood's Formula]]
- [[3 Reference/def-nelson-aalen-estimator_202603281500\|Nelson-Aalen Estimator]]