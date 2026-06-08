---
publish: true
aliases:
  - Composite Design Pattern
created: 2026-06-03T14:10:01.531+07:00
modified: 2026-06-03T14:20:23.792+07:00
published: 2026-06-03T14:20:23.792+07:00
tags:
  - 
creation-time: 2026-06-03 14:10
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

Compose objects into tree structures and then work with these structures as if they were individual objects.

For example, using `Guild::message` to send message to each `GuildMember::message` in that guild through a trait `Messageable`.

## Structure

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	class Client
	
	class Component {
		<<interface>>
		+execute()
	}

	class Leaf {
		...
		+execute()
	}

	class Composite {
		-Component[] children
		+add(Component c)
		+remove(Component c)
		+getChildren() Component []
		+execute()
	}
	
	Client --> Component
	Component <|.. Leaf
	Component <|.. Composite
	Composite *--> Leaf
	
	note for Leaf "Do some work"
	note for Composite "Delegate all work
	to child components"
```
