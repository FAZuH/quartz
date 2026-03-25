---
publish: true
aliases:
  - Assumptions for the Error Component
created: 2026-03-25T15:22:40.621+07:00
modified: 2026-03-25T15:22:40.622+07:00
published: 2026-03-25T15:22:40.622+07:00
tags:
  - 
creation-time: 2025-09-16 14:26
status: in progress
parent:
  - "[[simple-linear-model_202509091314|The Simple Linear Model]]"
---

The $NIID(0, \sigma^2)$ _(Normally and Independently Identically Distributed)_ assumption for the error component $(\epsilon\_i)$ means:

1. Zero [[Def-mean|mean]] ($E(\boldsymbol{\epsilon})=0$)
2. Normal distribution ($\epsilon\_{i} \sim N(0,\sigma^2),\forall i\in { 1,\dots,n }$)
3. Constant [[Def-variance|variance]] ($\operatorname{Var}(\epsilon\_{i})=\sigma^2,\forall i\in { 1,\dots,n }$)
4. Independency ($\operatorname{Cov}(\epsilon\_{i},\epsilon\_{j})=0,\forall i,j\in { 1,\dots,n },i\neq j$)

The above assumptions can be further elaborated as:

## 1. Zero mean assumption

The error $\epsilon\_i=y\_{i}-(\beta\_{0}+\beta\_{1}x\_{i})$ is the deviation of the estimation to the true value. Thus ideally, <u>the error should be minimized</u> to give the most accurate prediction, i.e., the mean of the error should be as close to 0 as possible.

This is written mathematically as $E(\epsilon\_i) = 0$. As a result, we may obtain the following [[Def-expectation|expectation]] for $y\_{i}$:
$$
\begin{align}
E(y\_{i}) & = E(\beta\_{0}+\beta\_{1}x\_{i}+\epsilon\_{i}) \\
& = E(\beta\_{0}+\beta\_{1}x\_{i}) + E(\epsilon\_{i}) &  \\
& = \beta\_{0}+\beta\_{1}x\_{i}
\end{align}
$$

## 2. Normally distributed assumption

The <u>model should be as close as possible to each data point</u>. This assumptions prevents overfit or underfit problem.

The error should be small. And if it’s large, the frequency should be less than those with smaller deviation.

![[assets/image-4.png|600]]

> Illustration of normality assumption for error terms

## 3. Constant variance assumption (homoscedasticity)

Variation of $\epsilon\_i$ (and hence, variation of $y\_i$) is the same across conditions represented by $x\_i$. In simpler terms, regardless of the value of the predictor $(x\_i)$, the <u>spread (variance) of the error term should remain constant</u>.

![[assets/image-5.png|600]]

> Example of model that violates the constant variance assumption

## 4. Independency assumption

An error is not related with others errors; knowing the error for one observation should give no information about the error of another.
