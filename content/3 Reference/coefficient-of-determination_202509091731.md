---
publish: true
aliases:
  - Coefficient of Determination
created: 2026-04-09T23:07:39.045+07:00
modified: 2026-04-09T23:07:39.046+07:00
published: 2026-04-09T23:07:39.046+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-09 17:31
status: in progress
parent:
  - "[[Linear Model]]"
---


**Coefficient of determination** ($R^2)$ measures the proportion of the [[3 Reference/Def-variance\|variance]] in the response that is explained by the model.

Coefficient determination close to 1 implies a good fit of the model, i.e., the model is accurate. Meanwhile, $R^2$ value close to 0 implies the opposite.

> [!warning]
> Use $R^2$ only if the number of observations is substantially larger than the number of coefficients.


## Formula

$$
R^2 = 1 - \frac{SSE}{SST} = \frac{SSR}{SST}
$$
Where
- SSE: [[3 Reference/sum-of-squares_202509091730\|Sum of Squares Error]]
- SSR: [[3 Reference/sum-of-squares_202509091730\|Sum of Squares Regression]]
- SST: [[3 Reference/sum-of-squares_202509091730\|Sum of Squares Total]]

## Relation with F statistic

Relation of $R^2$ with $F$ is given in the following formula:

$$
R^2 = 1 - \left[1 + F\left(\frac{p-1}{n-p}\right)\right]^{-1}
$$

This formula is derived from the $F$ formula with simple algebra.

$F$ can also be obtained from $R$ using the following formula:

$$
F = \frac{(SST-SSE)/(p-1)}{SSE/(n-p)}
$$

## Adjusted $R^2$

#TODO what's this

$$
R_{\mathrm{a}}^2=1-\left[\frac{(n-1)}{n-(p+1)}\right]\left(1-R^2\right)
$$
