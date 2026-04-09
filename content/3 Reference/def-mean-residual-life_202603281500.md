---
publish: true
aliases:
  - Mean Residual Life
created: 2026-04-09T23:07:39.223+07:00
modified: 2026-04-09T23:07:39.225+07:00
published: 2026-04-09T23:07:39.225+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Mean Residual Life $mrl(t)$**: 
$$mrl(t) = E[T - t \mid T > t] = \frac{\int_t^\infty S(u)du}{S(t)}$$

The <u>expected remaining time</u> after surviving $t$.

## About Mean Residual Life

Interpreting $E[T-t]$ given $T > t$:

- $T - t$: How much time remains from now ($t$) until the event $(T)$
- $E[T - t]$: Mean of time left (survival time)

It's basically the <u>mean of remaining time left before event occurs</u>.

## Related

- [[3 Reference/theorem-mean-residual-life-formula_202603281500\|Mean Residual Life Formula Derivation]]
- [[3 Reference/def-survival-function_202603281500\|Survival Function]]