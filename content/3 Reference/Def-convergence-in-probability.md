---
publish: true
aliases:
  - Convergence in Probability
created: 2026-03-25T15:22:40.625+07:00
modified: 2026-03-25T15:22:40.625+07:00
published: 2026-03-25T15:22:40.625+07:00
creation-time: 2025-07-15 07:28
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- ${ X\_{n} }$ : Sequence of [[Def-random-variable|Random variables]]
- $X$ : Random variable

If
$$ \lim\_{ n \to \infty } P\[|X\_{n}-X|\geq \epsilon] = 0, \quad \forall \epsilon>0$$

- Or equivalently
  $$ \lim\_{ n \to \infty } P\[|X\_{n}-X| < \epsilon] = 1, \quad \forall \epsilon>0 $$

Then

- We say ${ X\_{n} }$ **converges in probability** to $X$
- We write
  $$ X\_{n} \xrightarrow P X $$

## Remark

If $X\_{n}\xrightarrow PX$, we often say that the mass of $X\_{n} - X$ is converging to $0$.

In statistics, often the limiting random variable $X$ is a constant; i.e., $X$ has a [[Def-degenerate-distribution|degenerate distribution]] with all its mass at some constant $a$. In this case, we write $X\_{n}\xrightarrow Pa$.

## Related theorems

- [[mathstat5.1#Theorem 5.1.1 Weak law of large numbers|Weak law of large numbers]] : $\bar{X}\_{n}\xrightarrow{P}\mu$
- [[mathstat5.1#Theorem 5.1.2|Theorem 5.1.2]] : $X\_{n} + Y\_{n}\xrightarrow PX+Y$
- [[mathstat5.1#Theorem 5.1.3|Theorem 5.1.3]] : $X\_{n}\xrightarrow PX \implies aX\_{n}\xrightarrow PaX$
- [[mathstat5.1#Theorem 5.1.4|Theorem 5.1.4]] : $g(X\_{n})\xrightarrow Pg(a)$
- [[mathstat5.1#Theorem 5.1.5|Theorem 5.1.5]] : $X\_{n}Y\_{n}\xrightarrow PXY$
- [[mathstat5.1#Theorem Law of large numbers for sample variance|Weak law of large numbers for sample variance]] : $S\_{n}^2\xrightarrow{P}\sigma^2$
- [[mathstat5.2#Theorem 5.2.2|Theorem 5.2.2]] : $X\_{n}\xrightarrow Db \iff X\_{n}\xrightarrow Pb$
- [[mathstat5.2#Theorem 1|Theorem 1]] : $U\_{n}\xrightarrow P c \implies\frac{U\_{n}}{c}\xrightarrow P 1$
- [[mathstat5.2#Theorem 2|Theorem 2]] : $\sqrt{ U\_{n} } \xrightarrow{P} \sqrt{ c }$
- [[mathstat5.2#Theorem 2.5|Theorem 2.5]]
  - $U\_{n}V\_{n}\xrightarrow P cd$
  - $\frac{U\_{n}}{V\_{n}}\xrightarrow P \frac{c}{d},\quad d\neq 0$
