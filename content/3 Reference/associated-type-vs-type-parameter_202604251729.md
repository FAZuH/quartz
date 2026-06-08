---
publish: true
aliases:
  - Associated Type vs Type Parameter
created: 2026-04-25T17:29:03.352+07:00
modified: 2026-04-29T02:07:56.505+07:00
published: 2026-04-29T02:07:56.505+07:00
tags:
  - 
creation-time: 2026-04-25 17:29
status: in progress
parent:
  - "[[rust]]"
---

**Use type parameter** when a single type can implement the trait for _multiple_ different types, and the <u>caller</u> chooses which.

```rust
trait From<T> {
    fn from(val: T) -> Self; // String can impl From<&str>, From<i32>, etc.
}
```

**Use associated type** when there's exactly one logical "output" type for a given implementation — one impl of the trait = one concrete type. The type is determined by the <u>implementor</u>, not the caller.

```rust
trait Iterator {
    type Item; // one impl, one Item type. makes no sense to have Iterator<i32> and Iterator<String> on the same type
    fn next(&mut self) -> Option<Self::Item>;
}
```

The practical question to ask: "does it make sense for one type to implement this trait more than once with different types?" — yes → type param, no → associated type.
