---
publish: true
aliases:
  - Integer Overflow
created: 2026-03-25T15:22:40.596+07:00
modified: 2026-03-25T15:22:40.596+07:00
published: 2026-03-25T15:22:40.596+07:00
tags:
  - 
creation-time: 2026-02-03 07:14
status: in progress
parent:
  - "[[rust]]"
---

When compiling a program in debug mode, <u>Rust add checks for integer overflows</u> that will panic if it occurs.

In `--release` mode, this check does not exist. The integer will overflow.

Methods of handling integer overflows include:

- Wrap in all modes with the `wrapping_*` methods, such as `wrapping_add`.
- Return the `None` value if there is overflow with the `checked_*` methods.
- Return the value and a Boolean indicating whether there was overflow with the `overflowing_*` methods.
- Saturate at the value’s minimum or maximum values with the `saturating_*` methods.
