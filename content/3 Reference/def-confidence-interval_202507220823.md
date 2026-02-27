---
publish: true
aliases:
  - Confidence Interval
created: 2026-02-22T19:23:58.382+07:00
modified: 2026-02-22T19:23:58.383+07:00
published: 2026-02-22T19:23:58.383+07:00
cssclasses: ""
creation-time: 2025-07-22 08:23
status: baby
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $X$ : [[3 Reference/Def-random-variable\|Random variable]]
- $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]] of $X$, with
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x;\theta),\theta\in \Omega$
- $0<\alpha<1$
- $L=L(X_{1},\dots,X_{n})$ : [[3 Reference/Def-statistic\|Statistic]]
- $U=U(X_{1},\dots,X_{n})$ : Statistic

If
$$ 1-\alpha=P_{\theta}[\theta\in(L,U)] $$

Then
- We say interval $(L,U)$ is a $(1-\alpha)100\%$ **confidence interval** for $\theta$
- The probability that the interval $(L,U)$ includes $\theta$ is $1-\alpha$, which is called the **confidence coefficient/level** of the interval.
- If $E_{\theta}(U_{1}-L_{1})\leq E_{\theta}(U_{2}-L_{2}),\forall \theta \in \Omega$, then we ay $(L_{1},U_{1})$ is **more efficient** than $(L_{2},U_{2})$

## Remark

Once the sample is drawn, the realized confidence intervals are $(l,u)$, where $l,u\in \mathbb{R}$.

If one computes, say, $M$ independent $(1-\alpha)100\%$ confidence intervals, the one would expect to have $(1-\alpha)M$ *successful* confidence interval, i.e., intervals that contains $\theta$. Hence one feeels $(1-\alpha)100\%$ *confident* that the *true value* of $\theta$ lies in $(l,u)$

## See also
- [[3 Reference/common-confidence-intervals_202507241355\|Common Confidence Intervals]]
