---
{"publish":true,"aliases":["Unbiased Estimator","Unbiased Estimator"],"created":"2025-08-16T00:08:21.394+07:00","modified":"2025-08-16T00:08:21.395+07:00","published":"2025-08-16T00:08:21.395+07:00","cssclasses":"","creation-time":"2025-07-15 07:13","status":"baby","tag":null,"parent":"[[mathematical statistics]]"}
---


## Definition

Let
- $X_{1},\dots, X_{n}$ : [[3 Reference/Def-random-sample\|Random samples]], with
	- $\Omega$ : Parameter space
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x;\theta), \quad \theta \in \Omega$
- $T$ : [[3 Reference/Def-statistic\|Statistic]] of $X_{1},\dots, X_{n}$

If
$$E(T)=\theta,\quad \forall \theta\in \Omega$$

Then we say $T$ is an **unbiased** estimator of $\theta$

## Remark
More formally, $T$ is called a **point estimator** of $\theta$. We call its realization $t$ an **estimate** of $\theta$.

## Related theorems
**Obtain**
- [[3 Reference/mathstat7.3#Theorem 7.3.1 Rao-Blackwell\|Rao-Blackwell]] : $E(Y_{2}|Y_{1}) = \varphi(Y_{1})$, $Y_{2}$ sufficient, $Y_{1}$ unbiased

**Use**
- [[3 Reference/mathstat6.2#Corollary 6.2.1 Rao-Cramér bound for unbiased estimators\|Rao-Cramer Lower Bound for Unbiased Estimators]]

