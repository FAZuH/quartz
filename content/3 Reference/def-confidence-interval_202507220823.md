---
publish: true
aliases:
  - Confidence Interval
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
creation-time: 2025-07-22 08:23
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X$ : [[Def-random-variable|Random variable]]
- $X\_{1},\dots,X\_{n}$ : [[Def-random-sample|Random sample]] of $X$, with
  - [[Def-probability-density-function-(pdf)|pdf]] $f(x;\theta),\theta\in \Omega$
- $0<\alpha<1$
- $L=L(X\_{1},\dots,X\_{n})$ : [[Def-statistic|Statistic]]
- $U=U(X\_{1},\dots,X\_{n})$ : Statistic

If
$$ 1-\alpha=P\_{\theta}\[\theta\in(L,U)] $$

Then

- We say interval $(L,U)$ is a $(1-\alpha)100%$ **confidence interval** for $\theta$
- The probability that the interval $(L,U)$ includes $\theta$ is $1-\alpha$, which is called the **confidence coefficient/level** of the interval.
- If $E\_{\theta}(U\_{1}-L\_{1})\leq E\_{\theta}(U\_{2}-L\_{2}),\forall \theta \in \Omega$, then we ay $(L\_{1},U\_{1})$ is **more efficient** than $(L\_{2},U\_{2})$

## Remark

Once the sample is drawn, the realized confidence intervals are $(l,u)$, where $l,u\in \mathbb{R}$.

If one computes, say, $M$ independent $(1-\alpha)100%$ confidence intervals, the one would expect to have $(1-\alpha)M$ _successful_ confidence interval, i.e., intervals that contains $\theta$. Hence one feeels $(1-\alpha)100%$ _confident_ that the _true value_ of $\theta$ lies in $(l,u)$

## See also

- [[common-confidence-intervals_202507241355|Common Confidence Intervals]]
