---
publish: true
aliases:
  - Hypothesis Testing Survival Cheatsheet
created: 2026-05-05T14:08:45.831+07:00
modified: 2026-05-05T14:10:32.742+07:00
published: 2026-05-05T14:10:32.742+07:00
cssclasses: ""
creation-time: 2026-05-05 14:08
status: in progress
tags:
parent:
  - "[[survival-model]]"
---



## Notation

| Symbol | Meaning |
|--------|---------|
| $t_i$ | $i$-th ordered distinct event time (pooled) |
| $d_{ij}$ | Events in group $j$ at time $t_i$ |
| $Y_{ij}$ | At risk in group $j$ just before $t_i$ |
| $d_i = \sum_j d_{ij}$ | Total events at $t_i$ |
| $Y_i = \sum_j Y_{ij}$ | Total at risk at $t_i$ |
| $W(t_i)$ | Weight function |
| $K$ | Number of groups |
| $M$ | Number of strata |

## Weight Functions

| Test | $W(t_i)$ | Characteristics |
|------|----------|-----------------|
| Log-Rank | $1$ | Equal weight; most powerful under proportional hazards |
| Gehan / Breslow | $Y_i$ | More weight to early times; generalization of Wilcoxon |
| Tarone-Ware | $\sqrt{Y_i}$ | Intermediate between log-rank and Gehan |

## 1-Sample Test

$$H_0 : h(t) = h_0(t), \quad H_1 : h(t) \neq h_0(t)$$

$$Z(\tau) = \sum_{i=1}^D W(t_i)\frac{d_i}{Y(t_i)} - \int_0^\tau W(s)\,h_0(s)\,ds$$

Under $H_0$: $\displaystyle \frac{Z(\tau)^2}{\operatorname{Var}[Z(\tau)]} \sim \chi^2_1$

With $W(t) = Y(t)$ (1-sample log-rank):
$$O(\tau) = \sum d_i, \quad E(\tau) = \sum_{j=1}^n \big[H_0(T_j) - H_0(L_j)\big]$$

## K-Sample Test

$$H_0 : h_1(t) = \ldots = h_K(t)$$

$$Z_j(\tau) = \sum_{i=1}^D W(t_i)\left[d_{ij} - Y_{ij}\frac{d_i}{Y_i}\right], \quad j=1,\ldots,K$$

$$\hat{\sigma}_{jj} = \sum_{i=1}^D W(t_i)^2\,\frac{Y_{ij}}{Y_i}\!\left(1 - \frac{Y_{ij}}{Y_i}\right)\!\!\left(\frac{Y_i - d_i}{Y_i - 1}\right)\!d_i$$

$$\hat{\sigma}_{jg} = -\sum_{i=1}^D W(t_i)^2\,\frac{Y_{ij}Y_{ig}}{Y_i^2}\!\left(\frac{Y_i - d_i}{Y_i - 1}\right)\!d_i$$

$$\chi^2 = (Z_1,\ldots,Z_{K-1})\,\hat{\Sigma}^{-1}\,(Z_1,\ldots,Z_{K-1})^T \sim \chi^2_{K-1}$$

### Two-Sample Special Case ($K=2$)

$$Z = \frac{\sum_{i=1}^D W(t_i)\left[d_{i1} - Y_{i1}\frac{d_i}{Y_i}\right]}{\sqrt{\sum_{i=1}^D W(t_i)^2\,\frac{Y_{i1}}{Y_i}\left(1-\frac{Y_{i1}}{Y_i}\right)\left(\frac{Y_i-d_i}{Y_i-1}\right)d_i}} \sim N(0,1)$$

## Trend Test

For ordered groups with scores $a_1 < a_2 < \ldots < a_K$:

$$Z = \frac{\sum_{j=1}^K a_j Z_j(\tau)}{\sqrt{\sum_{j=1}^K \sum_{g=1}^K a_j a_g \,\hat{\sigma}_{jg}}} \sim N(0,1)$$

## Stratified Test

For $M$ strata, pool across strata:

$$Z_{j\cdot}(\tau) = \sum_{s=1}^M Z_{js}(\tau), \quad \hat{\sigma}_{jg\cdot} = \sum_{s=1}^M \hat{\sigma}_{jgs}$$

$$\chi^2 = (Z_{1\cdot},\ldots,Z_{K-1\cdot})\,\hat{\Sigma}_{\cdot}^{-1}\,(Z_{1\cdot},\ldots,Z_{K-1\cdot})^T \sim \chi^2_{K-1}$$

Two-sample stratified: $Z = \frac{\sum_{s} Z_{1s}(\tau)}{\sqrt{\sum_{s} \hat{\sigma}_{11s}}} \sim N(0,1)$

## Decision Rule Summary

| Test | Statistic | Distribution | Reject $H_0$ if |
|------|-----------|-------------|------------------|
| 1-sample (2-sided) | $Z^2/\operatorname{Var}(Z)$ | $\chi^2_1$ | $> \chi^2_{1,\alpha}$ |
| 1-sample (1-sided) | $Z/\sqrt{\operatorname{Var}(Z)}$ | $N(0,1)$ | $\|Z\| > z_{\alpha}$ |
| K-sample | $\chi^2$ | $\chi^2_{K-1}$ | $> \chi^2_{K-1,\alpha}$ |
| Trend | $Z$ | $N(0,1)$ | $\|Z\| > z_{\alpha/2}$ |
| Stratified | $\chi^2$ | $\chi^2_{K-1}$ | $> \chi^2_{K-1,\alpha}$ |

## Related

- [[3 Reference/one-sample-log-rank-test_202605051407\|One-Sample Log-Rank Test]]
- [[3 Reference/log-rank-test_202605051407\|Log-Rank Test]]
- [[3 Reference/trend-test-survival_202605051407\|Trend Test]]
- [[3 Reference/stratified-test-survival_202605051408\|Stratified Test]]
- [[3 Reference/non-parametric-estimation-cheatsheet_202604071108\|Non-Parametric Estimation Cheatsheet]]
