---
publish: true
aliases:
  - 5.1 Convergence in Probability
created: 2026-03-25T15:22:40.599+07:00
modified: 2026-03-25T15:22:40.599+07:00
published: 2026-03-25T15:22:40.599+07:00
creation-time: 2025-06-24 07:59
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat4.4|4.4 Order Statistics]] | [[mathstat5.2|5.2 Convergence in Distribution.md]] >>

To emphasize the fact that we are working with sequences of [[mathstat1.5#Definition 1.5.1 Random variable|random variables]], we may place a subscript $n$ on the appropriate random variable, e.g., write sequence of $\bar{X}$ as $\bar{X}\_{n}$

## Definition 5.1.1: Convergence in probability

![[Def-convergence-in-probability#Definition]]

## Theorem 5.1.1: Weak law of large numbers

![[theorem-weak-law-of-large-numbers_202510031058#Theorem]]

In the following sections ([[#Theorem 5.1.2]] to [[#Theorem 5.1.5]]) we describe some theorems related to convergence of sequence of random variables. For brevity, we implicitly let:

- $X,Y$ : Random variables
- $X\_{n},Y\_{n}$: Sequences of $X,Y$ respectively
- $a\in \mathbb{R}$ : Some constant

## Theorem 5.1.2

> Suppose
>
> - $X\_{n}\xrightarrow PX$
> - $Y\_{n}\xrightarrow PY$
>
> Then
> $$
> X\_{n} + Y\_{n}\xrightarrow PX+Y
> $$

## Theorem 5.1.3

> $$
> X\_{n}\xrightarrow PX \implies aX\_{n}\xrightarrow PaX
> $$

## Theorem 5.1.4

> Let
>
> - $g:\mathbb{R}\to \mathbb{R}$
>
> Suppose
>
> - $X\_{n}\xrightarrow Pa$
> - $g$ is [[5.1 Continuous Functions#5.1.1 Definition Continuous function at a point|continuous at point]] $a$
>
> Then
> $$
> g(X\_{n})\xrightarrow Pg(a)
> $$

## Theorem 5.1.5

> Suppose
>
> - $X\_{n}\xrightarrow PX$
> - $Y\_{n}\xrightarrow PY$
>
> Then
> $$
> X\_{n}Y\_{n}\xrightarrow PXY
> $$

## Definition 5.1.2: Consistent estimator

![[Def-consistent-estimator#Definition]]

## Theorem: Law of large numbers for sample variance

> Let
>
> - ${ X\_{i} }$ : Sequence of [[mathstat4.1#Definition 4.1.1 Random sample|random samples]], with
>   - Common mean $\mu$
>   - Common variance $\sigma^2<\infty$
> - $S\_{n}^2 = \frac{1}{n-1}\sum\_{i=1}^n(X\_i - \bar{X}\_n)^2$ : Sample variance
>
> Then $$ S\_{n}^2 \xrightarrow{P} \sigma^2 $$

> [!note]
> This theorem states that the sample variance $S\_n^2$ is a [[#Definition 5.1.2 Consistent estimator|consistent estimator]] of the population variance $\sigma^2$.

Before stating the strong law of large numbers, we need to introduce the concept of almost sure convergence, which is a stronger form of convergence than convergence in probability.

## Definition: Almost sure convergence

![[Def-almost-sure-convergence#Definition]]

## Theorem: Strong law of large numbers

> Let
>
> - ${ X\_{n} }$ : Sequence of [[mathstat4.1#Definition 4.1.1 Random sample|random samples]], with
>   - Common mean $\mu$
>   - Common variance $\sigma^2<\infty$
> - $\bar{X}_{n}=n^{-1}\sum_{i=1}^nX\_{i}$
>
> Then $$ \bar{X}\_{n} \xrightarrow{a.s.}\mu $$

The strong law of large numbers provides a stronger guarantee than the [[#Theorem 5.1.1 Weak law of large numbers|weak law of large numbers]].

While the weak law states that $\bar{X}\_n$ converges to $\mu$ in probability, the strong law states that ==$\bar{X}\_n$ converges to $\mu$ almost surely==, meaning that with probability 1, the sample mean will eventually stabilize around the true mean $\mu$ as $n \to \infty$.

The key difference between strong and weak law of large numbers are:

- Weak: For any $\epsilon>0$, the probability that $\bar{X}\_{n}$ is "far" from $\mu$ becomes small as $n$ gets large
- Strong: With probability $1$, the sequence $\bar{X}\_{n}$ will converge to $\mu$
