---
{"publish":true,"aliases":"7.2 A Sufficient Statistic for a Parameter.md","cssclasses":""}
---


<< [[3 Reference/mathstat7.1\|7.1 Measures of Quality Estimators.md]] | [[3 Reference/mathstat7.3\|7.3 Properties of a Sufficient Statistic.md]] >> 

## Definition 7.2.1: Sufficient statistic
## Definition

Let
- $X_1,\dots,X_n$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]] of size $n$, with
	- Joint [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x_1,\dots,x_n;\theta)$, $\theta\in \Omega$
- $Y_1 = u_1(X_1,\dots,X_n)$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]], with 
	- pdf/pmf $f_{Y_1}(y_1;\theta)$

Then $Y_1$ is a **sufficient statistic** for $\theta$ $\iff$ 
$\frac{f(x_1,\dots,x_n;\theta)}{f_{Y_1}[u_1(x_1,\dots,x_n);\theta]} = H(x_1,\dots,x_n)$$
where $H(x_1,\dots,x_n)$ does not depend on $\theta$.

## Theorem 7.2.1: Neyman theorem
> Let
> - $X_{1},\dots,X_{n}$ : Random sample, with
> 	- Distribution that has pdf/pmf $f(x;\theta)$, $\theta\in \Omega$
> - $Y_{1} = u_{1}(X_{1},\dots,X_{n})$ : Statistic for $\theta$
> 
> Then $Y_{1}$ is a sufficient statistic for $\theta$ $\iff$ we can find two nonnegative functions $k_{1}$ and $k_{2}$, such that $$
> f(x_{1};\theta)\dots f(x_{n};\theta) = k_{1}[u_{1}(x_{1},\dots,x_{n});\theta]k_{2}(x_{1},\dots,x_{n})
> $$ where $k_{2}(x_{1},\dots,x_{n})$ does not depend upon $\theta$

## Theorem 7.2.1: Neyman theorem
> Let
> - $X_{1},\dots,X_{n}$ : Random sample, with
> 	- Distribution that has pdf/pmf $f(x;\theta)$, $\theta\in \Omega$
> - $Y_{1} = u_{1}(X_{1},\dots,X_{n})$ : Statistic for $\theta$
> 
> Then $Y_{1}$ is a sufficient statistic for $\theta$ 
> 
> If and only if 
> - $\exists k_{1},k_{2} \ni \prod_{i=1}^n = k_{1}[u_{1}(x_{1},\dots,x_{n});\theta]k_{2}(x_{1},\dots,x_{n})$
> - $k_{2}(x_{1},\dots,x_{n})$ is independent of $\theta$
