---
{"publish":true,"created":"2025-08-15T13:53:58.572+07:00","modified":"2025-08-15T13:53:58.573+07:00","published":"2025-08-15T13:53:58.573+07:00","tags":["content-type/procedural"],"cssclasses":"","creation-time":"2025-03-31 03:07","status":"baby","parent":["[[sql]]"]}
---


```sql
CREATE DATABASE IF NOT EXISTS `sandbox`;
CREATE USER IF NOT EXISTS `sandbox`@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `sandbox`.* TO `sandbox`@'%';
FLUSH PRIVILEGES;
```
