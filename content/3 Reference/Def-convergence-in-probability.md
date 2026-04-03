---
publish: true
aliases:
  - Convergence in Probability
created: 2026-03-25T15:22:40.625+07:00
modified: 2026-03-25T15:22:40.625+07:00
published: 2026-03-25T15:22:40.625+07:00
cssclasses: ""
creation-time: 2025-07-15 07:28
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $\{ X_{n} \}$ : Sequence of [[3 Reference/Def-random-variable\|Random variables]]
- $X$ : Random variable

If
$$ \lim_{ n \to \infty } P[|X_{n}-X|\geq \epsilon] = 0, \quad \forall \epsilon>0$$
- Or equivalently
$$ \lim_{ n \to \infty } P[|X_{n}-X| < \epsilon] = 1, \quad \forall \epsilon>0 $$

Then
- We say $\{ X_{n} \}$ **converges in probability** to $X$
- We write
$$ X_{n} \xrightarrow P X $$

## Remark

If $X_{n}\xrightarrow PX$, we often say that the mass of $X_{n} - X$ is converging to $0$.

In statistics, often the limiting random variable $X$ is a constant; i.e., $X$ has a [[3 Reference/Def-degenerate-distribution\|degenerate distribution]] with all its mass at some constant $a$. In this case, we write $X_{n}\xrightarrow Pa$.

## Related theorems
- [[3 Reference/mathstat5.1#Theorem 5.1.1 Weak law of large numbers\|Weak law of large numbers]] : $\bar{X}_{n}\xrightarrow{P}\mu$
- [[3 Reference/mathstat5.1#Theorem 5.1.2\|Theorem 5.1.2]] : $X_{n} + Y_{n}\xrightarrow PX+Y$
- [[3 Reference/mathstat5.1#Theorem 5.1.3\|Theorem 5.1.3]] : $X_{n}\xrightarrow PX \implies aX_{n}\xrightarrow PaX$
- [[3 Reference/mathstat5.1#Theorem 5.1.4\|Theorem 5.1.4]] : $g(X_{n})\xrightarrow Pg(a)$
- [[3 Reference/mathstat5.1#Theorem 5.1.5\|Theorem 5.1.5]] : $X_{n}Y_{n}\xrightarrow PXY$
- [[3 Reference/mathstat5.1#Theorem Law of large numbers for sample variance\|Weak law of large numbers for sample variance]] : $S_{n}^2\xrightarrow{P}\sigma^2$
- [[3 Reference/mathstat5.2#Theorem 5.2.2\|Theorem 5.2.2]] : $X_{n}\xrightarrow Db \iff X_{n}\xrightarrow Pb$
- [[3 Reference/mathstat5.2#Theorem 1\|Theorem 1]] : $U_{n}\xrightarrow P c \implies\frac{U_{n}}{c}\xrightarrow P 1$
- [[3 Reference/mathstat5.2#Theorem 2\|Theorem 2]] : $\sqrt{ U_{n} } \xrightarrow{P} \sqrt{ c }$
- [[3 Reference/mathstat5.2#Theorem 2.5\|Theorem 2.5]]
	- $U_{n}V_{n}\xrightarrow P cd$
	- $\frac{U_{n}}{V_{n}}\xrightarrow P \frac{c}{d},\quad d\neq 0$