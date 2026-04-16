---
publish: true
aliases:
  - Nonhomogeneous Poisson Process Demand of a Facility
created: 2026-04-09T23:29:02.803+07:00
modified: 2026-04-09T23:29:02.804+07:00
published: 2026-04-09T23:29:02.804+07:00
cssclasses: ""
creation-time: 2026-04-09 20:33
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---


## Example

Demands on a first aid facility in a certain location occur according to a nonhomogeneous Poisson process having the rate function

$$
\lambda(t) = \begin{cases} 
2t & , 0 \leq t < 1 \\
2 & , 1 \leq t < 2 \\
4 - t & , 2 \leq t \leq 4
\end{cases}
$$

where $t$ is measured in hours from the opening time of the facility. 

What is the probability that two demands occur in the first two hours of operation and two in the second two hours?