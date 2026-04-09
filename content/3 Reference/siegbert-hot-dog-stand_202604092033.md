---
publish: true
aliases:
  - Siegbert Hot Dog Stand
created: 2026-04-09T23:07:39.583+07:00
modified: 2026-04-09T23:07:39.584+07:00
published: 2026-04-09T23:07:39.584+07:00
cssclasses: ""
creation-time: 2026-04-09 20:33
status: in progress
tags:
parent:
  - - - stochastic-model|Stochastic Model
---


## Example

Example 5.24 Siegbert runs a hot dog stand that opens at 8 A.M. From 8 until
11 A.M. customers seem to arrive, on the average, at a steadily increasing rate
that starts with an initial rate of 5 customers per hour at 8 A.M. and reaches a
maximum of 20 customers per hour at 11 A.M. From 11 A.M. until 1 P.M. the
(average) rate seems to remain constant at 20 customers per hour. However,
the (average) arrival rate then drops steadily from 1 P.M. until closing time at
5 P.M. at which time it has the value of 12 customers per hour. If we assume
that the numbers of customers arriving at Siegbert’s stand during disjoint time
periods are independent, then what is a good probability model for the preceding? What is the probability that no customers arrive between 8:30 A.M. and
9:30 A.M. on Monday morning? What is the expected number of arrivals in this
period?
Solution: A good model for the preceding would be to assume that arrivals
constitute a nonhomogeneous Poisson process with intensity function λ(t)
