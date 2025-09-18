---
{"publish":true,"aliases":["1.7 Continuous Random Variables"],"created":"2025-09-13T18:59:04.985+07:00","modified":"2025-09-13T01:05:24.000+07:00","published":"2025-09-13T01:05:24.000+07:00","cssclasses":"","creation-time":"2025-07-02 22:36","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---

<< [[3 Reference/mathstat1.6\|1.6 Discrete Random Variables]] | [[3 Reference/mathstat1.8\|1.8 Expectation of Random Variable]] >>

## Definition 1.7.1: Continuous random variable
![[3 Reference/Def-continuous-random-variable#Definition]]

## Definition: Probability density function (pdf)
![[3 Reference/Def-probability-density-function-(pdf)#Definition]]

## Definition: Support of continuous random variable
![[3 Reference/Def-support-of-continuous-random-variable#Definition]]

## Definition 1.7.2: Quantile
![[3 Reference/Def-quantile#Definition]]

## Theorem 1.7.1: Finding the pdf of a transformation
![[3 Reference/theorem-finding-the-pdf-of-a-transformation_202507241332#Theorem]]


## Exercise
### Example 1.7.6
Let $X$ have the pdf
$$
f(x)=\begin{cases}
4x^3 & 0<x<1 \\
0 & \text{elsewhere}
\end{cases}
$$

Consider the random variable $Y=-\log X$. Here are the steps of [[3 Reference/mathstat1.7#Theorem 1.7.1 Finding the pdf of a transformation]]:
1. The support of $Y=-\log X$ is $(0,\infty)$
2. If $y=-\log x$, then $x=e^{-y}$
3. $\frac{d}{dy}x=-e^{-y}$
4. Thus the pdf of $Y$ is:
$$
\begin{align}
f_{Y}(y) & =f_{X}(e^{-y})|-e^{-y}| \\
 & = 4(e^{-y})^3e^{-y} \\
 & = 4e^{-4y}
\end{align}
$$

