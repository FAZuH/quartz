---
publish: true
aliases:
  - "&'static T is different from T: 'static"
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-03 07:35
status: in progress
parent:
  - "[[rust]]"
---

> Type <u>with</u> `static` $\neq$ type <u>bounded</u> by `static`

---

**&'static T**
- Is an <u>immutable reference to some `T` that can be safely held indefinitely</u> long (including up until the end of the program).
- `&'static T` if and only if `T` is immutable and does not move after the reference `&T` was created.

**T: 'static**
- Is <u>some `T` that can be safely held indefinitely</u> long (including up until the end of the program)
- `T: 'static` is a superset of `&'static T` and all owned types
- `T: 'static` should be read as _"`T` can live at least as long as a `'static` lifetime"_
