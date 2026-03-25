---
publish: true
aliases:
  - Order Statistics
created: 2026-03-25T15:22:40.644+07:00
modified: 2026-03-25T15:22:40.644+07:00
published: 2026-03-25T15:22:40.644+07:00
creation-time: 2025-07-15 07:25
status: complete
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let $X\_{1} ,\dots, X\_{n}$ : [[Def-random-sample|Random Sample]] with [[Def-probability-density-function-(pdf)|pdf]] $f(x)$ and [[Def-support-of-continuous-random-variable|support]] $(a,b)$

If

- $Y\_{1} = \min{X\_1, \dots, X\_n}$
- $Y\_{k}$ : $k$-th smallest value of $X\_{1},\dots, X\_{n}$
- $Y\_{n} = \max{X\_1,\dots, X\_n}$

Then we say $Y\_{1}, \dots ,Y\_{n}$ is **order statistic** of $X\_{1},\dots, X\_{n}$

## About order statistics

Imagine you roll several dice at once. After rolling, you sort the numbers you get.

Now, you wonder:

- What’s the probability of getting the **smallest number**?
- What’s the probability of getting the **second smallest number**?
- And so on...

These sorted values are called **order statistics**.

In a sample of size $n$, the **$k$-th order statistic $Y\_k$** is the $k$-th smallest value from your sample.

> [!TIP]
> We are asking questions about:
>
> - "What's the probability that the smallest value is $\leq$ 3?"
> - "What's the expected value of the second-largest number?"
