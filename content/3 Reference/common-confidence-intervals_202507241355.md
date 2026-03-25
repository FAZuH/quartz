---
publish: true
aliases:
  - Common Confidence Intervals
created: 2026-03-25T15:22:40.611+07:00
modified: 2026-03-25T15:22:40.611+07:00
published: 2026-03-25T15:22:40.611+07:00
creation-time: 2025-07-24 13:55
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Confidence intervals for mean ($\mu$)

| Distribution      | $\sigma^2$ known? | Sample size $n$ | $(1-\alpha)100%$ Confidence interval                                                                                                                  |
| ----------------- | ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $N(\mu,\sigma^2)$ | ✅                 | Any             | $$\bar{x} -z\_{\alpha/2} \frac{\sigma}{\sqrt{ n }}$$ |
| Any               | ✅                 | Large           | $$\bar{x} -z\_{\alpha/2} \frac{\sigma}{\sqrt{ n }}$$        |
| $N(\mu,\sigma^2)$ | ❌                 | Small           | $$\bar{x} -t\_{\alpha/2,n-1} \frac{s}{\sqrt{ n-1 }}$$       |
| Any               | ❌                 | Large           | $$\bar{x} -z\_{\alpha/2} \frac{s}{\sqrt{ n-1 }}$$              |

## Confidence Intervals for Difference in Means ($\mu\_X - \mu\_Y$)

| Distribution                                             | $\sigma\_X^2, \sigma\_Y^2$ known? | Sample sizes | $(1-\alpha)100%$ Confidence interval                                                          |
| -------------------------------------------------------- | ------------------------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| $X \sim N(\mu\_X,\sigma\_X^2), Y \sim N(\mu\_Y,\sigma\_Y^2)$ | ✅                               | Any          | $$(\bar{X} - \bar{Y}) \pm z\_{\alpha/2}\sqrt{\frac{\sigma\_X^2}{n\_X} + \frac{\sigma\_Y^2}{n\_Y}}$$ |
| $X, Y$ any distribution                                  | ✅                               | Large        | $$(\bar{X} - \bar{Y}) \pm z\_{\alpha/2}\sqrt{\frac{\sigma\_X^2}{n\_X} + \frac{\sigma\_Y^2}{n\_Y}}$$ |
| $X \sim N(\mu\_X,\sigma^2), Y \sim N(\mu\_Y,\sigma^2)$     | ❌ (equal variances)             | Small        | $$(\bar{X} - \bar{Y}) \pm t\_{\alpha/2,n\_X+n\_Y-2}S\_p\sqrt{\frac{1}{n\_X} + \frac{1}{n\_Y}}$$      |
| $X \sim N(\mu\_X,\sigma\_X^2), Y \sim N(\mu\_Y,\sigma\_Y^2)$ | ❌ (inequal variances)           | Small        | $$(\bar{X} - \bar{Y}) \pm t\_{\alpha/2,\nu}\sqrt{\frac{S\_X^2}{n\_X} + \frac{S\_Y^2}{n\_Y}}$$       |
| $X, Y$ any distribution                                  | ❌                               | Large        | $$(\bar{X} - \bar{Y}) \pm z\_{\alpha/2}\sqrt{\frac{S\_X^2}{n\_X} + \frac{S\_Y^2}{n\_Y}}$$           |

**Notes:**

- $S\_p = \sqrt{\frac{(n\_1-1)S\_1^2 + (n\_2-1)S\_2^2}{n\_1+n\_2-2}}$ (pooled standard deviation)
- $\nu = \frac{\left(\frac{S\_1^2}{n\_1} + \frac{S\_2^2}{n\_2}\right)^2}{\frac{S\_1^4}{n\_1^2(n\_1-1)} + \frac{S\_2^4}{n\_2^2(n\_2-1)}}$ (Welch-Satterthwaite degrees of freedom)

## Confidence Intervals for Difference in Proportions ($p\_X - p\_Y$)

| Distribution                                                                              | Sample sizes                                                                                                      | $(1-\alpha)100%$ Confidence interval                                                                                                     |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| $X \sim \text{Binomial}(n\_X, p\_X)$<br>$Y \sim \text{Binomial}(n\_Y, p\_Y)$<br>(independent) | Large<br>$n\_X\hat{p}_X \geq 5$<br>$n\_X(1-\hat{p}_X) \geq 5$<br>$n\_Y\hat{p}_Y \geq 5$<br>$n\_Y(1-\hat{p}_Y) \geq 5$ | $$ \hat{p_{1}}-\hat{p_{2}}\pm z_{\alpha/2}\sqrt{ \frac{\hat{p_{1}}(1-\hat{p\_{1}})}{n\_{1}} + \frac{\hat{p\_{2}}(1-\hat{p\_{2}})}{n\_{2}} } $$ |
| $(X\_i, Y\_i) \sim \text{Multinomial}(1, \[p\_{++}, p\_{+-}, p\_{-+}, p\_{--}])$ (paired)        | Large                                                                                                             | $$\hat{p} - z\_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$                                                                             |

**Notes:**

- $\hat{p}\_1 = \frac{X}{n\_1}$, $\hat{p}\_2 = \frac{Y}{n\_2}$ (sample proportions)
- For paired samples: $\hat{p}\_d = \frac{\text{number of discordant pairs}}{n}$, $p\_d$ is the proportion of discordant pairs
