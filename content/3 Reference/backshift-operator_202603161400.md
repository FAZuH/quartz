---
publish: true
aliases:
  - Backshift Operator
created: 2026-03-16T11:09:40.083+07:00
modified: 2026-03-16T11:09:40.083+07:00
published: 2026-03-16T11:09:40.083+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

The backshift operator $B$ (or $L$ for lag) is defined such that:
$$B Z_t = Z_{t-1}$$
Repeating the operator shifts further back:
$$B^k Z_t = Z_{t-k}$$
It is used to simplify time series equations into polynomials.
