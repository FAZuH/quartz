---
{"publish":true,"aliases":["Neyman Theorem"],"created":"2025-09-13T18:59:07.452+07:00","modified":"2025-10-03T10:07:40.497+07:00","published":"2025-10-03T10:07:40.497+07:00","cssclasses":"","creation-time":"2025-08-05 22:29","status":"baby","tag":null,"parent":"[[Introduction to Mathematical Statistics]]"}
---


## Theorem

Let
- $X_{1},\dots,X_{n}=\mathbf{X}$ : [[3 Reference/Def-random-sample\|Random sample]], with distribution that has [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y_{1} = u_{1}(\mathbf{X})$ : [[3 Reference/Def-statistic\|Statistic]] for $\theta$

Then $Y_{1}$ is a [[3 Reference/def-sufficient-statistic_202507170925\|Sufficient statistic]] for $\theta$ 

If and only if 
- $$\exists k_{1},k_{2} \ni \prod_{i=1}^n f(x_{i};\theta) = k_{1}[u_{1}(\mathbf{x});\theta]k_{2}(\mathbf{x})$$
- $k_{2}(\mathbf{x})$ is independent of $\theta$

## Remark

To determine if $Y_{1}$ is a sufficient statistic, 

we have to show that the product of its pdf

can be written as the multiplication of two functions:
1. A function of $Y_{1}$ that may depend on $\theta$
2. A function of the random sample that does NOT depend on $\theta$