---
publish: true
aliases:
  - Non-Parametric Estimation Cheatsheet
created: 2026-04-09T23:07:39.528+07:00
modified: 2026-04-09T23:07:39.529+07:00
published: 2026-04-09T23:07:39.529+07:00
creation-time: 2026-04-07 11:08
status: in progress
tags:
parent:
  - survival-model
---

## Notation

| Symbol | Meaning |
|--------|---------|
| $t_i$ | $i$-th ordered distinct event time |
| $d_i$ | Number of events (failures) at time $t_i$ |
| $Y_i$ | Number at risk just before time $t_i$ |
| $c_i$ | Number censored between $t_i$ and $t_{i+1}$ |
| $n = Y_0$ | Total subjects at start |

## Estimators

### Kaplan-Meier (Survival Function)

$$
\begin{align}
\hat{S}(t) & = \prod_{t_i \leq t} \left(1 - \frac{d_i}{Y_i}\right) \\
\widehat{\operatorname{Var}}[\hat{S}(t)]  & = [\hat{S}(t)]^2 \sum_{t_i \leq t} \frac{d_i}{Y_i(Y_i - d_i)} \\
\widehat{\operatorname{SE}}[\hat{S}(t)]  & = \sqrt{\widehat{\operatorname{Var}}[\hat{S}(t)]} \\
\end{align}
$$

### Nelson-Aalen (Cumulative Hazard)

$$
\begin{align}
\hat{H}(t) & = \sum_{t_i \leq t} \frac{d_i}{Y_i} \\
\widehat{\operatorname{Var}}[\hat{H}(t)] & = \sum_{t_i \leq t} \frac{d_i}{Y_i^{\textcolor{yellow}{2}}}
\end{align}
$$

## Confidence Intervals for $\hat{S}(t)$

### Linear Scale (Naive)

$\hat{S}(t) \pm z_{\alpha/2} \cdot \widehat{\operatorname{SE}}[\hat{S}(t)]$

> [!WARNING]
> Can produce values outside $[0, 1]$. Not recommended.

### Log-Log Transform (Recommended)

$$
\begin{align}
 & \left[\hat{S}(t)^{\exp\!\left(\textcolor{yellow}\mp z_{\alpha/2}\,\hat{\sigma}(t)\right)},\quad \hat{S}(t)^{\exp\!\left(\textcolor{yellow}\pm z_{\alpha/2}\,\hat{\sigma}(t)\right)}\right] \\
 & \hat{\sigma}^2(t)   = \frac{\widehat{\operatorname{Var}}[\hat{S}(t)]}{[\hat{S}(t)\ln\hat{S}(t)]^2}
\end{align}
$$

**Common $z_{\alpha/2}$ values**

| Confidence Level | $z_{\alpha/2}$ |
|------------------|----------------|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |

## Key Relationships

$$
\hat{S}_{KM}(t) \approx \exp(-\hat{H}_{NA}(t))
$$

$Y_{i+1} = Y_i - d_i - c_i$

| To Estimate | Use | Variance |
|-------------|-----|----------|
| $S(t)$ | Kaplan-Meier | Greenwood's formula |
| $H(t)$ | Nelson-Aalen | $\sum \frac{d_i}{Y_i^2}$ |
| $h(t)$ | $d_i/Y_i$ at each event time | — |

## Related

- [[def-kaplan-meier-estimator_202603281500|Kaplan-Meier Estimator]]
- [[def-nelson-aalen-estimator_202603281500|Nelson-Aalen Estimator]]
- [[def-greenwood-formula_202603281600|Greenwood's Formula]]
- [[confidence-interval-for-survival_202604070830|Confidence Interval for Survival]]
