---
publish: true
aliases:
  - Properties of Convergence in Probability
created: 2025-10-14T04:15:27.063+07:00
modified: 2025-10-14T04:15:27.063+07:00
published: 2025-10-14T04:15:27.063+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-03 10:53
status: baby
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Theorem

Let 
- $X_{n},Y_{n},A_{n}$ : [[3 Reference/def-sequence-of-real-numbers_202510030255\|Sequences]] of [[3 Reference/Def-random-sample\|random sample]]
- $X_{n}\xrightarrow{P} X$
- $Y_{n}\xrightarrow{P} Y$
- $A_{n} \xrightarrow{P} a$
- $B_{n} \xrightarrow{P} b$
- $a\in \mathbb{R}$

Then
1. $X_{n} + Y_{n} \xrightarrow{P} X+Y$
2. $X_{n}\xrightarrow{P}X\implies aX_{n}\xrightarrow{P}aX$
3. $g(X_{n}) \xrightarrow{P} g(X)$[^1]
4. $X_{n}Y_{n} \xrightarrow{P} XY$
5. $g(A_{n}) \xrightarrow{P} g(a)$
6. $A_{n}/a \xrightarrow{P} 1$
7. $\sqrt{ A_{n} } \xrightarrow{P} \sqrt{ c }$
8. $A_{n}B_{n} \xrightarrow{P} ab$
9. $b\neq 0 \implies A_{n}/B_{n} \xrightarrow{P} a/b$

## Proofs

### 1.
> $X_{n} + Y_{n} \xrightarrow{P} X+Y$

Let $\epsilon>0$ be given.

Notice that if $|(X_{n}+Y_{n})-(X+Y)| \geq \epsilon$, then by [[3 Reference/theorem-triangle-inequality_202508160051\|triangle inequality]],
$$
\epsilon\leq |(X_{n} + Y_{n}| = |(X_{n}-X) + (Y_{n}-Y)|\leq |X_{n}-X|+|Y_{n}-Y|
$$

Therefore, the event $\{ |(X_{n} + Y_{n}) - (X - Y)|\geq \epsilon \}$ is contained in the event $\{ |X_{n} - X| + |Y_{n}-Y| \geq \epsilon \}$.

Since the [[3 Reference/Def-probability-set-function\|probability set function]] is monotone with respect to set containment, then
$$
P[|(X_{n}+Y_{n})-(X+Y)\geq\epsilon]\; \leq\; P[|X_{n}-X|+|Y_{n}-Y|\geq\epsilon]
$$

If $|X_{n}-X| + |Y_{n}-Y| \geq \epsilon$, then at least one of the followign must hold:
- $|X_{n}-X|\geq\epsilon/2$, or
- $|Y_{n}-Y|\geq\epsilon/2$, or

Therefore, 
$$
P[|X_{n}-X| + |Y_{n}-Y| \geq \epsilon] \leq P[|X_{n}-X| \geq \epsilon/2] + P[|Y_{n}-Y|\geq\epsilon/2]
$$

By hypothesis, $X_{n} \xrightarrow{P} X$ and $Y_{n} \xrightarrow{P} Y$, so both terms on the right converge to $0$ as $n\to \infty$.

Because  $P[|X_{n}-X| + |Y_{n}-Y| \geq \epsilon] = 0$ as $n\to \infty$, by definition of [[3 Reference/Def-convergence-in-probability\|convergence in probability]], we have that $X_{n}+Y_{n} \xrightarrow{P} X+Y$.

### 2.
> $X_{n}\xrightarrow{P}X\implies aX_{n}\xrightarrow{P}aX$

Suppose $a\neq 0$. Let $\epsilon>0$. Then,
$$
\begin{align}
P[|aX_{n}-aX|\geq \epsilon] & = P[|a|\; |X_{n}-X| \geq \epsilon] \\
 & = P[|X_{n}-X| \geq \epsilon/|a|]
\end{align}
$$

Notice that the last term converges to $0$. Thus, $P[|aX_{n}-aX|\geq \epsilon]$ also converges to $0$.

### 3. 

> $g(X_{n}) \xrightarrow{P} g(X)$

### 4.
> $X_{n}Y_{n} \xrightarrow{P} XY$

By [[3 Reference/theorem-properties-of-convergence-in-probability_202510031053#1.]], [[3 Reference/theorem-properties-of-convergence-in-probability_202510031053#2.]] and [[3 Reference/theorem-properties-of-convergence-in-probability_202510031053#3.]], we have
$$
\begin{align}
X_{n}Y_{n} & = \frac{1}{2}X_{n}^{2}  + \frac{1}{2}Y_{n}^{2} - \frac{1}{2}(X_{n}-Y_{n})^{2} \\
 & \xrightarrow{P} \frac{1}{2}X^2 + \frac{1}{2}Y^2 - \frac{1}{2}(X-Y)^{2}
\end{align}
$$
### 5.
> $g(A_{n}) \xrightarrow{P} g(a)$

### 6.
> $A_{n}/a \xrightarrow{P} 1$

### 7.
> $\sqrt{ A_{n} } \xrightarrow{P} \sqrt{ c }$

### 8.
> $A_{n}B_{n} \xrightarrow{P} ab$

### 9.
> $b\neq 0 \implies A_{n}/B_{n} \xrightarrow{P} a/b$

[^1]: Page 104 of Tucker (1967)
