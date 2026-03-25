---
publish: true
created: 2026-03-25T15:22:40.606+07:00
modified: 2026-03-25T15:22:40.606+07:00
published: 2026-03-25T15:22:40.606+07:00
creation-time: 2025-04-23 12:26
status: in progress
tags:
parent:
  - "[[sampling methods]]"
---

## About cluster Random Sampling

Cluster random sampling is a probability sampling technique used when a complete list of individuals (sampling frame) is unavailable, but clusters (groups) can be identified.

## When to Use

- Suitable when populations lack individual lists (e.g., students across Jakarta universities).
- Example: Surveying opinions of UI students vs. all Jakarta students—UI has a list, Jakarta does not.

## Procedure

1. **Identify clusters**: Define groups (e.g., universities, hospitals) containing individuals.
2. **Select clusters randomly**: Choose a subset of clusters (e.g., 4 out of 50 universities).
3. **Sample within clusters**: Randomly select individuals from chosen clusters using simple, systematic, or stratified sampling.

## Advantages

1. Reduces effort compared to sampling all individuals across a population.
2. Feasible when individual data is inaccessible (e.g., only cluster lists exist).

## Parameter Estimation

- Population size $N$ split into $M$ clusters, sizes $N\_1, N\_2, \dots, N\_M$.
- Sample $m$ clusters, sizes $n\_1, n\_2, \dots, n\_m$, total sample $n = n\_1 + n\_2 + \dots + n\_m$.
- **Total estimator**: $\hat{X} = \frac{M}{m} \sum\_{i=1}^m \frac{N\_i}{n\_i} \sum\_{j=1}^{n\_i} x\_{ij}$.
- **Mean estimator**: $\bar{\hat{X}} = \frac{\hat{X}}{N}$.
- Unbiased: $E(\hat{X}) = X$.

## Variance Analysis

- Variance: $V(\hat{X}) = M^2 \left( \frac{M - m}{M} \frac{S\_b^2}{m} \right) + \frac{M}{m} \sum\_{i=1}^M N\_i^2 \left( \frac{N\_i - n\_i}{N\_i} \frac{S\_i^2}{n\_i} \right)$.
- $S\_b^2$: Between-cluster variance.
- $S\_i^2$: Within-cluster variance.
- Estimator: $\hat{V}(\hat{X})$ uses sample variances $s\_b^2$ and $s\_i^2$, unbiased for $V(\hat{X})$.

## Sample Allocation

- **Optimum allocation**: Minimize variance given cost $c = c\_1 m + c\_2 m \bar{n}$.
- Result: $\bar{n} = \sqrt{\frac{c\_1 S\_{2i}^2}{c\_2 S\_{1b}^2}}$, $m = \frac{c}{c\_1 + c\_2 \bar{n}}$.
