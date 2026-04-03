---
publish: true
aliases:
  - T is a superset of disjoint sets &T and &mut T
created: 2026-03-25T15:22:40.613+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-03 07:21
status: in progress
parent:
  - "[[rust]]"
---


- `T`, `&T`, and `&mut T` are all infinite sets, since it's possible to borrow a type ad-infinitum.
- `T` is a superset of both `&T` and `&mut T`.
- `&T` and `&mut T` are disjoint sets.

(from [^1])

```rust
trait Trait {}
impl<T> Trait for &T {}
impl<T> Trait for &mut T {}
```

| **Type Variable** | `T`                                                      | `&T`                              | `&mut T`                                      |
| ----------------- | -------------------------------------------------------- | --------------------------------- | --------------------------------------------- |
| **Examples**      | `i32`, `&i32`, `&mut i32`, `&&i32`, `&mut &mut i32`, ... | `&i32`, `&&i32`, `&&mut i32`, ... | `&mut i32`, `&mut &mut i32`, `&mut &i32`, ... |



[^1]: https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md#1-t-only-contains-owned-types