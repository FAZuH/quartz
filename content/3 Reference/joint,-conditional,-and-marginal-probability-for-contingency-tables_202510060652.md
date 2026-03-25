---
publish: true
aliases:
  - Joint, Conditional, and Marginal Probability for Contingency Tables
created: 2026-03-25T15:22:40.616+07:00
modified: 2026-03-25T15:22:40.616+07:00
published: 2026-03-25T15:22:40.616+07:00
tags:
  - 
creation-time: 2025-10-06 06:52
status: in progress
parent:
  - "[[categorical-data-analysis]]"
---

Suppose responses $(X,Y)$ of randomly chosen subjects have a probability distribution.

![[assets/image-43.png|Notation for Joint, Conditional, and Marginal Probabilities|449x238]]

## Joint probability

Let $\pi\_{ij}$ be the probability that $(X,Y)$ occurs at row $i$ column $j$ in the [[def-contingency-table_202510060649|contingency table]]. It is also referred to as the **joint probability** of $X$ and $Y$.

After sampling, let

- $n\_{ij}$ : Cell frequencies
- $n$ : Total sample size

Then the sample joint probability is
$$
p\_{ij}=\frac{n\_{ij}}{n}
$$

## Marginal probability

The **marginal distributions** are the row and column totals that result from summing the joint probabilities.

$$
\begin{align}
\pi\_{i+} & = \sum\_j \pi\_{ij} \\
\pi\_{+j} & = \sum\_i \pi\_{ij}
\end{align}
$$

## Conditional probability

$$
\pi\_{j|i} = \frac{\pi\_{ij}}{\pi\_{i+}}
$$
