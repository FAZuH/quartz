---
publish: true
created: 2026-03-25T15:22:40.639+07:00
modified: 2026-03-25T15:22:40.639+07:00
published: 2026-03-25T15:22:40.639+07:00
tags:
  - content-type/conceptual
creation-time: 2025-03-21 12:07
status: complete
parent:
  - "[[multivariate analysis]]"
---

## About of prior probabilities

Prior probabilities represent the **proportion of observations in each group** before observing new data.

For $k$ groups $G\_1, G\_2, \dots, G\_k$:

- $p\_i$: Proportion of observations in group $G\_i$, calculated as:\
  $$p\_i = \frac{n\_i}{N}$$

**Variables**:

- $n\_i$: Number of observations in group $G\_i$.
- $N$: Total number of observations across all groups, $N = n\_1 + n\_2 + \dots + n\_k$.
- $p\_i$: Satisfies $\sum\_{i=1}^k p\_i = 1$.

**Example**:

Suppose 70% of freshmen at a university graduate ($G\_1$) and 30% do not ($G\_2$)

Then:

- $p\_1 = 0.7$
- $p\_2 = 1 - p\_1 = 0.3$
