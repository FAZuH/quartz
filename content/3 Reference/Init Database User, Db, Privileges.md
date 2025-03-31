---
{"creation-time":"2025-03-31 03:07","status":"baby","tag":null,"parent":["[[sql]]"],"publish":true,"PassFrontmatter":true}
---


```sql
CREATE DATABASE IF NOT EXISTS `sandbox`;
CREATE USER IF NOT EXISTS `sandbox`@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `sandbox`.* TO `sandbox`@'%';
FLUSH PRIVILEGES;
```
