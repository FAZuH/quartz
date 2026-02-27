---
publish: true
created: 2026-02-22T19:23:58.372+07:00
modified: 2026-02-22T19:23:58.372+07:00
published: 2026-02-22T19:23:58.372+07:00
cssclasses: ""
creation-time: 2025-02-28 16:28
status: baby
tags:
parent:
  - "[[object oriented programming]]"
---


## Association symbols

- **Extend**: empty triangle head
- **Implement**: empty triangle head, dash line
- **Abstract Name**: italic font

- **Association**: simple arrow
- **Depend**: simple arrow, dash line
- **Composition**: simple arrow, diamond back
	- Implies ownership
	- Contained object cannot exist without the container. e.g., `Transport` cannot function without `Engine`
- **Aggregation**: simple arrow, empty diamond back

In UML, here are the three relationship types with their key differences:

| Relationship    | Question                                | Example          | Notation                            |
| --------------- | --------------------------------------- | ---------------- | ----------------------------------- |
| **Association** | "Does A use/know B?"                    | Customer → Order | Simple arrow                        |
| **Aggregation** | "Does A have B, but B can exist alone?" | Team → Player    | Simple arrow<br>Empty diamond back  |
| **Composition** | "Does A own B, and B dies with A?"      | Car → Engine     | Simple arrow<br>Filled diamond back |
| **Extend**      |                                         |                  | Empty triangle head                 |
| **Implement**   |                                         |                  | Empty triangle head<br>Dashed line  |
