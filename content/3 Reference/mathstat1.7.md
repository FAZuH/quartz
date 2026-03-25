---
publish: true
aliases:
  - 1.7 Continuous Random Variables
created: 2026-03-25T15:22:40.620+07:00
modified: 2026-03-25T15:22:40.620+07:00
published: 2026-03-25T15:22:40.620+07:00
creation-time: 2025-07-02 22:36
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat1.6|1.6 Discrete Random Variables]] | [[mathstat1.8|1.8 Expectation of Random Variable]] >>

## Definition 1.7.1: Continuous random variable

![[Def-continuous-random-variable#Definition]]

## Definition: Probability density function (pdf)

![[Def-probability-density-function-(pdf)#Definition]]

## Definition: Support of continuous random variable

![[Def-support-of-continuous-random-variable#Definition]]

## Definition 1.7.2: Quantile

![[Def-quantile#Definition]]

## Theorem 1.7.1: Finding the pdf of a transformation

![[theorem-finding-the-pdf-of-a-transformation_202507241332#Theorem]]

## Exercise

### Example 1.7.6

Let $X$ have the pdf
$$
f(x)=\begin{cases}
4x^3 & 0\<x<1 \\
0 & \text{elsewhere}
\end{cases}
$$

Consider the random variable $Y=-\log X$. Here are the steps of [[#Theorem 1.7.1 Finding the pdf of a transformation]]:

1. The support of $Y=-\log X$ is $(0,\infty)$
2. If $y=-\log x$, then $x=e^{-y}$
3. $\frac{d}{dy}x=-e^{-y}$
4. Thus the pdf of $Y$ is:
   $$
   \begin{align}
   f\_{Y}(y) & =f\_{X}(e^{-y})|-e^{-y}| \\
   & = 4(e^{-y})^3e^{-y} \\
   & = 4e^{-4y}
   \end{align}
   $$
