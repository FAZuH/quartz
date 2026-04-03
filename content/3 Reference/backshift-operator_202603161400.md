---
publish: true
aliases:
  - Backshift Operator
created: 2026-03-29T17:33:47.074+07:00
modified: 2026-03-29T21:07:30.767+07:00
published: 2026-03-29T21:07:30.767+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

The backshift operator $B$ (or $L$ for [[3 Reference/lag-definition_202603161400\|lag]]) is defined such that:
$$B Z_t = Z_{t-1}$$
Repeating the operator shifts further back:
$$B^k Z_t = Z_{t-k}$$
It is used to simplify time series equations into polynomials.
