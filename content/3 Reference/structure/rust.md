---
publish: true
aliases:
  - Rust
created: 2026-03-25T15:22:40.621+07:00
modified: 2026-06-04T15:11:51.339+07:00
published: 2026-06-04T15:11:51.339+07:00
tags:
  - type/category
creation-time: 2025-07-15 23:18
status: in progress
parent:
  - "[[computers]]"
---

**Conceptual**

- [[modules_202507160129|Modules]]
- [[macros_202507160139|Macros]]
- [[ownership_202601251602|Rules of Borrowing]]
  - [[borrowing_202507160048|Borrowing]]
  - [[lifetime_202507231852|Lifetime]]
- [[mutability_202507160121|Mutability]]
- [[variable-shadowing_202602030710|Variable Shadowing]]
- [[partial-move_202602030716|Partial Move]]
- [[unit-struct_202602030715|Unit Struct]]
- [[stack-vs-heap-performance_202602030718|Stack vs Heap Performance]]
- Generic types and generic lifetimes
  - [[about-'static-lifetime_202602041640|About 'static lifetime]]
  - [[mutable-type-vs-mutable-binding_202602030720|Mutable Type vs Mutable Binding]]
  - [[t-is-a-superset-of-disjoint-sets-&t-and-&mut-t_202602030721|T is a superset of disjoint sets &T and &mut T]]
  - [[&'static-t-is-different-from-t-'static_202602030735|&'static T is different from T: 'static]]
  - [[&'a-t-is-different-from-t-'a_202602030736|&'a T is different from T: 'a]]
  - [[dyn-trait-vs-impl-trait|dyn Trait vs impl Trait]]
- [[associated-type-vs-type-parameter_202604251729|Associated Type vs Type Parameter]]
- [[static-vs-const-variables_202605010311|Static vs Const Variables]]
- [[blanket-impl-for-t-vs-for-&t-and-&mut-t_202605010009|Blanket Impl for T vs for &T and &mut T]]

**Referential**

- [[marker-traits_202507301112|Marker Traits]]
- [[arc-vs-mutex-vs-rwlock_202507250712|Arc vs Mutex vs RwLock]]
- [[data-types_202602030713|Data Types]]
- [[ownership-rules_202602030719|Ownership Rules]]
- [[borrowing-rules_202602030722|Borrowing Rules]]
- Memory
  - [[rust-memory-sections-and-segments_202602030739|Rust Memory Sections and Segments]]
  - [[integer-overflow_202602030714|Integer Overflow]]
  - [[segmentation-fault-in-rust_202601241918|Segmentation Fault in Rust]]
- [[struct-derives_202602272229|When to use Struct Derives]]
- [[async-terms_202602281835|Async Terms]]
- [[panicking-in-drop_202602281836|Panicking in Drop]]
- [[rust-string-parameter-types_202604271914|Rust String Parameter Types]]
- [Rust Docstring Conventions](https://rust-lang.github.io/rfcs/1574-more-api-documentation-conventions.html#appendix-a-full-conventions-text)
- [[rust-expressions-vs-statements_202606041511|Rust Expressions vs Statements]]

**Collections**

- [[general-notes_202507160127|General Notes]]
- [[common-result-methods_202507160037|Common Result Methods]]
- [[common-option-methods_202507170231|Common Option Methods]]

## All notes

- 2026-06-04: [[3 Reference/rust-expressions-vs-statements_202606041511.md|Rust Expressions vs Statements]]
- 2026-05-01: [[3 Reference/static-vs-const-variables_202605010311.md|Static vs Const Variables]]
- 2026-05-01: [[3 Reference/blanket-impl-for-t-vs-for-&t-and-&mut-t_202605010009.md|Blanket Impl for T vs for &T and &mut T]]
- 2026-04-27: [[3 Reference/rust-string-parameter-types_202604271914.md|Rust String Parameter Types]]
- 2026-04-25: [[3 Reference/associated-type-vs-type-parameter_202604251729.md|Associated Type vs Type Parameter]]
- 2026-02-28: [[3 Reference/panicking-in-drop_202602281836.md|Panicking in Drop]]
- 2026-02-28: [[3 Reference/async-terms_202602281835.md|Async Terms]]
- 2026-02-27: [[3 Reference/struct-derives_202602272229.md|When to use Struct Derives]]
- 2026-02-04: [[3 Reference/about-'static-lifetime_202602041640.md|About 'static lifetime]]
- 2026-02-03: [[3 Reference/structure/dyn-trait-vs-impl-trait.md|dyn Trait vs impl Trait]]
- 2026-02-03: [[3 Reference/rust-memory-sections-and-segments_202602030739.md|Rust Memory Sections and Segments]]
- 2026-02-03: [[3 Reference/&'a-t-is-different-from-t-'a_202602030736.md|&'a T is different from T: 'a]]
- 2026-02-03: [[3 Reference/&'static-t-is-different-from-t-'static_202602030735.md|&'static T is different from T: 'static]]
- 2026-02-03: [[3 Reference/borrowing-rules_202602030722.md|Borrowing Rules]]
- 2026-02-03: [[3 Reference/t-is-a-superset-of-disjoint-sets-&t-and-&mut-t_202602030721.md|T is a superset of disjoint sets &T and &mut T]]
- 2026-02-03: [[3 Reference/mutable-type-vs-mutable-binding_202602030720.md|Mutable Type vs Mutable Binding]]
- 2026-02-03: [[3 Reference/ownership-rules_202602030719.md|Ownership Rules]]
- 2026-02-03: [[3 Reference/stack-vs-heap-performance_202602030718.md|Stack vs Heap Performance]]
- 2026-02-03: [[3 Reference/partial-move_202602030716.md|Partial Move]]
- 2026-02-03: [[3 Reference/unit-struct_202602030715.md|Unit Struct]]
- 2026-02-03: [[3 Reference/integer-overflow_202602030714.md|Integer Overflow]]
- 2026-02-03: [[3 Reference/data-types_202602030713.md|Data Types]]
- 2026-02-03: [[3 Reference/variable-shadowing_202602030710.md|Variable Shadowing]]
- 2026-01-25: [[3 Reference/ownership_202601251602.md|Rules of Borrowing]]
- 2026-01-24: [[3 Reference/segmentation-fault-in-rust_202601241918.md|Segmentation Fault in Rust]]
- 2025-07-30: [[3 Reference/marker-traits_202507301112.md|Marker Traits]]
- 2025-07-25: [[3 Reference/arc-vs-mutex-vs-rwlock_202507250712.md|Arc vs Mutex vs RwLock]]
- 2025-07-23: [[3 Reference/lifetime_202507231852.md|Lifetime]]
- 2025-07-17: [[3 Reference/common-option-methods_202507170231.md|Common Option Methods]]
- 2025-07-16: [[3 Reference/macros_202507160139.md|Macros]]
- 2025-07-16: [[3 Reference/modules_202507160129.md|Modules]]
- 2025-07-16: [[3 Reference/general-notes_202507160127.md|General Notes]]
- 2025-07-16: [[3 Reference/mutability_202507160121.md|Mutability]]
- 2025-07-16: [[3 Reference/borrowing_202507160048.md|Borrowing]]
- 2025-07-16: [[3 Reference/common-result-methods_202507160037.md|Common Result Methods]]
