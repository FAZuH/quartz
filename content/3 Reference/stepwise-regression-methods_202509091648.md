---
publish: true
aliases:
  - Stepwise Regression Methods
created: 2026-04-09T23:07:39.605+07:00
modified: 2026-04-09T23:07:39.607+07:00
published: 2026-04-09T23:07:39.607+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-09 16:48
status: in progress
parent:
  - "[[Linear Model]]"
---



![[assets/image-3.png]]

> [!warning]
> - During whole procedure, a <u>large amount of single parameter t-tests were conducted</u>. This means that we have very probably included some unimportant independent variables in the model <u>(Type I errors)</u> and eliminated some important ones <u>(Type II errors)</u>.
> - Do not be deceived by the impressive-looking t-statistics, as stepwise regression in nature, is an algorithm <u>biased toward large t-statistics</u>.

## Bidirectional elimination

1. Identifies the <u>response</u> $y$, and <u>set of potentially important predictors</u> $x_1,x_2,\dots, x_k$ to use.
2. [<u>Test the parameter</u>](https://www.notion.so/Testing-the-individual-model-parameters-136a55f037f280b18141df2a76169b0f?pvs=21) of all possible one-predictor models $y=\beta_0 + \beta_1x_i$.
3. <u>Pick a predictor</u> $x_1$ which yields the largest t-statistic out of all the tests on step $(2)$.
4. Test the remaining predictors to <u>fit into a two-predictor</u> model, and picks $x_2$ which yields largest t-statistics.
5. <u>Test the first predictor</u> to see if $\hat\beta_1$ is still significant.
	- If $\hat \beta_1$ is no longer significant, remove $x_1$. Search a predictor with largest t-statistic in the presence of the term $\hat\beta_2 x_2$.
	- Continue searching for predictors, until no further predictors can be found that yield significant t-statistics (at $\alpha$ level).

## Forward selection

Similar to [bidirectional elimination](https://www.notion.so/Conducting-stepwise-regression-procedures-13ea55f037f280289df6d77443636040?pvs=21). The difference is that this algorithm <u>doesn’t test previously added predictors</u> like on step $(4)$

## Backward elimination

Instead of starting by fitting all possible one-predictor model like [[3 Reference/stepwise-regression-methods_202509091648#Bidirectional elimination\|bidirectional elimination]], this algorithm starts with <u>all predictors included in the initial model</u>.

This algorithm then tests for the <u>least significant predictor, and removes them</u>, the complete opposite of  [[3 Reference/stepwise-regression-methods_202509091648#Forward selection\|forward selection]].

## Software implementation

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

