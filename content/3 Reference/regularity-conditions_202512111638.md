---
publish: true
aliases:
  - Regularity Conditions
created: 2026-03-25T15:22:40.607+07:00
modified: 2026-03-25T15:22:40.607+07:00
published: 2026-03-25T15:22:40.607+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-12-11 16:38
status: in progress
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Assumptions

- $(\mathbf{R0})$ : The [[3 Reference/Def-cumulative-distribution-function-(cdf)\|cdfs]] are distinct; i.e., $\theta \neq \theta'\implies F(x_{i};\theta)\neq F(x_{i};\theta')$ ^R0
- $(\mathbf{R1})$ : The [[3 Reference/Def-probability-density-function-(pdf)\|pdfs]] have common support for all $\theta$ ^R1
- $(\mathbf{R2})$ : The point $\theta_{0}$ is an interior point in $\Omega$ ^R2
- $(\mathbf{R3})$ : The pdf $f(x;\theta)$ is twice differentiable as a function of $\theta$.
- $(\mathbf{R4})$ : The integral $\int f(x;\theta)$ can be differentiated twice under the integral sign as a function of $\theta$.
- $(\mathbf{R5})$ : The pdf $f(x;\theta)$ is three times differentiable as a function of $\theta$. Further, for all $\theta \in \Omega$, there exist a constant $c$ and a function $M(x)$ such that $$
\left| \frac{\partial^3}{\partial \theta^3} \log f(x;\theta) \right| \leq M(x)
$$ with $E_{\theta_{0}}[M(X)]<\infty$, for all $\theta_{0}-c<\theta<\theta_{0} + c$ and all $x$ in the support of $X$.