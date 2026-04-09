---
publish: true
aliases:
  - Types of Truncation
created: 2026-04-09T23:07:38.978+07:00
modified: 2026-04-09T23:07:38.979+07:00
published: 2026-04-09T23:07:38.979+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## About Truncation Types

**Truncation (Pemancungan)**: A **selection mechanism** by design. Only subjects satisfying certain conditions regarding their survival time $T$ are included.

### Left Truncation (Delayed Entry)

Subject <u>enters study after time 0</u>; only observed if $T \geq L$.

**Examples:**
- Nursing home: Subjects must survive long enough to enter
- Life insurance: Policyholders must be alive when signing up

### Right Truncation

Subject <u>exits study before event</u>; only observed if $T \leq R$.

**Example:** Historical death records—only people who have already died are included.

## Comparison with Censoring

| Feature | Censoring | Truncation |
| :--- | :--- | :--- |
| **Nature** | Missing information about exact time | Selection bias by study design |
| **Awareness** | Researcher knows subject exists | Researcher may not know excluded subjects exist |

## Related

- [[3 Reference/def-truncated-data_202603281500\|Truncated Data]]
- [[3 Reference/about-censoring-types_202603281500\|Types of Censoring]]