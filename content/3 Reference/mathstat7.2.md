---
{"publish":true,"aliases":["7.2 A Sufficient Statistic for a Parameter.md"],"created":"2025-07-24T11:50:56.211+07:00","modified":"2025-07-24T11:50:56.212+07:00","published":"2025-07-24T11:50:56.212+07:00","cssclasses":"","creation-time":"2025-07-07 00:29","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
---


<< [[3 Reference/mathstat7.1\|7.1 Measures of Quality Estimators.md]] | [[3 Reference/mathstat7.3\|7.3 Properties of a Sufficient Statistic.md]] >> 

## Definition 7.2.1: Sufficient statistic
![[3 Reference/def-sufficient-statistic_202507170925#Definition]]
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
