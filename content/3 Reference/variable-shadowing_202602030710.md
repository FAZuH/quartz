---
publish: true
aliases:
  - Variable Shadowing
created: 2026-02-22T19:24:22.944+07:00
modified: 2026-02-22T19:24:22.946+07:00
published: 2026-02-22T19:24:22.946+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-03 07:10
status: baby
parent:
  - "[[rust]]"
---


> When a variable is "overridden" or "stacked on top of" another variable due to having the same name.

---

Example:

```rust
fn main() {
	let x = 5;
	let x = x + 1;
	println!("{x}");
}
```

`x = 5` is no longer valid because it is **shadowed** by `x = x + 1`.

Shadowing can work with different types:

```rust
fn main() {
	let x: &str = "foobar";
	let x: Vec<i32> = vec![1, 2, 3];
	println!("{x:?}");
}
```