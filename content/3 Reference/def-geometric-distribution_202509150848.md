---
{"publish":true,"aliases":["Geometric Distribution"],"created":"2025-09-15T08:48:11.465+07:00","modified":"2025-09-15T08:49:58.465+07:00","published":"2025-09-15T08:49:58.465+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-15 08:48","status":"baby","parent":["[[mathematical-statistics]]"]}
---


## Definition

$X \sim \text{Geom}(p)$

Special case of [[3 Reference/def-negative-binomial-distribution_202509150822\|negative binomial distribution]] with $r=1$. Distribution for number of failures needed for a single success. 

- pmf: $(1-p)^xp$, $x \in {0,1,2,\ldots}$
- mean: $\dfrac{1-p}{p}$
- var: $\dfrac{1-p}{p^2}$
- mgf: $\dfrac{p}{1-(1-p)e^t}$, $t < -\ln(1-p)$