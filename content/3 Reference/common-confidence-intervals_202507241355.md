---
publish: true
aliases:
  - Common Confidence Intervals
created: 2026-03-25T15:22:40.611+07:00
modified: 2026-03-25T15:22:40.611+07:00
published: 2026-03-25T15:22:40.611+07:00
cssclasses: ""
creation-time: 2025-07-24 13:55
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---



## Confidence intervals for mean ($\mu$)

| Distribution      | $\sigma^2$ known? | Sample size $n$ | $(1-\alpha)100\%$ Confidence interval                                                                                                                  |
| ----------------- | ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $N(\mu,\sigma^2)$ | ✅                 | Any             | $$\bar{x} -z_{\alpha/2} \frac{\sigma}{\sqrt{ n }}$$ |
| Any               | ✅                 | Large           | $$\bar{x} -z_{\alpha/2} \frac{\sigma}{\sqrt{ n }}$$        |
| $N(\mu,\sigma^2)$ | ❌                 | Small           | $$\bar{x} -t_{\alpha/2,n-1} \frac{s}{\sqrt{ n-1 }}$$       |
| Any               | ❌                 | Large           | $$\bar{x} -z_{\alpha/2} \frac{s}{\sqrt{ n-1 }}$$              |


## Confidence Intervals for Difference in Means ($\mu_X - \mu_Y$)

| Distribution                                             | $\sigma_X^2, \sigma_Y^2$ known? | Sample sizes | $(1-\alpha)100\%$ Confidence interval                                                          |
| -------------------------------------------------------- | ------------------------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| $X \sim N(\mu_X,\sigma_X^2), Y \sim N(\mu_Y,\sigma_Y^2)$ | ✅                               | Any          | $$(\bar{X} - \bar{Y}) \pm z_{\alpha/2}\sqrt{\frac{\sigma_X^2}{n_X} + \frac{\sigma_Y^2}{n_Y}}$$ |
| $X, Y$ any distribution                                  | ✅                               | Large        | $$(\bar{X} - \bar{Y}) \pm z_{\alpha/2}\sqrt{\frac{\sigma_X^2}{n_X} + \frac{\sigma_Y^2}{n_Y}}$$ |
| $X \sim N(\mu_X,\sigma^2), Y \sim N(\mu_Y,\sigma^2)$     | ❌ (equal variances)             | Small        | $$(\bar{X} - \bar{Y}) \pm t_{\alpha/2,n_X+n_Y-2}S_p\sqrt{\frac{1}{n_X} + \frac{1}{n_Y}}$$      |
| $X \sim N(\mu_X,\sigma_X^2), Y \sim N(\mu_Y,\sigma_Y^2)$ | ❌ (inequal variances)           | Small        | $$(\bar{X} - \bar{Y}) \pm t_{\alpha/2,\nu}\sqrt{\frac{S_X^2}{n_X} + \frac{S_Y^2}{n_Y}}$$       |
| $X, Y$ any distribution                                  | ❌                               | Large        | $$(\bar{X} - \bar{Y}) \pm z_{\alpha/2}\sqrt{\frac{S_X^2}{n_X} + \frac{S_Y^2}{n_Y}}$$           |


**Notes:**

- $S_p = \sqrt{\frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}}$ (pooled standard deviation)
- $\nu = \frac{\left(\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}\right)^2}{\frac{S_1^4}{n_1^2(n_1-1)} + \frac{S_2^4}{n_2^2(n_2-1)}}$ (Welch-Satterthwaite degrees of freedom)

## Confidence Intervals for Difference in Proportions ($p_X - p_Y$)



| Distribution                                                                              | Sample sizes                                                                                                      | $(1-\alpha)100\%$ Confidence interval                                                                                                     |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| $X \sim \text{Binomial}(n_X, p_X)$<br>$Y \sim \text{Binomial}(n_Y, p_Y)$<br>(independent) | Large<br>$n_X\hat{p}_X \geq 5$<br>$n_X(1-\hat{p}_X) \geq 5$<br>$n_Y\hat{p}_Y \geq 5$<br>$n_Y(1-\hat{p}_Y) \geq 5$ | $$ \hat{p_{1}}-\hat{p_{2}}\pm z_{\alpha/2}\sqrt{ \frac{\hat{p_{1}}(1-\hat{p_{1}})}{n_{1}} + \frac{\hat{p_{2}}(1-\hat{p_{2}})}{n_{2}} } $$ |
| $(X_i, Y_i) \sim \text{Multinomial}(1, [p_{++}, p_{+-}, p_{-+}, p_{--}])$ (paired)        | Large                                                                                                             | $$\hat{p} - z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$                                                                             |

**Notes:**

- $\hat{p}_1 = \frac{X}{n_1}$, $\hat{p}_2 = \frac{Y}{n_2}$ (sample proportions)
- For paired samples: $\hat{p}_d = \frac{\text{number of discordant pairs}}{n}$, $p_d$ is the proportion of discordant pairs