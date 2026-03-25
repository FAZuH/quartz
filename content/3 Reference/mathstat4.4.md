---
publish: true
aliases:
  - 4.4 Order Statistics
created: 2026-03-25T15:22:40.609+07:00
modified: 2026-03-25T15:22:40.609+07:00
published: 2026-03-25T15:22:40.609+07:00
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

Misal $Y\_{1},Y\_{2},Y\_{3}$ statistik terurut dengan $n=3$.

Menggunakan [Marginal pdf and of order statistics](#Marginal%20pdf%20of%20order%20statistics), dapat diperoleh pdf marginal sebagai berikut:

1. **pdf marginal untuk $Y\_1$** :
   $$
   g\_1(y\_1) = \begin{cases}
   3\[1-F(y\_1)]^{2} f(y\_1), & a < y\_1 < b \\
   0, & \text{lainnya} \end{cases}
   $$

2. **pdf marginal untuk $Y\_2$** :

Untuk $a < y\_2 < b$:
$$
\begin{align\*}
g\_2(y\_2) &= \frac{3!}{(2-1)!(3-2)!}\[F(y\_2)]^{2-1}\[1-F(y\_2)]^{3-2} f(y\_2) \\
&= \frac{6}{1! \cdot 1!}F(y\_2)\[1-F(y\_2)] f(y\_2) \\
&= 6F(y\_2)\[1-F(y\_2)] f(y\_2) \\
\end{align\*}
$$

dan $g\_2(y\_2) = 0$ untuk lainnya.

3. **pdf marginal untuk $Y\_3$** :

$$
g\_3(y\_3) = \begin{cases}
3\[F(y\_3)]^{2} f(y\_3), & a < y\_3 < b \\
0, & \text{lainnya}
\end{cases}
$$

### Exercise 4.56 of Hogg & Craig 5th ed.

Let $Y\_{1} < Y\_{2} < Y\_{3} < Y\_{4}$ be the order statistics of a random sample of size 4 from the distribution having p.d.f. $f(x)=e^{-x}$, zero elsewhere. Find $Pr(3\leq Y\_{4})$.

We will use [CDF of order statistics](#CDF%20of%20order%20statistics) to solve this problem.

![[assets/Pasted image 20250624044727.png]]
