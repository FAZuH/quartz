---
publish: true
aliases:
  - Common Option Methods
created: 2026-03-25T15:22:40.586+07:00
modified: 2026-03-25T15:22:40.586+07:00
published: 2026-03-25T15:22:40.586+07:00
creation-time: 2025-07-17 02:31
status: in progress
tag:
parent: "[[rust]]"
---

- **expect(msg: \&str) -> T**: Returns value if `Some`, panics with custom message if `None`

Panics. Returning T instead of Option\<T>

- **unwrap() -> T**: Returns value if `Some`, panics if `None`
- **unwrap\_or(T) -> T**: Returns value if `Some`, otherwise default value
- **unwrap\_or\_else(() -> T) -> T**: Like `unwrap_or`, but with closure
- **unwrap\_or\_default() -> T**: Returns value if `Some`, otherwise default value for type T (requires `Default` trait)

Modify Option\<T>. Closure returns U

- **map(T -> U) -> Option\<U>**: Transforms `Some(T)` to `Some(U)` with closure, `None` stays `None`
- **map\_or(U, T -> U) -> U**: Applies closure to `Some(T)` to get U, or returns default U if `None`
- **map\_or\_else(() -> U, T -> U) -> U**: Applies closure G to `Some(T)` to get U, or closure F to get U if `None`

Modify Option\<T>. Closure returns Option

- **and\_then(T -> Option\<U>) -> Option\<U>**: Chains operation, applying closure to `Some(T)` to produce another `Option`
- **filter(\&T -> bool) -> Option\<T>**: Returns `Some(T)` if closure returns `true`, otherwise `None`
- **flatten() -> Option\<U>**: Flattens `Option<Option<U>>` into `Option<U>`
- **or\_else(() -> Option\<T>) -> Option\<T>**: Returns `Some` if present, otherwise applies closure

Convert Option\<T> to Result\<T, E> using:

- **ok\_or(E) -> Result\<T, E>**: Returns `Ok(T)` if `Some`, otherwise `Err(E)` with provided error.
- **ok\_or\_else(() -> E) -> Result\<T, E>**: Like `ok_or`, but error is computed by closure if `None`.

Combine

- **and(Option\<U>) -> Option\<U>**: Returns input `Option` if both are `Some`, otherwise `None`
- **or(Option\<T>) -> Option\<T>**: Returns first `Some`, otherwise last `None`

Check

- **is\_some() -> bool**: Returns `true` if `Some`, otherwise `false`
- **is\_none() -> bool**: Returns `true` if `None`, otherwise `false`
- **contains(U) -> bool**: Returns `true` if `Some` and value equals U, otherwise `false`
