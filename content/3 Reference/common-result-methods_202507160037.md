---
{"publish":true,"aliases":"Common Result Methods","cssclasses":""}
---


- **unwrap()**: Return value if `Ok`, otherwise `E`
- **unwrap_or(T)**: Return value if `Ok`, otherwise default value
- **unwrap_or_else(F)**: Like `unwrap_or`, but with closure
- **expect(msg: &str)**: Like `unwrap`, but with custom err msg
- **map(F)**: Transform `Ok(T)` to `Ok(U)` with a closure
- **map_err(F)**: Transform `Err(T)` to `Err(U)` with a closure
- **and_then()**:  Chains operation, applying a closure to `Ok(T)` to produce another `Result`
- **or_else()**:  Like `and_then`, but for `Err(T)`
- **is_ok()**: Returns `true` if `Ok`, otherwise `false`
- **is_err()**: Returns `true` if `Err`, otherwise `false`