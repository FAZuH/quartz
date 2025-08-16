---
{"publish":true,"aliases":["6.2 Rao-Cramér Lower Bound and Efficiency.md"],"created":"2025-08-15T13:53:58.617+07:00","modified":"2025-08-15T13:53:58.618+07:00","published":"2025-08-15T13:53:58.618+07:00","cssclasses":"","creation-time":"2025-07-06 23:56","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
---


<< [[3 Reference/mathstat6.1\|6.1 Maximum Likelihood Estimation.md]] | [[3 Reference/mathstat7.1\|7.1 Measures of Quality Estimators.md]] >>

## Assumptions 6.2.1: Additional regularity conditions 1
> - $(\mathbf{R3})$ : The pdf $f(x;\theta)$ is twice differentiable as a function of $\theta$.
> - $(\mathbf{R4})$ : The integral $\int f(x;\theta)$ can be differentiated twice under the integral sign as a function of $\theta$.

## Definition: Score function
![[3 Reference/def-score-function_202507170918#Definition]]

## Definition: Fisher information
![[3 Reference/def-fisher-information_202507170919#Definition]]

## Theorem 6.2.1: Rao-Cramér lower bound
![[3 Reference/def-rao-cramer-lower-bound_202507171109#Definition^]]

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
![[3 Reference/def-efficient-estimator_202507170919#Definition]]

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
