---
publish: true
aliases:
  - Properties of Convergence in Probability
created: 2026-03-25T15:22:40.621+07:00
modified: 2026-03-25T15:22:40.621+07:00
published: 2026-03-25T15:22:40.621+07:00
tags:
  - 
creation-time: 2025-10-03 10:53
status: in progress
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X\_{n},Y\_{n},A\_{n}$ : [[def-sequence-of-real-numbers_202510030255|Sequences]] of [[Def-random-sample|random sample]]
- $X\_{n}\xrightarrow{P} X$
- $Y\_{n}\xrightarrow{P} Y$
- $A\_{n} \xrightarrow{P} a$
- $B\_{n} \xrightarrow{P} b$
- $a\in \mathbb{R}$

Then

1. $X\_{n} + Y\_{n} \xrightarrow{P} X+Y$
2. $X\_{n}\xrightarrow{P}X\implies aX\_{n}\xrightarrow{P}aX$
3. $g(X\_{n}) \xrightarrow{P} g(X)$\[^1]
4. $X\_{n}Y\_{n} \xrightarrow{P} XY$
5. $g(A\_{n}) \xrightarrow{P} g(a)$
6. $A\_{n}/a \xrightarrow{P} 1$
7. $\sqrt{ A\_{n} } \xrightarrow{P} \sqrt{ c }$
8. $A\_{n}B\_{n} \xrightarrow{P} ab$
9. $b\neq 0 \implies A\_{n}/B\_{n} \xrightarrow{P} a/b$

## Proofs

### 1.

> $X\_{n} + Y\_{n} \xrightarrow{P} X+Y$

Let $\epsilon>0$ be given.

Notice that if $|(X\_{n}+Y\_{n})-(X+Y)| \geq \epsilon$, then by [[theorem-triangle-inequality_202508160051|triangle inequality]],
$$
\epsilon\leq |(X\_{n} + Y\_{n}| = |(X\_{n}-X) + (Y\_{n}-Y)|\leq |X\_{n}-X|+|Y\_{n}-Y|
$$

Therefore, the event ${ |(X\_{n} + Y\_{n}) - (X - Y)|\geq \epsilon }$ is contained in the event ${ |X\_{n} - X| + |Y\_{n}-Y| \geq \epsilon }$.

Since the [[Def-probability-set-function|probability set function]] is monotone with respect to set containment, then
$$
P\[|(X\_{n}+Y\_{n})-(X+Y)\geq\epsilon]; \leq; P\[|X\_{n}-X|+|Y\_{n}-Y|\geq\epsilon]
$$

If $|X\_{n}-X| + |Y\_{n}-Y| \geq \epsilon$, then at least one of the followign must hold:

- $|X\_{n}-X|\geq\epsilon/2$, or
- $|Y\_{n}-Y|\geq\epsilon/2$, or

Therefore,
$$
P\[|X\_{n}-X| + |Y\_{n}-Y| \geq \epsilon] \leq P\[|X\_{n}-X| \geq \epsilon/2] + P\[|Y\_{n}-Y|\geq\epsilon/2]
$$

By hypothesis, $X\_{n} \xrightarrow{P} X$ and $Y\_{n} \xrightarrow{P} Y$, so both terms on the right converge to $0$ as $n\to \infty$.

Because  $P\[|X\_{n}-X| + |Y\_{n}-Y| \geq \epsilon] = 0$ as $n\to \infty$, by definition of [[Def-convergence-in-probability|convergence in probability]], we have that $X\_{n}+Y\_{n} \xrightarrow{P} X+Y$.

### 2.

> $X\_{n}\xrightarrow{P}X\implies aX\_{n}\xrightarrow{P}aX$

Suppose $a\neq 0$. Let $\epsilon>0$. Then,
$$
\begin{align}
P\[|aX\_{n}-aX|\geq \epsilon] & = P\[|a|; |X\_{n}-X| \geq \epsilon] \\
& = P\[|X\_{n}-X| \geq \epsilon/|a|]
\end{align}
$$

Notice that the last term converges to $0$. Thus, $P\[|aX\_{n}-aX|\geq \epsilon]$ also converges to $0$.

### 3.

> $g(X\_{n}) \xrightarrow{P} g(X)$

### 4.

> $X\_{n}Y\_{n} \xrightarrow{P} XY$

By [[#1.]], [[#2.]] and [[#3.]], we have
$$
\begin{align}
X\_{n}Y\_{n} & = \frac{1}{2}X\_{n}^{2}  + \frac{1}{2}Y\_{n}^{2} - \frac{1}{2}(X\_{n}-Y\_{n})^{2} \\
& \xrightarrow{P} \frac{1}{2}X^2 + \frac{1}{2}Y^2 - \frac{1}{2}(X-Y)^{2}
\end{align}
$$

### 5.

> $g(A\_{n}) \xrightarrow{P} g(a)$

### 6.

> $A\_{n}/a \xrightarrow{P} 1$

### 7.

> $\sqrt{ A\_{n} } \xrightarrow{P} \sqrt{ c }$

### 8.

> $A\_{n}B\_{n} \xrightarrow{P} ab$

### 9.

> $b\neq 0 \implies A\_{n}/B\_{n} \xrightarrow{P} a/b$

\[^1]: Page 104 of Tucker (1967)
