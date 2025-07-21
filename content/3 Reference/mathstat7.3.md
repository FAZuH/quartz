---
{"publish":true,"aliases":"7.3 Properties of a Sufficient Statistic.md","cssclasses":""}
---


<< [[3 Reference/mathstat7.2\|7.2 A Sufficient Statistic for a Parameter.md]] | [[3 Reference/mathstat7.4\|7.4 Completeness and Uniqueness.md]] >>

## Theorem 7.3.1: Rao-Blackwell
> Let
> - $X_{1},\dots X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with
> 	- pdf/pmf $f(x;\theta)$, $\theta\in \Omega$
> - $Y_{1} =u_{1}(X_{1},\dots,X_{n})$ : [[3 Reference/mathstat7.2#Definition 7.2.1 Sufficient statistic\|Sufficient statistic]] for $\theta$
> - $Y_{2} =u_{2}(X_{1},\dots,X_{n})$ : [[3 Reference/mathstat4.1#Definition 4.1.3 Unbiased estimator\|Unbiased estimator]] for $\theta$
>
> If $E(Y_{2}|y_1)=\varphi(y_{1})$ defines a statistic $\varphi(Y_{1})$
>
> Then 
> - $\varphi(Y_{1})$ is an unbiased estimator of $\theta$
> - $\operatorname{Var}[\varphi(Y_{1})]\leq\operatorname{Var}(Y_{2})$

This theorem states "function $\varphi(y_{1})=E(Y_{2}|y_{1})$ of the sufficient statistic $Y_{1}$ is an unbiased estimator of $\theta$ having a smaller variance than that of the unbiased estimator $Y_{2}$ of $\theta$".

In simpler terms, given 
- $Y_{1}$ : Sufficient statistic for $\theta$
- $Y_{2}$ : Unbiased statistic for $\theta$

A function of $Y_{1}$ (usually denoted as $\varphi (Y_{1})$) is a better (lower/equal variance) unbiased estimator than $Y_{2}$.

## Theorem 7.3.2
> Let
> - $X_{1},\dots,X_{n}$ : Random sample, with
> 	- pdf/pmf $f(x;\theta)$, $\theta\in \Omega$
> - $Y_{1}=u_{1}(X_{1},\dots,X_{n})$ : Sufficient statistic for $\theta$
> - $\hat{\theta}$ : [[3 Reference/mathstat6.1#Definition 6.1.1 Maximum Likelihood Estimator\|Maximum likelihood estimator]] of $\theta$
> 
> If
> - $Y_{1}$ exists
> - $\hat{\theta}$ exists uniquely
> 
> Then $\hat{\theta}$ is a function of $Y_{1}$
