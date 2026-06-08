---
publish: true
aliases:
  - Blanket Impl for T vs for &T and &mut T
created: 2026-05-01T00:09:46.722+07:00
modified: 2026-05-01T00:11:49.859+07:00
published: 2026-05-01T00:11:49.859+07:00
tags:
  - 
creation-time: 2026-05-01 00:09
status: in progress
parent:
  - "[[rust]]"
---

You most likely want to blanket impl for `&T` and `&mut T` if the trait method consumes.

This is so that when the blanket impl is used for referential `T` and the method consumes, the reference is consumed, not the value itself.

```rust
// impl View for T  — the owned type itself implements View
impl View<Rect> for MyWidget { ... }
let w = MyWidget;
w.render(area); // MyWidget is consumed

// impl View for &T  — a reference to T implements View
impl View<Rect> for &MyWidget { ... }
let w = MyWidget;
(&w).render(area); // &MyWidget is consumed (but MyWidget is still alive)

// impl View for &mut T  — a mutable reference implements View
impl View<Rect> for &mut MyWidget { ... }
let mut w = MyWidget;
(&mut w).render(area); // &mut MyWidget is consumed (but MyWidget is still alive)
```
