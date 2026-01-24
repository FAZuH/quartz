---
publish: true
aliases:
  - Joint, Conditional, and Marginal Probability for Contingency Tables
created: 2025-10-14T04:15:27.058+07:00
modified: 2025-10-14T04:15:27.058+07:00
published: 2025-10-14T04:15:27.058+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 06:52
status: baby
parent:
  - "[[categorical-data-analysis]]"
---


Suppose responses $(X,Y)$ of randomly chosen subjects have a probability distribution.

![[assets/image-43.png|Notation for Joint, Conditional, and Marginal Probabilities|449x238]]

## Joint probability

Let $\pi_{ij}$ be the probability that $(X,Y)$ occurs at row $i$ column $j$ in the [[3 Reference/def-contingency-table_202510060649\|contingency table]]. It is also referred to as the **joint probability** of $X$ and $Y$.

After sampling, let
- $n_{ij}$ : Cell frequencies
- $n$ : Total sample size

Then the sample joint probability is
$$
p_{ij}=\frac{n_{ij}}{n}
$$


## Marginal probability

The **marginal distributions** are the row and column totals that result from summing the joint probabilities.

$$
\begin{align}
\pi_{i+} & = \sum_j \pi_{ij} \\
\pi_{+j} & = \sum_i \pi_{ij}
\end{align}
$$

 ## Conditional probability

$$
\pi_{j|i} = \frac{\pi_{ij}}{\pi_{i+}}
$$