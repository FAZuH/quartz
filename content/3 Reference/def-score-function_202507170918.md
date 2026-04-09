---
publish: true
aliases:
  - Score Function
  - Score Function
created: 2026-04-09T23:07:39.301+07:00
modified: 2026-04-09T23:07:39.302+07:00
published: 2026-04-09T23:07:39.302+07:00
cssclasses: ""
creation-time: 2025-07-17 09:18
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $X$ : [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|Random variable]], with
    - [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]] $f(x;\theta)$, for $\theta \in \Omega$

Then the **score function** is defined as
 $$S(x;\theta) = \frac{\partial}{\partial \theta} \ln f(x;\theta)$$

## Remark
> [!note] 
> The score function determines the estimating equations for the MLE. That is, the MLE $\hat{\theta}$ solves:
> 
> $$
> \begin{align}
> \sum_{i=1}^n S(x_i;\theta)  & = \sum_{i=1}^n \frac{\partial}{\partial \theta} \ln f(x_i;\theta)  \\
>  & = 0
> \end{align}
> $$
