---
publish: true
created: 2026-03-25T15:22:40.661+07:00
modified: 2026-03-25T15:22:40.661+07:00
published: 2026-03-25T15:22:40.661+07:00
tags:
  - content-type/procedural
creation-time: 2025-04-11 12:33
status: complete
parent:
  - "[[statistics]]"
---

## Computing correlation matrix

### 1. Prepare the Data

Ensure your data is clean and suitable for correlation analysis:

- **Collect Numerical Data**: Correlation matrices require numerical variables. Ensure your data set contains at least two variables with continuous or ordinal values.
- **Handle Missing Values**: Remove or impute missing data points to avoid errors in computation.
- **Standardize Variables (Optional)**: For certain correlation methods (e.g., Pearson), standardizing variables to have a mean of 0 and standard deviation of 1 may improve interpretability.

### 2. Choose a Correlation Method

Select the appropriate correlation coefficient based on your data and analysis goals. See [Correlation measurement formulas](#Correlation%20measurement%20formulas).

### 3. Compute the Correlation Matrix

For a data set with $n$ variables, the correlation matrix is an $n \times n$ symmetric matrix where:

- Diagonal elements are 1 (each variable is perfectly correlated with itself).
- Off-diagonal elements $r\_{ij}$ represent the correlation coefficient between variables $i$ and $j$.

Steps:

1. **Calculate Pairwise Correlations**: For each pair of variables $(x\_i, x\_j)$, compute the correlation coefficient using the chosen method.
2. **Construct the Matrix**: Arrange coefficients in a matrix where the element at position $(i, j)$ is $r\_{ij}$.
3. **Verify Symmetry**: Ensure $r\_{ij} = r\_{ji}$, as correlation is symmetric.

### 4. Interpret the Results

- **Range**: Correlation coefficients range from $-1$ to $1$.
  - $1$: Perfect positive correlation.
  - $0$: No correlation.
  - $-1$: Perfect negative correlation.
- **Strength**: Common thresholds (absolute values):
  - $0.00–0.19$: Very weak.
  - $0.20–0.39$: Weak.
  - $0.40–0.59$: Moderate.
  - $0.60–0.79$: Strong.
  - $0.80–1.00$: Very strong.

### 5. Optional steps

- Compute p-values to assess whether correlations are significant.
- Use heatmaps, pairplots, or scatter plots to visualize correlations for better interpretation.

## Correlation measurement formulas

### Pearson Correlation

Measures linear relationships between continuous variables. **Assumes normality**.

$$
\begin{align\*}
r\_{ij} &= \frac{\text{Cov}(X\_i, X\_j)}{\sqrt{\text{Var}(X\_i) \text{Var}(X\_j)}} \\
&= \frac{\sum\_{k=1}^n (x\_{ik} - \bar{x}_i)(x_{jk} - \bar{x}_j)}{\sqrt{\sum_{k=1}^n (x\_{ik} - \bar{x}_i)^2 \sum_{k=1}^n (x\_{jk} - \bar{x}\_j)^2}}
\end{align\*}
$$

**Variables**:

- $r\_{ij}$: Pearson correlation coefficient between variables $X\_i$ and $X\_j$.
- $x\_{ik}$: $k$-th observation of variable $X\_i$.
- $\bar{x}\_i$: Mean of variable $X\_i$.
- $n$: Number of observations.

Where:

- $x\_i, y\_i$: Observations
- $\bar{x}, \bar{y}$: Observation means

### Spearman Correlation

Non-parametric, rank-based method for **monotonic** relationships.

$$\rho = 1 - \frac{6 \sum d\_i^2}{n(n^2 - 1)}$$

Where:

- $d\_i$: Difference between ranks of $x\_i$ and $y\_i$
- $n$: Number of observations

### Kensdall’s Tau

Non-parametric method, suitable for **small samples or ordinal data**.

$$\tau = \frac{2}{n(n-1)} \sum\_{i < j} \text{sgn}(x\_i - x\_j) \text{sgn}(y\_i - y\_j)$$

Where

- $\text{sgn}$ is the sign function  #TODO
- $n$: Number of observations
- $i, j$: index pairs

## Covariance matrix vs correlation matrix

A correlation matrix and a covariance matrix are related but distinct.

- Covariance Matrix:
  - Diagonals: **Variances** of variables ($s\_{ii} = \text{Var}(X\_i)$).
  - Off-diagonals: **Covariances** between variables ($s\_{ij} = \text{Cov}(X\_i, X\_j)$).\
    $$\mathbf{S} = \frac{1}{n-1} \mathbf{X}^\top \mathbf{X}$$

- Correlation Matrix:
  - Diagonals: **Always 1** (since a variable’s correlation with itself is 1).
  - Off-diagonals: **Pearson correlation** coefficients ($r\_{ij} = \frac{\text{Cov}(X\_i, X\_j)}{\sqrt{\text{Var}(X\_i) \text{Var}(X\_j)}}$).\
    $$\mathbf{R} = \text{diag}(\mathbf{S})^{-1/2} \mathbf{S} \text{diag}(\mathbf{S})^{-1/2}$$
    where $\text{diag}(\mathbf{S})^{-1/2}$ is a diagonal matrix with entries $1/\sqrt{s\_{ii}}$.

The correlation matrix standardizes the covariance matrix by dividing each covariance by the product of the standard deviations, resulting in dimensionless correlation coefficients (ranging from -1 to 1).

## Python example

Below is an example of computing a Pearson correlation matrix using a small data set.

```python
import numpy as np

# Sample data
data = np.array([
    [1.0, 2.1, 5.0],
    [2.0, 4.0, 4.0],
    [3.0, 6.2, 3.1],
    [4.0, 8.1, 2.0],
    [5.0, 10.0, 1.0]
])

# Initialize matrix
n = data.shape[1]
corr_matrix = np.zeros((n, n))

# Compute Pearson correlations
for i in range(n):
    for j in range(i, n):
        x = data[:, i]
        y = data[:, j]
        x_mean = np.mean(x)
        y_mean = np.mean(y)
        num = np.sum((x - x_mean) * (y - y_mean))
        denom = np.sqrt(np.sum((x - x_mean)**2) * np.sum((y - y_mean)**2))
        r = num / denom if denom != 0 else 0
        corr_matrix[i, j] = r
        corr_matrix[j, i] = r  # Symmetry
    corr_matrix[i, i] = 1  # Diagonal

print("Correlation Matrix:")
print(np.round(corr_matrix, 6))
```

**Output**:

```
Correlation Matrix:
[[ 1.        0.999659 -0.9996  ]
 [ 0.999659  1.       -0.998657]
 [-0.9996   -0.998657  1.      ]]
```

**Interpretation**

- $X$ and $Y$: Very strong positive ($r \approx 0.9997$).
- $X$ and $Z$: Very strong negative ($r \approx -0.9996$).
- $Y$ and $Z$: Very strong negative ($r \approx -0.9987$).

## Notes

- Ensure data meets assumptions for the chosen correlation method (e.g., normality for Pearson).
- Large correlation matrices may require visualization tools like heatmaps for clarity.
- Libraries like pandas simplify computation but verify results for small or complex data sets.
