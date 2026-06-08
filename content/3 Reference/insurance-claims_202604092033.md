---
publish: true
aliases:
  - Insurance Claims
created: 2026-04-09T23:29:02.793+07:00
modified: 2026-04-09T23:29:02.793+07:00
published: 2026-04-09T23:29:02.793+07:00
creation-time: 2026-04-09 20:33
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---

## Example

Example 5.21 Insurance claims are made at times distributed according to a
Poisson process with rate λ; the successive claim amounts are independent random
variables having distribution G with mean μ, and are independent of the claim
arrival times. Let Si and Ci denote, respectively, the time and the amount of the
ith claim. The total discounted cost of all claims made up to time t, call it D(t),
is deﬁned by
D(t) =

N(t)


e−αSi Ci

i=1

where α is the discount rate and N(t) is the number of claims made by time t. To
determine the expected value of D(t), we condition on N(t) to obtain
E\[D(t)] =

∞

n=0

E\[D(t)|N(t) = n]e−λt

(λt)n
n!

5.3 The Poisson Process

335

Now, conditional on N(t) = n, the claim arrival times S1 , . . . , Sn are distributed
as the ordered values U(1) , . . . , U(n) of n independent uniform (0, t) random variables U1 , . . . , Un . Therefore,
, n

−αU(i)
