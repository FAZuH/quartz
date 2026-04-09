---
publish: true
aliases:
  - Customers in Line
created: 2026-04-09T23:07:39.083+07:00
modified: 2026-04-09T23:07:39.084+07:00
published: 2026-04-09T23:07:39.084+07:00
cssclasses: ""
creation-time: 2026-04-09 20:33
status: in progress
tags:
parent:
  - - - stochastic-model|Stochastic Model
---


## Example

Example 5.10 Suppose that customers are in line to receive service that is provided sequentially by a server; whenever a service is completed, the next person
in line enters the service facility. However, each waiting customer will only wait
an exponentially distributed time with rate θ; if its service has not yet begun by
this time then it will immediately depart the system. These exponential times,
one for each waiting customer, are independent. In addition, the service times are
independent exponential random variables with rate μ. Suppose that someone is
presently being served and consider the person who is nth in line.
(a) Find Pn , the probability that this customer is eventually served.
(b) Find Wn , the conditional expected amount of time this person spends waiting in line
given that she is eventually served.

Solution: Consider the n + 1 random variables consisting of the remaining
