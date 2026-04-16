---
publish: true
aliases:
  - The Output Process of an Infinite Server Poisson Queue
created: 2026-04-09T23:29:02.812+07:00
modified: 2026-04-09T23:29:02.812+07:00
published: 2026-04-09T23:29:02.812+07:00
cssclasses: ""
creation-time: 2026-04-09 20:34
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---


## Example

Example 5.25 (The Output Process of an Inﬁnite Server Poisson Queue) It turns
out that the output process of the M/G/∞ queue—that is, of the inﬁnite server
queue having Poisson arrivals and general service distribution G—is a nonhomogeneous Poisson process having intensity function λ(t) = λG(t). To verify
this claim, let us ﬁrst argue that the departure process has independent increments. Towards this end, consider nonoverlapping intervals O1 , . . . , Ok ; now
say that an arrival is type i, i = 1, . . . , k, if that arrival departs in the interval Oi .

5.4 Generalizations of the Poisson Process

345

By Proposition 5.3, it follows that the numbers of departures in these intervals
are independent, thus establishing independent increments. Now, suppose that
an arrival is “counted” if that arrival departs between t and t + h. Because an
arrival at time s, s < t + h, will be counted with probability G(t−s + h)−G(t−s),
it follows from Proposition 5.3 that the number of departures in (t, t + h) is a
