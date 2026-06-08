---
publish: true
aliases:
  - Insurance Company Policyholders
created: 2026-04-09T23:29:02.794+07:00
modified: 2026-04-09T23:29:02.794+07:00
published: 2026-04-09T23:29:02.794+07:00
creation-time: 2026-04-09 20:34
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---

## Example

Example 5.30 An insurance company feels that each of its policyholders has a
rating value and that a policyholder having rating value λ will make claims at
times distributed according to a Poisson process with rate λ, when time is measured in years. The ﬁrm also believes that rating values vary from policyholder to
policyholder, with the probability distribution of the value of a new policyholder
being uniformly distributed over (0, 1). Given that a policyholder has made n
claims in his or her ﬁrst t years, what is the conditional distribution of the time
until the policyholder’s next claim?
Solution: If T is the time until the next claim, then we want to compute
P{T > x | N(t) = n}. Conditioning on the policyholder’s rating value gives,
upon using Equation (5.28),
P{T > x | N(t) = n} =

 ∞

P{T > x | L = λ, N(t) = n}fL|N(t) (λ | n) dλ

0
 1 −λx −λt n
e e λ dλ
\= 0 1
−λt λn dλ
0 e


