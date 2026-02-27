---
publish: true
created: 2026-02-22T19:23:58.368+07:00
modified: 2026-02-22T19:23:58.368+07:00
published: 2026-02-22T19:23:58.368+07:00
cssclasses: ""
creation-time: 2025-03-08 22:42
status: baby
tags:
parent:
  - "[[sql]]"
---


- Source: https://dev.mysql.com/doc/refman/8.4/en/explain.html

The [`DESCRIBE`](https://dev.mysql.com/doc/refman/8.4/en/describe.html "15.8.1 DESCRIBE Statement") and [`EXPLAIN`](https://dev.mysql.com/doc/refman/8.4/en/explain.html "15.8.2 EXPLAIN Statement") statements are synonyms.

In practice, the [`DESCRIBE`](https://dev.mysql.com/doc/refman/8.4/en/describe.html "15.8.1 DESCRIBE Statement") keyword is more often used to obtain **information about table structure**.

Whereas [`EXPLAIN`](https://dev.mysql.com/doc/refman/8.4/en/explain.html "15.8.2 EXPLAIN Statement") is used to obtain a **query execution plan** (that is, an explanation of how MySQL would execute a query).

```sql
EXPLAIN SELECT * FROM `test`;
```
