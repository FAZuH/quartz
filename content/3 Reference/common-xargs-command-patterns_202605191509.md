---
publish: true
aliases:
  - Common xargs Command Patterns
created: 2026-05-19T15:09:16.817+07:00
modified: 2026-05-19T17:03:58.719+07:00
published: 2026-05-19T17:03:58.719+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-05-19 15:09
status: in progress
parent:
  - "[[linux]]"
---

| Pattern              | Purpose                                          |
| -------------------- | ------------------------------------------------ |
| `xargs cmd`          | pass all args at once: `cmd a b c`               |
| `xargs -I {} cmd {}` | one-at-a-time with placeholder: `cmd a`, `cmd b` |
| `xargs -n2 cmd`      | batch by N: `cmd a b`, `cmd c d`                 |
| `xargs -P4 cmd`      | parallel with 4 workers                          |
| `xargs -0 cmd`       | null-delimited input (pair with `find -print0`)  |
| `xargs -r cmd`       | skip if input is empty (GNU only)                |
| `xargs -t cmd`       | print each command before running                |
| `xargs -p cmd`       | prompt before each command                       |
| `xargs -d'c' cmd`    | split input by character 'c'                     |

Common combos:

```bash
# safe filenames with spaces
find . -name "*.rs" -print0 | xargs -0 grep "foo"

# parallel processing
find . -name "*.log" | xargs -P8 -I {} gzip {}

# dry run
find . -type f | xargs -t -I {} echo mv {} {}.bak
```
