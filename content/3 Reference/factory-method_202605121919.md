---
publish: true
aliases:
  - Factory Method
created: 2026-05-12T19:19:35.223+07:00
modified: 2026-05-12T20:08:28.324+07:00
published: 2026-05-12T20:08:28.324+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-05-12 19:19
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---


**Factory Method** is a creational design pattern that provides an interface for creating objects in a supertrait, but allows subtraits to alter the type of objects that will be created.

---

## Structure

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	namespace creator {
		class Creator {
			<<Abstract>>
			...
			+ someOperation()
			+ createProduct()* Product
		}
		
		class ConcreteCreatorA {
			...
			+ createProduct() Product
		}
		
		class ConcreteCreatorB {
			...
			+ createProduct() Product
		}
	}
	
	namespace product {
		class Product { <<Interface>> }
		class ConcreteProductA
		class ConcreteProductB
	}
	
	Creator <|-- ConcreteCreatorA
	Creator <|-- ConcreteCreatorB
	
	Product <|.. ConcreteProductA
	Product <|.. ConcreteProductB
	
	Creator --> Product
```

## Applicability

Use the Factory Method when you:

- <u>Don’t know beforehand the exact types</u> and dependencies of the objects your code should work with.
- Want to provide users of your library or framework with a way to <u>extend its internal components</u>.

	