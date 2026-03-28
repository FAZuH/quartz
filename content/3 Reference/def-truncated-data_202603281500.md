---
publish: true
aliases:
  - Truncated Data
created: 2026-03-28T14:51:07.073+07:00
modified: 2026-03-28T14:51:07.074+07:00
published: 2026-03-28T14:51:07.074+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Truncated Data**: Data with left-truncation (subjects entered study after time 0).

Truncation is a **selection mechanism** by design. Only subjects who satisfy certain conditions regarding their survival time $T$ are included in the sample.

## Types of Truncation

1. **Left Truncation (Delayed Entry)**: Only subjects who have **not yet experienced the event** at time $T\_L$ are included.
   - Condition: $T > T\_L$

2. **Right Truncation**: Only subjects who have **already experienced the event** before time $T\_R$ are included.
   - Condition: $T < T\_R$

## Related

- [[def-censored-data_202603281500|Censored Data]]
