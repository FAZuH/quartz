---
publish: true
aliases:
  - 5.1 Convergence in Probability
created: 2026-02-22T19:24:22.088+07:00
modified: 2026-02-22T19:24:22.090+07:00
published: 2026-02-22T19:24:22.090+07:00
cssclasses: ""
creation-time: 2025-06-24 07:59
status: baby
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[3 Reference/mathstat4.4\|4.4 Order Statistics]] | [[3 Reference/mathstat5.2\|5.2 Convergence in Distribution.md]] >>

To emphasize the fact that we are working with sequences of [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|random variables]], we may place a subscript $n$ on the appropriate random variable, e.g., write sequence of $\bar{X}$ as $\bar{X}_{n}$

## Definition 5.1.1: Convergence in probability

## Definition

Let
- $\{ X_{n} \}$ : Sequence of [[3 Reference/Def-random-variable\|Random variables]]
- $X$ : Random variable

If
$ \lim_{ n \to \infty } P[|X_{n}-X|\geq \epsilon] = 0, \quad \forall \epsilon>0$$
- Or equivalently
$ \lim_{ n \to \infty } P[|X_{n}-X| < \epsilon] = 1, \quad \forall \epsilon>0 $$

Then
- We say $\{ X_{n} \}$ **converges in probability** to $X$
- We write
$ X_{n} \xrightarrow P X $$


## Theorem 5.1.1: Weak law of large numbers

## Theorem

Let
- $\{ X_{n} \}$ : Sequence of [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random samples]], with
	- Common mean $\mu$
	- Common variance $\sigma^2<\infty$
- $\bar{X}_{n}=\frac{1}{n}\sum_{i=1}^nX_{i}$$

Then
$$
\bar{X}_{n} \xrightarrow{P}\mu
$$


In the following sections ([[3 Reference/mathstat5.1#Theorem 5.1.2]] to [[3 Reference/mathstat5.1#Theorem 5.1.5]]) we describe some theorems related to convergence of sequence of random variables. For brevity, we implicitly let:

- $X,Y$ : Random variables
- $X_{n},Y_{n}$: Sequences of $X,Y$ respectively
- $a\in \mathbb{R}$ : Some constant

## Theorem 5.1.2
> Suppose 
> - $X_{n}\xrightarrow PX$
> - $Y_{n}\xrightarrow PY$
> 
> Then
> $$
> X_{n} + Y_{n}\xrightarrow PX+Y
> $$

## Theorem 5.1.3
> $$
> X_{n}\xrightarrow PX \implies aX_{n}\xrightarrow PaX
> $$

## Theorem 5.1.4
> Let
> - $g:\mathbb{R}\to \mathbb{R}$
> 
> Suppose
> - $X_{n}\xrightarrow Pa$
> - $g$ is [[3 Reference/5.1 Continuous Functions#5.1.1 Definition Continuous function at a point\|continuous at point]] $a$
> 
> Then
> $$
> g(X_{n})\xrightarrow Pg(a)
> $$

## Theorem 5.1.5
> Suppose
> - $X_{n}\xrightarrow PX$
> - $Y_{n}\xrightarrow PY$
> 
> Then
> $$
> X_{n}Y_{n}\xrightarrow PXY
> $$

## Definition 5.1.2: Consistent estimator
## Definition

Let
- $X$ : [[3 Reference/Def-random-variable\|Random variable]], with
	- $\Omega$ : Parameter space
	- [[3 Reference/mathstat1.5#Definition 1.5.2 Cumulative distribution function (cdf)\|cdf]] $F(x;\theta\in \Omega)$
- $X_{1},\dots, X_{n}$  : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]] of $X$
- $T_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]]

If
$$
T_{n}\xrightarrow P \theta
$$

Then we say $T_{n}$ is a **consistent** [[3 Reference/Def-estimator\|estimator]] of $\theta$

## Theorem: Law of large numbers for sample variance

> Let
> - ${ X_{i} }$ : Sequence of [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random samples]], with
>     - Common mean $\mu$
>     - Common variance $\sigma^2<\infty$
> - $S_{n}^2 = \frac{1}{n-1}\sum_{i=1}^n(X_i - \bar{X}_n)^2$ : Sample variance
> 
> Then $$ S_{n}^2 \xrightarrow{P} \sigma^2 $$

> [!note] 
> This theorem states that the sample variance $S_n^2$ is a [[3 Reference/mathstat5.1#Definition 5.1.2 Consistent estimator\|consistent estimator]] of the population variance $\sigma^2$.

Before stating the strong law of large numbers, we need to introduce the concept of almost sure convergence, which is a stronger form of convergence than convergence in probability.

## Definition: Almost sure convergence
## Definition


Let

- ${ X_{n} }$ : Sequence of [[3 Reference/Def-random-variable\|Random variables]]
- $X$ : Random variable

If $ P\left[\lim_{n \to \infty} X_{n} = X\right] = 1 $$

Then

- We say ${ X_{n} }$ **converges almost surely** to $X$
- We write $ X_{n} \xrightarrow{a.s.} X $$

## Theorem: Strong law of large numbers

> Let
> 
> - ${ X_{n} }$ : Sequence of [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|random samples]], with
>     - Common mean $\mu$
>     - Common variance $\sigma^2<\infty$
> - $\bar{X}_{n}=n^{-1}\sum_{i=1}^nX_{i}$
> 
> Then $$ \bar{X}_{n} \xrightarrow{a.s.}\mu $$

The strong law of large numbers provides a stronger guarantee than the [[3 Reference/mathstat5.1#Theorem 5.1.1 Weak law of large numbers\|weak law of large numbers]].

While the weak law states that $\bar{X}_n$ converges to $\mu$ in probability, the strong law states that ==$\bar{X}_n$ converges to $\mu$ almost surely==, meaning that with probability 1, the sample mean will eventually stabilize around the true mean $\mu$ as $n \to \infty$.

The key difference between strong and weak law of large numbers are:
- Weak: For any $\epsilon>0$, the probability that $\bar{X}_{n}$ is "far" from $\mu$ becomes small as $n$ gets large
- Strong: With probability $1$, the sequence $\bar{X}_{n}$ will converge to $\mu$

