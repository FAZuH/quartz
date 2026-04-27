---
publish: true
aliases:
  - Rust String Parameter Types
created: 2026-04-27T19:14:20.925+07:00
modified: 2026-04-27T19:14:31.502+07:00
published: 2026-04-27T19:14:31.502+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-04-27 19:14
status: in progress
parent:
  - "[[rust]]"
---

|Type|Owned alloc?|Accepts|Use when|
|---|---|---|---|
|`&str`|No|string slices only|you only read, no conversion needed|
|`impl AsRef<str>`|No|`&str`, `String`, `Cow<str>`|read-only, zero-cost generic|
|`impl Into<String>`|Yes, on call|`&str`, `String`|you need to store/own it|
|`impl ToString`|Yes, always|anything with `Display`|avoid — always allocates|
|`Cow<'a, str>`|Sometimes|borrowed or owned|you want to delay allocation|
|`String`|Yes|`String` only|explicit, just take ownership|

**Practical rules:**

- Just reading → `&str` or `impl AsRef<str>`
- Need to own/store → `impl Into<String>` (call `.into()` inside)
- Avoid `impl ToString` — it always allocates, use `impl Display` if you need formatting
- `Cow<str>` is niche — useful when you sometimes need to mutate/own and sometimes don't

**Most common correct pattern:**

```rust
// read only
fn foo(s: impl AsRef<str>) {
    let s = s.as_ref();
}

// store it
fn foo(s: impl Into<String>) {
    let s = s.into();
}
```
