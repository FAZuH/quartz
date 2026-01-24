---
publish: true
aliases:
  - Boole's Inequality
created: 2025-10-14T04:15:27.042+07:00
modified: 2025-10-14T04:15:27.042+07:00
published: 2025-10-14T04:15:27.042+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-02 20:40
status: adult
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Theorem

Let $\{ C_{n} \}$ : Any [[3 Reference/3.1 Sequences and Their Limits#3.1.1 Definition Sequence of real numbers\|sequence]] of [[3 Reference/Def-events\|events]]

Then
$$
P\left(\bigcup_{n=1}^\infty C_{n}\right)\leq \sum_{n=1}^\infty P(C_{n})
$$

## Proof

Let $D_{n} = \bigcup_{i=1}^n C_{i}$. Then $\{ D_{n} \}$ is an [[3 Reference/def-monotone-sequence_202510030252\|increasing sequence]] of [[3 Reference/Def-events\|events]] that go up to $\bigcup_{n=1}^\infty C_{n}$.

Also, for all $j$, $D_{j}=D_{j-1}\cup C_{j}$. Hence, by point 5 of [[3 Reference/theorem-property-of-probability-set-function_202510022034\|Property of Probability Set Function]],
$$
P(D_{j})\leq P(D_{j-1})+P(C_{j})
$$
that is,
$$
P(D_{j})-P(D_{j-1})\leq P(C_{j})
$$

In this case, the $C_{i}$s are replaced by the $D_{i}$s in expression