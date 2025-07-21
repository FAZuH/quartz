---
{"publish":true,"aliases":"Definition of Sufficient Statistic Sufficient Statistic","cssclasses":""}
---


## Definition

Let
- $X_1,\dots,X_n$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]] of size $n$, with
	- Joint [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x_1,\dots,x_n;\theta)$, $\theta\in \Omega$
- $Y_1 = u_1(X_1,\dots,X_n)$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]], with 
	- pdf/pmf $f_{Y_1}(y_1;\theta)$

Then $Y_1$ is a **sufficient statistic** for $\theta$ $\iff$ 
$$\frac{f(x_1,\dots,x_n;\theta)}{f_{Y_1}[u_1(x_1,\dots,x_n);\theta]} = H(x_1,\dots,x_n)$$
where $H(x_1,\dots,x_n)$ does not depend on $\theta$.

## Remark
In short, to prove $Y_{1}$ is a sufficient statistic, we must show that $\dfrac{f}{f_{Y_{1}}}$ does not depend on $\theta$, i.e., does not have any $\theta$ terms in it.

A sufficient statistic captures all the information about $\theta$ contained in the sample, so the ratio of joint to marginal densities should be free of $\theta$ ( #TODO why?).
 
Also, a sufficient statistic **does not require the random variables to be independent**.

## Subdefinition
- [[3 Reference/complete-sufficient-statistic_202507170931\|Complete Sufficient Statistic]]