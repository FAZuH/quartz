---
publish: true
aliases:
  - Panicking in Drop
created: 2026-03-25T15:22:40.615+07:00
modified: 2026-03-25T15:22:40.615+07:00
published: 2026-03-25T15:22:40.615+07:00
tags:
  - 
creation-time: 2026-02-28 18:36
status: in progress
parent:
  - "[[rust]]"
---

| Scenario                         | Result                                              |
| -------------------------------- | --------------------------------------------------- |
| `drop()` runs normally           | Fine                                                |
| `drop()` runs during unwinding   | Fine, but `std::thread::panicking()` returns `true` |
| `drop()` panics during unwinding | Process aborts immediately                          |
| `drop()` panics normally         | Begins unwinding                                    |

## How Rust Handles Panics

When `panic!()` is called, Rust does not immediately terminate. Instead, it:

1. Sets a thread-local "this thread is panicking" flag
2. Begins **stack unwinding** — walking back up the stack calling `drop()` on every value in scope
3. Destructors run **during** unwinding, not after

This is why RAII works in Rust even under panics — destructors are guaranteed to run as long as `panic` strategy is set to `unwind` (not `abort`).

## Double Panic = Abort

If a `drop()` implementation panics while the thread is **already panicking**, Rust **aborts the process immediately**. No recovery via `catch_unwind`, no graceful exit — hard termination.

```rust
impl Drop for MyStruct {
    fn drop(&mut self) {
        panic!("oops"); // if thread is already panicking, this aborts the process
    }
}
```

## Rule: Never Panic in `Drop`

Because of double-panic abort, panicking in `Drop` is considered a serious bug. If your destructor does something fallible, handle errors silently.

```rust
impl Drop for MyStruct {
    fn drop(&mut self) {
        self.flush().unwrap(); // dangerous — aborts if called during unwinding
        self.flush().ok();     // correct — silently discards error
    }
}
```

## How MutexGuard Uses This

`MutexGuard` correctly leverages unwinding by checking `std::thread::panicking()` in its `Drop`:

```rust
impl<T> Drop for MutexGuard<T> {
    fn drop(&mut self) {
        if std::thread::panicking() {
            // set poison flag on the mutex
        }
        // unlock
    }
}
```

This is how `Mutex` detects that the thread holding the lock panicked — the guard's destructor runs during unwinding and checks the panic flag, poisoning the mutex so future callers know the protected data may be inconsistent.

## Real-World Example: BufWriter

`BufWriter` in std silently discards flush errors on drop. If it panicked instead, any `BufWriter` dropped during unwinding would abort the process. The tradeoff is silent data loss.

```rust
let mut w = BufWriter::new(file);
w.write_all(b"data").unwrap();
// if you don't explicitly flush, drop() will try to flush
// but if it fails, the error is silently discarded
w.flush().unwrap(); // always flush explicitly before drop
```
