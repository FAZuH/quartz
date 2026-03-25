---
publish: true
aliases:
  - Rust Memory Sections and Segments
created: 2026-03-25T15:22:40.617+07:00
modified: 2026-03-25T15:22:40.618+07:00
published: 2026-03-25T15:22:40.618+07:00
tags:
  - 
creation-time: 2026-02-03 07:39
status: in progress
parent:
  - "[[rust]]"
---

```
High addresses (0x7fff... for 64-bit architecture)
┌──────────────────┐
│   Kernel Space   │ ← OS kernel (not accessible)
├──────────────────┤
│      Stack       │ 1. Stack (grows DOWN)
│        ↓         │
│                  │
│   (unmapped)     │
│                  │
│        ↑         │
│      Heap        │ 2. Heap (grows UP)
├──────────────────┤ ← program break
│   .bss           │ 3. Uninitialized data (zero-init globals)
├──────────────────┤
│   .data          │ 4. Initialized data (mutable globals/statics)
├──────────────────┤
│   .rodata        │ 5. Read-only data (string literals, consts)
├──────────────────┤
│   .text          │ 6. Code (executable instructions)
├──────────────────┤
│   (reserved)     │
└──────────────────┘
Low addresses (0x0000...)
```

**In the binary file (ELF):**

- **Section** = `.text`, `.rodata`, `.data`, `.bss`
- Stored in the executable file on disk, and is loaded before the heap segment starting at the low address.

**In memory (running process):**

- **Segment** = mapped sections
- OS loads sections into memory segments

```rust
static GLOBAL: i32 = 42;

fn main() {
    let stack_var = 5;
    let heap_var = Box::new(10);
    
    println!("Code (.text):    {:p}", main as *const ());
    println!("RO data:         {:p}", "literal");
    println!("Data (.data):    {:p}", &GLOBAL);
    println!("Heap:            {:p}", heap_var);
    println!("Stack:           {:p}", &stack_var);
}
```
