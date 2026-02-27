---
publish: true
aliases:
  - 6.2 Rao-Cramér Lower Bound and Efficiency.md
created: 2026-02-22T19:24:22.102+07:00
modified: 2026-02-22T19:24:22.103+07:00
published: 2026-02-22T19:24:22.103+07:00
cssclasses: ""
creation-time: 2025-07-06 23:56
status: baby
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


<< [[3 Reference/mathstat6.1\|6.1 Maximum Likelihood Estimation.md]] | [[3 Reference/6.3-maximum-likelihood-tests_202512111523\|6.3 Maximum Likelihood Tests]] >>

## Assumptions 6.2.1: Additional regularity conditions 1
> - $(\mathbf{R3})$ : The pdf $f(x;\theta)$ is twice differentiable as a function of $\theta$.
> - $(\mathbf{R4})$ : The integral $\int f(x;\theta)$ can be differentiated twice under the integral sign as a function of $\theta$.

## Definition: Score function
## Definition

Let
- $X$ : [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|Random variable]], with
    - [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]] $f(x;\theta)$, for $\theta \in \Omega$

Then the **score function** is defined as
 $S(x;\theta) = \frac{\partial}{\partial \theta} \ln f(x;\theta)$$


## Definition: Fisher information
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


## Theorem 6.2.1: Rao-Cramér lower bound
## Definition

Let
- $X_{1},\dots,X_{n}$: [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]] $f(x;\theta),\theta\in \Omega$
- $Y=u(X_{1},X_{2},\dots,X_{n})$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]]
- $k(\theta)=E(Y)$[^1]
- $I(\theta)$ : [[3 Reference/def-fisher-information_202507170919\|Fisher information]]

Assume [[3 Reference/mathstat6.1#Assumptions 6.1.1 Regularity conditions\|regularity conditions]] and [[3 Reference/mathstat6.2#Assumptions 6.2.1 Additional regularity conditions 1\|additional regularity conditions 1]] hold.

Then
$ \operatorname{Var}(Y)\geq \boxed{\frac{[k'(\theta)]^2}{nI(\theta)}} $$
- We say $[k'(\theta)]^2/nI(\theta)$ is the **Rao-Cramer lower bound** of $Y$


## Corollary 6.2.1: Rao-Cramér bound for unbiased estimators
> Under the same conditions as [[3 Reference/mathstat6.2#Theorem 6.2.1 Rao-Cramér lower bound]]
> 
> If $Y$ is an [[3 Reference/mathstat4.1#Definition 4.1.3 Unbiased estimator\|unbiased estimator]] of $\theta$ (so that $k(\theta) = \theta$ and $k'(\theta) = 1$)
>
> Then
> $$ \operatorname{Var}(Y) \geq \frac{1}{nI(\theta)} $$

> [!important]
> We call the ratio of [[3 Reference/def-rao-cramer-lower-bound_202507171109\|Rao-Cramer Lower Bound]] divided by $\operatorname{Var}(Y)$ the **efficiency of $Y$**:
> $$ \frac{\frac{[k'(\theta)]^2}{nI(\theta)}}{\operatorname{Var}(Y)}$$
> This means 
> 1. If efficiency = 1, then $Y$ is [[3 Reference/def-efficient-estimator_202507170919\|efficient]]
> 2. If efficiency approaches 1, then $Y$ is asymptotically efficient
>
> Thus $Y$ is efficient if and only if $\operatorname{Var}(Y)=\frac{1}{nI(\theta)}\iff nI(\theta)\cdot \operatorname{Var}Y=1$ [[3 Reference/mathstat6.2#Assumptions 6.2.1 Additional regularity conditions 1]] holds

^def-efficiency

## Definition 6.2.1: Efficient estimator
## Definition

Let $Y$ : [[3 Reference/Def-unbiased-estimator\|Unbiased estimator]] of parameter $\theta$

Then $Y$ is an **efficient estimator** $\iff$ $Y$ attains the [[3 Reference/mathstat6.2#Theorem 6.2.1 Rao-Cramér lower bound\|Rao-Cramér lower bound]]


## Assumptions 6.2.2: Additional regularity conditions 2
> - $(\mathbf{R5})$ : The pdf $f(x;\theta)$ is three times differentiable as a function of $\theta$. Further, for all $\theta \in \Omega$, there exist a constant $c$ and a function $M(x)$ such that $$
\left| \frac{\partial^3}{\partial \theta^3} \log f(x;\theta) \right| \leq M(x)
$$ with $E_{\theta_{0}}[M(X)]<\infty$, for all $\theta_{0}-c<\theta<\theta_{0} + c$ and all $x$ in the support of $X$.

## Theorem 6.2.2
> Assume
> - $X_{1},\dots,X_{n}$ : Random samples, with
> 	- pdf $f(x;\theta_{0})$, for $\theta_{0}\in \Omega$
> 	- All regularity conditions $(R0)-(R5)$ are satisfied.
> 
> If fisher information satisfies $0<I(\theta_{0})<\infty$
> 
> Then any consistent sequence of solutions of the mle equations satisfies
> $$
> \sqrt{ n }(\hat{\theta}-\theta_{0}) \xrightarrow{D} N\left( 0, \frac{1}{I(\theta_{0})} \right)
> $$
