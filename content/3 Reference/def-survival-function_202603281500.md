---
publish: true
aliases:
  - Survival Function
created: 2026-04-09T23:07:39.329+07:00
modified: 2026-04-09T23:07:39.330+07:00
published: 2026-04-09T23:07:39.330+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Survival Function $S(t)$**: 
$$S(t) = \Pr(T > t)$$

The <u>probability of surviving beyond time $t$</u>.

## Properties

- Monotonically decreasing
- $S(0) = 1$ (starts at 1)
- $\lim_{t\to\infty} S(t) = 0$ (approaches 0)

## Relationships

$$S(t) = 1 - F(t) = \exp[-H(t)]$$

where:
- $F(t)$ = cumulative distribution function
- $H(t)$ =cumulative hazard function

## Related

- [[3 Reference/def-hazard-function_202603281500\|Hazard Function]]
- [[3 Reference/def-cumulative-hazard_202603281500\|Cumulative Hazard]]