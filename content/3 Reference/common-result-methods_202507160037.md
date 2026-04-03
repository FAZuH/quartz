---
publish: true
aliases:
  - Common Result Methods
created: 2026-03-25T15:22:40.618+07:00
modified: 2026-03-25T15:22:40.618+07:00
published: 2026-03-25T15:22:40.618+07:00
cssclasses: ""
creation-time: 2025-07-16 00:37
status: in progress
tag:
parent: "[[rust|Rust]]"
---


- **expect(msg: &str)**: Like `unwrap`, but with custom err msg
- **expect_none(msg: &str)**: Panics with custom message if `Err`, expects `None` for `Option` (used with `Result<Option<T>, E>`)

Panics. Returning T instead of Result\<T, E>
- **unwrap()**: Return value if `Ok`, otherwise panics
- **unwrap_or(T) -> T**: Return value if `Ok`, otherwise default value
- **unwrap_or_else(() -> T) -> T**: Like `unwrap_or`, but with closure
- **unwrap_or_default() -> T**: Returns value if `Ok`, otherwise default value for type T (requires `Default` trait)

Modify Result\<T, E>. Closure returns U
- **map(T -> U) -> Result<U, E>**: Transform `Ok(T)` to `Ok(U)` with a closure
- **map_err(E -> U) -> Result<T, U>**: Transform `Err(T)` to `Err(U)` with a closure
- **map_or(U, T -> U) -> U**: Applies closure to `Ok(T)` to get U, or returns default U if `Err`
- **map_or_else(E -> U, T -> U) -> U**: Applies closure G to `Ok(T)` to get U, or closure F to `Err(E)` to get U

Modify Result\<T, E>. Closure returns Result
- **and_then(T -> Result<U, E>) -> Result<U, E>**:  Chains operation, applying a closure to `Ok(T)` to produce another `Result`
- **or_else(E -> Result<U, E>) -> Result<U, E>**:  Like `and_then`, but for `Err(T)`
- **flatten() -> Result<U, E>**: Flattens `Result<Result<U, E>, E>` into `Result<U, E>`
- **transpose() -> Option<Result<T, E>>**: Converts `Result<Option<T>, E>` to `Option<Result<T, E>>`

Combine
- **and(Result<U, E>) -> Result<U, E>**: Returns input `Result` if both are `Ok`, otherwise first `Err`
- **or(Result<T, F>) -> Result<T, F>**: Returns first `Ok`, otherwise last `Err`

Check
- **is_ok()**: Returns `true` if `Ok`, otherwise `false`
- **is_err()**: Returns `true` if `Err`, otherwise `false`
- **contains(U) -> bool**: Returns `true` if `Ok` and value equals U, otherwise `false`
- **contains_err(U) -> bool**: Returns `true` if `Err` and error equals U, otherwise `false`

