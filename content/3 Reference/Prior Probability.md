---
{"publish":true,"created":"2025-07-24T11:50:56.214+07:00","modified":"2025-07-24T11:50:56.215+07:00","published":"2025-07-24T11:50:56.215+07:00","tags":["content-type/conceptual"],"cssclasses":"","creation-time":"2025-03-21 12:07","status":"adult","parent":["[[multivariate analysis]]"]}
---



## About of prior probabilities

Prior probabilities represent the **proportion of observations in each group** before observing new data.

For $k$ groups $G_1, G_2, \dots, G_k$:

- $p_i$: Proportion of observations in group $G_i$, calculated as:  
    $$p_i = \frac{n_i}{N}$$

**Variables**:

- $n_i$: Number of observations in group $G_i$.
- $N$: Total number of observations across all groups, $N = n_1 + n_2 + \dots + n_k$.
- $p_i$: Satisfies $\sum_{i=1}^k p_i = 1$.

**Example**:  

Suppose 70% of freshmen at a university graduate ($G_1$) and 30% do not ($G_2$)

Then:

- $p_1 = 0.7$
- $p_2 = 1 - p_1 = 0.3$