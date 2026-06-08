---
publish: true
aliases:
  - Abstract Factory
created: 2026-05-15T07:35:05.862+07:00
modified: 2026-06-03T11:09:18.119+07:00
published: 2026-06-03T11:09:18.119+07:00
tags:
  - 
creation-time: 2026-05-15 07:35
status: in progress
parent:
  - "[[design-patterns_202605121551|Design Patterns]]"
---

## About

Suppose we have different kind of furnitures: Chair, Table, Bed. Each furniture with different variants: Art Deco, Victorian, Modern.

Usually clients wants to buy different furnitures but from one variant only.

**Abstract Factory** is an "extension" of [[factory-method_202605121919|Factory Method]] that allows us to group factory method of the same variants of Products in one place.

With **Abstract Factory**, clients can choose a factory that can produce different furnitures but only for one variant - each factories "group" different furnitures for a variant.

## Structure

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	class ProductA {
		<<interface>>
	}
	class ProductB {
		<<interface>>
	}
	
	class ProductA1 { }
	class ProductB1 { }
	class ProductA2 { }
	class ProductB2 { }
	
	class Factory {
		<<interface>>
		+createProductA() ProductA
		+createProductB() ProductB
	}
	
	class ConcreteFactoryX {
		+createProductA() ProductA
		+createProductB() ProductB
	}
	class ConcreteFactoryY {
		+createProductA() ProductA
		+createProductB() ProductB
	}
	
	class Client {
		-Factory factory
		+new(Factory factory)
	}
	
	Factory <|.. ConcreteFactoryX
	Factory <|.. ConcreteFactoryY
	
	ProductA <|.. ProductA1
	ProductB <|.. ProductB1
	ProductA2 ..|> ProductA
	ProductB2 ..|> ProductB
	
	Factory ..> ProductA
	Factory ..> ProductB
	
	Client --> Factory
```

## Notes

use this often in repositories/data layer. I have a `Repository` for each table in our db, and we want to aggregate all repository for a single data backend in one interface. I aggregate it to `Repositories`, which in this pattern is a `Factory` of `Repository`. For an sqlite database, it'd be `SqliteRepositories`

If we want to add more data backends such as S3, I can create another object that implements `Repositories`, such as `S3Repositories`
