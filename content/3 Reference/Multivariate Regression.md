---
{"publish":true,"tags":["content-type/combined"],"cssclasses":""}
---


## About multivariate regression

Multivariate regression models the linear relationship between multiple independent variables ($X$) and one or more dependent variables ($Y$).

The goal is to **predict $Y$ using a linear combination of predictors and understand their collective impact**, such as predicting house prices from features like size and age.

## Computing regression coefficients
Steps to compute regression coefficients:
1. Prepare the data matrix $X$, adding a column of ones for the intercept.
2. Calculate coefficients using the least squares method with [Formula 10.5](#Core%20Formulas): $\hat{\beta}=(X'X)^{-1}X'Y$, where $X'$ is the transpose of $X$, and $(X'X)^{-1}$ is the inverse of $X'X$.

The model should look like:
$$
\begin{align}
\begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix} &=

\begin{pmatrix}
1 & x_{11} & x_{12} & \cdots & x_{1q} \\
1 & x_{21} & x_{22} & \cdots & x_{2q} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_{n1} & x_{n2} & \cdots & x_{nq}
\end{pmatrix}

\begin{pmatrix} \beta_0 \\ \beta_1 \\ \vdots \\ \beta_q \end{pmatrix}
+
\begin{pmatrix} \epsilon_1 \\ \epsilon_2 \\ \vdots \\ \epsilon_n \end{pmatrix}\\

Y &= X\boldsymbol{\beta} + \boldsymbol{\epsilon}
\end{align}
$$

Coefficients $\hat{\beta}$ to indicates each predictor's effect on $Y$, holding others constant. Positive coefficients increase $Y$, negative ones decrease it.

## Computing predicted values

Use the linear equation [Formula 10.3](#Core%20Formulas): $\hat{Y}=X\hat{\beta}$.

$\hat{Y}$ is matrix of predicted values.

## Evaluating model performance

1. Compute Sum of Squared Errors (SSE) using [Formula 10.6](#Core%20Formulas).
2. Estimate variance with [Formula 10.8](#Core%20Formulas), where $n$ is the number of observations and $q$ is the number of predictors.
3. Calculate R-squared using [Formula 10.30](#Core%20Formulas) to measure variance explained.
4. Derive Root Mean Squared Error (RMSE) as $\sqrt{\text{SSE}/n}$.

R-squared  shows model fit, while RMSE measures prediction error.

**High RMSE or low R-squared suggests an issue in data/model.**

## Assumptions

- Linearity between $X$ and $Y$
- Errors are independent, and identically distributed with zero mean and constant variance.

## Core formulas

- Formula 10.3 (Predicted values): $$\hat{Y}=X\hat{\beta}$$ 
- Formula 10.5 (Coefficient estimation): $$\hat{\beta}=(X'X)^{-1}X'Y$$ 
- Formula 10.6 (Sum of squared errors): $$\text{SSE}=(Y-X\hat{\beta})'(Y-X\hat{\beta})$$ 
- Formula 10.8 (Variance estimate): $$s^2=\frac{\text{SSE}}{n-q-1}$$ 
- Formula 10.30 (R-squared): $$R^2= \frac{\hat{\beta}'X'Y-n\bar{Y}^2}{Y'Y-n\bar{Y}^2}$$ 

## Limitations
- Assumes linear relationships.
- Sensitive to multicollinearity.
- Needs $n>q+1$ for stable $X'X$ inversion.
- Outliers or non-normal errors can skew results.

## Python example

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 1. Membuat dataset sintetis
np.random.seed(42)
n_samples = 100
data = {
    'Luas_Tanah': np.random.normal(200, 50, n_samples),
    'Jumlah_Kamar': np.random.randint(2, 6, n_samples),
    'Usia_Rumah': np.random.randint(1, 30, n_samples),
    'Harga_Rumah': np.zeros(n_samples)
}

for i in range(n_samples):
    data['Harga_Rumah'][i] = (data['Luas_Tanah'][i] * 2.5 + 
                             data['Jumlah_Kamar'][i] * 50 + 
                             data['Usia_Rumah'][i] * -10 + 
                             np.random.normal(0, 50))

df = pd.DataFrame(data)

# 2. Preprocessing
X = df[['Luas_Tanah', 'Jumlah_Kamar', 'Usia_Rumah']].values
y = df['Harga_Rumah'].values
X = np.hstack([np.ones((n_samples, 1)), X])

# Membagi data
np.random.seed(42)
indices = np.random.permutation(n_samples)
train_size = int(0.8 * n_samples)
train_indices = indices[:train_size]
test_indices = indices[train_size:]

X_train = X[train_indices]
X_test = X[test_indices]
y_train = y[train_indices]
y_test = y[test_indices]

# 3. Menghitung koefisien regresi (Formula 10.5)
X_train_T = X_train.T
XtX = np.dot(X_train_T, X_train)
XtX_inv = np.linalg.inv(XtX)
Xty = np.dot(X_train_T, y_train)
beta_hat = np.dot(XtX_inv, Xty)

# 4. Prediksi (Formula 10.3)
y_pred_train = np.dot(X_train, beta_hat)
y_pred_test = np.dot(X_test, beta_hat)

# 5. Menghitung metrik evaluasi
# SSE (Formula 10.6)
SSE = np.sum((y_test - y_pred_test) ** 2)

# s² (Formula 10.8)
n, q = X_test.shape[0], X_test.shape[1] - 1
s_squared = SSE / (n - q - 1)

# R² (Formula 10.30) - Corrected
y_mean = np.mean(y_train)
n_train = len(y_train)  # Use training set size
SSR = np.dot(beta_hat.T, np.dot(X_train_T, y_train)) - n_train * y_mean**2
SSTO = np.sum((y_train - y_mean)**2)
R_squared = SSR / SSTO

# RMSE
RMSE = np.sqrt(SSE / n)

# 6. Menampilkan hasil
print("Koefisien Regresi (β̂):")
print(f"Intercept (β₀): {beta_hat[0]:.2f}")
for i, feature in enumerate(['Luas_Tanah', 'Jumlah_Kamar', 'Usia_Rumah']):
    print(f"{feature} (β{i+1}): {beta_hat[i+1]:.2f}")
print(f"\nMetrik Evaluasi:")
print(f"R-squared (R²): {R_squared:.2f}")
print(f"Root Mean Squared Error (RMSE): {RMSE:.2f}")

# 7. Visualisasi hasil
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred_test, color='blue', alpha=0.5)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
plt.xlabel('Harga Aktual')
plt.ylabel('Harga Prediksi')
plt.title('Harga Rumah Aktual vs Prediksi (Manual Calculation)')
plt.tight_layout()
plt.savefig('house_price_prediction_manual_corrected.png')
plt.close()

# 8. Prediksi untuk data baru
new_house = np.array([1, 250, 4, 5])
predicted_price = np.dot(new_house, beta_hat)
print(f"\nPrediksi harga untuk rumah baru: ${predicted_price:.2f}")
```