---
{"publish":true,"aliases":["Arc vs Mutex vs RwLock"],"created":"2025-07-25T07:12:39.710+07:00","modified":"2025-07-25T07:12:46.357+07:00","published":"2025-07-25T07:12:46.357+07:00","cssclasses":"","creation-time":"2025-07-25 07:12","status":"baby","tag":null,"parent":"[[rust]]"}
---


| Type             | Purpose                                                                           | Thread Safety | Use Case                                                                          | Performance                                  |
| ---------------- | --------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------- | -------------------------------------------- |
| **`Arc<T>`**     | Share ownership of data across threads with reference counting.                   | Yes           | Share immutable or shareable data across threads; no direct mutation.             | Low overhead; atomic counter ops.            |
| **`Mutex<T>`**   | Protect shared data with mutual exclusion; allows one thread to access at a time. | Yes           | Exclusive access to mutable data; single-threaded writes with blocking.           | Locking overhead; blocks threads.            |
| **`RwLock<T>`**  | Allow multiple readers or one writer to access shared data.                       | Yes           | Multiple readers with occasional writes; read-heavy workloads.                    | More complex than `Mutex`; read/write locks. |
| **`Rc<T>`**      | Reference counting for single-threaded use; like `Arc` but not thread-safe.       | No            | Share data within a single thread; cheaper than `Arc`.                            | Lower overhead than `Arc` (non-atomic).      |
| **`RefCell<T>`** | Single-threaded runtime borrow checking for mutable data.                         | No            | Dynamic borrowing in single-threaded code; pairs with `Rc` for shared mutability. | Runtime borrow checks; no thread safety.     |



