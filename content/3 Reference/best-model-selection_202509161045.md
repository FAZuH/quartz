---
publish: true
aliases:
  - Best Model Selection
created: 2026-03-25T15:22:40.621+07:00
modified: 2026-03-25T15:22:40.621+07:00
published: 2026-03-25T15:22:40.621+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-16 10:45
status: in progress
parent:
  - "[[econometrics]]"
---


## About best model selection

Selecting appropriate predictor variables in regression modeling, especially for prediction, is crucial (Darlington, 2017).

Choosing the right predictors ensures the regression model effectively explains variable relationships. Variable selection methods help identify the best and most significant predictors for the model. The preferred regression model uses the simplest set of predictors.

The selection methods to be studied are backward selection, forward selection, and stepwise. Before applying these methods, understanding the partial F-test and sequential F-test is necessary. The partial F-test is used in backward selection, while the sequential F-test is used in forward selection.

## Best model criteria

| Criteria               | Formula                                               | Optimum? |
| ---------------------- | ----------------------------------------------------- | -------- |
| $\operatorname{MSE}$   | $$\sum \frac{(Y-\hat{Y})^2}{n-p-1}$$                  | Minimum  |
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

 Adjusted coefficient of determination ($R^2_{\text{adj}}$) is a statistic, similar to [[3 Reference/best-model-selection_202509161045#Coefficient of determination]] but <u>unaffected by degrees of freedom</u> of the residual sum of squares or the total sum of squares.
 
 Unlike [[3 Reference/best-model-selection_202509161045#Coefficient of determination]], adding predictor variables to the model does not always increase $R^2_{\text{adj}}$.

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
