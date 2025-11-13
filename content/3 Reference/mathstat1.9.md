---
{"publish":true,"aliases":["1.9 Some Special Expectations.md"],"created":"2025-10-14T04:15:27.047+07:00","modified":"2025-10-14T04:15:27.047+07:00","published":"2025-10-14T04:15:27.047+07:00","cssclasses":"","creation-time":"2025-06-24 01:28","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---


<< [[3 Reference/mathstat1.8\|1.8 Expectation of Random Variable]] | [[3 Reference/mathstat1.10\|1.10 Important Inequalities.md]] >>

## Definition 1.9.1: Mean
![[3 Reference/Def-mean#Definition]]

## Definition 1.9.2: Variance
![[3 Reference/Def-variance#Definition]]

## Definition: Moments
![[3 Reference/Def-moments#Definition]]

## Theorem 1.9.1: Constant multiplication and addition with variance
> Let
> - $X$ : Random variable, with
> 	- Finite $\mu$
> 	- Finite $\sigma^2$
> - $a,b\in \mathbb{R}$ : Constants
> 
> Then
> $$
> \operatorname{Var}(aX+b) = a^2\operatorname{Var}(X)
> $$

## Definition 1.9.3: Moment generating function (mgf)
![[3 Reference/Def-moment-generating-function-(mgf)#Definition]]

## Theorem 1.9.2: Uniqueness of mgf
> Let
> - $X,Y$ : [[3 Reference/Def-random-variable\|Random variables]]
> - $M_{X},M_{Y}$ : [[3 Reference/Def-moment-generating-function-(mgf)\|mgf]] of $X,Y$ respectively, existing in some [[3 Reference/2.2 Absolute Value and the Real Line#2.2.7 Definition Neighborhood\|neighborhood]] of $0$
> 
> Then
> $$
> F_{X}(z)=F_{Y}(z),\;\forall z\in \mathbb{R} \iff \exists h>0 \ni M_{X}(t)=M_{Y}(t),\;\forall t\in(-h,h)
> $$

This theorem states that two random variables have the same distribution **if and only if they have the same mgf** in some neighborhood of zero.

## Remark 1.9.1: Characteristic function
> Let 
> - $X$ : Random variable
> - $i$ : Imaginary unit
> - $t\in\mathbb{R}$ 
> 
> If
> $$\varphi(t)=E(e^{itX})$$
> 
> Then we say $\varphi(t)$ is the **characteristic function** of $X$

Important property of this expectation is that while distributions may not have an mgf, **every distribution has a unique characteristic function**
