---
{"publish":true,"aliases":["Rangkuman Minggu 3"],"created":"2025-09-09T11:16:08.113+07:00","modified":"2025-09-09T13:43:31.502+07:00","published":"2025-09-09T13:43:31.502+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-09 11:16","status":"baby","parent":["[[ekonometri_202509051027]]"]}
---

# Best model selection

## About best model selection

Selecting appropriate predictor variables in regression modeling, especially for prediction, is crucial (Darlington, 2017).

Choosing the right predictors ensures the regression model effectively explains variable relationships. Variable selection methods help identify the best and most significant predictors for the model. The preferred regression model uses the simplest set of predictors.

The selection methods to be studied are backward selection, forward selection, and stepwise. Before applying these methods, understanding the partial F-test and sequential F-test is necessary. The partial F-test is used in backward selection, while the sequential F-test is used in forward selection.

## Best model criteria

| Criteria               | Formula                                               | Optimum? |
| ---------------------- | ----------------------------------------------------- | -------- |
| $\operatorname{MSE}$   | $$\sum \frac{(Y-\hat{Y)}^2}{n-p-1}$$                  | Minimum  |
| $\text{R}^2$           | $$R^2= \frac{b^TX^TY-n \bar{Y}^2}{Y^TY-n \bar{Y}^2}$$ | Maximum  |
| $C_{p} \text{ Mallow}$ | $$C_{p}= \frac{JKS_{p}}{s^2}-(n-2p)$$                 | Minimum  |

### Mean squared error (MSE)

Mean squared error <u>measures error in a model</u>. If a model does not have any errors, then $MSE=0$. As the error goes up, MSE goes up.

$$
MSE = \frac{\sum_{i}^n (y_{i}-\hat{y}_{i})^2}{n}
$$

### Coefficient of determination

**Coefficient of determination** ($R^2$) is a statistic that measures proportion or <u>total variation around the mean of the response variable that can be explained</u> by the regression model.

$R^2\in[0,1]$ (Ranges from 0 to 1, inclusive).

$$R^2= \frac{b^TX^TY-n \bar{Y}^2}{Y^TY-n \bar{Y}^2}$$

### Adjusted coefficient of determination

 Adjusted coefficient of determination ($R^2_{\text{adj}}$) is a statistic, similar to [[2 Personal/rangkuman-minggu-3_202509091116#Coefficient of determination]] but <u>unaffected by degrees of freedom</u> of the residual sum of squares or the total sum of squares.
 
 Unlike [[2 Personal/rangkuman-minggu-3_202509091116#Coefficient of determination]], adding predictor variables to the model does not always increase $R^2_{\text{adj}}$.

$$
R_{\text{adj}}^2 = 1-\left(  \frac{n-1}{n-p} \right) (1-R^2)
$$

### CP Mallow statistic

$$
CP = \frac{JKS}{s^2} - (n-2p)
$$

### Prediction Sum of Squares (PRESS)

A form of [cross-validation](https://en-m-wikipedia-org.translate.goog/wiki/Cross-validation_(statistics)?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) used in [regression analysis](https://en-m-wikipedia-org.translate.goog/wiki/Regression_analysis?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) that <u>measures the model's fit to a sample of observations not used in estimating the model</u>.

$$
\text{PRESS} = \sum_{i}^n (y_{i}-\hat{y}_{i,-i})^2
$$

## Misspecification

- [[2 Personal/rangkuman-minggu-3_202509091116#Omitting relevant predictor]]
- [[2 Personal/rangkuman-minggu-3_202509091116#Including irrelevant predictor]]
- [[2 Personal/rangkuman-minggu-3_202509091116#Using an incorrect functional form of the model]]
- [[2 Personal/rangkuman-minggu-3_202509091116#Measurement errors]]
- [[2 Personal/rangkuman-minggu-3_202509091116#Incorrect specification of the error term]]

### Omitting relevant predictor

**Example**
- Correct model: $Y_i = \beta_0 + \beta_1 X_{1i} + \textcolor{yellow}{\beta_2 X_{2i}} + e_i$
- Misspecified: $Y_i = \hat{\beta}_0 + \hat{\beta}_1 X_{1i} + e_i$
- Error term: $e_i = e_{1i} + \textcolor{yellow}{\beta_2 X_{2i}}$

**Consequences**
- If $X_2$ correlates with $X_1$, estimators biased and inconsistent.
- Otherwise, $\hat{\beta}_0$ biased; $\hat{\beta}_1$ unbiased.
- Error variance estimate inaccurate.
- Estimator variance biased.
- Invalid confidence intervals, hypothesis tests, and forecasts.

### Including irrelevant predictor

**Example**
- Correct model: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$
- Misspecified: $Y_i = \hat{\beta}_0 + \hat{\beta}_1 X_{1i} + \hat{\beta}_2 X_{2i} + \textcolor{yellow}{\hat{\beta}_3 X_{3i}} + e_{3i}$
- Error term: $e_{3i} = e_{1i} - \textcolor{yellow}{\hat{\beta}_3 X_{3i}}$

**Consequences**
- Estimators **unbiased**, error variance estimate **accurate**, **valid** confidence intervals and hypothesis tests.
- But, estimators **inefficient** (larger variance than correct model). Therefore, model is less accurate.

### Using an incorrect functional form of the model

Occurs when estimated functional form differs from population regression function.

**Consequences**: Biased, inconsistent coefficient estimators.

**Detection**: Plot estimated function vs data.

**Example**: Using log-linear ($\ln Y_i = \hat{\beta}_0 + \hat{\beta}_1 \ln X_{1i} + \hat{\beta}_2 \ln X_{2i} + e_{4i}$) when linear is correct.

### Measurement errors

Occurs from using proxies ($Y_i^* = Y + \epsilon_Y$, $X_i^* = X + \epsilon_X$) instead of true values.

Misspecified model: $Y_i^* = \hat{\beta}_0^* + \hat{\beta}_1^* X_{1i}^* + \hat{\beta}_2^* X_{2i}^* + e_i^*$

Leads to biased estimates.

### Incorrect specification of the error term

**Example**
- Correct: $Y_i = \beta X_i \cdot e_i$ (multiplicative)
- Misspecified: $Y_i = \hat{\beta} X_i + e_i$ (additive)

**Consequences**: True model has misspecified error $\implies$ estimators biased.

**Detection**: If estimator biased $\implies$ error term is source of misspecification.

## Conducting stepwise regression methods to choose best regression model

![[assets/image-3.png]]

> [!warning]
> - During whole procedure, a <u>large amount of single parameter t-tests were conducted</u>. This means that we have very probably included some unimportant independent variables in the model <u>(Type I errors)</u> and eliminated some important ones <u>(Type II errors)</u>.
> - Do not be deceived by the impressive-looking t-statistics, as stepwise regression in nature, is an algorithm <u>biased toward large t-statistics</u>.

### Bidirectional elimination

1. Identifies the <u>response</u> $y$, and <u>set of potentially important predictors</u> $x_1,x_2,\dots, x_k$ to use.
2. [<u>Test the parameter</u>](https://www.notion.so/Testing-the-individual-model-parameters-136a55f037f280b18141df2a76169b0f?pvs=21) of all possible one-predictor models $y=\beta_0 + \beta_1x_i$.
3. <u>Pick a predictor</u> $x_1$ which yields the largest t-statistic out of all the tests on step $(2)$.
4. Test the remaining predictors to <u>fit into a two-predictor</u> model, and picks $x_2$ which yields largest t-statistics.
5. <u>Test the first predictor</u> to see if $\hat\beta_1$ is still significant.
	- If $\hat \beta_1$ is no longer significant, remove $x_1$. Search a predictor with largest t-statistic in the presence of the term $\hat\beta_2 x_2$.
	- Continue searching for predictors, until no further predictors can be found that yield significant t-statistics (at $\alpha$ level).

### Forward selection

Similar to [bidirectional elimination](https://www.notion.so/Conducting-stepwise-regression-procedures-13ea55f037f280289df6d77443636040?pvs=21). The difference is that this algorithm <u>doesn’t test previously added predictors</u> like on step $(4)$

### Backward elimination

Instead of starting by fitting all possible one-predictor model like [[2 Personal/rangkuman-minggu-3_202509091116#Bidirectional elimination\|bidirectional elimination]], this algorithm starts with <u>all predictors included in the initial model</u>.

This algorithm then tests for the <u>least significant predictor, and removes them</u>, the complete opposite of  [[2 Personal/rangkuman-minggu-3_202509091116#Forward selection\|forward selection]].

### Software implementation

```r
data(mtcars)

model_intercept <- lm(mpg ~ 1, data = mtcars)
model_full <- lm(mpg ~ ., data = mtcars)

# Bidirectional elimination
both <- step(model_intercept, direction = 'both', scope = formula(model_full))

# Forward selection
forward <- step(model_intercept, direction = 'forward', scope = formula(model_full))

# Backwards elimination
backward <- step(model_full, direction = 'backward')
```

## Specification error tests

### Detecting unimportant variables via likelihood ratio test

**Restricted** model (if $\beta_2=0$): $Y_i = \beta_0 + \beta_1 X_{1i} + e_i$

**Unrestricted**: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$

$LR = 2(ULLF - RLLF)$

### Detecting important variables via likelihood ratio test

**Unrestricted** (add $X_3$): $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + \beta_3 X_{3i} + e_i$

**Restricted**: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$

$LR = 2(ULLF - RLLF)$

### Detecting functional form errors via Ramsey RESET test.

**Model**: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + e_i$

**Steps**:
1. Regress and get $\hat{Y}$.
2. Regress again with powers: $Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + \beta_3 \hat{Y}^2 + \beta_4 \hat{Y}^3 + \beta_5 \hat{Y}^4 + e_i$

F-stat: $F = \frac{(R_b^2 - R_l^2)/k_1}{(1 - R_b^2)/(n - k_2)}$

If $F > F_{table}$, form incorrect.

If $F < F_{table}$, form correct.

**Advantage**: No alternative model needed.

**Disadvantage**: No alternative if incorrect.

### Detecting error term specification

**Example**: True $Y_i = \beta X_i \cdot e_i$; estimated $Y_i = \hat{\beta} X_i + e_i$

Check if $\hat{\beta}$ unbiased for $\beta$; if not, error term misspecified.