---
publish: true
aliases:
  - dyn Trait vs impl Trait
created: 2026-03-25T15:22:40.620+07:00
modified: 2026-03-25T15:22:40.620+07:00
published: 2026-03-25T15:22:40.620+07:00
creation-time: 2026-02-03 08:34
status: in progress
tags:
parent:
  - "[[rust]]"
---

> | Feature          | `impl Trait`              | `dyn Trait`           |
> | ---------------- | ------------------------- | --------------------- |
> | Dispatch         | Static (compile-time)     | Dynamic (runtime)     |
> | Performance      | Slightly faster           | One indirection       |
> | Code size        | Larger (monomorphization) | Smaller               |
> | Collection types | Homogeneous only          | Heterogeneous         |
> | Type known at    | Compile time              | Runtime               |
> | Size             | Type-dependent            | 2 words (fat pointer) |

---

## Syntax

**`&dyn Trait` / `&mut dyn Trait`**: Trait object (dynamic dispatch)

```rust
fn process(x: &dyn Display) { }
```

**`impl Trait`**: Static dispatch

```rust
fn process(x: impl Display) { }
```

**Generics `<T: Trait>`**: Also static dispatch (equivalent to `impl Trait` in parameters)

```rust
fn process<T: Display>(x: T) { }
```

## Examples

### `dyn Trait`

When: Heterogeneous collections or runtime type choice

```rust
// Store different types in same collection
struct App {
    plugins: Vec<Box<dyn Plugin>>,  // Can't know types at compile time
}

// Each plugin are different types that implements trait Plugin
app.plugins.push(Box::new(AudioPlugin));
app.plugins.push(Box::new(NetworkPlugin));
app.plugins.push(Box::new(DatabasePlugin));

for plugin in &app.plugins {
    plugin.execute();
}
```

```rust
// Store different types in same collection
let v: Vec<Box<dyn Display>> = vec![
    Box::new(42),  da      // i32
    Box::new("hello"),   // &str
    Box::new(3.14),      // f64
];
```

```rust
// Runtime decision
let x: Box<dyn Display> = if condition {
    Box::new(42)
} else {
    Box::new("text")
};
```

### `impl Trait`

When: Each call site uses one specific type

```rust
// Just need "A thing that implements Display"
fn log(msg: impl Display) {
    println!("[LOG] {}", msg);
}

log(42);        // This call site: i32
log("error");   // This call site: &str
// Each call knows its exact type
```

```rust
// Cannot do this with impl:
let v: Vec<Box<impl Display>> = ...;  // ERROR: what type is impl?
// Vec can only hold ONE concrete type
```

## Internal Implementation

### `dyn Trait` (Dynamic Dispatch)

Fat pointer (2 words):

- Pointer to data
- Pointer to vtable (virtual method table)

Vtable contains function pointers for each trait method.

```rust
let x: &dyn Display = &42;
println!("{}", x);
```

> [!NOTE]
> It is called _dynamic_ because the compiler doesn't know which function it's calling until runtime, when it follows the vtable pointer.
>
> Each type has its own implementation of the trait methods. The vtable stores pointers to these different implementations.

> [!NOTE]
> Vtables are created at compile time and stored in the binary's read-only data section. Each vtable correspond to a single trait impl definition.

Runtime:

1. Dereference vtable pointer
2. Look up `fmt` function pointer in vtable
3. Call function via pointer

- Slower (one indirection)
- Single compiled function

### `impl Trait` (Static Dispatch)

Compiler generates separate function for each type:

```rust
fn log(msg: impl Display) { println!("{}", msg); }

log(42);
log("hi");
```

Compiles to (conceptually):

```rust
fn log_i32(msg: i32) { println!("{}", msg); }
fn log_str(msg: &str) { println!("{}", msg); }

log_i32(42);
log_str("hi");
```

- Direct function calls
- Fast
- Longer compile times with many types

### Memory Layout

For brevity, `&` implies `&mut` here.

- `&dyn Display`: 2 words (data ptr + vtable ptr) - **fat pointer**
- `&impl Display`: 1 word (just the pointer to the value) - **thin pointer**
- `impl Display` : size\_of::\<ConcreteDisplay>()
