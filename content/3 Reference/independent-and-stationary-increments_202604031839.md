---
publish: true
aliases:
  - Independent and Stationary Increments
created: 2026-04-03T18:39:58.574+07:00
modified: 2026-04-09T22:37:13.659+07:00
published: 2026-04-09T22:37:13.659+07:00
tags:
  - type/about
cssclasses: ""
creation-time: 2026-04-03 18:39
status: in progress
parent:
  - "[[stochastic-model]]"
---


A [[3 Reference/counting-process_202604031839\|counting process]] can possess two important properties regarding how events accumulate over time.

## Independent Increments

The numbers of events that occur in **disjoint** time intervals are independent.

For example, $N(10)$ (events by time 10) is independent of $N(15) - N(10)$ (events between time 10 and 15).

**When reasonable**: Customer arrivals at a store where each arrival is unrelated to previous ones.

**When unreasonable**: Births in a population — if $N(t)$ is very large, many people are alive, making future births more likely (dependence).

## Stationary Increments

The distribution of the number of events in any interval depends **only on the length** of the interval, not on when it starts. The number of events in $(s, s+t)$ has the same distribution for all $s$.

**When reasonable**: Events occurring at a constant underlying rate with no time-of-day effects.

**When unreasonable**: Store customers with rush hours, or a soccer player who scores more in their prime years than later.

## Key Insight

Not all [[3 Reference/counting-process_202604031839\|counting processes]] possess both properties. The [[3 Reference/poisson-process_202604031845\|Poisson Process]] is the canonical example that has both.
