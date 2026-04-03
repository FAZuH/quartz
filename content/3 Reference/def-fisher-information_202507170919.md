---
publish: true
aliases:
  - Fisher Information
created: 2026-03-25T15:22:40.603+07:00
modified: 2026-03-25T15:22:40.603+07:00
published: 2026-03-25T15:22:40.603+07:00
cssclasses: ""
creation-time: 2025-07-17 09:19
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let

- $X$ : [[3 Reference/Def-random-variable\|Random variable]], with
    - [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]] $f(x;\theta)$, for $\theta \in \Omega$
- $S(X;\theta)$ : [[3 Reference/def-score-function_202507170918\|Score Function]]

Then the **Fisher information** is defined as: 
$$
\begin{align}
I(\theta) & = E\left[S(X;\theta)^2\right] \\
 & = E\left[\left(\frac{\partial}{\partial \theta} \ln f(X;\theta)\right)^2\right] \\
 & = -E\left[\frac{\partial^2}{\partial \theta^2} \ln f(X;\theta)\right]
\end{align}
$$

## Remark

> [!important]
> The bigger the Fisher information $I(\theta)$, the better the information obtained about $\theta$.

This equation is derived under [[3 Reference/mathstat6.1#Assumptions 6.1.1 Regularity conditions\|Regularity conditions]]: $$I(\theta) = -E\left[\frac{\partial^2}{\partial \theta^2} \ln f(X;\theta)\right]$$

For a [[3 Reference/Def-random-sample\|random sample]] $X_1, X_2, \ldots, X_n$, the Fisher information is: 
$$
I_n(\theta) = nI(\theta) =  -nE\left[\frac{\partial^2}{\partial \theta^2} \ln f(X;\theta)\right] $$

> [!note]
> Fisher information measures the amount of information that the sample carries about the parameter $\theta$. It is the weighted mean of $\left(\frac{\partial}{\partial \theta} \ln f(x;\theta)\right)^2$, where the weights are given by the pdf $f(x;\theta)$. 
> 
> The greater these derivatives are on average, the more information we get about $\theta$. If the derivatives were equal to zero (so that $\theta$ would not be in $\ln f(x;\theta)$), there would be zero information about $\theta$.