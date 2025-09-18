---
{"publish":true,"aliases":["7.5 The Exponential Class of Distributions.md"],"created":"2025-09-13T18:59:05.551+07:00","modified":"2025-09-13T01:05:24.000+07:00","published":"2025-09-13T01:05:24.000+07:00","cssclasses":"","creation-time":"2025-07-10 02:30","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---

<< [[3 Reference/mathstat7.4\|7.4 Completeness and Uniqueness.md]] | [[3 Reference/mathstat7.6_202507171008\|7.6 Functions of Parameter]] >>

## Definition 7.5.1: Regular exponential class
![[3 Reference/def-regular-exponential-class_202507170942#Definition]]

## Theorem 7.5.1
> Let
> - $X_{1},\dots,X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with
> 	- Distribution that represents a regular case of the exponential class
> 	- pdf/pmf $$ f(x;\theta)=\begin{cases}  \exp[p(\theta)K(x)+H(x)+q(\theta)] & x\in \mathcal{S} \\  0 & \text{elsewhere} \end{cases} $$
> - $Y_{1}=\sum_{i=1}^n K(X_{i})$
> 
> Then
> 1. pdf/pmf of $Y_{1}$ has the form $$ f_{Y_{1}} (y_{1};\theta) = R(y_{1})\exp[p(\theta)y_{1}+nq(\theta)] $$ for $y_{1}\in \mathcal{S}_{Y_{1}}$ and some function $R(y_{1})$. Neither $\mathcal{S}_{Y_{1}}$ nor $R(y_{1})$ depends on $\theta$
> 2. $$E(Y_{1})=-1 \frac{q'(\theta)}{p'(\theta)}$$
> 3. $$ \operatorname{Var} (Y_{1})=n \frac{1}{p'(\theta)^3} \{ p''(\theta)q'(\theta) - q''(\theta)p'(\theta) \}$$

> [!remark]
> [[3 Reference/mathstat7.5#Theorem 7.5.2]] fits into the 4th case of this theorem.

## Theorem 7.5.2
> Let
> - $X$ : Random variable, with
> 	- $f(x ; \theta), \gamma<\theta<\delta$ : pdf/pmf 
> 	- Distribution is a regular case of the exponential class
> - $X_1, X_2, \ldots, X_n$ : Random sample from the distribution of $X$
> - $Y_1=\sum_{i=1}^n K\left(X_i\right)$ 
> 
> Then $Y_1$ is a [[3 Reference/mathstat7.4#Definition Complete sufficient statistic\|complete sufficient]] statistic for $\theta$
