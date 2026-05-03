---
publish: true
aliases:
  - Static vs Const Variables
created: 2026-05-01T03:11:22.182+07:00
modified: 2026-05-01T03:12:02.441+07:00
published: 2026-05-01T03:12:02.441+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-05-01 03:11
status: in progress
parent:
  - "[[rust]]"
---

> Use `const` by default. Use `static` when you need a `'static` reference or shared global state (e.g. `static LOGGER: OnceLock<Logger>`).

---

**`const`**: compile-time constant. Inlined at every use site. No fixed memory address.

```rust
const MAX: u32 = 100;
```

**`static`**: single instance with a fixed memory address for the program's lifetime. Can be referenced (`&'static`).

```rust
static GREETING: &str = "hello";
```

**`static mut`**: mutable static — requires `unsafe` to access.

---

Key differences:

|         | `const`             | `static`     |
| ------------------- | ------------ | ------------------------------- |
| Memory address      | No (inlined) | Yes (one location)              |
| `'static` reference | No           | Yes                             |
| Mutable             | No           | Yes (unsafe)                    |
| Interior mutability | No           | Yes (`Mutex`, `OnceLock`, etc.) |

