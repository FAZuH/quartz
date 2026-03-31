---
publish: true
aliases:
  - Types of Censoring
created: 2026-03-30T13:58:25.260+07:00
modified: 2026-03-30T13:58:25.260+07:00
published: 2026-03-30T13:58:25.260+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## About CensoringTypes

**Censoring (Penyensoran)**: When the <u>exact survival time is not fully observed</u>—only partial information is available.

### Right Censoring

Event time is <u>beyond</u> a certain point.

1. **Type I (Time Censoring)**: Study ends at a pre-determined time $\tau$.
   - Fixed: All subjects stop at the same time $\tau$
   - Progressive: Different fixed censoring times $C\_i$ assigned at start

2. **Type II (Failure Censoring)**: Study ends when $d$ events occur among $n$ subjects.
   - Simple: Stops at the $d$-th failure
   - Progressive: Some survivors removed at intermediate event times

3. **Competing Risk**: Multiple event types; one event prevents observation of others.

### Left Censoring

Event occurred <u>before</u> study started but exact time unknown.

### Interval Censoring

Event known to occur within an <u>interval</u> $\[L, R]$.

### Double Censoring

Dataset contains both left-censored and right-censored observations.

## Comparison with Truncation

| Feature | Censoring | Truncation |
| :--- | :--- | :--- |
| **Nature** | Missing information about exact time | Selection bias by study design |
| **Awareness** | Researcher knows subject exists | Researcher may not know excluded subjects exist |
| **Likelihood** | Uses $f(t)$ for events, $S(t)$ for censored | Uses conditional probabilities |

## Related

- [[def-censored-data_202603281500|Censored Data]]
- [[about-truncation-types_202603281500|Types of Truncation]]
