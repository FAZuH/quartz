---
publish: true
aliases:
  - Quantile
  - Quantile
created: 2025-10-14T04:15:27.057+07:00
modified: 2025-10-14T04:15:27.057+07:00
published: 2025-10-14T04:15:27.057+07:00
cssclasses: ""
creation-time: 2025-07-15 06:26
status: baby
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $0<p<1$
- $X$ : Random variable

If 
- $\xi_{p}$ such that 
	- $P(X<\xi_{p})\leq p$
	- $P(X\leq \xi_{p})\geq p$

Then
- We say $\xi_{p}$ is the **quantile** of order $p$ of $X$
- We say $\xi_{p}$ is the $(100p)$th **percentile** of $X$

## Remark
Examples include the **median** which is the quantile $\xi_{1/2}$.

The median is also called the **second quartile**. The **first and third quartiles** divide each of these halves into quarters. They are, respectively $\xi_{1/4}$ and $\xi_{3/4}$. We label these quartiles as $q_{1},q_{2},q_{3}$ respectively.

The difference $\text{iq}=q_{3}-q_{1}$ is called the **interquartile range**.

The median is often used as a **measure of center** of the distribution of $X$, while the interquartile range is used as a **measure of spread/dispersion** of the distribution $X$.