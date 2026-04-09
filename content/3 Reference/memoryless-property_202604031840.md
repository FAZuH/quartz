---
publish: true
aliases:
  - Memoryless Property
created: 2026-04-09T23:07:39.487+07:00
modified: 2026-04-09T23:07:39.488+07:00
published: 2026-04-09T23:07:39.488+07:00
tags:
  - type/about
cssclasses: ""
creation-time: 2026-04-03 18:40
status: in progress
parent:
  - "[[stochastic-model]]"
---


A random variable $X$ is **memoryless** if:

$$P(X > s + t \mid X > t) = P(X > s)$$

for all $s, t \geq 0$.

## Intuition

If the lifetime of an item is memoryless, an item that has been in use for $t$ hours is **as good as a new item** regarding the amount of time remaining until it fails. The item does not "remember" how long it has already been in use.

## Uniqueness

The [[3 Reference/def-exponential-distribution-survival_202603281500\|exponential distribution]] is the **only** continuous distribution with this property. This is why it appears so frequently in stochastic process modeling — it's the natural choice when "the future doesn't depend on the past."

## Everyday Illustration

- **Memoryless**: A lightbulb with exponential lifetime. A bulb that has lasted 1000 hours has the same expected remaining lifetime as a brand new bulb.
- **Not memoryless**: A car tire. A tire that has been driven 50,000 km is more likely to fail soon than a new tire — it "remembers" its wear.

## Connection to Stochastic Processes

The memoryless property of the [[3 Reference/def-exponential-distribution-survival_202603281500\|exponential distribution]] is what makes the [[3 Reference/poisson-process_202604031845\|Poisson Process]] "restart" probabilistically at each event. This is why inter-arrival times are i.i.d. exponential — each event resets the clock.

## Related

- [[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution]]
- [[3 Reference/inter-arrival-times_202604031845\|Inter-arrival Times]]
- [[3 Reference/failure-rate-function_202604031840\|Failure Rate Function]]
