---
publish: true
aliases:
  - Mutable Type vs Mutable Binding
created: 2026-03-25T15:22:40.612+07:00
modified: 2026-03-25T15:22:40.612+07:00
published: 2026-03-25T15:22:40.612+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-03 07:20
status: in progress
parent:
  - "[[rust]]"
---

In types definitions, `mut T` doesn't exist. Only `&mut T`
- ✅ `&mut T`
- ❌ `mut T`

In variable bindings, `mut` is used like this:
- `let mut foo: T = ...`

Note that mut in type and variable bindings serve a distinctly different role:
- Types:
	- `&mut T` means **we borrow `T` mutably** - we are <u>guaranteed</u> exclusive mutable access.
	- Notice that `mut T` does not make sense in the first place, because <u>we already control mutability</u> via [[3 Reference/mutable-type-vs-mutable-binding_202602030720#Ownership rules]].
- Bindings:
	- `let mut` means the **value can be mutated**.
	- Allows lending to functions that accept `&mut T` arguments

We can rebind `T` as mutable, but we cannot convert `&T` to `&mut T`. (implied by point 1 of [[3 Reference/mutable-type-vs-mutable-binding_202602030720#Borrowing rules]].)
