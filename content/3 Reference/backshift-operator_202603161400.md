---
publish: true
aliases:
  - Backshift Operator
created: 2026-04-09T23:07:39.010+07:00
modified: 2026-06-02T11:33:01.607+07:00
published: 2026-06-02T11:33:01.607+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

The backshift operator $B$ (or $L$ for [[lag-definition_202603161400|lag]]) is defined such that:
$B Z_t = Z_{t-1}$
Repeating the operator shifts further back:
$B^k Z_t = Z_{t-k}$
It is used to simplify time series equations into polynomials.

## Relation with Differencing

$$
(1-B)^{d} = \nabla^{d}
$$
