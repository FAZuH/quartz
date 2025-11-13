---
{"publish":true,"aliases":["Cochran-Mantel-Haenszel Test of Conditional Independence"],"created":"2025-11-24T08:59:32.966+07:00","modified":"2025-11-24T09:33:13.085+07:00","published":"2025-11-24T09:33:13.085+07:00","tags":[null],"cssclasses":"","creation-time":"2025-11-24 08:59","status":"baby","parent":["[[categorical-data-analysis]]"]}
---


# Cochran-Mantel-Haenszel Test of Conditional Independence

## Data

Observations from $K$ strata. Within stratum $k$, a $2 \times 2$ contingency table with cell counts ${n_{ijk}}$ where $i,j \in {1,2}$ index the row and column:

$$
\begin{array}{c|cc|c}
 & \text{Col 1} & \text{Col 2} &  \\
 \hline \text{Row 1} & n_{11k} & n_{12k} & n_{1+k}  \\
 \text{Row 2} & n_{21k} & n_{22k} & n_{2+k}  \\
 \hline & n_{+1k} & n_{+2k} & n_{++k} 
\end{array}$$

## Assumptions

1. Independence across strata
2. Column (response) marginal totals ${n_{+1k}, n_{+2k}}$ are fixed in each stratum
3. Row totals ${n_{1+k}, n_{2+k}}$ and overall total $n_{++k}$ are fixed
4. Common odds ratio across strata: $\theta_{XY(k)} = \theta$ for all $k$

## Hypotheses

- $H_0$: Conditional independence (i.e., $\theta = 1$)
- $H_{1}: \theta\neq1$

## Test statistic

$$\text{CMH} = \frac{[\sum_k (n_{11k} - \mu_{11k})]^2}{\sum_k \text{var}(n_{11k})}$$

where under $H_0$, treating $n_{11k}$ as hypergeometric:

$$
\begin{align}
\mu_{11k}& = E(n_{11k}) = n_{1+k} n_{+1k} / n_{++k} \\ \\

\text{var}(n_{11k})& = \frac{n_{1+k} n_{2+k} n_{+1k} n_{+2k}}{n_{++k}^2 (n_{++k} - 1)}
\end{align}
$$

## Null distribution

Under $H_0$, asymptotically:

$$\text{CMH} \sim \chi^2_1$$