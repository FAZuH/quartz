---
publish: true
aliases:
  - Gaussian Elimination
created: 2026-03-25T15:22:40.641+07:00
modified: 2026-03-25T15:22:40.641+07:00
published: 2026-03-25T15:22:40.641+07:00
creation-time: 2025-07-15 01:58
status: complete
tag:
parent:
  - "[[matrices]]"
  - "[[linear-algebra|linear algebra]]"
---

## Definition

**Gaussian elimination** is the procedure of using elementary row operation to transform an [[Def-augmented-matrix|augmented matrix]] to row echelon form.

This procedure consists of:

1. **Forward phase**: Zeros are introduced below the leading 1's
2. **Back-substitution**: Starting from the last equation, solve for variables by substituting known values into previous equations

## Remark

For large [[Def-linear-system|linear systems]], this is generally a more efficient [[Def-solution-of-linear-system|solution]].
