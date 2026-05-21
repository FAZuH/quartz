---
publish: true
aliases:
  - Types of Censoring
created: 2026-04-09T23:07:38.968+07:00
modified: 2026-05-19T11:10:35.368+07:00
published: 2026-05-19T11:10:35.368+07:00
cssclasses: ""
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
   - Progressive: Different fixed censoring times $C_i$ assigned at start
   
2. **Type II (Failure Censoring)**: Study ends when $d$ events occur among $n$ subjects.
   - Simple: Stops at the $d$-th failure
   - Progressive: Some survivors removed at intermediate event times

3. **Competing Risk**: Multiple event types; one event prevents observation of others.

### Left Censoring

Event occurred <u>before</u> study started but exact time unknown.

### Interval Censoring

Event known to occur within an <u>interval</u> $[L, R]$.

### Double Censoring

Dataset contains both left-censored and right-censored observations.

## Examples

### Right Censoring, Type I (Fixed Time)

**Clinical Trial**: 30 patients treated for heart disease, observed for 6 years. Only 10 had strokes during the study. The other 20 are <u>right-censored (type I)</u> — we know they survived at least 6 years but don't know when (or if) they will have a stroke.

### Right Censoring, Type II (Failure Count)

**Carcinogen Study**: 40 mice injected with carcinogen, observed until 25 show disease symptoms. The remaining 15 mice are <u>right-censored (type II)</u> — they may develop disease later but we stopped before observing it.

### Left Censoring + Right Censoring (Double Censoring)

**Survey**: Children asked when they started using gadgets. Some cannot remember exact time (<u>left-censored</u>), some started during the study (observed), some haven't started yet (<u>right-censored</u>).

## Comparison with Truncation

| Feature | Censoring | Truncation |
| :--- | :--- | :--- |
| **Nature** | Missing information about exact time | Selection bias by study design |
| **Awareness** | Researcher knows subject exists | Researcher may not know excluded subjects exist |
| **Likelihood** | Uses $f(t)$ for events, $S(t)$ for censored | Uses conditional probabilities |

## Related

- [[3 Reference/def-censored-data_202603281500\|Censored Data]]
- [[3 Reference/about-truncation-types_202603281500\|Types of Truncation]]