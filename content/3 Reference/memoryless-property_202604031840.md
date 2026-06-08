---
publish: true
aliases:
  - Memoryless Property
created: 2026-04-09T23:07:39.487+07:00
modified: 2026-05-22T03:09:12.356+07:00
published: 2026-05-22T03:09:12.356+07:00
tags:
  - type/about
creation-time: 2026-04-03 18:40
status: in progress
parent:
  - "[[stochastic-model]]"
---

A random variable $X$ is **memoryless** if:

$P(X > s + t \mid X > t) = P(X > s)$

for all $s, t \geq 0$.

Given that you've already waited $t$ units, the chance you wait at least $s$ more units is exactly the same as if you had just started waiting.

## Intuition

If the lifetime of an item is memoryless, an item that has been in use for $t$ hours is **as good as a new item** regarding the amount of time remaining until it fails.

The item does not "remember" how long it has already been in use. Or more generally, ==the process "forgets" its age==

## Uniqueness

The [[def-exponential-distribution-survival_202603281500|exponential distribution]] is the **only** continuous distribution with this property. This is why it appears so frequently in stochastic process modeling — it's the natural choice when "the future doesn't depend on the past."

## Everyday Illustration

- **Memoryless**: A lightbulb with exponential lifetime. A bulb that has lasted 1000 hours has the same expected remaining lifetime as a brand new bulb.
- **Not memoryless**: A car tire. A tire that has been driven 50,000 km is more likely to fail soon than a new tire — it "remembers" its wear.

## Connection to Stochastic Processes

The memoryless property of the [[def-exponential-distribution-survival_202603281500|exponential distribution]] is what makes the [[poisson-process_202604031845|Poisson Process]] "restart" probabilistically at each event. This is why inter-arrival times are i.i.d. exponential — each event resets the clock.

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution]]
- [[inter-arrival-times_202604031845|Inter-arrival Times]]
- [[failure-rate-function_202604031840|Failure Rate Function]]
