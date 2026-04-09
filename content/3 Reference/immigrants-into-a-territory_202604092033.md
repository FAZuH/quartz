---
publish: true
aliases:
  - Immigrants into a Territory
created: 2026-04-09T23:07:39.413+07:00
modified: 2026-04-09T23:07:39.414+07:00
published: 2026-04-09T23:07:39.414+07:00
cssclasses: ""
creation-time: 2026-04-09 20:33
status: in progress
tags:
parent:
  - - - stochastic-model|Stochastic Model
---


## Example

Example 5.13 Suppose that people immigrate into a territory at a Poisson rate
λ = 1 per day.
(a) What is the expected time until the tenth immigrant arrives?
(b) What is the probability that the elapsed time between the tenth and the eleventh
arrival exceeds two days?

Solution:
(a) E[S10 ] = 10/λ = 10 days.
(b) P{T11 > 2} = e−2λ = e−2 ≈ 0.133.



Proposition 5.1 also gives us another way of deﬁning a Poisson process. Suppose we start with a sequence {Tn , n ⩾ 1} of independent identically distributed
exponential random variables each having mean 1/λ. Now let us deﬁne a counting process by saying that the nth event of this process occurs at time
Sn ≡ T1 + T2 + · · · + Tn
The resultant counting process {N(t), t ⩾ 0}∗ will be Poisson with rate λ.
∗

A formal deﬁnition of N(t) is given by N(t) ≡ max{n: Sn ⩽ t} where S0 ≡ 0.

5.3 The Poisson Process

319
