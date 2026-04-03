---
publish: true
aliases:
  - Probability Set Function
created: 2026-03-25T15:22:40.642+07:00
modified: 2026-03-25T15:22:40.642+07:00
published: 2026-03-25T15:22:40.642+07:00
cssclasses: ""
creation-time: 2025-07-15 01:14
status: complete
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition
Let
- $\mathcal C$ : [[3 Reference/Def-sample-space\|Sample space]]
- $\mathcal B$ : [[3 Reference/Def-events\|Events]] ($\mathcal{B}\subset \mathcal{C}$)
- $P : \mathcal B \to \mathbb{R}$  (Function)

If
1. $P(A)\geq 0,\quad\forall A\subset\mathcal B$
2. $P(\mathcal C) = 1$
3. If $\{ A_{n} \}\in \mathcal B$ and $A_{m}\cap A_{n}=\phi,\;\forall m\neq n$ then
$$
P\left(\bigcup_{n=1}^{\infty} A_n\right)=\sum_{n=1}^{\infty} P\left(A_n\right)
$$

Then 
- We say $P$ is a **probability set function**
- We call the return value of $P$ as the probability


## Remark

A probability [[3 Reference/def-set_202510022014\|set]] function is essentially a function that maps [[3 Reference/def-subset_202507240733\|subset]] of events $\mathcal{B}$ to a real number.

It also must satisfy certain axioms (referred to as [Kolmogorov axiom of probability](https://en.wikipedia.org/wiki/Probability_axioms)). The conditions listed above can be interpreted as:
1. The probability of an event is a non-negative real number:
2. The probability of the sample space itself is 1
3. If events are mutually exclusive (i.e., cannot occur simultaneously), then the probability that at least one of them occurs equals the sum of their individual probabilities.
   