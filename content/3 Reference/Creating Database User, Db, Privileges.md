---
publish: true
created: 2026-04-09T23:07:39.079+07:00
modified: 2026-04-09T23:07:39.079+07:00
published: 2026-04-09T23:07:39.079+07:00
tags:
  - content-type/procedural
creation-time: 2025-03-31 03:07
status: in progress
parent:
  - "[[sql]]"
---

```sql
CREATE DATABASE IF NOT EXISTS `sandbox`;
CREATE USER IF NOT EXISTS `sandbox`@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `sandbox`.* TO `sandbox`@'%';
FLUSH PRIVILEGES;
```
