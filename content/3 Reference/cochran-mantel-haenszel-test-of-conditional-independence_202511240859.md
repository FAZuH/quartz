---
publish: true
aliases:
  - Cochran-Mantel-Haenszel Test of Conditional Independence
created: 2026-03-25T15:22:40.615+07:00
modified: 2026-03-25T15:22:40.616+07:00
published: 2026-03-25T15:22:40.616+07:00
tags:
  - 
creation-time: 2025-11-24 08:59
status: in progress
parent:
  - "[[categorical-data-analysis]]"
---

# Cochran-Mantel-Haenszel Test of Conditional Independence

## Data

Observations from $K$ strata. Within stratum $k$, a $2 \times 2$ contingency table with cell counts ${n\_{ijk}}$ where $i,j \in {1,2}$ index the row and column:

$$
\begin{array}{c|cc|c}
& \text{Col 1} & \text{Col 2} &  \\
\hline \text{Row 1} & n\_{11k} & n\_{12k} & n\_{1+k}  \\
\text{Row 2} & n\_{21k} & n\_{22k} & n\_{2+k}  \\
\hline & n\_{+1k} & n\_{+2k} & n\_{++k}
\end{array}$$

## Assumptions

1. Independence across strata
2. Column (response) marginal totals ${n\_{+1k}, n\_{+2k}}$ are fixed in each stratum
3. Row totals ${n\_{1+k}, n\_{2+k}}$ and overall total $n\_{++k}$ are fixed
4. Common odds ratio across strata: $\theta\_{XY(k)} = \theta$ for all $k$

## Hypotheses

- $H\_0$: Conditional independence (i.e., $\theta = 1$)
- $H\_{1}: \theta\neq1$

## Test statistic

$$\text{CMH} = \frac{\[\sum\_k (n\_{11k} - \mu\_{11k})]^2}{\sum\_k \text{var}(n\_{11k})}$$

where under $H\_0$, treating $n\_{11k}$ as hypergeometric:

$$
\begin{align}
\mu\_{11k}& = E(n\_{11k}) = n\_{1+k} n\_{+1k} / n\_{++k} \ \\

\text{var}(n\_{11k})& = \frac{n\_{1+k} n\_{2+k} n\_{+1k} n\_{+2k}}{n\_{++k}^2 (n\_{++k} - 1)}
\end{align}
$$

## Null distribution

Under $H\_0$, asymptotically:

$$\text{CMH} \sim \chi^2\_1$$
