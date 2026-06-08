---
publish: true
aliases:
  - When to use Struct Derives
created: 2026-04-09T23:07:39.616+07:00
modified: 2026-04-13T17:47:51.968+07:00
published: 2026-04-13T17:47:51.968+07:00
tags:
  - 
creation-time: 2026-02-27 22:29
status: in progress
parent:
  - "[[rust]]"
---

| Derive                      | When                                                                         |
| --------------------------- | ---------------------------------------------------------------------------- |
| `Debug`                     | Almost always — enables `{:?}` printing                                      |
| `Clone`                     | When <u>copying</u> the value makes semantic sense                           |
| `Copy`                      | When type is small, stack-only, and implicit copy is fine (requires `Clone`) |
| `PartialEq` / `Eq`          | When <u>equality</u> comparison makes sense                                  |
| `PartialOrd` / `Ord`        | When <u>ordering</u> makes sense                                             |
| `Hash`                      | When used as `HashMap`/`HashSet` key (requires `Eq`)                         |
| `Default`                   | When a sensible zero/empty value exists                                      |
| `Serialize` / `Deserialize` | When crossing API/file boundaries (via `serde`)                              |

**Practical default**: slap `#[derive(Debug, Clone)]` on almost everything. Add the rest as needed.

Not using common derives may cause problems to our crate users due to orphan rules - we cannot implement external traits (derives in this case) to external structs (our crate), so the user of our crate must do some workarounds such as using wrapper structs (newtype pattern).
