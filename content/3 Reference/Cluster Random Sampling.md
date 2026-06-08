---
publish: true
created: 2026-04-09T23:07:39.043+07:00
modified: 2026-04-09T23:07:39.044+07:00
published: 2026-04-09T23:07:39.044+07:00
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

- Population size $N$ split into $M$ clusters, sizes $N_1, N_2, \dots, N_M$.
- Sample $m$ clusters, sizes $n_1, n_2, \dots, n_m$, total sample $n = n_1 + n_2 + \dots + n_m$.
- **Total estimator**: $\hat{X} = \frac{M}{m} \sum_{i=1}^m \frac{N_i}{n_i} \sum_{j=1}^{n_i} x_{ij}$.
- **Mean estimator**: $\bar{\hat{X}} = \frac{\hat{X}}{N}$.
- Unbiased: $E(\hat{X}) = X$.

## Variance Analysis

- Variance: $V(\hat{X}) = M^2 \left( \frac{M - m}{M} \frac{S_b^2}{m} \right) + \frac{M}{m} \sum_{i=1}^M N_i^2 \left( \frac{N_i - n_i}{N_i} \frac{S_i^2}{n_i} \right)$.
- $S_b^2$: Between-cluster variance.
- $S_i^2$: Within-cluster variance.
- Estimator: $\hat{V}(\hat{X})$ uses sample variances $s_b^2$ and $s_i^2$, unbiased for $V(\hat{X})$.

## Sample Allocation

- **Optimum allocation**: Minimize variance given cost $c = c_1 m + c_2 m \bar{n}$.
- Result: $\bar{n} = \sqrt{\frac{c_1 S_{2i}^2}{c_2 S_{1b}^2}}$, $m = \frac{c}{c_1 + c_2 \bar{n}}$.
