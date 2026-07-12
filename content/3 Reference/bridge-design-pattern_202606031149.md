---
publish: true
aliases:
  - Bridge Design Pattern
created: 2026-06-03T11:49:49.211+07:00
modified: 2026-06-09T18:25:04.073+07:00
published: 2026-06-09T18:25:04.073+07:00
tags:
  - 
creation-time: 2026-06-03 11:49
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

![[assets/bridge-design-pattern_202606031149-1780462222837.webp]]

The purpose of this pattern is to decouple client code from implementation, by providing a "**bridge**" between them. The client interacts calls <u>implementation</u> abstractly through the <u>abstraction</u> as a bridge.

This is useful when the "concept" being abstracted has different implementations.

For example, UI code across different platforms. In this case, the <u>implementation</u> is the concrete UI backends, and the <u>abstraction</u> is the UI display logic, which calls the implementation.

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
	
	namespace Bridge {
		class Abstraction {
			-Implementation i
			+feature1()
			+feature2()
		}
		
		class Implementation {
			<<interface>>
			+method1()
			+method2()
			+method3()
		}
	}
	
	class ConcreteImplA
	class ConcreteImplB
	
	Client --> Abstraction
	Abstraction *--> Implementation
	Implementation <|.. ConcreteImplA
	Implementation <|.. ConcreteImplB
```
