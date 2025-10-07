---
{"publish":true,"aliases":["Rangkuman Minggu 4"],"created":"2025-09-16T10:51:54.947+07:00","modified":"2025-10-05T19:35:25.424+07:00","published":"2025-10-05T19:35:25.424+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-16 10:51","status":"archived","parent":["[[ekonometri_202509051027]]"]}
---


## Multiple regression model

$$
Y = \beta_0 + \beta_1X_{1i} + \dots + \beta_k X_{ki} + \epsilon; \quad \epsilon \sim NIID(0, \sigma^2)
$$

Where:
- $Y :$  Response variable
- $X_j :$  $j$-th predictor variable
- $\beta_0 :$  Intercept
- $\beta_j :$  $j$-th regression coefficient
- $\epsilon :$  Error term
- $k$ : Amount of predictor variables

Or in matrix form:
$$
\begin{align}
\begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}
& = \begin{bmatrix}
1 & x_{11} & x_{12} & \cdots & x_{1k} \\
1 & x_{21} & x_{22} & \cdots & x_{2k} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_{n1} & x_{n2} & \cdots & x_{nk}
\end{bmatrix}
\begin{bmatrix} \beta_0 \\ \beta_1 \\ \vdots \\ \beta_k \end{bmatrix}
+
\begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{bmatrix} \\
\mathbf{y} & = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon}
 
\end{align}
$$


### Model interpretation

#### The slope
-  $\beta_0$ is the mean value of $Y$ at $X_1=X_2=\dots=X_p = 0$

#### The regression coefficients

For an increase in $X_i$ by 1 unit, then mean of $y$ increases by $\beta_i$ (assuming other predictors are constant)

It can be written mathematically as
$$
\frac{\nabla E[y_{i}|x_{i}]}{\nabla x_{k}} = \beta_{k}, \quad \nabla x_{k}=1
$$
Or for continuous regressors:
$$
\frac{\partial E[y_{i}|x_{i}]}{\partial x_{ik}} = \beta_{k}
$$

### Model assumptions

- Predictor ($X$) does not depend upon $\epsilon$ ($\operatorname{Cov}(\epsilon_{i},X_{ji})=0$)
- No autocorrelation or serial correlation between the errors ($\operatorname{Cov}(\epsilon_{i},\epsilon_{j}), i\neq j$)
- No collinearity or multicollinearity between the predictors ($X$)
- $\epsilon \sim NIID(0,\sigma^2)$

  Or, in other words, the error term of the model are:
	- Normally distributed
	- Mutually independent
	- Mean of  is 0 ($E(\epsilon_i) = 0$)
	- Homoscedasticity: Variance of $\varepsilon_i$ is constant ($Var(\epsilon_i) = \sigma^2$)
	
### F-test

All tests in simple linear regression also applies for multiple linear regression.

There is a difference in the F-test used to test the model fit.

The hypothesis for this test is:
$$
\begin{align}
H_{0} &: \beta_{1} = \beta_{2} = \dots = \beta_{k}=0 \\
H_{1} &: \exists \beta_{j}\neq 0: j\in{1,2,\dots,k}
\end{align}
$$

The statistic for this test is:
$$
\begin{align}
F & = \frac{SSR/k}{SSE/[n-(k+1)]} \\
 & = \frac{R^2/k}{(1-R^2)/[n-(k+1)]}
\end{align}
$$



## Heteroscedasticity and Autocorrelation

### Gauss-Markov assumptions

Observation $y_{i}$ is a linear function $y_{i}=x_{i}'\beta+\epsilon_{i}$ of observations $x_{ik}, k=1,\dots,K$ of the predictors and the error term $\epsilon$ for $i=1,\dots,N;x_{i}'=(x_{i1},\dots,x_{iK});X=(x_{ik})$

- A1. $E[\epsilon]=0,\forall i\in \{ 1,\dots,N \}$
- A2. All $\epsilon_{i}$ are independent of all $x_{i}$ (exogeneous $x_{i}$)
- A3. $\operatorname{Var}(\epsilon_{i})=\sigma^2,\forall i\in \{ 1,\dots,N \}$ (Homoscedasticity)
- A4. $\operatorname{Cov}(\epsilon_{i},\epsilon_{j})=0,\forall i,j\in \{ 1,\dots,N \},i\neq j$ (No autocorrelation)

These assumptions results in the OLS estimator being BLUE (best linear unbiased estimator).

### Properties of OLS estimator

Let $b$ : OLS estimator.

Based on Gauss-Markov assumptions:
1. $b$ is unbiased: $E[b]=\beta$ (Under A1 and A2)
2. $\operatorname{Var}(b)=\sigma^2(\Sigma_{i}x_{i}x_{i}')^{-1}=\sigma(X'X)^{-1}$ (Under A1, A2, A3, A4)
3. The sampling variance $s^2$ of the error terms $\epsilon_{i}$ ($s^2=(N-K)^{-1}\Sigma_{i}\epsilon_{i}^2$) is unbiased for $\sigma^2$
4. $b$ is BLUE (best linear unbiased estimator)

Because $b$ is BLUE, the regression model is valid and efficient, with minimum variance between all other linear unbiasead estimators.

### Heteroscedasticity

Violation of the Gauss-Markov assumption A3 where $\operatorname{Var}(\varepsilon_i) = \sigma^2$ for all i. Instead, variance differs across observations: $\operatorname{Var}(\varepsilon) = \text{diag}(\sigma_1^2, \ldots, \sigma_N^2)$ where $\sigma_i^2 \neq \sigma^2$ for at least one pair $i \neq j$.

**Detection Methods**:

- Visual inspection using residual plots (`plot()` function)
- **Breusch-Pagan Test**: Tests $H_0$: homoscedasticity vs $H_1$: heteroscedasticity
    - Command: `bptest(model)`
    - Example result: BP = 615.86, df = 4, p-value < 2.2e-16 → reject $H_0$, heteroscedasticity present

**Typical Occurrence**:

- Cross-sectional survey data (households, regions)
- Variance dependent on explanatory variables (firm turnover vs size)
- Financial market data (exchange rates, stock returns)

### Autocorrelation

Violation of Gauss-Markov assumption A4 where $\operatorname{Cov}(\varepsilon_i, \varepsilon_j) = 0$ for all $i \neq j$. Instead, $\operatorname{Var}(\varepsilon) = \sigma^2\Omega$ with non-zero off-diagonal elements.

**Detection Methods**:

1. **Autocorrelation Function**: `acf(model$residuals, type = "correlation")`
    
2. **Durbin-Watson Test**:
    - $H_0$: no residual autocorrelation
    - Command: `dwtest(model)`
    - Example: DW = 1.6734, p-value = 0.03745 → reject $H_0$
3. **Breusch-Godfrey Test**:
    - $H_0$: no autocorrelation
    - Command: `bgtest(model, order = 3)`
    - Example: LM = 9.1925, df = 3, p-value = 0.02684 → reject $H_0$
