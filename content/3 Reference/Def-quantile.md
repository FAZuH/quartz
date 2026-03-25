---
publish: true
aliases:
  - Quantile
  - Quantile
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.615+07:00
published: 2026-03-25T15:22:40.615+07:00
creation-time: 2025-07-15 06:26
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $0\<p<1$
- $X$ : Random variable

If

- $\xi\_{p}$ such that
  - $P(X<\xi\_{p})\leq p$
  - $P(X\leq \xi\_{p})\geq p$

Then

- We say $\xi\_{p}$ is the **quantile** of order $p$ of $X$
- We say $\xi\_{p}$ is the $(100p)$th **percentile** of $X$

## Remark

Examples include the **median** which is the quantile $\xi\_{1/2}$.

The median is also called the **second quartile**. The **first and third quartiles** divide each of these halves into quarters. They are, respectively $\xi\_{1/4}$ and $\xi\_{3/4}$. We label these quartiles as $q\_{1},q\_{2},q\_{3}$ respectively.

The difference $\text{iq}=q\_{3}-q\_{1}$ is called the **interquartile range**.

The median is often used as a **measure of center** of the distribution of $X$, while the interquartile range is used as a **measure of spread/dispersion** of the distribution $X$.
