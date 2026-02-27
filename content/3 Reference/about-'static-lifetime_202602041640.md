---
publish: true
aliases:
  - About 'static lifetime
created: 2026-02-22T19:23:58.373+07:00
modified: 2026-02-22T19:23:58.373+07:00
published: 2026-02-22T19:23:58.373+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-04 16:40
status: baby
parent:
  - "[[rust]]"
---

- `&'static T`: Valid forever
- `T: static`: No references 

---

`'static` means, the data:

- `&'static T`: Is <u>valid</u> for the entire program duration (like string literals in the binary)
- `T: static`: Doesn't contain any <u>references</u> with shorter lifetimes

A `String` or `Vec<i32>` is `T: 'static` (no borrowed data), but gets deallocated when dropped.

String literals are `&'static T` because the data is stored in `.rodata` segment of memory, not in the stack, thus is valid for the entire duration of the program.
