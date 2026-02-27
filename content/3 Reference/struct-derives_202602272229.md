---
publish: true
aliases:
  - When to use Struct Derives
created: 2026-02-27T22:29:14.481+07:00
modified: 2026-02-27T22:29:44.596+07:00
published: 2026-02-27T22:29:44.596+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-27 22:29
status: baby
parent:
  - "[[rust]]"
---


| Derive                      | When                                                                         |
| --------------------------- | ---------------------------------------------------------------------------- |
| `Debug`                     | Almost always — enables `{:?}` printing                                      |
| `Clone`                     | When copying the value makes semantic sense                                  |
| `Copy`                      | When type is small, stack-only, and implicit copy is fine (requires `Clone`) |
| `PartialEq` / `Eq`          | When equality comparison makes sense                                         |
| `PartialOrd` / `Ord`        | When ordering makes sense                                                    |
| `Hash`                      | When used as `HashMap`/`HashSet` key (requires `Eq`)                         |
| `Default`                   | When a sensible zero/empty value exists                                      |
| `Serialize` / `Deserialize` | When crossing API/file boundaries (via `serde`)                              |

**Practical default**: slap `#[derive(Debug, Clone)]` on almost everything. Add the rest as needed.
