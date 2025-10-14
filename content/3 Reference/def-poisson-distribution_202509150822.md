---
{"publish":true,"aliases":["Poisson Distribution"],"created":"2025-10-14T04:15:27.074+07:00","modified":"2025-10-14T04:15:27.074+07:00","published":"2025-10-14T04:15:27.074+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-15 08:22","status":"baby","parent":["[[mathematical-statistics]]"]}
---


## Definition

$X \sim \text{Poisson}(\lambda)$

Models number of [[3 Reference/Def-events\|events]] occurring in fixed intervals of time/space when:

- Events occur at <u>constant rate</u> $\lambda$
- Events are independent of one another
- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]]: $\dfrac{e^{-\lambda}\lambda^x}{x!}$, $x \in {0,1,2,\ldots}$, $\lambda > 0$
- [[3 Reference/Def-mean\|mean]]: $\lambda$
- [[3 Reference/Def-variance\|variance]]: $\lambda$
- [[3 Reference/Def-moment-generating-function-(mgf)\|mgf]]: $e^{\lambda(e^t-1)}$

## Notes

When modeling count data, use [[3 Reference/def-negative-binomial-distribution_202509150822\|negative binomial distribution]] instead of [[3 Reference/def-poisson-distribution_202509150822\|poisson distribution]] to handle [[3 Reference/overdispersion_202509150835\|overdispersion]].

Count data refers to numerical data that represents the number of times an event occurs.

The Poisson distribution is suitable for count data when the <u>mean and variance are approximately equal</u>, assuming events occur independently and at a constant average rate.

However, in real-world count data, overdispersion often occurs, where the variance exceeds the mean due to factors like clustering or unobserved heterogeneity.

The negative binomial distribution accommodates this overdispersion by introducing an additional parameter to model the variance more flexibly.