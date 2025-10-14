---
{"publish":true,"aliases":["Unique MVUE (UMVUE)","Lehmann and Scheffe Theorem","UMVUE","UUMVE"],"created":"2025-10-14T04:15:27.060+07:00","modified":"2025-10-14T04:15:27.060+07:00","published":"2025-10-14T04:15:27.060+07:00","cssclasses":"","creation-time":"2025-07-17 09:37","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---


## Theorem

Let
- $X_{1},\dots,X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y_{1}=u_{1}(X_{1},\dots,X_{n})$ : [[3 Reference/def-complete-sufficient-statistic_202507170931\|Complete sufficient statistic]] for $\theta$

If $\phi(Y_{1})$ is an [[3 Reference/mathstat4.1#Definition 4.1.3 Unbiased estimator\|unbiased estimator]] of $\theta$

Then $\phi(Y_{1})$ is the **unique [[3 Reference/def-minimum-variance-unbiased-estimator-(mvue)_202507170925\|MVUE]]** (UMVUE) of $\theta$

![[assets/Pasted image 20250721081812.png]]
## Remark

In the reference book, this theorem is called Lehmann and Scheffe theorem.

The Lehmann-Scheffé theorem states that if $T$ is a **complete sufficient statistic** for a parameter $\theta$, then a function of it is **UMVUE**, if it's **unbiased and exists**