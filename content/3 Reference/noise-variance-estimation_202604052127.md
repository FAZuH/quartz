---
publish: true
aliases:
  - Noise Variance Estimation
created: 2026-04-09T23:07:39.523+07:00
modified: 2026-04-09T23:07:39.524+07:00
published: 2026-04-09T23:07:39.524+07:00
cssclasses: ""
creation-time: 2026-04-05 21:27
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Definition

Noise Variance Estimation determines $\sigma_e^2$ after model coefficients have been estimated.

After obtaining coefficient estimates, the noise variance is estimated using the relationship between theoretical variance $\gamma_0 = \text{Var}(Y_t)$ and sample variance:

$$s^2 = \frac{1}{n-1} \sum_{t=1}^n (Y_t - \bar{Y})^2$$

## AR(p)

$$\hat{\sigma}_e^2 = (1 - \hat{\phi}_1 r_1 - \hat{\phi}_2 r_2 - \cdots - \hat{\phi}_p r_p) s^2$$

## MA(q)

$$\hat{\sigma}_e^2 = \frac{s^2}{1 + \hat{\theta}_1^2 + \hat{\theta}_2^2 + \cdots + \hat{\theta}_q^2}$$

## ARMA(1,1)

$$\hat{\sigma}_e^2 = s^2 \cdot \frac{1 - \hat{\phi}_1^2}{1 - 2\hat{\phi}_1\hat{\theta}_1 + \hat{\theta}_1^2}$$

## Related

- [[3 Reference/parameter-estimation-by-method-of-moments_202604052127\|Parameter Estimation by Method of Moments]]