---
{"publish":true,"aliases":["5.4 Extensions to Multivariate Distributions.md"],"created":"2025-08-15T13:53:58.536+07:00","modified":"2025-08-15T13:53:58.537+07:00","published":"2025-08-15T13:53:58.537+07:00","cssclasses":"","creation-time":"2025-07-02 12:58","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
---

<< [[3 Reference/mathstat5.3\|5.3 Central Limit Theorem.md]] | [[3 Reference/mathstat6.1\|6.1 Maximum Likelihood Estimation.md]] >>

#TODO: Link the theorems where the theorems below are equivalent to componentwise 

## Some notations
For a vector $\mathbf{v}\in R^p$, the **Euclidean norm** of $\mathbf{v}$ is 
$$
||\mathbf{v}|| = \sqrt{ \sum_{i=1}^p v_{i}^2 }
$$

This norm satisfies the usual properties:
1. $\forall \mathbf{v}\in R^p, ||\mathbf{v}||\geq0\land||\mathbf{v}||=0\iff \mathbf{v}=\mathbf{0}$
2. $\forall \mathbf{v}\in R^p \land a\in R, ||a\mathbf{v}||=|a|\,||\mathbf{v}||$
3. $\forall \mathbf{v},\mathbf{u}\in R^p, ||\mathbf{u}+\mathbf{v}||\leq ||\mathbf{u}|| + ||\mathbf{v}||$

We denote the standard basis of $R^p$ by vectors $\mathbf{e}_{1},\dots,\mathbf{e}_{p}$, where all components of $\mathbf{e}_{i}$ are $0$ except for the $i$-th component, which is $1$. Then we can write any vector $\mathbf{v}^\prime=v_{1},\dots,v_{p}$ as
$$
\mathbf{v} = \sum_{i=1}^p v_{i}\mathbf{e}_{i}
$$

## Lemma 5.4.1
> Let $\mathbf{v}^\prime = (v_{1},\dots ,v_{p}$) : Any vector in $R^p$
> 
> Then
> $$
> \begin{align}
> |v_{j}| &\leq ||\mathbf{v}||  \\
>  & \leq \sum_{i=1}^n|v_{i}|,\quad \forall j=1,\dots,p
> \end{align}
> $$

## Definition 5.4.1: Multivariate converges in probability
![[3 Reference/def-multivariate-convergence-in-probability_202507170914#Definition]]

## Theorem 5.4.1
> Let
> - $\{ \mathbf{X}_{n} \}$ : Sequence of $p$-dimensional vectors
> - $\mathbf{X}$ : Random vector
> - $\{ X_{n} \}$ and $\mathbf{X}$ defined on the same sample space
> 
> Then
> $$
> \mathbf{X}_{n}\xrightarrow P \mathbf{X} \iff X_{nj}\xrightarrow P X_{j}, \quad \forall j=1,\dots, p
> $$

> [!note]
> This theorem shows the convergence in probability of vectors is equivalent to componentwise convergence in probability.


## Definition 5.4.2: Multivariate convergence in distribution
![[3 Reference/def-multivariate-convergence-in-distribution_202507170914#Definition]]

## Theorem 5.4.2
> Let
> - $\{ \mathbf{X}_{n} \}$ : Sequence of random vectors
> - $\mathbf{X}$ : Random vector
> - $g(\mathbf{X})$ : Function continuous on the support of $X$
> 
> If
> $$\{ \mathbf{X}_{n} \} \xrightarrow D \mathbf{X}$$
> 
> Then
> $$
> g(\mathbf{X}_{n}) \xrightarrow D g(\mathbf{X})
> $$

## Theorem 5.4.3
> Let
> - $\{ \mathbf{X}_{n} \}$ : Sequence of random vectors, with
> 	- $F_{n}(\mathbf{x})$ : [[3 Reference/mathstat1.5#Definition 1.5.2 Cumulative distribution function (cdf)\|cdf]] of $\mathbf{X}_{n}$
> 	- $M_{n}(\mathbf{t})$ : mgf of $\mathbf{X}_{n}$
> - $\mathbf{X}$ : Random vector, with
> 	- $F(\mathbf{x})$ : cdf of $\mathbf{X}$
> 	- $M(\mathbf{t})$ : mgf of $\mathbf{X}$
> 
> Then
> $$
> \{ \mathbf{X}_{n} \} \xrightarrow{D} \mathbf{X} \iff \exists h>0\ni \lim_{ n \to \infty } M_{n}(\mathbf{t}) = M(\mathbf{t}), \forall \mathbf{t} : ||\mathbf{t}||<h
> $$

> [!note]
> As in the [[3 Reference/mathstat5.2#Theorem 5.2.10 MGF technique\|univariate case]], convergence in distribution is equivalent to convergence of moment generating functions.

## Theorem 5.4.4: Multivariate central limit theorem
> Let
> - $\{ \mathbf{X}_{n} \}$ : Sequence of iid random vectors, with
> 	- $\boldsymbol{\mu}$ : Common mean vector
> 	- $\mathbf{\Sigma}$ : Variance-covariance matrix (which is positive definite)
> 	- $M(\mathbf{t})$ : Common mgf
> 
> If
> - $M(\mathbf{t})$ exists in an  open neighborhood of $\mathbf{0}$
> - $$
> \begin{align}
> \mathbf{Y}_{n} & = \frac{1}{\sqrt{ n }} \sum_{i=1}^n (\mathbf{X}_{i}-\boldsymbol\mu) \\
>  & = \sqrt{ n }(\bar{\mathbf{X}} - \boldsymbol \mu)
> \end{align}
> $$
> 
> Then
> $$
> \mathbf{Y}_{n} \xrightarrow{D} N_{p}(\mathbf{0}, \mathbf{\Sigma})
> $$

## Theorem 5.4.5
> Let
> - $\{ \mathbf{X}_{n} \}$ : Sequence of $p$-dimensional random vectors
> - $\mathbf{A}$ : $m\times p$ matrix of constants
> - $\mathbf{b}$ : $m$-dimensional vector of constants
> 
> If
> $$
> \mathbf{X}_{n}\xrightarrow D N(\boldsymbol \mu, \mathbf{\Sigma})
> $$
> 
> Then
> $$
> \mathbf{A}\mathbf{X}_{n} + \mathbf{b} \xrightarrow{D} N(\mathbf{A}\boldsymbol \mu + \mathbf{b}, \mathbf{A\Sigma A}^\prime)
> $$

## Theorem 5.4.6
> Let
> - $\{ \mathbf{X}_{n} \}$ : Sequence of $p$-dimensional random vectors
> - $\sqrt{ n }(\mathbf{X}_{n} - \boldsymbol \mu_{0})\xrightarrow D N_{p}(\mathbf{0}, \mathbf{\Sigma})$
> - $\mathbf{g}$ : Transformation $\mathbf{g}(\mathbf{x})=(g_{1}(\mathbf{x}),\dots,g_{k}(\mathbf{x}))^\prime \ni 1\leq k\leq p$
> - $\mathbf{B}$ : $k\times p$ matrix of partial derivatives are continuous and do not vanish in a neighborhood of $\boldsymbol \mu_{0}$
> $$
> B = \left[ \frac{\partial g_{i}}{\partial \mu_{j}} \right], \quad i=1,\dots,k;\ j=1,\dots,p
> $$
> - $\mathbf{B}_{0}= \mathbf{B}$ at $\boldsymbol\mu_{0}$
> 
> Then
> $$
> \sqrt{ n }(\mathbf{g}(\mathbf{X}_{n})-\mathbf{g}(\boldsymbol\mu_{0}))\xrightarrow{D} N_{k}(\mathbf{0}, \mathbf{B}_{0}\mathbf{\Sigma B}_{0}^\prime)
> $$
