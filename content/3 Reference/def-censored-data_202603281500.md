---
publish: true
aliases:
  - Censored Data
created: 2026-03-28T14:50:58.899+07:00
modified: 2026-03-28T14:50:58.899+07:00
published: 2026-03-28T14:50:58.899+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Censored Data**: Incomplete observation data where the event hasn't occurred by the end of study.

- Event did not occur until end of study
- Sample unit no longer collectable before end of study

> <u>Mostly about not having enough information.</u>

## Types of Censoring

| Type | Whatwe know | What we don't know |
|------|-------------|---------------------|
| Right censored | Survived until time $C$ | If/when event occurred after $C$ |
| Left censored | Event occurred before study | Exactly when |
| Interval censored | Event occurred in $\[L, R]$ | Exact time |

##Related

- [[def-truncated-data_202603281500|Truncated Data]]
- [[about-censoring-types_202603281500|Types of Censoring in Detail]]
