---
{"publish":true,"aliases":["Rao-Cramer Lower Bound"],"created":"2025-09-13T18:59:02.314+07:00","modified":"2025-09-13T01:05:24.000+07:00","published":"2025-09-13T01:05:24.000+07:00","cssclasses":"","creation-time":"2025-07-17 11:09","status":"baby","tag":null,"parent":"[[Introduction to Mathematical Statistics]]"}
---


## Definition

Let
- $X_{1},\dots,X_{n}$: [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]] $f(x;\theta),\theta\in \Omega$
- $Y=u(X_{1},X_{2},\dots,X_{n})$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]], with [[3 Reference/Def-mean\|Mean]] $E(Y)= k(\theta)$
- $I(\theta)$ : [[3 Reference/def-fisher-information_202507170919\|Fisher information]]

Assume [[3 Reference/mathstat6.1#Assumptions 6.1.1 Regularity conditions\|regularity conditions]] and [[3 Reference/def-rao-cramer-lower-bound_202507171109#Assumptions 6.2.1 Additional regularity conditions 1\|additional regularity conditions 1]] hold.

Then
$$ \operatorname{Var}(Y)\geq \boxed{\frac{[k'(\theta)]^2}{nI(\theta)}} $$
- We say $[k'(\theta)]^2/nI(\theta)$ is the **Rao-Cramer lower bound** of $Y$

## Remark

The Rao-Cramér lower bound provides a theoretical minimum variance for unbiased estimators when regularity conditions hold. 

If the bound cannot be computed or doesn't seem to apply, then **one or more regularity conditions may have been violated**.
