---
publish: true
aliases:
  - Specificity and Sensitivity
  - Specificity
  - Sensitivity
created: 2026-04-09T23:07:39.316+07:00
modified: 2026-04-09T23:07:39.317+07:00
published: 2026-04-09T23:07:39.317+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 06:32
status: in progress
parent:
  - "[[categorical-data-analysis]]"
---


## Definition

In medical diagnostic tests, the accuracy of said diagnostic tests is often assessed with two conditional probabilities:
1. **Sensitivity**: Probability the test is positive, given the subject actually has the disease
2. **Specificity**: Probability the test is negative, given the subject actually does not have the disease

Let 
- $X$ : Actual state of the subject. $X=1$ is diseased, $X=2$ is healthy
- $Y$ : Outcome of test. $X=1$ is positive, $X=2$ is negative

Then
$$
\begin{align}
\text{sensitivity}  & = P(Y=1|X=1) = \pi_{1|1} = \frac{\pi_{11}}{\pi_{1+}} \\
\text{specificity}  & = P(Y=2|X=2) = \pi_{2|2} = \frac{\pi_{22}}{\pi_{2+}}
\end{align}
$$

The higher the sensitivity AND specificity, the better the diagnostic test.

## Example

Consider the following diagram

![[assets/image-41.png]]
