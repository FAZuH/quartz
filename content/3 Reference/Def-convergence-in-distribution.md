---
publish: true
aliases:
  - Convergence in Distribution
  - Convergence in Distribution
created: 2026-04-09T23:07:39.120+07:00
modified: 2026-04-09T23:07:39.121+07:00
published: 2026-04-09T23:07:39.121+07:00
cssclasses: ""
creation-time: 2025-07-15 07:35
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $\set{X_n}$ : Sequence of [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|random variables]], with
	- $F_{X_{n}}$ : [[3 Reference/mathstat1.5#Definition 1.5.2 Cumulative distribution function\|cdf]] of $X_{n}$
- $X$ : Random variable
	- $F_{X}$ : cdf of $X$
- $C(F_{X})$ denote the set of all points where $F_{X}$ is [[3 Reference/5.1 Continuous Functions#5.1.1 Definition Continuous function at a point\|continuous]]

If
$$
\lim_{ x \to \infty } F_{X_{n}}(x) = F_{X}(x), \quad \forall x\in C(F_{X})
$$

Then
- We say $X_n$ **converges in distribution** to $X$
- We write $X_n \xrightarrow{D}X$

## Remark

1. The notation $X_n \xrightarrow{D} c$ means $\lim_{n \to \infty} F_{X_n}(x) = F_c(x)$ at continuity points of $F_c$
2. If $X_{n}\xrightarrow D X$, we often say the distribution of $X$ is the **asymptotic distribution** or the **limiting distribution** of $\{ X_{n} \}$.
3. If $X$ is [[3 Reference/Def-degenerate-distribution\|degenerate]], with all its mass at some constant $a$. In that case, we may write $X_n \xrightarrow P a$.
4. If $X_{n}\xrightarrow D X$ where $X\sim N(0,1)$, we may write $X_{n}\xrightarrow D N(0,1)$^convergence-to-dist-notation

## Related theorems
- [[3 Reference/mathstat5.2#Theorem 5.2.1\|Theorem 5.2.1]] : $X_{n}\xrightarrow P X\implies X_{n}\xrightarrow{D}X$
- [[3 Reference/mathstat5.2#Theorem 5.2.2\|Theorem 5.2.2]] : $X_{n}\xrightarrow Db \iff X_{n}\xrightarrow Pb$
- [[3 Reference/mathstat5.2#Theorem 5.2.3\|Theorem 5.2.3]] : $X_{n}+Y_{n}\xrightarrow DX$
- [[3 Reference/mathstat5.2#Theorem 5.2.4\|Theorem 5.2.4]] : $g(X_{n})\xrightarrow D g(X)$
- [[3 Reference/mathstat5.2#Theorem 5.2.5 Slutsky's theorem\|Slutsky's theorem]] : $A_{n}+B_{n}X_{n}\xrightarrow D a + bX$
- [[3 Reference/mathstat5.2#Theorem 5.2.10 MGF technique\|Theorem: MGF Technique]] : $\lim_{ n \to \infty }M_{X_{n}}(t)=M(t)\implies X_{n}\xrightarrow{D}X$
- [[3 Reference/mathstat5.2#Theorem 3\|Theorem 3]] : $W_{n} \xrightarrow{D} F(w)$
- [[3 Reference/mathstat5.3#Theorem 5.3.1 Central limit theorem\|Central limit theorem]] : $Y_{n}\xrightarrow{D}N(0,1)$