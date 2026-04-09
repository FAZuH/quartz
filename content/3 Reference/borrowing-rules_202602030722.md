---
publish: true
aliases:
  - Borrowing Rules
created: 2026-04-09T23:07:39.019+07:00
modified: 2026-04-09T23:07:39.020+07:00
published: 2026-04-09T23:07:39.020+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-03 07:22
status: in progress
parent:
  - "[[rust]]"
---

> - For value `T`, there can only be <u>one `&mut T`</u> xor <u>any number `&T`</u>.
> - References must always be valid.

---

- At any given time, you can have <u>either</u> one mutable reference <u>or</u> any number of immutable references.
- References must always be valid.

Notice that this is very similar to the defintion of a data race (not to be confused with race condition):

> There is a "data race" when two or more pointers access the same memory location at the same time, where at least one of them is writing, and the operations are not synchronized.[^2]
