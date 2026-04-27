---
publish: true
aliases:
  - Associated Type vs Type Parameter
created: 2026-04-25T17:29:03.352+07:00
modified: 2026-04-25T17:29:32.003+07:00
published: 2026-04-25T17:29:32.003+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-04-25 17:29
status: in progress
parent:
  - "[[rust]]"
---

**Type parameter** = `Database<C: Connection>` — the connection type is chosen by the <u>caller</u>. One type can implement `Database<PgConnection>` and `Database<SqliteConnection>` simultaneously.

**Associated type** = `type Conn: Connection` — the connection type is chosen by the <u>implementor</u>. One type has exactly one `Conn`.
