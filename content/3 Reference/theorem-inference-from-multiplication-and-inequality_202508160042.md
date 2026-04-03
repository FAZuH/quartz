---
publish: true
aliases:
  - Inference from Multiplication and Inequality
created: 2026-03-25T15:22:40.611+07:00
modified: 2026-03-25T15:22:40.611+07:00
published: 2026-03-25T15:22:40.611+07:00
cssclasses: ""
creation-time: 2025-08-16 00:42
status: in progress
tag:
parent: "[[Introduction to Real Analysis]]"
---


## Theorem

Let $a,b,c\in\mathbb R$.

- $(a > b\wedge b > c) \Rightarrow \textcolor{red}{a > c}$

- $a > b \Rightarrow (\textcolor{red}{a + c > b + c})$

- $(a > b\wedge c > 0) \Rightarrow \textcolor{red}{ca > cb}$
  $(a > b\wedge c < 0) \Rightarrow \textcolor{red}{ca < cb}$


## Proof
Let $ab > 0$. Then $a \neq 0$ and $b \neq 0$.
(If either $a = 0$ or $b=0$, then from [[3 Reference/2.1 The Algebraic and Order Properties of R#2.1.3 Theorem Uniqueness of reciprocal and multiplication resulting in 0\|2.1.3 (2)]] we have $ab = 0$, which violates [[3 Reference/def-order-properties-of-real-numbers_202508160028\|tricothomy property]])

Because $a\in\mathbb R$, and $a\neq 0$, from [[3 Reference/def-order-properties-of-real-numbers_202508160028\|Tricothomy Property]], $a\in\mathbb P$ or $-a \in \mathbb P$.

Consider all cases for $a$:
- If $a \in \mathbb P$, then $\frac 1 a \in \mathbb P$, so $b = \frac 1 a (ab) \in \mathbb P$.
- If $-a \in \mathbb P$, then $- \frac 1 a \in \mathbb P$, so $-b = - (\frac 1 a) (ab) \in \mathbb P$.

Both cases guarantees there could only be 2 possibilities:
1. $a > 0$ and $b > 0$, or
2. $a < 0$ and $b < 0$