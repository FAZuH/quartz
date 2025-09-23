---
{"publish":true,"aliases":["Coefficient of Determination"],"created":"2025-09-23T11:25:01.698+07:00","modified":"2025-09-23T11:56:02.542+07:00","published":"2025-09-23T11:56:02.542+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-23 11:25","status":"baby","parent":["[[econometrics]]"]}
---

**Coefficient of determination** ($R^2$) is a statistic that measures proportion or <u>total variation around the mean of the response variable that can be explained</u> by the regression model.

$R^2\in[0,1]$ (Ranges from 0 to 1, inclusive).

$$R^2= \frac{b^TX^TY-n \bar{Y}^2}{Y^TY-n \bar{Y}^2}$$
## Other forms

$$
\begin{align}
R^2 & = 1 - \frac{SSE}{SST} \\
 & = 1 - \frac{\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}{\sum_{i=1}^{n}(y_i - \bar{y})^2}
\end{align}
$$

Where:
$$
\begin{align}
SSE &= \sum_{i=1}^{n}(y_i - \hat{y}_i)^2 \\
SST &= \sum_{i=1}^{n}(y_i - \bar{y})^2 \\
\hat{y}_i &= X_i\hat{\beta}
\end{align}
$$

Alternative form: $$R^2 = \frac{SSR}{SST}$$

Where 
$$
\begin{align}
SSR &= \sum_{i=1}^{n}(\hat{y}_i - \bar{y})^2 \\
SST &= SSE + SSR
\end{align}
$$