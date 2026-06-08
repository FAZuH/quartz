---
publish: true
aliases:
  - Flyweight Design Pattern
created: 2026-06-06T15:27:38.264+07:00
modified: 2026-06-07T16:24:21.173+07:00
published: 2026-06-07T16:24:21.173+07:00
tags:
  - 
creation-time: 2026-06-06 15:27
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

**Flyweight** is a design pattern for reducing memory usage, by separating static, common values from an object's state.

The [source material](https://refactoring.guru/design-patterns/flyweight) introduces two relevant concepts for object state:

1. **Intrinsic** state: State data belonging to the object. Other objects can only read it, not modify it.
2. **Extrinsic** state: Data not belonging to the object. Often altered "from the outside" by other objects.

Flyweight pattern proposes that you extract extrinsic state, and pass it only as a function parameter instead of storing it in the object - only intrinsic state.

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

	class Context {
		-uniqueState
		-flyweight
		+Context(repeatingState, uniqueState)
		+operation()
	}
	
	class Flyweight {
		-repeatingState
		+operation(uniqueState)
	}
	
	class FlyweightFactory {
		-Flyweight[] cache
		+getFlyweight(repeatingState)
	}
	
	Client *--> Context
	Context <-- Flyweight
	Context <-- FlyweightFactory
	Flyweight <--* FlyweightFactory
	
	note for Context "operation() {
		flyweight.operation(**uniqueState**)
	}"
```
