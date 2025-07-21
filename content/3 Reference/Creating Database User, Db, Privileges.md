---
{"publish":true,"tags":["content-type/procedural"],"cssclasses":""}
---


```sql
CREATE DATABASE IF NOT EXISTS `sandbox`;
CREATE USER IF NOT EXISTS `sandbox`@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `sandbox`.* TO `sandbox`@'%';
FLUSH PRIVILEGES;
```
