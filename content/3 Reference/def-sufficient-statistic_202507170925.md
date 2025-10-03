---
{"publish":true,"aliases":["Sufficient Statistic"],"created":"2025-09-13T18:59:03.132+07:00","modified":"2025-10-03T13:05:35.935+07:00","published":"2025-10-03T13:05:35.935+07:00","cssclasses":"","creation-time":"2025-07-17 09:25","status":"baby","tag":null,"parent":"[[Introduction to Mathematical Statistics]]"}
---


## Definition

Let
- $X_1,\dots,X_n$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]], with joint [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y_1 = u_1(\mathbf{X})$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]], with pdf/pmf $f_{Y_1}(y_1;\theta)$

Then $Y_{1}$ is a **sufficient statistic** for $\theta$

If and only if
- $$ \frac{\prod_{i=1}^nf(x_{i};\theta)}{f_{Y_{1}}[u_{1}(\mathbf{x});\theta]} = H(\mathbf{x}) $$
- $H(\mathbf{X})$ does not depend upon $\theta$

## Remark
In short, to prove $Y_{1}$ is a sufficient statistic, we must show that $\dfrac{f}{f_{Y_{1}}}$ does not depend on $\theta$, i.e., does not have any $\theta$ terms in it.

A sufficient statistic captures all the information about $\theta$ contained in the sample, so the ratio of joint to marginal densities should be free of $\theta$ ( #TODO why?).
 
Also, a sufficient statistic **does not require the random variables to be independent**.

## Subdefinition
- [[3 Reference/def-complete-sufficient-statistic_202507170931\|Complete Sufficient Statistic]]
- [[3 Reference/def-jointly-sufficient-statistic_202507171021\|Jointly Sufficient Statistic]]

## Related theorems
- [[3 Reference/theorem-neyman-theorem_202508052229\|Neyman Theorem]]