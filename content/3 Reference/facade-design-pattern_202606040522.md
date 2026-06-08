---
publish: true
aliases:
  - Facade Design Pattern
  - Facade
created: 2026-06-04T05:22:50.988+07:00
modified: 2026-06-07T17:48:29.003+07:00
published: 2026-06-07T17:48:29.003+07:00
tags:
  - 
creation-time: 2026-06-04 05:22
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

**Facade** design pattern provides a simple interface for a complex implementation

Although the functionalities provided is limited, it includes features the client really care about.

This pattern is useful when you want to use a sophisticated library that has dozen of features, but you need only a tiny bit of its functionality.

It also decouples the "intent" with the actual implementation, so you can replace the library without breaking other code in your app.

## Structure

![[assets/facade-design-pattern_202606040522-1780525764690.webp]]
