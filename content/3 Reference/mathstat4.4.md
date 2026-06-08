---
publish: true
aliases:
  - 4.4 Order Statistics
created: 2026-04-09T23:07:39.469+07:00
modified: 2026-04-09T23:07:39.470+07:00
published: 2026-04-09T23:07:39.470+07:00
creation-time: 2025-06-24 01:07
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[4.2.2-confidence-interval-for-difference-in-proportion_202507220849|4.2.2 Confidence Interval for Difference in Proportion]] | [[4.5-introduction-to-hypothesis-testing_202507291322|4.5 Introduction to Hypothesis Testing]] >>

## Definition: Order statistics

![[Def-order-statistics#Definition]]

## Theorem 4.4.1: Joint pdf of order statistics

![[theorem-joint-pdf-of-order-statistics_202510031033#Theorem]]

## Marginal pdf of order statistics

![[theorem-marginal-pdf-of-order-statistics_202510031045#Theorem]]

## CDF of order statistics

![[theorem-cdf-of-order-statistics_202510031046#Theorem]]

## Exercise

### Example 1

Misal $Y_{1},Y_{2},Y_{3}$ statistik terurut dengan $n=3$.

Menggunakan [Marginal pdf and of order statistics](#Marginal%20pdf%20of%20order%20statistics), dapat diperoleh pdf marginal sebagai berikut:

1. **pdf marginal untuk $Y_1$** :

$$
    g_1(y_1) = \begin{cases}
    3[1-F(y_1)]^{2} f(y_1), & a < y_1 < b \\
    0, & \text{lainnya} \end{cases}
$$

2. **pdf marginal untuk $Y_2$** :

Untuk $a < y_2 < b$:

$$
\begin{align*}
    g_2(y_2) &= \frac{3!}{(2-1)!(3-2)!}[F(y_2)]^{2-1}[1-F(y_2)]^{3-2} f(y_2) \\
    &= \frac{6}{1! \cdot 1!}F(y_2)[1-F(y_2)] f(y_2) \\
    &= 6F(y_2)[1-F(y_2)] f(y_2) \\
\end{align*}
$$

dan $g_2(y_2) = 0$ untuk lainnya.

3. **pdf marginal untuk $Y_3$** :

$$
g_3(y_3) = \begin{cases}
    3[F(y_3)]^{2} f(y_3), & a < y_3 < b \\
    0, & \text{lainnya}
\end{cases}
$$

### Exercise 4.56 of Hogg & Craig 5th ed.

Let $Y_{1} < Y_{2} < Y_{3} < Y_{4}$ be the order statistics of a random sample of size 4 from the distribution having p.d.f. $f(x)=e^{-x}$, zero elsewhere. Find $Pr(3\leq Y_{4})$.

We will use [CDF of order statistics](#CDF%20of%20order%20statistics) to solve this problem.

![[assets/Pasted image 20250624044727.png]]
