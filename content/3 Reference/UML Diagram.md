---
{"creation-time":"2025-02-28 16:28","status":"baby","tag":null,"parent":["[[software architecture]]"],"publish":true,"PassFrontmatter":true}
---


## Association symbols

- **Extend**: empty triangle head
- **Implement**: empty triangle head, dash line
- **Abstract Name**: italic font

- **Association**: single arrow
- **Depend**: simple arrow, dash line
- **Composition**: simple arrow, diamond back
	- Implies ownership
	- Contained object cannot exist without the container. e.g., `Transport` cannot function without `Engine`
- **Aggregation**: simple arrow, empty diamond back
