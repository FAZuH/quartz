---
publish: true
aliases:
  - Rangkuman Minggu 4
created: 2026-02-22T19:23:58.256+07:00
modified: 2026-02-22T19:23:58.257+07:00
published: 2026-02-22T19:23:58.257+07:00
tags:
  - 
creation-time: 2025-09-16 10:51
status: archived
parent:
  - "[[ekonometri_202509051027]]"
---

## Multiple regression model

$$
Y = \beta\_0 + \beta\_1X\_{1i} + \dots + \beta\_k X\_{ki} + \epsilon; \quad \epsilon \sim NIID(0, \sigma^2)
$$

Where:

- $Y :$  Response variable
- $X\_j :$  $j$-th predictor variable
- $\beta\_0 :$  Intercept
- $\beta\_j :$  $j$-th regression coefficient
- $\epsilon :$  Error term
- $k$ : Amount of predictor variables

Or in matrix form:
$$
\begin{align}
\begin{bmatrix} y\_1 \ y\_2 \ \vdots \ y\_n \end{bmatrix}
& = \begin{bmatrix}
1 & x\_{11} & x\_{12} & \cdots & x\_{1k} \\
1 & x\_{21} & x\_{22} & \cdots & x\_{2k} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x\_{n1} & x\_{n2} & \cdots & x\_{nk}
\end{bmatrix}
\begin{bmatrix} \beta\_0 \ \beta\_1 \ \vdots \ \beta\_k \end{bmatrix}
\+
\begin{bmatrix} u\_1 \ u\_2 \ \vdots \ u\_n \end{bmatrix} \\
\mathbf{y} & = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon}

\end{align}
$$

### Model interpretation

#### The slope

- $\beta\_0$ is the mean value of $Y$ at $X\_1=X\_2=\dots=X\_p = 0$

#### The regression coefficients

For an increase in $X\_i$ by 1 unit, then mean of $y$ increases by $\beta\_i$ (assuming other predictors are constant)

It can be written mathematically as
$$
\frac{\nabla E\[y\_{i}|x\_{i}]}{\nabla x\_{k}} = \beta\_{k}, \quad \nabla x\_{k}=1
$$
Or for continuous regressors:
$$
\frac{\partial E\[y\_{i}|x\_{i}]}{\partial x\_{ik}} = \beta\_{k}
$$

### Model assumptions

- Predictor ($X$) does not depend upon $\epsilon$ ($\operatorname{Cov}(\epsilon\_{i},X\_{ji})=0$)
- No autocorrelation or serial correlation between the errors ($\operatorname{Cov}(\epsilon\_{i},\epsilon\_{j}), i\neq j$)
- No collinearity or multicollinearity between the predictors ($X$)
- $\epsilon \sim NIID(0,\sigma^2)$

  Or, in other words, the error term of the model are:

  - Normally distributed
  - Mutually independent
  - Mean of  is 0 ($E(\epsilon\_i) = 0$)
  - Homoscedasticity: Variance of $\varepsilon\_i$ is constant ($Var(\epsilon\_i) = \sigma^2$)

### F-test

All tests in simple linear regression also applies for multiple linear regression.

There is a difference in the F-test used to test the model fit.

The hypothesis for this test is:
$$
\begin{align}
H\_{0} &: \beta\_{1} = \beta\_{2} = \dots = \beta\_{k}=0 \\
H\_{1} &: \exists \beta\_{j}\neq 0: j\in{1,2,\dots,k}
\end{align}
$$

The statistic for this test is:
$$
\begin{align}
F & = \frac{SSR/k}{SSE/\[n-(k+1)]} \\
& = \frac{R^2/k}{(1-R^2)/\[n-(k+1)]}
\end{align}
$$

## Heteroscedasticity and Autocorrelation

### Gauss-Markov assumptions

Observation $y\_{i}$ is a linear function $y\_{i}=x\_{i}'\beta+\epsilon\_{i}$ of observations $x\_{ik}, k=1,\dots,K$ of the predictors and the error term $\epsilon$ for $i=1,\dots,N;x\_{i}'=(x\_{i1},\dots,x\_{iK});X=(x\_{ik})$

- A1. $E\[\epsilon]=0,\forall i\in { 1,\dots,N }$
- A2. All $\epsilon\_{i}$ are independent of all $x\_{i}$ (exogeneous $x\_{i}$)
- A3. $\operatorname{Var}(\epsilon\_{i})=\sigma^2,\forall i\in { 1,\dots,N }$ (Homoscedasticity)
- A4. $\operatorname{Cov}(\epsilon\_{i},\epsilon\_{j})=0,\forall i,j\in { 1,\dots,N },i\neq j$ (No autocorrelation)

These assumptions results in the OLS estimator being BLUE (best linear unbiased estimator).

### Properties of OLS estimator

Let $b$ : OLS estimator.

Based on Gauss-Markov assumptions:

1. $b$ is unbiased: $E\[b]=\beta$ (Under A1 and A2)
2. $\operatorname{Var}(b)=\sigma^2(\Sigma\_{i}x\_{i}x\_{i}')^{-1}=\sigma(X'X)^{-1}$ (Under A1, A2, A3, A4)
3. The sampling variance $s^2$ of the error terms $\epsilon\_{i}$ ($s^2=(N-K)^{-1}\Sigma\_{i}\epsilon\_{i}^2$) is unbiased for $\sigma^2$
4. $b$ is BLUE (best linear unbiased estimator)

Because $b$ is BLUE, the regression model is valid and efficient, with minimum variance between all other linear unbiasead estimators.

### Heteroscedasticity

Violation of the Gauss-Markov assumption A3 where $\operatorname{Var}(\varepsilon\_i) = \sigma^2$ for all i. Instead, variance differs across observations: $\operatorname{Var}(\varepsilon) = \text{diag}(\sigma\_1^2, \ldots, \sigma\_N^2)$ where $\sigma\_i^2 \neq \sigma^2$ for at least one pair $i \neq j$.

**Detection Methods**:

- Visual inspection using residual plots (`plot()` function)
- **Breusch-Pagan Test**: Tests $H\_0$: homoscedasticity vs $H\_1$: heteroscedasticity
  - Command: `bptest(model)`
  - Example result: BP = 615.86, df = 4, p-value < 2.2e-16 → reject $H\_0$, heteroscedasticity present

**Typical Occurrence**:

- Cross-sectional survey data (households, regions)
- Variance dependent on explanatory variables (firm turnover vs size)
- Financial market data (exchange rates, stock returns)

### Autocorrelation

Violation of Gauss-Markov assumption A4 where $\operatorname{Cov}(\varepsilon\_i, \varepsilon\_j) = 0$ for all $i \neq j$. Instead, $\operatorname{Var}(\varepsilon) = \sigma^2\Omega$ with non-zero off-diagonal elements.

**Detection Methods**:

1. **Autocorrelation Function**: `acf(model$residuals, type = "correlation")`

2. **Durbin-Watson Test**:
   - $H\_0$: no residual autocorrelation
   - Command: `dwtest(model)`
   - Example: DW = 1.6734, p-value = 0.03745 → reject $H\_0$

3. **Breusch-Godfrey Test**:
   - $H\_0$: no autocorrelation
   - Command: `bgtest(model, order = 3)`
   - Example: LM = 9.1925, df = 3, p-value = 0.02684 → reject $H\_0$
