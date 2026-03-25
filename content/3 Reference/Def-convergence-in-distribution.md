---
publish: true
aliases:
  - Convergence in Distribution
  - Convergence in Distribution
created: 2026-03-25T15:22:40.596+07:00
modified: 2026-03-25T15:22:40.596+07:00
published: 2026-03-25T15:22:40.596+07:00
creation-time: 2025-07-15 07:35
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $\set{X\_n}$ : Sequence of [[mathstat1.5#Definition 1.5.1 Random variable|random variables]], with
  - $F\_{X\_{n}}$ : [[mathstat1.5#Definition 1.5.2 Cumulative distribution function|cdf]] of $X\_{n}$
- $X$ : Random variable
  - $F\_{X}$ : cdf of $X$
- $C(F\_{X})$ denote the set of all points where $F\_{X}$ is [[5.1 Continuous Functions#5.1.1 Definition Continuous function at a point|continuous]]

If
$$
\lim\_{ x \to \infty } F\_{X\_{n}}(x) = F\_{X}(x), \quad \forall x\in C(F\_{X})
$$

Then

- We say $X\_n$ **converges in distribution** to $X$
- We write $X\_n \xrightarrow{D}X$

## Remark

1. The notation $X\_n \xrightarrow{D} c$ means $\lim\_{n \to \infty} F\_{X\_n}(x) = F\_c(x)$ at continuity points of $F\_c$
2. If $X\_{n}\xrightarrow D X$, we often say the distribution of $X$ is the **asymptotic distribution** or the **limiting distribution** of ${ X\_{n} }$.
3. If $X$ is [[Def-degenerate-distribution|degenerate]], with all its mass at some constant $a$. In that case, we may write $X\_n \xrightarrow P a$.
4. If $X\_{n}\xrightarrow D X$ where $X\sim N(0,1)$, we may write $X\_{n}\xrightarrow D N(0,1)$^convergence-to-dist-notation

## Related theorems

- [[mathstat5.2#Theorem 5.2.1|Theorem 5.2.1]] : $X\_{n}\xrightarrow P X\implies X\_{n}\xrightarrow{D}X$
- [[mathstat5.2#Theorem 5.2.2|Theorem 5.2.2]] : $X\_{n}\xrightarrow Db \iff X\_{n}\xrightarrow Pb$
- [[mathstat5.2#Theorem 5.2.3|Theorem 5.2.3]] : $X\_{n}+Y\_{n}\xrightarrow DX$
- [[mathstat5.2#Theorem 5.2.4|Theorem 5.2.4]] : $g(X\_{n})\xrightarrow D g(X)$
- [[mathstat5.2#Theorem 5.2.5 Slutsky's theorem|Slutsky's theorem]] : $A\_{n}+B\_{n}X\_{n}\xrightarrow D a + bX$
- [[mathstat5.2#Theorem 5.2.10 MGF technique|Theorem: MGF Technique]] : $\lim\_{ n \to \infty }M\_{X\_{n}}(t)=M(t)\implies X\_{n}\xrightarrow{D}X$
- [[mathstat5.2#Theorem 3|Theorem 3]] : $W\_{n} \xrightarrow{D} F(w)$
- [[mathstat5.3#Theorem 5.3.1 Central limit theorem|Central limit theorem]] : $Y\_{n}\xrightarrow{D}N(0,1)$
