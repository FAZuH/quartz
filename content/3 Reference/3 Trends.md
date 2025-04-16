---
{"creation-time":"2025-03-27 15:50","status":"baby","tag":null,"parent":["[[time series analysis]]"],"publish":true,"PassFrontmatter":true}
---


This note:
- Explores trends in time series
- Distinguishing between deterministic and stochastic trends
- Provides methods for modeling and estimating deterministic trends, including:
	- Constant means
	- Linear/quadratic trends
	- Seasonal/cosine trends. 
- Regression reliability
- Output interpretation
- Residual analysis.

## Deterministic vs stochastic trends

Time series means can range from arbitrary (general case) to constant (stationary case).

Trends represent a middle ground—simple, non-constant mean functions.

**Stochastic trends** (e.g., random walk) arise from correlation and increasing variance, not a true mean shift, and vary across simulations.

**Deterministic trends** have a fixed form, e.g., periodic ($\mu_t = \mu_{t-12}$) as in monthly temperatures, or linear ($\mu_t = \beta_0 + \beta_1 t$). The model $Y_t = \mu_t + X_t$, with $E(X_t) = 0$, assumes $\mu_t$ holds for all time, requiring justification.

## Estimation of a constant mean

For $Y_t = \mu + X_t$, where $E(X_t) = 0$, the sample mean $\bar{Y} = \frac{1}{n} \sum_{t=1}^n Y_t$ is unbiased ($E(\bar{Y}) = \mu$). Variance depends on $X_t$’s structure:

- **Stationary $X_t$ with autocorrelation $\rho_k$**:
  $$ \operatorname{Var}(\bar{Y}) = \frac{\gamma_0}{n} \left[1 + 2 \sum_{k=1}^{n-1} \left(1 - \frac{k}{n}\right) \rho_k\right] $$
  - White noise ($\rho_k = 0, k > 0$): $\operatorname{Var}(\bar{Y}) = \frac{\gamma_0}{n}$.
  - Moving average $Y_t = e_t - \frac{1}{2} e_{t-1}$ ($\rho_1 = -0.4$, $\rho_k = 0, k > 1$): $\operatorname{Var}(\bar{Y}) \approx 0.2 \frac{\gamma_0}{n}$ for large $n$, improved by negative correlation.
  - If $\rho_k \geq 0$, variance exceeds white noise case.
  - For $\sum_{k=0}^\infty \vert \rho_k \vert < \infty$, large $n$: $\operatorname{Var}(\bar{Y}) \approx \frac{\gamma_0}{n} \sum_{k=-\infty}^\infty \rho_k$, e.g., $\rho_k = \phi^{\vert k \vert}$ yields $\frac{\gamma_0}{n} \frac{1 + \phi}{1 - \phi}$.

- **Nonstationary $X_t$ (Random Walk)**:
	
	| Property | Expression                                                           |
	| -------- | -------------------------------------------------------------------- |
	| Model    | $Y_t = \sum_{j=1}^t e_j$                                             |
	| Mean     | $E(\bar{Y}) = 0$                                                     |
	| Variance | $\operatorname{Var}(\bar{Y}) = \sigma_e^2 (2n + 1) \frac{n + 1}{6n}$ |
	
## Regression methods

Regression estimates deterministic trends via least squares.

- **Linear Trend**: $\mu_t = \beta_0 + \beta_1 t$, minimized via $Q(\beta_0, \beta_1) = \sum_{t=1}^n [Y_t - (\beta_0 + \beta_1 t)]^2$:
  $$ \hat{\beta}_1 = \frac{\sum_{t=1}^n (Y_t - \bar{Y})(t - \bar{t})}{\sum_{t=1}^n (t - \bar{t})^2}, \quad \hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{t}, \quad \bar{t} = \frac{n + 1}{2} $$
  Example: Random walk fit yields $\hat{\beta}_0 = -1.008$, $\hat{\beta}_1 = 0.1341$.

- **Seasonal Means**: For monthly data, $\mu_t = \beta_j$ (e.g., $j = 1$ for January):
$$ \mu_t = \begin{cases} 
\beta_1, t = 1, 13, 25, \ldots \\
\beta_2, t = 2, 14, 26, \ldots \\
\vdots \\
\beta_{12}, t = 12, 24, 36, \ldots 
\end{cases} $$
  Estimates are monthly averages; e.g., temperature data fit gives $\beta_1 = 16.608$ (January).

- **Cosine Trends**: $\mu_t = \beta_0 + \beta_1 \cos(2\pi f t) + \beta_2 \sin(2\pi f t)$, $f = 1/12$ for monthly data. Example: Temperature fit yields $\hat{\beta}_0 = 46.2660$, $\hat{\beta}_1 = -26.7079$, $\hat{\beta}_2 = -2.1697$.

## Reliability and efficiency of regression estimates

For $Y_t = \mu_t + X_t$, $E(X_t) = 0$, $X_t$ stationary with $\gamma_k$, $\rho_k$:

- **Seasonal Means**:
  
  | Property         | Expression                          |
  |------------------|-------------------------------------|
  | Estimate         | $\hat{\beta}_j = \frac{1}{N} \sum_{i=0}^{N-1} Y_{j + 12i}$ |
  | Variance         | $\operatorname{Var}(\hat{\beta}_j) = \frac{\gamma_0}{N} \left[1 + 2 \sum_{k=1}^{N-1} \left(1 - \frac{k}{N}\right) \rho_{12k}\right]$ |
  White noise: $\gamma_0 / N$.

- **Cosine Trends**:

  | Property         | Expression                          |
  |------------------|-------------------------------------|
  | Estimate         | $\hat{\beta}_1 = \frac{2}{n} \sum_{t=1}^n \cos\left(\frac{2\pi m t}{n}\right) Y_t$ |
  | Variance         | $\operatorname{Var}(\hat{\beta}_1) = \frac{2 \gamma_0}{n} \left[1 + \frac{4}{n} \sum_{s=2}^n \sum_{t=1}^{s-1} \cos\left(\frac{2\pi m t}{n}\right) \cos\left(\frac{2\pi m s}{n}\right) \rho_{s-t}\right]$ |
  White noise: $2 \gamma_0 / n$. For $\rho_1 = -0.4$, large $n$: reduced by ~70%.

- **Linear Trend**:

  | Property         | Expression                          |
  |------------------|-------------------------------------|
  | Estimate         | $\hat{\beta}_1 = \frac{\sum_{t=1}^n (t - \bar{t}) Y_t}{\sum_{t=1}^n (t - \bar{t})^2}$ |
  | Variance         | $\operatorname{Var}(\hat{\beta}_1) = \frac{12 \gamma_0}{n (n^2 - 1)} \left[1 + \frac{24}{n (n^2 - 1)} \sum_{s=2}^n \sum_{t=1}^{s-1} (t - \bar{t})(s - \bar{t}) \rho_{s-t}\right]$ |
  For $\rho_1 \neq 0$, $\rho_k = 0, k > 1$, large $n$: $\frac{12 \gamma_0 (1 + 2 \rho_1)}{n (n^2 - 1)}$.

Least squares is asymptotically efficient for large $n$ compared to best linear unbiased estimates (BLUE), but standard errors assume white noise.

## Interpreting regression output

Regression output (e.g., random walk fit) includes $\hat{\beta}_0$, $\hat{\beta}_1$, standard errors, $t$-values, $R^2$ (e.g., 0.812), and residual standard error $s = \sqrt{\frac{1}{n-p} \sum_{t=1}^n (Y_t - \hat{\mu}_t)^2}$.

Standard errors and $t$-values assume white noise and normality, often invalid for time series.

## Residual Analysis

Residuals $\hat{X}_t = Y_t - \hat{\mu}_t$ assess model fit. For temperature seasonal means:
- Plots (time, fitted values, histogram, QQ) show no trends, approximate normality (Shapiro-Wilk $W = 0.9929$, $p = 0.6954$).
- Runs test ($p = 0.216$) and sample autocorrelation $r_k = \frac{\sum_{t=k+1}^n (Y_t - \bar{Y})(Y_{t-k} - \bar{Y})}{\sum_{t=1}^n (Y_t - \bar{Y})^2}$ suggest independence.
For random walk linear fit: residuals show dependence (high $r_1$, $r_2$).

## Python example

### Estimating a Constant Mean and Variance

```python
import numpy as np

# Simulate a stationary series with constant mean
np.random.seed(42)
n = 100
mu = 5
e_t = np.random.normal(0, 1, n)  # White noise
Y_t = mu + e_t

# Sample mean
Y_bar = np.mean(Y_t)
print(f"Sample Mean: {Y_bar:.3f}")

# Variance of sample mean (white noise case)
gamma_0 = np.var(e_t, ddof=1)
var_Y_bar = gamma_0 / n
print(f"Variance of Sample Mean (White Noise): {var_Y_bar:.3f}")
```

This code simulates a stationary time series $Y_t = \mu + e_t$ with $\mu = 5$ and white noise $e_t$, then computes the sample mean and its variance under the white noise assumption.

### Fitting a Linear Trend with Least Squares

```python
import numpy as np
import statsmodels.api as sm
import matplotlib.pyplot as plt

# Simulate a series with a linear trend
np.random.seed(42)
t = np.arange(1, 101)
beta_0, beta_1 = 2, 0.1
e_t = np.random.normal(0, 1, 100)
Y_t = beta_0 + beta_1 * t + e_t

# Fit linear trend
X = sm.add_constant(t)  # Add intercept term
model = sm.OLS(Y_t, X).fit()
print(model.summary())

# Plot
plt.plot(t, Y_t, 'o', label='Data')
plt.plot(t, model.fittedvalues, '-', label='Linear Fit')
plt.xlabel('Time')
plt.ylabel('Y_t')
plt.legend()
plt.show()
```

This example generates a series with a linear trend $Y_t = 2 + 0.1t + e_t$, fits it using OLS regression, and plots the data with the fitted line.

### Seasonal Means Model for Monthly Data
```python
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt

# Simulate monthly data with seasonal means
np.random.seed(42)
n_years = 5
t = np.arange(1, 12 * n_years + 1)
season = np.tile(np.arange(1, 13), n_years)
beta = np.array([10, 12, 15, 18, 20, 22, 21, 19, 16, 13, 11, 10])  # Seasonal means
e_t = np.random.normal(0, 1, len(t))
Y_t = beta[season - 1] + e_t

# Fit seasonal means model (no intercept)
df = pd.DataFrame({'Y': Y_t, 'Month': season})
X = pd.get_dummies(df['Month'], drop_first=False)  # Indicator variables
model = sm.OLS(df['Y'], X).fit()
print(model.summary())

# Plot residuals
plt.plot(t, model.resid, 'o')
plt.xlabel('Time')
plt.ylabel('Residuals')
plt.show()
```

This simulates monthly data with distinct seasonal means, fits a seasonal means model using dummy variables, and plots the residuals.

### Cosine Trend Fit
```python
import numpy as np
import statsmodels.api as sm
import matplotlib.pyplot as plt

# Simulate data with cosine trend
np.random.seed(42)
t = np.arange(1, 61)
beta_0, beta_1, beta_2 = 10, 5, 2
f = 1 / 12  # Monthly frequency
Y_t = beta_0 + beta_1 * np.cos(2 * np.pi * f * t) + beta_2 * np.sin(2 * np.pi * f * t) + np.random.normal(0, 1, 60)

# Fit cosine trend
X = sm.add_constant(np.column_stack((np.cos(2 * np.pi * f * t), np.sin(2 * np.pi * f * t))))
model = sm.OLS(Y_t, X).fit()
print(model.summary())

# Plot
plt.plot(t, Y_t, 'o', label='Data')
plt.plot(t, model.fittedvalues, '-', label='Cosine Fit')
plt.xlabel('Time')
plt.ylabel('Y_t')
plt.legend()
plt.show()
```

This generates a series with a cosine trend $Y_t = 10 + 5 \cos(2\pi t / 12) + 2 \sin(2\pi t / 12) + e_t$, fits it, and visualizes the fit.

### Residual Analysis with Autocorrelation
```python
import numpy as np
import statsmodels.api as sm
from statsmodels.graphics.tsaplots import plot_acf
import matplotlib.pyplot as plt

# Simulate a random walk (nonstationary)
np.random.seed(42)
n = 100
e_t = np.random.normal(0, 1, n)
Y_t = np.cumsum(e_t)

# Fit linear trend
t = np.arange(1, n + 1)
X = sm.add_constant(t)
model = sm.OLS(Y_t, X).fit()

# Standardized residuals
resid = model.resid / np.std(model.resid, ddof=1)

# Plot residuals
plt.plot(t, resid, 'o')
plt.xlabel('Time')
plt.ylabel('Standardized Residuals')
plt.show()

# Autocorrelation function
plot_acf(resid, lags=20)
plt.show()
```

This simulates a random walk, fits a linear trend, computes standardized residuals, and plots both the residuals and their sample autocorrelation function to check for dependence.
