---
publish: true
aliases:
  - Assumptions for the Error Component
created: 2026-02-22T19:23:58.373+07:00
modified: 2026-02-22T19:23:58.374+07:00
published: 2026-02-22T19:23:58.374+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-16 14:26
status: baby
parent:
  - "[[simple-linear-model_202509091314|The Simple Linear Model]]"
---


The $NIID(0, \sigma^2)$ *(Normally and Independently Identically Distributed)* assumption for the error component $(\epsilon_i)$ means:

1. Zero [[3 Reference/Def-mean\|mean]] ($E(\boldsymbol{\epsilon})=0$)
2. Normal distribution ($\epsilon_{i} \sim N(0,\sigma^2),\forall i\in \{ 1,\dots,n \}$)
3. Constant [[3 Reference/Def-variance\|variance]] ($\operatorname{Var}(\epsilon_{i})=\sigma^2,\forall i\in \{ 1,\dots,n \}$)
4. Independency ($\operatorname{Cov}(\epsilon_{i},\epsilon_{j})=0,\forall i,j\in \{ 1,\dots,n \},i\neq j$)

The above assumptions can be further elaborated as:

## 1. Zero mean assumption

The error $\epsilon_i=y_{i}-(\beta_{0}+\beta_{1}x_{i})$ is the deviation of the estimation to the true value. Thus ideally, <u>the error should be minimized</u> to give the most accurate prediction, i.e., the mean of the error should be as close to 0 as possible. 

This is written mathematically as $E(\epsilon_i) = 0$. As a result, we may obtain the following [[3 Reference/Def-expectation\|expectation]] for $y_{i}$:
$$
\begin{align}
E(y_{i}) & = E(\beta_{0}+\beta_{1}x_{i}+\epsilon_{i}) \\
 & = E(\beta_{0}+\beta_{1}x_{i}) + E(\epsilon_{i}) &  \\
 & = \beta_{0}+\beta_{1}x_{i}
\end{align}
$$

## 2. Normally distributed assumption

The <u>model should be as close as possible to each data point</u>. This assumptions prevents overfit or underfit problem.

The error should be small. And if it’s large, the frequency should be less than those with smaller deviation.

![[assets/image-4.png|600]]

> Illustration of normality assumption for error terms

## 3. Constant variance assumption (homoscedasticity)

Variation of $\epsilon_i$ (and hence, variation of $y_i$) is the same across conditions represented by $x_i$. In simpler terms, regardless of the value of the predictor $(x_i)$, the <u>spread (variance) of the error term should remain constant</u>.

![[assets/image-5.png|600]]

> Example of model that violates the constant variance assumption

## 4. Independency assumption

An error is not related with others errors; knowing the error for one observation should give no information about the error of another.
