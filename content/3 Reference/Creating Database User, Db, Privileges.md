---
{"publish":true,"created":"2025-07-24T11:50:56.308+07:00","modified":"2025-07-24T11:50:56.309+07:00","published":"2025-07-24T11:50:56.309+07:00","tags":["content-type/procedural"],"cssclasses":"","creation-time":"2025-03-31 03:07","status":"baby","parent":["[[sql]]"]}
---


```sql
CREATE DATABASE IF NOT EXISTS `sandbox`;
CREATE USER IF NOT EXISTS `sandbox`@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `sandbox`.* TO `sandbox`@'%';
FLUSH PRIVILEGES;
```
